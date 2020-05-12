console.log('this is client side scripting')
//example 1
// fetch('').then((response)=>{
//     response.json().then((data)=>{
//         console.log(data)
//     })
// })
//example2
// fetch('http://localhost:5000/weathers?search=Hyderabad')
// .then((response)=>{
//     response.json().then((data)=>{
//         if(data.error)
//         {
//             console.log(data.error)
//         }
//         else{
//             console.log(data.name)
//             console.log(data.lati)
//             console.log(data.region)
//         }
//     })
// })

const weatherForm = document.querySelector('form')

const searchvalue=document.querySelector('input');

const messageone=document.querySelector('#mesg-1');
const messagetwo=document.querySelector('#mesg-2')
const messagethree=document.querySelector('#mesg-3')
const mesgfour=document.querySelector('#mesg-4')


weatherForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    const location=searchvalue.value;
    fetch('/weathers?search='+location).then((response)=>{

    response.json().then((data)=>{
        if(data.error)
        {
            messageone=data.error
        }
        else
        {
            messageone.textContent='Region: ' +data.name
            messagetwo.textContent='country: ' +data.region
            messagethree.textContent="latitude:" + data.lati;
            mesgfour.textContent="longtitude:" + data.lang
        // console.log(data.name)
        // console.log(data.lati)
        // console.log()
        }
       })
    })
})

