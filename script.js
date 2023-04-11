const homeContainer = document.querySelector(".home-container");
const aboutContainer = document.querySelector(".about-container");
const skillsContainer = document.querySelector(".skills-container");
const projectsContainer = document.querySelector(".projects-container");
const contactContainer = document.querySelector(".contact-container");

const homeColumn = document.querySelector(".home-column");///
const aboutColumn = document.querySelector(".about-column");
const skillsColumn = document.querySelector(".skills-column");
const projectsColumn = document.querySelector(".projects-column");
const contactColumn = document.querySelector(".contact-column");

const homeContent = document.querySelector(".home-container-content");///
const aboutContent = document.querySelector(".about-container-content");
const skillsContent = document.querySelector(".skills-container-content");
const projectsContent = document.querySelector(".projects-container-content");
const contactContent = document.querySelector(".contact-container-content");
const slideHome = () => {
	homeContainer.style.paddingRight = "";
	aboutContainer.style.padding = "0vw";
	skillsContainer.style.padding = "";
	projectsContainer.style.padding = "";
	contactContainer.style.padding = "0vw";

	homeContent.style.display = "";
	aboutContent.style.display = "none";
	skillsContent.style.display = "none";
	projectsContent.style.display = "none";
	contactContent.style.display = "none";
};

const slideAbout = () => {
	homeContainer.style.padding = "0vw";
	aboutContainer.style.paddingRight = "75vw";
	skillsContainer.style.padding = "0vw";
	projectsContainer.style.padding = "0vw";
	contactContainer.style.padding = "0vw";

	homeContent.style.display = "none";
	aboutContent.style.display = "flex";
	skillsContent.style.display = "none";
	projectsContent.style.display = "none";
	contactContent.style.display = "none";
};

const slideSkills = () => {
	homeContainer.style.padding = "0vw";
	aboutContainer.style.padding = "0vw";
	skillsContainer.style.paddingRight = "75vw";
	projectsContainer.style.padding = "0vw";
	contactContainer.style.padding = "0vw";

	homeContent.style.display = "none";
	aboutContent.style.display = "none";
	skillsContent.style.display = "flex";
	projectsContent.style.display = "none";
	contactContent.style.display = "none";
};

const slideProjects = () => {
	homeContainer.style.padding = "0vw";
	aboutContainer.style.padding = "0vw";
	skillsContainer.style.padding = "0vw";
	projectsContainer.style.paddingRight = "75vw";
	contactContainer.style.padding = "0vw";

	homeContent.style.display = "none";
	aboutContent.style.display = "none";
	skillsContent.style.display = "none";
	projectsContent.style.display = "flex";
	contactContent.style.display = "none";
};

const slideContact = () => {
	homeContainer.style.padding = "0vw";
	aboutContainer.style.padding = "0vw";
	skillsContainer.style.padding = "0vw";
	projectsContainer.style.padding = "0vw";
	contactContainer.style.paddingRight = "75vw";

	homeContent.style.display = "none";
	aboutContent.style.display = "none";
	skillsContent.style.display = "none";
	projectsContent.style.display = "none";
	contactContent.style.display = "flex";
};

homeColumn.addEventListener("click", slideHome);
aboutColumn.addEventListener("click", slideAbout);
skillsColumn.addEventListener("click", slideSkills);
projectsColumn.addEventListener("click", slideProjects);
contactColumn.addEventListener("click", slideContact);

//=======================================================================================

const showText = (event) => {
    const moveText = event.target.querySelector('.move-text');
    const moveImage = event.target.querySelector('.move-image');
    moveText.style.transform = "translateY(50%)";
    moveImage.style.transform = "translateY(-50%)";
    moveText.style.opacity = 1;
  };
  
  const hideText = (event) => {
    const moveText = event.target.querySelector('.move-text');
    const moveImage = event.target.querySelector('.move-image');
    moveText.style.transform = "translateY(0)";
    moveImage.style.transform = "translateY(0)";
    moveText.style.opacity = 0;
  };
  
  homeColumn.addEventListener("mouseover", showText);
  homeColumn.addEventListener("mouseleave", hideText);
  
  aboutColumn.addEventListener("mouseover", showText);
  aboutColumn.addEventListener("mouseleave", hideText);
  
  skillsColumn.addEventListener("mouseover", showText);
  skillsColumn.addEventListener("mouseleave", hideText);
  
  projectsColumn.addEventListener("mouseover", showText);
  projectsColumn.addEventListener("mouseleave", hideText);
  
  contactColumn.addEventListener("mouseover", showText);
  contactColumn.addEventListener("mouseleave", hideText);

