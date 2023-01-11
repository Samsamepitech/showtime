import React from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams} from "react-router-dom";
import {Button,Navbar, Col, Container, Form, Row, Nav, NavDropdown} from "react-bootstrap";

export default function UserUpdate() {
    const { id } = useParams()
    const [email, setEmail] = React.useState<string>();
    //const [password, setPassword] = React.useState<string>();
    //const [confirmPassword, setConfirmPassword] = React.useState<string>();
    const [firstName, setFirstName] = React.useState<string>();
    const [lastName, setLastName] = React.useState<string>();
    const [phoneNumber, setPhoneNumber] = React.useState<string>();
    const [uRole, setuRole] = React.useState<string>();

    const Submit = () => {


          /*if (!confirmPassword || !confirmPassword.length || confirmPassword !== password) {
            alert('Password not confirmed');
            return;
          }
          else {
            const passwordhash = bcrypt.hashSync(password, bcrypt.genSaltSync())*/
          
    

    axios.defaults.headers.put['Access-Control-Allow-Origin'] = '*'
    axios.defaults.headers.put['Content-Type' ] = 'application/json'
    axios.put('http://localhost:3030/auth/update/' + `${id}`, {firstName, lastName, email, phoneNumber, uRole }).then(
      ({data}) => {
        console.log({data})
        alert('Account updated successfully')
      },
      (err) => alert(err))
    }
  if (localStorage.getItem('role') === "1")
  return (
    <Container>
    <Row>
    <Col lg={{ span: 6, offset: 4 }} className="register">
      <h1>UPDATE USER'S INFORMATIONS</h1>
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
          <Form.Control type="text" placeholder="Phone number" onChange={(e) => setPhoneNumber(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Role</Form.Label>
          <Form.Control type="text" placeholder="Admin = 1 - User = 0" onChange={(e) => setuRole(e.target.value)} />
        </Form.Group>
        <Button variant="warning" onClick={() => Submit()}>Validate</Button>
        <br/>
        <br/>
        <Link to={{pathname: '/admin/users'}}>
          Return to My Account
        </Link>
      </Form>
    </Col>
  </Row>
  </Container>
);
else
return (
  <div> YOU ARE NOT AUTHORIZED</div>
  
)
}
