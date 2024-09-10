import weChatQR from "../img/contacts/WeChat.jpg"
import whatsAppQR from "../img/contacts/WhatsApp.jpg"
import {Col, Row} from "react-bootstrap";


function Contact() {
  return(
    <div className="App">
      <div className={"App-body"}>
        <Col >
          <img src={weChatQR} className={"App-picture"}/>
          <img src={whatsAppQR} className={"App-picture"}/>
        </Col>
        <p>
          This is the contact page of Ren Xiao Yong
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Thanks!
        </a>
      </div>


    </div>
  );
}

export default Contact;