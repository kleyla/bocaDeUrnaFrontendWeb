import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Container>
          <Row>
            <Col md="">
              <h1 className="title">Karen Rodriguez•</h1>
              <h2>Ingenieria de Software 1</h2>
            </Col>
            <Col md="3">
              <Nav>
                <NavItem>
                  <NavLink to="/" tag={Link}>
                    Inicio
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/login-page" tag={Link}>
                    Login
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/register-page" tag={Link}>
                    Registrate
                  </NavLink>
                </NavItem>                
              </Nav>
            </Col>
            <Col md="3">
              <Nav>
                <NavItem>
                  <NavLink href="#">
                    Contactanos
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">
                    Sobre nosotros
                  </NavLink>
                </NavItem>
                
                <NavItem>
                  <NavLink href="#">
                    Terminos y Condiciones
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
            
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;
