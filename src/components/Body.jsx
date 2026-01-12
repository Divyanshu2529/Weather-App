export default function Body({ data, unit, setUnit }) {
  if (!data) return null; 

  const tempC = data.main.temp; 
  const tempF = (tempC * 9) / 5 + 32;

  const displayTemp =
    unit === "C" ? Math.round(tempC) : Math.round(tempF);

  const windMps = data.wind.speed; 
  const windMph = windMps * 2.23694;

  return (
    <div className="container">
      <div className="top">
        <div className="temp-container">
          <h1 className="temp">
            {displayTemp}°{unit}
            <button
              type="button"
              onClick={() => setUnit(unit === "C" ? "F" : "C")}
              style={{
                marginLeft: "10px",
                padding: "6px 10px",
                borderRadius: "10px",
                border: "1px solid rgba(255,255,255,0.4)",
                background: "rgba(255,255,255,0.15)",
                color: "white",
                cursor: "pointer",
                fontSize: "14px",
              }}
            >
              Switch to °{unit === "C" ? "F" : "C"}
            </button>
          </h1>
        </div>

        <div className="Humidity-container">
          <h1 className="Humidity">Humidity: {data.main.humidity}%</h1>
        </div>
      </div>

      <div className="bottom">
        <div className="WindSpeed-container">
          <h1>Wind: {Math.round(windMph)} mph</h1>
        </div>

        <div className="WeatherDescription-container">
          <h1>{data.weather[0].main}</h1>
        </div>

        <div className="icon-container">
          <img
            className="icon"
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
            alt="Weather Icon"
          />
        </div>
      </div>
    </div>
  );
}
