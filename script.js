const homeContainer = document.querySelector(".home-container");
const aboutContainer = document.querySelector(".about-container");
const skillsContainer = document.querySelector(".skills-container");
const projectsContainer = document.querySelector(".projects-container");
const contactContainer = document.querySelector(".contact-container");

const homeColumn = document.querySelector(".home-column");
const aboutColumn = document.querySelector(".about-column");
const skillsColumn = document.querySelector(".skills-column");
const projectsColumn = document.querySelector(".projects-column");
const contactColumn = document.querySelector(".contact-column");

const homeContent = document.querySelector(".home-container-content");
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

//COLUNAS

//SKILLS

const icons = document.querySelectorAll("i");

icons.forEach((icon) => {
	icon.addEventListener("mouseover", () => {
		icon.classList.add("colored");
	});

	icon.addEventListener("mouseout", () => {
		icon.classList.remove("colored");
	});
});

//======================================================================================================================
const contentWrapper = document.querySelector(".contents-wrapper");
const prevBtn = document.querySelector(".previus");
const nextBtn = document.querySelector(".next");
const contentDois = document.querySelector(".dois");
const contentUm = document.querySelector(".um");
const sectionDois = document.querySelector(".sectionDois");
const sectionUm = document.querySelector(".sectionUm");

let currentPosition = 0;
const contentCount = contentWrapper.children.length;

function moveTo(position) {
	currentPosition = position;
	const translateX = -currentPosition * 780;
	contentWrapper.style.transform = `translateX(${translateX}px)`;

	// atualiza o contador
	const contador = document.querySelector(".contador");
	contador.textContent = `${currentPosition + 1}-${contentCount}`;

	if (currentPosition + 1 === 2) {
		contentDois.style.opacity = "1";
		contentDois.style.transition = "all 3s";

		sectionDois.style.opacity = "1";
		sectionDois.style.transform = "scale(100%)";
		sectionDois.style.transition = "all 2s";
	} else {
		contentDois.style.opacity = "";
		contentDois.style.transition = "all 0s";
		sectionDois.style.transform = "scale(80%)";
		sectionDois.style.transition = "all 0s";
	}
}

function movePrev() {
	if (currentPosition > 0) {
		currentPosition--;
		moveTo(currentPosition);
	}
}

function moveNext() {
	if (currentPosition < contentCount - 1) {
		currentPosition++;
		moveTo(currentPosition);
	}
}

prevBtn.addEventListener("click", movePrev);
nextBtn.addEventListener("click", moveNext);
