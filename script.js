const homeContainer = document.querySelector('.home-container');
const aboutContainer = document.querySelector('.about-container');
const skillsContainer = document.querySelector('.skills-container');
const projectsContainer = document.querySelector('.projects-container');
const contactContainer = document.querySelector('.contact-container');

const homeColumn = document.querySelector('.home-column'); ///
const aboutColumn = document.querySelector('.about-column');
const skillsColumn = document.querySelector('.skills-column');
const projectsColumn = document.querySelector('.projects-column');
const contactColumn = document.querySelector('.contact-column');

const homeContent = document.querySelector('.home-content-container'); ///
const aboutContent = document.querySelector('.about-content-container');
const skillsContent = document.querySelector('.skills-content-container');
const projectsContent = document.querySelector('.projects-content-container');
const contactContent = document.querySelector('.contact-content-container');

const slideHome = () => {
    homeContainer.style.paddingRight = '';
    aboutContainer.style.padding = '0vw';
    skillsContainer.style.padding = '';
    projectsContainer.style.padding = '';
    contactContainer.style.padding = '0vw';

    homeContent.style.display = '';
    aboutContent.style.display = 'none';
    skillsContent.style.display = 'none';
    projectsContent.style.display = 'none';
    contactContent.style.display = 'none';
};

const slideAbout = () => {
    homeContainer.style.padding = '0vw';
    aboutContainer.style.paddingRight = '75vw';
    skillsContainer.style.padding = '0vw';
    projectsContainer.style.padding = '0vw';
    contactContainer.style.padding = '0vw';

    homeContent.style.display = 'none';
    aboutContent.style.display = 'flex';
    skillsContent.style.display = 'none';
    projectsContent.style.display = 'none';
    contactContent.style.display = 'none';
};

const slideSkills = () => {
    homeContainer.style.padding = '0vw';
    aboutContainer.style.padding = '0vw';
    skillsContainer.style.paddingRight = '75vw';
    projectsContainer.style.padding = '0vw';
    contactContainer.style.padding = '0vw';

    homeContent.style.display = 'none';
    aboutContent.style.display = 'none';
    skillsContent.style.display = 'flex';
    projectsContent.style.display = 'none';
    contactContent.style.display = 'none';
};
const slideProjects = () => {
    homeContainer.style.padding = '0vw';
    aboutContainer.style.padding = '0vw';
    skillsContainer.style.padding = '0vw';
    projectsContainer.style.paddingRight = '75vw';
    contactContainer.style.padding = '0vw';

    homeContent.style.display = 'none';
    aboutContent.style.display = 'none';
    skillsContent.style.display = 'none';
    projectsContent.style.display = 'flex';
    contactContent.style.display = 'none';
};

const slideContact = () => {
    homeContainer.style.padding = '0vw';
    aboutContainer.style.padding = '0vw';
    skillsContainer.style.padding = '0vw';
    projectsContainer.style.padding = '0vw';
    contactContainer.style.paddingRight = '75vw';

    homeContent.style.display = 'none';
    aboutContent.style.display = 'none';
    skillsContent.style.display = 'none';
    projectsContent.style.display = 'none';
    contactContent.style.display = 'flex';
};

homeColumn.addEventListener('click', slideHome);
aboutColumn.addEventListener('click', slideAbout);
skillsColumn.addEventListener('click', slideSkills);
projectsColumn.addEventListener('click', slideProjects);
contactColumn.addEventListener('click', slideContact);

//=======================================================================================

const columns = document.querySelectorAll('.column');

const expandColumn = (column) => {
    column.style.width = '7vw';

    columns.forEach((c) => {
        if (c !== column) {
            c.style.width = '4.5vw';
        }
    });
};

const reduceColumns = () => {
    columns.forEach((c) => {
        c.style.width = '5vw';
    });
};

