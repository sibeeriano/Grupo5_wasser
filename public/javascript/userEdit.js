
let qs = function(elemento){
    return document.querySelector(elemento)
}

window.addEventListener('load',function(){

    let formulario = qs('form#userForm2');
    let inputNombre = qs('#nombre');
    let inputApellido = qs('#apellido');
    let inputFoto = qs('#customFileLang');   
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

    inputApellido.addEventListener('blur',function(){
        switch (true) {
            case this.value.length == 0:
                errores.apellido = "El campo apellido es obligatorio"
                errorApellido.innerHTML = errores.apellido;
                break
            case this.value.trim().length <= 2:
                errores.apellido = "Tenés que poner al menos 3 letras"
                errorApellido.innerHTML = errores.apellido;
                
            break;
            default:
           
                errorApellido.innerHTML = "";
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
    

