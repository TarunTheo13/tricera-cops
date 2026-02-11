import EnvelopeBasic from "./envelope-images/Envelope.png";
import EnvelopeGlow from "./envelope-images/EnvelopeGlow.png";
import React from "react";
import { useState } from 'react';
import { usePostHog } from 'posthog-js/react'
import Letter from "../letter/Letter";
import SpeechBubbleReuse from "../speech-bubble/SpeechBubbleReuse";
import "./envelope.css";

const EnvelopeSeven = ({showOutline}) => {
  const posthog = usePostHog()
  const [displayingLetter, showLetter] = useState(false);
  const [speechBubble, setSpeechbubble] = useState(false);

  const bubbleText = () => {
    return(
      "We have enough evidence. Inspect the chalk outline when you are ready to make your decision. I think it's clear who the murderer is. Time to prove your reputation, detective!"
    )
  }

  const clickHandler = () => {
    posthog.capture('envelope_opened', { envelope: 7 })
    showLetter(true);
    setSpeechbubble(true);
    showOutline(true);
  }
  
  const letterContent = () => {
    return(
      <div>
        <p>Dear Andy,</p>
        <p>I am even more worried about Priya.</p>
        <p>She had another episode at work today.</p>
        <p>She was convinced that we are all merely a figment of the imaginations of six hyper-intelligent apes from a reality where dinosaurs went extinct 66 million years after an asteriod hit the planet.</p>
        <p>She claimed the apes had developed an advanced society, similar to our own. Can you even imagine? Even the thought of a primate wearing clothes is laughable. Something you'd only ever see on the internet.</p>
        <p>I hope her health improves, I am here to support both of you. If you need anything, I'm just a phone call away.</p>
        <p>Yours triassicly,</p>
        <p>Tiffany</p>
      </div>
    );
  }

  return(
    <div>
      <img className="envelopeOutline" id="envelopeSeven" onClick={() => clickHandler()} src={EnvelopeBasic} alt="envelope" onMouseOver={e => e.currentTarget.src = EnvelopeGlow } onMouseOut={e => e.currentTarget.src = EnvelopeBasic }/>
      <Letter displayingLetter={displayingLetter} showLetter={showLetter}>
        {letterContent()}
      </Letter>
      <SpeechBubbleReuse display={speechBubble} showBubble={setSpeechbubble} words={bubbleText}>
      </SpeechBubbleReuse>
    </div>
  );
}

export default EnvelopeSeven;
