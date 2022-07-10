import { Api } from "../models/Api.js"

const data = await Api.getData()

const btnCreatePost = document.getElementById('btnCreatePublication')
btnCreatePost.addEventListener('click', async (e) => {
    e.preventDefault()

    const publication = document.getElementById('createPublication_input')
    console.log(publication)

    const contentPublication = {
       content : publication.value
    }

    await Api.createPost(contentPublication)

    window.location.reload()
})


