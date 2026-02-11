import { useState } from 'react';
import Popup from "../popup/PopUp";
import SpeechBubbleReuse from "../speech-bubble/SpeechBubbleReuse";
import JarGlow from "./jar-images/JarCroppedFinal.png";
import JarBasic from "./jar-images/CroppedJarFinal.png";
import "./Jar.css";

const BUBBLE_TEXT = "A pointy tooth, let's take a closer look. It looks like a T-rex tooth, it must be Tiffany's, which other carnivores could it be?! There was another letter stuffed in the vase too, let's read it!";

const Jar = ({ jarMethod }) => {
  const [showPopup, setButtonPopup] = useState(false);
  const [speechBubble, setSpeechbubble] = useState(false);

  const handleJarClick = () => {
    jarMethod(true);
    setButtonPopup(true);
    setSpeechbubble(true);
  };

  return (
    <div>
      <img 
        className="jarOutline" 
        onClick={handleJarClick} 
        src={JarBasic} 
        alt="Jar" 
        onMouseOver={e => e.currentTarget.src = JarGlow} 
        onMouseOut={e => e.currentTarget.src = JarBasic}
      />
      <Popup show={showPopup} setShow={setButtonPopup}>
        <div>
          <p>
            You notice a golden vase on the mantelpiece. Upon closer inspection, it seems that there is something inside. You shake it out and a blood-stained tooth falls on the floor.
          </p>
        </div>
      </Popup>
      <SpeechBubbleReuse display={speechBubble} showBubble={setSpeechbubble} words={() => BUBBLE_TEXT} />
    </div>
  )
}

export default Jar;
