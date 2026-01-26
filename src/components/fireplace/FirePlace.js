import { useState } from 'react';
import FireplaceImage from "./fireplace-images/FirePlace.png";
import FireplaceGlow from "./fireplace-images/FirePlaceGlow.png";
import Popup from "../popup/PopUp";
import SpeechBubbleReuse from "../speech-bubble/SpeechBubbleReuse";
import "./FirePlace.css";

const BUBBLE_TEXT = "Someone was trying to get rid of that letter, what were they trying to hide? Let's check what it says.";

const Fireplace = ({ fireplaceMethod }) => {
  const [showPopup, setButtonPopup] = useState(false);
  const [speechBubble, setSpeechbubble] = useState(false);

  const handleFireplaceClick = () => {
    fireplaceMethod(true);
    setButtonPopup(true);
    setSpeechbubble(true);
  };

  return (
    <div>
      <img 
        className="fireplaceobject" 
        onClick={handleFireplaceClick} 
        src={FireplaceImage} 
        alt="Fireplace" 
        onMouseOver={e => e.currentTarget.src = FireplaceGlow} 
        onMouseOut={e => e.currentTarget.src = FireplaceImage}
      />
      <Popup show={showPopup} setShow={setButtonPopup}>
        <div>
          <p>Upon searching the dusky fireplace, you spot a broken fragment that resembles a tooth, as well as a half-burnt note.</p>
          <p className="gameinstruction">mouse over the horn in your inventory, then click on the letter to take a closer look</p>
        </div>
      </Popup>
      <SpeechBubbleReuse display={speechBubble} showBubble={setSpeechbubble} words={() => BUBBLE_TEXT} />
    </div>
  )
};

export default Fireplace;