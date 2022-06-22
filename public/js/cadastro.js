let btn = document.querySelector(".fa-eye")

btn.addEventListener("click", () => {
  let inputSenha = document.querySelector("#senha")

  if (inputSenha.getAttribute("type") == "password") {
    inputSenha.setAttribute("type", "text")
  } else {
    inputSenha.setAttribute("type", "password")
  }
})

document.querySelector('form').addEventListener('submit', cadastrar)

function cadastrar() {
  let usuario = {
    nome: document.getElementById("nome").value,
    endereco: document.getElementById("endereco").value,
    email: document.getElementById("email").value,
    telefone: document.getElementById("telefone").value,
    cpf: document.getElementById("cpf").value,
    senha: document.getElementById("senha").value,
  }
  let usuarios = JSON.parse(localStorage.getItem('usuarios') ?? '[]')
  usuarios.push(usuario)
  localStorage.setItem('usuarios', JSON.stringify(usuarios))
  localStorage.setItem('usuario', JSON.stringify(usuario))
  window.location.replace("usuario.html");
}
