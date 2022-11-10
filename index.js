const urlApi = 'https://api.github.com/users'
// 
const btnSearch = document.getElementById('btn-proc')
const valueUserName = document.getElementById('name-proc')

const divAvatar = document.getElementById('div-perfil')
const imgAvatar = document.getElementById('avatar-url')
const seguidores = document.getElementById('followers')
const gitUser = document.getElementById('git-user')
const userName = document.getElementById('username')
const infoName = document.getElementById('name')
const blog = document.getElementById('blog')
const bio = document.getElementById('bio')
const company = document.getElementById('company')
const invisibleElements = document.getElementsByClassName('sucess')


// 

const dados = (urlGet)=>{
        fetch(urlGet).then((res)=>{
        if (res.status === 200) {
            return res.json()
        }else{
            throw new Error('Api is not good')

        }
    }).then((res)=>{
        console.log(res)
        dataApi(res)
        return res

    }).catch((error)=>{
        console.error(error)
    })
}

btnSearch.addEventListener('click', ()=>{
    const urlGet = `${urlApi}/${valueUserName.value}`
    divAvatar.classList.remove('bounce-in')
    
    dados(urlGet)
    
})
function dataApi(data){    
    divAvatar.classList.add('bounce-in')
    for(i=0;i < invisibleElements.length; i++){
        invisibleElements[i].classList.remove('d-none')
        console.log(invisibleElements[i])
    }
   
    // Colocando as Infos no HTML
    imgAvatar.src = data.avatar_url
    seguidores.innerHTML = data.followers
    userName.innerHTML = data.login
    gitUser.href = data.html_url
    infoName.innerHTML = data.name
    blog.innerHTML = data.blog
    bio.innerHTML = data.bio
    company.innerHTML = data.company
}
