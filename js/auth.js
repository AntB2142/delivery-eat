const buttonAuth = document.querySelector('.button-auth')
const modalAuth = document.querySelector('.modal-auth')
const buttonOut = document.querySelector('.button-out')
const userName = document.querySelector('.user-name')
const closeAuth = document.querySelector('.close-auth')
const logInForm = document.getElementById('logInForm')
const inputLogin = document.getElementById('login')
const inputPassword = document.getElementById('password')


buttonAuth.addEventListener('click', () => {
  modalAuth.style.display = 'flex'
})


closeAuth.addEventListener('click', () => {
  modalAuth.style.display = 'none'
})


buttonOut.addEventListener('click', () => {
  logOut()
})


logInForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const user = {
    login: inputLogin.value,
    password: inputPassword.value
  }

  login(user)

  localStorage.setItem('user', JSON.stringify(user))

  if (inputLogin.value.length === 0 || inputPassword.value.length === 0) {
    errorLogIn()
  }
})


if (localStorage.getItem('user')) {
  login(JSON.parse(localStorage.getItem('user')))
}



function login(user) {
  buttonAuth.style.display = 'none'
  modalAuth.style.display = 'none'
  buttonOut.style.display = 'flex'
  userName.style.display = 'flex'
  userName.innerHTML = `${user.login}`
}

function logOut() {
  buttonAuth.style.display = 'flex'
  buttonOut.style.display = 'none'
  userName.style.display = 'none'

  localStorage.removeItem('user')
}

function errorLogIn() {
  alert('Введите логин и пароль!')
  localStorage.removeItem('user')
  buttonAuth.style.display = 'flex'
  modalAuth.style.display = 'flex'
  buttonOut.style.display = 'none'
  userName.style.display = 'none'
}