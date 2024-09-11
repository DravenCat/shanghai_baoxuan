import homePageImg from "../img/homePageImg3.png"
import logo from "../img/logo.png"

import './Home.css'
import {Button, Card, Col, Dropdown, DropdownToggle, NavLink, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";


function Home() {
  return(
    <div className="Home">
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
              <Nav>
                <NavDropdown
                  // className={"Home-link"}
                  id="Home-language"
                  title="Language"
                  // menuVariant="dark"
                >
                  <NavDropdown.Item href="#action/3.1">简体中文</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    English
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Col>
          </Row>
        </div>
      </header>
      <div className={"Home-body"}>
        <img src={homePageImg} alt="Image" id={"Home-page-img"}/>
        <Row className={"Home-content"}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Row>
      </div>
    </div>
  );
}

export default Home;