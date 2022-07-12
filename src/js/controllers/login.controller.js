import {Api} from "../models/Api.js"

const btnLogin = document.getElementById("btnLogin")
btnLogin.addEventListener('click', async (e) => {
    e.preventDefault()

    const inputs = document.getElementById('formLogin').elements

    const content = {
        email:    inputs[0].value,
        password: inputs[1].value   
    }
    
    const login = await Api.login(content)

    if (login.message) {
        alert(login.message)
    }

    else {
        window.location.assign('../../index.html')
    }
    
})
