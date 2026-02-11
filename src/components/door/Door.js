import { useState } from 'react';
import { Link } from 'react-router-dom';
import { usePostHog } from 'posthog-js/react'
import { Button } from "react-bootstrap";
import LosingPopup from "../popup/LosingPopUp";
import DoorGlow from "./door-images/DoorOrangeCropped.png";
import DoorBasic from "./door-images/CroppedDoorFinal.png";
import "./Door.css";

const Door = () => {
  const posthog = usePostHog()
  const [showPopup, setButtonPopup] = useState(false);

  const handleDoorClick = () => {
    posthog.capture('game_completed')
    setButtonPopup(true);
  };

  return (
    <div>
      <img
        className="doorOutline"
        onClick={handleDoorClick}
        src={DoorBasic}
        onMouseOver={(e) => (e.currentTarget.src = DoorGlow)}
        onMouseOut={(e) => (e.currentTarget.src = DoorBasic)}
        alt="OrangeDoor"
      />
      <LosingPopup show={showPopup} setShow={setButtonPopup}>
        <div>
          <p>Thanks to you Dinoville is safe, for now...</p>
          <p>Thank you for playing!</p>
          <Link to='/about'>
            <Button>About the creators</Button>
          </Link>
        </div>
      </LosingPopup>
    </div>
  );
}

export default Door;
