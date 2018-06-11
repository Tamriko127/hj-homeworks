'use strict';

const drumKeyList = document.getElementsByClassName('drum-kit__drum');

for (let i of drumKeyList) {
	i.onclick = playSound;
}

function playSound() {
	const sound = this.getElementsByTagName('audio')[0];
	sound.play();
	sound.currentTime = 0;
}