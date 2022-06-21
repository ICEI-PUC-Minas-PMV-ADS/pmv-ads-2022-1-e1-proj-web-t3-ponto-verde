window.addEventListener('load', () => {
  const usuario = JSON.parse(localStorage.getItem('usuario'))
  console.log(usuario)
  document.querySelector('#nome').innerHTML = usuario.nome
  document.querySelector('#email').innerHTML = usuario.email
  document.querySelector('#telefone').innerHTML = usuario.telefone
  document.querySelector('#endereco').innerHTML = usuario.endereco
  document.querySelector('#cpf').innerHTML = usuario.cpf



  const agendamentos = JSON.parse(localStorage.getItem('agendamentos'))
  agendamentos.lista.forEach(element => {
    const content = document.createElement('li')
    content.innerHTML = `${element.data} ${element.hora}`
    document.querySelector('#historico').append(content)
  });

})
