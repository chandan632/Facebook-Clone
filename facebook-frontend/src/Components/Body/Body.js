import React from "react";
import "./Body.css";
import LeftPanel from "./LeftPanel/LeftPanel";

const Body = (props) => {
  

  const bodyClickHandler = () => {
    props.clickHandler()
  }

  return (
    <div className="body" onClick={bodyClickHandler}>
      <LeftPanel />
      <div className="main-feed"></div>
      <div className="body-rightPanel"></div>
    </div>
  );
}

export default Body;
