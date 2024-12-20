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
      name: 'Projeto 1',
      image: '/assets/mockups/mockup.png',
      linkGit: 'www.github.com',
      linkSite: 'www.google.com',
      techs: ['html', 'css', 'javascript'],
    },
    {
      name: 'Projeto 2',
      image: '/assets/mockups/mockup.png',
      linkGit: 'www.github.com',
      linkSite: 'www.google.com',
      techs: ['angular', 'sass', 'javascript'],
    },
    {
      name: 'Projeto 3',
      image: '/assets/mockups/mockup.png',
      linkGit: 'www.github.com',
      linkSite: 'www.google.com',
      techs: ['html', 'css', 'javascript', 'typescript'],
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
      <a href="${item.linkGit}" target="_blank">See the code</a>
      <a href="${item.linkSite}" target="_blank">See it running</a>
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
