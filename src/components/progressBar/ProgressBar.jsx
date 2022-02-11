import React, { useEffect } from "react";
import './progressBar.css';

//to do make progress bar align with loading build selector that run inline with weatherinfo dispatch()
//Issues with Progress bar described in README.md
const ProgressBar = () => {

  const progressInt = () => {
    const bar = document.getElementById('bar');
    let grow = 0;
    const int = setInterval(() => {
      if (grow == 100) {
        clearInterval(int);
      } else {
        grow++;
        bar.style.width = grow + '%';
      }
    }, 1);
  };

  useEffect(() => {
    progressInt();
  }, []);

  return (
    <div className="progress__container">
      <div id='bar' data-testid={'progress-bar-bar'} className="progress__bar"></div>
    </div>
  )
};

export default ProgressBar;