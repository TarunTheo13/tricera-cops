import { useState } from 'react';
import CurtainsImage from "./curtain-images/Curtains.png";
import CurtainsGlow from "./curtain-images/CurtainsGlow.png";
import Popup from "../popup/PopUp";
import SpeechBubbleReuse from "../speech-bubble/SpeechBubbleReuse";
import "./Curtains.css";

const BUBBLE_TEXT = "Those look like heavy dinosaur footprints, Andy has a sizeable hoof... Look, there's another letter resting on the windowsill.";

const Curtains = ({ curtainMethod }) => {
  const [showPopup, setButtonPopup] = useState(false);
  const [speechBubble, setSpeechbubble] = useState(false);

  const handleCurtainsClick = () => {
    curtainMethod(true);
    setButtonPopup(true);
    setSpeechbubble(true);
  };

  return (
    <div>
      <img 
        className="curtainsobject" 
        onClick={handleCurtainsClick} 
        src={CurtainsImage} 
        alt="Curtains" 
        onMouseOver={e => e.currentTarget.src = CurtainsGlow} 
        onMouseOut={e => e.currentTarget.src = CurtainsImage}
      />
      <Popup show={showPopup} setShow={setButtonPopup}>
        <div>
          <p>Behind the curtain you discover some footprints. Was someone trying to climb in, or out?</p>
        </div>
      </Popup>
      <SpeechBubbleReuse display={speechBubble} showBubble={setSpeechbubble} words={() => BUBBLE_TEXT} />
    </div>
  )
};

export default Curtains