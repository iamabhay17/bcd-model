import React from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Row
      className="mt-2 d-flex align-items-center justify-content-center home"
      style={{ minHeight: "70vh" }}
    >
      <Col sm={12} lg={5}>
        <Image
          src="https://images.unsplash.com/photo-1518152006812-edab29b069ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="homepage"
          height="60vh"
          fluid
        />
      </Col>
      <Col sm={12} lg={7}>
        {/* heading */}
        <div style={{ fontSize: "1.4rem", fontWeight: 500, color: "#0ea5e9" }}>
          Know your risk
        </div>
        <div
          style={{ fontSize: "3.2rem", fontWeight: 700 }}
          onClick={() => navigate("/")}
        >
          Breast<span style={{ color: "#0ea5e9" }}> Cancer</span> Detection
        </div>
        <div style={{ fontSize: "1.4rem", fontWeight: 500, color: "#0ea5e9" }}>
          Get personalized breast cancer risk assessments.
        </div>

        {/* list */}
        <ul
          style={{ fontSize: "1.2rem", listStyle: "none", fontWeight: 400 }}
          className="mt-4"
        >
          <li className="m-2">
            <BiMessageSquareDetail
              style={{ fontSize: "1.2rem", marginRight: "1rem" }}
            />
            Every 2 minutes a woman is diagnosed with breast cancer
          </li>
          <li className="m-2">
            <BiMessageSquareDetail
              style={{ fontSize: "1.2rem", marginRight: "1rem" }}
            />
            approximately 1% of all breast cancers occur in men
          </li>
          <li className="m-2">
            <BiMessageSquareDetail
              style={{ fontSize: "1.2rem", marginRight: "1rem" }}
            />
            early detection improves survival rates.
          </li>
          <li className="m-2">
            <BiMessageSquareDetail
              style={{ fontSize: "1.2rem", marginRight: "1rem" }}
            />
            over 2 million new cases of breast cancer in 2020 alone
          </li>
        </ul>

        {/* buttons */}
        <Row>
          <Col>
            <Button
              className="my-3 px-4 py-3"
              variant="dark"
              onClick={() => navigate("/predict")}
            >
              Predict Now
            </Button>
            <Button
              className="m-3 px-4 py-3"
              variant="outline-dark"
              onClick={() => navigate("/info")}
            >
              Learn More
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Home;
