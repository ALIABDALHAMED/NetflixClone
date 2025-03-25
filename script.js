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
