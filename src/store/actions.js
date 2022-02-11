import { getFormValues, getGeolocation } from "./selectors";
import { createAsyncThunk } from "@reduxjs/toolkit";
// import Cookies from 'universal-cookie';

/**
  * Actions directly related to API requests
*/

/** Loads geolocation of the user */
const loadGeolocation = () => (dispatch, getState) => {
  dispatch({
    type: 'GEOLOCATION_LOAD/pending'
  });

  const loadSuccess = (position) => {
    const { longitude, latitude } = position.coords;
    // const cookie = new Cookies();
    // cookie.set('currentPosition', { lat: latitude, lon: longitude });
    dispatch({
      type: 'GEOLOCATION_LOAD/fulfilled',
      lat: latitude,
      lon: longitude
    });
    const formValues = getFormValues(getState())
    dispatch(loadWeatherInfo(formValues.tempUnits));
  };

  const loadFailed = (error) => {
    //timeout fail

    //authfail

    //bad response fail

    dispatch({
      type: 'GEOLOCATION_LOAD/failed',
      error: `Failed to load Geolocation because : ${error}`
    });
  };

  navigator.geolocation.getCurrentPosition(
    loadSuccess,
    loadFailed,
    { timeout: 20_000 }
  );
};

/** Loads weather information 
 * @param {string} tempUnits
*/
const loadWeatherInfo = createAsyncThunk(
  'WEATHERINFO_LOAD', async (tempUnits, thunkAPI) => {
    let { lat, lon } = getGeolocation(thunkAPI.getState());
    const APIkey = '00e8925b2e3d26aee691dd8f8fea564a';
    let path = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${tempUnits}&appid=${APIkey}`;
    const response = await fetch(path);
    const data = await response.json();
    return { data, tempUnits };
  });


/** 
 * Actions that are not API related
*/

// const loadLocationCookie = () => async (dispatch) => {
//   const cookie = new Cookies();
//   const locationCookie = cookie.get('currentPosition');
//   if (locationCookie) {
//     const { longitude, latitude } = locationCookie;
//     dispatch({
//       type: 'GEOLOCATION_LOAD/fulfilled',
//       lat: latitude,
//       lon: longitude
//     });
//   } else {
//     dispatch(loadGeolocation());
//   }
// }

/**Function to handle the formValues and update the state and WeatherInfo
 * @param {Object} formValues
*/
const handleFormChange = (formValues) => (dispatch, getState) => {
  const stateValues = getFormValues(getState());
  if (formValues.tempUnits !== stateValues.tempUnits) {
    dispatch(loadWeatherInfo(formValues.tempUnits));
  }
  dispatch({
    type: 'FORMVALUES/fulfilled',
    formValues: formValues
  });
};

export {
  loadGeolocation,
  loadWeatherInfo,
  handleFormChange
};
