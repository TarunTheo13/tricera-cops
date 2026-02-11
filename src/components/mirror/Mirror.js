import { useState } from 'react';
import { usePostHog } from 'posthog-js/react'
import Popup from "../popup/PopUp";
import MirrorBasic from "./mirror-images/basic-mirror.png";
import MirrorGlow from "./mirror-images/highlighted-mirror.png";
import SpeechBubbleReuse from "../speech-bubble/SpeechBubbleReuse";
import "./Mirror.css";

const BUBBLE_TEXT = "Have these guys not heard of Dino-mail?";

const Mirror = ({ mirrorMethod }) => {
  const posthog = usePostHog()
  const [showPopup, setButtonPopup] = useState(false);
  const [speechBubble, setSpeechbubble] = useState(false);

  const handleMirrorClick = () => {
    posthog.capture('clue_discovered', { clue: 'mirror' })
    setButtonPopup(true);
    mirrorMethod(true);
    setSpeechbubble(true);
  };


  return (
    <div>
      <img 
        className="mirrorOutline" 
        onClick={handleMirrorClick} 
        src={MirrorBasic} 
        alt="Mirror" 
        onMouseOver={e => e.currentTarget.src = MirrorGlow} 
        onMouseOut={e => e.currentTarget.src = MirrorBasic}
      />
      <Popup show={showPopup} setShow={setButtonPopup}>
        <div>
          <p>As you closely inspect the mirror, you notice something odd. The frame is clearly antique but the glass has been very recently replaced. There are also small fragments of glass on the mantelpiece. Was someone trying to hide something? A small envelope falls out from behind the mirror.</p>
        </div>
      </Popup>
      <SpeechBubbleReuse display={speechBubble} showBubble={setSpeechbubble} words={() => BUBBLE_TEXT} />
    </div>
  )
}

export default Mirror;
