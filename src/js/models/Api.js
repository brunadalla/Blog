export class Api {

    static async getData() {
        const response = await fetch('https://blog-m2.herokuapp.com/posts', {
            method: "GET", 
            headers: {
              "Content-Type": "application/json", 
              Authorization: `Bearer ${localStorage.getItem('@kenzie-blog:token')}`
            }
          })
          .then(res => res.json())
          .then(res => res)
          .catch(err => console.log(err))

        return response
    }

    static async getEspecific(id) {
        const response = await fetch(`https://blog-m2.herokuapp.com/users/register/posts/${id}`, {
            method: "GET", 
            headers: {
              "Content-Type": "application/json", 
              Authorization: `Bearer ${localStorage.getItem('@kenzie-blog:token')}`
            }
          })
          .then(res => res.json())
          .then(res => res)
          .catch(err => console.log(err))

        return response
    }

    static async getEspecificUser(id) {
        const response = await fetch(`https://blog-m2.herokuapp.com/users/${id}`, {
            method: "GET", 
            headers: {
              "Content-Type": "application/json", 
              Authorization: `Bearer ${localStorage.getItem('@kenzie-blog:token')}`
            }
          })
          .then(res => res.json())
          .then(res =>  res)
          .catch(err => console.log(err))

        return response
    }

    static async registerUser(data) {
        const response = await fetch('https://blog-m2.herokuapp.com/users/register', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res => {
            window.location.assign('login.html')
        })
        .catch(err => alert(err)) 

        return response
    }

    static async login(data) {
        const token = await fetch('https://blog-m2.herokuapp.com/users/login', {
            method: "POST", 
            headers: {
                "Content-Type": "application/json", 
            },
            body: JSON.stringify(data)
        })
        .then((res) => res.json())
        .then((res) => {
            localStorage.setItem('@kenzie-blog:userId', JSON.stringify(res.userId))
            localStorage.setItem('@kenzie-blog:token', res.token)

            return res
        })
        .then(res => res)
        .catch((err) => console.log(err))

        window.location.assign('../../index.html')

        return token
    }

    static async createPost(data) {
        const response = await fetch("https://blog-m2.herokuapp.com/posts", {
            method: "POST", 
            headers: {
              "Content-Type": "application/json", 
              Authorization: `Bearer ${localStorage.getItem('@kenzie-blog:token')}`
            },
            body: JSON.stringify(data), 
        })
        .then((res) => res.json())
        .then((res) => res)
        .catch((err) => console.log(err))

        return response
    }

    static async editPost(data, idPost) {
        const response = await fetch(`https://blog-m2.herokuapp.com/posts/${idPost}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json", 
              Authorization: `Bearer ${localStorage.getItem('@kenzie-blog:token')}` 
            },
            body: JSON.stringify(data), 
         })
        .then((res) => res.json())
        .then((res) => res)
        .catch((err) => console.log(err))

        return response;
    }

    static async deletePost(idPost) {
        const response = await fetch(`https://blog-m2.herokuapp.com/posts/${idPost}`, {
            method: "DELETE", 
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${localStorage.getItem('@kenzie-blog:token')}` 
            }
        })
        
        return response
    }
}