import React from 'react';
import Titels from './Components/Titles';
import Form from './Components/Form';
import Weather from './Components/Weather';


const API_KEY="0ad86ba43f5dd2c3b871cd8155da4ed8";
class App extends React.Component{
getWeather = async()=>{
 const api_call = await fetch(`q=London,england&appid=${API_KEY}&units=metric`);
 const data = await api_call.json();
 console.log(data);
}
 
   


  render(){
      return(
  <div>
    <Titels />
    <Form  getWeather={this.getWeather}/>
    <Weather />
  </div>
      )
    }
  }

  export default App;