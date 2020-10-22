/*
los id del formulario son 

formulario---> id='formAdd'
nombre-------> id='nombre'
precio-----> id='precio'
imagen-------> id='imagen'
descripcion--------> id='descripcion'


ya esta el <div> de los errores en la vista

el script esta en /views/partials/scripts como "  <script src="/javascript/productAdd.js"></script>  "

*/

let FormAdd = document.getElementById('formAdd') //todos los elementos capturados
let inputNombre = document.getElementById('nombre')
let inputPrecio = document.getElementById('precio')
let inputImagen = document.getElementById('imagen')
let inputdescripcion = document.getElementById('descripcion')

let divErrors = document.getElementById('errors')

//agregar logica para cada elemento