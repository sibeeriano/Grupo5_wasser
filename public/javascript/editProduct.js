
let qs = function(elemento){
    return document.querySelector(elemento)
}

window.addEventListener('load',function(){

    let formulario = qs('form#formEditProduct');
    let inputNombre = qs('#nombre');
    let inputPrecio = qs('#precio');
    let regExPrecio = /^[0-9]*$/
    let inputFoto = qs('#imagenes');   
    let textDescripcion = qs('#descripcion');
    (inputFoto.value)?inputFoto.value = "":""

    let errores = {};

    inputNombre.addEventListener('blur',function(){
        switch (true) {
            case this.value.length == 0:
                errores.nombre = "El campo nombre es obligatorio";
                errorNombre.innerHTML = errores.nombre;
            
                break;
            case this.value.trim().length <= 2:
                errores.nombre = "Tenés que poner al menos 3 letras"
                errorNombre.innerHTML = errores.nombre;
                break;
            default:
                errorNombre.innerHTML = "";
        }
    })

    inputPrecio.addEventListener('blur',function(){
        switch (true) {
            case this.value == "":
                errores.precio = "Es obligatorio declarar un precio";
                errorPrecio.innerHTML = errores.precio;
            
                break;
            case !regExPrecio.test(this.value):
                errores.precio = "Solo puede ingresar numeros"
                errorPrecio.innerHTML = errores.precio;
                break;
            default:
                errorPrecio.innerHTML = "";
        }
    })

    inputFoto.addEventListener('blur',function(){
        switch (true) {
            case this.value == "":
                errores.foto = "Es obligatorio subir una foto de perfil"
                errorFoto.innerHTML = errores.foto;
                this.classList.add('is-invalid')
            break
            default:
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
            errorFoto.innerHTML = "";
        }
    })

    inputFoto.addEventListener('change',function(e){
        // Creamos el objeto de la clase FileReader
        let reader = new FileReader();

        // Leemos el archivo subido y se lo pasamos a nuestro fileReader
        reader.readAsDataURL(e.target.files[0]);

        // Le decimos que cuando este listo ejecute el código interno
        reader.onload = function(){
          vistaPrevia.src = reader.result;
        };
      
        errorFoto.innerHTML = "";
})


textDescripcion.addEventListener('blur',function(){
    switch (true) {
        case this.value == "":
            errores.comentario = "Este campo es obligatorio"
            errorComentario.innerHTML = errores.comentario;
            this.classList.add('is-invalid')
        break
        default:
        this.classList.remove('is-invalid');
        this.classList.add('is-valid');
        errorComentario.innerHTML = "";
    }
})

formulario.addEventListener('submit',function(event){
    let error = false
    event.preventDefault()

    let elementosForm = this.elements;
    
    for (let index = 0; index < elementosForm.length-1; index++) {
        if(elementosForm[index].value == ""){
        
            msgError.innerHTML = "Complete todos los datos";
            error =true
        }
    }
    if(!error){
        console.log("Todo Perfecto!!");
        formulario.submit()
    }
    
})

})