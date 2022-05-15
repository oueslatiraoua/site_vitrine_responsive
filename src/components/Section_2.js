import React from "react";
import "./Section_2.css";
import IMAGE5 from "../Pictures/IMAGE5.png";
const Section_2 = () => {
  return (
    <section className="section2_Container">
      <img src={IMAGE5} />
      <div className="container">
        <h2>
          Empowered by Innovation, Commited by Intellect and Driven by Values
        </h2>
        <div className="paragraph_container">
          <section className="paragraph">
            <div>07</div>
            <hr
              style={{
                width: "301.5px",

                transform: "rotate(90deg)",
                background: "linear-gradient(90deg, #E3FFE6 0%, #E5E1D6 100%)",
                position: "absolute",
                marginLeft: "-151px",
                marginTop: "100px",
                borderLeft: "1px",
              }}
            ></hr>
            <h5>Projects</h5>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam quam
              arcu nunc, orci eu bibendum. Sed morbi pellentesque elit purus
              quam a sollicitudin convallis purus. Sed sed quam risus laoreet
              viverra id ut amet feugiat. Sed nec id id sed ut nulla aliquet
              neque. Sed est malesuada lobortis aliquam dolor eget donec
            </p>
          </section>
          <section className="paragraph">
            <div>23</div>
            <hr
              style={{
                width: "301.5px",

                transform: "rotate(90deg)",
                background: "linear-gradient(90deg, #E3FFE6 0%, #E5E1D6 100%)",
                position: "absolute",
                marginLeft: "-151px",
                marginTop: "100px",
                borderLeft: "1px",
              }}
            ></hr>
            <h5>Clients</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam quam
              arcu nunc, orci eu bibendum. Sed morbi pellentesque elit purus
              quam a sollicitudin convallis purus. Sed sed quam risus laoreet
              viverra id ut amet feugiat. Sed nec id id sed ut nulla aliquet
              neque. Sed est malesuada lobortis aliquam dolor eget donec
            </p>
          </section>
          <section className="paragraph">
            <div>04</div>
            <hr
              style={{
                width: "301.5px",

                transform: "rotate(90deg)",
                background: "linear-gradient(90deg, #E3FFE6 0%, #E5E1D6 100%)",
                position: "absolute",
                marginLeft: "-151px",
                marginTop: "100px",
                borderLeft: "1px",
              }}
            ></hr>
            <h5>Tech and Creative teams</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam quam
              arcu nunc, orci eu bibendum. Sed morbi pellentesque elit purus
              quam a sollicitudin convallis purus. Sed sed quam risus laoreet
              viverra id ut amet feugiat. Sed nec id id sed ut nulla aliquet
              neque. Sed est malesuada lobortis aliquam dolor eget donec
            </p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Section_2;
