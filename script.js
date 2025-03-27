window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 100);
});
document.querySelector(".get-started").addEventListener("click", () => {
    const email = document.querySelector("input").value;
    if (email) {
        alert("Welcome to Netflix! Email: " + email);
    } else {
        alert("Please enter a valid email address.");
    }
});
document.querySelector(".sign-in").addEventListener("click", () => {
    window.location.href = "signin.html";
});

document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.content-slider');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const cardWidth = slider.querySelector('.content-card').offsetWidth;
    const cardsToShow = 5;
    let currentPosition = 0;

    nextBtn.addEventListener('click', () => {
        const maxScroll = slider.scrollWidth - slider.clientWidth;
        currentPosition = Math.min(currentPosition + cardWidth * cardsToShow, maxScroll);
        slider.scrollTo({
            left: currentPosition,
            behavior: 'smooth'
        });
    });

    prevBtn.addEventListener('click', () => {
        currentPosition = Math.max(currentPosition - cardWidth * cardsToShow, 0);
        slider.scrollTo({
            left: currentPosition,
            behavior: 'smooth'
        });
    });
});
