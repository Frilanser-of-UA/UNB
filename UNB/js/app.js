var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");
var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
function isIE() {
	ua = navigator.userAgent;
	var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
	return is_ie;
}
if (isIE()) {
	document.querySelector('html').classList.add('ie');
}
if (isMobile.any()) {
	document.querySelector('html').classList.add('_touch');
}
; //Функция которая определяет точскрин или десктоп
function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support === true) {
		document.querySelector('html').classList.add('_webp');
	} else {
		document.querySelector('html').classList.add('_no-webp');
	}
});; //Работа с картинками webP
function ibg() {
	if (isIE()) {
		let ibg = document.querySelectorAll("._ibg");
		for (var i = 0; i < ibg.length; i++) {
			if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
				ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
			}
		}
	}
}
ibg();; //Работа с картинками ibg
let _slideUp = (target, duration = 500) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		target.style.transitionProperty = 'height, margin, padding';
		target.style.transitionDuration = duration + 'ms';
		target.style.height = target.offsetHeight + 'px';
		target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = 0;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		window.setTimeout(() => {
			target.hidden = true;
			target.style.removeProperty('height');
			target.style.removeProperty('padding-top');
			target.style.removeProperty('padding-bottom');
			target.style.removeProperty('margin-top');
			target.style.removeProperty('margin-bottom');
			target.style.removeProperty('overflow');
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
			target.classList.remove('_slide');
		}, duration);
	}
}
let _slideDown = (target, duration = 500) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		if (target.hidden) {
			target.hidden = false;
		}
		let height = target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = 0;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		target.offsetHeight;
		target.style.transitionProperty = "height, margin, padding";
		target.style.transitionDuration = duration + 'ms';
		target.style.height = height + 'px';
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		window.setTimeout(() => {
			target.style.removeProperty('height');
			target.style.removeProperty('overflow');
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
			target.classList.remove('_slide');
		}, duration);
	}
}
let _slideToggle = (target, duration = 500) => {
	if (target.hidden) {
		return _slideDown(target, duration);
	} else {
		return _slideUp(target, duration);
	}
}

; //Slide toggle slide-toggle
window.addEventListener("load", function () {
	if (document.querySelector('.wrapper')) {
		setTimeout(function () {
			document.querySelector('.wrapper').classList.add('_loaded');
		}, 0);
	}
});

let unlock = true;
; //load-wrapper
//=================
//BodyLock
function body_lock(delay) {
	let body = document.querySelector("body");
	if (body.classList.contains('_lock')) {
		body_lock_remove(delay);
	} else {
		body_lock_add(delay);
	}
}
function body_lock_remove(delay) {
	let body = document.querySelector("body");
	if (unlock) {
		let lock_padding = document.querySelectorAll("._lp");
		setTimeout(() => {
			for (let index = 0; index < lock_padding.length; index++) {
				const el = lock_padding[index];
				el.style.paddingRight = '0px';
			}
			body.style.paddingRight = '0px';
			body.classList.remove("_lock");
		}, delay);

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, delay);
	}
}
function body_lock_add(delay) {
	let body = document.querySelector("body");
	if (unlock) {
		let lock_padding = document.querySelectorAll("._lp");
		for (let index = 0; index < lock_padding.length; index++) {
			const el = lock_padding[index];
			el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		}
		body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		body.classList.add("_lock");

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, delay);
	}
}
//=================; //body-lock
//ActionsOnHash
if (location.hash) {
	const hsh = location.hash.replace('#', '');
	if (document.querySelector('.popup_' + hsh)) {
		popup_open(hsh);
	} else if (document.querySelector('div.' + hsh)) {
		_goto(document.querySelector('.' + hsh), 500, '');
	}
}; //ActionsOnHash

 //DigiFormat--DiGiAnimate
 //Wrap--RemoveClasses--IsHidden
 //letter-animation


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

//FIX ==========================banner===============================
let banner = document.querySelector(".banner");
let paralaxBox = document.querySelector(".banner__paralax-blok");
let bannerImg = document.querySelector(".banner__img img");
let paramsAnimate = 4;
let paramsAnimateImg = 100;
let paramsSizeBlok = 500;
let paramsSizeBlokImg = 500;
if (banner) {
	window.addEventListener('scroll', function (e) {
		let bannerTop = banner.getBoundingClientRect().top + pageYOffset; // Координаті елемента от верха
		let topScroll = window.scrollY; //координаті скролл окна от верха
		let a = banner.getBoundingClientRect().top; // координаті от верха страниці
		let c = banner.getBoundingClientRect().height; //вісота blok
		let b = document.body.clientHeight; //вісота окна
		let translateX = topScroll - bannerTop + b - c;
		if (c > 0) {
			paralaxBox.style.transform = "translateX(" + translateX / paramsAnimate + "px)";
		}
		if (topScroll < 20) {
			paralaxBox.style.transform = "translateX(" + 0 + "px)";
		}
		if (translateX >= paramsSizeBlok) {
			paralaxBox.style.transform = "translateX(" + paramsSizeBlok / paramsAnimate + "px)";
		}
		if (translateX > 1) {
			bannerImg.style.height = 100 + translateX / paramsAnimateImg + "%";
		}
		if (topScroll < 20) {
			bannerImg.style.height = 100 + "%";
		}
	});
}

