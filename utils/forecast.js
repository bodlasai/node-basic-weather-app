const request=require('postman-request')
const forecast=(lati,long,callback)=>{
    const url1=`http://api.weatherstack.com/current?access_key=d3e7a327f3653e1150d09220366fc461&query=${lati},${long}`
    request({url:url1,json:true},(error,response)=>{
        if(error)
        {
            callback('unable to connect',undefined);
        }
        else
        {
            callback(undefined,{
                name:response.body.location.region,
              lati:response.body.location.lat,
              lang:response.body.location.lon
            })
        }
    })
    
}
module.exports=forecast