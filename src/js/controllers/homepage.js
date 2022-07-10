import {Api}               from "../models/Api.js"
import { publicationCard } from "../models/publicationCard.model.js"

const btnLogout = document.getElementById('btnLogout')
btnLogout.addEventListener('click', (e) => {
    e.preventDefault()

    localStorage.removeItem('@kenzie-blog:userId')
    localStorage.removeItem('@kenzie-blog:token')

    window.location.reload()
})


export async function showPosts() {

    const listPost = document.getElementById('listPublications')

    const userId = localStorage.getItem('@kenzie-blog:userId')
    const posts  = await Api.getData()
    const data   = posts.data

    for(let i = data.length - 1; i >= 0; i--){

        let user = data[i].user

        if (user.id == userId) {
            const item =  publicationCard.createCardEspecific(data[i])

            listPost.appendChild(item)
        }

        else {
            const item =  publicationCard.createCard(data[i])

            listPost.appendChild(item)
        }
    }
}

export async function showUserData(id) {

    const userInfo = await Api.getEspecificUser(id)

    const userImage = document.getElementById('userImg')
    const userName  = document.getElementById('userName')

    userName.innerText = userInfo.username
    userImage.src      = userInfo.avatarUrl
}