// SPOLLERS
const spollersArray = document.querySelectorAll('[data-spollers]');
if (spollersArray.length > 0) {
	// Получение обычных слойлеров
	const spollersRegular = Array.from(spollersArray).filter(function (item, index, self) {
		return !item.dataset.spollers.split(",")[0];
	});
	// Инициализация обычных слойлеров
	if (spollersRegular.length > 0) {
		initSpollers(spollersRegular);
	}

	// Получение слойлеров с медиа запросами
	const spollersMedia = Array.from(spollersArray).filter(function (item, index, self) {
		return item.dataset.spollers.split(",")[0];
	});

	// Инициализация слойлеров с медиа запросами
	if (spollersMedia.length > 0) {
		const breakpointsArray = [];
		spollersMedia.forEach(item => {
			const params = item.dataset.spollers;
			const breakpoint = {};
			const paramsArray = params.split(",");
			breakpoint.value = paramsArray[0];
			breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
			breakpoint.item = item;
			breakpointsArray.push(breakpoint);
		});

		// Получаем уникальные брейкпоинты
		let mediaQueries = breakpointsArray.map(function (item) {
			return '(' + item.type + "-width: " + item.value + "px)," + item.value + ',' + item.type;
		});
		mediaQueries = mediaQueries.filter(function (item, index, self) {
			return self.indexOf(item) === index;
		});

		// Работаем с каждым брейкпоинтом
		mediaQueries.forEach(breakpoint => {
			const paramsArray = breakpoint.split(",");
			const mediaBreakpoint = paramsArray[1];
			const mediaType = paramsArray[2];
			const matchMedia = window.matchMedia(paramsArray[0]);

			// Объекты с нужными условиями
			const spollersArray = breakpointsArray.filter(function (item) {
				if (item.value === mediaBreakpoint && item.type === mediaType) {
					return true;
				}
			});
			// Событие
			matchMedia.addListener(function () {
				initSpollers(spollersArray, matchMedia);
			});
			initSpollers(spollersArray, matchMedia);
		});
	}
	// Инициализация
	function initSpollers(spollersArray, matchMedia = false) {
		spollersArray.forEach(spollersBlock => {
			spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
			if (matchMedia.matches || !matchMedia) {
				spollersBlock.classList.add('_init');
				initSpollerBody(spollersBlock);
				spollersBlock.addEventListener("click", setSpollerAction);
			} else {
				spollersBlock.classList.remove('_init');
				initSpollerBody(spollersBlock, false);
				spollersBlock.removeEventListener("click", setSpollerAction);
			}
		});
	}
	// Работа с контентом
	function initSpollerBody(spollersBlock, hideSpollerBody = true) {
		const spollerTitles = spollersBlock.querySelectorAll('[data-spoller]');
		if (spollerTitles.length > 0) {
			spollerTitles.forEach(spollerTitle => {
				if (hideSpollerBody) {
					spollerTitle.removeAttribute('tabindex');
					if (!spollerTitle.classList.contains('_active')) {
						spollerTitle.nextElementSibling.hidden = true;
					}
				} else {
					spollerTitle.setAttribute('tabindex', '-1');
					spollerTitle.nextElementSibling.hidden = false;
				}
			});
		}
	}
	function setSpollerAction(e) {
		const el = e.target;
		if (el.hasAttribute('data-spoller') || el.closest('[data-spoller]')) {
			const spollerTitle = el.hasAttribute('data-spoller') ? el : el.closest('[data-spoller]');
			const spollersBlock = spollerTitle.closest('[data-spollers]');
			const oneSpoller = spollersBlock.hasAttribute('data-one-spoller') ? true : false;
			if (!spollersBlock.querySelectorAll('._slide').length) {
				if (oneSpoller && !spollerTitle.classList.contains('_active')) {
					hideSpollersBody(spollersBlock);
				}
				spollerTitle.classList.toggle('_active');
				_slideToggle(spollerTitle.nextElementSibling, 500);
			}
			e.preventDefault();
		}
	}
	function hideSpollersBody(spollersBlock) {
		const spollerActiveTitle = spollersBlock.querySelector('[data-spoller]._active');
		if (spollerActiveTitle) {
			spollerActiveTitle.classList.remove('_active');
			_slideUp(spollerActiveTitle.nextElementSibling, 500);
		}
	}
}
//Select
let selects = document.getElementsByTagName('select');
if (selects.length > 0) {
	selects_init();
}
function selects_init() {
	for (let index = 0; index < selects.length; index++) {
		const select = selects[index];
		select_init(select);
	}
	//select_callback();
	document.addEventListener('click', function (e) {
		selects_close(e);
	});
	document.addEventListener('keydown', function (e) {
		if (e.code === 'Escape') {
			selects_close(e);
		}
	});
}
function selects_close(e) {
	const selects = document.querySelectorAll('.select');
	if (!e.target.closest('.select') && !e.target.classList.contains('_option')) {
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			const select_body_options = select.querySelector('.select__options');
			select.classList.remove('_active');
			_slideUp(select_body_options, 100);
		}
	}
}
function select_init(select) {
	const select_parent = select.parentElement;
	const select_modifikator = select.getAttribute('class');
	const select_selected_option = select.querySelector('option:checked');
	select.setAttribute('data-default', select_selected_option.value);
	select.style.display = 'none';

	select_parent.insertAdjacentHTML('beforeend', '<div class="select select_' + select_modifikator + '"></div>');

	let new_select = select.parentElement.querySelector('.select');
	new_select.appendChild(select);
	select_item(select);
}
function select_item(select) {
	const select_parent = select.parentElement;
	const select_items = select_parent.querySelector('.select__item');
	const select_options = select.querySelectorAll('option');
	const select_selected_option = select.querySelector('option:checked');
	const select_selected_text = select_selected_option.text;
	const select_type = select.getAttribute('data-type');

	if (select_items) {
		select_items.remove();
	}

	let select_type_content = '';
	if (select_type == 'input') {
		select_type_content = '<div class="select__value icon-select-arrow"><input autocomplete="off" type="text" name="form[]" value="' + select_selected_text + '" data-error="Ошибка" data-value="' + select_selected_text + '" class="select__input"></div>';
	} else {
		select_type_content = '<div class="select__value icon-select-arrow"><span>' + select_selected_text + '</span></div>';
	}

	select_parent.insertAdjacentHTML('beforeend',
		'<div class="select__item">' +
		'<div class="select__title">' + select_type_content + '</div>' +
		'<div hidden class="select__options">' + select_get_options(select_options) + '</div>' +
		'</div></div>');

	select_actions(select, select_parent);
}
function select_actions(original, select) {
	const select_item = select.querySelector('.select__item');
	const selectTitle = select.querySelector('.select__title');
	const select_body_options = select.querySelector('.select__options');
	const select_options = select.querySelectorAll('.select__option');
	const select_type = original.getAttribute('data-type');
	const select_input = select.querySelector('.select__input');

	selectTitle.addEventListener('click', function (e) {
		selectItemActions();
	});

	function selectMultiItems() {
		let selectedOptions = select.querySelectorAll('.select__option');
		let originalOptions = original.querySelectorAll('option');
		let selectedOptionsText = [];
		for (let index = 0; index < selectedOptions.length; index++) {
			const selectedOption = selectedOptions[index];
			originalOptions[index].removeAttribute('selected');
			if (selectedOption.classList.contains('_selected')) {
				const selectOptionText = selectedOption.innerHTML;
				selectedOptionsText.push(selectOptionText);
				originalOptions[index].setAttribute('selected', 'selected');
			}
		}
		select.querySelector('.select__value').innerHTML = '<span>' + selectedOptionsText + '</span>';
	}
	function selectItemActions(type) {
		if (!type) {
			let selects = document.querySelectorAll('.select');
			for (let index = 0; index < selects.length; index++) {
				const select = selects[index];
				const select_body_options = select.querySelector('.select__options');
				if (select != select_item.closest('.select')) {
					select.classList.remove('_active');
					_slideUp(select_body_options, 100);
				}
			}
			_slideToggle(select_body_options, 100);
			select.classList.toggle('_active');
		}
	}
	for (let index = 0; index < select_options.length; index++) {
		const select_option = select_options[index];
		const select_option_value = select_option.getAttribute('data-value');
		const select_option_text = select_option.innerHTML;

		if (select_type == 'input') {
			select_input.addEventListener('keyup', select_search);
		} else {
			if (select_option.getAttribute('data-value') == original.value && !original.hasAttribute('multiple')) {
				select_option.style.display = 'none';
			}
		}
		select_option.addEventListener('click', function () {
			for (let index = 0; index < select_options.length; index++) {
				const el = select_options[index];
				el.style.display = 'block';
			}
			if (select_type == 'input') {
				select_input.value = select_option_text;
				original.value = select_option_value;
			} else {
				if (original.hasAttribute('multiple')) {
					select_option.classList.toggle('_selected');
					selectMultiItems();
				} else {
					select.querySelector('.select__value').innerHTML = '<span>' + select_option_text + '</span>';
					original.value = select_option_value;
					select_option.style.display = 'none';
				}
			}
			let type;
			if (original.hasAttribute('multiple')) {
				type = 'multiple';
			}
			selectItemActions(type);
		});
	}
}
function select_get_options(select_options) {
	if (select_options) {
		let select_options_content = '';
		for (let index = 0; index < select_options.length; index++) {
			const select_option = select_options[index];
			const select_option_value = select_option.value;
			if (select_option_value != '') {
				const select_option_text = select_option.innerHTML;
				select_options_content = select_options_content + '<div data-value="' + select_option_value + '" class="select__option">' + select_option_text + '</div>';
			}
		}
		return select_options_content;
	}
}
function select_search(e) {
	let select_block = e.target.closest('.select ').querySelector('.select__options');
	let select_options = e.target.closest('.select ').querySelectorAll('.select__option');
	let select_search_text = e.target.value.toUpperCase();

	for (let i = 0; i < select_options.length; i++) {
		let select_option = select_options[i];
		let select_txt_value = select_option.textContent || select_option.innerText;
		if (select_txt_value.toUpperCase().indexOf(select_search_text) > -1) {
			select_option.style.display = "";
		} else {
			select_option.style.display = "none";
		}
	}
}
function selects_update_all() {
	let selects = document.querySelectorAll('select');
	if (selects) {
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			select_item(select);
		}
	}
}

//BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-bild')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-bild');

			if (slider.classList.contains('_swiper_scroll')) {
				let sliderScroll = document.createElement('div');
				sliderScroll.classList.add('swiper-scrollbar');
				slider.appendChild(sliderScroll);
			}
		}
		if (slider.classList.contains('_gallery')) {
			//slider.data('lightGallery').destroy(true);
		}
	}
	sliders_bild_callback();
}

function sliders_bild_callback(params) { }
let sliderScrollItems = document.querySelectorAll('._swiper_scroll');
if (sliderScrollItems.length > 0) {
	for (let index = 0; index < sliderScrollItems.length; index++) {
		const sliderScrollItem = sliderScrollItems[index];
		const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
		const sliderScroll = new Swiper(sliderScrollItem, {
			observer: true,
			observeParents: true,
			direction: 'vertical',
			slidesPerView: 'auto',
			freeMode: true,
			scrollbar: {
				el: sliderScrollBar,
				draggable: true,
				snapOnRelease: false
			},
			mousewheel: {
				releaseOnEdges: true,
			},
		});
		sliderScroll.scrollbar.updateSize();
	}
}

function sliders_bild_callback(params) { }

let gallerySlider = new Swiper('.gallery__slider', {
	touchStartPreventDefault: false,
	observer: true,
	observeParents: true,
	slidesPerView: 'auto',
	spaceBetween: 10,
	autoHeight: true,
	speed: 1500,
	freeMode: true,
	touchRatio: 1,
	simulateTouch: true,
	crabCursor: true,
	// Arrows
	navigation: {
		nextEl: '.navigation__btn_next',
		prevEl: '.navigation__btn_prev',
	},
	breakpoints: {
		640: {
			spaceBetween: 20,
		},
		1024: {
			spaceBetween: 60,
		},
	},
	on: {
		lazyImageReady: function () {
			ibg();
		},
	}
});
let workSlider = new Swiper('.work__slider', {
	touchStartPreventDefault: false,
	observer: true,
	observeParents: true,
	slidesPerView: 'auto',
	spaceBetween: 40,
	autoHeight: false,
	speed: 1500,
	freeMode: true,
	touchRatio: 1,
	simulateTouch: true,
	crabCursor: true,
	// Arrows
	navigation: {
		nextEl: '.navigation__btn_next',
		prevEl: '.navigation__btn_prev',
	},
	breakpoints: {
		640: {
			spaceBetween: 60,
		},

	},
	on: {
		lazyImageReady: function () {
			ibg();
		},
	}
});



