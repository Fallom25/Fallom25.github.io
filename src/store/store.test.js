import React from "react";
import { cleanup } from '../test-utils';
import { directionChanger, speedChanger } from './helpers';

describe('Testing directionChanger helpers Function', () => {
  afterEach(cleanup);

  it("should return correct direction", () => {
    const oldDirectionArray = [0, 25, 90, 110, 180, 200, 270, 300, 360];
    const shouldExpectArray = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW', 'N'];

    oldDirectionArray.map(
      (number, index) => expect(directionChanger(number)).toBe(shouldExpectArray[index])
    );
  });

  it("should return an null when direction is less than 0 or more than 360", () => {
    const oldDirectionArray = [-35, 40000];

    oldDirectionArray.map(
      (number) => expect(directionChanger(number)).toBe(null)
    );
  });

  it("should return null when direction is a not a number", () => {
    const oldDirectionArray = [null, '40000', 'words', undefined];

    oldDirectionArray.map(
      (number) => expect(directionChanger(number)).toBe(null)
    );
  });
});

describe('Testing speedChanger helpers Function', () => {
  afterEach(cleanup);

  it("should return correct speed", () => {
    const oldSpeed = [0, 25, 90.222, 100000000, 3];
    const shouldBe = [0, 90, 324.7992, 360000000, 10.8]

    oldSpeed.map(
      (number, index) => expect(speedChanger(number)).toBe(shouldBe[index])
    );
  });

  it("should return null when direction is a not a number", () => {
    const oldSpeed = ['words', undefined];

    oldSpeed.map(
      (number) => expect(speedChanger(number)).toBe(null)
    );
  });

  it("should return null when speed is less than 0", () => {
    const oldSpeed = [-1, -20, -100000, -3];

    oldSpeed.map(
      (number) => expect(speedChanger(number)).toBe(null)
    );
  });
});

describe('Testing loadGeolocation action Function', () => {
  afterEach(cleanup);

  it("should return geolocation", () => {
  });

  it("should do error action if timeout", () => {
  });

  it("should do error action if authorization fail", () => {
  });

  it("should do error action if bad response from API", () => {
  });

});

describe('Testing loadWeatherInfo action Function', () => {
  afterEach(cleanup);

  it("should return weatherInfo", () => {
  });

  it("should return different temp and wind speed values if tempunits change", () => {
  });

  it("should do error action if Weatherinfo does not have a valid Lat and Long", () => {
  });

  it("should do error action if Weatherinfo has Invalid APIkey", () => {
  });

  it("should do error action if Weatherinfo has Invalid tempUnits", () => {
  });

  it("should do error action if Weatherinfo has Bad response", () => {
  });
});

describe('Testing handleFormChange action Function', () => {
  afterEach(cleanup);

  it("should dispatch loadweather if formValues.tempUnits !== stateValues.tempUnits", () => {
  });

});