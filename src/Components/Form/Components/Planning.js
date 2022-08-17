import React, { useContext, useState } from "react";
import { AppContext } from "../../../Pages/Landing";
import { getHeader } from "../../../helpers/getHeader";
import "./Planning.css";
import team from "../../../assets/team.png";
import myself from "../../../assets/myself.png";

const Planning = () => {
  const [selectedCard, setSelectedCard] = useState(0);
  const { usage, setUsage, handleNextStep, activeStep } =
    useContext(AppContext);
  let array = [
    {
      name: "For Myself",
      description: "Write better. Think more clearly. Stay organized",
      img: myself,
      key: 1,
    },
    {
      name: "With my team",
      description: "Wikis, docs, taks & projects, all in one place.",
      img: team,
      key: 2,
    },
  ];

  const selectCard = (val) => {
    if (selectedCard == val) {
      setSelectedCard(0);
      setUsage("");
    } else {
      setSelectedCard(val);
      setUsage(val);
    }
  };
  const handleSubmit = () => {
    if (selectedCard === 0) return alert("Please select a card");

    handleNextStep(activeStep);
  };
  return (
    <div className="planning">
      {getHeader(3).map((val) => (
        <>
          <h1 className="heading ">{val.heading}</h1>
          <p className="sub_heading">{val.subHeading}</p>
        </>
      ))}
      <div className="planning_select">
        {array.map((data) => (
          <div
            className={
              data.key == selectedCard
                ? "planning_data border"
                : "planning_data"
            }
            onClick={() => selectCard(data.key)}
          >
            <img src={data.img} alt="hi" />
            <h5>{data.name}</h5>
            <p>{data.description}</p>
          </div>
        ))}
      </div>
      <button className="btn3 btn" onClick={handleSubmit}>
        Create Workspace
      </button>
    </div>
  );
};

export default Planning;
