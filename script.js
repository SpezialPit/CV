// --- Safe storage helpers (falls back to in-memory if localStorage is unavailable) ---
const memoryStore = {};
function safeGet(key) {
  try { return window.localStorage.getItem(key); }
  catch (e) { return memoryStore[key] || null; }
}
function safeSet(key, value) {
  try { window.localStorage.setItem(key, value); }
  catch (e) { memoryStore[key] = value; }
}

// --- Translations ---
const translations = {
  es: {
    'nav.perfil': 'Perfil',
    'nav.experiencia': 'Experiencia',
    'nav.habilidades': 'Habilidades',
    'nav.educacion': 'Educación',
    'nav.contacto': 'Contacto',
    'hero.kicker': 'Currículum',
    'hero.role': 'Ingeniero de Software Backend',
    'hero.pitch': 'Cinco años diseñando y construyendo sistemas backend robustos con Java y Spring Boot, desde APIs REST hasta arquitecturas empresariales completas.',
    'hero.location': 'Madrid, España',
    'perfil.title': 'Perfil',
    'perfil.p1': 'Ingeniero de software con cinco años de experiencia profesional en el desarrollo de sistemas backend utilizando Java 17, Spring Boot y SQL. Experiencia práctica en la implementación de API REST, arquitecturas empresariales, pruebas automatizadas y procesos de CI/CD.',
    'perfil.p2': 'Mentalidad de negocio enfocada en el código limpio, con experiencia trabajando en equipos ágiles. Conocimientos adicionales en Python e inteligencia artificial para automatización y soluciones basadas en datos.',
    'experiencia.title': 'Experiencia',
    'exp1.date': 'Oct 2024 — Actualidad',
    'exp1.role': 'Ingeniero de Software',
    'exp1.org': 'SICE, Madrid',
    'exp1.b1': 'Desarrollo backend para el producto principal de la empresa con Java 17 y Spring Boot.',
    'exp1.b2': 'Análisis de tareas, integraciones con proveedores externos y migraciones de Java y Spring Boot.',
    'exp1.b3': 'Participación en migraciones para mejorar mantenibilidad, escalabilidad y rendimiento.',
    'exp1.b4': 'Diseño de servicios REST, integraciones con bases de datos SQL y pruebas automatizadas.',
    'exp1.b5': 'Trabajo en entornos ágiles con flujos de CI/CD y Git.',
    'exp2.date': 'Mar 2022 — Oct 2024',
    'exp2.role': 'Ingeniero de Software',
    'exp2.org': 'Babel, Madrid',
    'exp2.b1': 'Desarrollo de soluciones backend para proyectos empresariales orientados al cliente.',
    'exp2.b2': 'Implementación de lógica de negocio y mantenimiento en producción.',
    'exp2.b3': 'Trabajo con Oracle, JPA/Hibernate y arquitecturas por capas.',
    'exp2.b4': 'Colaboración con QA, analistas y equipos multidisciplinares en entornos ágiles.',
    'exp3.date': 'Jun 2018 — Oct 2019',
    'exp3.role': 'IT Specialist',
    'exp3.org': 'Misstipsi (actualmente Tipsi)',
    'exp3.b1': 'Despliegue y configuración de equipos para clientes, resolviendo incidencias en tiempo real.',
    'habilidades.title': 'Habilidades',
    'skill.backend.title': 'Backend',
    'skill.datos.title': 'Datos',
    'skill.testing.title': 'Testing',
    'skill.devops.title': 'DevOps',
    'skill.arquitectura.title': 'Arquitectura',
    'skill.arquitectura.items': 'Arquitectura hexagonal, patrones de diseño',
    'skill.metodologias.title': 'Metodologías',
    'skill.ademas.title': 'Además',
    'educacion.title': 'Educación',
    'edu.title': 'Ingeniería del Software',
    'edu.meta': 'Sep 2013 — Jul 2019',
    'edu.langTitle': 'Idiomas',
    'edu.lang1': 'Español, nativo',
    'edu.lang2': 'Inglés, B2',
    'contacto.title': 'Hablemos',
    'contacto.lead': '¿Un proyecto backend entre manos? Escríbeme y lo hablamos.',
  },
  en: {
    'nav.perfil': 'Profile',
    'nav.experiencia': 'Experience',
    'nav.habilidades': 'Skills',
    'nav.educacion': 'Education',
    'nav.contacto': 'Contact',
    'hero.kicker': 'Résumé',
    'hero.role': 'Backend Software Engineer',
    'hero.pitch': 'Five years designing and building robust backend systems with Java and Spring Boot, from REST APIs to full enterprise architectures.',
    'hero.location': 'Madrid, Spain',
    'perfil.title': 'Profile',
    'perfil.p1': 'Software engineer with five years of professional experience building backend systems with Java 17, Spring Boot, and SQL. Hands-on experience implementing REST APIs, enterprise architectures, automated testing, and CI/CD pipelines.',
    'perfil.p2': 'Business-minded, with a focus on clean code and experience working in agile teams. Additional knowledge of Python and artificial intelligence for automation and data-driven solutions.',
    'experiencia.title': 'Experience',
    'exp1.date': 'Oct 2024 — Present',
    'exp1.role': 'Software Engineer',
    'exp1.org': 'SICE, Madrid',
    'exp1.b1': "Backend development for the company's main product using Java 17 and Spring Boot.",
    'exp1.b2': 'Task analysis, integrations with external providers, and Java and Spring Boot migrations.',
    'exp1.b3': 'Contributed to migrations that improved maintainability, scalability, and performance.',
    'exp1.b4': 'Designed REST services, integrated SQL databases, and built automated tests.',
    'exp1.b5': 'Worked in agile environments with CI/CD pipelines and Git.',
    'exp2.date': 'Mar 2022 — Oct 2024',
    'exp2.role': 'Software Engineer',
    'exp2.org': 'Babel, Madrid',
    'exp2.b1': 'Built backend solutions for client-facing enterprise projects.',
    'exp2.b2': 'Implemented business logic and handled production maintenance.',
    'exp2.b3': 'Worked with Oracle, JPA/Hibernate, and layered architectures.',
    'exp2.b4': 'Collaborated with QA, analysts, and cross-functional teams in agile environments.',
    'exp3.date': 'Jun 2018 — Oct 2019',
    'exp3.role': 'IT Specialist',
    'exp3.org': 'Misstipsi (now Tipsi)',
    'exp3.b1': 'Deployed and configured equipment for clients, resolving incidents in real time.',
    'habilidades.title': 'Skills',
    'skill.backend.title': 'Backend',
    'skill.datos.title': 'Data',
    'skill.testing.title': 'Testing',
    'skill.devops.title': 'DevOps',
    'skill.arquitectura.title': 'Architecture',
    'skill.arquitectura.items': 'Hexagonal architecture, design patterns',
    'skill.metodologias.title': 'Methodologies',
    'skill.ademas.title': 'Also',
    'educacion.title': 'Education',
    'edu.title': 'Software Engineering',
    'edu.meta': 'Sep 2013 — Jul 2019',
    'edu.langTitle': 'Languages',
    'edu.lang1': 'Spanish, native',
    'edu.lang2': 'English, B2',
    'contacto.title': "Let's talk",
    'contacto.lead': 'Got a backend project in mind? Send me a message.',
  }
};

