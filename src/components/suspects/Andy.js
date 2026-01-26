import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "react-bootstrap";
import AndyImg from "./images/Andy.png";
import LosingPopup from "../popup/LosingPopUp";
import "./suspects.css";

const Andy = () => {
  const [showPopup, setButtonPopup] = useState(false);
  const navigate = useNavigate();

  const clickHandler = () => {
    setButtonPopup(true);
  };

  const startOver = () => {
    navigate('/');
  };

  return (
    <div>
      <img className="andy" src={AndyImg} alt="Andy" onClick = {() => clickHandler()}/>
      <LosingPopup show={showPopup} setShow={setButtonPopup}>
        <div>
          <p>You were wrong, the real killer got away! </p>
          <Button onClick = {() => startOver()}> Start again? </Button>
        </div>
      </LosingPopup>
    </div>
  );
};

export default Andy;
