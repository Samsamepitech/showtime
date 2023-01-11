import React from 'react';
import axios from 'axios';
import { Link, useNavigate} from "react-router-dom";
import {Button,Navbar, Col, Container, Form, Row, Nav, NavDropdown} from "react-bootstrap";
import '../style/UpdateMyAccount.css'


export const UpdateMyAccount= () =>{


    const navigate =  useNavigate() 

    const [email, setEmail] = React.useState<string>();
    //const [password, setPassword] = React.useState<string>();
    //const [confirmPassword, setConfirmPassword] = React.useState<string>();
    const [firstName, setFirstName] = React.useState<string>();
    const [lastName, setLastName] = React.useState<string>();
    const [phoneNumber, setPhoneNumber] = React.useState<string>();

    const Submit = () => {


          /*if (!confirmPassword || !confirmPassword.length || confirmPassword !== password) {
            alert('Password not confirmed');
            return;
          }
          else {
            const passwordhash = bcrypt.hashSync(password, bcrypt.genSaltSync())*/
          
    

    axios.defaults.headers.put['Access-Control-Allow-Origin'] = '*'
    axios.defaults.headers.put['Content-Type' ] = 'application/json'
    axios.put('http://localhost:3030/auth/update/' + `${localStorage.getItem('user_id')}`, {firstName, lastName, email, phoneNumber }).then(
      ({data}) => {
        console.log({data})
        alert('Account updated successfully')
      },
      (err) => alert(err))
    }
  //}


  const Logout = () => {
    if (window.confirm('Sure you want to logout?')) {
      localStorage.removeItem('user_id');
      localStorage.removeItem('accessToken')
      localStorage.removeItem('role');
    }
    navigate('/');

  }

    return ( 
      <Container>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/">Show Time</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <NavDropdown title="Account" id="basic-nav-dropdown">
                  <NavDropdown.Item onClick={() => Logout()}>Logout</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Row>
        <Col lg={{ span: 6, offset: 4 }} className="register">
          <h1>UPDATE YOUR INFORMATIONS</h1>
          <br/>
          <br/>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter firstname" onChange={(e) => setFirstName(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter lastname" onChange={(e) => setLastName(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email </Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="password" placeholder="Phone number" onChange={(e) => setPhoneNumber(e.target.value)} />
            </Form.Group>
            <Button variant="warning" onClick={() => Submit()}>Validate</Button>
            <br/>
            <br/>
            <Link to={{pathname: '/account'}}>
              Return to My Account
            </Link>
          </Form>
        </Col>
      </Row>
      </Container>
    );
  }

  export default UpdateMyAccount;