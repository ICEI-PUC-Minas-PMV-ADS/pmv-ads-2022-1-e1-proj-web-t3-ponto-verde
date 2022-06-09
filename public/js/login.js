function logar(){

    var usuario = document.getElementById("usuario")
    var senha = document.getElementById("senha")

    if(login == "admin" && senha == "admin"){
        alert("Sucesso");
     }else {
         alert("Usuario ou senha inválido")
     }

}
