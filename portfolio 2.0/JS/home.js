
// =========================
// Traduções do site
// =========================
const translations = {
    pt: {
        menu_about: "Sobre",
        menu_skills: "Habilidades",
        menu_projects: "Projetos",
        contact: "Entre em Contato",
        about_title: "Olá, eu sou Diego Ewerton",
        about_text: "Sou desenvolvedor Front End.",
        about_subtext: "Apaixonado pela criação de soluções inovadoras,<br>com 1 ano de experiência especializado em tecnologias modernas e sistemas personalizados.",
        btn_work: "Ver meu Trabalho",
        journey_title: "Minha Jornada",
        journey_text1: "Sou um desenvolvedor Front End com 1 ano de experiência,<br> apaixonado por criar soluções inovadoras e eficientes. Minha jornada começou com o desejo de transformar ideias em realidade através da programação. Ao longo do tempo, desenvolvi habilidades sólidas em HTML, CSS e JavaScript, além de frameworks modernos como React e Vue.js.",
        journey_text2: "Estou sempre em busca de aprender novas tecnologias e aprimorar minhas habilidades para entregar soluções completas e profissionais.",
        experience_years: "1+ Ano",
        experience_text: "De experiência em Front-End e Back-End",
        job_place: "🌐 Prefeitura de Paulista",
        job_text: "Atuei no desenvolvimento de sistemas modernos e acessíveis.",
        stack_tech_title: "Tecnologias",
        stack_skills_title: "Habilidades",
        see_more: "Ver mais",
        "[project_title]project1": "Projeto 1",
        "[project_desc]project1": "Descrição breve do Projeto 1, desenvolvido com tecnologias modernas.",
        "[project_title]project2": "Projeto 2",
        "[project_desc]project2": "Descrição breve do Projeto 2, com foco em design e funcionalidade."
    },
    en: {
        menu_about: "About",
        menu_skills: "Skills",
        menu_projects: "Projects",
        contact: "Get in Touch",
        about_title: "Hello, I'm Diego Ewerton",
        about_text: "I am a Front End developer.",
        about_subtext: "Passionate about creating innovative solutions,<br>with 1 year of experience specializing in modern technologies and customized systems.",
        btn_work: "View My Work",
        journey_title: "My Journey",
        journey_text1: "I am a Front End developer with 1 year of experience, passionate about creating innovative and efficient solutions. My journey began with a desire to turn ideas into reality through programming. Over time, I developed solid skills in HTML, CSS, and JavaScript, as well as modern frameworks like React and Vue.js.",
        journey_text2: "I am always seeking to learn new technologies and improve my skills to deliver complete and professional solutions.",
        experience_years: "1+ Year",
        experience_text: "Of Front-End and Back-End experience",
        job_place: "🌐 Paulista City Hall",
        job_text: "I worked on developing modern and accessible systems.",
        stack_tech_title: "Technologies",
        stack_skills_title: "Skills",
        see_more: "See more",
        "[project_title]project1": "Project 1",
        "[project_desc]project1": "Brief description of Project 1, developed with modern technologies.",
        "[project_title]project2": "Project 2",
        "[project_desc]project2": "Brief description of Project 2, focused on design and functionality."
    }
};
// =========================
// Informações das Skills
// =========================
const skillInfo = {
    pt: {
        HTML: "HTML é a estrutura básica da web.",
        CSS: "CSS define estilos e layouts.",
        JavaScript: "JavaScript traz interatividade.",
        "React JS": "Biblioteca para interfaces web.",
        "Node.js": "Ambiente para backend.",
        Adaptação: "Capacidade de aprender e se adaptar."
    },
    en: {
        HTML: "HTML is the basic structure of the web.",
        CSS: "CSS defines styles and layouts.",
        JavaScript: "JavaScript adds interactivity.",
        "React JS": "Library for web interfaces.",
        "Node.js": "Environment for backend.",
        Adaptation: "Ability to learn and adapt."
    }
};

// =========================
// Idioma atual
// =========================
let currentLang = "pt";

// =========================
// Atualiza os textos do site
// =========================
function updateContent(lang) {
    currentLang = lang;
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
}

