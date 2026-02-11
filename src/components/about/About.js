import { Container, Button, Col, Row, Card } from "react-bootstrap";
import "./About.css";
import camilla from "./aboutImages/camilla.jpg";
import Craig from "./aboutImages/Craig.png";
import Mas from "./aboutImages/Mas.jpg";
import Sean from "./aboutImages/Sean.png";
import JooMin from "./aboutImages/JooMin.jpg";
import Tarun from "./aboutImages/Tarun.png";

const About = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={12} sm={6} md={4}>
            <br />
            <br />

            <Card className="cards">
              <Card.Img variant="top" src={camilla} />
              <Card.Body>
                <Card.Title>Camilla Lima</Card.Title>
                <Card.Text>"If the apocalypse comes beep me"</Card.Text>
                <Button
                  variant="primary"
                  href="https://github.com/camilla000"
                  target="_blank"
                >
                  GitHub
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={4}>
            <br />
            <br />
            <Card className="cards">
              <Card.Img variant="top" src={Craig} />
              <Card.Body>
                <Card.Title>Craig</Card.Title>
                <Card.Text>
                  "You're only given one little spark of madness. you mustn't
                  lose it."
                </Card.Text>
                <Button
                  variant="primary"
                  href="https://github.com/craigea92"
                  target="_blank"
                >
                  GitHub
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={4}>
            <br />
            <br />
            <Card className="cards">
              <Card.Img variant="top" src={JooMin} />
              <Card.Body>
                <Card.Title>JooMin</Card.Title>
                <Card.Text>
                  Rawr
                </Card.Text>
                <Button
                  variant="primary"
                  href="https://github.com/camilla000"
                  target="_blank"
                >
                  GitHub
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={4}>
            <br />
            <br />
            <Card className="cards">
              <Card.Img variant="top" src={Mas} />
              <Card.Body>
                <Card.Title>Masako</Card.Title>
                <Card.Text>"What's a browser?"</Card.Text>
                <Button
                  variant="primary"
                  href="https://github.com/1ugia"
                  target="_blank"
                >
                  GitHub
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={4}>
            <br />
            <br />
            <Card className="cards">
              <Card.Img variant="top" src={Sean} />
              <Card.Body>
                <Card.Title>Sean</Card.Title>
                <Card.Text>Live.Love.Laugh.</Card.Text>
                <Button
                  variant="primary"
                  href="https://github.com/SeanEmmers"
                  target="_blank"
                >
                  GitHub
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={4}>
            <br />
            <br />
            <Card className="cards">
              <Card.Img variant="top" src={Tarun} />
              <Card.Body>
                <Card.Title>Tarun (Theo Weisz)</Card.Title>
                <Card.Text>
                <p>"People say nothing is impossible, but I do nothing every day."</p> 
                <p>–⁠ Winnie the Pooh</p>
                </Card.Text>
                <Button
                  variant="primary"
                  href="https://github.com/TarunTheo13"
                  target="_blank"
                >
                  GitHub
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
