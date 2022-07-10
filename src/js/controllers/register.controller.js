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
    
    await Api.registerUser(content)
})