window.onload = function(){
    let formulario = qs("loginForm")
    let usuario = qs("email")
    let pass = qs("password")

    let regexEmail = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/


    function loginValidator(){
        let errores=[];
        if(!regexEmail.test(usuario.value)){
            usuario.classList.toggle('is-invalid')
           //aca pongan las clases al input
            errores.push("Email mal")
        }else{
            //aca opnen clases que el input esta bien
        }
        if(pass.value.length <6 || pass.value.length >12){
            console.log("esto ta mal la contraseña ")
           //aca van las clases al input
            errores.push("El pass ")
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
}