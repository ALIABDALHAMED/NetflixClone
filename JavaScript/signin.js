document.getElementById('signin-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    const password = e.target.querySelector('input[type="password"]').value;
    const errorMessage = document.getElementById('error-message'); 
   
    if (!email || !password) {
        showError('Please enter both email and password');
        return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showError('Please enter a valid email');
        return;
    }
    if (password.length < 8) {
        showError('Password must be at least 8 characters');
        return;
    }
    errorMessage.style.display = 'none';
    alert('Sign in successful!');
});
function showError(message) {
    const errorMessage = document.getElementById('error-message');
    errorMessage.style.display = 'block';
    errorMessage.textContent = message;
} 