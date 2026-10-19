// ============================================================
// LANGUAGE
// ============================================================

let language = 'en';

try {
  const saved = localStorage.getItem('atelier-language');

  if (['en', 'fr', 'zh'].includes(saved)) {
    language = saved;
  }
} catch {}

const dictionary = {
  en: {
    index: 'Index',
    about: 'About',
    contact: 'Contact',
    selected: 'Selected works',
    collection: 'THE COLLECTION',
    works: 'WORKS',
    scroll: 'SCROLL TO ENTER',
    previous: 'Previous',
    next: 'Next',
    nextWork: 'NEXT WORK',
    enquire: 'ENQUIRE ABOUT THIS WORK',
    artistHeading: 'ABOUT THE ARTIST',
    artistName: 'Adam S',
    studio: 'Studio enquiries',
    email: 'EMAIL',
    instagram: 'INSTAGRAM',
    location: 'LOCATION',
    cities: 'Paris / New York / Nanjing',
    openMenu: 'Open navigation',
    closeMenu: 'Close navigation',
    closeContact: 'Close contact',
    navigation: 'Navigation',
    studioContact: 'Studio contact',
    languageLabel: 'Language',
    view: 'VIEW',
    sold: 'SOLD',
    drag: 'DRAG',
    nextCursor: 'NEXT',
    open: 'OPEN',
    painting: 'painting',
    detail: 'Surface detail',
    installation: 'shown on an architectural wall',
    slider: 'Artwork images. Use left and right arrow keys',
    portrait: 'Artist portrait',
    summary:
      'Selected paintings, material explorations and studio information.',
    aboutOne:
      'Art has no single definition. It takes many forms, speaks in different sounds, and awakens feelings that words cannot always express. Yet I believe there is something simple at its heart: joy. Above all, I want the act of creating to be a source of relief, a space for freedom, curiosity, and discovery. A place where I can express myself without fear or pain, and simply find peace in the process.',
    aboutTwo:
      'Growing up in France, between different cultures and identities, I have often found myself somewhere between my roots, the place I call home, and the desire to explore what lies beyond. But life is never still. Nothing is meant to remain unchanged. We are constantly moving, discovering, and becoming. I find my own peace in the constant movement of life through creating, learning to embrace the world and all the living beings who inhabit it. Along the way, I hope to share kindness and celebrate the beauty of being alive. I wish to build meaningful connections with others, to experience love and friendship, and to carry a little peace wherever life takes me.'
  },

  fr: {
    index: 'Œuvres',
    about: 'À propos',
    contact: 'Contact',
    selected: 'Sélection d’œuvres',
    collection: 'LA COLLECTION',
    works: 'ŒUVRES',
    scroll: 'DÉFILER POUR ENTRER',
    previous: 'Précédent',
    next: 'Suivant',
    nextWork: 'ŒUVRE SUIVANTE',
    enquire: 'SE RENSEIGNER SUR CETTE ŒUVRE',
    artistHeading: 'À PROPOS DE L’ARTISTE',
    artistName: 'Adam S',
    studio: 'Contacter l’atelier',
    email: 'E-MAIL',
    instagram: 'INSTAGRAM',
    location: 'LOCALISATION',
    cities: 'Paris / New York / Nankin',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    closeContact: 'Fermer les coordonnées',
    navigation: 'Navigation',
    studioContact: 'Coordonnées de l’atelier',
    languageLabel: 'Langue',
    view: 'VOIR',
    sold: 'VENDU',
    drag: 'GLISSER',
    nextCursor: 'SUITE',
    open: 'OUVRIR',
    painting: 'peinture',
    detail: 'Détail de la surface',
    installation: 'présenté sur un mur',
    slider: 'Images de l’œuvre. Utilisez les flèches gauche et droite',
    portrait: 'Portrait de l’artiste',
    summary:
      'Sélection de peintures, recherches sur la matière et informations sur l’atelier.',
    aboutOne:
      'L’art n’a pas de définition unique. Il prend mille formes, s’exprime à travers différents sons et éveille des émotions que les mots ne parviennent pas toujours à traduire. Pourtant, je crois qu’au fond, il existe quelque chose de simple : la joie. Avant tout, je souhaite que la création soit pour moi une source d’apaisement, un espace de liberté, de curiosité et de découverte. Un lieu où je peux m’exprimer sans crainte ni douleur, et simplement trouver la paix dans le processus.',
    aboutTwo:
      'Ayant grandi en France, entre différentes cultures et identités, je me suis souvent retrouvé quelque part entre mes origines, le pays que j’appelle chez moi et cette envie de découvrir ce qui existe ailleurs. Mais la vie n’est jamais immobile. Rien n’est destiné à rester inchangé. Nous sommes constamment en mouvement, à découvrir, à évoluer et à devenir. C’est en créant que je trouve ma propre paix dans ce mouvement perpétuel de la vie, en apprenant à accueillir le monde et tous les êtres vivants qui l’habitent. Sur mon chemin, j’espère partager de la bienveillance et célébrer la beauté d’être en vie. Je souhaite tisser des liens sincères avec les autres, vivre l’amour et l’amitié, et emporter avec moi un peu de paix, où que la vie me mène.'
  },

  zh: {
    index: '作品',
    about: '关于',
    contact: '联系',
    selected: '精选作品',
    collection: '作品集',
    works: '件作品',
    scroll: '向下滚动以浏览',
    previous: '上一张',
    next: '下一张',
    nextWork: '下一件作品',
    enquire: '咨询这件作品',
    artistHeading: '关于艺术家',
    artistName: 'Adam S',
    studio: '联系工作室',
    email: '电子邮箱',
    instagram: 'INSTAGRAM',
    location: '所在地',
    cities: '巴黎 / 纽约 / 南京',
    openMenu: '打开导航',
    closeMenu: '关闭导航',
    closeContact: '关闭联系方式',
    navigation: '导航',
    studioContact: '工作室联系方式',
    languageLabel: '语言',
    view: '查看',
    sold: '已售出',
    drag: '滑动',
    nextCursor: '下一件',
    open: '打开',
    painting: '绘画',
    detail: '作品表面细节',
    installation: '在建筑墙面上的展示效果',
    slider: '作品图片。使用左右方向键切换',
    portrait: '艺术家肖像',
    summary: '精选绘画、材料探索与工作室信息。',
    aboutOne:
      '艺术没有唯一的定义。它有千百种形态，以不同的声音诉说，唤起那些言语未必能够表达的感受。但我始终相信，艺术的内心有一件很简单的事：快乐。对我而言，创作首先应该是一种慰藉，一个充满自由、好奇与探索的空间。一个让我能够不带恐惧、不受伤害地表达自己，并在创作的过程中寻得内心平静的地方。',
    aboutTwo:
      '我在法国长大，游走于不同的文化与身份之间，时常徘徊在自己的根源、称之为家的地方，以及对远方世界的向往之中。然而，生活从未真正静止，没有什么是一成不变的。我们始终在前行，在探索，也在不断成为新的自己。在生命不断流动的过程中，我通过创作寻找属于自己的平静，也慢慢学着拥抱这个世界，以及生活在其中的每一个生命。一路上，我希望传递善意，赞美生命本身的美好。我渴望与他人建立真挚而深刻的连接，感受爱与友谊，无论生活将我带往何方，都愿随身携带一份平和，也将它分享给身边的人。'
  }
};

