const slides = document.querySelectorAll(".btn-carousel");
slides.forEach((slide)=>slide.addEventListener("click", currentSlide));
function currentSlide(evt) {
    slides.forEach((slide)=>slide.classList.remove("active-btn"));
    evt.target.classList.add("active-btn");
}

//# sourceMappingURL=index.c4775257.js.map