columns.forEach((column) => {
    column.addEventListener('mouseover', () => {
        expandColumn(column);
    });

    column.addEventListener('mouseleave', () => {
        reduceColumns();
    });
});

//======================================================================================================================

const techIcons = document.querySelectorAll('.tech-skills-icons img');
function addRotation(event) {
    const img = event.target;
    if (img.classList.contains('rotate')) return;
    img.classList.add('rotate');
    img.addEventListener(
        'animationend',
        () => {
            img.classList.remove('rotate');
        },
        { once: true }
    );
}

techIcons.forEach((img) => {
    img.addEventListener('mouseenter', addRotation);
});

// Dados do carrossel
const carouselData = [
    {
        name: 'Laboclin Laboratório',
        image: '/assets/mockups/project-laboclin.png',
        linkGit: 'https://example.com',
        linkSite: 'https://www.example.com',
        techs: ['react', 'next.js', 'typescript', 'tailwind'],
    },
    {
        name: 'Gustavo G. Advogado',
        image: '/assets/mockups/project-adv.png',
        linkGit: 'https://github.com/eduardovscruuz/att-freelagustavoadv',
        linkSite: 'https://www.advogadogustavogouvea.com.br/',
        techs: ['html', 'sass', 'javascript', 'node.js', 'express'],
    },
    {
        name: 'To-Do Web App',
        image: '/assets/mockups/project-todo.png',
        linkGit: 'https://github.com/eduardovscruuz/angular-todo-list',
        linkSite: 'https://angular-todo-list-nine.vercel.app/',
        techs: ['angular', 'sass', 'typescript', 'node.js'],
    },
    {
        name: 'Office Quotes',
        image: '/assets/mockups/project-office-quotes.png',
        linkGit: 'https://github.com/eduardovscruuz/OfficeQuotes-Angular',
        linkSite: 'https://office-quotes-angular.vercel.app/en',
        techs: ['angular', 'sass', 'typescript', 'c#', '.net', 'azure'],
    },

    {
        name: 'Sass Gallery',
        image: '/assets/mockups/project-sass-gallery.png',
        linkGit: 'https://github.com/eduardovscruuz/gallery-sass-project',
        linkSite: 'https://gallery-sass-project.vercel.app/',
        techs: ['html', 'sass'],
    },
    {
        name: 'Convert Money',
        image: '/assets/mockups/project-convert.png',
        linkGit: 'https://github.com/eduardovscruuz/project-convert-money',
        linkSite: 'https://project-convert-money.vercel.app/',
        techs: ['html', 'css', 'javascript'],
    },
    {
        name: 'Churrascômetro',
        image: '/assets/mockups/project-churras.png',
        linkGit: 'https://github.com/eduardovscruuz/projeto-churrascometro',
        linkSite: 'https://projeto-churrascometro-liart.vercel.app/',
        techs: ['html', 'css', 'javascript'],
    },
    {
        name: 'E-Commerce Store',
        image: '/assets/mockups/project-empty.png',
        linkGit: 'https://example.com/',
        linkSite: 'https://example.com/',
        techs: ['...'],
    },
];

// Seleciona o container do carrossel e dos indicadores
const carousel = document.querySelector('.carousel');
const indicatorsContainer = document.querySelector('.carousel-indicators');

// Insere os itens do carrossel dinamicamente
carouselData.forEach((item, index) => {
    const carouselItem = document.createElement('div');
    carouselItem.classList.add('carousel-item');

    // Criação dinâmica da lista de tecnologias
    const techsList = item.techs.map((tech) => `<li>${tech}</li>`).join('');

    carouselItem.innerHTML = `
    <img src="${item.image}" alt="${item.name}">
    <div class="info">
      <h3>${item.name}</h3>
      <ul>${techsList}</ul>
      
      <a data-translate="projBtn1" href="${item.linkGit}" target="_blank"></a>
      <a data-translate="projBtn2" href="${item.linkSite}" target="_blank"></a>
      
      
    </div>
  `;

    carousel.appendChild(carouselItem);

    // Cria o indicador para cada item
    const indicator = document.createElement('div');
    indicator.classList.add('indicator');
    if (index === 0) indicator.classList.add('active'); // Primeiro indicador ativo
    indicator.dataset.index = index; // Armazena o índice
    indicatorsContainer.appendChild(indicator);
});

