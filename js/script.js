let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showNextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

setInterval(showNextSlide, 3000);

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Sementara, login akan berhasil untuk username 'admin' dan password 'password'
    if (username === 'nurlatipah@garuda-indonesia.com' && password === 'Garuda2024') {
        window.location.href = 'dashboard.html';
    } else {
        alert('Username atau password salah');
    }
});
