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
const bio = document.getElementById('bio')
const company = document.getElementById('company')
const divErro = document.getElementById('texto-erro')
const divfollowers = document.getElementById('div-seguidores')
const invisibleElements = document.getElementsByClassName('sucess')
const addImage = document.createElement("img", {"id":"img-followers"})


// 

const dados = (urlGet)=>{
    fetch(urlGet).then((res)=>{
    if (res.status === 200) {
        return res.json()
    }else{
        erroApi()
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
    divErro.classList.add('d-none')
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
    bio.innerHTML = data.bio
    company.innerHTML = data.company
    apiImagesFollowers(data.followers_url)
    
}
function erroApi(){
    divErro.classList.remove('d-none')
    imgAvatar.src = 'https://media.tenor.com/_BiwWBWhYucAAAAd/what-huh.gif'
    divAvatar.classList.add('bounce-in')
    for(i=0;i < invisibleElements.length; i++){
        invisibleElements[i].classList.add('d-none')
        console.log(invisibleElements[i])
    }
    divAvatar.classList.remove('d-none')
}
function imagesSeguidores(dataRes){
    data = dataRes
    console.log(dataRes.length)
    data.forEach((element) => {
        let imgFollowers = new Image()
        imgFollowers.src = element.avatar_url
        imgFollowers.classList.add('card-img-top')
        imgFollowers.classList.add('rounded-circle')
        imgFollowers.classList.add('foto-seguidores')
        divfollowers.appendChild(imgFollowers)
        // const imgFollowers = document.getElementById('img-followers')
        // imgFollowers.src = element.avatar_url

    })
}

const apiImagesFollowers = (urlApiFollowers)=>{
    fetch(urlApiFollowers).then((res)=>{
        if (res.status === 200) {
            return res.json()
        }else{
            erroApi()
            throw new Error('Api is not good')    
        }
        }).then((res)=>{
            console.log(res)
            imagesSeguidores(res)
            return res
    
        }).catch((error)=>{
            console.error(error)
        })
}