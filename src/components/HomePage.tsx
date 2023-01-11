import React from 'react';
import axios from 'axios';
import {useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter as Router, Route,Link} from "react-router-dom";
import {Button, Navbar, Col, Container, Form, Row, Nav, NavDropdown, InputGroup} from "react-bootstrap";
import Sidebar from './SideBar';
import CarouselMod from './Caroussel';
import '../style/Home.css';
import Concert from './Concert';
import SearchBar from './SearchBar';
import NavBar from './NavBar';


export const Home= () =>{

    return (

      <div>
        <Container fluid>

          <Navbar bg="light" expand="lg">

          <Navbar.Brand href="/">Show Time</Navbar.Brand>

          <Col xs={4}>
            <Form.Control placeholder="Search" />
             </Col>
                <Col>
                <button type="button" className="btn btn-warning">
                <svg width="15px" height="15px">
                    <path d="M11.618 9.897l4.224 4.212c.092.09.1.23.02.312l-1.464 1.46c-.08.08-.222.072-.314-.02L9.868 11.66M6.486 10.9c-2.42 0-4.38-1.955-4.38-4.367 0-2.413 1.96-4.37 4.38-4.37s4.38 1.957 4.38 4.37c0 2.412-1.96 4.368-4.38 4.368m0-10.834C2.904.066 0 2.96 0 6.533 0 10.105 2.904 13 6.486 13s6.487-2.895 6.487-6.467c0-3.572-2.905-6.467-6.487-6.467 "></path>
                </svg>
                </button>
                </Col>

            <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/login">Login</Nav.Link>
                  <Nav.Link href="/register">Register</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>

            </Navbar>

         <NavBar></NavBar>

          <Row className="flex xl nowrap">
            <Col xs={2} id="sidebar-wrapper">
                  <Sidebar />
            </Col>
            <Col xs={10} id="page-content-wrapper">
              <div className='carousel_band'>
              <CarouselMod/>
              </div>
              <div className='concert-wrapper'>
              <Concert></Concert>
              </div>
            </Col>
          </Row>
        </Container>
        </div>
      );


}


export default Home;