function t(key) {
  return dictionary[language][key] || dictionary.en[key] || key;
}

// Also accepts plain text for fields that do not need translation.
function translated(value) {
  if (typeof value === 'string') return value;

  return value?.[language] || value?.en || '';
}

// Escape text before inserting it into HTML.
function escapeHTML(value) {
  return String(value ?? '').replace(/[&<>"']/g, character => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[character]);
}

function text(value) {
  return escapeHTML(translated(value));
}

// ============================================================
// ARTWORK DATA
// Keep IDs identical to the corresponding folder names.
// Titles remain in their original language.
// ============================================================

const artworks = [
  {
    id: 'monsieur-vert',
    title: 'Monsieur Vert',
    year: '2026',
    sold: true,

    location: {
      en: 'Lille, France',
      fr: 'Lille, France',
      zh: '法国，里尔'
    },

    dimensions: '120 × 160 cm',

    installations: [
    'images/monsieur-vert-installation-01.jpg',
    'images/monsieur-vert-installation-02.jpg',
    'images/monsieur-vert-installation-03.jpg'
    ],

    medium: {
      en: 'Paint and pigments on canvas',
      fr: 'Peinture et pigments sur toile',
      zh: '布面绘画与色粉'
    },

    description: {
      en: 'An exploration of humanity and beauty. Can something unusual be called beautiful? Can something different be appreciated?',
      fr: 'Une exploration de l’humanité et de la beauté. Peut-on trouver beau ce qui sort de l’ordinaire ? Peut-on apprécier ce qui est différent ?',
      zh: '对人性与美的探索。不同寻常的事物能被称为美吗？与众不同的事物能被欣赏吗？'
    }
  },

  {
    id: 'historical-brown',
    title: 'Historic Brown',
    year: '2026',
    sold: false,

    location: {
      en: 'Suzhou, China',
      fr: 'Suzhou, Chine',
      zh: '中国，苏州'
    },

    dimensions: '100 × 140 cm',

    medium: {
      en: 'Oil pastel on Chinese canvas',
      fr: 'Pastel à l’huile sur toile chinoise',
      zh: '中国画布上的油画棒'
    },

    description: {
      en: 'Inspired by historical murals, this work explores a raw, forceful aesthetic.',
      fr: 'Inspirée de fresques anciennes, cette œuvre explore une esthétique brute et puissante.',
      zh: '这件作品的灵感源自古老壁画，探索一种粗粝而有力的美感。'
    }
  },

  {
    id: 'hide-and-seek',
    title: 'Hide and Seek',
    year: '2024–2026',
    sold: false,

    location: {
      en: 'Paris, France',
      fr: 'Paris, France',
      zh: '法国，巴黎'
    },

    dimensions: '110 × 150 cm',

    medium: {
      en: 'Paint and pigments on canvas',
      fr: 'Peinture et pigments sur toile',
      zh: '布面绘画与色粉'
    },

    description: {
      en: 'If you see it, you see it.',
      fr: 'Si vous le voyez, vous le voyez.',
      zh: '看见了，便看见了。'
    }
  },

  {
    id: '1000-buddah',
    title: '1000 Buddah',
    year: '2026',
    sold: false,

    location: {
      en: 'Paris, France',
      fr: 'Paris, France',
      zh: '法国，巴黎'
    },

    dimensions: '90 × 120 cm',

    medium: {
      en: 'Paint and pigments on canvas',
      fr: 'Peinture et pigments sur toile',
      zh: '布面绘画与色粉'
    },

    description: {
      en: 'Inspired by a temple in South Korea, these thousand Buddhas represent its prosperity and nobility.',
      fr: 'Inspirés d’un temple en Corée du Sud, ces mille bouddhas représentent sa prospérité et sa noblesse.',
      zh: '这千尊佛像的灵感源自韩国的一座寺庙，象征着这座寺庙的繁荣与尊贵。'
    }
  }
].map((artwork, i) => {
  const number = String(i + 1).padStart(2, '0');

  return {
    ...artwork,
    image: `images/artwork-${number}.jpg`,
    detail: `images/artwork-${number}-detail.jpg`
  };
});

// ============================================================
// ELEMENTS AND STATE
// ============================================================

const app = document.querySelector('main');
const menu = document.querySelector('#menu');
const contact = document.querySelector('#contact');
const cursor = document.querySelector('.cursor');

const reduced = matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

let activeWork = 0;
let slide = 0;
let route = '';

let indexScrollFrame = 0;
let indexScrollAbort = null;

let targetX = 0;
let targetY = 0;
let mx = 0;
let my = 0;
let scrollDirty = true;

let px = -100;
let py = -100;
let cx = -100;
let cy = -100;

let spinStart = performance.now();
let entryAngle = null;
let beforeDialog;

// ============================================================
// IMAGES
// Frames use the actual image proportions.
// ============================================================

function fitArtwork(image) {
  const frame = image.closest('.floating, .wall-artwork');

  if (!frame || !image.naturalWidth || !image.naturalHeight) {
    return;
  }

  const ratio = image.naturalWidth / image.naturalHeight;

  frame.style.width =
    `min(70vw, ${60 * ratio}vh, 850px)`;

  frame.style.height =
    `min(${70 / ratio}vw, 60vh, ${850 / ratio}px)`;

  scrollDirty = true;
}

function img(artwork, extra = '') {
  return `
    <img
      src="${artwork.image}"
      alt="${text(artwork.title)}, ${t('painting')}"
      onload="fitArtwork(this)"
      ${extra}
    >
  `;
}

// ============================================================
// SHARED PAGE CONTENT
// ============================================================

function footer() {
  return `
    <footer>
      <a href="./">ATELIER BYSENHA</a>
      <span>${t('selected')}, 2024–2026</span>
      <button data-contact>${t('contact')}</button>
    </footer>
  `;
}

function artworkFacts(artwork) {
  return `
    ${escapeHTML(artwork.year)}<br>
    ${text(artwork.location)}<br><br>
    ${text(artwork.medium)}<br>
    ${escapeHTML(artwork.dimensions)}
  `;
}

// ============================================================
// HOME
// ============================================================

function home() {
  const scenes = artworks.map((artwork, i) => `
    <a
      href="works/${artwork.id}/"
      class="scene"
      data-scene="${i}"
      data-cursor="${t('view')}"
    >
      <div class="wall-artwork">
        ${img(artwork)}
      </div>

      <div class="scene-label">
        <h2>${text(artwork.title)}</h2>
        <p>${artworkFacts(artwork)}</p>
      </div>
    </a>
  `).join('');

  return `
    <section
      class="home"
      style="height: ${(artworks.length + 2) * 100}vh;"
    >
      <div class="stage">
        <div class="floor-shadow"></div>

        <div class="floating">
          <div class="painting-object">
            <div class="painting-face painting-front">
              ${img(artworks[0], 'fetchpriority="high"')}
            </div>

            <div
              class="painting-face painting-back"
              aria-hidden="true"
            ></div>

            <div class="painting-edge edge-left"></div>
            <div class="painting-edge edge-right"></div>
            <div class="painting-edge edge-top"></div>
            <div class="painting-edge edge-bottom"></div>
          </div>
        </div>

        <div class="intro-caption">
          ${t('selected').toLocaleUpperCase()}<br>
          2024 — 2026
        </div>

        <span class="scroll-note">${t('scroll')}</span>

        ${scenes}
      </div>
    </section>

    <section class="home-end">
      <span class="small">${t('collection')}</span>

      <a
        class="large-link"
        href="index/"
        data-cursor="${t('view')}"
      >
        ${t('selected')}
      </a>

      <span class="small">
        ${String(artworks.length).padStart(2, '0')} ${t('works')}
      </span>
    </section>

    ${footer()}
  `;
}

// ============================================================
// INDEX
// ============================================================

function index() {
  const works = artworks.map(artwork => `
    <a
      class="work"
      href="works/${artwork.id}/"
      data-cursor="${t('view')}"
    >
      <figure>
        ${img(artwork, 'loading="lazy"')}

        <figcaption>
          <span>${text(artwork.title)}</span>
          <span>${escapeHTML(artwork.year)}</span>
        </figcaption>
      </figure>
    </a>
  `).join('');

  return `
    <section class="page">
      <h1 class="page-heading">${t('selected')}</h1>

      <div class="index-grid">
        ${works}
      </div>
    </section>

    ${footer()}
  `;
}

// ============================================================
// ARTWORK PAGE
// ============================================================

function work(artwork) {
  activeWork = artworks.indexOf(artwork);
  slide = 0;

  const next = artworks[
    (activeWork + 1) % artworks.length
  ];

  const installations = artwork.installations || [];
  const totalImages = 1 + installations.length;

  return `
    <article class="page">
      <div class="detail">
        <div>
          <div
            class="slider"
            tabindex="0"
            aria-label="${t('slider')}"
            data-cursor="${t('drag')}"
          >
            ${img(artwork, 'class="slide active"')}

            ${installations.map(photo => `
              <img
                class="slide"
                src="${escapeHTML(photo)}"
                alt="${text(artwork.title)} — ${t('installation')}"
                loading="lazy"
              >
            `).join('')}
          </div>

          <div class="slider-controls">
            <button data-prev aria-label="${t('previous')}">
              ${t('previous')}
            </button>

            <span id="counter" aria-live="polite">
              01 / ${String(totalImages).padStart(2, '0')}
            </span>

            <button data-next aria-label="${t('next')}">
              ${t('next')}
            </button>
          </div>
        </div>

        <div class="info">
          <h1>${text(artwork.title)}</h1>

          <p>${artworkFacts(artwork)}</p>

          <p class="description">
            ${text(artwork.description)}
          </p>

            ${artwork.sold
              ? `<p class="small sold-label">${t('sold')}</p>`
              : `<button class="small" data-contact>
                  ${t('enquire')}
                </button>`
            }
        </div>
      </div>

      <a
        class="next-work"
        href="works/${next.id}/"
        data-cursor="${t('nextCursor')}"
      >
        <div>
          <span class="small">${t('nextWork')}</span>
          <h2>${text(next.title)}</h2>
        </div>

        ${img(next, 'loading="lazy"')}
      </a>
    </article>

    ${footer()}
  `;
}

// ============================================================
// ABOUT
// Replace the placeholder name and biography when ready.
// ============================================================

function about() {
  return `
    <article class="page about-layout">
      <img
        class="about-image"
        src="images/artist-portrait.jpg?v=4"
        alt="${t('portrait')}"
      >

      <div class="about-text">
        <span class="small">${t('artistHeading')}</span>

        <h1>${t('artistName')}</h1>

        <p>${t('aboutOne')}</p>
        <p>${t('aboutTwo')}</p>

        <p class="small">${t('cities')}</p>

        <button data-contact>${t('studio')}</button>
      </div>
    </article>

    ${footer()}
  `;
}

// ============================================================
// TRANSLATE THE HEADER, MENU AND CONTACT
// Also supports your other existing HTML files.
// ============================================================

function updateLanguageLabels() {
  document.documentElement.lang = language;

  const header = document.querySelector('header');
  header.querySelector('.brand').textContent = 'ATELIER BYSENHA';

  let selector = document.querySelector('#language-select');

  if (!selector) {
    selector = document.createElement('select');
    selector.id = 'language-select';
    selector.className = 'language-select';

    selector.innerHTML = `
      <option value="en">EN</option>
      <option value="fr">FR</option>
      <option value="zh">中文</option>
    `;

    header.insertBefore(
      selector,
      header.querySelector('.menu-toggle')
    );
  }

  selector.value = language;
  selector.setAttribute('aria-label', t('languageLabel'));

  const toggle = header.querySelector('.menu-toggle');
  toggle.setAttribute('aria-label', t('openMenu'));
  toggle.dataset.cursor = t('open');

  menu.setAttribute('aria-label', t('navigation'));
  contact.setAttribute('aria-label', t('studioContact'));

  const indexLink = menu.querySelector('a[href="index/"]');
  const aboutLink = menu.querySelector('a[href="about/"]');
  const contactButton = menu.querySelector('[data-contact]');

  if (indexLink) indexLink.textContent = t('index');
  if (aboutLink) aboutLink.textContent = t('about');
  if (contactButton) contactButton.textContent = t('contact');

  menu.querySelector('[data-close]')?.setAttribute(
    'aria-label',
    t('closeMenu')
  );

  contact.querySelector('[data-close]')?.setAttribute(
    'aria-label',
    t('closeContact')
  );

  const menuFoot = menu.querySelector('.menu-foot');

  if (menuFoot) {
    menuFoot.textContent =
      `${t('selected').toLocaleUpperCase()} / 2024—2026`;
  }

  const headings = contact.querySelectorAll('.contact-lines p');

  ['email', 'instagram', 'location'].forEach((key, i) => {
    if (headings[i]) headings[i].textContent = t(key);
  });

  const contactLocation = contact.querySelector('.location');

  if (contactLocation) {
    contactLocation.textContent = t('cities');
  }

  if (cursor) {
    cursor.textContent = '';
    cursor.classList.remove('label');
  }
}

// ============================================================
// AUTOMATIC INDEX SCROLLING
// ============================================================

function stopIndexScroll() {
  cancelAnimationFrame(indexScrollFrame);
  indexScrollFrame = 0;

  indexScrollAbort?.abort();
  indexScrollAbort = null;
}

function startIndexScroll() {
  stopIndexScroll();

  if (reduced) return;

  indexScrollAbort = new AbortController();

  const options = {
    passive: true,
    signal: indexScrollAbort.signal
  };

  ['wheel', 'touchstart', 'pointerdown', 'keydown'].forEach(event => {
    window.addEventListener(event, stopIndexScroll, options);
  });

  let previous = 0;
  let position = window.scrollY;
  const begin = performance.now() + 1200;

  function drift(now) {
    if (
      !getSitePath().startsWith('/index') ||
      menu.open ||
      contact.open
    ) {
      stopIndexScroll();
      return;
    }

    if (now < begin || document.hidden) {
      previous = now;
      indexScrollFrame = requestAnimationFrame(drift);
      return;
    }

    const dt = previous
      ? Math.min((now - previous) / 1000, 0.05)
      : 0;

    previous = now;

    const end = Math.max(
      0,
      document.documentElement.scrollHeight - innerHeight
    );

    position = Math.min(end, position + dt * 22);

    window.scrollTo({
      top: position,
      behavior: 'instant'
    });

    if (position >= end) {
      stopIndexScroll();
      return;
    }

    indexScrollFrame = requestAnimationFrame(drift);
  }

  indexScrollFrame = requestAnimationFrame(drift);
}

// ============================================================
// ROUTING AND METADATA
// ============================================================

function getSitePath() {
  const root = new URL(document.baseURI).pathname;
  const pathname = location.pathname;

  if (pathname === root.slice(0, -1)) {
    return '/';
  }

  if (pathname.startsWith(root)) {
    const pagePath = '/' + pathname.slice(root.length);
    return pagePath === '/index.html' ? '/' : pagePath;
  }

  return pathname;
}


function render(autoScroll = true) {
  stopIndexScroll();

  route = getSitePath();

  const artwork = artworks.find(item =>
    route === `/works/${item.id}/` ||
    route === `/works/${item.id}` ||
    route === `/works/${item.id}/index.html`
  );

  if (artwork) {
    app.innerHTML = work(artwork);
    document.title =
      `${translated(artwork.title)} — Atelier BySenha`;
  } else if (route.startsWith('/about')) {
    app.innerHTML = about();
    document.title = `${t('about')} — Atelier BySenha`;
  } else if (route.startsWith('/index')) {
    app.innerHTML = index();
    document.title = `${t('selected')} — Atelier BySenha`;
  } else {
    app.innerHTML = home();
    document.title = `Atelier BySenha — ${t('selected')}`;
  }

  const description = artwork
    ? translated(artwork.description)
    : t('summary');

  document.querySelector(
    'meta[name="description"]'
  )?.setAttribute('content', description);

  document.querySelector(
    'meta[property="og:description"]'
  )?.setAttribute('content', description);

  document.querySelector(
    'meta[property="og:title"]'
  )?.setAttribute('content', document.title);

  document.querySelector(
    'link[rel="canonical"]'
  )?.setAttribute('href', location.origin + location.pathname);

  bind();
  updateLanguageLabels();

  // Handle images already available in the browser cache.
  app.querySelectorAll('img').forEach(image => {
    if (image.complete) fitArtwork(image);
  });

  scrollDirty = true;
  updateScroll();

  if (autoScroll && route.startsWith('/index')) {
    startIndexScroll();
  }
}

function navigate(url) {
  const change = () => {
    history.pushState({}, '', new URL(url, document.baseURI));

    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });

    render();
  };

  if (document.startViewTransition && !reduced) {
    document.startViewTransition(change);
  } else {
    change();
  }
}

