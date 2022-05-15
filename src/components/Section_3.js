import React from "react";
import "./Section_3.css";
import IMAGE1 from "../Pictures/IMAGE1.png";
import IMAGE2 from "../Pictures/IMAGE2.png";
import IMAGE3 from "../Pictures/IMAGE3.png";
import IMAGE4 from "../Pictures/IMAGE4.png";

const Section_3 = () => {
  return (
    <div>
      <section className="container_photos">
        <h1>
          Our teams are continuously developing innovative strategies, building
          new technologies, and conducting ongoing research.
        </h1>
        <span className="photos">
          <img className="image1" src={IMAGE1}></img>
          <img className="image1" src={IMAGE2}></img>
          <img className="image2" src={IMAGE3}></img>
          <img className="image1" src={IMAGE4}></img>
        </span>
      </section>
      <section className="Last_section">
        <h1>You’ve got questions, we’ve got answers... Let’s Chat!</h1>
        <button>Contact the team</button>
      </section>
      <hr
        style={{
          background: "linear-gradient(90deg, #e3ffe6 0%, #e5e1d6 100%)",
        }}
      ></hr>
    </div>
  );
};

export default Section_3;
