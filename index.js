const urlApi = 'https://api.github.com/users'
// 
const btnSearch = document.getElementById('btn-proc')
const valueUserName = document.getElementById('name-proc')

const divAvatar = document.getElementById('div-perfil')
const imgAvatar = document.getElementById('avatar-url')

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
    const data = dados(urlGet)
    
})
function dataApi(data){

    divAvatar.classList.remove('d-none')
    divAvatar.classList.remove('bounce-in')

    imgAvatar.src = data.avatar_url
}
