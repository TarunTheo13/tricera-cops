import { Link } from 'react-router-dom'
import { Container, Button, Col, Row } from "react-bootstrap";
import { usePostHog } from 'posthog-js/react'
import "./Home.css";
import Poster from "./HomeImage/Home_Page.png";

const Home = () => {
  const posthog = usePostHog()

  const handlePlay = () => {
    posthog.capture('game_started')
  }

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <br />
            <br />
            <Link to="/play" onClick={handlePlay}>
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
