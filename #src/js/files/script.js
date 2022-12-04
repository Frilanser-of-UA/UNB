window.onload = function () {
	document.addEventListener("click", documentActions);
	// Actions ( делегирование собитий click)
	function documentActions(e) {
		const targetElement = e.target;
		// ====== Меню
		if (targetElement.classList.contains('header__button')) {
			document.querySelector('.menu__body').classList.add('_active');
			if (window.innerWidth <= 640) {
				document.body.classList.add('_lock');
			}
		} else if (!targetElement.closest('.menu__body') && document.querySelector('.menu__body._active')) {
			document.querySelector('.menu__body').classList.remove('_active');
			if (document.querySelector('body._lock')) {
				document.body.classList.remove('_lock');

			}
		}
		if (targetElement.classList.contains('menu__button-close')) {
			document.querySelector('.menu__body').classList.remove('_active');
			document.body.classList.remove('_lock');
		}
		if (targetElement.classList.contains('user-cab__button')) {
			document.querySelector('.user-cab').classList.toggle('active');
		} else if (!targetElement.closest('.user-cab') && document.querySelector('.user-cab.active')) {
			document.querySelector('.user-cab').classList.remove('active');
		}
	}
	// --------------Если адресс ссылки пустой то отключаем ее--------------
	const linksMenu = document.querySelectorAll('.menu__link');
	linksMenu.forEach(el => {
		const hrefLink = el.getAttribute('href');
		let rez = hrefLink.replace(/^\s*$/);
		if ((hrefLink !== rez) || (hrefLink === '#')) {

			el.classList.add("not-link");

			el.addEventListener('click', function (e) {
				// отменяем стандартное действие браузера
				e.preventDefault();
				//отменить всплытие события, т.е. проткнуть пузырь
				e.stopPropagation();
			}, false);
		}
	});
};

// ===============tooltip==========
if (window.innerWidth <= 768) {
	let tooltips = document.querySelectorAll('.tooltip');
	tooltips.forEach(function (tooltip, index) {
		let tooltipIcon = tooltip.querySelector('.tooltip__icon')
		let tooltipCloze = tooltip.querySelector('.tooltip__cloze')
		tooltipIcon.addEventListener('click', function () {
			tooltip.classList.toggle('active');
		});
		tooltipCloze.addEventListener('click', function () {
			tooltip.classList.remove('active')
		});
	});
}
// ===============tooltip==========

document.querySelectorAll('.menu__button').forEach(function (link, index) {
	link.addEventListener('click', function () {
		if (this.parentElement.classList.contains('_bg')) {
			this.parentElement.classList.remove('_bg');
		} else {
			const activeLink = document.querySelector('.menu__item._bg');
			if (activeLink) {
				activeLink.classList.remove('_bg');
			}
			this.parentElement.classList.add('_bg');
		}
	});
});
// Курсор для слайдера
const circle = document.getElementById('cursor');
if (circle) {
	const circleStyle = circle.style;
	const bodyGallery = document.querySelector('.gallery__row')
	document.addEventListener('mousemove', e => {
		window.requestAnimationFrame(() => {
			circleStyle.top = `${e.clientY - circle.offsetHeight / 2}px`;
			circleStyle.left = `${e.clientX - circle.offsetWidth / 2}px`;
		});
	});
	bodyGallery.addEventListener('mousedown', function (e) {
		circle.classList.add('_active');
		console.log(1)
	});
	bodyGallery.addEventListener('mouseup', function (e) {
		circle.classList.remove('_active');
		console.log(2);
	});
};
// show more
let itemButton = document.getElementsByClassName('_show');
for (let i = 0; i < itemButton.length; i++) {
	itemButton[i].addEventListener('click', function () {
		this.classList.toggle('_active');
		let content = this.previousElementSibling;
		if (content.style.maxHeight) {
			content.style.maxHeight = null;
		} else {
			content.style.maxHeight = content.scrollHeight + 'px';
		}
	})
}
// show more table
let itemButtonTable = document.documentElement.querySelectorAll('.table__body button');
for (let i = 0; i < itemButtonTable.length; i++) {
	itemButtonTable[i].addEventListener('click', function () {
		this.classList.toggle('_active');
		let content = this.closest('.table__button').nextElementSibling;
		if (content.style.height) {
			content.style.height = null;
			content.classList.remove('_active');
		} else {
			content.style.height = content.scrollHeight + 'px';
			content.classList.add('_active');
		}
	})
}
// show more table agreement
let itemButtonTableAgreement = document.documentElement.querySelectorAll('.table-agreement__button button');
let tableAgreementContent = document.documentElement.querySelectorAll('.td-notvisible');
for (let i = 0; i < itemButtonTableAgreement.length; i++) {
	itemButtonTableAgreement[i].addEventListener('click', function () {
		this.classList.toggle('_active');
		let contentItem = itemButtonTableAgreement[i].querySelector('.td-notvisible');
		console.log(contentItem);
		// contentItem.classList.toggle('_active');
		// let content = this.closest('.table-agreement__button').nextElementSibling;
		// if (content.style.height) {
		// 	content.style.height = null;
		// 	content.classList.remove('_active');
		// } else {
		// 	content.style.height = content.scrollHeight + 'px';
		// 	content.classList.add('_active');
		// }
	})
}

