/* ============================================================
   COSTURAMA — main.js
   ============================================================ */

/* ── SVG ICONS ─────────────────────────────────────────────── */
const ICONS = {
  whatsapp: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>`,

  uniform: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
    <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.57a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.57a2 2 0 0 0-1.34-2.23z"/>
  </svg>`,

  medical: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2"/>
    <line x1="12" y1="8" x2="12" y2="16"/>
    <line x1="8"  y1="12" x2="16" y2="12"/>
  </svg>`,

  scissors: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="6" cy="6" r="3"/>
    <circle cx="6" cy="18" r="3"/>
    <line x1="20" y1="4"     x2="8.12" y2="15.88"/>
    <line x1="14.47" y1="14.48" x2="20" y2="20"/>
    <line x1="8.12" y1="8.12"   x2="12" y2="12"/>
  </svg>`,

  shop: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
    <line x1="3" y1="6" x2="21" y2="6"/>
    <path d="M16 10a4 4 0 0 1-8 0"/>
  </svg>`,

  sewingMachine: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
    <rect x="2" y="16" width="20" height="2.5" rx="1"/>
    <path d="M4 16V10a2 2 0 0 1 2-2h4"/>
    <path d="M10 8h6a2 2 0 0 1 2 2v6"/>
    <rect x="13" y="4" width="6" height="5" rx="1"/>
    <line x1="16" y1="9"    x2="16" y2="14.5"/>
    <line x1="14" y1="14.5" x2="18" y2="14.5"/>
    <circle cx="16" cy="3"  r="1"/>
    <circle cx="7"  cy="12" r="2.2"/>
    <circle cx="7"  cy="12" r="0.8"/>
  </svg>`,

  chat: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>`,

  needle: `<svg viewBox="0 0 200 420" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="100" y1="400" x2="100" y2="70" stroke="#C9B49A" stroke-width="2.5"/>
    <ellipse cx="100" cy="64" rx="14" ry="9" stroke="#C9B49A" stroke-width="2"/>
    <path d="M114 64 C136 46 158 22 146 10 C134 -2 117 16 129 28 C141 40 164 34 170 22"
          stroke="#C9B49A" stroke-width="2" stroke-linecap="round"/>
    <path d="M96 400 C96 407 100 416 100 420 C100 416 104 407 104 400" fill="#C9B49A"/>
  </svg>`,

  award: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="8" r="6"/>
    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
  </svg>`,

  ruler: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 7h18v10H3z" rx="1"/>
    <line x1="7"  y1="7"  x2="7"  y2="10"/>
    <line x1="11" y1="7"  x2="11" y2="12"/>
    <line x1="15" y1="7"  x2="15" y2="10"/>
    <line x1="19" y1="7"  x2="19" y2="10"/>
  </svg>`,

  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>`
};

/* ── WHY US DATA ────────────────────────────────────────────── */
const WHY_ITEMS = [
  { icon: 'award',   label: 'Años de experiencia',  desc: 'Trayectoria sólida en confección y sastrería en Honduras.' },
  { icon: 'ruler',   label: 'Hecho a medida',        desc: 'Cada prenda y servicio se adapta exactamente a lo que necesitás.' },
  { icon: 'clock',   label: 'Entrega garantizada',   desc: 'Respetamos los tiempos acordados, siempre.' },
  { icon: 'chat',    label: 'Atención directa',      desc: 'Hablás directo con quien hace el trabajo, sin intermediarios.' }
];

const WA_LINK = 'https://wa.me/50492898429';

// Genera un link de WhatsApp con mensaje prellenado
function waLink(text) {
  return `${WA_LINK}?text=${encodeURIComponent(text)}`;
}

/* ── SERVICE CARDS (teaser en el index, cada una manda a su página) ── */
const SERVICE_CARDS = [
  {
    icon: 'uniform',
    name: 'Hecho aquí',
    desc: 'Uniformes escolares, empresariales y ropa médica, confeccionados a medida en nuestro taller.',
    href: 'hecho-aqui.html'
  },
  {
    icon: 'scissors',
    name: 'Reparación de Ropa',
    desc: 'Arreglos, cambio de cierres, dobladillos y ajustes de talla, con precisión y rapidez.',
    href: 'reparacion.html'
  },
  {
    icon: 'sewingMachine',
    name: 'Máquinas',
    desc: 'Venta de máquinas de coser nuevas y usadas, además de reparación y mantenimiento técnico.',
    href: 'maquinas.html'
  }
];

