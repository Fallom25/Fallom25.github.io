import React from "react";
import WidgetEditor from './WidgetEditor';
import { render, fireEvent, act, cleanup } from "../../test-utils";


describe('Testing the text input of the WidgetEditor component', () => {
  afterEach(cleanup);

  //Arrange
  const { getByTestId, rerender } = render(
    <WidgetEditor />
  );

  const input = getByTestId('widget-editor-text-title');

  it("should call event handler when text input and formValues should match updated values", () => {
    expect(input.value).toBe('Title of the Widget');

    //ACT
    fireEvent.change(input, { target: { value: 'New Value' }, });

    rerender(
      <WidgetEditor />
    );

    //Assert
    expect(input.value).toBe('New Value');
  });

  it("should not have a max Length greater than 46 characters", () => {
    //New Value is 46 Characters
    fireEvent.change(input, { target: { value: 'This is a test of 46 characters so I can test!' }, });
    fireEvent.keyDown(input, { target: { key: 'a' }, });

    expect(input.maxLength).toBe(46);
    expect(input.value).toBe('This is a test of 46 characters so I can test!');
  });
});

describe('Testing the radio inputs of the WidgetEditor component', () => {
  afterEach(cleanup);

  it("temp Unit radios should be checked when clicked from unchecked", () => {
    const { getByTestId, rerender } = render(<WidgetEditor />);

    const windOn = getByTestId("widget-editor-radio-windOn");
    const windOff = getByTestId("widget-editor-radio-windOff");

    const metric = getByTestId("widget-editor-radio-metric");
    const imperial = getByTestId("widget-editor-radio-imperial");

    expect(metric).toBeChecked;
    expect(imperial).not.toBeChecked;

    expect(windOn).toBeChecked;
    expect(windOff).not.toBeChecked;

    act(() => {
      fireEvent.click(imperial);
      fireEvent.click(windOff);
    });

    rerender(
      <WidgetEditor />
    );

    expect(metric).not.toBeChecked;
    expect(imperial).toBeChecked;

    expect(windOn).not.toBeChecked;
    expect(windOff).toBeChecked;
  });

  it("temp Unit radios should stay be checked when clicked from checked", () => {
    const { getByTestId, rerender } = render(<WidgetEditor />);

    const windOn = getByTestId("widget-editor-radio-windOn");
    const metric = getByTestId("widget-editor-radio-metric");

    expect(metric).toBeChecked;
    expect(windOn).toBeChecked;

    act(() => {
      fireEvent.click(metric);
      fireEvent.click(windOn);
    });

    rerender(
      <WidgetEditor />
    );

    expect(metric).toBeChecked;
    expect(windOn).toBeChecked;
  });
});