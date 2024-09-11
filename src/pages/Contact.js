import "./Contact.css"
import weChatQR from "../img/contacts/WeChat.jpg"
import whatsAppQR from "../img/contacts/WhatsApp.jpg"
import {Col, Row} from "react-bootstrap";


function Contact() {
  return(
      <div className={"App-body"}>
        <p>
          Our contacts
        </p>
        <p>
          任筱勇 Ren Xiaoyong
        </p>
        <p>
          Phone number +86 13801951535
        </p>
        <Row>
          <Col >
            <img src={weChatQR} className={"App-picture"} alt="wechat"/>
          </Col>
          <Col><img src={whatsAppQR} className={"App-picture"} alt="whatsapp"/></Col>
        </Row>

      </div>
  );
}

export default Contact;