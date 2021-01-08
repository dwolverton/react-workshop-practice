import React from "react";
import "./Switch.css";

function Switch() {
  return (
    <div className="Switch">
      <h3>Switch</h3>
      <p>OFF</p>
      <p>
        <button type="button">On</button>
        <button type="button">Off</button>
      </p>
    </div>
  );
}

export default Switch;
