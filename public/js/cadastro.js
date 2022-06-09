let btn = document.querySelector(".fa-eye")
const nome = document.querySelector("#nome")

btn.addEventListener("click", () => {
    let inputSenha = document.querySelector("#senha")

    if (inputSenha.getAttribute("type") == "password") {
        inputSenha.setAttribute("type", "text")
    } else {
        inputSenha.setAttribute("type", "password")
    }
})

function cadastrar (){
    localStorage.nome = document.getElementById("nome").value;
    localStorage.endereco = document.getElementById("endereco").value;
    localStorage.email = document.getElementById("email").value;
    localStorage.telefone = document.getElementById("telefone").value;
    localStorage.cpf = document.getElementById("cpf").value;
    localStorage.senha = document.getElementById("senha").value;
}
