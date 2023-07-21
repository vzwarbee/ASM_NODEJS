import { useEffect, useState } from "react";
import Season from "./Season";
import "./seasonDisplay.css"
import Spinner from "./Spinner";

const SeasonDisplay = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentDate = new Date();
  const currentMonthIndex = currentDate.getMonth() + 1;
  const currentMonthName = months[currentMonthIndex];

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div>
      {latitude && longitude ? (
        <div>
          <p>
            Lat: {latitude} | Lon: {longitude}
          </p>
          <div>
        <p>
          Current Month: {currentMonthName} ({currentMonthIndex})
        </p>
      </div>
      <Season month={currentMonthIndex} lat={latitude}/>
        </div>
        
      ) : (
        <div className="d-flex justify-content-center align-items-center mt-5">
        <Spinner />

        </div>
      )}
      

    </div>
  );
};

export default SeasonDisplay;
