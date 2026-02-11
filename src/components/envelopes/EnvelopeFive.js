import EnvelopeBasic from "./envelope-images/Envelope.png";
import EnvelopeGlow from "./envelope-images/EnvelopeGlow.png";
import React from "react";
import { useState } from 'react';
import { usePostHog } from 'posthog-js/react'
import SpeechBubbleReuse from "../speech-bubble/SpeechBubbleReuse";
import Letter from "../letter/Letter";
import "./envelope.css";

const EnvelopeFive = ({letterSix}) => {
  const posthog = usePostHog()
  const [displayingLetter, showLetter] = useState(false);
  const [speechBubble, setSpeechbubble] = useState(false);

  const bubbleText = () => {
    return(
      "Priya told me that Andy had always been insecure about her having a life outside their relationship. It looks like there was another letter, on the mantelpiece. Let's check it out."
    )
  }

  const letterContent = () => {
    return(
      <div>
        <p>Dear Tiffany,</p>
        <p>Priya was being distant again last night, I have a suspicion that she is cheating on me. A lot of things would make sense if she is.</p>
        <p>Last night I followed her to that bar where all the cops hang out. She always liked a man in uniform.</p>
        <p>I will let you know what else I discover.</p>
        <p>Yours cretaceously,</p>
        <p>Andy</p>
      </div>
    );
  }

  const clickHandler = () => {
    posthog.capture('envelope_opened', { envelope: 5 })
    showLetter(true);
    setSpeechbubble(true);
    letterSix(true);

  }

  return(
    <div>
      <img className="envelopeOutline" id="envelopeFive" onClick={() => clickHandler()} src={EnvelopeBasic} alt="envelope" onMouseOver={e => e.currentTarget.src = EnvelopeGlow } onMouseOut={e => e.currentTarget.src = EnvelopeBasic }/>
      <Letter displayingLetter={displayingLetter} showLetter={showLetter}>
        {letterContent()}
      </Letter>
      <SpeechBubbleReuse display={speechBubble} showBubble={setSpeechbubble} words={bubbleText}>
      </SpeechBubbleReuse>
    </div>
  );
};

export default EnvelopeFive;
