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




weatherForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    const location=searchvalue.value;
   
    fetch(`http://localhost:5000/weathers?search=${location}`).then((response)=>{

    response.json().then((data)=>{
        if(data.error)
        {
            messageone=data.error
        }
        else
        {
            messageone.textContent=data.name
            messagetwo.textContent=data.region
        // console.log(data.name)
        // console.log(data.lati)
        // console.log()
        }
       })
    })
})

