const box1 = document.querySelector(".mini-container1");
const box2 = document.querySelector(".mini-container2");
const box3 = document.querySelector(".mini-container3");
const box4 = document.querySelector(".mini-container4");
const box5 = document.querySelector(".mini-container5");
const text = document.querySelector("span");
const about = document.querySelector(".about");

const changePadding1 = () => {
	box1.style.paddingRight = "";
	box2.style.padding = "0vw";
	box3.style.padding = "";
	box4.style.padding = "";
};

const changePadding2 = () => {
	box2.style.paddingRight = "75vw";
	box1.style.padding = "0vw";
	box3.style.padding = "0vw";
	box4.style.padding = "0vw";
	box5.style.padding = "0vw";
};

const changePadding3 = () => {
	box3.style.paddingRight = "75vw";
	box1.style.padding = "0vw";
	box2.style.padding = "0vw";
	box4.style.padding = "0vw";
	box5.style.padding = "0vw";
};

const changePadding4 = () => {
	box4.style.paddingRight = "75vw";
	box1.style.padding = "0vw";
	box2.style.padding = "0vw";
	box3.style.padding = "0vw";
	box5.style.padding = "0vw";
};
const changePadding5 = () => {
	box5.style.paddingRight = "75vw";
	box1.style.padding = "0vw";
	box2.style.padding = "0vw";
	box3.style.padding = "0vw";
	box4.style.padding = "0vw";
};
