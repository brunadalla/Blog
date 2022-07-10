import { Api } from "./Api.js"

export class publicationCard {

    static createCard(data){

        const post         = document.createElement('li')
        const postImg      = document.createElement('img')
        const postInfo     = document.createElement('div')
        const infoUser     = document.createElement('h2')
        const infoText     = document.createElement('p')
        const postBtnsDate = document.createElement('div')
        const postDate     = document.createElement('span')

        post.classList.add('listPublications_item')
        postInfo.classList.add('item_publication')
        postBtnsDate.classList.add('item_toolsAndDate')
        
        postImg.src        = data['user']['avatarUrl']        
        infoUser.innerText = data['user']['username']     
        infoText.innerText = data.content 
        postDate.innerText = createDate(data.createdAt)

        postInfo.append(infoUser, infoText)
        postBtnsDate.append(postDate)

        post.append(postImg, postInfo, postBtnsDate)
        
        return post
    }

    static createCardEspecific(data) {
        const infoEditText       = document.createElement('input')
        const btnEditPublication = document.createElement('button')

        const post         = document.createElement('li')
        const postImg      = document.createElement('img')
        const postInfo     = document.createElement('div')
        const infoUser     = document.createElement('h2')
        const infoText     = document.createElement('p')
        const postBtnsDate = document.createElement('div')
        const btnEdit      = document.createElement('button')
        const btnDelete    = document.createElement('button')
        const postDate     = document.createElement('span')

        infoEditText.classList.add('editPublication')
        btnEditPublication.classList.add('btnEditPublication')

        post.classList.add('listPublications_item')
        postInfo.classList.add('item_publication')
        postBtnsDate.classList.add('item_toolsAndDate')
        btnEdit.classList.add('btnEdit')
        btnDelete.classList.add('btnDelete')
        
        btnEdit.id    = data.id
        btnDelete.id  = data.id
        
        btnEditPublication.innerText = 'Editar'
        infoEditText.placeholder     = data.content 

        btnEdit.innerText   = 'Editar'
        btnDelete.innerText = 'Deletar'
        
        postImg.src        = data['user']['avatarUrl'] || 'src/assests/defaultUser.png'
        infoUser.innerText = data['user']['username']     
        infoText.innerText = data.content 
        postDate.innerText = createDate(data.createdAt)

        postInfo.append(infoUser, infoText,infoEditText)
        postBtnsDate.append(btnEdit, btnDelete, postDate, btnEditPublication)

        post.append(postImg, postInfo, postBtnsDate)

        btnEdit.addEventListener('click', async (e) => {

            infoEditText.style.display       = 'block'
            btnEditPublication.style.display = 'block' 
        
            btnEditPublication.addEventListener('click', async (e) =>{
                e.preventDefault()

                const post = {
                    content: infoEditText.value
                }

                await Api.editPost(post, btnEdit.id)

                window.location.reload()
                    
            }) 

            btnEdit.style.display   = 'none'
            btnDelete.style.display = 'none'
        })

        btnDelete.addEventListener('click', async (e) => {
            e.preventDefault()

            await Api.deletePost(btnDelete.id)

            window.location.reload()
        })

        return post
    }
}

function createDate (date) {

    let newDate = []

    for (let i = 0; i < 10; i++){
        newDate.push(date[i])
    }
     
    newDate = newDate.join('')
    newDate = newDate.split('-')
    newDate = [newDate[2], newDate[1], newDate[0]]
    
    return newDate.join('/')
}


