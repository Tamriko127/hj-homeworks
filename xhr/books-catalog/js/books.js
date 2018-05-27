`use strict`;
const request = new XMLHttpRequest();
request.addEventListener('load', onLoad);
request.addEventListener("error", onError);
request.open('GET', 'https://neto-api.herokuapp.com/book/');
request.send();

const content = document.querySelector('#content')
content.innerHTML = '';

function onLoad() {

	if (request.status !== 200) {
		console.log(`Ответ ${request.status}: ${request.statusText}`);
	} else {
		const booksСatalog = JSON.parse(request.responseText);
		let bookNew;
		let index;
		for (const book of booksСatalog) {
			content.appendChild(document.createElement('li'));
			bookNew = document.querySelectorAll('#content > li');
			index = booksСatalog.indexOf(book);
			bookNew[index].innerHTML = `<img src="${book.cover.small}">`;
			bookNew[index].dataset.title = book.title;
			bookNew[index].dataset.author = book.author.name;
			bookNew[index].dataset.info = book.info;
			bookNew[index].dataset.price = book.price;
		}
	}
}

function onError() {
	console.log("Сработало событие error");
}