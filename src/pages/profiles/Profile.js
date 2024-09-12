import "./Profile.css"

import Info from "./Info"
import {Link, Route, Routes} from "react-router-dom";
import Location from "./Location";
import {Col, Row} from "react-bootstrap";
import Brand from "./Brand";


function Profile() {
  return(
    <div className={'Profile-body'}>
      <div className={"Profile-background"}>
        <Row>
          <Col lg={2}>
            <div className={"Profile-nav"}>
              <ul className={"Profile-nav-links"}>
                <li>
                  <Link to={"/profile"} className={"Profile-nav-link"}>公司简介</Link>
                </li>
                <li>
                  <Link to={"/profile/location"} className={"Profile-nav-link"}>地址信息</Link>
                </li>
                <li>
                  <Link to={"/profile/brand"} className={"Profile-nav-link"}>合作品牌</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={10}>
            <Routes>
              <Route path={"/"} element={<Info />} />
              <Route path={"/location"} element={<Location />}/>
              <Route path={"/brand"} element={<Brand />} />
            </Routes>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Profile;