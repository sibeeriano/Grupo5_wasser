/*
los id del formulario son 

formulario---> id='formRegister'
nombre-------> id='nombre'
apellido-----> id='apellido'
email--------> id='email'
paswsword1---> id='password'
password2----> id='password2'
imagen-------> id='customFileLang'

ya esta el <div> de los errores en la vista

el script esta en /views/partials/scripts como "  <script src="/javascript/userRegister.js"></script>  "

*/

let formRegister = document.getElementById('formRegister') //todos los elementos capturados
let inputNombre = document.getElementById('nombre')
let inputApellido = document.getElementById('apellido')
let inputEmail = document.getElementById('email')
let inputPass = document.getElementById('password')
let inputPass2 = document.getElementById('password2')
let inputImagen = document.getElementById('customFileLang')

let divErrors = document.getElementById('errors')

//agregar logica para cada elemento