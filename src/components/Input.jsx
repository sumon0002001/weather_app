import React,{useState} from 'react';
import { UilSearch, UilLocationPinAlt } from '@iconscout/react-unicons'
import { toast } from "react-toastify";

const Input = ({setQuery, units, setUnits}) => {
  const [city, setCity] = useState("");

  const setCitySearch = () => {
    if (city !== "") setQuery({q: city});
  }

  // const handleLocation = () => {
  //   if(navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       let lat = position.coords.latitude
  //       let lon = position.coords.longitude
  //       setQuery({
  //         lat,
  //         lon,
  //       })
  //     })
  //   }
  //   console.log("pos");
  // }
  const handleLocationClick = () => {
    if (navigator.geolocation) {
      toast.info("Fetching users location.");
      navigator.geolocation.getCurrentPosition((position) => {
        toast.success("Location fetched!");
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({
          lat,
          lon,
        });
      });
    }
  };
  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input 
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          type="text"
          className="text-xl capitalize 
                    font-light p-2 w-full shadow-xl 
                    focus:outline-none placeholder:lowercase"
          placeholder="Please enter city name"
        />
        <UilSearch 
          size={25} 
          className="cursor-pointer text-white transition
                     ease-out hover:scale-150" 
          onClick= {setCitySearch}
        />
        <UilLocationPinAlt 
          size={25} 
          className="cursor-pointer text-white transition
                     ease-out hover:scale-150"
          onClick={handleLocationClick}
        />
      </div>
      <div className="flex flex-row w-1/4 items-center justify-center">
        <button 
          name="metric"
          className="text-white text-xl font-light hover:scale-125 transition ease-out">
          °C
        </button>
        <p className="text-white text-xl font-light mx-1">|</p>
        <button 
          name="imperial"
          className="text-white text-xl font-light hover:scale-125 transition ease-out">
          °F
        </button>
      </div>
    </div>
  )
}

export default Input
