export default function Bottom({ forecast, unit }) {
  if (!forecast || forecast.length === 0) return null;

  const toF = (c) => (c * 9) / 5 + 32;

  const getDayName = (dt_txt) =>
    new Date(dt_txt).toLocaleDateString(undefined, { weekday: "short" });

  return (
    <div className="bottom">
      <div className="forecast">
        <h2 className="forecast-title">5-Day Forecast</h2>

        <div className="forecast-grid">
          {forecast.map((day) => {
            const tempC = day.main.temp;
            const temp = unit === "C" ? tempC : toF(tempC);

            const icon = day.weather[0].icon;
            const desc = day.weather[0].main;

            return (
              <div className="forecast-card" key={day.dt}>
                <p className="forecast-day">{getDayName(day.dt_txt)}</p>

                <img
                  className="forecast-icon"
                  src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                  alt={desc}
                />

                <p className="forecast-desc">{desc}</p>

                <div className="forecast-temps">
                  <span className="forecast-high">
                    {Math.round(temp)}°{unit}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