// добавляем класс активной ссилке nav
document.querySelectorAll('.nav a').forEach(function (adress) {      // получаем все нужные нам ссылки
	let location = window.location.href;  // получаем адрес страницы
	let link = adress.href;         // получаем адрес ссылки
	if (location == link) {          // при совпадении адреса ссылки и адреса окна
		adress.classList.add('_curent');     //добавляем класс
	}
	if (adress.classList.contains('_curent')) {
		adress.addEventListener('click', function (e) {
			e.preventDefault();
		});
	}
});

// Построение псевдо хлебних крошек
let titleGas = document.querySelector('.gas__title');
let navLinkActive = document.querySelector('.nav__link._curent');
let breadcrumbs = document.querySelector('.breadcrumbs');
if (navLinkActive) {
	let titleText = titleGas.textContent;
	let LinkActiveText = navLinkActive.textContent;
	const generateBreadcrumbs = (titleText, LinkActiveText) => {
		return `
		<ul class="breadcrumbs__list">
		<li class="breadcrumbs__item"><span class="breadcrumbs__link">${titleText}</span></li>
		<li class="breadcrumbs__item"><span class="breadcrumbs__link">${LinkActiveText}</span></li>
		</ul>
		`;
	};
	if (breadcrumbs) {
		breadcrumbs.insertAdjacentHTML('afterbegin', generateBreadcrumbs(titleText, LinkActiveText));
	}
}

// button for item gas disabel
let buttonSubItem = document.querySelectorAll('.button-add').forEach(function (buttonSubItem) {
	if (!buttonSubItem.hasAttribute('disabled')) {
		buttonSubItem.classList.add('_hover');
	}
	buttonSubItem.addEventListener('click', function () {
		if (!buttonSubItem.hasAttribute('disabled')) {
			buttonSubItem.classList.remove('_hover');
			buttonSubItem.disabled = true;
			let messageCal = document.querySelector('._remove');
			if (messageCal) {
				messageCal.style.display = 'none';
			} else {
				messageCal.style.display = 'block';
			}
		}
	});
});

// run-text

function Marquee(speed) {
	const parentSelector = document.querySelectorAll('.marquee').forEach(function (parentSelector) {
		const clone = parentSelector.innerHTML;
		const firstElement = parentSelector.children[0];
		let i = 0;
		parentSelector.insertAdjacentHTML('beforeend', clone);
		parentSelector.insertAdjacentHTML('beforeend', clone);
		setInterval(function () {
			firstElement.style.marginLeft = `-${i}px`;
			if (i > firstElement.clientWidth) {
				i = 0;
			}
			i = i + speed;
		}, 0);
	});
}
window.addEventListener("load", Marquee(.4));


//Auktion price

