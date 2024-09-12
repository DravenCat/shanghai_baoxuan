import {Col, Row} from "react-bootstrap";

import siemens from "../../img/brand/siemens.png";
import abb from "../../img/brand/abb.png";
import ab from "../../img/brand/a-b.png";
import rockwell from "../../img/brand/rockwell.png";
import schneider from "../../img/brand/schneider.png";
import honeywell from "../../img/brand/honeywell.png";
import panasonic from "../../img/brand/panasonic.png";
import lenze from "../../img/brand/lenze.png";
import pba from "../../img/brand/pba.png";
import wittenstein from "../../img/brand/wittenstein.png";
import leadrack from "../../img/brand/LeadRack.png";
import ge from "../../img/brand/GE.png";
import danfoss from "../../img/brand/danfoss.png";
import wanshsin from "../../img/brand/wanshsin.png";
import eh from "../../img/brand/e-plus-h.png";
import emerson from "../../img/brand/emerson.png";
import festo from "../../img/brand/festo.png";
import alre from "../../img/brand/alre.png";
import belimo from "../../img/brand/belimo.png";
import smc from "../../img/brand/smc.png";
import norgren from "../../img/brand/norgren.png";
import moxa from "../../img/brand/moxa.png";
import phoenix from "../../img/brand/phoenix.png";
import weldmuller from "../../img/brand/weidmiiller.png";
import omron from "../../img/brand/omron.png";
import mitsubishi from "../../img/brand/mitsubishi.png";
import yaskawa from "../../img/brand/yaskawa.png";
import nord from "../../img/brand/nord.png";
import sew from "../../img/brand/sew.png";
import skf from "../../img/brand/skf.png";
import ntn from "../../img/brand/ntn.png";
import fag from "../../img/brand/fag.png";
import iinaa from "../../img/brand/iinaa.png";
import nsk from "../../img/brand/nsk.png";
import idec from "../../img/brand/idec.png";
import eaton from "../../img/brand/eaton.png";
import rexroth from "../../img/brand/Rexroth.png";
import paker from "../../img/brand/paker.png";


function Brand() {
  return(
    <div className={"Profile-content"}>
      <div className={"Profile-title"}>
        合作品牌
      </div>
      <hr className={"Profile-hr"}/>
      <div className={"Brand-image-group"}>
        {/* Row 1*/}
        <Row>
          <Col xs={2}>
            <img src={siemens} alt="Siemens" className={"Brand-image"}/>
          </Col>
          <Col xs={2}>
            <img src={abb} alt="ABB" className={"Brand-image"}/>
          </Col>
          <Col xs={3}>
            <img src={ab} alt="Allen-Bradley" className={"Brand-image"}/>
          </Col>
          <Col xs={3}>
            <img src={rockwell} alt="Rockwell" className={"Brand-image"}/>
          </Col>
          <Col xs={2}>
            <img src={pba} alt="PBA" className={"Brand-image"}/>
          </Col>
        </Row>

        {/* Row 2*/}
        <Row>
          <Col xs={3}>
            <img src={schneider} alt="Schneider" className={"Brand-image"}/>
          </Col>
          <Col xs={3}>
            <img src={honeywell} alt="Honeywell" className={"Brand-image"}/>
          </Col>

          <Col xs={2}>
            <img src={paker} alt="Paker Automation" className={"Brand-image"}/>
          </Col>
          <Col xs={2}>
            <img src={lenze} alt="Lenze" className={"Brand-image"}/>
          </Col>
          <Col xs={2}>
            <img src={leadrack} alt="LEADRACK" className={"Brand-image"}/>
          </Col>
        </Row>

        {/* Row 3*/}
        <Row>
          <Col xs={2}>
            <img src={wittenstein} alt="Wittenstein" className={"Brand-image"}/>
          </Col>
          <Col xs={1}>
            <img src={ge} alt="General Electric" className={"Brand-image"}/>
          </Col>
          <Col xs={4}>
            <img src={eh} alt="Endress+Hauser" className={"Brand-image"}/>
          </Col>
          <Col xs={2}>
            <img src={danfoss} alt="Danfoss" className={"Brand-image"}/>
          </Col>
          <Col xs={3}>
            <img src={festo} alt="FESTO" className={"Brand-image"}/>
          </Col>
        </Row>

        {/* Row 4*/}
        <Row>
          <Col xs={2}>
            <img src={wanshsin} alt="WANSHSIN" className={"Brand-image"}/>
          </Col>
          <Col xs={2}>
            <img src={emerson} alt="EMERSON" className={"Brand-image"}/>
          </Col>
          <Col xs={2}>
            <img src={alre} alt="alre" className={"Brand-image"}/>
          </Col>
          <Col xs={2}>
            <img src={belimo} alt="BELIMO" className={"Brand-image"}/>
          </Col>
          <Col xs={4}>
            <img src={norgren} alt="NORGREN" className={"Brand-image"}/>
          </Col>
        </Row>

        {/* Row 5*/}
        <Row>
          <Col xs={3}>
            <img src={smc} alt="SMC" className={"Brand-image"}/>
          </Col>
          <Col xs={3}>
            <img src={moxa} alt="MOXA" className={"Brand-image"}/>
          </Col>
          <Col xs={2}>
            <img src={fag} alt="FAG" className={"Brand-image"}/>
          </Col>
          <Col xs={2}>
            <img src={iinaa} alt="INA" className={"Brand-image"}/>
          </Col>
          <Col xs={2}>
            <img src={nsk} alt="NSK Motion & Control" className={"Brand-image"}/>
          </Col>
        </Row>

        {/* Row 6*/}
        <Row>
          <Col xs={4}>
            <img src={weldmuller} alt="Weidmuller" className={"Brand-image"}/>
          </Col>
          <Col xs={2}>
            <img src={mitsubishi} alt="MITSUBISHI ELECTRIC" className={"Brand-image"}/>
          </Col>
          <Col xs={3}>
            <img src={yaskawa} alt="YASKAWA" className={"Brand-image"}/>
          </Col>
          <Col xs={3}>
            <img src={nord} alt="NORD DRIVESYSTEMS" className={"Brand-image"}/>
          </Col>
        </Row>

        {/* Row 8*/}
        <Row>
          <Col xs={2}>
            <img src={sew} alt="SEW EURODRIVE" className={"Brand-image"}/>
          </Col>
          <Col xs={2}>
            <img src={skf} alt="SKF" className={"Brand-image"}/>
          </Col>
          <Col xs={2}>
            <img src={ntn} alt="NTN Bearings" className={"Brand-image"}/>
          </Col>
          <Col xs={3}>
            <img src={phoenix} alt="PHOENIX CONTACT" className={"Brand-image"}/>
          </Col>
          <Col xs={3}>
            <img src={omron} alt="OMRON" className={"Brand-image"}/>
          </Col>
        </Row>

        {/* Row 9*/}
        <Row>
          <Col xs={2}>
            <img src={idec} alt="IDEC" className={"Brand-image"}/>
          </Col>
          <Col xs={2}>
            <img src={eaton} alt="EATON Powering Business Worldwide" className={"Brand-image"}/>
          </Col>
          <Col xs={2}>
            <img src={rexroth} alt="Rexroth Bosch Group" className={"Brand-image"}/>
          </Col>
          <Col xs={3}>
            <img src={panasonic} alt="Panasonic" className={"Brand-image"}/>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Brand;