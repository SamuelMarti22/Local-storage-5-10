let nombre,usuario,nombreUsuario,correo,direccion,ciudad
let formulario = document.getElementById('formulario')
formulario.addEventListener('submit', (e)=>{
    e.preventDefault()
    LeerData()
    GuardarInfo()
})

function LeerData(){
    nombre = document.getElementById('firstName').value
    apellido = document.getElementById('lastName').value
    nombreUsuario = document.getElementById('username').value
    correo = document.getElementById('email').value
    direccion = document.getElementById('address').value
    ciudad = document.getElementById('state').value
}

function GuardarInfo(){
    localStorage.setItem('Nombre',nombre)
    localStorage.setItem('Apellido',apellido)
    localStorage.setItem('Usuario',nombreUsuario)
    localStorage.setItem('Gmail',correo)
    localStorage.setItem('Dirección',direccion)
    localStorage.setItem('Ciudad',ciudad)
}