const normalPrice = (str) => {
	return String(str).replace(/\B(?=(?:\d{3})*$)/g, ' ');
};
const priceWithoutSpaces = (str) => {
	return str.replace(/\s/g, '');
};
// Вод только цифер и знака
function setStrictNumberPattern() {
	let inp = document.querySelectorAll('.form-popup__input');
	for (let i = 0; i < inp.length; i++) {
		let lastVal = "";
		inp[i].addEventListener('input', function () {
			if (!this.value) return (lastVal = "");
			if ((/^\d+[.,]?\d*$/).test(this.value)) {
				lastVal = this.value = this.value.replace(/\./g, ',');
			} else {
				this.value = lastVal;
			}
		});
	}
}
setStrictNumberPattern();
// ==========================
function counter() {
	let price = document.querySelector('.price__volume');
	if (price) {
		let startPrice = Number(price.getAttribute('data-price'));
		let priceNum = Number(price.textContent);
		let priceLabel = document.querySelector('.price__label');
		if (startPrice > priceNum) {
			priceLabel.classList.add('_down');
		} else {
			priceLabel.classList.remove('_down');
		}
		if (startPrice < priceNum) {
			document.querySelector('.price__label').classList.add('_upp')
		} else {
			priceLabel.classList.remove('_upp');
		}
		//popup calck
		let inputValue = document.querySelector('#volume');
		if (inputValue) {

			inputValue.addEventListener('input', function () {
				let summ = document.querySelector('.form-popup__calck span');
				let calck = priceWithoutSpaces(String(priceNum)) * priceWithoutSpaces(inputValue.value).replace(/\,/g, '.');
				if (calck !== NaN) {
					let enterNum = '<span>' + String(normalPrice(calck.toFixed(0))).replace(/\./g, ',') + '</span>';
					summ.innerHTML = enterNum
				} else {
					let enterNum = '<span>' + "0" + '</span>';
					summ.innerHTML = enterNum
				}
			});
		}
	}
}
counter();

//popup calck 2
document.addEventListener("input", documentActionsInput);
function documentActionsInput(e) {
	const inputElement = e.target;
	if (inputElement.classList.contains("form-popup__input")) {
		let volume_2 = document.querySelector('#volume-2').value.replace(/\,/g, '.');
		let price = document.querySelector('#price').value.replace(/\,/g, '.');
		let summPrice = document.querySelector('.form-popup__calck_price span');
		let calckPrice = priceWithoutSpaces(volume_2) * priceWithoutSpaces(price);
		if (calckPrice.value !== NaN) {
			let enterPrice = '<span>' + String(normalPrice(calckPrice.toFixed(0))).replace(/\./g, ',') + '</span>';
			summPrice.innerHTML = enterPrice;
		} else {
			let enterPrice = '<span>' + "0" + '</span>';
			summPrice.innerHTML = enterPrice;
		}
	}
}
// input label animation
let inputs = document.querySelectorAll('.input').forEach(function (inputs) {
	inputs.addEventListener('focus', function () {
		this.parentElement.classList.add('_focus');
	}, true);
	inputs.addEventListener('blur', function () {
		if (this.value === '') {
			this.parentElement.classList.remove('_focus');
		}
	}, true);
});
// input label pasword not show/show
let btnPass = document.querySelectorAll('.form__icon');
btnPass.forEach(function (btn) {
	btn.addEventListener('click', function () {
		let targetPass = this.getAttribute('data-target');
		inputPass = document.querySelector(targetPass);
		if (inputPass.getAttribute('type') === 'password') {
			inputPass.setAttribute('type', 'text');
			btn.classList.add('_icon-eye-line');
			btn.classList.remove('_icon-eye-off-line');
		} else {
			inputPass.setAttribute('type', 'password');
			btn.classList.remove('_icon-eye-line');
			btn.classList.add('_icon-eye-off-line');
		}
	});
})
// chat================================================
const chatBody = document.querySelector('.chat__wrap');
if (chatBody) {
	new SimpleBar(chatBody,
		{
			autoHide: false,
			// forceVisible: true | 'x' | 'y',
			scrollbarMinSize: '92',
			scrollbarMaxSize: '92',
		});
}
let chatBtnOpen = document.querySelector('.chat__btn');
let chatBtnCloze = document.querySelector('.chat__btn-close');
let chatWrapper = document.querySelector('.chat__wrapper');
if (chatBtnOpen) {
	chatBtnOpen.addEventListener('click', function () {
		chatWrapper.classList.add('active');
	})
	chatBtnCloze.addEventListener('click', function () {
		chatWrapper.classList.remove('active');
	})
}