let cards = document.querySelector('.slider-cards');
if (cards) {
	let flktyCards = new Flickity(cards, {
		// options
		cellAlign: 'left',
		contain: true,
		pageDots: false,
		groupCells: true,
		draggable: '>1',
	});
}

// timer
(function () {
	//  Страница загружена
	countTime();
	//  Если меньше 9, добавьте префикс: 01 \ 02 ....
	function checkTime(_zero) {
		return _zero > 9 ? _zero : '0' + _zero;
	}
	function countTime() {
		let t = document.querySelectorAll('.timer').forEach(function (t) {
			//  Крайний срок. Год, месяц, день, час, минута, секунда - После установки времени окончания - таймер автоматически отключается.
			let dateStr = t.getAttribute('data-date');
			//Получить текущее время  
			let date = new Date();
			let now = date.getTime();
			//Установить крайний срок  
			let endDate = new Date(dateStr);
			let end = endDate.getTime();
			//Разница во времени    
			let leftTime = end - now;
			//Определите переменные d, h, m, s, чтобы сохранить время обратного отсчета  
			let h, m, s;

			//  Считайте дни, часы, минуты, секунды
			if (leftTime >= 0) {
				h = Math.floor(leftTime / 1000 / 60 / 60 % 24);
				m = Math.floor(leftTime / 1000 / 60 % 60);
				s = Math.floor(leftTime / 1000 % 60);
				//Назначьте обратный отсчет для div 
				let timeH = '<span class="timer__item">' + checkTime(h) + '</span>';
				let timeM = '<span class="timer__item">' + checkTime(m) + '</span>';
				let timeS = '<span class="timer__item">' + checkTime(s) + '</span>';
				let timeIcon = '<span class="timer__item">' + '🔥' + '</span>';
				let f = timeIcon + timeH + ':' + timeM + ':' + timeS;
				t.innerHTML = f;
				//Рекурсивно вызывать метод countTime каждую секунду для отображения динамических эффектов времени  
				setTimeout(countTime, 1000);
			} else {
				let timeH = '<span class="timer__item">' + '00' + '</span>';
				let timeM = '<span class="timer__item">' + '00' + '</span>';
				let timeS = '<span class="timer__item">' + '00' + '</span>';
				let timeIcon = '<span class="timer__item">' + '🔥' + '</span>';
				let f = timeIcon + timeH + ':' + timeM + ':' + timeS;
				t.innerHTML = f;
			}
		});
	}
})();
// Dynamic Adapt v.1
// HTML data-da="where(uniq class name),when(breakpoint),position(digi)"
// e.x. data-da=".item,992,2"


