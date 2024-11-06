const email = "ceciliameiochata@gmail.com"
const senha = "fanfiqueira é vida"

localStorage.setItem(email, senha)

const emailInput = document.getElementById("email")
const senhaInput = document.getElementById("senha")
const formulario = document.getElementById("formulario_login")

formulario.addEventListener("submit", (event) => {
    event.preventDefault()
    
    const emailDigitado = emailInput.value
    const senhaDigitado = senhaInput.value


    console.log(emailDigitado)
    console.log(senhaDigitado)
})