// Desktop slider toggle
export default class HeaderSliderToggle {
	constructor() {
		this.maxWidth = '739px';
		this.elements = {
			slider: document.querySelector('.header-slider'),
			slidercards: document.querySelector('.slider-block'),
			sliderprev: document.querySelector('.slider__control-previous-button'),
			slidernext: document.querySelector('.slider__control-next-button'),
			dropdown: {
				dropslider: document.querySelector('.header-slider-container'),
				link: document.querySelector('.header-menu-item-container.header-menu-item-container--hover'),
				arrow: document.querySelector('.header-menu-item-arrow'),
			},
			mobileDropdown: document.querySelector('.header-menu-dropdown'),
		};

		this.elements.dropdown.arrow.addEventListener('click', this.toggleMobile.bind(this));
	}

	toggleMobile() {
		if (this.checkIfMobile() === true) {
			this.elements.mobileDropdown.classList.toggle('header-menu-dropdown--show');
			this.elements.dropdown.arrow.classList.toggle('header-menu-item-arrow--up');

			this.elements.slider.classList.remove('header-slider--show');
			this.elements.slidercards.classList.remove('slider-block--show');
			this.elements.sliderprev.classList.remove('slider__control-previous-button--show');
			this.elements.slidernext.classList.remove('slider__control-next-button--show');

			this.elements.dropdown.dropslider.classList.remove('header-slider-container--show');
			this.elements.dropdown.link.classList.remove('header-menu-item-container--show');
		} else if (this.checkIfMobile() === false) {
			this.elements.dropdown.arrow.classList.toggle('header-menu-item-arrow--up');

			this.elements.slider.classList.toggle('header-slider--show');
			this.elements.slidercards.classList.toggle('slider-block--show');
			this.elements.sliderprev.classList.toggle('slider__control-previous-button--show');
			this.elements.slidernext.classList.toggle('slider__control-next-button--show');

			this.elements.dropdown.dropslider.classList.toggle('header-slider-container--show');
			this.elements.dropdown.link.classList.toggle('header-menu-item-container--show');
		}
	}

	checkIfMobile() {
		return window.matchMedia(`(max-width: ${this.maxWidth})`).matches;
	}

	hide() {
		if (this.checkIfMobile() === false) {
			this.elements.slider.classList.remove('header-slider--show');
			this.elements.slidercards.classList.remove('slider-block--show');
			this.elements.sliderprev.classList.remove('slider__control-previous-button--show');
			this.elements.slidernext.classList.remove('slider__control-next-button--show');

			this.elements.dropdown.dropslider.classList.remove('header-slider-container--show');
			this.elements.dropdown.link.classList.remove('header-menu-item-container--show');
			this.elements.dropdown.arrow.classList.remove('header-menu-item-arrow--up');
		}
	}

	show() {
		console.log(this.checkIfMobile());
		if (this.checkIfMobile() === false) {
			this.elements.dropdown.link.classList.add('header-menu-item-container--show');
			this.elements.dropdown.arrow.classList.add('header-menu-item-arrow--up');
		} else {
			this.elements.slider.classList.remove('header-slider--show');
			this.elements.slidercards.classList.remove('slider-block--show');
			this.elements.sliderprev.classList.remove('slider__control-previous-button--show');
			this.elements.slidernext.classList.remove('slider__control-next-button--show');

			this.elements.dropdown.dropslider.classList.remove('header-slider-container--show');
			this.elements.dropdown.link.classList.remove('header-menu-item-container--show');
		}
	}
}
