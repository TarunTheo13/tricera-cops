import { Routes, Route } from 'react-router-dom';
import { Navbar, Container } from "react-bootstrap";
import LandingRoom from "./components/landing-room/LandingRoom";
import Home from "./components/homepage/Home.js";
import About from "./components/about/About.js";
import Hat from "./components/homepage/HomeImage/TheHatfull.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";


function App() {
 
  return (
    <div className="App">
      <Navbar className="navbar" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={Hat}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Hat logo"
            />{" "}
            TriceraCops
          </Navbar.Brand>
          <Navbar.Text>
            <a href="/about">About the Team</a>
          </Navbar.Text>
        </Container>
      </Navbar>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/play" element={<LandingRoom />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <br />
        <br />
      </Container>
    </div>
  );
}

export default App;