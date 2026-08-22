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

  function freelanceCase(title, situation, focus, approach, pageFiles){
    return {
      title: title,
      situation: situation,
      focus: focus,
      approach: approach,
      pages: pageFiles.map(f => 'assets/images/freelance/'+f),
    };
  }

  const FREELANCE_CASES = [
    freelanceCase('CAD Practical Tutoring A',
      'Interior design major who wanted to sharpen her presentation skills.',
      'I structured the plan around detail and visual communication.',
      '7 sessions over 4 weeks — AutoCAD 2D, SketchUp, Enscape rendering, then an Illustrator panel layout — ending with finished practice drawings and a rendered panel.',
      ['freelance01.jpg','freelance01_sub.jpg','freelance01_curr.jpg']),
    freelanceCase('CAD Practical Tutoring B',
      'An experienced construction professional who wanted to upgrade to more detailed digital representation.',
      'I leaned into his existing site knowledge and focused on precision and detail.',
      '7 sessions at his home — AutoCAD 2D → SketchUp → Enscape → AI post-processing → PowerPoint visualization — producing measured drawings and a rendered presentation deck.',
      ['freelance02.jpg','freelance02_sub.jpg','freelance02_curr.jpg']),
    freelanceCase('Interior SketchUp Tutoring',
      'A working interior designer who needed SketchUp skills for her portfolio.',
      'I kept the sessions hands-on and tied directly to real modeling tasks.',
      'Practical SketchUp modeling sessions producing usable, studio-quality practice models.',
      ['freelance03.jpg']),
    freelanceCase('Architecture Studio Mentoring A',
      'An architecture student who needed full support through a school design project.',
      'I paired software training with actual design development, not just tool tutorials.',
      '16 sessions over 8 weeks — AutoCAD → Rhino/Grasshopper → QGIS → Illustrator — from site analysis through to a final critique panel.',
      ['freelance04.jpg','freelance04_sub.jpg','freelance04_curr.jpg']),
    freelanceCase('Interior Firm Collaboration',
      'A remodeling company that needed stronger modeling and drawing-review capability.',
      'I focused on a repeatable modeling and review workflow their team could reuse.',
      'SketchUp modeling sessions plus a construction drawing review process, producing confirmed before/after floor plans and 3D models.',
      ['freelance05.jpg','freelance05_sub.jpg']),
    freelanceCase('CAD/Rhino Tutoring A',
      'Wanted to expand beyond 2D drafting into 3D tools.',
      'I built a bridge from CAD fundamentals straight into rendering workflows.',
      '6 weeks — CAD → Rhino/SketchUp → V-Ray/D5 rendering → Grasshopper/QGIS — ending in finished rendered output.',
      ['freelance06.jpg','freelance06_sub.jpg','freelance06_curr.jpg']),
    freelanceCase('CAD/SketchUp Tutoring C',
      'Needed to go from basics to producing real working drawings.',
      'I emphasized rebuilding real floor plans from scratch, not just following commands.',
      'Standard curriculum — CAD fundamentals into a 3D wall model in SketchUp.',
      ['freelance07.jpg','freelance07_curr.jpg']),
    freelanceCase('Short-term SketchUp Tutoring (Online)',
      'Wanted to focus narrowly on SketchUp in a short window.',
      'I compressed the material into a tight, remote-friendly format.',
      '3 sessions over Google Meet — install & interface, Boolean modeling, then applied practice.',
      ['freelance08.jpg']),
    freelanceCase('Architecture Studio Mentoring B',
      'An architecture student who needed support developing a studio project alongside Grasshopper skills.',
      'I let the software follow the design, not the other way around.',
      'SketchUp/Rhino fundamentals extended into Grasshopper parametric work as the studio project developed.',
      ['freelance09.jpg','freelance09_sub.jpg','freelance09_curr.jpg']),
    freelanceCase('Advanced Interior Practice Course',
      'Needed practice-ready skills including 3D printing and laser cutting.',
      'I connected digital modeling directly to physical fabrication output.',
      '6 sessions, 18 hours — Rhino/Grasshopper → 3D printing & laser cutting → V-Ray/Rumion/D5 — producing a rendered medical-interior space.',
      ['freelance10.jpg','freelance10_sub.jpg','freelance10_curr.jpg']),
    freelanceCase('CAD Practical Tutoring D',
      'A real-estate professional who needed accurate as-built drawings.',
      'I focused entirely on real-world measuring and drafting accuracy.',
      '6 sessions measuring an actual listing and turning it into a finished CAD floor plan.',
      ['freelance11.jpg','freelance11_sub.jpg','freelance11_curr.jpg']),
    freelanceCase('CAD Fundamentals Tutoring',
      'Complete beginner to AutoCAD.',
      'I broke the software down command by command so nothing was assumed.',
      'A slow, deliberate fundamentals course building up to independent floor plan drafting.',
      ['freelance12.jpg','freelance12_sub.jpg']),
    freelanceCase('International Student CAD/Rhino Tutoring',
      'An interior design student in Canada who needed a fully remote program.',
      'I built a complete pipeline she could run entirely from her laptop, start to finish.',
      '24 hours over 8 weeks — CAD → Rhino/Grasshopper (SubD & parametric) → 3D printing → QGIS → V-Ray → InDesign, entirely over Google Meet — culminating in a Farnsworth House rendering exercise.',
      ['freelance13.jpg','freelance13_sub.jpg','freelance13_curr.jpg']),
    freelanceCase('Detached House Rendering (Freelance)',
      'A client who needed visualization after the design was finalized.',
      'I focused on giving the house real atmosphere, not just a flat exterior view.',
      'Rhino modeling into D5/V-Ray rendering across multiple exterior and interior angles.',
      ['freelance14.jpg','freelance14_sub.jpg']),
    freelanceCase('Pavilion & Structure Rendering (Freelance)',
      'A client who needed modeling and rendering for sculptural structures.',
      'I focused on getting the form and material read clearly across several options.',
      '3dm modeling into option studies and final renders.',
      ['freelance15.jpg','freelance15_sub.jpg']),
    freelanceCase('Hair Salon Interior Rendering (Freelance)',
      'A salon owner who sent a single material reference photo and asked for a 3D interior concept.',
      'I focused on translating one material reference into a full spatial concept.',
      'Rhino modeling of the salon interior, developing the textured feature wall from the client\'s reference photo into a full render. Final export still in progress.',
      ['freelance16_v2.jpg','freelance16_sub_v2.jpg']),
  ];

  const FEATURED_PROJECTS = [
    {
      title: 'THE NEXT EARTH',
      pages: ['assets/images/arch_nextearth_hero.jpg', 'assets/images/arch_nextearth_sections.jpg', 'assets/images/arch_nextearth_robot.jpg'],
      desc: 'Graduation thesis, Kyonggi University, 2026. An autonomous, robot-built settlement at the lunar south pole, engineered around ISRU (in-situ resource utilization) so it depends on almost nothing shipped from Earth. I translated real space-science data into an actual construction sequence — siting logic, a diagrid shell system, and a custom robotic arm I built and coded myself to prove the assembly process physically, not just on screen. Rhino, Grasshopper, Python, Arduino.',
    },
    {
      title: 'RE:FLOW',
      pages: ['assets/images/arch_reflow_hero.jpg', 'assets/images/arch_reflow_site.jpg', 'assets/images/arch_reflow_plans.jpg'],
      desc: 'Capstone Design Studio 5, 2025. An urban regeneration and renovation project for Jeongjo-ro 796, a rare alley in Suwon that still traces the city\'s original 18th-century waterway. I measured the site myself, interviewed the shopkeepers and a security guard who actually work there, and used their accounts to drive a massing strategy that reopens the alley\'s historic flow of water and people. Rhino, AutoCAD, Enscape.',
    },
    {
      title: 'UN-COVERING',
      pages: ['assets/images/arch_uncovering_hero.jpg', 'assets/images/arch_uncovering_facade.jpg', 'assets/images/arch_uncovering_section.jpg'],
      desc: 'Design Studio 6, Fall 2025. A timber canopy and public plaza reweaving Tongin Market\'s arcade back into Seoul\'s Seochon neighborhood, addressing a street where materials, ownership, and history had all fragmented. I designed a repeatable timber-and-polycarbonate facade module and an interactive water plaza with four distinct modes, then detailed the construction down to material thickness. Rhino, V-Ray.',
    },
    {
      title: 'THE BISTRO',
      pages: ['assets/images/arch_bistro_hero.jpg', 'assets/images/arch_bistro_structure.jpg', 'assets/images/arch_bistro_plan.jpg'],
      desc: '3rd-year studio, Seocho-gu, Seoul. A culinary and cultural complex built on the site\'s history as rice paddies once cultivated for the royal court. The concept — the dynamism of roots — pushed into a form-active diagrid structure with a rice-blended concrete facade, developed through hand sketches, physical mesh studies, and a full structural skin diagram. Rhino, Grasshopper.',
    },
    {
      title: '1945: A Landscape of Memory',
      pages: ['assets/images/arch_nagasaki_hero.jpg', 'assets/images/arch_nagasaki_site.jpg', 'assets/images/arch_nagasaki_human.jpg'],
      desc: 'Academic project, Nagasaki, Japan. A memorial pavilion that resists the instinct to seal grief behind walls — instead the structure stays porous and open, woven into daily foot traffic so remembrance and ordinary life share the same ground. I built the design around real blast-radius and casualty data, then let that data generate the pavilion\'s organic, wreath-like structural geometry.',
    },
    {
      title: 'Transforming Architecture',
      pages: ['assets/images/arch_transform_hero.jpg', 'assets/images/arch_transform_model.jpg', 'assets/images/arch_transform_structural.jpg'],
      desc: 'Independent research project. A study of tensegrity structures using the same self-stabilizing logic found in DNA-origami nanoparticles, prototyped as physical wood-and-string models before being pushed toward architectural scale. Structural analysis — buckling, natural frequency, impact response — tested its viability for disaster-response shelters and off-world habitats, a research line that continues directly into The Next Earth\'s lunar structure. Rhino, Karamba3D.',
    },
  ];

  const STUDY_PROJECTS = [
    {
      title: 'Museum of the Future — Geometry Study',
      pages: ['assets/images/arch01.jpg', 'assets/video/museum_study.mp4'],
      desc: 'A Grasshopper study rebuilding Killa Design\'s Museum of the Future (Dubai) from the ground up — panelization logic, structural framing, and a physical paper model of the facade geometry. 5-minute highlight from the full recorded process.',
    },
    {
      title: 'Oceanogràfic — Geometry Study',
      pages: ['assets/images/arch02.jpg', 'assets/video/oceano_study.mp4'],
      desc: 'A Grasshopper study of Félix Candela\'s Oceanogràfic (Valencia) shell structure — surface logic and structural framing rebuilt parametrically. 5-minute highlight from the full recorded process.',
    },
  ];

  const DATA = {
    architecture: FEATURED_PROJECTS.concat(STUDY_PROJECTS),
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
      const thumb = p.pages && p.pages[0];
      card.className = 'proj-card' + (thumb ? ' has-thumb' : '');
      if(thumb) card.style.backgroundImage = "url('"+thumb+"')";
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
    if(src && src.endsWith('.mp4')){
      viewerCanvas.innerHTML = '<video src="'+src+'" controls playsinline style="max-width:100%;max-height:100%;"></video>';
    } else if(src){
      viewerCanvas.innerHTML = '<img src="'+src+'" alt="'+proj.title+'" style="max-width:100%;max-height:100%;object-fit:contain;">';
    } else {
      viewerCanvas.innerHTML = '<span class="placeholder-tag serif">slide '+(state.pageIndex+1)+' / '+proj.pages.length+' — awaiting content</span>';
    }

    if(proj.situation){
      viewerDesc.innerHTML =
        '<b>Situation</b> · '+proj.situation+'<br>'+
        '<b>Focus</b> · '+proj.focus+'<br>'+
        '<b>Approach</b> · '+proj.approach;
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
