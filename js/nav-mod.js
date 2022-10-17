window.onscroll = function () {
    nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 10);
}