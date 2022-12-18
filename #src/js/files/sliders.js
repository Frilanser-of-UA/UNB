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
