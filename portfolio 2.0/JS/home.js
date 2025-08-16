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

// Dados de informações para tecnologias e habilidades
const skillInfo = {
    pt: {
        "Node.js": "Node.js é uma plataforma de desenvolvimento que permite criar aplicações server-side com JavaScript. É amplamente utilizado para APIs e aplicações em tempo real.",
        "Docker": "Docker é uma plataforma que permite criar, gerenciar e implantar aplicativos em contêineres, garantindo consistência entre ambientes.",
        "Express.js": "Express.js é um framework para Node.js que simplifica o desenvolvimento de aplicações web e APIs com roteamento e middleware.",
        "Git": "Git é um sistema de controle de versão distribuído, essencial para gerenciar mudanças em códigos e colaborar em equipes.",
        "GitHub Actions": "GitHub Actions é uma ferramenta de CI/CD para automatizar fluxos de trabalho diretamente no GitHub.",
        "Linux": "Linux é um sistema operacional de código aberto, amplamente usado em servidores e desenvolvimento.",
        "JavaScript": "JavaScript é uma linguagem de programação que adiciona interatividade a páginas web, sendo essencial para o desenvolvimento front-end e back-end.",
        "HTML": "HTML (HyperText Markup Language) é a estrutura básica das páginas web, definindo conteúdo e layout.",
        "CSS": "CSS (Cascading Style Sheets) é usado para estilizar e formatar o conteúdo de páginas web.",
        "MySQL": "MySQL é um sistema de gerenciamento de banco de dados relacional, popular para aplicações web.",
        "Java": "Java é uma linguagem de programação orientada a objetos, usada em aplicações corporativas e sistemas robustos.",
        "Figma": "Figma é uma ferramenta de design colaborativo baseada na web, usada para criar interfaces de usuário.",
        "Teamwork": "Capacidade de trabalhar em equipe, colaborando de forma eficaz com outros membros.",
        "Communication": "Habilidade de se comunicar claramente e transmitir ideias de maneira eficiente.",
        "Adaptação": "Capacidade de se ajustar a novas situações ou mudanças no ambiente de trabalho.",
        "Creativity": "Habilidade de criar soluções inovadoras e pensar fora da caixa.",
        "Planning": "Capacidade de organizar e planejar tarefas para alcançar objetivos de forma eficiente.",
        "Project Management": "Habilidade de gerenciar projetos, incluindo prazos, recursos e entregas."
    },
    en: {
        "Node.js": "Node.js is a development platform that allows creating server-side applications with JavaScript. It is widely used for APIs and real-time applications.",
        "Docker": "Docker is a platform that enables creating, managing, and deploying applications in containers, ensuring consistency across environments.",
        "Express.js": "Express.js is a framework for Node.js that simplifies web application and API development with routing and middleware.",
        "Git": "Git is a distributed version control system, essential for managing code changes and collaborating in teams.",
        "GitHub Actions": "GitHub Actions is a CI/CD tool for automating workflows directly on GitHub.",
        "Linux": "Linux is an open-source operating system, widely used in servers and development.",
        "JavaScript": "JavaScript is a programming language that adds interactivity to web pages, essential for front-end and back-end development.",
        "HTML": "HTML (HyperText Markup Language) is the basic structure of web pages, defining content and layout.",
        "CSS": "CSS (Cascading Style Sheets) is used to style and format web page content.",
        "MySQL": "MySQL is a relational database management system, popular for web applications.",
        "Java": "Java is an object-oriented programming language, used in enterprise applications and robust systems.",
        "Figma": "Figma is a web-based collaborative design tool, used for creating user interfaces.",
        "Teamwork": "Ability to work effectively in a team, collaborating with other members.",
        "Communication": "Skill to communicate clearly and convey ideas efficiently.",
        "Adaptação": "Ability to adapt to new situations or changes in the work environment.",
        "Creativity": "Ability to create innovative solutions and think outside the box.",
        "Planning": "Ability to organize and plan tasks to achieve goals efficiently.",
        "Project Management": "Skill to manage projects, including deadlines, resources, and deliveries."
    }
};

// Função para atualizar o conteúdo com base no idioma selecionado
function updateContent(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.innerHTML = translations[lang][key] || element.innerHTML;
    });
}

// Toggle dropdown menu ao clicar na área do dropdown
document.querySelector('.lang-dropdown').addEventListener('click', (e) => {
    const langMenu = document.querySelector('.lang-menu');
    if (!e.target.classList.contains('flag')) {
        langMenu.classList.toggle('active');
    }
});

// Handle language selection
document.querySelectorAll('.lang-menu .lang-btn').forEach(button => {
    button.addEventListener('click', () => {
        const lang = button.getAttribute('data-lang');
        updateContent(lang);
        const activeLangBtn = document.querySelector('.lang-btn.active');
        activeLangBtn.innerHTML = button.innerHTML; // Atualiza a bandeira e texto ativo
        document.querySelector('.lang-menu').classList.remove('active'); // Close dropdown
    });
});

// Handle skill/technology click with pop-up
document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('click', () => {
        const skillName = card.querySelector('span').textContent;
        const lang = document.querySelector('.lang-btn.active img').alt === 'PT' ? 'pt' : 'en';
        const description = skillInfo[lang][skillName] || "Nenhuma informação disponível para esta tecnologia ou habilidade.";

        // Remove pop-up existente, se houver
        const existingPopup = document.querySelector('.skill-popup');
        if (existingPopup) existingPopup.remove();

        // Cria o pop-up
        const popup = document.createElement('div');
        popup.className = 'skill-popup';
        popup.innerHTML = `<strong>${skillName}</strong><br>${description}`;
        card.appendChild(popup);

        // Posiciona o pop-up acima do card
        const cardRect = card.getBoundingClientRect();
        popup.style.top = `-${cardRect.height + 20}px`;
        popup.style.left = '50%';
        popup.style.transform = 'translateX(-50%)';

        // Fecha o pop-up ao clicar fora
        const closePopup = (e) => {
            if (!card.contains(e.target)) {
                popup.remove();
                document.removeEventListener('click', closePopup);
            }
        };
        setTimeout(() => document.addEventListener('click', closePopup), 0);
    });
});

// Handle flag click to show info
document.querySelector('.lang-btn.active .flag').addEventListener('click', () => {
    const lang = document.querySelector('.lang-btn.active img').alt === 'PT' ? 'pt' : 'en';
    updateContent(lang);
});

// Close dropdown if clicking outside
document.addEventListener('click', (e) => {
    const langDropdown = document.querySelector('.lang-dropdown');
    if (!langDropdown.contains(e.target)) {
        document.querySelector('.lang-menu').classList.remove('active');
    }
});

// Initialize with Portuguese
updateContent('pt');
// Função para animação de rolagem suave
document.querySelectorAll('.scroll-link').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault(); // Impede o comportamento padrão do link
    const targetId = this.getAttribute('href'); // Obtém o ID do alvo
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth', // Animação suave
        block: 'start' // Alinha o topo do elemento com o topo da janela
      });
    }
  });
});