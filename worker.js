const THREAD_KEY = "thread";
const MAX_MESSAGES = 200;

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
}

async function loadThread(env) {
  const raw = await env.DM_KV.get(THREAD_KEY);
  if (!raw) return [];
  try {
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

async function saveThread(env, thread) {
  const trimmed = thread.slice(-MAX_MESSAGES);
  await env.DM_KV.put(THREAD_KEY, JSON.stringify(trimmed));
}

async function handleGetMessages(env) {
  const thread = await loadThread(env);
  return json({ messages: thread });
}

async function handleVisitorMessage(request, env) {
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "invalid_json" }, 400);
  }
  const text = (body && body.text || "").toString().trim().slice(0, 500);
  const where = (body && body.where || "unknown").toString().slice(0, 80);
  if (!text) return json({ error: "empty_text" }, 400);

  const now = new Date();
  const entry = {
    id: crypto.randomUUID(),
    who: "visitor",
    text,
    where,
    ts: now.toISOString(),
  };

  const thread = await loadThread(env);
  thread.push(entry);
  await saveThread(env, thread);

  // fire-and-forget notification to Discord; failure here shouldn't fail the visitor's request
  try {
    if (!env.DISCORD_WEBHOOK_URL) throw new Error("DISCORD_WEBHOOK_URL not configured");
    await fetch(env.DISCORD_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content:
          "**새 방문자 메시지**\n> " +
          text +
          "\n\n위치: `" +
          where +
          "`  ·  시각: " +
          now.toLocaleString("ko-KR", { timeZone: "Asia/Seoul" }),
      }),
    });
  } catch (e) {
    // ignore — the message is already saved and visible on-site
  }

  return json({ ok: true, entry });
}

function checkPassword(env, candidate) {
  const expected = (env.ADMIN_PASSWORD || "").trim();
  return !!expected && candidate.trim() === expected;
}

async function handleReply(request, env) {
  const password = request.headers.get("X-Admin-Password") || "";
  if (!checkPassword(env, password)) {
    return json({ error: "unauthorized" }, 401);
  }
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "invalid_json" }, 400);
  }
  const text = (body && body.text || "").toString().trim().slice(0, 500);
  if (!text) return json({ error: "empty_text" }, 400);

  const entry = {
    id: crypto.randomUUID(),
    who: "jun",
    text,
    ts: new Date().toISOString(),
  };
  const thread = await loadThread(env);
  thread.push(entry);
  await saveThread(env, thread);
  return json({ ok: true, entry });
}

async function handleDeleteMessage(request, env) {
  const password = request.headers.get("X-Admin-Password") || "";
  if (!checkPassword(env, password)) {
    return json({ error: "unauthorized" }, 401);
  }
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "invalid_json" }, 400);
  }
  const id = (body && body.id || "").toString();
  if (!id) return json({ error: "missing_id" }, 400);

  const thread = await loadThread(env);
  const next = thread.filter((m) => m.id !== id);
  await saveThread(env, next);
  return json({ ok: true });
}

async function handleAdminAuth(request, env) {
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "invalid_json" }, 400);
  }
  const password = (body && body.password || "").toString();
  const ok = checkPassword(env, password);
  return json({ ok });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/messages") {
      if (request.method === "GET") return handleGetMessages(env);
      if (request.method === "POST") return handleVisitorMessage(request, env);
      return json({ error: "method_not_allowed" }, 405);
    }

    if (url.pathname === "/api/reply" && request.method === "POST") {
      return handleReply(request, env);
    }

    if (url.pathname === "/api/delete-message" && request.method === "POST") {
      return handleDeleteMessage(request, env);
    }

    if (url.pathname === "/api/admin-auth" && request.method === "POST") {
      return handleAdminAuth(request, env);
    }

    return env.ASSETS.fetch(request);
  },
};
