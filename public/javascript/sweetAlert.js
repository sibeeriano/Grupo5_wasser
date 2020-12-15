
let qs = function(elemento){
    return document.querySelector(elemento)
}

window.addEventListener('load',function(){

    let formulario = qs('form#delete');



function archiveFunction() {
 swal({
  title: "Estás seguro?",
  text: "El archivo se eliminará para siempre",
  type: "warning",
  showCancelButton: true,
  confirmButtonColor: "#DD6B55",
  confirmButtonText: "Estoy seguro!",
  cancelButtonText: "No, mejor lo dejo!",
  closeOnConfirm: false,
  closeOnCancel: false
},

formulario.addEventListener('submit',function(event){

    event.preventDefault()

    if(isconfirm){
        console.log("Todo Perfecto!!");
        formulario.submit();
} else {
    swal("Cancelled", "Your imaginary file is safe :)", "error");
  }







