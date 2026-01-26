import { useState } from 'react';
import SpeechBubbleReuse from "../speech-bubble/SpeechBubbleReuse";
import Cop from "./dino-images/triceCOP.png";
import "./Dino.css";

const BUBBLE_TEXT = "Hey, don't poke me";

const DinoCop = () => {
  const [speechBubble, setSpeechbubble] = useState(false);

  return (
    <div>
      <img 
        className="cop" 
        src={Cop} 
        alt="TriceraCop" 
        onClick={() => setSpeechbubble(true)}
      />
      <SpeechBubbleReuse display={speechBubble} showBubble={setSpeechbubble} words={() => BUBBLE_TEXT} />
    </div>
  );
};

export default DinoCop;