"use strict";


function DynamicAdapt(type) {
	this.type = type;
}

DynamicAdapt.prototype.init = function () {
	const _this = this;
	// массив объектов
	this.оbjects = [];
	this.daClassname = "_dynamic_adapt_";
	// массив DOM-элементов
	this.nodes = document.querySelectorAll("[data-da]");

	// наполнение оbjects объктами
	for (let i = 0; i < this.nodes.length; i++) {
		const node = this.nodes[i];
		const data = node.dataset.da.trim();
		const dataArray = data.split(",");
		const оbject = {};
		оbject.element = node;
		оbject.parent = node.parentNode;
		оbject.destination = document.querySelector(dataArray[0].trim());
		оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
		оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
		оbject.index = this.indexInParent(оbject.parent, оbject.element);
		this.оbjects.push(оbject);
	}

	this.arraySort(this.оbjects);

	// массив уникальных медиа-запросов
	this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {
		return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
	}, this);
	this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
		return Array.prototype.indexOf.call(self, item) === index;
	});

	// навешивание слушателя на медиа-запрос
	// и вызов обработчика при первом запуске
	for (let i = 0; i < this.mediaQueries.length; i++) {
		const media = this.mediaQueries[i];
		const mediaSplit = String.prototype.split.call(media, ',');
		const matchMedia = window.matchMedia(mediaSplit[0]);
		const mediaBreakpoint = mediaSplit[1];

		// массив объектов с подходящим брейкпоинтом
		const оbjectsFilter = Array.prototype.filter.call(this.оbjects, function (item) {
			return item.breakpoint === mediaBreakpoint;
		});
		matchMedia.addListener(function () {
			_this.mediaHandler(matchMedia, оbjectsFilter);
		});
		this.mediaHandler(matchMedia, оbjectsFilter);
	}
};

DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
	if (matchMedia.matches) {
		for (let i = 0; i < оbjects.length; i++) {
			const оbject = оbjects[i];
			оbject.index = this.indexInParent(оbject.parent, оbject.element);
			this.moveTo(оbject.place, оbject.element, оbject.destination);
		}
	} else {
		for (let i = 0; i < оbjects.length; i++) {
			const оbject = оbjects[i];
			if (оbject.element.classList.contains(this.daClassname)) {
				this.moveBack(оbject.parent, оbject.element, оbject.index);
			}
		}
	}
};

// Функция перемещения
DynamicAdapt.prototype.moveTo = function (place, element, destination) {
	element.classList.add(this.daClassname);
	if (place === 'last' || place >= destination.children.length) {
		destination.insertAdjacentElement('beforeend', element);
		return;
	}
	if (place === 'first') {
		destination.insertAdjacentElement('afterbegin', element);
		return;
	}
	destination.children[place].insertAdjacentElement('beforebegin', element);
}

