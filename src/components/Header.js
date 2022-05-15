import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header_container">
      <header className="header">
        <h1>Closen the technology of the future to help you innovate</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam quam
          arcu nunc, orci eu bibendum. Sed morbi pellentesque elit purus quam a
          sollicitudin convallis purus. Sed sed quam risus laoreet viverra id ut
          amet feugiat. Sed nec id id sed ut nulla aliquet neque. Sed est
          malesuada lobortis aliquam dolor eget donec{" "}
        </p>
        <button>get started</button>
        <h6>Some of our clients</h6>
        <span>
          <i class="fa-brands fa-apple"></i>
          <i class="fa-brands fa-google"></i>
          <i class="fa-brands fa-microsoft"></i>
        </span>

        <hr></hr>
      </header>
      <img src="https://images.unsplash.com/photo-1535957998253-26ae1ef29506?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80"></img>
    </div>
  );
};

export default Header;
