import React from 'react';
<<<<<<< HEAD
import {useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter as Router, Route,Link} from "react-router-dom";
import { useNavigate } from 'react-router';
import {Button,Navbar, Col, Container, Form, Row, Nav, NavDropdown} from "react-bootstrap";
=======
import {useState, useEffect } from 'react';
import {Link, useNavigate} from "react-router-dom";
import {Button,Navbar, CardImg, Container, Card, Nav, NavDropdown} from "react-bootstrap";
import { confirm } from "react-confirm-box";
>>>>>>> c74cb3b366dcbfe6c773a6ad33d351b42a8b25ef
import '../style/MyAccount.css'
import TypeData from '../types/api.types';
import axios from '../api/axios';
import QRCode from "qrcode.react"

export const MyAccount= () =>{

<<<<<<< HEAD
  const navigate = useNavigate();
  const [users, setUsers] = useState<TypeData>();
=======
  const navigate =  useNavigate() 
  const [bookings, setBookings] = useState<Array<TypeData>>([]);
  const [users, setUsers] = useState<TypeData>();
  const [concerts, setConcerts] = useState<Array<TypeData>>([]);

  // fetch all users from data
>>>>>>> c74cb3b366dcbfe6c773a6ad33d351b42a8b25ef
  useEffect(() => {

    const getUsers = () => {
      console.log(localStorage.getItem('user_id'))
      fetch("http://localhost:3030/auth/" + `${localStorage.getItem('user_id')}`, {
        method: 'GET',
        redirect: 'follow',
        headers: {'Authorization': 'Bearer ' +  `${localStorage.getItem('accessToken')}`}
      })
        .then(response => response.json())
        .then(result => setUsers(result))
        .catch(error => console.log('error', error));
    }
    getUsers()
      // console.log(concerts)
      //.then(setConcerts(false));
    const getBooking = () => {
      fetch("http://localhost:3030/bookings/byuser/" + `${localStorage.getItem('user_id')}`, {
        method: 'GET',
        redirect: 'follow'
      })
        .then(response => response.json())
        .then(result => setBookings(result))
        .catch(error => console.log('error', error));
    }
    const getConcerts = () => {

      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("http://localhost:3030/concerts", {
        method: 'GET',
        redirect: 'follow'
      })
        .then(response => response.json())
        .then(result => setConcerts(result))
        .catch(error => console.log('error', error));
    }
    getConcerts()
    getBooking()
    getUsers()

  }, []);
 

  const Logout = () => {
    if (window.confirm('Sure you want to logout?')) {
      localStorage.removeItem('user_id');
      localStorage.removeItem('accessToken')
      localStorage.removeItem('role');
    }
    navigate('/');

  }

<<<<<<< HEAD
    const Logout = () => {
      if (window.confirm('Sure you want to logout?')) {
        localStorage.removeItem('user_id');
        localStorage.removeItem('accessToken');
      }
      navigate('/');
      }
    if (users === undefined) return null
=======
  const Validate = async () => {
      const result = await confirm("Are you sure you want to delete your account ?");
      if (result) {
        axios.delete('http://localhost:3030/auth/delete/' + `${localStorage.getItem('user_id')}`).then(
          ({data}) => {
            console.log({data})
          },
          (err) => alert(' wrong credentials'))
          navigate("/");
      }
  }
  

    if(users === undefined) {return null}
    if(concerts === undefined) {return null}
    if(bookings === undefined) {return null}
>>>>>>> c74cb3b366dcbfe6c773a6ad33d351b42a8b25ef

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
        <div className="main">
          <div className="container">
            <div className="container-one">
              <div className='profile-container'>
                <h1 className="urProfile"> MY ACCOUNT </h1>
                <img className="avatar" alt="avatar" src="../images/avatar/default.jpg"/>
                <input type="file" name="updatea" className="updatea"></input>
                  <div className="profile">
                    <div className="firstName">
                      <label>FIRST NAME</label>
                        <div className="fN"> 
                        { users.firstName }
                        </div>
                    </div>
                    <div className="lastName">
                      <label>LAST NAME</label>
                        <div className="fN"> 
                        { users.lastName }
                        </div>
                    </div>
                    <div className="email">
                      <label>EMAIL</label>
                      <div className="fN">{ users.email }</div>
                      </div>
                    <div className="phone">
                      <label>PHONE NUMBER</label>
                        <div className="fN"> 
                        { users.phoneNumber }
                        </div>
                    </div>
                </div>
                <Button className="updatei"><Link to="updatei">Update your informations</Link></Button>
                <Button className="delete" onClick={() => Validate()}>Delete your account</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="main">
          <div className="container">
            <h1 className="booktitle">
              MY BOOKINGS
            </h1>
            {bookings.map((booking : any)=>{ return ( 
            <Card style={{ width: '48rem' }} className='card-wrap'>
        <QRCode value={`http://localhost:3000/booking/${booking._id}` } style={{ marginRight: 50 }}/>
        <Card.Body>
      <><Card.Title className='concert-title'> {booking.tour} </Card.Title><Card.Text className='artist'> {booking.artist} </Card.Text><h5> {booking.date} </h5></>
      <h6> ${booking.price} </h6>
      </Card.Body>
    </Card>
            ) })}
          </div>
        </div>
      </Container>
    
    );
  }

  export default MyAccount;