import React from 'react';
import axios from 'axios';
import {useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter as Router, Route,Link} from "react-router-dom";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import '../style/Login.css';



export const Login = () => {


  const navigate = useNavigate();
  const [email, setEmail] = React.useState<string>();
  const [password, setPassword] = React.useState<string>();


  const Submit = () => {

    if (!email) {
      alert('wrong mail');
      return;
    }
    if (!password || !password.length) {
      alert('please enter a password');

      return;
    }


    axios.post('http://localhost:3030/auth/signin', {email, password }).then(
      ({data}) => {
        console.log({data})
        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('user_id', data._id);
        localStorage.setItem('role', data.uRole);
      },
      (err) => alert(' wrong credentials'))
      navigate("/");

  }



  return (
    <Container>
      <Row >
        <Col lg={{ span: 6, offset: 4 }} className="login" >
          <h1>LOGIN</h1>
          <br/>
          <br/>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label></Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label></Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            <Button variant="warning" onClick={() => Submit()}>Login</Button>
            <br/>
            <br/>
            <p>If not member yet, please signup :</p>
            <Link to={{pathname: '/register'}}>Register</Link>
          </Form>
        </Col>

      </Row>
    </Container>
  )
  }


export default Login;
