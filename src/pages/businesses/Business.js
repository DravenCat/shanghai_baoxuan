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
                  <Link to={"/business"} className={"General-nav-link"}>业务产品总览表</Link>
                </li>
                <br/>
                <li>
                  <Link to={"/business/electrical"} className={"General-nav-link"}>电气业务</Link>
                  <ul>
                    <li>
                      <a href={"/business/electrical#DCS_PLC"} className={"General-nav-link"}>DCS/PLC系统集成</a>
                    </li>
                    <li>
                      <a href={"/business/electrical#convertor"} className={"General-nav-link"}>变频器/柜与电机</a>
                    </li>
                    <li>
                      <a href={"/business/electrical#powersystem"} className={"General-nav-link"}>电力系统器/柜</a>
                    </li>
                    <li>
                      <a href={"/business/electrical#lightingsystem"} className={"General-nav-link"}>灯具与照明系统</a>
                    </li>
                  </ul>
                </li>
                <br/>
                <li>
                  <Link to={"/business/instrument"} className={"General-nav-link"}>热工、仪表自控业务</Link>
                  <ul>
                    <li>
                      <a href={"/business/instrument#transmitter"} className={"General-nav-link"}>测量/分析/检测仪表</a>
                    </li>
                    <li>
                      <a href={"/business/instrument#solution"} className={"General-nav-link"}>液压与气动方案</a>
                    </li>
                    <li>
                      <a href={"/business/instrument#valve"} className={"General-nav-link"}>阀门集成方案与备件</a>
                    </li>
                    <li>
                      <a href={"/business/instrument#burner"} className={"General-nav-link"}>燃烧器及其备件</a>
                    </li>
                    <li>
                      <a href={"/business/instrument#monitor"} className={"General-nav-link"}>监控系统</a>
                    </li>
                  </ul>
                </li>
                <br/>
                <li>
                  <Link to={"/business/other"} className={"General-nav-link"}>其他自动化业务</Link>
                  <ul>
                    <li>
                      <a href={"/business/other#vibration"} className={"General-nav-link"}>电磁振动设备</a>
                    </li>
                    <li>
                      <a href={"/business/other#filter"} className={"General-nav-link"}>除尘配件和整机设备</a>
                    </li>
                  </ul>
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