'use strict';

function nextPhoto() {
	step += 1;
	if (step === imgArray.length) {
		step = 0;
	}
	sliderPhoto.src = `i/${imgArray[step]}`;
}

function prevPhoto() {
	step -= 1;
	if (step < 0) {
		step = imgArray.length - 1;
	}
	sliderPhoto.src = `i/${imgArray[step]}`;
}

var imgArray = [
	'breuer-building.jpg',
	'guggenheim-museum.jpg',
	'headquarters.jpg',
	'IAC.jpg',
	'new-museum.jpg'
]

let step = -1;
const sliderPhoto = document.getElementById('currentPhoto');
const buttonNext = document.getElementById('nextPhoto');
const buttonPrev = document.getElementById('prevPhoto');

nextPhoto();
buttonNext.onclick = nextPhoto;
buttonPrev.onclick = prevPhoto;