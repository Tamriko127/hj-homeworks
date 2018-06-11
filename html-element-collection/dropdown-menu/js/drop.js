'use strict'

const wrapperMenu = document.getElementsByClassName('wrapper-dropdown')[0];


wrapperMenu.onclick = () => {
	wrapperMenu.classList.toggle('active');
}