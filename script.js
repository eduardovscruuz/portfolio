const box1 = document.querySelector(".mini-container1");
const box2 = document.querySelector(".mini-container2");
const box3 = document.querySelector(".mini-container3");
const box4 = document.querySelector(".mini-container4");
const box5 = document.querySelector(".mini-container5");
const contentContainer1 = document.querySelector(".content-container1");
const contentContainer2 = document.querySelector(".content-container2");
const contentContainer3 = document.querySelector(".content-container3");
const contentContainer4 = document.querySelector(".content-container4");
const contentContainer5 = document.querySelector(".content-container5");
const content = document.querySelector(".content");

const changePadding1 = () => {
	box1.style.paddingRight = "";
	contentContainer1.style.display = "";
	box2.style.padding = "0vw";
	box3.style.padding = "";
	box4.style.padding = "";
	box5.style.padding = "0vw";
	contentContainer2.style.display = "none";
	contentContainer3.style.display = "none";
	contentContainer4.style.display = "none";
	contentContainer5.style.display = "none";
};
const changePadding2 = () => {
	box2.style.paddingRight = "75vw";
	contentContainer2.style.display = "flex";
	box1.style.padding = "0vw";
	box3.style.padding = "0vw";
	box4.style.padding = "0vw";
	box5.style.padding = "0vw";
	contentContainer1.style.display = "none";
	contentContainer3.style.display = "none";
	contentContainer4.style.display = "none";
	contentContainer5.style.display = "none";
};

const changePadding3 = () => {
	box3.style.paddingRight = "75vw";
	contentContainer3.style.display = "flex";
	box1.style.padding = "0vw";
	box2.style.padding = "0vw";
	box4.style.padding = "0vw";
	box5.style.padding = "0vw";
	contentContainer2.style.display = "none";
	contentContainer1.style.display = "none";
	contentContainer4.style.display = "none";
	contentContainer5.style.display = "none";
};

const changePadding4 = () => {
	box4.style.paddingRight = "75vw";
	contentContainer4.style.display = "flex";
	box1.style.padding = "0vw";
	box2.style.padding = "0vw";
	box3.style.padding = "0vw";
	box5.style.padding = "0vw";
	contentContainer1.style.display = "none";
	contentContainer2.style.display = "none";
	contentContainer3.style.display = "none";
	contentContainer5.style.display = "none";
};

const changePadding5 = () => {
	box5.style.paddingRight = "75vw";
	contentContainer5.style.display = "flex";
	box1.style.padding = "0vw";
	box2.style.padding = "0vw";
	box3.style.padding = "0vw";
	box4.style.padding = "0vw";
	contentContainer1.style.display = "none";
	contentContainer2.style.display = "none";
	contentContainer3.style.display = "none";
	contentContainer4.style.display = "none";
};
