import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation() {

  return (
    <Navbar expand="lg" className="bg-body-tertiary" fixed={"top"}>
      <Container>
        <Navbar.Brand href="/">
          <img src={require("../img/logo.png")} alt="ShanghaiBaoXuan"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" >首页</Nav.Link>
            <Nav.Link href="/profile">公司详情</Nav.Link>
            <NavDropdown title="业务详情" id="basic-nav-dropdown">
              <NavDropdown.Item href="/business">业务总览</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/business/electrical">电气业务</NavDropdown.Item>
              <NavDropdown.Item href="/business/instrument">
                热工、仪表自控业务
              </NavDropdown.Item>
              <NavDropdown.Item href="/business/other">其他自动化业务</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/contact">联系方式</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <NavDropdown title="语言/Language" id="language-drop-down">
            <NavDropdown.Item id="language-chinese" >简体中文</NavDropdown.Item>
            <NavDropdown.Item id="language-english" >English</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;