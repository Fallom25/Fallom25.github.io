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
    const { tempUnits } = getFormValues(getState());
    dispatch(loadWeatherInfo(tempUnits));
  };

  const loadFailed = (error) => {
    /**
     * For the Error handling of the loadGeolocation action these are the three use cases I would like to protect against and how I would handle it
     * Timeout => running another getCurrentPosition upon Timeout
     * Auth => A popup informing the user that Location is required to use this App 
     *  or returning location of 0,0 so the user can use the App on the Global location
     * Bad response => Console.log notes for the developer
     */
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
 * For the Error handling of the loadWeatherInfo action these are the three use cases I would like to protect against and how I would handle it
 * Not Valid Lat and Long => Rerunning Loadgeolocation, then running again
 * Invalid APIkey => Console.log notes for the developer
 * Invalid tempUnits => Rerunning with units as standard
 * Bad response => Console.log notes for the developer
 */



/** 
 * Actions that are not API related
*/

/**
 * Function to create LocationCookie to allow users location to be stored and geolocation not have to run on every render
 * Ran into issues, wanted to leave for future implementation.
 * More details in the README.md
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

/**
 * Function to handle the formValues 
 * dispatches Loadweatherinfo if Temperature Units have changed
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
