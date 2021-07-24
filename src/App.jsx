import React, { useState, useEffect } from 'react'
import { api } from './services/api';
import './App.css'
import { FaTemperatureHigh, FaWind } from 'react-icons/fa'

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');
  const [search, setSearch] = useState('');


  async function handleGetWeather(event) {
    event.preventDefault();
    const response = await api.get(search);
    setCity(search);
    console.log(response.data);
    setWeather(response.data)
  }

  useEffect(() => {
    // handleGetWeather();
  },[])

  return (
    <div className='App'>
    
     
         <header>
            <form onSubmit={handleGetWeather}>
              <input 
              type="text" value={search} 
              onChange={(event) => setSearch(event.target.value)}
              className="form-control form-control-sm" 
              placeholder="Digite o lugar"
              />
              <button type="button" className="btn btn-primary">Pesquisar</button>
            </form>
         </header>

         { weather &&
          <main>
          <h1>{city}</h1>
          
          <section className='current-weather'>
            <div className='descricao'>
            <p >{weather.description}</p>
            <p className='temp'>{weather.temperature}</p>
            </div>
          </section>
        
          <section className='forecast'>
            <h2>Forecast</h2>
            <ul>
            {
              weather.forecast.map(day => 
                <li>
                  <div className='dia_temp'>
                    <FaTemperatureHigh fill="white" />
                  <p>{day.temperature}</p>
                  </div>

                  <div className='dia_vento'>
                    <FaWind fill="white" />
                  <p>{day.wind}</p>
                  </div>
                </li>
              )  
            }
          </ul>
          </section>
          
        </main>
      }
    </div>
  )
}

export default App
