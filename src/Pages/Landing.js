import React, { createContext, useState } from "react";
import Stepper from "../Components/Stepper/Stepper";
import Form from "../Components/Form/Form";
import "./Landing.css";
import logo from "../assets/logo.png";

export const AppContext = createContext();
const Landing = () => {
  const totalSteps = 3;
  const [fullName, setFullName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [workspaceName, setWorkspaceName] = useState("");
  const [workspaceUrl, setWorkspaceUrl] = useState("");
  const [usage, setUsage] = useState("");
  const [activeStep, setActiveStep] = useState(0);
  const handleNextStep = (val) => {
    if (activeStep == val && activeStep < totalSteps)
      setActiveStep(activeStep + 1);
  };
  const handleBackStep = (val) => {
    if (activeStep == val && activeStep > 0) setActiveStep(activeStep - 1);
  };

  console.log(
    fullName,
    displayName,
    workspaceName,
    workspaceUrl,
    usage,
    activeStep
  );
  return (
    <div className="landing-container">
      <div className="logo">
        <img src={logo} alt="Logo" />
        <h1 className="heading">Eden</h1>
      </div>
      <AppContext.Provider
        value={{
          fullName,
          setFullName,
          displayName,
          setDisplayName,
          workspaceName,
          setWorkspaceName,
          workspaceUrl,
          setWorkspaceUrl,
          usage,
          setUsage,
          activeStep,
          handleNextStep,
          handleBackStep,
          totalSteps,
        }}
      >
        <Stepper />
        <Form />
      </AppContext.Provider>
    </div>
  );
};

export default Landing;
