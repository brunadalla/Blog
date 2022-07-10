import {showPosts, showUserData} from './js/controllers/homepage.js'

if (localStorage.getItem('@kenzie-blog:token') === null) {

    const modal     = document.getElementById('loginUndefined')
    const userName  = document.getElementById('userImg')
    const userFig   = document.getElementById('userFigure')
    const userImg   = document.getElementById('userName')
    const btnLogout = document.getElementById('btnLogout')

    modal.style.display     = 'flex'
    userName.style.display  = 'none'
    userFig.style.display   = 'none'
    userImg.style.display   = 'none'
    btnLogout.style.display = 'none'

} else { showPosts() }

let item = localStorage.getItem('@kenzie-blog:userId')

await showUserData(item)

