import React from "react";


const Form = props =>(
    <form onSubmit={props.getWeather}> 
    <input type="text"  name="City" placeholder="City" autoComplete="off" />      
   <input type="text"  name="Countery" placeholder="Countery" autoComplete="off"/>
    <button>Get Countery</button>
</form>                                               
);


export default Form;