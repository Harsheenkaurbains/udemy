import React from "react";
import person from "../ui/persons.jpg";
import Apps from "../css/Apps.css";
import props from "../css/props.css";

function Homepage() {
  var tutorList = [];
  for (let i = 0; i < 20; i++) {
    tutorList.push(
      <button className="tutor rel" key={"tutor-live-" + i}>
        <img src={"https://placeimg.com/100/100/people?" + i} className="bl" />
      </button>
    );
  }
  return (
    <div className="home-page rel">
      <div className="section rel">
        <h2 className="title s24 fontb">
          Streaming<span className="fontn">Now</span>
        </h2>
        <div className="tutors rel flex">{tutorList}</div>
      </div>
    </div>
  );
}

export default Homepage;