// Функция возврата
DynamicAdapt.prototype.moveBack = function (parent, element, index) {
	element.classList.remove(this.daClassname);
	if (parent.children[index] !== undefined) {
		parent.children[index].insertAdjacentElement('beforebegin', element);
	} else {
		parent.insertAdjacentElement('beforeend', element);
	}
}

// Функция получения индекса внутри родителя
DynamicAdapt.prototype.indexInParent = function (parent, element) {
	const array = Array.prototype.slice.call(parent.children);
	return Array.prototype.indexOf.call(array, element);
};

// Функция сортировки массива по breakpoint и place 
// по возрастанию для this.type = min
// по убыванию для this.type = max
DynamicAdapt.prototype.arraySort = function (arr) {
	if (this.type === "min") {
		Array.prototype.sort.call(arr, function (a, b) {
			if (a.breakpoint === b.breakpoint) {
				if (a.place === b.place) {
					return 0;
				}

				if (a.place === "first" || b.place === "last") {
					return -1;
				}

				if (a.place === "last" || b.place === "first") {
					return 1;
				}

				return a.place - b.place;
			}

			return a.breakpoint - b.breakpoint;
		});
	} else {
		Array.prototype.sort.call(arr, function (a, b) {
			if (a.breakpoint === b.breakpoint) {
				if (a.place === b.place) {
					return 0;
				}

				if (a.place === "first" || b.place === "last") {
					return 1;
				}

				if (a.place === "last" || b.place === "first") {
					return -1;
				}

				return b.place - a.place;
			}

			return b.breakpoint - a.breakpoint;
		});
		return;
	}
};

