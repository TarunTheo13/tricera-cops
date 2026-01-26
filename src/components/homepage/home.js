import { Link } from 'react-router-dom'
import { Container, Button, Col, Row } from "react-bootstrap";
import "./Home.css";
import Poster from "./HomeImage/Home_Page.png";

const Home = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <br />
            <br />
            <Link to="/play">
              <img src={Poster} className="welcome" alt="TriceraCops game poster" />
              <br />
              <br />
              <div className="playButton">
                <Button variant="danger" size="lg">
                  Let's Play!!
                </Button>
              </div>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;