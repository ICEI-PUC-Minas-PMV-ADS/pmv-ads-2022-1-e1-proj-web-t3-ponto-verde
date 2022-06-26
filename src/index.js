function show() {
  document.getElementById('sidebar').classList.toggle('active');
}

window.addEventListener('load', () => {
  if (localStorage.usuario != undefined) {
    document.getElementById('login').style = 'display: none'
    document.getElementById('conta').setAttribute('href', 'usuario.html')
  }
})