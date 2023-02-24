'use strict'

const navbar = document.querySelector("nav ul");
const navbarButton = document.querySelector("nav button");
const cover = document.querySelector(".cover");
const downloadCV = document.querySelector("#download_cv");

const hideNavbar = () => {
	navbar.classList.add("hideNavbar");
	cover.classList.add("hidenCover");
};

navbarButton.addEventListener("click", () => {
	navbar.classList.toggle("hideNavbar");
	cover.classList.toggle("hidenCover");
});

cover.addEventListener("click", hideNavbar);

window.addEventListener("hashchange", hideNavbar);

const target = document.getElementById("target");
let array = ["DÉVELOPPEUR</>WEB<#>JUNIOR ","Fullstack" ] ;

let wordIndex = 0;
let letterIndex = 0;

const createLetter = () => {
	const letter = document.createElement("span");
	target.appendChild(letter);

	letter.textContent = array[wordIndex][letterIndex];

	setTimeout(() => {
		letter.remove();
	}, 3000);
};

const loop = () => {
	setTimeout(() => {
		if (wordIndex >= array.length) {
			wordIndex = 0;
			letterIndex = 0;
			loop();
		} else if (letterIndex < array[wordIndex].length) {
			createLetter();
			letterIndex++;
			loop();
		} else {
			wordIndex++;
			letterIndex = 0;
			setTimeout(() => {
				loop();
			}, 3000);
		}
	}, 60);
};
loop();


if(typeof(EventSource) !== "undefined") {
	var source = new EventSource("demo_sse.php");
	source.onmessage = function(event) {
	  document.getElementById("result").innerHTML += event.data + "<br>";
	};
  } else {
	document.getElementById("result").innerHTML = "Sorry, your browser does not support server-sent events...";
  }



