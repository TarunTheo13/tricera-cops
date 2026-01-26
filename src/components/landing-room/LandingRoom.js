import { useState } from 'react';
import RoomOneImage from "./landing-room-images/RoomOneChalk.png";
import SpeechBubbleReuse from "../speech-bubble/SpeechBubbleReuse";
import SpeechBubble from "../speech-bubble/SpeechBubble";
import Fireplace from "../fireplace/FirePlace";
import Curtains from "../curtains/Curtains";
import Mirror from "../mirror/Mirror";
import ChalkOutline from "../chalkoutline/ChalkOutline";
import Door from "../door/Door";
import DinoCop from "../dino-cop/Dino";
import Jar from "../jar/Jar";
import Tooth from "../clues/Tooth";
import Horn from "../clues/Horn";
import Footprint from "../clues/Footprint";
import EnvelopeOne from "../envelopes/EnvelopeOne";
import EnvelopeTwo from "../envelopes/EnvelopeTwo";
import LetterTwoContent from "../envelopes/LetterTwoContent";
import EnvelopeThree from "../envelopes/EnvelopeThree";
import EnvelopeFour from "../envelopes/EnvelopeFour";
import LetterFourContent from "../envelopes/LetterFourContent";
import EnvelopeFive from "../envelopes/EnvelopeFive";
import EnvelopeSix from "../envelopes/EnvelopeSix";
import EnvelopeSeven from "../envelopes/EnvelopeSeven";
import Tiffany from "../suspects/Tiffany";
import Andy from "../suspects/Andy";
import DinoSuspect from "../dino-cop/DinoSuspect";
import Key from "../clues/Key";

const LandingRoom = () => {
  const [showEnvelopeOne, setEnvelopeOne] = useState(false);
  const [noteTwoAndJar, setNoteTwoAndJar] = useState(false);
  const [showEnvelopeThree, setEnvelopeThree] = useState(false);
  const [noteFourAndMirror, setNoteFourAndMirror] = useState(false);
  const [showEnvelopeFive, setEnvelopeFive] = useState(false); 
  const [noteSix, setNoteSix] = useState(false);
  const [showCurtains, setCurtains] = useState(false);
  const [showNoteSevenAndFootprint, setNoteSevenAndFootprint] = useState(false);
  const [showChalkOutline, setChalkOutline] = useState(false);
  const [showSuspects, setShowSuspects] = useState(false);
  const [showDinoSuspect, setShowDino] = useState(false);
  const [showDoor, setShowDoor] = useState(false);
  const [showKey, setKey] = useState(false);

  return (
    <div className="LandingRoom">
      <div className="parent">
        <img className="backgroundImage" src={RoomOneImage} alt="TriceraCop Crime Scene" />
        <Fireplace fireplaceMethod={setEnvelopeOne} />
        {showEnvelopeOne && <EnvelopeOne letterTwo={setNoteTwoAndJar} />}
        {showEnvelopeOne && <Horn />}
        {noteTwoAndJar && <EnvelopeTwo letterContent={<LetterTwoContent />} />}
        {noteTwoAndJar && <Jar jarMethod={setEnvelopeThree} />}
        {showEnvelopeThree && <Tooth />}
        {showEnvelopeThree && <EnvelopeThree letterFour={setNoteFourAndMirror} />}
        {noteFourAndMirror && <EnvelopeFour letterContent={<LetterFourContent />} />}
        {noteFourAndMirror && <Mirror mirrorMethod={setEnvelopeFive} />}
        {showEnvelopeFive && <EnvelopeFive letterSix={setNoteSix} />}
        {noteSix && <EnvelopeSix showCurtains={setCurtains} />}
        {showCurtains && <Curtains curtainMethod={setNoteSevenAndFootprint} />}
        {showNoteSevenAndFootprint && <Footprint />}
        {showNoteSevenAndFootprint && <EnvelopeSeven showOutline={setChalkOutline} />}
        {showChalkOutline && <ChalkOutline showDinoSuspect={setShowDino} showSuspects={setShowSuspects} />}
        {showSuspects && <Tiffany />}
        {showSuspects && <Andy />}
        {showDinoSuspect && <DinoSuspect showKey={setKey} showSuspects={setShowSuspects} showDoor={setShowDoor} />}
        {showDoor && <Door />}
        {showKey && <Key />}
        <DinoCop />
        <SpeechBubble />
        <SpeechBubbleReuse />       
      </div>
    </div>
  );
};

export default LandingRoom;
