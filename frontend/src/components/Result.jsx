import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Card, Image, Spinner } from "react-bootstrap";

export default function Result() {
  const [result, setResult] = useState(null);
  const location = useLocation();

  const test = location.state;
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.post(
          "https://breast-cancer-detection-55a9.onrender.com/predict",
          test
        );
        setResult(response.data);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <div
        className="d-flex justify-content-center align-items-center"
        width="100vw"
        style={{ height: "80vh" }}
      >
        {result ? (
          <Card className="text-center">
          <Card.Header style={{ fontSize: "2rem", fontWeight: "bold" }}>
            {result.prediction} Cancer Detected
          </Card.Header>
          <Card.Body>
            <Image
              src="https://images.unsplash.com/photo-1602750981472-01d024fcf92b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHdhcm5pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              width="200"
              height="200"
            />
            <Card.Text style={{ fontSize: "1.3rem", marginTop: "1.2rem" }}>
              Based on the data you provided, our system has detected that you
              are likely to have {result.prediction} cancer. 
              {result.prediction=='Benign' ? <div>You are completely Fine.You does not have cancer</div> : <div>We recommend that you consult
              with a medical professional as soon as possible.</div>}
              
            </Card.Text>
          </Card.Body>
        </Card>
        ) : (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
      </div>
    </div>
  );
}
