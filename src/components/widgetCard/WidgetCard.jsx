import React from "react";
import "./widgetCard.css";

const WidgetCard = ({ formValues, weatherObject }) => {
  const newTitle = formValues.title.toUpperCase();
  return (
    <div className="card">
      <div className="card__title">
        <h3 data-testid='widget-card-title'>{newTitle}</h3>
      </div>
      <div className="card__content">
        <img className="card__content--icon" src={`http://openweathermap.org/img/wn/${weatherObject.icon}@2x.png`} alt={weatherObject.description} />
        <div >
          {weatherObject.cityName}
          <h1 style={{ margin: '0px', fontSize: '50px' }}>{weatherObject.temp}&deg;</h1>
          {formValues.windOn
            ? <div className="card__content--wind">
              <strong>Wind</strong>&nbsp;{weatherObject.windDeg}&nbsp;{weatherObject.windSpeed}
            </div>
            : null
          }
        </div>
      </div>
    </div>
  );
};

export default WidgetCard;