/* ── ABOUT DATA ─────────────────────────────────────────────── */
const ABOUT = {
  intro: [
    'Costurama es una empresa especializada en el corte, confección y reparación de prendas, así como en el mantenimiento de máquinas de coser.',
    'Su fundador es Don Javier Argueta, un sastre con más de 35 años de experiencia en el oficio y en el área técnica de máquinas de coser. Además de la confección de prendas, ofrecemos servicios de reparación y mantenimiento de alta calidad para nuestros clientes.'
  ],
  vision: 'Ser el referente por excelencia en Honduras en el área de confección, reparación textil y servicios de máquinas de coser — la primera opción para la reparación de prendas, mantenimiento de máquinas, confección de uniformes y compra de maquinaria. Una empresa integral, reconocida por su calidad, confianza y atención al cliente.',
  mision: 'Trabajamos con entusiasmo y compromiso diario para ofrecer servicios y productos de la más alta calidad en confección, reparación textil y maquinaria de costura. Cada trabajo se realiza con precisión, responsabilidad y excelencia, asegurando soluciones duraderas y la satisfacción de cada cliente.',
  schedule: 'Lunes a sábado · 8:00 a.m. – 6:00 p.m.'
};

/* ── CATALOGO DATA ──────────────────────────────────────────── */
// Agregá tus fotos en img/catalogo/<categoria>/ y actualizá estos arrays
const CATALOGO = {
  uniform: {
    titulo: 'Uniformes',
    subcategorias: [
      { key: 'uniform-escolar',     label: 'Escolares',     carpeta: 'img/catalogo/uniformes/escolares/' },
      { key: 'uniform-empresarial', label: 'Empresariales', carpeta: 'img/catalogo/uniformes/empresariales/' }
    ]
  },
  'uniform-escolar': {
    titulo: 'Uniformes Escolares',
    fotos: [
      'img/catalogo/uniformes/escolares/u1.webp',
      'img/catalogo/uniformes/escolares/u11.webp',
      'img/catalogo/uniformes/escolares/u1111.webp',
    ]
  },
  'uniform-empresarial': {
    titulo: 'Uniformes Empresariales',
    fotos: [
      'img/catalogo/uniformes/empresariales/u2.webp',
      'img/catalogo/uniformes/empresariales/u22.webp',
      'img/catalogo/uniformes/empresariales/u222.webp',
      'img/catalogo/uniformes/empresariales/u2222.webp',
      'img/catalogo/uniformes/empresariales/u22222.webp',
      'img/catalogo/uniformes/empresariales/u222222.webp',
      'img/catalogo/uniformes/empresariales/u2222222.webp',
      'img/catalogo/uniformes/empresariales/u22222222.webp',
      'img/catalogo/uniformes/empresariales/u3.webp',
      'img/catalogo/uniformes/empresariales/u4.webp',
      'img/catalogo/uniformes/empresariales/u44.webp',
    ]
  },
  'medical': {
    titulo: 'Ropa médica y hospitalaria',
    fotos: [
      'img/catalogo/medico/m1.webp',
      'img/catalogo/medico/m11.webp',
      'img/catalogo/medico/m111.webp',
      'img/catalogo/medico/m1111.webp',
      'img/catalogo/medico/m2.webp',
      'img/catalogo/medico/m22.webp',
      'img/catalogo/medico/m222.webp',
      'img/catalogo/medico/m2222.webp',
      'img/catalogo/medico/m22222.webp',
    ]
  },
  'scissors': {
    titulo: 'Reparación de ropa',
    fotos: [
    ]
  },
  'shop': {
    titulo: 'Máquinas de coser',
    fotos: [
    ]
  }
};

