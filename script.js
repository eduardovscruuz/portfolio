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

  // Get a reference to the form element
  const form = document.getElementById('contact-form');
  const sendMessage = document.querySelector('#sendMessage');
  // Listen for the form's submit event
  form.addEventListener('submit', (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Create a new FormData object
    const formData = new FormData(form);
    console.log('Enviando....');
    // Send the form data asynchronously
    console.log('formData:', formData);
    fetch(form.action, {
      method: form.method,
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          // The email was sent successfully
          console.log('Email enviado com sucesso!');
          form.reset();

          sendMessage.innerHTML = 'Email enviado com sucesso!';
          sendMessage.style.opacity = 1;
          sendMessage.style.transform = 'translateY(8px)';
          setTimeout(() => {
            sendMessage.style.opacity = 0;
            sendMessage.style.transform = 'translateY(0)';
          }, 2400);
        } else {
          // There was an error sending the email

          console.error('Erro ao enviar email');
        }
      })
      .catch((error) => {
        sendMessage.innerHTML = 'Erro ao enviar email!';
        sendMessage.style.color = 'red';
        sendMessage.style.display = 'block';
        sendMessage.style.opacity = 1;
        sendMessage.style.transform = 'translateY(8px)';
        setTimeout(() => {
          sendMessage.style.opacity = 0;
          sendMessage.style.transform = 'translateY(0)';
        }, 2400);
        // There was an error sending the email

        console.error('Erro ao enviar email:', error);
      });
  });
} else {
  // Get a reference to the form element
  const form = document.getElementById('contact-form');
  const sendMessage = document.querySelector('#sendMessage');
  // Listen for the form's submit event
  form.addEventListener('submit', (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Create a new FormData object
    const formData = new FormData(form);
    console.log('Enviando...');
    // Send the form data asynchronously
    fetch(form.action, {
      method: form.method,
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          // The email was sent successfully
          console.log('Email enviado com sucesso!');
          form.reset();

          sendMessage.innerHTML = 'Email enviado com sucesso!';
          sendMessage.style.opacity = 1;
          sendMessage.style.transform = 'translateY(8px)';
          setTimeout(() => {
            sendMessage.style.opacity = 0;
            sendMessage.style.transform = 'translateY(0)';
          }, 2400);
        } else {
          // There was an error sending the email

          console.error('Erro ao enviar email');
        }
      })
      .catch((error) => {
        sendMessage.innerHTML = 'Erro ao enviar email!';
        sendMessage.style.color = 'red';
        sendMessage.style.display = 'block';
        sendMessage.style.opacity = 1;
        sendMessage.style.transform = 'translateY(8px)';
        setTimeout(() => {
          sendMessage.style.opacity = 0;
          sendMessage.style.transform = 'translateY(0)';
        }, 2400);
        // There was an error sending the email

        console.error('Erro ao enviar email:', error);
      });
  });

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
  const aboutContent = document.querySelector('.about-container-content');
  const skillsContent = document.querySelector('.skills-content-container');
  const projectsContent = document.querySelector('.projects-container-content');
  const contactContent = document.querySelector('.contact-container-content');

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

  window.onload = function () {
    const slides_count = 6;
    let startFrom = 1;
    let slider_button_left = $('.button_left:eq(0)');
    let slider_button_right = $('.button_right:eq(0)');
    let slides_container = $('.slides_container:eq(0)');
    let slider_navigation = $('.navigation:eq(0)');

    for (let i = 0; i < slides_count; i++) {
      newElement = document.createElement('span');
      newElement.classList = 'nav_element';
      slider_navigation.append(newElement);
    }

    let slider_navElements = $('.navigation:eq(0) .nav_element');
    let slider_navAnimatedBlock = $('.navigation:eq(0) .navAnimatedBlock:eq(0)');

    function slideFunction(to) {
      slides_container.css({ right: parseFloat(75) * (to - 1) + 'vw' });
    }

    let curentSlide = startFrom;

    slideFunction(startFrom);

    function navAnimation(from, to) {
      slider_navElement_width = parseFloat(slider_navElements.css('width'));
      slider_navElement_margin = parseFloat(slider_navElements.css('margin-left'));

      if (from < to) {
        animatedBoxSize =
          Math.abs(from - to) * slider_navElement_margin * 2 +
          slider_navElement_width * (Math.abs(from - to) + 1) +
          'px';
        slider_navAnimatedBlock.animate({ width: animatedBoxSize }, 200);
        slider_navAnimatedBlock.animate(
          { width: slider_navElement_width, left: (to - 1) * 2 * slider_navElement_width + 'px' },
          200
        );
      }

      if (from > to) {
        animatedBoxSize =
          Math.abs(from - to) * slider_navElement_margin * 2 +
          slider_navElement_width * (Math.abs(from - to) + 1) +
          'px';
        slider_navAnimatedBlock.animate(
          { width: animatedBoxSize, left: (to - 1) * 2 * slider_navElement_width + 'px' },
          200
        );
        slider_navAnimatedBlock.animate({ width: slider_navElement_width }, 200);
      }
    }

    slider_button_left.on('click', function () {
      console.log(curentSlide);
      tempSlide = curentSlide;
      if (curentSlide == 1) curentSlide = slides_count;
      else {
        curentSlide--;
      }
      slideFunction(curentSlide);
      navAnimation(tempSlide, curentSlide, false);
    });

    slider_button_right.on('click', function () {
      console.log(curentSlide);
      tempSlide = curentSlide;
      if (curentSlide == slides_count) curentSlide = 1;
      else {
        curentSlide++;
      }
      slideFunction(curentSlide);
      navAnimation(tempSlide, curentSlide, true);
    });

    slider_navElements.on('click', function () {
      navAnimation(curentSlide, slider_navElements.index(this) + 1);
      curentSlide = slider_navElements.index(this) + 1;
      slideFunction(curentSlide);
    });
  };
}

// Seleciona todas as imagens dentro do contêiner
const images = document.querySelectorAll('.tech-skills-icons img');

// Função para adicionar a animação
function addRotation(event) {
  const img = event.target;

  // Evita que a animação seja reiniciada se já estiver em andamento
  if (img.classList.contains('rotate')) return;

  img.classList.add('rotate');

  // Listener para remover a classe "rotate" automaticamente ao final da animação
  img.addEventListener(
    'animationend',
    () => {
      img.classList.remove('rotate');
    },
    { once: true } // Garante que o listener será executado apenas uma vez
  );
}

// Adiciona os listeners de eventos
images.forEach((img) => {
  img.addEventListener('mouseenter', addRotation);
});
