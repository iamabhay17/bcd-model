import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BiHome, BiInfoCircle, BiMicrophone } from "react-icons/bi";
import { MdOutlineOnlinePrediction, MdCoronavirus } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="py-3">
      <Container>
        <Navbar.Brand
          style={{ display: "flex", gap: "1rem", alignItems: "center" }}
          onClick={() => navigate("/")}
        >
          <MdCoronavirus style={{ fontSize: "3rem", color: "white" }} />
          Cancer Detection
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ml-auto">
            <Nav.Link
              style={{ display: "flex", gap: "0.3rem", alignItems: "center" }}
              onClick={() => navigate("/")}
            >
              <BiHome style={{ fontSize: "1.4rem" }} />
              Home
            </Nav.Link>

            <Nav.Link
              style={{ display: "flex", gap: "0.3rem", alignItems: "center" }}
              onClick={() => navigate("/predict")}
            >
              <MdOutlineOnlinePrediction style={{ fontSize: "1.4rem" }} />
              Predict
            </Nav.Link>
            <Nav.Link
              style={{ display: "flex", gap: "0.3rem", alignItems: "center" }}
              onClick={() => navigate("/info")}
            >
              <BiInfoCircle style={{ fontSize: "1.4rem" }} />
              Info
            </Nav.Link>
            <Nav.Link
              style={{ display: "flex", gap: "0.3rem", alignItems: "center" }}
              onClick={() => navigate("/about")}
            >
              <BiMicrophone style={{ fontSize: "1.4rem" }} />
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
