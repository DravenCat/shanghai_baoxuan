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
    <div className={'General-content'}>
      <div className={"General-title"}>
        公司简介
      </div>
      <hr className={"General-hr"}/>
      <div className={"General-text"}>
        上海宝宣自动化控制系统有限公司成立于2003年，是一个高科技电力自动化、机械、仪表自动化系统公司和制造行业服务商，
        现有职工40多人,全部皆大学以上学历，其中技术工程师10人，含高级工程师2人。公司业务范围涵盖纺织行业、印刷行业、
        金属行业、水泥行业、市政行业、化工行业、电力行业、铁路行业，涉及用于市政（自来水、污
        水）建材、化工行业（生物化工）、发电行业、煤矿等工业行业的产品。
      </div>
      <div className={"General-text"}>
        本公司的主要产品及服务有：
        <ul>
          <li>
            美国霍尼韦尔公司、德国西门子DCS/PLC系统集成
          </li>
          <li>
            东方日立、丹佛斯、施耐德、ABB、霍尼韦尔高低压变频器\软启动器销售商
          </li>
          <li>
            施耐德高低压电气产品销售商
          </li>
          <li>
            霍尼韦尔、罗斯蒙特、E+H变送器和流量仪表销售
          </li>
          <li>
            VEGA雷达料位计和料位开关销售和系统集成
          </li>
          <li>
            法国世感（SCAIME）称重仪表销售和系统集成
          </li>
          <li>
            以及其他合作品牌的系统集成和销售
          </li>
        </ul>
      </div>
      <div className={"General-image-group"}>
        <Row>
          <Col xs={3}>
            <img src={img1} alt="image1" className={"General-image"}/>
          </Col>
          <Col xs={3}>
            <img src={img2} alt="image2" className={"General-image"}/>
          </Col>
          <Col xs={3}>
            <img src={img3} alt="image3" className={"General-image"}/>
          </Col>
          <Col xs={3}>
            <img src={img4} alt="image4" className={"General-image"}/>
          </Col>
        </Row>
        <Row>
          <Col xs={3}>
            <img src={img5} alt="image5" className={"General-image"}/>
          </Col>
          <Col xs={3}>
            <img src={img6} alt="image6" className={"General-image"}/>
          </Col>
          <Col xs={3}>
            <img src={img7} alt="image7" className={"General-image"}/>
          </Col>
          <Col xs={3}>
            <img src={img8} alt="image8" className={"General-image"}/>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Info;