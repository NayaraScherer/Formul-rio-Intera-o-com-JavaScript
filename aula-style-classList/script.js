let card= document.querySelector("main")
console.log(card)

card.style.backgroundColor= "black"
card.style.color ="white"
card.style.fontFamily="Roboto"

let titulo = document.querySelector("h2")
console.log(titulo)

titulo.style.color = "yellow"
titulo.style.fontSize = "2.5rem"

let botao= document.querySelector("button")
console.log(botao)

botao.style.borderRadius= "2.5rem"



const button=document.getElementsByClassName("button")

const usernameInput = document.getElementById("login-usuario")
const usernameErroMessage = document.getElementsByClassName("error-text") [0]

const passwordInput = document.getElementById("login-senha") 
const passworMessage = document.getElementsByClassName("error-text")[1]
usernameInput.classList.add("error")

//SIMULANDO INTERAÇÃO DO USUÁRIO

//usuário inseriu username errado
//mudar a estilização do input e mensagem de erro do username sinalizando que ele errou
usernameErroMessage.classList.add("visible")
console.log("login-usuario")

//usuário acertou o username mas errou a senha 
//mudar estilização do input e mensagme de erro das tags de username sinalizando que ele acertou 
usernameInput.classList.remove("error")
usernameInput.classList.add("correct")
usernameErroMessage.classList.remove("visible")

//mudar estilização do input e mensagem de erro das tags  sinalizando que le errou 
passwordInput.classList.add("error")
passworMessage.classList.add("visible")
