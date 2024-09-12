import "../General.css"
import "./Business.css"
import {Col, Row} from "react-bootstrap";
import {Link, Navigate, Route, Routes} from "react-router-dom";
import Electrical from "./Electrical";
import Instrument from "./Instrument";
import Other from "./Other";
import Summary from "./Summary";


function Business() {
  return(
    <div className={"General-body"}>
      <div className={"General-background"}>
        <Row>
          <Col lg={2}>
            <div className={"General-nav Business-nav"}>
              <ul className={"General-nav-links"}>
                <li>
                  <Link to={"/business/electrical"} className={"General-nav-link"}>电气业务</Link>
                </li>
                <li>
                  <Link to={"/business/instrument"} className={"General-nav-link"}>热工、仪表自控业务</Link>
                </li>
                <li>
                  <Link to={"/business/other"} className={"General-nav-link"}>其他自动化业务</Link>
                </li>
                <li>
                  <Link to={"/business"} className={"General-nav-link"}>业务总览</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={10}>
            <Routes>
              <Route path={"/"} element={<Summary />} />
              <Route path={"/electrical"} element={<Electrical />} />
              <Route path={"/instrument"} element={<Instrument />}/>
              <Route path={"/other"} element={<Other />} />
              <Route path="*" element={<Navigate to="/" replace={true}/>} />
            </Routes>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Business;