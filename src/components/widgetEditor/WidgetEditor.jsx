import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { handleFormChange } from "../../store/actions";
import "./widgetEditor.css";

const WidgetEditor = () => {
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState({
    title: 'Title of the Widget',
    tempUnits: 'metric',
    windOn: true
  });

  const handleChangeText = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    });
  };

  const handleChangeTemp = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.id
    });
  };

  const handleChangeWindOn = (e) => {
    const value = e.target.id === 'true' ? true : false;
    setFormValues({
      ...formValues,
      [e.target.name]: value
    });
  };

  useEffect(() => {
    dispatch(handleFormChange(formValues));
  }, [formValues]);

  return (
    <form className="form">
      <label className="form--text">Title</label>
      <div className="form__sections">
        <input data-testid={"widget-editor-text-title"} className="form__input--text" type='text' onChange={handleChangeText} maxLength='46' value={formValues.title} name='title' id='title' />
      </div>
      <label className="form--text">Temperature</label>
      <div className="form__sections">
        <input data-testid={"widget-editor-radio-metric"} type='radio' id='metric' name='tempUnits' onChange={handleChangeTemp} checked={formValues.tempUnits === 'metric'} />
        <label className="form__input--radio-label" htmlFor='metric'  >&deg;C</label>
        <input data-testid={"widget-editor-radio-imperial"} type='radio' id='imperial' name='tempUnits' onChange={handleChangeTemp} checked={formValues.tempUnits === 'imperial'} />
        <label className="form__input--radio-label" htmlFor='imperial'  >&deg;F</label>
      </div>
      <label className="form--text">Wind</label>
      <div className="form__sections">
        <input data-testid={"widget-editor-radio-windOn"} type='radio' id='true' name='windOn' onChange={handleChangeWindOn} checked={formValues.windOn} />
        <label className="form__input--radio-label" htmlFor='windOn' >On</label>
        <input data-testid={"widget-editor-radio-windOff"} type='radio' id='false' name='windOn' onChange={handleChangeWindOn} checked={!formValues.windOn} />
        <label className="form__input--radio-label" htmlFor='windOff'>Off</label>
      </div>
    </form >
  );
};

export default WidgetEditor;