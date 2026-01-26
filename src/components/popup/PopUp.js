import { Container, Row, Col, CloseButton } from "react-bootstrap";
import './PopUp.css';

const Popup = ({ show, setShow, children, variant = 'default', showCloseButton = true }) => {
  if (!show) return null;

  const popupClassName = variant === 'losing' ? 'losing-popup' : 'popup';

  return (
    <div className={popupClassName}>
      <Container>
        <Row>
          {variant === 'default' && <Col />}
          <div className="popup-inner">
            {showCloseButton && (
              <CloseButton
                className="close-btn"
                onClick={() => setShow(false)}
              />
            )}
            {children}
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Popup;