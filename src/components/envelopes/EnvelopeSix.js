import EnvelopeBasic from "./envelope-images/Envelope.png";
import EnvelopeGlow from "./envelope-images/EnvelopeGlow.png";
import React from "react";
import { useState } from 'react';
import { usePostHog } from 'posthog-js/react'
import SpeechBubbleReuse from "../speech-bubble/SpeechBubbleReuse";
import Letter from "../letter/Letter";
import "./envelope.css";

const EnvelopeSix = ({showCurtains}) => {
  const posthog = usePostHog()
  const [displayingLetter, showLetter] = useState(false);
  const [speechBubble, setSpeechbubble] = useState(false);

  const bubbleText = () => {
    return(
      "Pff, useless! Take a look elswhere in the room, there must be more clues!"
    )
  }

  const letterContent = () => {
    return(
      <div>
      <p>Dearest Priya,</p>
      <p>They say when it rains, it pours. And I want to pour my heart open to you. My love for you could dwarf even a brachiosaurus. My desire to be around you is more voracious than the apetite of a tyrannosaur. Alas, I feel that my love goes unrequited. When oh when will you see that I am the only dinosaur for you.</p>
      <p>That brute Andy will never treat you as well as I could. Whatever happened to when they would call us childhood sweethearts? Do you still admire my poetry like you did then? We should give up the big city and run away together.</p>
      <p>Best wishes my love,</p>
      <p>Your greatest admirer</p>
    </div>
    );
  }

  const clickHandler = () => {
    posthog.capture('envelope_opened', { envelope: 6 })
    showLetter(true);
    setSpeechbubble(true);
    showCurtains(true);
  }

  return(
    <div>
      <img className="envelopeOutline" id="envelopeSix" onClick={() => clickHandler()} src={EnvelopeBasic} alt="envelope" onMouseOver={e => e.currentTarget.src = EnvelopeGlow } onMouseOut={e => e.currentTarget.src = EnvelopeBasic }/>
      <Letter displayingLetter={displayingLetter} showLetter={showLetter}>
        {letterContent()}
      </Letter>
      <SpeechBubbleReuse display={speechBubble} showBubble={setSpeechbubble} words={bubbleText}>
      </SpeechBubbleReuse>
    </div>
  );
}

export default EnvelopeSix;