document.addEventListener('click', event => {
  const link = event.target.closest('a');

  if (
    !link ||
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey ||
    link.hasAttribute('download') ||
    (link.target && link.target !== '_self') ||
    link.origin !== location.origin ||
    !['http:', 'https:'].includes(link.protocol) ||
    link.hash
  ) {
    return;
  }

  event.preventDefault();

  menu.close();
  contact.close();

  navigate(link.href);
});

window.addEventListener('popstate', () => {
  window.scrollTo({
    top: 0,
    behavior: 'instant'
  });

  render();
});

// ============================================================
// LANGUAGE SWITCHING
// Preserve scroll position, slider and open dialogs.
// ============================================================

document.addEventListener('change', event => {
  if (event.target.id !== 'language-select') return;

  const selected = event.target.value;

  if (!['en', 'fr', 'zh'].includes(selected)) return;

  const previousScroll = window.scrollY;
  const previousSlide = slide;

  language = selected;

  try {
    localStorage.setItem('atelier-language', language);
  } catch {}

  render(false);

  if (app.querySelector('.slider')) {
    slide = previousSlide;
    showSlide();
  }

  window.scrollTo({
    top: previousScroll,
    behavior: 'instant'
  });

  requestAnimationFrame(updateScroll);
});

// ============================================================
// MENU AND CONTACT
// ============================================================

