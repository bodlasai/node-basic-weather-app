const request=require('postman-request')
const geocode=(address,callback)=>{
    const url=`http://api.weatherstack.com/current?access_key=d3e7a327f3653e1150d09220366fc461&query=${address}`

  request({url:url,json:true},(error,response)=>{
      if(error)
      {
          callback('unable to connect to server')
      }
      else
      {
          callback(undefined,{
              name:response.body.request.query,
              lati:response.body.location.lat,
              lang:response.body.location.lon,
              region:response.body.location.country
          })
      }
  })
}

module.exports=geocode;