/* ── PAGE CONTENT (hecho-aqui / reparacion / maquinas) ───────── */
const PAGES = {
  'hecho-aqui': {
    metaTitle: 'Uniformes y Ropa Médica — Costurama',
    tag: 'Confección a medida',
    title: 'Hecho aquí,<br>hilo por <em>hilo.</em>',
    desc: 'Uniformes escolares, empresariales y ropa médica confeccionados en nuestro taller en Siguatepeque, con más de 35 años de experiencia.',
    queEsTitle: '¿Qué hacemos?',
    queEsText: 'Confeccionamos uniformes escolares y empresariales, además de ropa médica y hospitalaria — gabachas, pijamas quirúrgicos, sábanas de camilla y cobertores de equipo. Todo hecho a medida, con materiales duraderos y acabados profesionales.',
    pasos: [
      { title: 'Contanos qué necesitás', desc: 'Tipo de prenda, cantidad, y si ya tenés un diseño o logo definido.' },
      { title: 'Tomamos medidas', desc: 'Para colegios o empresas, coordinamos la toma de medidas del grupo.' },
      { title: 'Confeccionamos', desc: 'Cada prenda se corta y cose en nuestro taller, con revisión de calidad.' },
      { title: 'Entregamos a tiempo', desc: 'Respetamos el plazo acordado desde el inicio.' }
    ],
    catalogKeys: [
      { key: 'uniform-escolar', label: 'Escolares' },
      { key: 'uniform-empresarial', label: 'Empresariales' },
      { key: 'medical', label: 'Médicos' }
    ],
    faq: [
      { q: '¿Hacen pedidos por cantidad, para colegios o empresas?', a: 'Sí, es nuestra especialidad — manejamos pedidos grandes con tallas variadas.' },
      { q: '¿Puedo llevar mi propia tela?', a: 'Sí, podés traer tu tela o te asesoramos para elegir la mejor opción.' },
      { q: '¿Confeccionan ropa médica para clínicas u hospitales?', a: 'Sí — gabachas, pijamas quirúrgicos, sábanas de camilla y cobertores de equipo.' }
    ],
    waText: 'Hola, quisiera información sobre uniformes y ropa médica',
    badge: { label: 'Experiencia', value: '+35 años', sub: 'Sastrería en Siguatepeque' },
    heroImage: 'img/hero/hecho-aqui.jpg'
  },
  reparacion: {
    metaTitle: 'Reparación de Ropa — Costurama',
    tag: 'Segunda vida para tus prendas',
    title: 'Reparación de<br><em>ropa.</em>',
    desc: 'Le damos segunda vida a tus prendas — desde cierres rotos hasta ajustes de talla, con la misma atención al detalle que ponemos en una prenda nueva.',
    queEsTitle: '¿Qué reparamos?',
    queEsText: 'Cambio de cierres, dobladillos, ajustes de talla, remiendos, botones y ojales, forros internos, y reparaciones en cuero o mezclilla. Si se puede coser, probablemente lo podemos arreglar.',
    pasos: [
      { title: 'Traé tu prenda', desc: 'Al taller, o coordinamos los detalles por WhatsApp.' },
      { title: 'Evaluamos el daño', desc: 'Te decimos qué se puede hacer y cómo.' },
      { title: 'Te damos tiempo y costo', desc: 'Sin sorpresas, antes de empezar el trabajo.' },
      { title: 'Recogés tu prenda lista', desc: 'Revisada y con la calidad de siempre.' }
    ],
    catalogKeys: [{ key: 'scissors', label: 'Reparación de Ropa' }],
    faq: [
      { q: '¿Cuánto tarda una reparación?', a: 'Depende del trabajo — arreglos simples suelen hacerse el mismo día; escríbenos para un estimado.' },
      { q: '¿Reparan cuero o solo tela?', a: 'Reparamos ambos.' }
    ],
    waText: 'Hola, quisiera información sobre reparación de ropa',
    badge: { label: 'Atención', value: 'Rápida', sub: 'Arreglos simples el mismo día' },
    heroImage: 'img/hero/reparacion.jpg'
  },
  maquinas: {
    metaTitle: 'Máquinas de Coser — Venta y Reparación — Costurama',
    tag: 'Venta y servicio técnico',
    title: 'Máquinas de<br><em>coser.</em>',
    desc: 'Vendemos máquinas de coser nuevas y usadas, y les damos mantenimiento y reparación con más de 35 años de experiencia técnica.',
    queEsTitle: '¿Qué ofrecemos?',
    queEsText: 'Venta de máquinas de coser nuevas y de segunda mano, con asesoría personalizada para elegir la que mejor se adapta a tu necesidad. También ofrecemos diagnóstico, mantenimiento preventivo, reparación y repuestos para todo tipo de máquinas.',
    pasos: [
      { title: 'Contanos qué necesitás', desc: '¿Comprar una máquina o reparar la que ya tenés?' },
      { title: 'Asesoría o diagnóstico', desc: 'Te ayudamos a elegir, o revisamos la falla sin compromiso.' },
      { title: 'Cotización clara', desc: 'Precio y tiempo estimado antes de proceder.' },
      { title: 'Entrega', desc: 'Tu máquina lista para coser, nueva o reparada.' }
    ],
    catalogKeys: [{ key: 'shop', label: 'Máquinas de Coser' }],
    faq: [
      { q: '¿Tienen repuestos disponibles?', a: 'Sí, manejamos repuestos para las marcas más comunes.' },
      { q: '¿Compran máquinas usadas?', a: 'Escríbenos por WhatsApp con detalles de tu máquina y te decimos.' }
    ],
    waText: 'Hola, quisiera información sobre máquinas de coser',
    badge: { label: 'Servicio técnico', value: 'Venta y reparación', sub: 'Todas las marcas' },
    heroImage: 'img/hero/maquinas.jpg'
  }
};

