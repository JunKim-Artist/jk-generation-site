(function(){
  "use strict";

  // SONGS is defined in songs.js, loaded before this file

  function placeholderProjects(prefix, n){
    const arr = [];
    for(let i=1;i<=n;i++){
      arr.push({
        id: prefix+'-'+i,
        title: prefix.charAt(0).toUpperCase()+prefix.slice(1)+' Project '+String(i).padStart(2,'0'),
        pages: [null,null,null],
        desc: '프로젝트 설명이 곧 추가됩니다.'
      });
    }
    return arr;
  }

  function freelanceCase(n, title, need, process, result){
    return {
      id: 'freelance-'+n,
      title: title,
      need: need,
      process: process,
      result: result,
      pages: ['assets/images/freelance/freelance'+String(n).padStart(2,'0')+'.jpg'],
    };
  }

  const FREELANCE_CASES = [
    freelanceCase(1, 'CAD 실무 과외 A', '실내디자인 전공, 표현력 강화가 필요했음', '7차시 · CAD 2D → SketchUp → Enscape 렌더링 → Illustrator 패널 디자인', '실습 도면과 렌더링 패널'),
    freelanceCase(2, 'CAD 실무 과외 B', '시공 실무 경력자, 디테일한 표현법으로 업그레이드가 필요했음', '7차시 · CAD 2D → SketchUp → Enscape → AI 후반작업 → PPT 시각화 (자택 방문 강의)', '실측도면 기반 렌더 프레젠테이션'),
    freelanceCase(3, '인테리어 실무 SketchUp 과외', '인테리어 실무자, 포트폴리오용 SketchUp 스킬이 필요했음', '상담 후 SketchUp 실무 모델링 세션 진행', 'SketchUp 모델링 실습물'),
    freelanceCase(4, '건축학과 설계 프로젝트 멘토링 A', '건축학과생, 학교 설계 프로젝트 전 과정 지원이 필요했음', '8주 16차시 · CAD → Rhino/Grasshopper → QGIS → Illustrator, 대지분석부터 패널까지', '최종 크리틱 패널'),
    freelanceCase(5, '인테리어 업체 실무 협업', '인테리어 시공업체, 모델링·도면검수 역량이 필요했음', 'SketchUp 실무 모델링 세션 + 시공 도면 검수 프로세스', '확정 도면(전/후 비교) + 3D 모델'),
    freelanceCase(6, 'CAD·Rhino 과외 A', '3D Tool로 작업 범위 확장을 원했음', '6주 · CAD → Rhino/SketchUp → V-Ray/D5 렌더링 → Grasshopper/QGIS 심화', '렌더링 결과물'),
    freelanceCase(7, 'CAD·SketchUp 과외 C', '기초부터 실전 도면 작성까지 필요했음', '표준 커리큘럼 · CAD → SketchUp → 3D 벽체 모델링', 'SketchUp 3D 평면 모델'),
    freelanceCase(8, 'SketchUp 단기 과외 (온라인)', 'SketchUp만 집중적으로, 단기간에 필요했음', '3차시 압축 · Google Meet 화상, 기초 → Boolean → 응용', 'SketchUp 실습 모델'),
    freelanceCase(9, '건축학과 설계 프로젝트 멘토링 B', '건축학과생, 설계 스튜디오+Grasshopper 심화가 필요했음', 'SketchUp/Rhino 기초부터 Grasshopper 파라메트릭까지 확장 진행', '설계 프로젝트 결과물'),
    freelanceCase(10, '인테리어 실무 심화 과정', '3D프린팅·레이저커팅까지 다루는 실무 과정이 필요했음', '6차시 18시간 · Rhino/GH → 3D프린팅·레이저커팅 → V-Ray/Rumion/D5', '메디컬 인테리어 공간 렌더링'),
    freelanceCase(11, 'CAD 실무 과외 D', '부동산 실무자, 실측도면 작성 능력이 필요했음', '6차시 · 실제 매물 실측 → CAD 도면화', '실측 평면도'),
    freelanceCase(12, 'CAD 기초 과외', 'AutoCAD 완전 입문이 필요했음', '명령어 단위로 세밀하게 짚는 기초 강의', '기초 도면 실습물'),
    freelanceCase(13, '해외 유학생 CAD·Rhino 과외', '캐나다 인테리어학과 재학생, 전 과정 원격 강의가 필요했음', '8주 24시간 · CAD → Rhino/Grasshopper(SubD·파라메트릭) → 3D프린팅 → QGIS → V-Ray → Indesign, 전 과정 Google Meet', 'Farnsworth House 렌더링 과제'),
    freelanceCase(14, '단독주택 렌더링 외주', '설계 완료 후 시각화 렌더링이 필요했음', 'Rhino 모델링 → D5/V-Ray 렌더링, 외관·내부 다각도', '최종 렌더링 시리즈'),
    freelanceCase(15, '파빌리온·구조물 렌더링 외주', '조형물(피라미드/이글루) 모델링·렌더링이 필요했음', '3dm 모델링 → 옵션 스터디 → 렌더링', '렌더링 옵션 시리즈'),
  ];

  const DATA = {
    architecture: placeholderProjects('architecture', 10),
    freelance: FREELANCE_CASES,
  };

  // ---------------- state ----------------
  const state = {
    screen: 'intro',
    category: null,
    projectIndex: null,
    pageIndex: 0,
    introDone: false,
  };

  const screens = {};
  document.querySelectorAll('.screen').forEach(s=>screens[s.id.replace('screen-','')] = s);

  function showScreen(name){
    Object.values(screens).forEach(s=>s.classList.remove('active'));
    screens[name].classList.add('active');
    state.screen = name;
    document.body.classList.toggle('show-chrome', name==='gallery' || name==='viewer' || name==='musicplayer');
  }

  // ================= INTRO =================
  const introSteps = document.querySelectorAll('#screen-intro .intro-step');
  const introPrompt = document.querySelector('#screen-intro .prompt');
  function runIntro(){
    introSteps.forEach((el, i)=>{
      setTimeout(()=> el.classList.add('run'), i * 900);
    });
    setTimeout(()=>{
      introPrompt.classList.add('show');
      state.introDone = true;
    }, introSteps.length * 900 + 500);
  }
  runIntro();

  function leaveIntro(){
    if(!state.introDone) return;
    goEnter();
  }
  window.addEventListener('keydown', (e)=>{
    if(state.screen==='intro'){ leaveIntro(); return; }
    if(e.code === 'Escape'){
      document.getElementById('chrome-back').click();
      return;
    }
    handleViewerKeys(e);
  });
  screens.intro.addEventListener('click', leaveIntro);

  // ================= ENTER =================
  let enterAnimated = false;
  function goEnter(){
    showScreen('enter');
    if(enterAnimated) return;
    enterAnimated = true;
    const heading = document.getElementById('about-heading');
    requestAnimationFrame(()=>{
      setTimeout(()=>{
        heading.classList.add('rest');
      }, 650);
      setTimeout(()=>{
        document.getElementById('enter-cards').classList.add('show');
        document.querySelectorAll('#enter-cards .card').forEach((c,i)=>{
          setTimeout(()=>c.classList.add('show'), i*140);
        });
      }, 950);
      setTimeout(()=>{
        document.getElementById('enter-prompt').classList.add('show');
      }, 1500);
    });
  }

  document.querySelectorAll('#enter-cards .card').forEach(card=>{
    card.addEventListener('click', ()=>{
      const cat = card.dataset.cat;
      if(cat === 'music') openMusicList(); else openGallery(cat);
    });
  });

  // touch-hold "hover" simulation for mobile (no real :hover on touch devices)
  (function(){
    const enterCards = document.getElementById('enter-cards');
    const cards = Array.from(document.querySelectorAll('#enter-cards .card'));
    let activeCard = null;
    function setActive(card){
      if(activeCard === card) return;
      if(activeCard) activeCard.classList.remove('touch-active');
      activeCard = card;
      if(activeCard) activeCard.classList.add('touch-active');
    }
    function cardAt(x, y){
      const el = document.elementFromPoint(x, y);
      return el ? el.closest('#enter-cards .card') : null;
    }
    enterCards.addEventListener('touchstart', (e)=>{
      const t = e.touches[0];
      setActive(cardAt(t.clientX, t.clientY));
    }, {passive:true});
    enterCards.addEventListener('touchmove', (e)=>{
      const t = e.touches[0];
      setActive(cardAt(t.clientX, t.clientY));
    }, {passive:true});
    enterCards.addEventListener('touchend', ()=> setActive(null));
    enterCards.addEventListener('touchcancel', ()=> setActive(null));
  })();

  // single context-aware back button, lives in the persistent chrome
  document.getElementById('chrome-back').addEventListener('click', ()=>{
    if(state.screen === 'gallery'){ goEnter(); }
    else if(state.screen === 'viewer'){ openGallery(state.category); }
    else if(state.screen === 'musicplayer'){ openMusicList(); }
  });

  // ================= GALLERY (architecture / freelance) =================
  const galleryGrid = document.getElementById('gallery-grid');
  const galleryList = document.getElementById('gallery-list');
  const galleryTitle = document.getElementById('gallery-title');
  const gallerySub = document.getElementById('gallery-sub');

  function openGallery(cat){
    state.category = cat;
    galleryTitle.textContent = cat.charAt(0).toUpperCase()+cat.slice(1);
    gallerySub.textContent = DATA[cat].length + ' projects — select one to view';
    galleryGrid.hidden = false;
    galleryList.hidden = true;
    galleryList.innerHTML = '';
    galleryGrid.innerHTML = '';
    DATA[cat].forEach((p, i)=>{
      const card = document.createElement('button');
      card.className = 'proj-card';
      card.innerHTML = '<span class="pc-num serif">'+String(i+1).padStart(2,'0')+'</span><span class="pc-title">'+p.title+'</span>';
      card.addEventListener('click', (e)=> flyToViewer(e.currentTarget, cat, i));
      galleryGrid.appendChild(card);
    });
    showScreen('gallery');
  }

  // ================= GALLERY (music list) =================
  function fmtDur(s){
    const m = Math.floor(s/60), sec = Math.round(s%60);
    return m+':'+String(sec).padStart(2,'0');
  }
  function openMusicList(){
    state.category = 'music';
    galleryTitle.textContent = 'Music';
    gallerySub.textContent = SONGS.length + ' tracks';
    galleryGrid.hidden = true;
    galleryGrid.innerHTML = '';
    galleryList.hidden = false;
    galleryList.innerHTML = '';
    SONGS.forEach((s, i)=>{
      const row = document.createElement('div');
      row.className = 'song-row playable';
      row.innerHTML =
        '<span class="sr-idx">'+String(i+1).padStart(2,'0')+'</span>'+
        '<span class="sr-title">'+s.title+'</span>'+
        '<span class="sr-dur">'+fmtDur(s.dur)+'</span>'+
        '<span class="sr-play"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></span>';
      row.addEventListener('click', ()=> openMusicPlayer(i));
      galleryList.appendChild(row);
    });
    showScreen('gallery');
  }

  // ================= SHARED-ELEMENT TRANSITION =================
  const fly = document.getElementById('fly');
  function flyToViewer(cardEl, cat, index){
    const r = cardEl.getBoundingClientRect();
    fly.style.left = r.left+'px'; fly.style.top = r.top+'px';
    fly.style.width = r.width+'px'; fly.style.height = r.height+'px';
    fly.classList.add('active');
    requestAnimationFrame(()=>{
      fly.style.left='0px'; fly.style.top='0px';
      fly.style.width='100vw'; fly.style.height='100vh';
      fly.style.borderRadius='0px';
    });
    setTimeout(()=>{
      openViewer(cat, index);
      fly.classList.remove('active');
      fly.style.cssText = '';
    }, 560);
  }

  // ================= VIEWER (architecture / freelance) =================
  const viewerTitle = document.getElementById('viewer-title');
  const viewerDesc = document.getElementById('viewer-desc');
  const viewerCanvas = document.getElementById('viewer-canvas');
  const pageDots = document.getElementById('page-dots');

  function openViewer(cat, index, page){
    state.category = cat;
    state.projectIndex = index;
    state.pageIndex = page || 0;
    renderViewer();
    showScreen('viewer');
  }
  function renderViewer(){
    const proj = DATA[state.category][state.projectIndex];
    viewerTitle.textContent = proj.title;

    const src = proj.pages[state.pageIndex];
    if(src){
      viewerCanvas.innerHTML = '<img src="'+src+'" alt="'+proj.title+'" style="max-width:100%;max-height:100%;object-fit:contain;">';
    } else {
      viewerCanvas.innerHTML = '<span class="placeholder-tag serif">slide '+(state.pageIndex+1)+' / '+proj.pages.length+' — awaiting content</span>';
    }

    if(proj.need){
      viewerDesc.innerHTML =
        '<b>필요했던 것</b> · '+proj.need+'<br>'+
        '<b>과정</b> · '+proj.process+'<br>'+
        '<b>결과</b> · '+proj.result;
    } else {
      viewerDesc.textContent = proj.desc + '  ('+(state.pageIndex+1)+'/'+proj.pages.length+')';
    }
    pageDots.innerHTML = '';
    proj.pages.forEach((_, i)=>{
      const d = document.createElement('span');
      if(i===state.pageIndex) d.className='on';
      pageDots.appendChild(d);
    });
  }
  function viewerNext(){
    const proj = DATA[state.category][state.projectIndex];
    if(state.pageIndex < proj.pages.length - 1){
      state.pageIndex++; renderViewer();
    } else {
      openGallery(state.category);
    }
  }
  function viewerPrev(){
    if(state.pageIndex > 0){
      state.pageIndex--; renderViewer();
    } else {
      openGallery(state.category);
    }
  }
  document.getElementById('viewer-next').addEventListener('click', viewerNext);

  function handleViewerKeys(e){
    if(state.screen !== 'viewer') return;
    if(e.code === 'Backspace'){ e.preventDefault(); viewerPrev(); }
    else if(e.code === 'Enter' || e.code === 'Space'){ e.preventDefault(); viewerNext(); }
  }

  // ================= AUDIO ENGINE =================
  // Plain <audio> playback, files served normally from assets/audio/.
  const audioEl = document.getElementById('audio-el');
  let currentTrack = -1;

  const barCount = 40;
  const mpBars = document.getElementById('mp-bars');
  for(let i=0;i<barCount;i++){ const s=document.createElement('span'); mpBars.appendChild(s); }
  const barEls = Array.from(mpBars.querySelectorAll('span'));
  let barTimer = null;
  function startBars(){
    if(barTimer) return;
    barTimer = setInterval(()=>{
      barEls.forEach((b,i)=>{
        const wobble = Math.sin(Date.now()/220 + i*0.6) * 0.5 + 0.5;
        const h = 4 + (wobble*0.6 + Math.random()*0.4) * 58;
        b.style.height = h.toFixed(0) + 'px';
      });
    }, 90);
  }
  function stopBars(){
    clearInterval(barTimer); barTimer = null;
    barEls.forEach(b=> b.style.height = '4px');
  }

  function loadTrack(i){
    currentTrack = i;
    const s = SONGS[i];
    audioEl.src = 'assets/audio/' + s.file_web;
    audioEl.load();
    document.getElementById('mb-title').textContent = s.title;
    document.getElementById('mp-title').textContent = 'JUN';
    document.getElementById('mp-sub').textContent = s.title;
    document.getElementById('mp-desc').textContent = '이 곡에 대한 설명이 곧 추가됩니다.';
  }

  function playCurrent(){
    if(!audioEl.src) return;
    const p = audioEl.play();
    if(p && p.catch){
      p.catch(err=>{
        console.error('[audio] play() failed:', err && err.name, err && err.message);
        document.getElementById('mp-desc').textContent = '오디오 재생에 실패했어요 (' + (err && err.name || 'unknown') + ').';
      });
    }
  }
  audioEl.addEventListener('error', ()=>{
    const err = audioEl.error;
    console.error('[audio] element error:', err && err.code, err && err.message);
    document.getElementById('mp-desc').textContent = '오디오 로드 오류 (code ' + (err && err.code) + ').';
  });
  audioEl.addEventListener('play', startBars);
  audioEl.addEventListener('pause', stopBars);
  audioEl.addEventListener('ended', stopBars);

  function openMusicPlayer(i){
    loadTrack(i);
    showScreen('musicplayer');
    playCurrent();
    syncPlayIcons();
  }

  function togglePlay(){
    if(!audioEl.src) return;
    if(audioEl.paused) playCurrent(); else audioEl.pause();
    syncPlayIcons();
  }
  function nextTrack(){
    const cand = (currentTrack + 1 + SONGS.length) % SONGS.length;
    loadTrack(cand); playCurrent(); syncPlayIcons();
  }
  function prevTrack(){
    const cand = (currentTrack - 1 + SONGS.length) % SONGS.length;
    loadTrack(cand); playCurrent(); syncPlayIcons();
  }
  function syncPlayIcons(){
    const playing = audioEl.src && !audioEl.paused;
    const iconPath = playing
      ? '<path d="M7 5h4v14H7zM13 5h4v14h-4z"/>'
      : '<path d="M8 5v14l11-7z"/>';
    document.getElementById('mb-icon').innerHTML = iconPath;
    const mpPlay = document.getElementById('mp-play');
    if(mpPlay) mpPlay.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor">'+iconPath+'</svg>';
  }
  audioEl.addEventListener('play', syncPlayIcons);
  audioEl.addEventListener('pause', syncPlayIcons);
  audioEl.addEventListener('ended', nextTrack);

  document.getElementById('mb-toggle').addEventListener('click', ()=>{
    if(currentTrack<0){ loadTrack(0); playCurrent(); }
    else togglePlay();
  });
  document.getElementById('mb-next').addEventListener('click', nextTrack);
  document.getElementById('mb-prev').addEventListener('click', prevTrack);
  document.getElementById('mp-play').addEventListener('click', togglePlay);
  document.getElementById('mp-next').addEventListener('click', nextTrack);
  document.getElementById('mp-prev').addEventListener('click', prevTrack);

  // ---------------- volume / mute ----------------
  audioEl.volume = 0.8;
  let lastVolume = 0.8;
  const volInputs = [document.getElementById('mb-volume'), document.getElementById('mp-volume')];
  const muteBtns = [document.getElementById('mb-mute'), document.getElementById('mp-mute')];
  const volIcons = [document.getElementById('mb-vol-icon'), document.getElementById('mp-vol-icon')];

  const ICON_VOL_UP = '<path d="M3 9v6h4l5 5V4L7 9H3z"/><path d="M16.5 12c0-1.77-1-3.29-2.5-4.03v8.06c1.5-.74 2.5-2.26 2.5-4.03z"/>';
  const ICON_VOL_MUTE = '<path d="M3 9v6h4l5 5V4L7 9H3z"/><path d="M19 12l2.5-2.5-1-1L18 11l-2.5-2.5-1 1L17 12l-2.5 2.5 1 1L18 13l2.5 2.5 1-1z"/>';

  function syncVolumeUI(){
    const pct = Math.round((audioEl.muted ? 0 : audioEl.volume) * 100);
    volInputs.forEach(inp=>{ if(inp) inp.value = pct; });
    volIcons.forEach(icon=>{ if(icon) icon.innerHTML = (audioEl.muted || audioEl.volume===0) ? ICON_VOL_MUTE : ICON_VOL_UP; });
  }
  volInputs.forEach(inp=>{
    if(!inp) return;
    inp.addEventListener('input', ()=>{
      const v = Number(inp.value)/100;
      audioEl.muted = false;
      audioEl.volume = v;
      lastVolume = v || lastVolume;
      syncVolumeUI();
    });
  });
  muteBtns.forEach(btn=>{
    if(!btn) return;
    btn.addEventListener('click', ()=>{
      audioEl.muted = !audioEl.muted;
      syncVolumeUI();
    });
  });
  syncVolumeUI();

  // ================= DM BOX =================
  // Messages now go through the Worker's /api/messages endpoint (backed by KV),
  // which also forwards a notification to Discord server-side. This means the
  // webhook URL is no longer exposed in client code, and Jun's replies (sent
  // from /admin.html) show up here via polling, without a page reload.
  const dmHead = document.getElementById('dm-head');
  const dmBox = document.getElementById('dmbox');
  const dmThread = document.getElementById('dm-thread');
  const dmInput = document.getElementById('dm-input');

  dmHead.addEventListener('click', ()=> dmBox.classList.toggle('collapsed'));

  let renderedMsgIds = new Set();
  function renderDmMessages(messages){
    const empty = dmThread.querySelector('.dm-empty');
    let added = false;
    messages.forEach(m=>{
      if(renderedMsgIds.has(m.id)) return;
      renderedMsgIds.add(m.id);
      if(empty) empty.remove();
      const p = document.createElement('p');
      p.className = 'dm-msg';
      const who = m.who === 'jun' ? 'Jun' : 'You';
      p.innerHTML = '<b>'+who+'</b> · '+String(m.text).replace(/</g,'&lt;');
      dmThread.appendChild(p);
      added = true;
    });
    if(added) dmThread.scrollTop = dmThread.scrollHeight;
  }
  function addSystemNote(text){
    const p = document.createElement('p');
    p.className = 'dm-msg';
    p.innerHTML = '<b>system</b> · '+text;
    dmThread.appendChild(p);
    dmThread.scrollTop = dmThread.scrollHeight;
  }

  async function pollDmThread(){
    try{
      const res = await fetch('/api/messages');
      if(!res.ok) return;
      const data = await res.json();
      renderDmMessages(data.messages || []);
    }catch(e){
      // silent — this just means the live-poll tick failed, next tick retries
    }
  }
  pollDmThread();
  setInterval(pollDmThread, 6000);

  async function sendDm(){
    const text = dmInput.value.trim();
    if(!text) return;
    const where = state.category ? (state.category+(state.projectIndex!=null?' / project '+(state.projectIndex+1):'')) : state.screen;
    dmInput.value = '';

    try{
      const res = await fetch('/api/messages', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({ text, where })
      });
      if(res.ok){
        const data = await res.json();
        if(data.entry) renderDmMessages([data.entry]);
      } else {
        addSystemNote('전송 실패 (status '+res.status+').');
      }
    }catch(err){
      addSystemNote('전송 실패 — 네트워크 문제로 전달되지 않았어요. (이메일로 직접 연락해주세요)');
      console.error('DM send error', err);
    }
  }
  document.getElementById('dm-send').addEventListener('click', sendDm);
  dmInput.addEventListener('keydown', (e)=>{ if(e.key==='Enter'){ e.preventDefault(); sendDm(); } });

})();
