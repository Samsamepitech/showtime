import React from 'react';
import axios from 'axios';
import {useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import {Button, Navbar, Col, Container, Form, Row, Nav, NavDropdown, InputGroup} from "react-bootstrap";
import '../style/Home.css';
import SearchBar from './SearchBar';



export const NavBar = () => {

  const navigate =  useNavigate() 

  const Logout = () => {
    if (window.confirm('Sure you want to logout?')) {
      localStorage.removeItem('user_id');
      localStorage.removeItem('accessToken')
      localStorage.removeItem('role');
    }
    navigate('/');

  }

    return (
        <>
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/"><img src="../images/ticketcorner.png"/> </Navbar.Brand>
          <SearchBar></SearchBar>
        
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                {localStorage.getItem('user_id') != null ? 
                <div className="parent">
                <Nav.Link onClick={() => Logout()}><h5>Logout</h5></Nav.Link>
                <Nav.Link href="/account"><h5>MyAccount</h5></Nav.Link></div> : <Nav.Link href="/login"><h5>Login</h5></Nav.Link> }
                {localStorage.getItem('role') === '1' ? 
                <Nav.Link href="/admin"><h5>Back Office</h5></Nav.Link> : null }
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </>
    )
}
export default NavBar;