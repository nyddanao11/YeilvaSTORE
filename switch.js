const primaryNav = document.getElementById('primary-navigation');
const navToggle = document.getElementById('mobile-nav-toggle');

navToggle.addEventListener('click', () => {
const visibility = primaryNav.getAttribute('data-visible');


if (visibility === 'false') {
	primaryNav.setAttribute('data-visible',true);
// 	navToggle.setAttribute('aria-expanded',true);

// } else (visibility ==='true') {
// 	primaryNav.setAttribute('data-visible',false);
// 	navToggle.setAttribute('aria-expanded',false);
// }
} else if (true) {
	primaryNav.setAttribute('data-visible',false);
}

});