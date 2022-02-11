import React from "react";
import WidgetCard from './WidgetCard';
import { render, fireEvent, act, cleanup } from "../../test-utils";

describe('Testing the text input of the WidgetEditor component', () => {
  afterEach(cleanup);

  //Arrange
  const formValues = {
    tempUnits: 'metric',
    title: 'Test Title',
    windOn: true,
  }

  const weatherInfo = {
    icon: '10d',
    description: 'This is a test',
    cityName: 'Test City',
    temp: 0,
    windDeg: 'Test info',
    windSpeed: 'test Speed'
  }

  it("expect props to match inputted props", () => {

  });

  it("expect wind info not to show if windOn is false", () => {

  });

  it("renders img", () => {

  });

  it("Description displays when no img available", () => {

  });

  it("change wind speed when TempUnits change", () => {

  });
});