const da = new DynamicAdapt("max");
da.init();
//Popups
let popup_link = document.querySelectorAll('._popup-link');
let popups = document.querySelectorAll('.popup');
for (let index = 0; index < popup_link.length; index++) {
	const el = popup_link[index];
	el.addEventListener('click', function (e) {
		if (unlock) {
			let item = el.getAttribute('href').replace('#', '');
			let video = el.getAttribute('data-video');
			popup_open(item, video);
		}
		e.preventDefault();
	})
}
for (let index = 0; index < popups.length; index++) {
	const popup = popups[index];
	popup.addEventListener("click", function (e) {
		if (!e.target.closest('.popup__body')) {
			popup_close(e.target.closest('.popup'));
		}
	});
}
function popup_open(item, video = '') {
	let activePopup = document.querySelectorAll('.popup._active');
	if (activePopup.length > 0) {
		popup_close('', false);
	}
	let curent_popup = document.querySelector('.popup_' + item);
	if (curent_popup && unlock) {
		if (video != '' && video != null) {
			let popup_video = document.querySelector('.popup_video');
			popup_video.querySelector('.popup__video').innerHTML = '<iframe src="https://www.youtube.com/embed/' + video + '?autoplay=1"  allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		}
		if (!document.querySelector('.menu__body._active')) {
			body_lock_add(500);
		}
		curent_popup.classList.add('_active');
		history.pushState('', '', '#' + item);
	}
}
function popup_close(item, bodyUnlock = true) {
	if (unlock) {
		if (!item) {
			for (let index = 0; index < popups.length; index++) {
				const popup = popups[index];
				let video = popup.querySelector('.popup__video');
				if (video) {
					video.innerHTML = '';
				}
				popup.classList.remove('_active');
			}
		} else {
			let video = item.querySelector('.popup__video');
			if (video) {
				video.innerHTML = '';
			}
			item.classList.remove('_active');
		}
		if (!document.querySelector('.menu__body._active') && bodyUnlock) {
			body_lock_remove(500);
		}
		history.pushState('', '', window.location.href.split('#')[0]);
	}
}
let popup_close_icon = document.querySelectorAll('.popup__close,._popup-close');
if (popup_close_icon) {
	for (let index = 0; index < popup_close_icon.length; index++) {
		const el = popup_close_icon[index];
		el.addEventListener('click', function () {
			popup_close(el.closest('.popup'));
		})
	}
}
document.addEventListener('keydown', function (e) {
	if (e.code === 'Escape') {
		popup_close();
	}
});

//=================
// console.log('Init!');

// inputmask

const telSelector = document.querySelector('.reg-enter__form input[type="tel"]');
if (telSelector) {
	const inputMask = new Inputmask('+38 (999) 999-99-99');
	inputMask.mask(telSelector);
}

//Auktion buttons попап

let buttonAuctions = document.querySelectorAll('.price__buttons a').forEach(function (buttonAuctions) {
	if (!buttonAuctions.classList.contains('_hover')) {
		buttonAuctions.classList.add('_hover');
	}
});

let buttonAuctionBid = document.querySelector('.bid');
let buttonAuctionOffer = document.querySelector('.offer');
const phone_1 = document.querySelector('.input-volume');
const phone_2 = document.querySelector('.input-volume-2');
let form_1 = document.querySelector('#form-1');
let form_2 = document.querySelector('#form-2');
let formReg = document.querySelector('#form-reg');
let formEnter = document.querySelector('#form-enter');
let formCallback = document.querySelector('#form-callback');
let success = document.querySelector('.callback__success');
if (form_1) {
	const validation = new JustValidate(form_1,
		{
			errorFieldCssClass: '_error',
			errorLabelCssClass: 'error-message',
			errorLabelStyle: {
			},
		}
	)

	validation
		.addField('.input-volume', [
			{
				rule: 'function',
				validator: function (a) {
					return Number(phone_1.value.replace(/\,/g, '.')) <= 200;
				},
				errorMessage: 'Обсяг не повинен перевищувати 200 тон (обсяг всього лоту)',
			},
			{
				rule: 'function',
				validator: function (a) {
					return Number(phone_1.value.replace(/\,/g, '.')) >= 1;
				},
				errorMessage: 'Мінімальний обсяг - 1 тона',
			},
		]).onSuccess((event) => {
			event.target.reset();
			let formClose = document.querySelector('.popup_callback-bid._active');
			formClose.classList.remove('_active');
			let popupBodyLock = document.querySelector('body');
			popupBodyLock.classList.remove('_lock');
			popupBodyLock.style.paddingRight = 0;
			let summ = document.querySelector('.form-popup__calck span');
			let enterNum = '<span>' + "0" + '</span>';
			summ.innerHTML = enterNum;
			event.preventDefault();
			buttonAuctionBid.classList.remove('_hover');
			if (!buttonAuctionBid.classList.contains('_hover')) {
				buttonAuctionBid.classList.add('_disabled');
			}
			let priceMessage = document.querySelector('.price__message_display');
			if (priceMessage) {
				priceMessage.classList.add('_active');
			}
		});

}
// ====================================================
if (form_2) {
	const validation_2 = new JustValidate(form_2,
		{
			errorFieldCssClass: '_error',
			errorLabelCssClass: 'error-message',
			errorLabelStyle: {
			},
		}
	)
	validation_2
		.addField('.input-volume-2', [
			{
				rule: 'function',
				validator: function () {
					return Number(phone_2.value.replace(/\,/g, '.')) <= 200;
				},
				errorMessage: 'Обсяг не повинен перевищувати 200 тон (обсяг всього лоту)',
			},
			{
				rule: 'function',
				validator: function () {
					return Number(phone_2.value.replace(/\,/g, '.')) >= 1;
				},
				errorMessage: 'Мінімальний обсяг - 1 тона',
			},
		])
		.addField('.input-price', [
			{
				rule: 'required',
				value: true,
				errorMessage: 'Ведіть ціну',

			}
		]).onSuccess((event) => {
			event.target.reset();
			let formClose = document.querySelector('.popup_callback-offer._active');
			formClose.classList.remove('_active');
			let popupBodyLock = document.querySelector('body');
			popupBodyLock.classList.remove('_lock');
			popupBodyLock.style.paddingRight = 0;
			let summ = document.querySelector('.form-popup__calck_price span');
			let enterNum = '<span>' + "0" + '</span>';
			summ.innerHTML = enterNum;
			buttonAuctionOffer.classList.remove('_hover');
			if (!buttonAuctionOffer.classList.contains('_hover')) {
				buttonAuctionOffer.classList.add('_disabled');
				setTimeout(function () {
					buttonAuctionOffer.classList.remove('_disabled');
					buttonAuctionOffer.classList.add('_hover');
				}, 2500);
			}
		});
}
// ===============================
if (formReg) {
	const validationReg = new JustValidate(formReg,
		{
			errorFieldCssClass: '_error',
			errorLabelCssClass: 'error-message-form',
			errorLabelStyle: {
			},
		}
	)
	validationReg
		.addField('#company-name', [
			{
				rule: 'required',
				errorMessage: 'Заповніть поле',
			}
		])
		.addField('#company-kod', [
			{
				rule: 'required',
				errorMessage: 'Заповніть поле',
			},
			{
				rule: 'number',
				errorMessage: 'Тільки числове значення',
			},
			{
				rule: 'minLength',
				value: 8,
				errorMessage: 'Повинно бути 8 цифр',
			},
			{
				rule: 'maxLength',
				value: 8,
				errorMessage: 'Повинно бути 8 цифр',
			}
		])
		.addField('#company-iban', [
			{
				rule: 'required',
				errorMessage: 'Заповніть поле',
			}
		])
		.addField('#user-name-1', [
			{
				rule: 'required',
				errorMessage: 'Заповніть поле',
			}
		])
		.addField('#user-name-2', [
			{
				rule: 'required',
				errorMessage: 'Заповніть поле',
			}
		])
		.addField('#user-name-3', [
			{
				rule: 'required',
				errorMessage: 'Заповніть поле',
			}
		])
		.addField('#email', [
			{
				rule: 'required',
				errorMessage: 'Заповніть поле',
			},
			{
				rule: 'email',
				errorMessage: 'Введіть коректний email',
			}
		])
		.addField('#tel', [
			{
				rule: 'required',
				errorMessage: 'Заповніть поле',
			},
			{
				rule: 'function',
				validator: function () {
					const phone = telSelector.inputmask.unmaskedvalue();
					return phone.length === 10;
				},
				errorMessage: 'Ведіть корректний телефон',
			}
		])
		.addField('#password_1', [
			{
				rule: 'required',
				errorMessage: 'Заповніть поле',
			},
			{
				rule: 'password',
				errorMessage: 'Мінімум вісім символів, мінімум одна буква и одна цифра',
			}
		])
		.addField('#password_2', [
			{
				rule: 'required',
				errorMessage: 'Заповніть поле',
			},
			{
				validator: (value, fields) => {
					if (fields['#password_1'] && fields['#password_1'].elem) {
						const repeatPasswordValue = fields['#password_1'].elem.value;

						return value === repeatPasswordValue;
					}

					return true;
				},
				errorMessage: 'Пароль не співпадає',
			},
		])

		.onSuccess((event) => {
			event.target.reset();
		});
}
if (formEnter) {
	const validationEnter = new JustValidate(formEnter,
		{
			errorFieldCssClass: '_error',
			errorLabelCssClass: 'error-message-form',
			errorLabelStyle: {
			},
		}
	)
	validationEnter
		.addField('#email', [
			{
				rule: 'required',
				errorMessage: 'Заповніть поле',
			},
			{
				rule: 'email',
				errorMessage: 'Введіть коректний email',
			}
		])
		.addField('#password_1', [
			{
				rule: 'required',
				errorMessage: 'Заповніть поле',
			},
			{
				rule: 'password',
				errorMessage: 'Мінімум вісім символів, мінімум одна буква и одна цифра',
			}
		]).onSuccess((event) => {
			event.target.reset();
		});
}
if (formCallback) {
	const validationCallback = new JustValidate(formCallback,
		{
			errorFieldCssClass: '_error',
			errorLabelCssClass: 'error-message-form',
			errorLabelStyle: {
			},
		}
	)
	validationCallback
		.addField('#message', [
			{
				rule: 'required',
				errorMessage: 'Заповніть поле',
			},
			{
				rule: 'minLength',
				value: 10,
				errorMessage: 'Мінімум 10 символів',
			}
		]).onSuccess((event) => {
			event.target.reset();
			if (formCallback) {
				formCallback.classList.add('not-visible');
			}
			if (success) {
				success.classList.add('visible');
			}
		});
}
document.addEventListener('DOMContentLoaded', function () {

	// получаем поле ввода и вспомогательный блок
	var
		textarea = document.querySelector("#message"),
		block = document.querySelector(".form-blok");

	// при нажатии на клавишу
	if (textarea) {
		textarea.addEventListener("input", function () {

			// получаем значение поля ввода
			var val_text = textarea.value;

			// c помощью регулярных выражений заменм некоторые символы
			val_text = val_text.replace(/ /g, "&nbsp;");
			val_text = val_text.replace(/<|>/g, "_");
			val_text = val_text.replace(/\n/g, "<br>");
			val_text = val_text.replace(/\r/g, "<br>");

			// полученное выражение добавим в вспомогательный блок
			block.innerHTML = val_text;

			// получаем высоту вспомогательного блока
			height_textarea = block.offsetHeight;

			// задаем высоту для текстового поля
			textarea.style.height = height_textarea + "px";
		})
	}
})
// chat textarea
const myText = document.querySelector('.form-chat__textarea');
const myTextWrapper = document.querySelector('.form-chat__body');
if (myText) {
	myText.style.cssText = `height: ${myText.scrollHeight}px; overflow-y: hidden`;
	myText.addEventListener("input", function () {
		this.style.height = "20px";
		this.style.height = `${this.scrollHeight}px`;
		if (myText.value === '') {
			myTextWrapper.classList.remove('active')
		} else {
			myTextWrapper.classList.add('active');
		}
	});
}