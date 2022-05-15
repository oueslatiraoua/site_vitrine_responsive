import React from "react";
import "./Section_1.css";
import rectangle from "../Pictures/Rectangle.png";
const Section_1 = () => {
  return (
    <div className="Section1_Container">
      <h1>Simple Solutions for Complex Connections. We are Pushing Limits.</h1>
      <hr></hr>
      <section className="section1">
        <h6>Project1</h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam quam
          arcu nunc, orci eu bibendum.{" "}
        </p>
      </section>

      <section className="section2">
        <h6>Project2</h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam quam
          arcu nunc, orci eu bibendum.{" "}
        </p>
      </section>

      <img src={rectangle}></img>
      <section className="section1">
        <h6>Project3</h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam quam
          arcu nunc, orci eu bibendum.{" "}
        </p>
      </section>
      <hr></hr>

      <section className="section1">
        <h6>Project4</h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam quam
          arcu nunc, orci eu bibendum.{" "}
        </p>
      </section>
      <hr></hr>

      <section className="section1">
        <h6>Project5</h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam quam
          arcu nunc, orci eu bibendum.{" "}
        </p>
      </section>
      <hr></hr>
    </div>
  );
};

export default Section_1;
