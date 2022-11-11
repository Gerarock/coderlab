/* function onClickMenu(){
	document.getElementById("menu").classList.toggle("change");
	document.getElementById("nav").classList.toggle("change");
	document.getElementById("menu-bg").classList.toggle("change-bg");
} */

window.onload = function () {

	const menu_btn = document.querySelector('.hamburger');
	console.log("🚀 ~ file: menuResponsive.js ~ line 10 ~ menu_btn", menu_btn)
	const mobile_menu = document.querySelector('.mobile-nav');
	console.log("🚀 ~ file: menuResponsive.js ~ line 12 ~ mobile_menu", mobile_menu)

	menu_btn.addEventListener('click', function () {
		menu_btn.classList.toggle('is-active');
		mobile_menu.classList.toggle('is-active');
	});
}