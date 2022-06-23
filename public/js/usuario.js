window.addEventListener('load', () => {
  const usuario = JSON.parse(localStorage.getItem('usuario'))
  console.log(usuario)
  document.querySelector('#nome').innerHTML = usuario.nome
  document.querySelector('#email').innerHTML = usuario.email
  document.querySelector('#telefone').innerHTML = usuario.telefone
  document.querySelector('#endereco').innerHTML = usuario.endereco
  document.querySelector('#cpf').innerHTML = usuario.cpf



  const agendamentos = JSON.parse(localStorage.getItem('agendamentos'))
  agendamentos.forEach(element => {
    const content = document.createElement('li')
    content.innerHTML = `<p>
                           <span style="font-size: 13px">${element.data.replaceAll('-', '/')} ${element.hora}</span>
                           <span style="color: #3f8d61">${element.residuo ?? ""}</span>
                           <span>, ${element.endereco}</span>
                         </p>`
    document.querySelector('#historico').append(content)
  });

})

function logout() {
  localStorage.removeItem('usuario');
  window.location.replace("home.html");
}
