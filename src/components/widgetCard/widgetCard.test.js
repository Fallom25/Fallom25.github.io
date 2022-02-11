import React from "react";
import WidgetCard from './WidgetCard';
import { render, fireEvent, act, cleanup } from "../../test-utils";

describe('Testing the text input of the WidgetEditor component', () => {
  afterEach(cleanup);

  //Arrange
  const formValues = {
    tempUnits: 'metric',
    title: 'Test',
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

  const { getByTestId, rerender } = render(
    <WidgetCard formValues={formValues} weatherObject={weatherInfo} />
  );

  it("expect props to match inputted props", () => {

    //ACT


    //Assert

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