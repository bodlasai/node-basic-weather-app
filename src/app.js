const path=require('path')
const express=require('express');
const app=express()
let host='127.0.0.1'
let port='5000'
const hbs=require('hbs');
const request=require('postman-request')
const geocode=require("../utils/geocode")
//hbs
//headerbars
//shoulb same saying to express that we are using this engine
 app.set('view engine', 'hbs')
//__dirname -> gives dirrectory name
//__filename ->present file name
const publicdri=path.join(__dirname,'../public')
//setup static pages that is html pages
app.use(express.static(publicdri))
app.set('views', path.join(__dirname, '../templates/views'));
const partialdir=path.join(__dirname,"../templates/partials")
hbs.registerPartials(partialdir)

app.get('',(req,res)=>{
    res.render('index',{
        name:'sai',
        title:'dynamic page'
    })
})
app.get('/about',(req,res)=>{
    
  res.render('about',{
      name:'sai'
  })
  
})
app.get("/about",(req,res)=>{
    res.send('about page',{
        name:'sai'
    })
})

app.get("/help",(req,res)=>{
    res.render('help',{
        contact:'google ceo',
        name:'sai'
    })
})
app.get("/weathers",(req,res)=>{

    console.log(req.query);
    if(!req.query.search)
    {
        return res.send({ 
            error:"u had not specified the query address"  
        })
    }

    address=req.query.search;
    //tried again
    // url=`http://api.weatherstack.com/current?access_key=d3e7a327f3653e1150d09220366fc461&query=${address}`
    // const geocode1=(address,callback)=>{
    //     request({url:url,json:true},(error,response)=>{
    //         if(error)
    //         {
    //             callback('unable to connect to server')
    //         }
    //         else{
    //             callback(undefined,{
    //                 data:response.body
    //             })
    //         }
    //     })
    // }
    geocode(address,(error,data={})=>{
        if(error)
        {
            res.send('unable to connect to internet')
        }
        else
        {
            res.send(data);
        }
    })
    // res.send({
    //     address:address,
    //     temp:'freezing'
    // })
})

app.get("/products",(req,res)=>{
    console.log(req.query);
    res.send({
        address:[req.query]
    }) 
})


app.get("/weather/*",(req,res)=>{
    res.render('page',{
        name:'sai',
        errormesg:'page is not located here'
    })
})

app.get('/*',(req,res)=>{
    res.render('page',{
        name:'sai',
        errormesg:'page not found'
    });
})







app.listen(port,()=>{console.log('The port is listening to port '+ port )})