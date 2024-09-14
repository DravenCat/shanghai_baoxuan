import "./Contact.css"
import weChatQR from "../img/contacts/WeChat.jpg"
import whatsAppQR from "../img/contacts/WhatsApp.jpg"
import {Col, Row} from "react-bootstrap";
import wechat from "../img/contacts/wechat-logo.png";
import whatsapp from "../img/contacts/whatsapp-6860919_1280.webp";


function Contact() {

  const getLanguage = () => {
    const searchParams = new URLSearchParams(window.location.search);
    const language = searchParams.get('language');
    if (language === "en") {
      return 0;
    }
    return 1;
  }

  // 1 chinese, 0 english
  let isChinese = getLanguage();


  return(
      <div className={"General-body"}>
        <div className={"Contact-background"}>
          <p>
            {isChinese ? '联系方式' : 'Contact'}
          </p>
          <hr className={"General-hr"}/>
          <p>
            任筱勇 Ren Xiaoyong
          </p>
          <p>
            {isChinese ? '手机' : 'Mobile'} +86 13801951535
          </p>
          <Row>
            <Col >
              <Row>
                <img src={wechat} className={"Contact-app"} alt="wechat"/>
              </Row>
              <img src={weChatQR} className={"App-picture"} alt="wechatQR"/>
            </Col>
            <Col>
              <Row>
                <img src={whatsapp} className={"Contact-app"} alt="whatsapp"/>
              </Row>
              <img src={whatsAppQR} className={"App-picture"} alt="whatsappQR"/>
            </Col>
          </Row>
          <hr className={"General-hr"}/>
          <p>
            吴小兵 Wu Xiaobin
          </p>
          <p>
            {isChinese ? '手机' : 'Mobile'} +86 18117583670
          </p>
        </div>
      </div>
  );
}

export default Contact;