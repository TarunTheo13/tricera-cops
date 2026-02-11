import { useState } from 'react';
import { usePostHog } from 'posthog-js/react'
import ChalkOutlineImage from "./chalkoutline-images/ChalkOutline.png";
import ChalkOutlineGlow from "./chalkoutline-images/ChalkOutlineGlow.png";
import Popup from "../popup/PopUp";
import "./ChalkOutline.css";

const ChalkOutline = (props) => {
  const posthog = usePostHog()
  const [showPopup, setButtonPopup] = useState(false);

  const chalkoutlineClick = () => {
    posthog.capture('chalk_outline_inspected')
    props.showSuspects(true);
    props.showDinoSuspect(true);
    setButtonPopup(true);
  };

  return(
    <div>
      <img className="chalkoutlineobject" onClick={() => chalkoutlineClick()} 
        src={ChalkOutlineImage} alt="Chalk Outline" 
        onMouseOver={e => e.currentTarget.src = ChalkOutlineGlow } 
        onMouseOut={e => e.currentTarget.src = ChalkOutlineImage }
      />
       <Popup show={showPopup} setShow={setButtonPopup}>
        <div>
          <p>Decide who you think the killer is. Click on your choice.</p>
        </div>
      </Popup>
    </div>
  )
};

export default ChalkOutline;
