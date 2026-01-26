import { useState } from 'react';
import EnvelopeBasic from "./envelope-images/Envelope.png";
import EnvelopeGlow from "./envelope-images/EnvelopeGlow.png";
import SpeechBubbleReuse from "../speech-bubble/SpeechBubbleReuse";
import Letter from "../letter/Letter";
import "./envelope.css";

const BUBBLE_TEXT = "That letter never made it to me. If only... maybe I could have stopped this terrible tragedy. I didn't mention it as I wanted to maintain a professional standpoint, but Priya and I were good friends, she was such a special woman, shame about the people surrounding her. Personally I never trusted Tiffany, she is a violent flesh eater! With Priya gone she has full control over the business, seems like more than enough reason for a tyrannosaur to do such a thing. It seems there was another letter under the vase. Priya sure was organised...";

const LETTER_CONTENT = (
  <div>
    <p>Dear Triceracop,</p>
    <p>Tiffany has been acting very strangely recently, in ten years of running this business together we've never had more than a minor argument but she's blown up at me twice in the last week. It seems like she suspects me of something, or maybe is even trying to frame me for something. I found her riffling through my drawers yesterday, she said she was looking for old accounts but something seemed off.</p>
    <p>I couldn't imagine Tiffany harming a fly but with all of this, I am beginning to fear for my own safety.</p>
    <p>Please keep this to yourself, with the rifts in our marriage at the moment, you are the only one I feel I can really trust.</p>
    <p>Your dear friend,</p>
    <p>Priya</p>
  </div>
);

const EnvelopeThree = ({ letterFour }) => {
  const [displayingLetter, showLetter] = useState(false);
  const [speechBubble, setSpeechbubble] = useState(false);

  const handleClick = () => {
    showLetter(true);
    setSpeechbubble(true);
    letterFour(true);
  };

  return (
    <div>
      <img 
        className="envelopeOutline" 
        id="envelopeThree" 
        onClick={handleClick} 
        src={EnvelopeBasic} 
        alt="envelope" 
        onMouseOver={e => e.currentTarget.src = EnvelopeGlow} 
        onMouseOut={e => e.currentTarget.src = EnvelopeBasic}
      />
      <Letter displayingLetter={displayingLetter} showLetter={showLetter}>
        {LETTER_CONTENT}
      </Letter>
      <SpeechBubbleReuse display={speechBubble} showBubble={setSpeechbubble} words={() => BUBBLE_TEXT} />
    </div>
  );
};

export default EnvelopeThree;