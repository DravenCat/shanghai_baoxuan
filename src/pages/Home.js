import homePageImg from "../img/homePageImg.png"
import logo from "../img/logo.png"

import './Home.css'
import {Button, Col, Dropdown, NavLink, Row} from "react-bootstrap";
import {Link} from "react-router-dom";


function Home() {
  return(
    <div className="App">
      <header>
        <div className={"Home-header"}>
          <Row className={"Home-row"}>
            <Col id={"Home-logo"} lg={4}>
              <img src={logo} alt="Baoxuan"/>
            </Col>
            <Col lg={4} className={"Home-nav"} id={"Home-title"}>
              上海宝宣自动化控制系统有限公司
            </Col>
          </Row>
          <Row className={"Home-row"}>

            <Col className={"Home-nav"} lg={10}>
              <Link to={'/'} className={"Home-link"}>首页</Link>
              <Link to={'/profile'} className={"Home-link"}>公司简介</Link>
              <Link to={'/business'} className={"Home-link"}>业务范围</Link>
              <Link to={'/contact'} className={"Home-link"}>联系方式</Link>
            </Col>
            <Col lg={2}>
              <Dropdown>
                language

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
        </div>
      </header>
      <div className={"Home-body"}>
        <div className={"Home-content"}>

          <img src={homePageImg} alt="background" className="Home-image" />
        </div>

      </div>
    </div>
  );
}

export default Home;