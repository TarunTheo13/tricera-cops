import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePostHog } from 'posthog-js/react'
import { Button } from "react-bootstrap";
import TiffanyImg from "./images/Tiffany.png";
import LosingPopup from "../popup/LosingPopUp";
import "./suspects.css";

const Tiffany = () => {
  const posthog = usePostHog()
  const [showPopup, setButtonPopup] = useState(false);
  const navigate = useNavigate();

  const clickHandler = () => {
    posthog.capture('suspect_chosen', { suspect: 'tiffany', correct: false })
    setButtonPopup(true);
  };

  const startOver = () => {
    navigate('/');
  };

  return (
    <div>
      <img className="tiffany" src={TiffanyImg} alt="tiffany" onClick = {() => clickHandler()}/>
      <LosingPopup show={showPopup} setShow={setButtonPopup}>
        <div>
          <p>You were wrong, the real killer got away! </p>
          <Button onClick = {() => startOver()}> Start again? </Button>
        </div>
      </LosingPopup>
    </div>
  );
};

export default Tiffany;