/* ── RENDER HELPERS ─────────────────────────────────────────── */
const NAV_LINKS = [
  { label: 'Hecho aquí',          href: 'hecho-aqui.html', match: 'hecho-aqui' },
  { label: 'Reparación de Ropa',  href: 'reparacion.html', match: 'reparacion' },
  { label: 'Máquinas',            href: 'maquinas.html',   match: 'maquinas' },
  { label: 'Nosotros',            href: 'nosotros.html',   match: 'nosotros' }
];

function renderNav() {
  const currentPage = document.body.dataset.page || 'index';

  const linksHtml = NAV_LINKS.map(l => `
    <a href="${l.href}" class="nav__link ${l.match === currentPage ? 'nav__link--active' : ''}">${l.label}</a>
  `).join('');

  document.getElementById('nav').innerHTML = `
    <a href="index.html" class="nav__brand">
      <img class="nav__needle-icon" src="img/aguja_nav.png" alt="Costurama" />
      <span class="nav__wordmark">COSTURAMA</span>
    </a>
    <div class="nav__links" id="nav-links">${linksHtml}</div>
    <div class="nav__actions">
      <a href="${WA_LINK}" target="_blank" rel="noopener" class="btn btn--primary nav__whatsapp">
        ${ICONS.whatsapp} WhatsApp
      </a>
      <button class="nav__toggle" id="nav-toggle" aria-label="Abrir menú" aria-expanded="false">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
          <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
        </svg>
      </button>
    </div>`;

  const toggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');

  toggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('nav__links--open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    navLinks.classList.remove('nav__links--open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}

function renderHero() {
  document.getElementById('hero').innerHTML = `
    <div class="hero__content">
      <span class="hero__tag">Siguatepeque, Honduras</span>
      <div class="hero__logo-display">
        <span class="hero__wordmark">COSTURAMA</span>
        <span class="hero__slogan">Elegancia y Estilo</span>
      </div>
      <h1 class="hero__title">Hecho a tu <em>medida,</em><br>con precisión.</h1>
      <p class="hero__desc">
        Uniformes, ropa médica, reparación de prendas y servicio técnico de máquinas de coser.
        Elegancia y estilo en cada puntada.
      </p>
      <div class="hero__actions">
        <a href="${WA_LINK}" target="_blank" rel="noopener" class="btn btn--primary">
          ${ICONS.whatsapp} Escribinos ahora
        </a>
        <a href="#servicios" class="btn btn--ghost">Ver servicios ↓</a>
      </div>
    </div>

    <div class="hero__visual">
      <img class="hero__photo" src="img/hero.jpg" alt="Sastre trabajando en taller de costura" />
      <div class="hero__badge">
        <p>Atención personalizada</p>
        <strong>Lun – Sáb</strong>
        <span class="hero__badge-hours">8:00 a.m. – 6:00 p.m.</span>
      </div>
    </div>`;
}

function renderServicesTeaser() {
  const cards = SERVICE_CARDS.map(s => `
    <a href="${s.href}" class="service-card service-card--clickable">
      <div class="service-card__icon">${ICONS[s.icon]}</div>
      <h3 class="service-card__name">${s.name}</h3>
      <p class="service-card__desc">${s.desc}</p>
      <span class="service-card__cta">Ver más →</span>
    </a>`).join('');

  document.getElementById('servicios').innerHTML = `
    <span class="section-label">Lo que hacemos</span>
    <h2 class="section-title">Nuestros <em>servicios</em></h2>
    <div class="services__grid">${cards}</div>`;
}

function renderNosotrosHero() {
  document.getElementById('page-hero').innerHTML = `
    <div class="nosotros-hero__bg">
      <img src="img/hero/nosotros.jpg" alt="Costurama — taller de costura"
           onerror="this.onerror=null; this.src='img/hero.jpg';" />
    </div>
    <div class="nosotros-hero__content">
      <span class="hero__tag">Quiénes somos</span>
      <h1 class="hero__title">¿Qué es <em>Costurama?</em></h1>
      <p class="hero__desc">
        Confección, reparación textil y máquinas de coser, con la experiencia de Don Javier Argueta
        detrás de cada prenda.
      </p>
      <div class="hero__actions">
        <a href="${WA_LINK}" target="_blank" rel="noopener" class="btn btn--primary">
          ${ICONS.whatsapp} Escribinos ahora
        </a>
      </div>
    </div>`;
}

function renderAbout() {
  document.getElementById('about').innerHTML = `
    <div class="about__inner">

      <div class="about__header">
        <span class="section-label">Quiénes somos</span>
        <h2 class="section-title">¿Qué es <em>Costurama?</em></h2>
      </div>

      <div class="about__body">

        <div class="about__text">
          ${ABOUT.intro.map(p => `<p class="about__para">${p}</p>`).join('')}

        </div>

        <div class="about__cards">
          <div class="about__card">
            <div class="about__card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
            </div>
            <h3 class="about__card-title">Nuestra Visión</h3>
            <p class="about__card-text">${ABOUT.vision}</p>
          </div>

          <div class="about__card">
            <div class="about__card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            </div>
            <h3 class="about__card-title">Nuestra Misión</h3>
            <p class="about__card-text">${ABOUT.mision}</p>
          </div>
        </div>

      </div>
    </div>`;
}

function renderWhy() {
  const items = WHY_ITEMS.map(item => `
    <div class="why-item">
      <div class="why-item__icon">${ICONS[item.icon]}</div>
      <div class="why-item__label">${item.label}</div>
      <div class="why-item__desc">${item.desc}</div>
    </div>`).join('');

  document.getElementById('why').innerHTML = `
    <div class="why__inner">
      <span class="section-label">¿Por qué elegirnos?</span>
      <h2 class="section-title">Calidad que se nota<br>en cada <em>puntada.</em></h2>
      <div class="why__grid">${items}</div>
    </div>`;
}

function renderCta() {
  document.getElementById('cta').innerHTML = `
    <span class="section-label">Contacto</span>
    <h2 class="section-title">¿Listo para <em>empezar?</em></h2>
    <p class="cta__desc">Escribinos por WhatsApp y te respondemos enseguida. Cotizaciones rápidas, sin compromiso.</p>
    <a href="${WA_LINK}" target="_blank" rel="noopener" class="btn btn--primary btn--lg">
      ${ICONS.whatsapp} Escribir por WhatsApp
    </a>
    <span class="cta__note">+504 9289 8429 · Siguatepeque, Honduras</span>`;
}

function renderFooter() {
  document.getElementById('footer').innerHTML = `
    <img class="footer__logo" src="img/COSTURAMA.png" alt="Costurama" />
    <p class="footer__copy">© 2026 Costurama · Elegancia y Estilo · Siguatepeque, Honduras</p>
    <p class="footer__dev">
      Designed &amp; built by
      <a href="https://instagram.com/javi_argueta24" target="_blank" rel="noopener" class="footer__dev-link">
        @javi_argueta24
      </a>
    </p>`;
}

// Foto dedicada del hero de cada página (con respaldo a la genérica si aún no existe el archivo)
function getPageHeroImage(p) {
  return p.heroImage || 'img/hero.jpg';
}

/* ── SERVICE PAGE RENDER (hecho-aqui / reparacion / maquinas) ── */
function renderServicePage(pageKey) {
  const p = PAGES[pageKey];
  if (!p) return;

  document.getElementById('page-hero').innerHTML = `
    <div class="hero__content">
      <span class="hero__tag">${p.tag}</span>
      <h1 class="hero__title">${p.title}</h1>
      <p class="hero__desc">${p.desc}</p>
      <div class="hero__actions">
        <a href="${waLink(p.waText)}" target="_blank" rel="noopener" class="btn btn--primary">
          ${ICONS.whatsapp} Consultar por WhatsApp
        </a>
      </div>
    </div>
    <div class="hero__visual">
      <img class="hero__photo" src="${getPageHeroImage(p)}" alt="${p.metaTitle}"
           onerror="this.onerror=null; this.src='img/hero.jpg';" />
      <div class="hero__badge">
        <p>${p.badge.label}</p>
        <strong>${p.badge.value}</strong>
        <span class="hero__badge-hours">${p.badge.sub}</span>
      </div>
    </div>`;

  document.getElementById('que-es').innerHTML = `
    <div class="queEs__inner">
      <span class="section-label">Sobre este servicio</span>
      <h2 class="section-title">${p.queEsTitle}</h2>
      <p class="queEs__text">${p.queEsText}</p>
    </div>`;

  document.getElementById('como-funciona').innerHTML = `
    <div class="pasos__inner">
      <span class="section-label">Cómo funciona</span>
      <h2 class="section-title">El <em>proceso.</em></h2>
      <div class="pasos__grid">
        ${p.pasos.map((step, i) => `
          <div class="paso-card">
            <span class="paso-card__num">${i + 1}</span>
            <h3 class="paso-card__title">${step.title}</h3>
            <p class="paso-card__desc">${step.desc}</p>
          </div>`).join('')}
      </div>
    </div>`;

  const categories = p.catalogKeys
    .map(c => ({ label: c.label, fotos: (CATALOGO[c.key] && CATALOGO[c.key].fotos) || [] }))
    .filter(c => c.fotos.length > 0);

  const showTitles = categories.length > 1;

  const MAX_GRID = 8;

  const catalogoHtml = categories.length ? categories.map((cat, catIdx) => {
    const total = cat.fotos.length;
    const hasMore = total > MAX_GRID;
    const visible = cat.fotos.slice(0, MAX_GRID);

    const itemsHtml = visible.map((src, i) => {
      const isMoreTile = hasMore && i === MAX_GRID - 1;
      if (isMoreTile) {
        return `
          <div class="modal-grid__item modal-grid__item--more" data-cat="${catIdx}">
            <img src="${src}" alt="${cat.label} — ver más fotos" loading="lazy"
                 onerror="this.closest('.modal-grid__item').style.display='none'" />
            <div class="modal-grid__more-overlay">
              <span class="modal-grid__more-label">Ver más</span>
              <span class="modal-grid__more-count">+${total - (MAX_GRID - 1)}</span>
            </div>
          </div>`;
      }
      return `
        <div class="modal-grid__item" data-index="${i}">
          <img src="${src}" alt="${cat.label} ${i + 1}" loading="lazy"
               onerror="this.closest('.modal-grid__item').style.display='none'" />
        </div>`;
    }).join('');

    return `
      <div class="catalogo__category">
        ${showTitles ? `<h3 class="catalogo__category-title">${cat.label}</h3>` : ''}
        <div class="catalogo__grid" data-cat="${catIdx}">${itemsHtml}</div>
      </div>`;
  }).join('') : `<p class="catalogo__empty">Muy pronto vas a poder ver fotos reales de este servicio aquí.</p>`;

  document.getElementById('catalogo-section').innerHTML = `
    <div class="catalogo__inner">
      <span class="section-label">Nuestro trabajo</span>
      <h2 class="section-title">Fotos <em>reales.</em></h2>
      ${catalogoHtml}
    </div>`;

  document.querySelectorAll('#catalogo-section .catalogo__grid').forEach(grid => {
    const catIdx = parseInt(grid.dataset.cat);
    const { fotos, label } = categories[catIdx];

    grid.querySelectorAll('.modal-grid__item:not(.modal-grid__item--more)').forEach(item => {
      item.addEventListener('click', () => {
        const idx = parseInt(item.dataset.index);
        window.openLightbox(fotos, idx, label);
      });
    });

    const moreTile = grid.querySelector('.modal-grid__item--more');
    if (moreTile) {
      moreTile.addEventListener('click', () => {
        window.openCatalogStrip(fotos, label);
      });
    }
  });

  document.getElementById('faq-section').innerHTML = `
    <div class="faq__inner">
      <span class="section-label">Preguntas frecuentes</span>
      <h2 class="section-title">¿Tenés <em>dudas?</em></h2>
      <div class="faq__list">
        ${p.faq.map(item => `
          <details class="faq-item">
            <summary class="faq-item__q">${item.q}</summary>
            <p class="faq-item__a">${item.a}</p>
          </details>`).join('')}
      </div>
    </div>`;

  document.getElementById('page-cta').innerHTML = `
    <span class="section-label">Contacto</span>
    <h2 class="section-title">¿Listo para <em>empezar?</em></h2>
    <p class="cta__desc">Escribinos por WhatsApp y te respondemos enseguida.</p>
    <a href="${waLink(p.waText)}" target="_blank" rel="noopener" class="btn btn--primary btn--lg">
      ${ICONS.whatsapp} Escribir por WhatsApp
    </a>
    <span class="cta__note">+504 9289 8429 · Siguatepeque, Honduras</span>`;
}

/* ── MODAL ──────────────────────────────────────────────────── */
window.openModal = function(categoria) {
  const data = CATALOGO[categoria];
  if (!data) return;

  // Si tiene subcategorías, mostrar submenú en lugar del catálogo
  if (data.subcategorias) {
    const opciones = data.subcategorias.map(sub => `
      <div class="subcat-card" data-key="${sub.key}">
        <span class="subcat-card__label">${sub.label}</span>
        <span class="subcat-card__arrow">→</span>
      </div>`).join('');

    document.getElementById('modal').innerHTML = `
      <div class="modal__backdrop" id="modal-backdrop"></div>
      <div class="modal__box modal__box--sm">
        <div class="modal__header">
          <h2 class="modal__title">${data.titulo}</h2>
          <button class="modal__close" id="modal-close-btn" aria-label="Cerrar">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
        <div class="subcat-grid">${opciones}</div>
      </div>`;

    document.getElementById('modal').classList.add('modal--open');
    document.body.style.overflow = 'hidden';
    history.pushState({ modal: true, categoria }, '', `#catalogo-${categoria}`);

    document.getElementById('modal-backdrop').addEventListener('click', window.closeModal);
    document.getElementById('modal-close-btn').addEventListener('click', window.closeModal);

    document.querySelectorAll('.subcat-card').forEach(card => {
      card.addEventListener('click', () => {
        window.closeModal();
        setTimeout(() => window.openModal(card.dataset.key), 50);
      });
    });
    return;
  }

  const items = data.fotos.map((src, i) => `
    <div class="modal-grid__item" data-index="${i}">
      <img src="${src}" alt="${data.titulo} ${i + 1}" loading="lazy"
           onerror="this.closest('.modal-grid__item').style.display='none'" />
    </div>`).join('');

  document.getElementById('modal').innerHTML = `
    <div class="modal__backdrop" id="modal-backdrop"></div>
    <div class="modal__box">
      <div class="modal__header">
        <h2 class="modal__title">${data.titulo}</h2>
        <button class="modal__close" id="modal-close-btn" aria-label="Cerrar">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
               stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6"  y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>
      <div class="modal__grid" id="modal-grid">${items}</div>
      <div class="modal__footer">
        <a href="${waLink('Hola, quisiera información sobre ' + data.titulo)}" target="_blank" rel="noopener" class="btn btn--primary btn--lg">
          ${ICONS.whatsapp} Consultar por WhatsApp
        </a>
      </div>
    </div>`;

  document.getElementById('modal').classList.add('modal--open');
  document.body.style.overflow = 'hidden';

  document.getElementById('modal-backdrop').addEventListener('click', window.closeModal);
  document.getElementById('modal-close-btn').addEventListener('click', window.closeModal);

  // Integrar con el botón de atrás del navegador
  history.pushState({ modal: true, categoria }, '', `#catalogo-${categoria}`);

  // Lightbox — clic en foto la abre grande
  document.querySelectorAll('.modal-grid__item').forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      const allFotos = data.fotos;
      const idx = parseInt(item.dataset.index);
      window.openLightbox(allFotos, idx, data.titulo);
    });
  });
}

