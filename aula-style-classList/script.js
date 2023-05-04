
const button=document.getElementsByClassName("button")

const usernameInput = document.getElementById("login-usuario")
const usernameErroMessage = document.getElementsByClassName("error-text") [0]

const passwordInput = document.getElementById("login-senha") 
const passworMessage = document.getElementsByClassName("error-text")[1]
usernameInput.classList.add("error")

//SIMULANDO INTERAÇÃO DO USUÁRIO

//usuário inseriu username errado
usernameErroMessage.classList.add("visible")
console.log("login-usuario")

//usuário acertou o username mas errou a senha 
usernameInput.classList.remove("error")
usernameInput.classList.add("correct")
usernameErroMessage.classList.remove("visible")

passwordInput.classList.add("error")
passworMessage.classList.add("visible")
