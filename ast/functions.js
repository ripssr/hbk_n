'use strict';
let kittyInterval = null;
let counter = 1;


function addKitty() {
	let vapp = document.getElementById("vApp");
	if (vapp && counter < 200) {
		vapp.appendChild(createKitten());
		counter++;
	}
}


function createKitten() {	
	let kitten = document.createElement("div");
		kitten.classList.add("kitty-img");

		if (counter % 50 === 0) {
			kitten.style.left = "333px";
			kitten.appendChild(createKittyFrase(true));
			kitten.appendChild(createKittyImage(true));
		} else {
			kitten.style.left = getLeft() + "px";
			kitten.appendChild(createKittyFrase());
			kitten.appendChild(createKittyImage());
		}

	return kitten;
}


function createKittyImage(putin=false) {
	let kittyImage = document.createElement("img");

	if (putin) {
		kittyImage.src = "img/kitty100.png";
	} else {
		let num = ~~(Math.random() * 100);
		kittyImage.src = "img/kitty" + num.toString() + ".png";
	}

	return kittyImage;
}


function createKittyFrase(putin=false) {
	let kittyFrase = document.createElement("h3");
		kittyFrase.classList.add("kitty-frase");

		if (putin) {
			kittyFrase.textContent = putinFrase;
			kittyFrase.style.color = "black";
			kittyFrase.classList.add("putin");
		} else {
			kittyFrase.textContent = frases[~~(100 * Math.random())];
			kittyFrase.style.color = "rgb(" + (~~(255 * Math.random())) + "," +
				(~~(255 * Math.random())) + "," + (~~(255 * Math.random())) + ")";
		}

	return kittyFrase;
}


function deleteKittens() {
	let vapp = document.getElementById("vApp");
	let kittens = document.getElementsByClassName("kitty-img");
	let len = kittens.length;
	if (vapp) {
		for (let i = len-1; i >= 0; i--) {
			vapp.removeChild(kittens[i]);
		}
		counter = 1;
	}
}


function getLeft() {
	let w = window,
    	d = document,
    	e = d.documentElement,
    	g = d.getElementsByTagName('body')[0],
    	x = w.innerWidth || e.clientWidth || g.clientWidth;
    return ~~((x - 256) * Math.random());
}


function kittyRain() {
	if (kittyInterval) {
		clearInterval(kittyInterval);
		kittyInterval = null;
		deleteKittens();
		return;
	}

	kittyInterval = setInterval(addKitty, 1000);
}


function loveYou() {
	let button = document.getElementById("love-you");
	if (button) {
		button.classList.toggle("active");
	}

	kittyRain();
}
