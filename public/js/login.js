function logar() {

  var login = document.getElementById("usuario").value
  var senha = document.getElementById("senha").value


  let usuarios = JSON.parse(localStorage.getItem('usuarios') ?? '[]')
  console.log(usuarios)
  let usuario = usuarios.find(v => v.senha == senha && v.nome == login)
  if (usuario == undefined) {
    alert("Usuario ou senha inválido")
  }
  else {
    console.log('Sucesso')
    localStorage.setItem('usuario', JSON.stringify(usuario))
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