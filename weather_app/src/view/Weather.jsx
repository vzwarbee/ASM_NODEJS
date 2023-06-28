import '../style/weather.css'
import clouds from '../assets/clouds.png'
import humidity from '../assets/humidity.png'
import windspeed from '../assets/wind.png'

const Weather = () => {
  return (
    <div className="p-2 ">
      <div className="search">
        <input type="text" className="input-search" placeholder='Enter your location ...'/>
      </div>
      <div className="weather d-flex justify-content-center align-items-center flex-column white" >
        <img src={clouds} alt="weather" width={150}/>
        <h2 className="temp mt-3">22<sup>o</sup>C</h2>
        <h3 className="location mt-2">Da Nang</h3>
        <div className="detail d-flex justify-content-around align-items-center w-100">
            <div className="humidity d-flex gap-1 align-content-center">
                <img src={humidity} alt=""  width={50} height={50}/>
                <div>
                    <h3>50%</h3>
                    <h6>Humidity</h6>
                </div>
            </div>
            <div className="windspeed d-flex gap-1 align-content-center">
            <img src={windspeed} alt="" width={50} height={50}/>
                <div>
                    <h3>50%</h3>
                    <h6>Wind speed</h6>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
