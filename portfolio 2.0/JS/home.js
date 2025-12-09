// Traduções
const translations = {
  pt: {
    about_title: "Olá, eu sou Diego Ewerton",
    about_subtext: "Apaixonado por criar soluções modernas e funcionais com código limpo.<br>1+ ano de experiência em Front-End, Back-End e sistemas personalizados.",
    btn_work: "Meus Projetos",
    skills_title: "Habilidades & Tecnologias",
    projects_title: "Projetos em Destaque",
    certs_title: "Certificados"
  },
  en: {
    about_title: "Hello, I'm Diego Ewerton",
    about_subtext: "Passionate about building modern, functional solutions with clean code.<br>1+ year of experience in Front-End, Back-End and custom systems.",
    btn_work: "My Projects",
    skills_title: "Skills & Technologies",
    projects_title: "Featured Projects",
    certs_title: "Certificates"
  }
};

let currentLang = 'pt';

function updateContent(lang) {
  currentLang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
}

// Troca de idioma
document.querySelectorAll('.lang-menu button').forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.getAttribute('data-lang');
    document.querySelector('.lang-btn img').src = btn.querySelector('img').src;
    updateContent(lang);
  });
});

// Scroll suave
document.querySelectorAll('.nav-link, .btn-primary[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Animações ao rolar
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.section, .skill-card, .project-card, .cert-card').forEach(el => {
  observer.observe(el);
});

// Animação das barras de progresso
const progressObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const fills = entry.target.querySelectorAll('.fill');
      fills.forEach(fill => {
        const width = fill.getAttribute('data-width');
        fill.style.width = width + '%';
      });
    }
  });
}, { threshold: 0.6 });

document.querySelectorAll('.progress-bars').forEach(bar => progressObserver.observe(bar));