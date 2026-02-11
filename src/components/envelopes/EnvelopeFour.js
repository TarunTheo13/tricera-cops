import EnvelopeBasic from "./envelope-images/Envelope.png";
import EnvelopeGlow from "./envelope-images/EnvelopeGlow.png";
import React from "react";
import { useState } from 'react';
import { usePostHog } from 'posthog-js/react'
import SpeechBubbleReuse from "../speech-bubble/SpeechBubbleReuse";
import Letter from "../letter/Letter";
import "./envelope.css";

const EnvelopeFour = (props) => {
  const posthog = usePostHog()
  const [displayingLetter, showLetter] = useState(false);
  const [speechBubble, setSpeechbubble] = useState(false);

  const bubbleText = () => {
    return(
      "It seems like Tiffany and Priya were arguing about dino-bucks, was one hiding money from the other? Was this Tiffany trying to frame Priya like she mentioned? We should search for more clues."
    )
  }

  const clickHandler = () => {
    posthog.capture('envelope_opened', { envelope: 4 })
    showLetter(true);
    setSpeechbubble(true);
  }

  return(
    <div>
      <img className="envelopeOutline" id="envelopeFour" onClick={() => clickHandler()} src={EnvelopeBasic} alt="envelope" onMouseOver={e => e.currentTarget.src = EnvelopeGlow } onMouseOut={e => e.currentTarget.src = EnvelopeBasic }/>
      <Letter displayingLetter={displayingLetter} showLetter={showLetter}>
        {props.letterContent}
      </Letter>
      <SpeechBubbleReuse display={speechBubble} showBubble={setSpeechbubble} words={bubbleText}>
      </SpeechBubbleReuse>
    </div>
  );
}

export default EnvelopeFour;
