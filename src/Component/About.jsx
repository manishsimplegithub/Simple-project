import React from "react";
import Transfer from "./Transfer";
import web from "./images/OIP.jpeg";

const About = () => {
  return (
    <>
      {/* Using props method */}
      <Transfer
        name="heyy!! coder 💻 welcome to About page"
        imgsrc={web}
        visit="./Contact"
        btnname="Contact"
      />
    </>
  );
};

export default About;
