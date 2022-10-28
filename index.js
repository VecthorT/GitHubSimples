const urlApi = 'https://api.github.com/users'
// 
const btnSearch = document.getElementById('btn-proc')
const valueUserName = document.getElementById('name-proc')
// 

function  requestApi(urlGet){
    const request = urlGet
    fetch(request).then((res)=>{
        if (res.status === 200) {
            return res
        }else{
            throw new Error('Api is not good')
        }
    }).then((res)=>{
        return console.log(res.json())

    }).catch((error)=>{
        console.error(error)
    })
}

btnSearch.addEventListener('click', ()=>{
    const urlGet = `${urlApi}/${valueUserName.value}`
    console.log(urlGet)
    console.log(requestApi(urlGet))
    


})
function dataApi(data){
    console.log(JSON.parse(data))
}