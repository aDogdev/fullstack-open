import { useEffect, useState } from "react";
import { getWeather } from "../services/countries";

function Weather({ capital }) {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    getWeather(capital).then((returnedWeather) => setWeather(returnedWeather));
  }, []);

  return (
    <>
      {weather ? (
        <>
          <h2>Weather in {capital}</h2>
          <p>temperature {weather?.main?.temp} Fahrenheit </p>
          <img
            src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}
          />
          <p>wind {weather?.wind?.speed} m/s</p>
        </>
      ) : (
        ""
      )}
    </>
  );
}

export { Weather };
