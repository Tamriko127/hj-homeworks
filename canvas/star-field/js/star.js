'use strict';
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.addEventListener('click', update);
update();

function update() {
	ctx.fillStyle = '#000000';
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	for (let i = 1; i <= randomInteger(200, 400); i++) {
		const x = random(0, canvas.width);
		const y = random(0, canvas.height);
		const r = random(0, 1.1);
		const alpha = random(0.8, 1);
		const color = randomColor();

		ctx.beginPath();
		ctx.fillStyle = color;
		ctx.globalAlpha = alpha;
		ctx.arc(x, y, r, 0, 2 * Math.PI);
		ctx.fill();

	}
}

function random(from, to) {
	return from + ((to - from) * Math.random());
}

function randomInteger(from, to) {
	return Math.round(random(from, to));
}

function randomColor() {
	const randColor = random(0, 3)
	if (randColor < 1) {
		return '#ffffff'
	} else if (randColor < 2) {
		return '#ffe9c4'
	} else {
		return '#d4fbff'
	}
}