// =========================
// Troca de idioma
// =========================
const langButtons = document.querySelectorAll(".lang-menu .lang-btn");
const mainLangBtn = document.querySelector(".lang-dropdown > .lang-btn");

langButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const lang = btn.getAttribute("data-lang");

        // Atualiza classe active
        langButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        // Atualiza a bandeira principal
        if (lang === "pt") {
            mainLangBtn.querySelector("img").src = "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg";
        } else if (lang === "en") {
            mainLangBtn.querySelector("img").src = "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg";
        }

        // Atualiza conteúdos do site
        updateContent(lang);
    });
});

// =========================
// Popup de Skills
// =========================
document.querySelectorAll(".skill-card").forEach(card => {
    card.addEventListener("click", () => {
        const skillName = card.querySelector("span").textContent;
        const description =
            skillInfo[currentLang][skillName] ||
            skillInfo[currentLang]["Adaptação"] || 
            skillInfo[currentLang]["Adaptation"] ||
            "No info available.";

        // Remove popup antigo
        const oldPopup = document.querySelector(".skill-popup");
        if (oldPopup) oldPopup.remove();

        // Cria popup
        const popup = document.createElement("div");
        popup.className = "skill-popup";
        popup.innerHTML = `<strong>${skillName}</strong><br>${description}`;
        document.body.appendChild(popup);

        // Posiciona popup
        const rect = card.getBoundingClientRect();
        popup.style.position = "absolute";
        popup.style.top = `${rect.top + window.scrollY - popup.offsetHeight - 10}px`;
        popup.style.left = `${rect.left + window.scrollX + rect.width / 2}px`;
        popup.style.transform = "translateX(-50%)";

        // Fecha ao clicar fora
        document.addEventListener(
            "click",
            e => {
                if (!popup.contains(e.target) && !card.contains(e.target)) {
                    popup.remove();
                }
            },
            { once: true }
        );
    });
});

// =========================
// Scroll suave nos links do nav
// =========================
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: "smooth"
            });
        }
    });
});

// =========================
// Animações ao rolar a página
// =========================
function checkVisibility() {
    const elements = document.querySelectorAll("section, .skill-card, .projeto-card");
    const windowHeight = window.innerHeight;

    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        if (position < windowHeight - 100) {
            el.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", checkVisibility);
window.addEventListener("load", checkVisibility);

// IntersectionObserver para cards e seções
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section, .skill-card, .projeto-card').forEach(el => observer.observe(el));

const jornadaCards = document.querySelectorAll('.jornada-cards .card-experiencia, .jornada-cards .card-trabalho');
const cardObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) entry.target.classList.add('show-card');
    });
}, { threshold: 0.2 });
jornadaCards.forEach(card => cardObserver.observe(card));

// =========================
// Skills animadas
// =========================
const skillFills = document.querySelectorAll(".skill-bar-fill");
function animateSkills() {
    const triggerPoint = window.innerHeight * 0.85;
    skillFills.forEach(fill => {
        const sectionTop = fill.getBoundingClientRect().top;
        if (sectionTop < triggerPoint) {
            fill.style.width = fill.getAttribute("data-width");
        }
    });
}
window.addEventListener("scroll", animateSkills);
window.addEventListener("load", animateSkills);

// =========================
// Botão voltar ao topo
// =========================
const backToTop = document.getElementById('backToTop');
if (backToTop) {
    window.addEventListener('scroll', () => {
        backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
    });
    backToTop.addEventListener('click', () => window.scrollTo({top: 0, behavior: 'smooth'}));
}
// Função para verificar visibilidade e aplicar animação
function checkVisibility() {
    const elements = document.querySelectorAll('#skills-animadas, .skill-animada, .projeto-card, .skill-card, .card-experiencia, .card-trabalho');
    const windowHeight = window.innerHeight;

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            element.classList.add('visible');
            if (element.classList.contains('skill-animada')) {
                element.querySelector('.skill-bar-fill').style.width = element.querySelector('.skill-bar-fill').getAttribute('data-width');
            }
        }
    });
}

// Executa ao carregar e ao rolar
window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);

// Animação de rolagem suave para os links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            this.classList.add('active-link');
            setTimeout(() => this.classList.remove('active-link'), 500);

            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});