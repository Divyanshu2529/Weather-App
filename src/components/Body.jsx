export default function Body(){
    return(
        <div className="container">

            <div className="top">

                <div className="temp-container">
                    <h1 className="temp">72°C </h1>
                </div>

                <div className="Humidity-container">
                    <h1 className="Humidity"> Humidity: 65%</h1>
                </div>

            </div>

            <div className="bottom">

                <div className="WindSpeed-container">
                    <h1>Wind: 5 mph</h1>
                </div>

                <div className="WeatherDescription-container">
                    <h1>Sunny</h1>
                </div>

                <div className="icon-container">
                    <img className="icon" src="https://cdn-icons-png.flaticon.com/512/1163/1163679.png" alt="Weather Icon" />
                </div>
                
            </div>
        </div>  
    )
}