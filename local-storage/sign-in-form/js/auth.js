'use strict';
const formSignIn = document.querySelector('.sign-in-htm');
const formSignUp = document.querySelector('.sign-up-htm');
const btnSingIn = formSignIn.querySelector('.button');
const btnSingUp = formSignUp.querySelector('.button');

const outputSignIn = formSignIn.querySelector('.error-message');
const outputSignUp = formSignUp.querySelector('.error-message');

const xhr = new XMLHttpRequest();

function singIn(event) {
	let obj = {}
	const formData = new FormData(formSignIn);

	for (const [key, value] of formData) {
		obj[key] = value;
	}

	event.preventDefault();
	xhr.addEventListener('load', onLoad);
	xhr.open('POST', 'https://neto-api.herokuapp.com/signin');
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.send(JSON.stringify(obj));

	function onLoad() {
		if (xhr.status !== 200) {
			console.log(`Ответ ${xhr.status}: ${xhr.statusText}`);
		} else {
			const response = JSON.parse(xhr.responseText);

			if (response.error) {
				outputSignIn.value = response.message;
			} else {
				outputSignIn.value = `Пользователь ${response.name} успешно авторизован`;
			}
		}
	}
}

function singUp(event) {
	let obj = {}
	const formData = new FormData(formSignUp);
	for (const [key, value] of formData) {
		obj[key] = value;
	}

	event.preventDefault();
	xhr.addEventListener('load', onLoad);
	xhr.open('POST', 'https://neto-api.herokuapp.com/signup');
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.send(JSON.stringify(obj));
	//xhr.send(formData);  // почему так не работает?

	function onLoad() {
		if (xhr.status !== 200) {
			console.log(`Ответ ${xhr.status}: ${xhr.statusText}`);
		} else {
			const response = JSON.parse(xhr.responseText);

			if (response.error) {
				outputSignUp.value = response.message;
			} else {
				outputSignUp.value = `Пользователь ${response.name} успешно зарегистрирован`;
			}
		}
	}
}

btnSingIn.addEventListener('click', singIn);
btnSingUp.addEventListener('click', singUp);