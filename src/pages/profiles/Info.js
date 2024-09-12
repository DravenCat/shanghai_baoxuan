import {Col, Row} from "react-bootstrap";
import img1 from "../../img/profile/p1.png";
import img2 from "../../img/profile/p2.png";
import img3 from "../../img/profile/p3.png";
import img4 from "../../img/profile/p4.png";
import img5 from "../../img/profile/p5.png";
import img6 from "../../img/profile/p6.png";
import img7 from "../../img/profile/p7.png";
import img8 from "../../img/profile/p8.png";


function Info() {
  return (
    <div className={'Profile-content'}>
      <div className={"Profile-title"}>
        公司简介
      </div>
      <hr className={"Profile-hr"}/>
      <div className={"Profile-text"}>
        上海宝宣自动化控制系统有限公司成立于2003年，是一个高科技电力自动化、机械、仪表自动化系统公司和制造行业服务商，
        现有职工40多人,全部皆大学以上学历，其中技术工程师10人，含高级工程师2人。公司业务范围涵盖纺织行业、印刷行业、
        金属行业、水泥行业、市政行业、化工行业、电力行业、铁路行业，涉及用于市政（自来水、污
        水）建材、化工行业（生物化工）、发电行业、煤矿等工业行业的产品。
      </div>
      <div className={"Profile-image-group"}>
        <Row>
          <Col xs={3}>
            <img src={img1} alt="image1" className={"Profile-image"}/>
          </Col>
          <Col xs={3}>
            <img src={img2} alt="image2" className={"Profile-image"}/>
          </Col>
          <Col xs={3}>
            <img src={img3} alt="image3" className={"Profile-image"}/>
          </Col>
          <Col xs={3}>
            <img src={img4} alt="image4" className={"Profile-image"}/>
          </Col>
        </Row>
        <Row>
          <Col xs={3}>
            <img src={img5} alt="image5" className={"Profile-image"}/>
          </Col>
          <Col xs={3}>
            <img src={img6} alt="image6" className={"Profile-image"}/>
          </Col>
          <Col xs={3}>
            <img src={img7} alt="image7" className={"Profile-image"}/>
          </Col>
          <Col xs={3}>
            <img src={img8} alt="image8" className={"Profile-image"}/>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Info;