// Controle do carrossel
let currentIndex = 0;

// Atualiza a posição do carrossel
function updateCarousel() {
    const translateX = -currentIndex * 100;
    carousel.style.transform = `translateX(${translateX}%)`;

    // Atualiza os indicadores
    document.querySelectorAll('.indicator').forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });
}

// Botões de navegação
document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + carouselData.length) % carouselData.length;
    updateCarousel();
});

document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % carouselData.length;
    updateCarousel();
});

// Clique nos indicadores
document.querySelectorAll('.indicator').forEach((indicator) => {
    indicator.addEventListener('click', (e) => {
        currentIndex = Number(e.target.dataset.index);
        updateCarousel();
    });
});

// Inicializa o carrossel
updateCarousel();

//////////////////////////////////// EFEITOS HOVER NO CARROSEL
const applyHoverEffects = () => {
    const images = document.querySelectorAll('.carousel-item img');
    const infos = document.querySelectorAll('.carousel-item .info');

    const applyHover = (img, info) => {
        img.style.filter = 'grayscale(100%)';
        info.style.opacity = '1';
    };

    const removeHover = (img, info) => {
        if (!info.matches(':hover') && !img.matches(':hover')) {
            img.style.filter = 'grayscale(0%)';
            info.style.opacity = '0';
        }
    };

    images.forEach((img, index) => {
        const info = infos[index];
        img.addEventListener('mouseenter', () => applyHover(img, info));
        info.addEventListener('mouseenter', () => applyHover(img, info));

        img.addEventListener('mouseleave', () => removeHover(img, info));
        info.addEventListener('mouseleave', () => removeHover(img, info));
    });
};

// Aplica o efeito apenas em telas grandes
const mediaQueryHover = window.matchMedia('(min-width: 801px)');

const handleHoverEffects = () => {
    if (mediaQueryHover.matches) {
        applyHoverEffects();
    }
};

// Verifica o tamanho inicial da tela
handleHoverEffects();

// Atualiza os efeitos quando o tamanho da tela muda
mediaQueryHover.addEventListener('change', handleHoverEffects);

//////////////////////////////////// LINGUAGEM

