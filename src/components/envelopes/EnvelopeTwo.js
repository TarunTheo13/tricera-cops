import { useState } from 'react';
import { usePostHog } from 'posthog-js/react'
import EnvelopeBasic from "./envelope-images/Envelope.png";
import EnvelopeGlow from "./envelope-images/EnvelopeGlow.png";
import SpeechBubbleReuse from "../speech-bubble/SpeechBubbleReuse";
import Letter from "../letter/Letter";
import "./envelope.css";

const BUBBLE_TEXT = "It looks like Andy and Priya's relationship has not been going well, perhaps he finally snapped? Let's search for more clues.";

const EnvelopeTwo = ({ letterContent }) => {
  const posthog = usePostHog()
  const [displayingLetter, showLetter] = useState(false);
  const [speechBubble, setSpeechbubble] = useState(false);

  const handleClick = () => {
    posthog.capture('envelope_opened', { envelope: 2 })
    showLetter(true);
    setSpeechbubble(true);
  };

  return (
    <div>
      <img 
        className="envelopeOutline" 
        id="envelopeTwo" 
        onClick={handleClick} 
        src={EnvelopeBasic} 
        alt="envelope" 
        onMouseOver={e => e.currentTarget.src = EnvelopeGlow} 
        onMouseOut={e => e.currentTarget.src = EnvelopeBasic}
      />
      <Letter displayingLetter={displayingLetter} showLetter={showLetter}>
        {letterContent}
      </Letter>
      <SpeechBubbleReuse display={speechBubble} showBubble={setSpeechbubble} words={() => BUBBLE_TEXT} />
    </div>
  );
}

export default EnvelopeTwo;