document.querySelector('.menu-toggle').onclick = () => {
  stopIndexScroll();
  menu.showModal();
};

document.querySelectorAll('[data-close]').forEach(button => {
  button.onclick = () => {
    button.closest('dialog').close();
  };
});

function openContact() {
  beforeDialog = document.activeElement;

  stopIndexScroll();
  menu.close();
  contact.showModal();
}

document.querySelectorAll('[data-contact]').forEach(button => {
  button.onclick = openContact;
});

contact.addEventListener('close', () => {
  if (beforeDialog?.isConnected) beforeDialog.focus();
});

// ============================================================
// SLIDER
// ============================================================

function showSlide() {
  const slides = app.querySelectorAll('.slider .slide');

  slides.forEach((element, i) => {
    element.classList.toggle('active', i === slide);
  });

  const counter = app.querySelector('#counter');

  if (counter) {
    counter.textContent =
      `${String(slide + 1).padStart(2, '0')} / ` +
      String(slides.length).padStart(2, '0');
  }
}

function changeSlide(direction) {
  const count = app.querySelectorAll('.slider .slide').length;

  if (!count) return;

  slide = (slide + direction + count) % count;
  showSlide();
}

function bind() {
  app.querySelectorAll('[data-contact]').forEach(button => {
    button.onclick = openContact;
  });

  const slider = app.querySelector('.slider');

  if (!slider) return;

  app.querySelector('[data-prev]').onclick = () => changeSlide(-1);
  app.querySelector('[data-next]').onclick = () => changeSlide(1);

  slider.onkeydown = event => {
    if (['ArrowRight', 'ArrowLeft'].includes(event.key)) {
      event.preventDefault();
      changeSlide(event.key === 'ArrowRight' ? 1 : -1);
    }
  };

  let start = null;

  slider.onpointerdown = event => {
    start = event.clientX;
    slider.setPointerCapture(event.pointerId);
  };

  slider.onpointerup = event => {
    if (start === null) return;

    const distance = event.clientX - start;
    start = null;

    if (Math.abs(distance) > 35) {
      changeSlide(distance < 0 ? 1 : -1);
    }
  };

  slider.onpointercancel = () => {
    start = null;
  };
}

