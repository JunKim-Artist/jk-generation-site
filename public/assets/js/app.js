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

  const PLACEHOLDER_DESC = '프로젝트 설명이 곧 추가됩니다.';

  function pageRange(prefix, count){
    const arr = [];
    for(let i=1;i<=count;i++) arr.push('assets/images/'+prefix+'_p'+String(i).padStart(2,'0')+'.jpg');
    return arr;
  }

  function projDesc(en, ko, programs){
    return { en: en, ko: ko, programs: programs };
  }

  const ARCHITECTURE_PROJECTS = [
    {
      title: 'THE NEXT EARTH',
      field: 'Space Architecture | The Moon',
      thumb: 'assets/images/arch_nextearth_thumb.jpg',
      intro: { en: 'How can we inhabit the Moon?', ko: '달에서의 건축, 그 육하원칙은 무엇인가?' },
      pages: ['https://youtu.be/3YwSd8TGetM'],
      desc: projDesc(
        'Before anyone lives there, this project lays the uncrewed groundwork for a lunar settlement built through ISRU-based digital fabrication — I wrote the algorithm that drives it and built a robotic arm to prove the construction physically.',
        '유인 정착에 앞선 무인 개발 단계로, ISRU(현지자원활용) 기반 디지털 패브리케이션으로 달 정착지를 짓는 알고리즘을 직접 만들고, 로봇팔까지 제작·코딩해 실제 시공 과정을 증명했습니다.',
        [
          { cat: 'Main Modeling', tools: 'Rhino' },
          { cat: 'Parametric Design', tools: 'Grasshopper' },
          { cat: 'Simulation', tools: 'Kangaroo (in Grasshopper)' },
          { cat: 'Rendering', tools: 'V-Ray' },
          { cat: 'AI Video', tools: 'Deevid AI' },
          { cat: 'Physical Prototyping', tools: 'Arduino, Python' },
          { cat: 'Documentation', tools: 'AutoCAD' },
          { cat: 'Graphic Design', tools: 'Photoshop, Illustrator' },
          { cat: 'Video Editing', tools: 'Premiere Pro' },
        ]
      ),
    },
    {
      title: 'UN-COVERING',
      field: 'Market Renovation | Tongin Market, Seoul, Korea',
      thumb: 'assets/images/arch_uncovering_thumb.jpg',
      intro: { en: 'What does Tongin Market truly need?', ko: '통인시장에 진정 필요한 것은 무엇일까?' },
      pages: ['assets/images/arch_uncovering_p1.jpg'],
      desc: projDesc(
        "I resolved the market stalls' encroachment on the road with six shop-type-specific alternatives, folding the forgotten memory of the Baekundongcheon waterway into that same timber arcade to bring it back as a space for everyone.",
        '통인시장 상인들이 도로를 침범해 쓰던 문제를 상점 유형별 6가지 대안으로 풀어내면서, 잊혀졌던 백운동천의 물길 기억까지 그 목구조 아케이드 안으로 함께 끌어들여 모두를 위한 공간으로 되살렸습니다.',
        [
          { cat: 'Main Modeling', tools: 'Rhino' },
          { cat: 'Rendering', tools: 'V-Ray' },
          { cat: 'Documentation', tools: 'AutoCAD' },
          { cat: 'Graphic Design', tools: 'Photoshop, Illustrator' },
        ]
      ),
    },
    {
      title: 'RE:FLOW',
      field: 'Urban Design | Paldal-gu, Suwon, Korea',
      thumb: 'assets/images/arch_reflow_thumb.jpg',
      intro: { en: 'How do we reconnect the forgotten footsteps of Suwon?', ko: '수원의 잊힌 발걸음을 어떻게 이을 것인가?' },
      pages: ['assets/images/arch_reflow_p1.jpg'],
      desc: projDesc(
        "Based on interviews with the people who actually work and live in the alley, this urban regeneration project reopens Suwon's forgotten waterway and footpaths — reviving a once-important street to connect a fading traditional market with a rising modern one.",
        '그 골목에서 일하고 사는 사람들을 직접 인터뷰해서, 수원의 잊혀진 골목에 옛 물길과 발걸음을 다시 열어주는 도시재생 프로젝트입니다. 한때 중요했던 이 길을 되살려, 저물어가는 전통시장과 새로 피어나는 현대시장을 잇습니다.',
        [
          { cat: 'Main Modeling', tools: 'Rhino' },
          { cat: 'Rendering', tools: 'V-Ray' },
          { cat: 'Documentation', tools: 'AutoCAD' },
          { cat: 'Graphic Design', tools: 'Photoshop, Illustrator' },
        ]
      ),
    },
    {
      title: 'THE BISTRO',
      field: 'Cultural Complex | Seoripul, Seoul, Korea',
      thumb: 'assets/images/arch_bistro_thumb.jpg',
      intro: { en: 'What are the fundamental roots of Seoripul?', ko: '서울 서리풀의 뿌리는 무엇일까?' },
      pages: ['assets/images/arch_bistro_p1.jpg'],
      desc: projDesc(
        'Roads were laid over the original landscape, and as each plot filled with people\'s ideas, the buildings seem to plant themselves from above — this project gives form to a root pushing up from somewhere beneath Seoripul.',
        '원래 자연 위에 도로가 놓이고, 필지마다 사람들의 생각이 쌓이면서 건물들은 위에서 아래로 박히듯 들어섭니다. 서리풀 지하 어딘가에서 뚫고 올라오는 뿌리를 형태로 옮긴 프로젝트입니다.',
        [
          { cat: 'Main Modeling', tools: 'Rhino' },
          { cat: 'Rendering', tools: 'Rumion' },
          { cat: 'Documentation', tools: 'AutoCAD' },
          { cat: 'Graphic Design', tools: 'Photoshop, Illustrator' },
        ]
      ),
    },
    {
      title: 'BLOOMING HEARTS IN EMPTINESS',
      field: 'Park Pavilion | Nagasaki, Japan',
      thumb: 'assets/images/arch_blooming_thumb.jpg',
      intro: { en: 'How can we memorialize the tragedy of Nagasaki?', ko: '나가사키의 아픔을 어떻게 기억할 것인가?' },
      pages: ['assets/images/arch_blooming_p1.jpg'],
      desc: projDesc(
        "Nagasaki's atomic blast blooms into a pavilion, so that everyone remembers.",
        '나가사키의 핵폭발은 하나의 파빌리온으로 피어나, 모두가 그날을 기억하게 합니다.',
        [
          { cat: 'Main Modeling', tools: 'Rhino' },
          { cat: 'Rendering', tools: 'D5 Render' },
          { cat: 'Documentation', tools: 'AutoCAD' },
          { cat: 'Graphic Design', tools: 'Photoshop, Illustrator' },
        ]
      ),
    },
    {
      title: 'Transforming Experiment on Mars',
      field: 'Space Architecture | Mars',
      thumb: 'assets/images/arch_mars_thumb.jpg',
      intro: { en: 'What if architecture could transform?', ko: "영화 '트랜스포머'를 본 후, 건축의 변화를 상상하다." },
      pages: ['assets/video/arch_mars_p1.mp4'],
      desc: projDesc(
        'Like Galvatron transforming in the movie Transformers — how do you analyze a structure where tetrahedral tensegrity units drop onto Mars and reshape themselves into a cube?',
        '영화 트랜스포머의 갈바트론처럼, 화성으로 이주할 때 정사면체 텐세그리티 유닛이 떨어져 정육면체로 변하는 구조는 어떻게 분석할 수 있을까요?',
        [
          { cat: 'Main Modeling', tools: 'Rhino' },
          { cat: 'Parametric Design', tools: 'Grasshopper' },
          { cat: 'Simulation', tools: 'Kangaroo (in Grasshopper)' },
          { cat: 'Structural Analysis', tools: 'Karamba3D (in Grasshopper)' },
          { cat: 'Rendering', tools: 'V-Ray' },
          { cat: 'AI Video', tools: 'Deevid AI' },
        ]
      ),
    },
    {
      title: 'HQ Skärholmen BIM Modeling',
      field: 'BIM Modeling | Stockholm, Sweden',
      thumb: 'assets/images/arch_skarholmen_thumb.jpg',
      intro: { en: 'Exploring modeling possibilities in Revit', ko: '레빗(Revit)을 활용한 모델링의 가능성은?' },
      pages: pageRange('arch_skarholmen', 11),
      desc: projDesc(
        'I modeled an office headquarters in Skärholmen, Stockholm entirely in Revit — from site analysis all the way through layout, plans, and sections.',
        '스톡홀름 셰르홀멘의 오피스 본사 건물을 대지 분석부터 배치도·평면도·단면도까지, 처음부터 끝까지 Revit으로 직접 모델링했습니다.',
        [
          { cat: 'BIM / Main Modeling', tools: 'Revit' },
          { cat: 'Documentation', tools: 'AutoCAD' },
          { cat: 'Rendering', tools: 'Enscape' },
        ]
      ),
    },
    {
      title: 'Grasshopper Forming Practice 1',
      field: 'Parametric Modeling | Dubai, UAE',
      thumb: 'assets/images/arch_gh1_thumb.jpg',
      intro: { en: 'Decoding the design logic of the Museum of the Future', ko: '두바이 미래 박물관의 디자인 논리는 무엇일까?' },
      pages: ['https://youtu.be/iuEYg4p_2B4'],
      desc: projDesc(
        "I rebuilt Killa Design's Museum of the Future in Dubai from scratch in Grasshopper, reverse-engineering its panelization logic and structural framing.",
        '두바이에 있는 킬라 디자인의 미래 박물관을 그래스호퍼로 처음부터 다시 만들어보면서, 패널 분할 논리와 구조 프레임을 직접 역설계했습니다.',
        [
          { cat: 'Main Modeling', tools: 'Rhino' },
          { cat: 'Parametric Design', tools: 'Grasshopper' },
          { cat: 'Video Editing', tools: 'Premiere Pro' },
        ]
      ),
    },
    {
      title: 'Grasshopper Forming Practice 2',
      field: 'Parametric Modeling | Valencia, Spain',
      thumb: 'assets/images/arch_gh2_thumb.jpg',
      intro: { en: 'Decoding the design logic of Oceanogràfic Valencia', ko: '발렌시아 오세아노그라픽의 디자인 논리는 무엇일까?' },
      pages: ['https://youtu.be/S5QQ1s_kPmA'],
      desc: projDesc(
        "I studied Félix Candela's Oceanogràfic in Valencia by rebuilding its shell surface and structural framing parametrically in Grasshopper.",
        '발렌시아에 있는 펠릭스 칸델라의 오세아노그라픽을 그래스호퍼로 파라메트릭하게 재구축하면서, 쉘 곡면과 구조 프레임의 논리를 연구했습니다.',
        [
          { cat: 'Main Modeling', tools: 'Rhino' },
          { cat: 'Parametric Design', tools: 'Grasshopper' },
          { cat: 'Video Editing', tools: 'Premiere Pro' },
        ]
      ),
    },
    {
      title: 'Grasshopper Kangaroo Structure Analysis',
      field: 'Structural Analysis & Simulation | National Museum of Korea, Seoul, Korea',
      thumb: 'assets/images/arch_kangaroo_thumb.jpg',
      intro: { en: 'What structural forces support the main open hall of the National Museum of Korea?', ko: '국립중앙박물관의 트러스 구조는 어떠한 방향과 힘을 가지는가?' },
      pages: pageRange('arch_kangaroo', 13),
      desc: projDesc(
        "I ran a structural analysis on the National Museum of Korea's steel truss hall with Kangaroo and Karamba3D, digging into the forces and geometry behind its long-span roof.",
        '국립중앙박물관의 강구조 트러스 홀을 Kangaroo와 Karamba3D로 분석하면서, 긴 스팬의 지붕을 지탱하는 힘과 형태를 살펴봤습니다.',
        [
          { cat: 'Main Modeling', tools: 'Rhino' },
          { cat: 'Parametric Design', tools: 'Grasshopper' },
          { cat: 'Simulation', tools: 'Kangaroo (in Grasshopper)' },
          { cat: 'Structural Analysis', tools: 'Karamba3D (in Grasshopper)' },
        ]
      ),
    },
  ];

  const FREELANCE_PROJECTS = [
    {
      title: 'Architecture Software Tutoring A',
      field: 'Software Tutoring | Architecture Design',
      thumb: 'assets/images/freelance01_thumb.jpg',
      intro: { en: 'Mastering the Essential Workflow for Architectural Design', ko: '건축 디자인의 뼈대를 세우는 필수 프로그램 워크플로우' },
      pages: [null],
      desc: PLACEHOLDER_DESC,
    },
    {
      title: 'CAD & SketchUp Tutoring A',
      field: 'Software Tutoring | Interior Design',
      thumb: 'assets/images/freelance02_thumb.jpg',
      intro: { en: 'From 2D Drafts to 3D Visualization in Interior Design', ko: '도면에서 3D 공간으로, 인테리어 디자인의 시각화' },
      pages: [null],
      desc: PLACEHOLDER_DESC,
    },
    {
      title: 'CAD & SketchUp Tutoring B',
      field: 'Software Tutoring | Interior Design',
      thumb: 'assets/images/freelance03_thumb.jpg',
      intro: { en: 'Completing Spatial Details with CAD & SketchUp Integration', ko: '캐드와 스케치업의 연동으로 완성하는 공간 디테일' },
      pages: [null],
      desc: PLACEHOLDER_DESC,
    },
    {
      title: 'Architecture Software Tutoring B',
      field: 'Software Tutoring | Architecture Design',
      thumb: 'assets/images/freelance04_thumb.jpg',
      intro: { en: 'Practical 3D Modeling and Data Management for Architecture Students', ko: '건축학도를 위한 실전 3D 모델링과 데이터 관리' },
      pages: [null],
      desc: PLACEHOLDER_DESC,
    },
    {
      title: 'Architectural Rendering Tutoring A',
      field: 'Rendering Tutoring | Architectural Visualization',
      thumb: 'assets/images/freelance05_thumb.jpg',
      intro: { en: 'Expressing Realistic Light and Texture in Architectural Spaces', ko: '건축 공간의 빛과 질감을 사실적으로 표현하는 방법' },
      pages: [null],
      desc: PLACEHOLDER_DESC,
    },
    {
      title: 'Interior Modeling Freelance & Tutoring A',
      field: 'Modeling & Tutoring | Residential Apartment',
      thumb: 'assets/images/freelance06_thumb.jpg',
      intro: { en: 'Modeling Residential Spaces Tailored to Lifestyles', ko: '사용자의 라이프스타일을 담은 주거 공간 모델링' },
      pages: [null],
      desc: PLACEHOLDER_DESC,
    },
    {
      title: 'CAD & SketchUp Tutoring C',
      field: 'Software Tutoring | Interior Design',
      thumb: 'assets/images/freelance07_thumb.jpg',
      intro: { en: 'Building Interiors through Accurate Drafting and Modeling', ko: '정확한 도면 설계와 모델링으로 구축하는 인테리어' },
      pages: [null],
      desc: PLACEHOLDER_DESC,
    },
    {
      title: 'Interior Modeling Freelance & Tutoring B',
      field: 'Modeling & Tutoring | Residential Apartment',
      thumb: 'assets/images/freelance08_thumb.jpg',
      intro: { en: 'Proposing Apartment Interiors with Efficient Circulation and Aesthetics', ko: '효율적인 동선과 심미성을 고려한 아파트 인테리어 제안' },
      pages: [null],
      desc: PLACEHOLDER_DESC,
    },
    {
      title: 'Practical SketchUp Tutoring A',
      field: 'Software Tutoring | Professional Workflow',
      thumb: 'assets/images/freelance09_thumb.jpg',
      intro: { en: 'Practical SketchUp Optimization Know-How for Professionals', ko: '실무에 즉시 적용 가능한 스케치업 최적화 노하우' },
      pages: [null],
      desc: PLACEHOLDER_DESC,
    },
    {
      title: 'Industrial Design Tutoring A',
      field: 'Design Tutoring | Industrial Design',
      thumb: 'assets/images/freelance10_thumb.jpg',
      intro: { en: 'Translating Ideas into Products: Industrial Design Modeling', ko: '아이디어를 제품으로 구현하는 산업디자인 모델링' },
      pages: [null],
      desc: PLACEHOLDER_DESC,
    },
    {
      title: 'Clinic Interior Modeling Freelance & Tutoring',
      field: 'Modeling & Tutoring | Medical Facility',
      thumb: 'assets/images/freelance11_thumb.jpg',
      intro: { en: 'Medical Space Interiors Balancing Function and Patient Psychology', ko: '기능성과 환자의 심리를 고려한 의료 공간 인테리어' },
      pages: [null],
      desc: PLACEHOLDER_DESC,
    },
    {
      title: 'CAD & SketchUp Tutoring D',
      field: 'Software Tutoring | Interior Design',
      thumb: 'assets/images/freelance12_thumb.jpg',
      intro: { en: 'Highly Detailed 2D/3D Workflow for Interior Design', ko: '디테일이 살아있는 2D/3D 인테리어 워크플로우' },
      pages: [null],
      desc: PLACEHOLDER_DESC,
    },
    {
      title: 'CAD & SketchUp Tutoring E',
      field: 'Software Tutoring | Interior Design',
      thumb: 'assets/images/freelance13_thumb.jpg',
      intro: { en: 'Building a Fast and Accurate Space Design Process', ko: '빠르고 정확한 공간 디자인 프로세스 구축하기' },
      pages: [null],
      desc: PLACEHOLDER_DESC,
    },
    {
      title: 'Overseas Architecture Design Tutoring A',
      field: 'Design Tutoring | Academic Portfolio',
      thumb: 'assets/images/freelance14_thumb.jpg',
      intro: { en: 'Exploring Logical and Experimental Designs of Overseas Architecture Schools', ko: '해외 건축대학의 논리적이고 실험적인 디자인 탐구' },
      pages: [null],
      desc: PLACEHOLDER_DESC,
    },
    {
      title: 'Playground Mounting Modeling & Drawing',
      field: 'Freelance Design | Playground Facility',
      thumb: 'assets/images/freelance15_thumb.jpg',
      intro: { en: 'Mounting Design for Safe and Creative Play Spaces', ko: '안전하고 창의적인 놀이 공간을 위한 마운팅 설계' },
      pages: [null],
      desc: PLACEHOLDER_DESC,
    },
    {
      title: 'Hair Salon Interior Survey & Modeling',
      field: 'Survey & Modeling | Commercial Space',
      thumb: 'assets/images/freelance16_thumb.jpg',
      intro: { en: 'Commercial Space Modeling Based on Accurate Survey Data', ko: '정확한 실측 데이터를 바탕으로 한 상업 공간 모델링' },
      pages: [null],
      desc: PLACEHOLDER_DESC,
    },
  ];

  const DATA = {
    architecture: ARCHITECTURE_PROJECTS,
    freelance: FREELANCE_PROJECTS,
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
      const thumb = p.thumb || (p.pages && p.pages[0]);
      card.className = 'proj-card' + (thumb ? ' has-thumb' : '');
      const thumbHtml = thumb ? '<span class="pc-thumb" style="background-image:url(\''+thumb+'\')"></span>' : '';
      const fieldHtml = p.field ? '<span class="pc-field serif">'+p.field+'</span>' : '';
      card.innerHTML = thumbHtml+'<span class="pc-num serif">'+String(i+1).padStart(2,'0')+'</span><span class="pc-title">'+p.title+'</span>'+fieldHtml;
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
  const viewerIntro = document.getElementById('viewer-intro');
  const viewerIntroEn = viewerIntro.querySelector('.vi-en');
  const viewerIntroKo = viewerIntro.querySelector('.vi-ko');
  const pageDots = document.getElementById('page-dots');
  const viewerBottomleft = document.getElementById('viewer-bottomleft');
  const vbHead = document.getElementById('vb-head');
  vbHead.addEventListener('click', ()=> viewerBottomleft.classList.toggle('collapsed'));
  let introTimer = null;

  function youtubeId(url){
    const m = /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([\w-]{11})/.exec(url || '');
    return m ? m[1] : null;
  }

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
    const yt = youtubeId(src);
    const withIntro = state.pageIndex === 0 && !!proj.intro;
    // intro tagline: 1700ms hold + 1050ms settle transition, plus a small buffer —
    // the first page's media only reveals once the tagline has fully finished moving.
    const revealDelay = withIntro ? 2830 : 20;

    if(yt){
      viewerCanvas.innerHTML = '<iframe class="media-fadein" src="https://www.youtube.com/embed/'+yt+'?autoplay=1&mute=1&rel=0&playsinline=1&hl=en&cc_lang_pref=en" title="'+proj.title+'" style="width:100%;height:100%;border:0;" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>';
    } else if(src && src.endsWith('.mp4')){
      viewerCanvas.innerHTML = '<video class="media-fadein" src="'+src+'" autoplay muted playsinline controls style="max-width:100%;max-height:100%;"></video>';
    } else if(src){
      viewerCanvas.innerHTML = '<img class="media-fadein" src="'+src+'" alt="'+proj.title+'" style="max-width:100%;max-height:100%;object-fit:contain;">';
    } else {
      viewerCanvas.innerHTML = '<span class="placeholder-tag serif">slide '+(state.pageIndex+1)+' / '+proj.pages.length+' — awaiting content</span>';
    }
    setTimeout(()=>{
      const el = viewerCanvas.querySelector('.media-fadein'); if(el) el.classList.add('in');
    }, revealDelay);

    clearTimeout(introTimer);
    if(withIntro){
      viewerIntroEn.textContent = proj.intro.en;
      viewerIntroKo.textContent = proj.intro.ko;
      viewerIntro.classList.remove('settled');
      viewerIntro.classList.add('show');
      introTimer = setTimeout(()=> viewerIntro.classList.add('settled'), 1700);
    } else {
      viewerIntro.classList.remove('show');
      viewerIntro.classList.remove('settled');
    }

    if(proj.desc && typeof proj.desc === 'object'){
      const rows = proj.desc.programs.map(p=>
        '<div class="vd-row"><span class="vd-cat">'+p.cat+'</span> · <span class="vd-tools">'+p.tools+'</span></div>'
      ).join('');
      viewerDesc.innerHTML =
        '<div class="vd-en">'+proj.desc.en+'</div>'+
        '<div class="vd-ko serif">'+proj.desc.ko+'</div>'+
        '<div class="vd-programs">'+rows+'</div>'+
        '<div class="vd-page">'+(state.pageIndex+1)+' / '+proj.pages.length+'</div>';
    } else {
      viewerDesc.textContent = proj.desc + '  ('+(state.pageIndex+1)+'/'+proj.pages.length+')';
    }
    pageDots.innerHTML = '';
    proj.pages.forEach((_, i)=>{
      const btn = document.createElement('button');
      btn.setAttribute('aria-label', 'go to page '+(i+1));
      const d = document.createElement('span');
      if(i===state.pageIndex) d.className='on';
      btn.appendChild(d);
      btn.addEventListener('click', ()=> goToPage(i));
      pageDots.appendChild(btn);
    });
  }
  function goToPage(i){
    if(i === state.pageIndex) return;
    state.pageIndex = i;
    renderViewer();
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
  document.getElementById('viewer-prev').addEventListener('click', viewerPrev);

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