const resumes = {
    pt: './resumes/curriculo-eduardo-cruz.pdf',
    en: './resumes/resume-eduardo-cruz.pdf',
};
const translations = {
    en: {
        homeTitle: 'Home',
        title: "HELLO, I'M <span>EDUARDO</span>",
        description: 'FULL STACK DEVELOPER, WELCOME TO MY PORTFOLIO!',
        resume: 'Resume',
        aboutTitle: 'About Me',
        meText1:
            'My name is Eduardo Cruz, I am a Systems Analysis and Development student and a full stack developer with real-world project experience since 2023. I had the opportunity to intern as a software developer at <a href="https://www.btgpactual.com/nosso-dna" target="_blank">BTG Pactual Bank</a>, where I worked with modern technologies in a challenging and collaborative environment. Since then, I’ve been deepening my skills in the stacks where I believe I can deliver the best results, always focused on clean code and best practices.',
        meText2:
            'Outside the professional sphere, I’m passionate about philosophy, cinema, cooking, and of course, technology in its many forms. I believe these interests broaden my creative and logical thinking, which directly influences the way I approach challenges—both in programming and in life.',

        skillsTitle: 'Skills',
        techInfo:
            'My tech stack emphasizes strongly typed languages and <span>object-oriented programming</span>, ensuring both robustness and <span>scalability</span>. On the front end, I leverage TypeScript with Angular and SASS to build elegant, functional interfaces. On the back end, I specialize in C# and .NET to deliver efficient, well-structured APIs, with additional experience in Node.js with NestJS. Experience in relational and non-relational databases, <span>I tailor the best solutions</span> to fit each project’s needs.',
        projectsTitle: 'Projects',
        projBtn1: 'See the code',
        projBtn2: 'See it running',
        soon: 'Soon...',
        contactTitle: 'Contact',
        chat1: "Let's chat!",
        chat2: 'Wheter you have a question, want to start new project, or simply wants to connect.',
        chat3:
            'Feel free to send me a message in the contact form, or directly send me an e-mail in: <a href="mailto:eduardovscruuz@gmail.com" >eduardovscruuz@gmail.com</a>',
        name_placeholder: 'MY NAME IS',
        email_placeholder: 'MY E-MAIL IS',
        subject_placeholder: 'SUBJECT',
        message_placeholder: "I'D LIKE TO CHAT ABOUT",
        submit_value: 'Send Message',
    },
    pt: {
        homeTitle: 'Início',
        title: 'OLÁ, EU SOU <span>EDUARDO</span>',
        description: 'Desenvolvedor Full Stack, bem-vindo(a) ao meu portfólio!',
        resume: 'Currículo',
        aboutTitle: 'Sobre Mim',
        meText1:
            'Me chamo Eduardo Cruz, sou estudante de Análise e Desenvolvimento de Sistemas e desenvolvedor full stack com experiência em projetos reais desde 2023. Tive a oportunidade de estagiar como desenvolvedor de software no <a href="https://www.btgpactual.com/nosso-dna" target="_blank">Banco BTG Pactual</a>, onde atuei com tecnologias modernas em um ambiente técnico desafiador e colaborativo. Desde então, venho me aprofundando nas stacks com as quais acredito entregar os melhores resultados, sempre com foco em código limpo e boas práticas.',
        meText2:
            'Fora do âmbito profissional, sou um grande entusiasta de filosofia, cinema, culinária e, claro, tecnologia em suas diferentes formas. Acredito que esses interesses ampliam minha visão criativa e lógica, o que influencia diretamente na forma como encaro desafios tanto na programação quanto na vida pessoal.',

        skillsTitle: 'Habilidades',
        techInfo:
            'Minha stack de tecnologias enfatiza linguagens fortemente tipadas e <span>programação orientada a objetos</span>, garantindo tanto a robustez quanto a <span>escalabilidade</span>. No front-end, utilizo TypeScript com Angular e SASS para criar interfaces elegantes e funcionais. No back-end, sou especializado C# e .NET, entregando APIs eficientes e bem estruturadas, tendo também conhecimento em Node.js com NestJS. Com experiência em bancos de dados relacionais e não relacionais, <span>adapto as melhores soluções</span> às necessidades de cada projeto.',

        projectsTitle: 'Projetos',
        projBtn1: 'Ver o código',
        projBtn2: 'Ver o site',
        soon: 'Em breve...',
        contactTitle: 'Contato',
        chat1: 'Vamos conversar!',
        chat2: 'Se você tiver uma pergunta, quiser começar um novo projeto ou simplesmente se conectar.',
        chat3:
            'Sinta-se à vontade para me enviar uma mensagem no formulário de contato ou enviar um e-mail diretamente para: <a href="mailto:eduardovscruuz@gmail.com">eduardovscruuz@gmail.com</a>',
        name_placeholder: 'MEU NOME É',
        email_placeholder: 'MEU E-MAIL É',
        subject_placeholder: 'ASSUNTO',
        message_placeholder: 'GOSTARIA DE CONVERSAR SOBRE',
        submit_value: 'Enviar Mensagem',
    },
};
function changeLanguage(lang) {
    document.getElementById('name_input').setAttribute('placeholder', translations[lang].name_placeholder);
    document.getElementById('email_input').setAttribute('placeholder', translations[lang].email_placeholder);
    document.getElementById('subject_input').setAttribute('placeholder', translations[lang].subject_placeholder);
    document.getElementById('message_input').setAttribute('placeholder', translations[lang].message_placeholder);
    document.getElementById('form_button').setAttribute('value', translations[lang].submit_value);
    const translatableElements = document.querySelectorAll('[data-translate]');

    translatableElements.forEach((element) => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });

    const btnEn = document.querySelectorAll('.en');
    const btnPt = document.querySelectorAll('.pt');

    if (lang === 'en') {
        btnEn.forEach((btn) => btn.classList.remove('disabled-lang'));
        btnPt.forEach((btn) => btn.classList.add('disabled-lang'));
    } else if (lang === 'pt') {
        btnPt.forEach((btn) => btn.classList.remove('disabled-lang'));
        btnEn.forEach((btn) => btn.classList.add('disabled-lang'));
    }

    // Atualizar o link do currículo
    const resumeButton = document.getElementById('resume');
    if (resumeButton) {
        resumeButton.setAttribute('href', resumes[lang]);
    }
}

