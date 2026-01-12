export default function Bottom() {
  return (
    <div className="bottom">
      <div className="forecast">
        <h2 className="forecast-title">5-Day Forecast</h2>

        <div className="forecast-grid">
          <div className="forecast-card">
            <p className="forecast-day">Mon</p>
            <img
              className="forecast-icon"
              src="https://cdn-icons-png.flaticon.com/512/1163/1163679.png"
              alt="Sunny"
            />
            <p className="forecast-desc">Sunny</p>
            <div className="forecast-temps">
              <span className="forecast-high">75°</span>
              <span className="forecast-low">62°</span>
            </div>
          </div>

          <div className="forecast-card">
            <p className="forecast-day">Tue</p>
            <img
              className="forecast-icon"
              src="https://cdn-icons-png.flaticon.com/512/414/414825.png"
              alt="Cloudy"
            />
            <p className="forecast-desc">Cloudy</p>
            <div className="forecast-temps">
              <span className="forecast-high">72°</span>
              <span className="forecast-low">60°</span>
            </div>
          </div>

          <div className="forecast-card">
            <p className="forecast-day">Wed</p>
            <img
              className="forecast-icon"
              src="https://cdn-icons-png.flaticon.com/512/414/414974.png"
              alt="Rain"
            />
            <p className="forecast-desc">Rain</p>
            <div className="forecast-temps">
              <span className="forecast-high">68°</span>
              <span className="forecast-low">58°</span>
            </div>
          </div>

          <div className="forecast-card">
            <p className="forecast-day">Thu</p>
            <img
              className="forecast-icon"
              src="https://cdn-icons-png.flaticon.com/512/861/861059.png"
              alt="Windy"
            />
            <p className="forecast-desc">Windy</p>
            <div className="forecast-temps">
              <span className="forecast-high">70°</span>
              <span className="forecast-low">59°</span>
            </div>
          </div>

          <div className="forecast-card">
            <p className="forecast-day">Fri</p>
            <img
              className="forecast-icon"
              src="https://cdn-icons-png.flaticon.com/512/1146/1146869.png"
              alt="Clear"
            />
            <p className="forecast-desc">Clear</p>
            <div className="forecast-temps">
              <span className="forecast-high">76°</span>
              <span className="forecast-low">63°</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