// ============================================================
// POINTER AND CURSOR
// ============================================================

window.addEventListener('scroll', () => {
  scrollDirty = true;
}, { passive: true });

window.addEventListener('resize', () => {
  scrollDirty = true;
});

document.addEventListener('pointermove', event => {
  px = event.clientX;
  py = event.clientY;

  targetX = (px / innerWidth - 0.5) * 8;
  targetY = (py / innerHeight - 0.5) * 4;

  if (!cursor) return;

  const label = event.target
    .closest('[data-cursor]')
    ?.dataset.cursor || '';

  cursor.textContent = label;
  cursor.classList.toggle('label', Boolean(label));
});

// ============================================================
// FLOATING PAINTING AND SCROLL TRANSITIONS
// ============================================================

function updateScroll() {
  const stage = app.querySelector('.stage');

  if (!stage || reduced) return;

  const homeSection = app.querySelector('.home');

  const p = Math.max(
    0,
    Math.min(
      1,
      scrollY / Math.max(1, homeSection.offsetHeight - innerHeight)
    )
  );

  const intro = Math.min(1, p / 0.25);
  const floating = stage.querySelector('.floating');

  const scale = 1 + intro * intro * (
    Math.max(
      innerWidth / floating.offsetWidth,
      innerHeight / floating.offsetHeight
    ) * 1.15 - 1
  );

  const elapsed = (performance.now() - spinStart) / 1000;
  const freeAngle = elapsed * 9;

  if (p < 0.002) {
    entryAngle = null;
  } else if (entryAngle === null) {
    entryAngle = ((freeAngle + 180) % 360) - 180;
  }

  const angle = entryAngle === null
    ? freeAngle
    : entryAngle * (1 - intro);

  const hover = 1 - intro;
  const lift = Math.sin(elapsed * 0.8) * 14 * hover;

  floating.style.transform = `
    translate(-50%, -50%)
    translateY(${lift}px)
    scale(${scale})
  `;

  floating.querySelector('.painting-object').style.transform = `
    rotateY(${angle + mx * hover}deg)
    rotateX(${-my * hover}deg)
  `;

  floating.style.opacity = p > 0.28 ? '0' : '1';

  const shadow = stage.querySelector('.floor-shadow');
  const rotation = (angle + mx * hover) * Math.PI / 180;
  const faceWidth = Math.abs(Math.cos(rotation));
  const edgeWidth = Math.abs(Math.sin(rotation));

  shadow.style.width = `${floating.offsetWidth}px`;

  shadow.style.opacity =
    (0.30 - Math.max(0, -lift) * 0.002) * (1 - intro);

  shadow.style.transform = `
    translateX(-50%)
    scaleX(${0.06 + 0.94 * faceWidth})
    scaleY(${0.65 + 0.35 * edgeWidth + lift / 150})
  `;

  stage.querySelector('.intro-caption').style.opacity =
    1 - Math.min(1, intro * 3);

  stage.querySelector('.scroll-note').style.opacity =
    1 - Math.min(1, intro * 3);

  stage.querySelectorAll('.scene').forEach((scene, i) => {
    const duration = 0.76 / artworks.length;
    const local = (p - 0.24 - i * duration) / duration;

    const opacity =
      Math.min(1, Math.max(0, local * 8)) *
      Math.min(1, Math.max(0, (1.1 - local) * 8));

    scene.style.opacity = opacity;
    scene.classList.toggle('visible', opacity > 0.5);

    const framed = scene.querySelector('.wall-artwork');
    const reveal = Math.max(0, Math.min(1, local / 0.48));
    const ease = 1 - Math.pow(1 - reveal, 3);

    const fullScale = Math.max(
      innerWidth / framed.offsetWidth,
      innerHeight / framed.offsetHeight
    ) * 1.15;

    const wallScale = i === 0
      ? fullScale + (1 - fullScale) * ease
      : 1.06 - 0.06 * ease;

    framed.style.transform = `
      translate(-50%, -50%)
      scale(${wallScale})
    `;

    const label = scene.querySelector('.scene-label');
    const header = document.querySelector('header');

    const gap =
      label.getBoundingClientRect().top -
      header.getBoundingClientRect().bottom;

    const fadeNearHeader = Math.max(0, Math.min(1, gap / 80));
    const revealText = Math.max(0, Math.min(1, (local - 0.4) * 5));

    label.style.opacity = revealText * fadeNearHeader;
  });
}

// ============================================================
// ANIMATION LOOP
// ============================================================

function tick() {
  mx += (targetX - mx) * 0.04;
  my += (targetY - my) * 0.04;

  cx += (px - cx) * 0.2;
  cy += (py - cy) * 0.2;

  if (cursor) {
    cursor.style.left = `${cx}px`;
    cursor.style.top = `${cy}px`;
  }

  if (scrollDirty || app.querySelector('.stage')) {
    updateScroll();
  }

  scrollDirty = false;
  requestAnimationFrame(tick);
}

// ============================================================
// START
// ============================================================

render();

if (!reduced) {
  tick();
}