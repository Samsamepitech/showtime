import React from 'react';
import {Link} from "react-router-dom";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import '../style/Register.css';

export const Register = () => {

  const navigate = useNavigate();
  const [firstName, setFirstname] = React.useState<string>();
  const [lastName, setLastname] = React.useState<string>();
  const [email, setEmail] = React.useState<string>();
  const [password, setPassword] = React.useState<string>();
  const [confirmPassword, setConfirmPassword] = React.useState<string>();
  const [phoneNumber, setPhonenumber] = React.useState<string>();
  const uRole = "0";


  const onSubmit = () => {
    if (!firstName) {
      alert('Please enter firstname');
      return;
    }
    if (!lastName) {
        alert('Please enter lastname');
        return;
      }
    if (!email || !email.length) {
      alert('Please enter email id');
      return;
    }
    if (!password || !password.length) {
      alert('Please enter password');
      return;
    }
    if (!confirmPassword || !confirmPassword.length || confirmPassword !== password) {
      alert('Password not confirmed');
      return;
    }
    if (!phoneNumber || !phoneNumber.length) {
        alert('Please enter password');
        return;
    }
    axios.post('http://localhost:3030/auth/signup', {firstName,lastName,email,password,confirmPassword,phoneNumber, uRole}).then(
      ({data}) => {
        console.log({data})
        alert('User created successfully')
      },
      (err) => alert('error'),
    );
    navigate('/')
  }


  return (
    <Container>
      <Row>
        <Col lg={{ span: 6, offset: 4 }} className="register">
          <h1>REGISTER</h1>
          <br/>
          <br/>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter firstname" onChange={(e) => setFirstname(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter lastname" onChange={(e) => setLastname(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>New Password</Form.Label>
              <Form.Control type="password" placeholder="Password"onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Enter Password again</Form.Label>
              <Form.Control type="password" placeholder="Password"onChange={(e) => setConfirmPassword(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="text" placeholder="Phone number"onChange={(e) => setPhonenumber(e.target.value)} />
            </Form.Group>
            <Button variant="warning" onClick={() => onSubmit()}>Signup</Button>
            <br/>
            <br/>
            <Link to={{pathname: '/login'}}>
              Login now!
            </Link>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;