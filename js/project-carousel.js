const carousel = document.querySelector("[data-carousel]");

if (carousel) {
    const slides = Array.from(carousel.querySelectorAll("[data-carousel-slide]"));
    const previousButton = carousel.querySelector("[data-carousel-previous]");
    const nextButton = carousel.querySelector("[data-carousel-next]");
    const dotsContainer = carousel.querySelector("[data-carousel-dots]");
    let activeIndex = 0;

    const dots = slides.map((slide, index) => {
        const dot = document.createElement("button");
        dot.className = "carousel-dot";
        dot.type = "button";
        dot.setAttribute("aria-label", `Go to slide ${index + 1}`);
        dot.addEventListener("click", () => setActiveSlide(index));
        dotsContainer.appendChild(dot);
        return dot;
    });

    function setActiveSlide(index) {
        activeIndex = Math.max(0, Math.min(index, slides.length - 1));

        slides.forEach((slide, slideIndex) => {
            slide.style.transform = `translateX(-${activeIndex * 100}%)`;
            slide.setAttribute("aria-hidden", String(slideIndex !== activeIndex));
        });

        dots.forEach((dot, dotIndex) => {
            dot.setAttribute("aria-current", String(dotIndex === activeIndex));
        });

        previousButton.disabled = activeIndex === 0;
        nextButton.disabled = activeIndex === slides.length - 1;
    }

    previousButton.addEventListener("click", () => setActiveSlide(activeIndex - 1));
    nextButton.addEventListener("click", () => setActiveSlide(activeIndex + 1));

    setActiveSlide(0);
}
