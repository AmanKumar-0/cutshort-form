import React, { useContext } from "react";
import { getHeader } from "../../../helpers/getHeader";
import { AppContext } from "../../../Pages/Landing";
import "./Workspace.css";

const Workspace = () => {
  const {
    workspaceName,
    setWorkspaceName,
    workspaceUrl,
    setWorkspaceUrl,
    activeStep,
    handleNextStep,
  } = useContext(AppContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (workspaceName === "") return alert("Please enter all details");

    handleNextStep(activeStep);
  };
  return (
    <>
      <div className="workspace_header">
        {getHeader(2).map((val) => (
          <>
            <h1 className="heading ">{val.heading}</h1>
            <p className="sub_heading">{val.subHeading}</p>
          </>
        ))}
      </div>

      <div className="workspace">
        <form className="workspace_details" onSubmit={handleSubmit}>
          <label className="label" for="workspace_name">
            Workspace Name
          </label>
          <input
            name="workspace_name"
            value={workspaceName}
            placeholder="Workspace Name"
            onChange={(e) => setWorkspaceName(e.target.value)}
          ></input>
          <label className="label" for="workspace_url">
            Workspace URL (optional)
          </label>
          <input
            name="workspace_url"
            value={workspaceUrl}
            placeholder="Workspace URL"
            onChange={(e) => setWorkspaceUrl(e.target.value)}
          ></input>
          <button className="btn2 btn" type="submit">
            Create Workspace
          </button>
        </form>
      </div>
    </>
  );
};

export default Workspace;
