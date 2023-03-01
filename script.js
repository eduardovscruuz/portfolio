const git = document.getElementById("github-img");
const hack = document.getElementById("hackerrank-img");

const overGit = () => {
	git.src = "/media/github-black.png";
};

const outGit = () => {
	git.src = "/media/github.png";
};

const overHack = () => {
	hack.src = "/media/hackerrank2.png.PNG";
};

const outHack = () => {
	hack.src = "/media/hackerrank1.png.PNG";
};

git.addEventListener("mouseover", overGit);
git.addEventListener("mouseout", outGit);

hack.addEventListener("mouseover", overHack);
hack.addEventListener("mouseout", outHack);
