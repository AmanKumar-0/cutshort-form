import React, { useContext } from "react";
import { AppContext } from "../../Pages/Landing";
import "./Stepper.css";
const Stepper = () => {
  const { activeStep, handleBackStep, totalSteps } = useContext(AppContext);

  // const classCheck=
  const checkValue = (val) => {
    if (val === 0) return 15;
    else if (val === 1) return 50;
    else if (val === 2) return 85;
    else return 100;
  };
  return (
    <>
      <div className="stepper-container">
        <progress
          className="hello"
          id="file"
          value={checkValue(activeStep)}
          max="100"
        ></progress>
        {[...Array(totalSteps + 1 || 4)].map((a, idx) => (
          <>
            <button
              className={
                activeStep >= idx ? "stepper active-stepper" : "stepper"
              }
              onClick={() => handleBackStep(idx + 1)}
            >
              {idx + 1}
            </button>
          </>
        ))}
      </div>
    </>
  );
};

export default Stepper;
