import "./Contact.css"
import weChatQR from "../img/contacts/WeChat.jpg"
import whatsAppQR from "../img/contacts/WhatsApp.jpg"
import {Col, Row} from "react-bootstrap";


function Contact() {
  return(
      <div className={"General-body"}>
        <div className={"Contact-background"}>
          <p>
            联系方式
          </p>
          <p>
            任筱勇 Ren Xiaoyong
          </p>
          <p>
            手机 +86 13801951535
          </p>
          <Row>
            <Col >
              <img src={weChatQR} className={"App-picture"} alt="wechat"/>
            </Col>
            <Col><img src={whatsAppQR} className={"App-picture"} alt="whatsapp"/></Col>
          </Row>
        </div>
      </div>
  );
}

export default Contact;