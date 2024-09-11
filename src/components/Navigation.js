import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" fixed={"top"}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={require("../img/logo.png")} alt="ShanghaiBaoXuan"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" >首页</Nav.Link>
            <Nav.Link href="/profile">公司简介</Nav.Link>
            <Nav.Link href="/business">业务范围</Nav.Link>
            <Nav.Link href="/contact">联系方式</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <NavDropdown title="语言/Language" id="language-drop-down">
            <NavDropdown.Item id="language-chinese" href="#action/3.1">简体中文</NavDropdown.Item>
            <NavDropdown.Item id="language-english" href="#action/3.2">English</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;