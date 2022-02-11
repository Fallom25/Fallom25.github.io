import { directionChanger, speedChanger } from "./helpers";

//Widget state structure
const initialState = {
  geolocation: {
    lat: 0,
    lon: 0,
  },
  formValues: {
    tempUnits: 'metric',
    title: ' ',
    windOn: true,
  },
  weatherInfo: {
    icon: ' ',
    description: ' ',
    cityName: ' ',
    temp: 0,
    windDeg: ' ',
    windSpeed: ' '
  }
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GEOLOCATION_LOAD/fulfilled':
      return {
        ...state,
        geolocation: {
          lat: action.lat,
          lon: action.lon
        }
      };
    case 'WEATHERINFO_LOAD/fulfilled':
      const weatherObject = action.payload.data;
      console.log(weatherObject);

      //change temp to rounded
      const roundedTemp = Math.round(weatherObject.main.temp);

      //change wind speed
      const roundedWindSpeed = Math.round(weatherObject.wind.speed);
      const windSpeed = action.payload.tempUnits === 'metric'
        ? `${speedChanger(roundedWindSpeed)} km/h`
        : `${roundedWindSpeed} mph`;

      //change wind direction
      const windDirection = directionChanger(weatherObject.wind.deg);

      return {
        ...state,
        weatherInfo: {
          icon: weatherObject.weather[0].icon,
          description: weatherObject.weather[0].description,
          cityName: weatherObject.name,
          temp: roundedTemp,
          windDeg: windDirection,
          windSpeed: windSpeed
        }
      };
    case 'FORMVALUES/fulfilled':
      return {
        ...state,
        formValues: {
          tempUnits: action.formValues.tempUnits,
          title: action.formValues.title,
          windOn: action.formValues.windOn,
        }
      }
    default:
      return state;
  }
};

export {
  initialState, rootReducer
} 
