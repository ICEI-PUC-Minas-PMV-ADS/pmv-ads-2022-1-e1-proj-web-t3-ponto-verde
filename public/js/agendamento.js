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
    localStorage.setItem('agendamentos', lista);
    console.log(localStorage.getItem('agendamentos'))
    alert('Coleta agendada com sucesso!')
  }
  else {
    console.log('Dados invalidos!')
    alert('Dados Invalidos!')
  }
}

function listar() {
  JSON.parse(localStorage.getItem('agendamentos'))?.lista.forEach(element => {
    console.log(element)
  });
}