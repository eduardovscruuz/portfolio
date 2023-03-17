function revealText(element) {
	var p = element.querySelector("p");
	p.style.opacity = "1";
	p.style.transform = "translateY(25%)";
}

function hideText(element) {
	var p = element.querySelector("p");
	p.style.opacity = "0";
	p.style.transform = "translateY(-20%)";
}
