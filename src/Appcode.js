import React from 'react';
import Titels from './Components/Titles';
import Form from './Components/Form';
import Weather from './Components/Weather';


const API_KEY="0ad86ba43f5dd2c3b871cd8155da4ed8";

class App extends React.Component{
  // constructor(prop){
  //   super(props){

  //   }

  // }
  state={
    temp:undefined,
    City:undefined,
    Countery:undefined,
    humdity:undefined,
    temp_max:undefined,
    temp_min:undefined,
    Wind_Speed:undefined,
    Description:undefined,
    Error:undefined

  }

getWeather = async(e)=>{
  e.preventDefault();
  const City = e.target.elements.City.value;
  const Countery = e.target.elements.Countery.value;
 const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${City},${Countery}&appid=${API_KEY}&units=metric`);
 const data = await api_call.json();
if(City && Countery)
{
  console.log(data);
 this.setState({
   
      City:data.name,
      Countery:data.sys.country,
      humdity:data.main.humidity,
      temp:data.main.temp,
      temp_max:data.main.temp_max,
      temp_min:data.main.temp_min,
      Wind_Speed:data.wind.speed,
      Description:data.weather[0].description,
      Error:""
 })
}
else{
  this.setState({
   
    City:undefined,
    Countery:undefined,
    humdity:undefined,
    temp:undefined,
    temp_max:undefined,
    temp_min:undefined,
    Wind_Speed:undefined,
    Description:undefined,
    Error:"plz Enter value"
})
}
}
 
   


  render(){
      return(
  <div>
    <Titels />
    <Form  getWeather={this.getWeather}/>
    <Weather 
  
    City={this.state.City}
    Countery={this.state.Countery}
    humdity={this.state.humdity}
    temperature={this.state.temp}
    temperature_max={this.state.temp_max}
    temperature_min={this.state.temp_min}
    wind={this.state.Wind_Speed}
    Description={this.state.Description}
    Error={this.state.Error}
    tem={this.state.temperature}
    />
  </div>
      )
    }
  }

  export default App;