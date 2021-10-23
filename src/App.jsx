import React, { useState } from 'react'
import './App.css'
import api from './services/api'
import {FaWind, FaTemperatureHigh} from 'react-icons/fa'


function App() {
  
  const [city, setCity] = useState("Curitiba")
  const [weather, setWeather] = useState("")


  async function handleGetWeather(event){
    event.preventDefault()
    const response = await api.get(city)
    setWeather(response.data)
  }


  return(
    <div className="App" >

    <header>
    <form  className="form" onSubmit={handleGetWeather}>
    <input type="text"   onChange={(event) => setCity(event.target.value)}/>
    <button>Enviar</button>
    </form>
    </header>
    
    { weather &&
    <main>

      <section className="current-weather" >
        <h1>{city}</h1>
        <h2>Weather Description</h2>
        <p>{weather.description}</p>
      </section>

      <section className="forecast" >
        <h2>Forecast</h2>
        <ol>
        { 
        weather.forecast.map(day =>
        
          <li>
            <h3><FaTemperatureHigh/>{day.temperature}</h3>
            <h3><FaWind/>{day.wind}</h3>
          </li>
        )
        }
        </ol>
      </section>
    </main>
     }
    </div>
    
  )
}

export default App
