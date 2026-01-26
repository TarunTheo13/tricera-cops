import Popup from './PopUp';

// Legacy wrapper for backward compatibility
const LosingPopup = ({ show, setShow, children }) => {
  return (
    <Popup 
      show={show} 
      setShow={setShow} 
      variant="losing" 
      showCloseButton={false}
    >
      {children}
    </Popup>
  );
};

export default LosingPopup;