/* window.onload = function(){
    let formulario = document.getElementById("loginForm")
    let usuario = document.getElementById("email")
    let pass = document.getElementById("password")
    
    let regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/


    function loginValidator(){
        let errores=[];
        if(!regexEmail.test(usuario.value)){
            usuario.classList.toggle('is-invalid')
           //aca pongan las clases al input
            errores.push("El email que ingresaste ta pal ogt")
        }else{
            //aca opnen clases que el input esta bien
        }
        if(pass.value.length <6 || pass.value.length >12){
            console.log("esto ta mal la contraseña boludo")
           //aca van las clases al input
            errores.push("El pass que ingresaste ta pal ogt")
        }
        console.log(errores)
        return errores
    }
     


    formulario.onsubmit = (e)=>{
        e.preventDefault()
        let errores = loginValidator()
        if(!errores.length > 0){
            formulario.submit()
        }
    }
} */
window.onload = function(){
    console.log("asdasdas");
    let loginForm = document.getElementById("loginForm")
    let inputEmail = document.getElementById("email")
    let inputPass = document.getElementById("password")
    //let inputRecordar = document.getElementById('exampleCheck1')
    let divErrors = document.getElementById("errors")
    let regexEmail =  /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/
    
    //console.log(inputRecordar) chequea la vinculación

    function loginValidator(){
        let errores = [];
        //el email tenga un formato tipo email (regex email validator en google)
        if(!regexEmail.test(inputEmail.value)){
            errores.push('El email es incorrecto');
        }
        //que la contraseña tenga como minimo 6 y maximo 12 igual que en el back
        if(inputPass.value.lenght < 6 || inputPass.value.lenght > 12){ //si el lenght de la pss es menor a 6 o mayor a 12 entra al error
        errores.push('La contraseña tiene que tener entre 6 y 12 caracteres');
        }

        return errores //esta funcion devuelve los errores si los hay
    }
 
    loginForm.submit = (e)=>{//con esto quer emos evitar que se de la accion por defecto que es que se envie el formulario de una, para evitar esto le damos un parametro llamado "e"
        e.preventDefault() //con esto no se envia el formulario, no pasa nada
        
        divErrors.innerHTML ="" //con esto no se acumulan los errores en la vista!

        let errores = loginValidator();  
    
        if (errores.lenght==0){  //si errores es igual a 0 
            loginForm.submit() //se envia el formulario 
        }else {//sino pio primero creo un div en el form para que se muestren los errores con la siguiente logica:
            errores.forEach(error => {
                divErrors.innerHTML += `<div class="alert alert-danger" role ="alert"> ${error}</div>`
            })
        }
        
    }
}