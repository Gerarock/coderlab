const scrolltp = document.querySelector(".scrolltop");
const floatWhatsapp = document.querySelector(".float-whatsapp");

window.addEventListener("load", function () {
    scrolltp.style.opacity = 0;
    floatWhatsapp.style.opacity = 0
});

scrolltp.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});

window.addEventListener("scroll", function () {
    if (window.scrollY >= 200) {
        scrolltp.style.opacity = 1;
        floatWhatsapp.style.opacity = 1;
    } else {
        scrolltp.style.opacity = 0;
        floatWhatsapp.style.opacity = 0;
    }
});