let qs = function(elemento){
    return document.querySelector(elemento)
}

window.addEventListener('load',function(){

    let formulario = qs('form#registerForm');
    let inputNombre = qs('#nombre');
    let inputApellido = qs('#apellido');
    let inputEmail = qs('#email');
    let inputPass = qs('#password');
    let inputPass2 = qs('#password2');
    let inputFoto = qs('#customFileLang');
    

    (inputFoto.value)?inputFoto.value = "":""


    let errores = {};
    let regExEmail =  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
    let regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;
    

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
            case this.value == "":
                errors.apellido = "El campo apellido es obligatorio"
                errorApellido.innerHTML = errors.apellido;
                break
            case this.value.trim().length <= 2:
                errors.apellido = "Tenés que poner al menos 3 letras"
                errorApellido.innerHTML = errors.apellido;
                
            break;
            default:
           
                errorApellido.innerHTML = "";
        }
    })

     

    inputEmail.addEventListener('blur',function(){
        
        switch (true) {
            case this.value == "":
                errores.email = "El campo email es obligatorio"
                errorEmail.innerHTML = errores.email;
           
            break
            case !regExEmail.test(this.value):
                errores.email = "Debes escribir un email válido"
                errorEmail.innerHTML = errores.email;
          
            break;
            default:
     
                errorEmail.innerHTML = "";
        }
    })

    inputPass.addEventListener('blur',function(){
  
        switch (true) {
            case this.value == "":
                errores.pass = "El campo contraseña es obligatorio"
                errorPass.innerHTML = errores.pass;
              
            break
            case !regExPass.test(this.value):
                errores.pass = "La contraseña debe tener entre 6 y 12 caracteres y contener al menos un numero, una minúscula y una mayúscula"
                errorPass.innerHTML = errores.pass;
             
            break;
            default:
                errorPass.innerHTML = "";
        }
    })

    inputPass2.addEventListener('blur',function(){
        switch (true) {
            case this.value == "":
                errores.pass2 = "La verificación de contraseña es obligatorio"
                errorPass2.innerHTML = errores.pass2;
               
            break
            case this.value != inputPass.value:
                errores.pass2 = "Las contraseñas no coinciden"
                errorPass2.innerHTML = errores.pass2;
          
            break;
            default:
            errorPass2.innerHTML = "";
        }
    })

   

    inputFoto.addEventListener('blur',function(){
        switch (true) {
            case this.value == "":
                errores.foto = "Este campo es obligatorio"
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
            
                msgError.innerHTML = "Los campos señadados son obligatorios";
                error =true
            }
        }
        if(!error){
            console.log("Todo Perfecto!!");
            formulario.submit()
        }
        
    })
    
}) 