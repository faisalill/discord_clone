import React from "react";

const HomePage = () => {
  return (
    <div className="homepage ">
      <div className="green-header flex items-center">
        <text className="header-text">
          This is an unclaimed account. Claim it before it's lost.{" "}
        </text>
        <button className="header-button">Claim Account</button>
      </div>
      <div className="flex flex-row">
        <div className="flex-1  body-left">l</div>
        <div className="flex-6.5  body-center">l</div>
      </div>
    </div>
  );
};

export default HomePage;