// Inicializa o EmailJS com seu User ID
emailjs.init("K0qAKDrFt0HzOhoeP"); // Mantenha o mesmo User ID do primeiro código


document.addEventListener('DOMContentLoaded', function() {
    const toast = document.querySelector('.notification-toast');
    const contactForm = document.querySelector('.form-info');
    const submitButton = document.getElementById('form_button');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Mostra o toast de carregamento
        toast.classList.add('visible');
        toast.classList.remove('success', 'error');
        toast.querySelector('.toast-message').textContent = 'Enviando sua mensagem...';
        submitButton.disabled = true;

        // Animação da barra de progresso
        const progressBar = toast.querySelector('.progress-bar');
        progressBar.style.width = '100%';

        const templateParams = {
            name: document.getElementById('name_input').value,
            email: document.getElementById('email_input').value,
            subject: document.getElementById('subject_input').value,
            message: document.getElementById('message_input').value
        };

        emailjs.send("service_n20qeai", "template_475sxwc", templateParams)
            .then(() => {
                toast.classList.add('success');
                toast.querySelector('.toast-message').textContent = 'Mensagem enviada com sucesso! 🎉';
                contactForm.reset();
            })
            .catch(() => {
                toast.classList.add('error');
                toast.querySelector('.toast-message').textContent = 'Erro ao enviar! Tente novamente. 😢';
            })
            .finally(() => {
                submitButton.disabled = false;
                progressBar.style.width = '0%';

                // Esconde o toast após 4 segundos
                setTimeout(() => {
                    toast.classList.remove('visible');
                }, 4000);
            });
    });
});


window.onload = () => {
    changeLanguage('pt');
};
const themeStylesheet = document.getElementById('theme-stylesheet');
const themeToggles = document.querySelectorAll('.theme-toggle'); // Seleciona todos os botões
const mediaQuery = window.matchMedia('(max-width: 800px)');

let currentTheme = 'dark';

function updateStylesheet() {
    const isMobile = mediaQuery.matches;
    const themeMap = {
        light: isMobile ? 'css/mobileLight.css' : 'css/desktopLight.css',
        dark: isMobile ? 'css/mobileDark.css' : 'css/desktopDark.css',
    };
    themeStylesheet.href = themeMap[currentTheme];
}

// Alterna o tema entre dark e light
function toggleTheme() {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    updateStylesheet();
}

// Adiciona o evento de clique a cada botão
themeToggles.forEach((button) => {
    button.addEventListener('click', toggleTheme);
});

// Adiciona um listener para mudanças na largura da tela
mediaQuery.addEventListener('change', updateStylesheet);

// Inicializa a folha de estilo com base no tamanho atual da tela
updateStylesheet();
