'use strict';

const galleryNav = document.getElementById('nav')
const links = galleryNav.getElementsByTagName('a');
const viewGallery = document.getElementById('view');

function view(event) {
	event.preventDefault();
	viewGallery.src = this.href;
	if (this.classList.contains('gallery-current')) {
		return;
	}
	for (const link of links) {
		link.classList.remove('gallery-current')

		link.removeAttribute('class')
	}
	this.classList.add('gallery-current');
}


Array.from(links).forEach(link => link.addEventListener('click', view));