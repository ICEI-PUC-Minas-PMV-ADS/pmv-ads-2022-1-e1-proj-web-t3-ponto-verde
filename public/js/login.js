function logar() {

    var login = document.getElementById("login").value
    var senha = document.getElementById("senha").value

    if (login == "joao" && senha == "123456") {
        alert("Sucesso")
        location.href = "home.html"
    }
    else {
        alert("Usuario ou senha inválido")
    }

}

let btn = document.querySelector(".fa-eye")

btn.addEventListener("click", () => {
    let inputSenha = document.querySelector("#senha")

    if (inputSenha.getAttribute("type") == "password") {
        inputSenha.setAttribute("type", "text")
    } else {
        inputSenha.setAttribute("type", "password")
    }
})