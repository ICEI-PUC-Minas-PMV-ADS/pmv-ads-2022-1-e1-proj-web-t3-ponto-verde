function agendar() {
  const data = document.getElementById('datacol').value;
  const hora = document.getElementById('horacol').value;
  if (data != '' && hora != '') {
    let lista;
    if (localStorage.getItem('agendamentos') != null) {
      lista = localStorage.getItem('agendamentos');
    }
    else {
      lista = '{"lista": ['
    }

    const coleta = `{ "data": "${data}", "hora": "${hora}" }`
    lista = `${lista.replace(']}', '')}${coleta} ]}`
    lista = lista.replace('} {', '}, {')
    const key = 'coleta-' + data + '-' + hora;
    localStorage.setItem('agendamentos', lista);
    console.log(localStorage.getItem('agendamentos'))
  }
  else {
    console.log('Dados invalidos!')
  }
}

function listar() {
  localStorage.array.forEach(element => {
    console.log(element)
  });
}