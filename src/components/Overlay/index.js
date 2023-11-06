import React from "react";
import "./styles.css";

function Overlay({ data, onClose }) {
  return (
    <div className="overlay">
      {data!=="" ?(
        <div className="overlay-content">
          <span className="material-symbols-outlined" onClick={onClose}>
            close
          </span>
          <div className="data">
            <p>Name : {data.name}</p>
            <p>Temp : {data.main.temp}</p>
            <p>Main : {data.weather[0].main}</p>
            <p>Desc. : {data.weather[0].description}</p>
          </div>
        </div>
      ):(
        <p>Enter the city name first</p>
      )}
    </div>
  );
}

export default Overlay;
