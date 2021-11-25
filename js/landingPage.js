let login = document.getElementById("login")
let signIn = document.getElementById("signIn")
let signUp = document.getElementById("signUp")
let register = document.getElementById("register")

signIn.addEventListener("click",()=>{
    login.classList.toggle("login-disappear")
})
signUp.addEventListener("click",()=>{
    register.classList.toggle("register-disappear")
})

document.getElementById("x").addEventListener("click",()=>{
    login.classList.toggle("login-disappear")
})
document.getElementById("x1").addEventListener("click",()=>{
    register.classList.toggle("register-disappear")
})
