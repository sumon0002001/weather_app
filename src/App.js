import React, {useState, useEffect} from 'react';
import './App.css';
import Forecast from './components/Forecast';
import Input from './components/Input';
import TemperatureandDetails from './components/TemperatureandDetails';
import TimeandLocation from './components/TimeandLocation';
import TopButtons from './components/TopButtons';
import formattedWeatherData from './services/weatherservice';



function App() {

 const [query, setQuery] = useState({q: "dhaka"})
 const [units, setUnits] = useState("metric");
 const [weather, setWeather] = useState(null)

 useEffect(() => {
  const fetchweather = async () => {
    await formattedWeatherData( {...query, units}).then(
      (data) => {
        setWeather(data);
      })
    }
 
   fetchweather();
 }, [query, units])
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-4 px-32 bg-gradient-to-r from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400"> 
      <TopButtons  setQuery={setQuery}/>
      <Input setQuery={setQuery} units = {units} setUnits={setUnits} />
      {weather && (
        <div>
          <TimeandLocation weather ={weather} />
          <TemperatureandDetails weather = {weather} />
          <Forecast title="hourly forecast" items= {weather.hourly} />
          <Forecast title="daily forecast" items= {weather.daily}/>
        </div>
      )}
      
    </div>
  );
}

export default App;
