import React from "react";
import "./Loader.css"; // We'll create this CSS file next

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p></p>
    </div>
  );
};

export default Loader;
