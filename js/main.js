const buttonAuth = document.querySelector('.button-auth');
const modalAuth = document.querySelector('.modal-auth');
const buttonOut = document.querySelector('.button-out');
const userName = document.querySelector('.user-name')
const closeAuth = document.querySelector('.close-auth');
const loginForm = document.getElementById('logInForm');
const inputLogin = document.getElementById('login');
const inputPassword = document.getElementById('password');

const login = (user) => {
    buttonAuth.style.display = 'none';
    buttonOut.style.display = 'block';
    userName.style.display = 'block';
    userName.textContent = user.login;
    modalAuth.style.display = 'none';
}

const logout = () => {
    buttonAuth.style.display = 'block';
    buttonOut.style.display = 'none';
    userName.style.display = 'none';
    userName.textContent = '';
    localStorage.removeItem('user');
}


buttonAuth.addEventListener('click', () => {
    modalAuth.style.display = 'flex';
})

closeAuth.addEventListener('click', () => {
    modalAuth.style.display = 'none';
})

buttonOut.addEventListener('click', () => {
    logout();
})

loginForm.addEventListener('submit', (event) => {
   event.preventDefault();
   const user = {
       login: inputLogin.value,
       password: inputPassword.value
   }
   localStorage.setItem('user', JSON.stringify(user));
   login(user);
})

if (localStorage.getItem('user')) {
    login(JSON.parse(localStorage.getItem('user')));
}