'use strict';

let data = [
	{
		titleSong: 'LA Chill Tour',
		url: 'https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/LA Chill Tour.mp3'
	},
	{
		titleSong: 'This is it band',
		url: 'https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/This is it band.mp3'
	},
	{
		titleSong: 'LA Fusion Jam',
		url: 'https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/LA Fusion Jam.mp3'
	}
]


const controls = document.getElementsByClassName('controls')[0];
const title = controls.getElementsByClassName('title')[0];

const mediaplayer = document.getElementsByClassName('mediaplayer')[0];
const player = mediaplayer.getElementsByTagName('audio')[0];

const playState = document.getElementsByClassName('playstate')[0];

const play = playState.getElementsByClassName('fa-play')[0];
const pause = playState.getElementsByClassName('fa-pause')[0];

const stop = document.getElementsByClassName('stop')[0];

const backward = document.getElementsByClassName('back')[0];
const forward = document.getElementsByClassName('next')[0];




let step = -1;

function nextSong() {
	step += 1;
	if (step === data.length) {
		step = 0;
	}

	title.title = data[step].titleSong;
	player.src = data[step].url;

	if (!mediaplayer.classList.contains('play')) {
		player.pause();
	} else {
		player.play();
	}
}

function prevSong() {
	step -= 1;
	if (step < 0) {
		step = data.length - 1;
	}

	title.title = data[step].titleSong;
	player.src = data[step].url;

	if (!mediaplayer.classList.contains('play')) {
		player.pause();
	} else {
		player.play();
	}
}

function playSong() {
	if (player.paused == true) {
		play.style.display = 'none'
		pause.style.display = 'inline-block'
		mediaplayer.classList.add('play');
		player.play();
	} else {
		pause.style.display = 'none'
		play.style.display = 'inline-block'
		mediaplayer.classList.remove('play');
		player.pause();
	}
}




stop.onclick = () => {
	player.pause();
	player.currentTime = 0;
	pause.style.display = 'none'
	play.style.display = 'inline-block'
	mediaplayer.classList.remove('play');
}

nextSong();
playState.onclick = playSong;
forward.onclick = nextSong;
backward.onclick = prevSong;