//======================================================================================================================

window.onload = function(){
    const slides_count = 5;
    let startFrom = 1; 
    let slider_button_left = $('.button_left:eq(0)');
    let slider_button_right = $('.button_right:eq(0)');
    let slides_container = $('.slides_container:eq(0)');
    let slide_width = slides_container.css('width');
    let slide_height = slides_container.css('height');
    let slider_navigation = $('.navigation:eq(0)');



    for(let i = 0; i < slides_count; i++){
        newElement = document.createElement('span');
        newElement.classList = 'nav_element';
        slider_navigation.append(newElement);
    }

    let slider_navElements = $('.navigation:eq(0) .nav_element');
    let slider_navAnimatedBlock = $('.navigation:eq(0) .navAnimatedBlock:eq(0)');
    let navElementsCount = slider_navElements.length;

    function slideFunction(to){
        slides_container.css({'right':parseFloat(75)*(to-1)+'vw'})
    }

    let curentSlide = startFrom;

    slideFunction(startFrom);

    function navAnimation(from, to){
        slider_navElement_width = parseFloat(slider_navElements.css('width'));
        slider_navElement_margin = parseFloat(slider_navElements.css('margin-left'));

        if(from < to){
            animatedBoxSize = (Math.abs(from-to) * slider_navElement_margin * 2) + slider_navElement_width * (Math.abs(from-to)+1) + 'px';
            slider_navAnimatedBlock.animate({'width':animatedBoxSize}, 200);
            slider_navAnimatedBlock.animate({'width':slider_navElement_width, 'left':(to-1)*2*slider_navElement_width+'px'}, 200)
        }

        if(from > to){
            animatedBoxSize = (Math.abs(from-to) * slider_navElement_margin * 2) + slider_navElement_width * (Math.abs(from-to)+1) + 'px';
            slider_navAnimatedBlock.animate({'width':animatedBoxSize, 'left':(to-1)*2*slider_navElement_width+'px'}, 200);
            slider_navAnimatedBlock.animate({'width':slider_navElement_width}, 200)
        }
    }    

    slider_button_left.on( "click",  (function(){
        console.log(curentSlide);
        tempSlide = curentSlide;
        if(curentSlide==1)
            curentSlide = slides_count;
        else {
            curentSlide--;
        }
        slideFunction(curentSlide);
        navAnimation(tempSlide, curentSlide, false);
    }))

    slider_button_right.on( "click",  (function(){
        console.log(curentSlide);
        tempSlide = curentSlide;
        if(curentSlide == slides_count)
            curentSlide = 1;
        else {
            curentSlide++;
        }
        slideFunction(curentSlide);
        navAnimation(tempSlide, curentSlide, true);
    }))

    slider_navElements.on("click", (function(){
        navAnimation(curentSlide, slider_navElements.index(this)+1)
        curentSlide = slider_navElements.index(this)+1;
        slideFunction(curentSlide);
    }))


}



function sendEmail() {
    // Preencha com suas informações
    const emailDestino = 'eduardovscruuz@gmail.com';
    const senhaSMTPJS = 'a0c0dc13-a547-480a-8833-ba1b78bbe39d';
  
    // Obtenha os valores do formulário
    const nome = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('message').value;
  
    // Configure as informações do e-mail
    const emailConfig = {
      To: emailDestino,
      From: email,
      Body: `Nome: ${nome}<br>E-mail: ${email}<br>Mensagem: ${mensagem}`,
    };
  
    // Envie o e-mail usando o SMTPJS
    Email.send({
      SecureToken: senhaSMTPJS,
      ...emailConfig,
    }).then(() => {
      alert('E-mail enviado com sucesso!');
    }).catch((error) => {
      alert(`Erro ao enviar o e-mail: ${error}`);
    });
  }