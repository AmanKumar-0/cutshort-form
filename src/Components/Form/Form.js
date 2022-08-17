import React, { useContext } from "react";
import { AppContext } from "../../Pages/Landing";
import Completed from "./Components/Completed";
import Name from "./Components/Name";
import Planning from "./Components/Planning";
import Workspace from "./Components/Workspace";
import "./Form.css";
const Form = () => {
  const { activeStep } = useContext(AppContext);
  return (
    <div className="form_details ">
      {activeStep === 0 && <Name />}
      {activeStep === 1 && <Workspace />}
      {activeStep === 2 && <Planning />}
      {activeStep === 3 && <Completed />}
    </div>
  );
};

export default Form;
