window.onload = function(){
    
    let loginForm = document.getElementById('loginForm')
    let inputEmail = document.getElementById('email')
    let inputPass = document.getElementById('password')
    //let inputRecordar = document.getElementById('exampleCheck1')
    let divErrors = document.getElementById('errors')
    let regexEmail =  /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/
    
    //console.log(inputRecordar) chequea la vinculación

    function loginValidator(){
        let errores = []
        //el email tenga un formato tipo email (regex email validator en google)
        if(regexEmail.test(inputEmail.value)){
            errores.push('El email es incorrecto')
        }
        //que la contraseña tenga como minimo 6 y maximo 12 igual que en el back
        if(!inputPass.value.lenght > 6 || inputPass.value.lenght < 12){ //si el lenght de la pss es menor a 6 o mayor a 12 entra al error
        errores.push('La contraseña tiene que tener entre 6 y 12 caracteres')
        }

        return errores //esta funcion devuelve los errores si los hay
    }
 
    loginForm.onsubmit = (e)=>{//con esto quer emos evitar que se de la accion por defecto que es que se envie el formulario de una, para evitar esto le damos un parametro llamado "e"
        e.preventDefault() //con esto no se envia el formulario, no pasa nada
        
        divErrors.innerHTML ="" //con esto no se acumulan los errores en la vista!

        let errores = loginValidator()  
    
        if (errores.lenght==0){  //si errores es igual a 0 
            loginForm.submit() //se envia el formulario 
        }else {//sino pio primero creo un div en el form para que se muestren los errores con la siguiente logica:
            errores.forEach(error => {
                divErrors.innerHTML += `<div class="alert alert-danger" role ="alert"> ${error}</div>`
            })
        }
        
    }
}