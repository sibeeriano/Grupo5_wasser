window.addEventListener('load',function(){
    let loginForm = document.getElementById('loginForm')
    let inputEmail = document.getElementById('email')
    let inputPass = document.getElementById('password')
    let regexEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/



    function loginValitor(){
        let errores = []

        if(!regexEmail.test(inputEmail.value)){
            errores.push('Debes ingresar un email valido')
        }
        if(!inputPass.value.length < 0){
            errores.push('Debes ingresar una contraseña')
        }

        return errores

    }

    loginForm.onsubmit = (e) =>{
        e.preventDefault()

        let errores = loginValitor()

        if(errores.length > 0){

        }else{
            loginForm.submit()
        }

    }


})