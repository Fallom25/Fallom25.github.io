import React from "react";
import { render, cleanup } from '../test-utils';

describe('Testing directionChanger helpers Function', () => {
  afterEach(cleanup);

  it("should return correct direction", () => {

  });

  it("should return an empty string when direction is less than 0 or more than 360", () => {

  });

  it("should return an empty string when direction is a not a number", () => {

  });


});

describe('Testing speedChanger helpers Function', () => {
  afterEach(cleanup);

  it("should return correct speed", () => {

  });

  it("should return an empty string when direction is a not a number", () => {

  });

});

describe('Testing loadGeolocation action Function', () => {
  afterEach(cleanup);

  it("should return geolocation", () => {

  });

  it("should return error if timeout", () => {

  });

  it("should return error if authorization fail", () => {

  });

  it("should return error if bad response from API", () => {

  });

});

describe('Testing loadWeatherInfo action Function', () => {
  afterEach(cleanup);

  it("should return weatherInfo", () => {

  });

  it("should return different temp and wind speed values if tempunits change", () => {

  });

  it("should return an error if Weatherinfo gets a bad response", () => {

  });

});

describe('Testing handleFormChange action Function', () => {
  afterEach(cleanup);

  it("should dispatch loadweather if formValues.tempUnits !== stateValues.tempUnits", () => {

  });

});