function agendar() {
  const data = document.getElementById('datacol').value;
  const hora = document.getElementById('horacol').value;
  const endereco = document.getElementById('endereco').value;
  const residuo = document.getElementById('residuo').value;
  if (data != '' && hora != '') {
    let agendamentos;
    if (localStorage.getItem('agendamentos') != null) {
      agendamentos = JSON.parse(localStorage.getItem('agendamentos'));
    }
    else {
      agendamentos = []
    }

    const coleta = { data: data, hora: hora, endereco: endereco, residuo: residuo }
    agendamentos.push(coleta);
    localStorage.setItem('agendamentos', JSON.stringify(agendamentos));
    console.log(localStorage.getItem('agendamentos'))
    alert('Coleta agendada com sucesso!')
    clearForm()
  }
  else {
    console.log('Dados invalidos!')
    alert('Dados Invalidos!')
  }
}

function clearForm() {
  document.getElementById('datacol').value = ''
  document.getElementById('horacol').value = ''
  document.getElementById('residuo').value = ''
}

window.addEventListener('load', () => {
  if (localStorage.getItem('usuario') !== null) {
    let usuario = JSON.parse(localStorage.getItem('usuario'))
    document.querySelector('#endereco').setAttribute('value', usuario.endereco)
  }
})

function listar() {
  JSON.parse(localStorage.getItem('agendamentos'))?.lista.forEach(element => {
    console.log(element)
  });
}