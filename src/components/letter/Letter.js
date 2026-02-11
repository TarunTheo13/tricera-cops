import React from 'react'
import './letter.css'
import { Container, Row, Col, CloseButton } from "react-bootstrap";
import TypewriterContent from "../typewriter/TypewriterContent";

const Letter = (props) => {
  return props.displayingLetter ? (
    <div className="letter">
      <Container>
        <Row>
          <Col></Col>
            <div className="letter-inner">
              <button
                className="close-btn"
                onClick={() => props.showLetter(false)}
              >
                <CloseButton />{" "}
              </button>
              <TypewriterContent speed={15}>
                {props.children}
              </TypewriterContent>
            </div>
        </Row>
      </Container>
    </div>
  ) : (
    null
  );
}

export default Letter;
