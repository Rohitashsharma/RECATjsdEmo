import React from "react";



const Weather = props=>(
        <div className="weather__info">
           
           {
               props.City && props.Countery&&<p className="weather__key">Location:
               <span className="weather__value">{props.City},{props.Countery}</span></p>
               }
     {
         props.temperature && props.temperature_max && props.temperature_min &&<p className="weather__key">Temperature:{props.temperature},{props.temperature_min},{props.temperature_max}</p>
     }
      {
          props.humdity && <p className="weather__key">Humdity:{props.humdity}</p>}
          {props.wind && <p className="weather__key">Wind:{props.wind}</p>
     }
     {
         props.Description && <p className="weather__key">Conditions:{props.Description}</p>
     }
     {
         props.Error&&<p className="weather__key">
         {props.Error}</p>
     }

       </div>
    )

//   
        
export default Weather;