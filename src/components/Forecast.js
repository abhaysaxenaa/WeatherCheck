import React, { useState } from 'react';
const Forecast = () => {let [responseObj, setResponseObj] = useState({});
   function getForecast() {
      // Fetch Weather Data
   }
   return (
    <div>
    <h2>Find Current Weather Conditions</h2>
    <div>
        {JSON.stringify(responseObj)}
    </div>
    <button onClick={getForecast}>Get Forecast</button>
    </div>
   )
}
export default Forecast;