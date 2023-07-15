import React, { Fragment } from "react";
import "./Welcome.css";
function Welcome() {
  return (
    <Fragment>
      <div className="welcome">
        <h1>Welcome</h1>
        <h1>To</h1>
        <h1>VINTAGE WINES</h1>
      </div>
      <div className="marquee">
        <marquee direction="left">
          The Most Featured and Antique Beverages at Your Presence
        </marquee>
      </div>
    </Fragment>
  );
}

export default Welcome;
