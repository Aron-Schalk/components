// Mobile menu toggle
export default class MobileMenuToggle {
	constructor() {
		this.elements = {
			hamburger: document.querySelector('.hamburger'),
			header: document.querySelector('.header'),
			menu: document.querySelector('.header-menu'),
			sitenameborder: document.querySelector('.header-sitename-border'),
			sitename: document.querySelector('.header-sitename'),
			login: document.querySelector('.header-login'),
			dropdown: {
				dropmenu: document.querySelector('.header-menu-dropdown'),
				arrow: document.querySelector('.header-menu-item-arrow'),
			},
		};

		this.elements.hamburger.addEventListener('click', this.toggle.bind(this));
	}

	toggle() {
		this.elements.hamburger.classList.toggle('hamburger--cross');
		this.elements.header.classList.toggle('header--empty');
		this.elements.menu.classList.toggle('header-menu--show');
		this.elements.sitenameborder.classList.toggle('header-sitename-border--hide');
		this.elements.sitename.classList.toggle('header-sitename--hide');
		this.elements.login.classList.toggle('header-login--hide');

		this.elements.dropdown.dropmenu.classList.remove('header-menu-dropdown--show');
		this.elements.dropdown.arrow.classList.remove('header-menu-item-arrow--up');
	}
}
