import {Api} from "../models/Api.js"

const btnRegister = document.getElementById("btnRegister")
btnRegister.addEventListener('click', async (e) => {
    e.preventDefault()

    const inputs = document.getElementById('formRegister').elements

    const content = {
        username:  inputs[0].value,
        email:     inputs[1].value,
        avatarUrl: inputs[2].value,
        password:  inputs[3].value
    }
    
    const register = await Api.registerUser(content)

    if (register.message) {
        alert(register.message)
    }

    else {
        window.location.assign('login.html')
    }
})