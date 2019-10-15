import React, { Component } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import rpc from "../img/rpc.jpg";

class MainNavBar extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand id="brand" href="#home">
          Rock Paper Scissors
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Form inline>
            <text type="text" placeholder="Search" className="mr-sm-2" />
            <img id="rpcImg" src={rpc}></img>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default MainNavBar;
