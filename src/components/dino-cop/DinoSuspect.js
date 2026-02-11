import { useState } from 'react';
import { usePostHog } from 'posthog-js/react'
import DinoImg from "./dino-images/triceCOP.png";
import Popup from "../popup/PopUp";
import SpeechBubbleReuse from "../speech-bubble/SpeechBubbleReuse";
import "./Dino.css";

const BUBBLE_TEXT = "Argghhh! I can't believe you caught me! RAAWWWWRRR";

const DinoSuspect = ({ showSuspects, showDoor, showKey }) => {
  const posthog = usePostHog()
  const [showPopup, setButtonPopup] = useState(false);
  const [speechBubble, setSpeechbubble] = useState(false);

  const handleClick = () => {
    posthog.capture('suspect_chosen', { suspect: 'dino_cop', correct: true })
    setButtonPopup(true);
    showSuspects(false);
    showDoor(true);
    showKey(true);
    setSpeechbubble(true);
  };

  return (
    <div>
      <img 
        className="cop-suspect" 
        src={DinoImg} 
        alt="Dino-cop" 
        onClick={handleClick}
      />
      <Popup show={showPopup} setShow={setButtonPopup}>
        <div>
          <p>Congratulations! You solved the case and exposed the real killer. You are presented with the key to the city for your dedication to justice.</p>
          <p className="gameinstruction">When you are ready, click on the door to finish the game.</p>
        </div>
      </Popup>
      <SpeechBubbleReuse display={speechBubble} showBubble={setSpeechbubble} words={() => BUBBLE_TEXT} />
    </div>
  );
};

export default DinoSuspect;
