import React from "react";



const Weather = props=>(
        <div>
        {props.City && props.Countery&&<p>Location:{props.City},{props.Countery}</p>}
        {props.temperature && props.temperature_max && props.temperature_min &&<p>Temperature:{props.temperature},{props.temperature_min},{props.temperature_max}</p>}
        {props.humdity && <p>Humdity:{props.humdity}</p>}
        {props.wind && <p>Wind:{props.wind}</p> }
        {props.Description && <p>Conditions:{props.Description}</p>}
       {props.Error&&<p>{props.Error}</p>}
            
       </div>
    )


export default Weather;