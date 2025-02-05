function togglePassword() {
    const passwordInput = document.getElementById('password');
    const eyeIcon = document.getElementById('eyeIcon');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.src = 'eye-slash-icon.png';
    } else {
        passwordInput.type = 'password';
        eyeIcon.src = 'eye-icon.png';
    }
}

const form = document.getElementById('registrationForm');
const fullNameInput = document.getElementById('fullName');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const registerButton = document.getElementById('registerButton');
const successMessage = document.getElementById('successMessage');

window.addEventListener('load', () => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
        successMessage.textContent = `Welcome back, ${storedUser.fullName}!`;
    }
});

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const userData = {
        fullName: fullNameInput.value,
        email: emailInput.value,
        password: passwordInput.value 
    };

    localStorage.setItem('user', JSON.stringify(userData));

    successMessage.textContent = 'Registration Successful!';
    form.reset(); 
});
