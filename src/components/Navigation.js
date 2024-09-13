import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useLocation} from "react-router-dom";

function Navigation() {

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


  let getURL = useLocation().pathname;

  return (
    <Navbar expand="lg" className="bg-body-tertiary" fixed={"top"}>
      <Container>
        <Navbar.Brand href={isChinese ? "/" :"/?language=en"}>
          <img src={require("../img/logo.png")} alt="ShanghaiBaoXuan"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          {isChinese ?
            <Nav className="me-auto">
              <Nav.Link href="/">首页</Nav.Link>
              <Nav.Link href="/profile">公司详情</Nav.Link>
              <NavDropdown title='业务详情' id="basic-nav-dropdown">
                <NavDropdown.Item href="/business">业务总览</NavDropdown.Item>
                <NavDropdown.Divider/>
                <NavDropdown.Item
                  href="/business/electrical">电气业务</NavDropdown.Item>
                <NavDropdown.Item href="/business/instrument">
                  热工、仪表自控业务
                </NavDropdown.Item>
                <NavDropdown.Item href="/business/other">其他自动化业务</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/contact">联系方式</Nav.Link>
            </Nav>
            :
            <Nav className="me-auto">
              <Nav.Link href="/?language=en">Home</Nav.Link>
              <Nav.Link href="/profile?language=en">Company Profile</Nav.Link>
              <NavDropdown title='Business' id="basic-nav-dropdown">
                <NavDropdown.Item href="/business?language=en">Overview</NavDropdown.Item>
                <NavDropdown.Divider/>
                <NavDropdown.Item
                  href="/business/electrical?language=en">Electrical & Automation</NavDropdown.Item>
                <NavDropdown.Item href="/business/instrument?language=en">
                  Thermal engineering & instrumentation
                </NavDropdown.Item>
                <NavDropdown.Item href="/business/other?language=en">Other</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/contact?language=en">Contact</Nav.Link>
            </Nav>
          }

        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <NavDropdown title="语言/Language" id="language-drop-down">
            <NavDropdown.Item id="language-chinese" href={getURL}>简体中文</NavDropdown.Item>
            <NavDropdown.Item id="language-english" href={getURL + '?language=en'}>English</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;