// --- Language ---
function applyLang(lang) {
  document.documentElement.setAttribute('lang', lang);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const value = translations[lang] && translations[lang][key];
    if (value) el.textContent = value;
  });
  document.querySelectorAll('.lang-switch button').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

// --- Theme ---
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const toggle = document.querySelector('.theme-toggle');
  if (toggle) {
    toggle.setAttribute('aria-pressed', theme === 'dark');
    toggle.setAttribute('aria-label', theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
  }
}

// --- Init ---
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = safeGet('lang');
  const browserLang = navigator.language && navigator.language.startsWith('en') ? 'en' : 'es';
  applyLang(savedLang || browserLang);

  // Dark mode is intentionally the initial design.
  const savedTheme = safeGet('theme');
  applyTheme(savedTheme || 'dark');

  document.querySelectorAll('.lang-switch button').forEach(btn => {
    btn.addEventListener('click', () => {
      applyLang(btn.dataset.lang);
      safeSet('lang', btn.dataset.lang);
    });
  });

  document.querySelector('.theme-toggle').addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    safeSet('theme', next);
  });

  const navLinks = [...document.querySelectorAll('.main-nav a')];
  const sections = navLinks
    .map(link => document.getElementById(link.dataset.target))
    .filter(Boolean);

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => link.classList.toggle('active', link.dataset.target === entry.target.id));
      }
    });
  }, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });

  sections.forEach(section => observer.observe(section));
  document.getElementById('year').textContent = new Date().getFullYear();
});
