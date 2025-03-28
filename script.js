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

    function scroll(direction) {
        const cardWidth = slider.querySelector('.content-card').offsetWidth;
        const gap = 20;
        const visibleCards = 5;
        const scrollAmount = (cardWidth + gap) * visibleCards;
        
        if (direction === 'next') {
            slider.scrollLeft += scrollAmount;
        } else {
            slider.scrollLeft -= scrollAmount;
        }
    }

    nextBtn.addEventListener('click', () => scroll('next'));
    prevBtn.addEventListener('click', () => scroll('prev'));

    // Show/hide buttons based on scroll position
    slider.addEventListener('scroll', () => {
        const isAtStart = slider.scrollLeft === 0;
        const isAtEnd = slider.scrollLeft >= slider.scrollWidth - slider.clientWidth - 10;
        
        prevBtn.style.opacity = isAtStart ? '0' : '1';
        nextBtn.style.opacity = isAtEnd ? '0' : '1';
    });

    //cards clickable
    const contentCards = document.querySelectorAll('.content-card');
    contentCards.forEach(card => {
        card.style.cursor = 'pointer';
    });
});
function showMovieDetails(card) {
    const title = encodeURIComponent(card.getAttribute('data-title'));
    const genre = encodeURIComponent(card.getAttribute('data-genre'));
    const year = card.getAttribute('data-year');
    const poster = encodeURIComponent(card.getAttribute('data-poster'));
    const video = encodeURIComponent(card.getAttribute('data-video'));
    
    window.location.href = `movie.html?title=${title}&genre=${genre}&year=${year}&poster=${poster}&video=${video}`;
}

function showTVDetails(card) {
    const title = encodeURIComponent(card.getAttribute('data-title'));
    const genre = encodeURIComponent(card.getAttribute('data-genre'));
    const year = card.getAttribute('data-year');
    const poster = encodeURIComponent(card.getAttribute('data-poster'));
    const video = encodeURIComponent(card.getAttribute('data-video'));
    
    window.location.href = `tvshow.html?title=${title}&genre=${genre}&year=${year}&poster=${poster}&video=${video}`;
}

function showContentDetails(card, type) {
    if (type === 'movie') {
        showMovieDetails(card);
    } else {
        showTVDetails(card);
    }
}
