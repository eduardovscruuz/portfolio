if (window.matchMedia('(max-width: 800px)').matches) {
  const homeColumn = document.querySelector('.home-column');
  const aboutColumn = document.querySelector('.about-column');
  const skillsColumn = document.querySelector('.skills-column');
  const projectsColumn = document.querySelector('.projects-column');
  const contactColumn = document.querySelector('.contact-column');

  const slideHome = () => {};
  const slideAbout = () => {};
  const slideSkills = () => {};
  const slideProjects = () => {};
  const slideContact = () => {};

  homeColumn.removeEventListener('click', slideHome);
  aboutColumn.removeEventListener('click', slideAbout);
  skillsColumn.removeEventListener('click', slideSkills);
  projectsColumn.removeEventListener('click', slideProjects);
  contactColumn.removeEventListener('click', slideContact);

  slider_button_left.off('click');
  slider_button_right.off('click');
  slider_navElements.off('click');
} else {
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
  const images = document.querySelectorAll('.tech-skills-icons img');
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

  images.forEach((img) => {
    img.addEventListener('mouseenter', addRotation);
  });

  // Dados do carrossel
  const carouselData = [
    {
      name: 'Gustavo G. Advogado',
      image: '/assets/mockups/project-adv.png',
      linkGit: 'www.github.com',
      linkSite: 'www.google.com',
      techs: ['html', 'sass', 'javascript', 'node.js'],
    },
    {
      name: 'To-Do Web App',
      image: '/assets/mockups/project-todo.png',
      linkGit: 'www.github.com',
      linkSite: 'www.google.com',
      techs: ['angular', 'sass', 'typescript', 'node.js', 'nest.js'],
    },
    {
      name: 'Office Quotes',
      image: '/assets/mockups/project-office-quotes.png',
      linkGit: 'www.github.com',
      linkSite: 'www.google.com',
      techs: ['angular', 'sass', 'typescript', 'c#', '.net'],
    },

    {
      name: 'Sass Gallery',
      image: '/assets/mockups/project-sass-gallery.png',
      linkGit: 'www.github.com',
      linkSite: 'www.google.com',
      techs: ['html', 'sass'],
    },
    {
      name: 'Convert Money',
      image: '/assets/mockups/project-convert.png',
      linkGit: 'www.github.com',
      linkSite: 'www.google.com',
      techs: ['html', 'css', 'javascript'],
    },
    {
      name: 'Churrascômetro',
      image: '/assets/mockups/project-churras.png',
      linkGit: 'www.github.com',
      linkSite: 'www.google.com',
      techs: ['html', 'css', 'javascript'],
    },
    {
      name: 'E-Commerce Store',
      image: '/assets/mockups/project-empty.png',
      linkGit: 'www.github.com',
      linkSite: 'www.google.com',
      techs: ['Soon...'],
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
}
// Seleciona todas as imagens dentro do carrossel
const images = document.querySelectorAll('.carousel-item img');
const infos = document.querySelectorAll('.carousel-item .info');

// Função para aplicar o efeito
const applyHover = (img, info) => {
  img.style.filter = 'grayscale(100%)'; // Aplica o filtro de desaturação
  info.style.opacity = '1'; // Torna a informação visível
};

// Função para remover o efeito
const removeHover = (img, info) => {
  // Verifica se o mouse não está sobre a imagem nem sobre a info
  if (!info.matches(':hover') && !img.matches(':hover')) {
    img.style.filter = 'grayscale(0%)'; // Remove o filtro de desaturação
    info.style.opacity = '0'; // Torna a informação invisível
  }
};

// Adiciona os eventos de mouseenter e mouseleave para cada imagem e info
images.forEach((img, index) => {
  const info = infos[index];

  img.addEventListener('mouseenter', () => applyHover(img, info));
  info.addEventListener('mouseenter', () => applyHover(img, info));

  img.addEventListener('mouseleave', () => removeHover(img, info));
  info.addEventListener('mouseleave', () => removeHover(img, info));
});

const themeStylesheet = document.getElementById('theme-stylesheet');
const toggleButtons = document.getElementsByClassName('theme-toggle');

for (let i = 0; i < toggleButtons.length; i++) {
  toggleButtons[i].addEventListener('click', () => {
    const themeStylesheet = document.getElementById('theme-stylesheet');
    const currentTheme = themeStylesheet.getAttribute('href');
    themeStylesheet.setAttribute('href', currentTheme === 'css/styles.css' ? 'css/lightStyles.css' : 'css/styles.css');
  });
}

const translations = {
  en: {
    homeTitle: 'Home',
    title: "HELLO, I'M <span>EDUARDO</span>",
    description: 'FULL STACK DEVELOPER, WELCOME TO MY PORTFOLIO!',
    resume: 'Resume',
    skillsTitle: 'Skills',
    techInfo:
      'My tech stack emphasizes strongly typed languages and <span>object-oriented programming</span>, ensuring both robustness and <span>scalability</span>. On the front end, I leverage TypeScript with Angular and SASS to build elegant, functional interfaces. On the back end, I specialize in NestJS, C#, and .NET to deliver efficient, well-structured APIs. With experience in relational and non-relational databases, <span>I tailor the best solutions</span> to fit each project’s needs.',
    aboutTitle: 'About Me',
    meText1:
      'My name is Eduardo Cruz, a student of Systems Analysis and Development, and a full-stack developer at the beginning of my career. I’ve been in the programming field since 2023, and during this time, I’ve had the opportunity to explore a bit of each of the main technologies, which allowed me to identify the ones where I can deliver the best results.',
    meText2:
      'Outside of my professional life, I can say that I’m an enthusiast of Stoic philosophy, cinema, cooking, and, of course, technology in its various forms. I believe these interests complement my creative and logical vision, which reflects in the way I approach challenges both in programming and in my personal life.',

    projectsTitle: 'Projects',
    projBtn1: 'See the code',
    projBtn2: 'See it running',
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
    skillsTitle: 'Habilidades',
    techInfo:
      'Minha stack de tecnologias enfatiza linguagens fortemente tipadas e <span>programação orientada a objetos</span>, garantindo tanto a robustez quanto a <span>escalabilidade</span>. No front-end, utilizo TypeScript com Angular e SASS para criar interfaces elegantes e funcionais. No back-end, sou especializado em NestJS, C# e .NET, entregando APIs eficientes e bem estruturadas. Com experiência em bancos de dados relacionais e não relacionais, <span>adapto as melhores soluções</span> às necessidades de cada projeto.',
    aboutTitle: 'Sobre Mim',
    meText1:
      'Me chamo Eduardo Cruz, estudante de Análise e Desenvolvimento de Sistemas e desenvolvedor full stack em início de carreira. Estou na área da programação desde 2023 e, desde então, tive a oportunidade de explorar um pouco de cada uma das principais tecnologias, o que me permitiu identificar aquelas nas quais consigo entregar os melhores resultados.',
    meText2:
      'Fora do âmbito profissional, posso dizer que sou um entusiasta da filosofia estóica, do cinema, da culinária e, claro, tecnologia em suas diversas formas. Acredito que esses interesses complementam minha visão criativa e lógica, o que reflete na forma como abordo os desafios tanto na programação quanto na vida pessoal.',

    projectsTitle: 'Projetos',
    projBtn1: 'Ver o código',
    projBtn2: 'Ver o site',
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
// Função para alterar o idioma
function changeLanguage(lang) {
  document.getElementById('name_input').setAttribute('placeholder', translations[lang].name_placeholder);
  document.getElementById('email_input').setAttribute('placeholder', translations[lang].email_placeholder);
  document.getElementById('subject_input').setAttribute('placeholder', translations[lang].subject_placeholder);
  document.getElementById('message_input').setAttribute('placeholder', translations[lang].message_placeholder);

  // Atualizar o valor do botão de envio
  document.getElementById('form_button').setAttribute('value', translations[lang].submit_value);
  // Selecionar todos os elementos que precisam de tradução
  const translatableElements = document.querySelectorAll('[data-translate]');

  translatableElements.forEach((element) => {
    const key = element.getAttribute('data-translate');
    if (translations[lang][key]) {
      element.innerHTML = translations[lang][key];
    }
  });

  // Gerenciar classes nos botões de idioma
  const btnEn = document.querySelectorAll('.en'); // Seleciona todos os elementos com classe 'en'
  const btnPt = document.querySelectorAll('.pt'); // Seleciona todos os elementos com classe 'pt'

  if (lang === 'en') {
    btnEn.forEach((btn) => btn.classList.remove('disabled-lang')); // Adiciona a classe desabilitada a todos os botões EN
    btnPt.forEach((btn) => btn.classList.add('disabled-lang')); // Remove a classe desabilitada de todos os botões PT
  } else if (lang === 'pt') {
    btnPt.forEach((btn) => btn.classList.remove('disabled-lang')); // Adiciona a classe desabilitada a todos os botões PT
    btnEn.forEach((btn) => btn.classList.add('disabled-lang')); // Remove a classe desabilitada de todos os botões EN
  }
}

// Define um idioma padrão ao carregar a página
window.onload = () => changeLanguage('pt');