window.closeModal = function(pushHistory = false) {
  const modal = document.getElementById('modal');
  if (!modal.classList.contains('modal--open')) return;
  modal.classList.remove('modal--open');
  document.body.style.overflow = '';

  // Limpiar el hash de la URL sin agregar al historial
  if (window.location.hash.startsWith('#catalogo-')) {
    history.replaceState(null, '', window.location.pathname);
  }
}

// Cerrar modal al presionar atrás en el navegador
window.addEventListener('popstate', (e) => {
  const modal = document.getElementById('modal');
  if (modal.classList.contains('modal--open')) {
    modal.classList.remove('modal--open');
    document.body.style.overflow = '';
  }
});

// Cerrar con Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') window.closeModal();
});

/* ── LIGHTBOX ───────────────────────────────────────────────── */
window.openLightbox = function(fotos, startIndex, titulo) {
  let current = startIndex;

  function render() {
    const lb = document.getElementById('lightbox');
    lb.innerHTML = `
      <div class="lb__backdrop" id="lb-backdrop"></div>
      <div class="lb__box">
        <button class="lb__close" id="lb-close" aria-label="Cerrar">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
        <button class="lb__nav lb__nav--prev" id="lb-prev" aria-label="Anterior">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>
        <div class="lb__img-wrap">
          <img class="lb__img" src="${fotos[current]}" alt="${titulo} ${current + 1}" />
        </div>
        <button class="lb__nav lb__nav--next" id="lb-next" aria-label="Siguiente">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </button>
        <div class="lb__counter">${current + 1} / ${fotos.length}</div>
      </div>`;

    lb.classList.add('lb--open');

    document.getElementById('lb-backdrop').addEventListener('click', window.closeLightbox);
    document.getElementById('lb-close').addEventListener('click', window.closeLightbox);
    document.getElementById('lb-prev').addEventListener('click', () => {
      current = (current - 1 + fotos.length) % fotos.length;
      render();
    });
    document.getElementById('lb-next').addEventListener('click', () => {
      current = (current + 1) % fotos.length;
      render();
    });
  }

  render();
}

