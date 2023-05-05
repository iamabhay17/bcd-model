import Accordion from "react-bootstrap/Accordion";
import { data } from "../assets/faq";
const Info = () => {
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
        Get Your Facts
      </div>
      <div
        style={{ fontSize: "2.5rem", fontWeight: 700 }}
        onClick={() => navigate("/")}
      >
        Frequently <span style={{ color: "#0ea5e9" }}>Asked</span> Question
      </div>
      <div style={{ fontSize: "1.2rem", color: "#0ea5e9" }}>
        Clearing Up Common Misconceptions About Breast Cancer
      </div>
      <hr />
      <Accordion defaultActiveKey="0" style={{ marginTop: "2rem" }}>
        {data.map((info, index) => {
          return (
            <Accordion.Item eventKey={index} key={index}>
              <Accordion.Header>
                Q{index + 1} : {info.question}
              </Accordion.Header>
              <Accordion.Body style={{ backgroundColor: "#ecfeff" }}>
                A{index + 1} : {info.answer}
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </>
  );
};

export default Info;
