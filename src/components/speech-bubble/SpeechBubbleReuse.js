import React from "react";
import { CloseButton } from "react-bootstrap";
import "./SpeechBubble.css";

const SpeechBubbleReuse = (text) => {

  
  return text.display ? (
    <div className = 'bubble'>
      <p>{text.words()}</p>
      <br />
      <div className="pointer"></div>
      <CloseButton className="close-btn" size="sm" onClick={() => text.showBubble(false)} ></CloseButton>
      <div className="small-btn">
      </div>
      {text.children}
    </div>
  ) : (
    null
  );
}

export default SpeechBubbleReuse;
