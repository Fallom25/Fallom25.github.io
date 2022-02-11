import React, { useEffect } from "react";
import ProgressBar from "../../components/progressBar";
import WidgetCard from "../../components/widgetCard";
import WidgetEditor from "../../components/widgetEditor/WidgetEditor";
import { useSelector } from "react-redux";
import { getFormValues, getWeatherInfo } from "../../store/selectors";
import "./widgetContainer.css";

import { useDispatch } from "react-redux";
import { loadGeolocation } from "../../store/actions";


const WidgetContainer = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGeolocation());
  }, [dispatch]);

  const weatherObject = useSelector(getWeatherInfo);
  const formValues = useSelector(getFormValues);

  return (
    <div>
      <ProgressBar data-testid={'progress-bar'} />
      <div className='widget__container'>
        <div className="widget__items">
          <WidgetEditor />
        </div>
        <div className="widget__divider" />
        <div className="widget__items">
          <WidgetCard
            formValues={formValues}
            weatherObject={weatherObject}
          />
        </div>
      </div>
    </div>
  );
};

export default WidgetContainer;