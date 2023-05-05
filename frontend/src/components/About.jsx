import React from "react";
import { about_data } from "../assets/about";

const About = () => {
  return (
    <>
      <div
        style={{
          fontSize: "1.2rem",
          fontWeight: 500,
          color: "#0ea5e9",
          marginTop: "2rem",
        }}
      >
        Learn more
      </div>
      <div
        style={{ fontSize: "2.5rem", fontWeight: 700 }}
        onClick={() => navigate("/")}
      >
        About <span style={{ color: "#0ea5e9" }}>our</span> Misson
      </div>
      <hr />
      <div style={{ margin: "3rem" }}>
        {about_data.map((info, index) => {
          return (
            <div key={index}>
              <div
                className="title"
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 500,
                  color: "#0ea5e9",
                  textAlign: "center",
                  margin: "1rem 3rem",
                }}
              >
                {info.title}
              </div>
              <div
                className="info"
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 400,
                }}
              >
                {info.description}
              </div>
              <hr />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default About;
