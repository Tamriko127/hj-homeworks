'use strict';
list.addEventListener('click', checkCart);

function checkCart(event) {
	if ((event.target.tagName === 'A') && (event.target.classList.contains('add-to-cart'))) {
		event.preventDefault();
		addToCart(event.target.dataset);
	};
}
