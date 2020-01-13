import React, { Component } from 'react'
import Title from './components/Title'
import Form from './components/Forms'
import Weather from './components/Weather'
import './App.css'

const API_KEY="661c692c8e2aca946fb2c3cf990e5bba"

export default class App extends Component {
  state={
    temperature:undefined,
    city:undefined,
    country:undefined,
    humidity:undefined,
    description:undefined,
    error:undefined


  }

  getWeather= async(e)=>{
    e.preventDefault()
    const city=e.target.elements.city.value
    const country=e.target.elements.country.value

    const api_call= await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
   const data=await api_call.json()
   if(city && country){
     console.log(data)
    this.setState({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error:""
    }) 
   }else{
    this.setState({
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error:"Please enter the values"
    }) 

   }

  }


  render() {
    return (
      <div>
        <Title />
        <Form getWeather={this.getWeather}/>
        <Weather 
        temperature={this.state.temperature}
        city={this.state.city}
        country={this.state.country}
        humidity={this.state.humidity}
        description={this.state.description}
        error={this.state.error}
        />

      </div>
    )
  }
}
