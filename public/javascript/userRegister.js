let qs = function(elemento){
    return document.querySelector(elemento)
}

window.addEventListener('load',function(){

    let formulario = qs('form');
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
    let regExDNI = /^[0-9]{8}$/;

    inputNombre.addEventListener('blur',function(evento){
        let inputElement = evento.currentTarget; // esto que agregue, es lo que "llama o declara" las variables de las errores, porque estaban declaradas, existen..pero faltaba llamarlas como en el caso de "imputNombre" por ejemplo
        switch (true) {
            case this.value.length == 0:
                errores.nombre = "El campo nombre es obligatorio";
                inputElement.placeholder = errores.nombre; //les puse un placeholder asi cuando no se completa, salta el texto pidiendo completarlo, faltaria implementar un texto alerta...
                inputElement.classList.add('is-invalid')
                break;
            case this.value.trim().length <= 2:
                errores.nombre = "Tenés que poner al menos 3 letras"
                inputElement.placeholder = errores.nombre;
                inputElement.classList.add('is-invalid')
                break;
            default:
                inputElement.classList.remove('is-invalid');
                inputElement.classList.add('is-valid');
                inputElement.placeholder = "";
        }
    })

    inputApellido.addEventListener('blur',function(evento){
        let inputElement = evento.currentTarget;


        switch (true) {
            case this.value == "":
                errors.apellido = "El campo apellido es obligatorio"
                inputElement.placeholder = errors.apellido;
                this.classList.add('is-invalid')
                break
            case this.value.trim().length <= 2:
                errors.apellido = "Tenés que poner al menos 3 letras"
                inputElement.placeholder = errors.apellido;
                inputElement.classList.add('is-invalid')
            break;
            default:
                inputElement.classList.remove('is-invalid');
                inputElement.classList.add('is-valid');
                inputElement.placeholder = "";
        }
    })

     

    inputEmail.addEventListener('blur',function(e){
        let inputElement = e.currentTarget;
        switch (true) {
            case this.value == "":
                errores.email = "El campo email es obligatorio"
                inputElement.placeholder = errores.email;
                this.classList.add('is-invalid')
            break
            case !regExEmail.test(this.value):
                errores.email = "Debes escribir un email válido"
                inputElement.placeholder = errores.email;
                this.classList.add('is-invalid')
            break;
            default:
            this.classList.remove('is-invalid');
            inputElement.add('is-valid');
            inputElement.placeholder = "";
        }
    })

    inputPass.addEventListener('blur',function(e){
        let inputElement = e.currentTarget;
        switch (true) {
            case this.value == "":
                errores.pass = "El campo contraseña es obligatorio"
                inputElement.placeholder = errores.pass;
                this.classList.add('is-invalid')
            break
            case !regExPass.test(this.value):
                errores.pass = "La contraseña debe tener entre 6 y 12 caracteres y contener al menos un numero, una minúscula y una mayúscula"
                errorPass.innerHTML = errores.pass;
                this.classList.add('is-invalid')
            break;
            default:
                inputElement.remove('is-invalid');
            inputElement.add('is-valid');
            inputElement.placeholder = "";
        }
    })

    inputPass2.addEventListener('blur',function(){
        switch (true) {
            case this.value == "":
                errores.pass2 = "La verificación de contraseña es obligatorio"
                errorPass2.innerHTML = errores.pass2;
                this.classList.add('is-invalid')
            break
            case this.value != inputPass.value:
                errores.pass2 = "Las contraseñas no coinciden"
                errorPass2.innerHTML = errores.pass2;
                this.classList.add('is-invalid')
            break;
            default:
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
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
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
            errorFoto.innerHTML = "";
    })

    textComentario.addEventListener('blur',function(){
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
                elementosForm[index].classList.add('is-invalid');
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