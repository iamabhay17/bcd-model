import { Container } from "react-bootstrap";
import Home from "./components/Home";
import Header from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Info from "./components/Info";
import About from "./components/About";
import BcdForm from "./components/Form/Form";
import Result from "./components/Result";
function App() {
  return (
    <>
      <div>
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path="/info" element={<Info />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/predict" element={<BcdForm />} />
            <Route exact path="/result" element={<Result />} />
          </Routes>
        </Container>
        <Footer />
      </div>
    </>
  );
}

export default App;
