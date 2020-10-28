let qs = function(elemento){
    return document.querySelector(elemento)
}

window.addEventListener('load',function(){

    let formulario = qs('form#loginForm');
    let inputEmail = qs('#email');
    let inputPass = qs('#password');
    let errores = {};
    let regExEmail =  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
    let regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;

    console.log(formulario.elements)
    

   
    inputEmail.addEventListener('blur',function(){
        switch (true) {
            case this.value == "":
                errores.email = "El campo email es obligatorio"
                errorEmail.innerHTML = errores.email;
                this.classList.add('is-invalid')
            break
            case !regExEmail.test(this.value):
                errores.email = "Debes escribir un email válido"
                errorEmail.innerHTML = errores.email;
                this.classList.add('is-invalid')
            break;
            default:
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
            errorEmail.innerHTML = "";
        }
    })

    inputPass.addEventListener('blur',function(){
        switch (true) {
            case this.value == "":
                errores.pass = "El campo contraseña es obligatorio"
                errorPass.innerHTML = errores.pass;
                this.classList.add('is-invalid')
            break

            case this.value.trim().length <= 5:
                errores.pass = "La contraseña tiene que tener mas de 4 Caracteres"
                errorPass.innerHTML = errores.pass;
                this.classList.add('is-invalid')
            break;

           
            
            default:
          
            errorPass.innerHTML = "";
        }
    })

    formulario.addEventListener('submit',function(event){
        let error = false
        event.preventDefault()

        let elementosForm = this.elements;
        
        for (let index = 0; index < elementosForm.length-1; index++) {
            if(elementosForm[index].value == ""){
                elementosForm[index].classList.add('is-invalid');
                msgError.innerHTML = "Los campos señalados son obligatorios";
                error =true
            }
        }
        if(!error){
            console.log("Todo Perfecto!!");
            formulario.submit()
        }
        
    })
    
})
