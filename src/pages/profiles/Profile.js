import "../General.css"

import Info from "./Info"
import {Link, Navigate, Route, Routes} from "react-router-dom";
import Location from "./Location";
import {Col, Row} from "react-bootstrap";
import Brand from "./Brand";


function Profile() {

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


  return (
    <div className={'General-body'}>
      <div className={"General-background"}>
        <Row>
          <Col lg={2}>
            {isChinese ?
              <div className={"General-nav Profile-nav"}>

                <ul className={"General-nav-links"}>
                  <li>
                    <Link to={"/profile"} className={"General-nav-link"}>公司简介</Link>
                  </li>
                  <li>
                    <Link to={"/profile/location"} className={"General-nav-link"}>地址信息</Link>
                  </li>
                  <li>
                    <Link to={"/profile/brand"} className={"General-nav-link"}>合作品牌</Link>
                  </li>
                </ul>
              </div>
              :
              <div className={"General-nav-en Profile-nav-en"}>
                <ul className={"General-nav-links-en Profile-nav-links-en"}>
                  <li>
                    <Link to={"/profile?language=en"} className={"General-nav-link"}>Company Profile</Link>
                  </li>
                  <li>
                    <Link to={"/profile/location?language=en"} className={"General-nav-link"}>Address</Link>
                  </li>
                  <li>
                    <Link to={"/profile/brand?language=en"} className={"General-nav-link  "}>Cooperation Brand</Link>
                  </li>
                </ul>

              </div>
            }
          </Col>
          <Col lg={10}>
            <Routes>
              <Route path={"/"} element={<Info/>}/>
              <Route path={"/location"} element={<Location/>}/>
              <Route path={"/brand"} element={<Brand/>}/>
              <Route path="*" element={<Navigate to="/" replace={true}/>}/>
            </Routes>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Profile;