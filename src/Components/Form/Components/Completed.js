import React, { useContext } from "react";
import { getHeader } from "../../../helpers/getHeader";
import { AppContext } from "../../../Pages/Landing";
import "./Completed.css";
import tick from "../../../assets/tick.png";
const Completed = () => {
  const { displayName } = useContext(AppContext);
  return (
    <div className="completed">
      <img className="tick" src={tick}></img>
      {getHeader(4).map((val) => (
        <>
          <h1 className="heading ">
            {val.heading} {displayName}!
          </h1>
          <p className="sub_heading">{val.subHeading}</p>
        </>
      ))}
      <button className="btn4 btn">Launch Eden</button>
    </div>
  );
};

export default Completed;