// Visor de scroll horizontal — se abre al hacer clic en "Ver más" cuando hay más de 9 fotos
window.openCatalogStrip = function(fotos, titulo) {
  const lb = document.getElementById('lightbox');
  lb.innerHTML = `
    <div class="lb__backdrop" id="lb-backdrop"></div>
    <div class="strip__box">
      <button class="lb__close" id="lb-close" aria-label="Cerrar">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
      <div class="strip__header">
        <h3 class="strip__title">${titulo}</h3>
        <span class="strip__hint">Desliza para ver todas (${fotos.length})</span>
      </div>
      <div class="strip__scroll" id="strip-scroll">
        ${fotos.map((src, i) => `
          <div class="strip__item">
            <img class="strip__img" src="${src}" alt="${titulo} ${i + 1}" loading="lazy" />
          </div>`).join('')}
      </div>
    </div>`;

  lb.classList.add('lb--open');

  document.getElementById('lb-backdrop').addEventListener('click', window.closeLightbox);
  document.getElementById('lb-close').addEventListener('click', window.closeLightbox);
}

window.closeLightbox = function() {
  const lb = document.getElementById('lightbox');
  lb.classList.remove('lb--open');
  lb.innerHTML = '';
}

// Navegación con teclado en lightbox
document.addEventListener('keydown', e => {
  const lb = document.getElementById('lightbox');
  if (!lb.classList.contains('lb--open')) return;
  if (e.key === 'ArrowRight') document.getElementById('lb-next')?.click();
  if (e.key === 'ArrowLeft')  document.getElementById('lb-prev')?.click();
  if (e.key === 'Escape')     window.closeLightbox();
});

/* ── INIT ───────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  renderNav();
  renderFooter();

  const page = document.body.dataset.page || 'index';

  if (page === 'index') {
    renderHero();
    renderServicesTeaser();
    renderWhy();
    renderCta();
  } else if (page === 'nosotros') {
    renderNosotrosHero();
    renderAbout();
    renderCta();
  } else if (PAGES[page]) {
    renderServicePage(page);
  }
});
