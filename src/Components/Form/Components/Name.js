import React, { useContext } from "react";
import { getHeader } from "../../../helpers/getHeader";
import { AppContext } from "../../../Pages/Landing";
import "./Name.css";
const Name = () => {
  const {
    fullName,
    setFullName,
    displayName,
    setDisplayName,
    activeStep,
    handleNextStep,
  } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fullName === "" || displayName === "")
      return alert("Please Enter All Details");

    handleNextStep(activeStep);
  };

  return (
    <>
      <div className="name_header">
        {getHeader(1).map((val) => (
          <>
            <h1 className="heading ">{val.heading}</h1>
            <p className="sub_heading">{val.subHeading}</p>
          </>
        ))}
      </div>
      <div className="name">
        <form className="details" onSubmit={handleSubmit}>
          <label className="label" htmlFor="full_name">
            Full Name
          </label>
          <input
            name="full_name"
            value={fullName}
            placeholder="Full Name"
            onChange={(e) => setFullName(e.target.value)}
          ></input>
          <label className="label" htmlFor="display_name">
            Display Name
          </label>
          <input
            name="display_name"
            value={displayName}
            placeholder="Display Name"
            onChange={(e) => setDisplayName(e.target.value)}
          ></input>
          <button className="btn1 btn" type="submit">
            Create Workspace
          </button>
        </form>
      </div>
    </>
  );
};

export default Name;
