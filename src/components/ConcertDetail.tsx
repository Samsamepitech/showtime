import React from 'react';
import axios from 'axios';
import {useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams, Link } from "react-router-dom";
import {Button, Navbar, Col, Container, Form, Row, Nav, NavDropdown, InputGroup, Card, CardImg} from "react-bootstrap";
import Sidebar from './SideBar';
import '../style/Home.css';
import '../style/ConcertPage2.css';
import NavBar from './NavBar';
import TypeData from '../types/api.types';


export const ConcertDetail = () =>{
    const { concert_id } = useParams()
    const author = localStorage.getItem('user_id')
    const [concerts, setConcerts] = useState<TypeData>();
    const [users, setUsers] = useState<TypeData>();
    // fetch all concerts from data
    useEffect(() => {
      //setConcerts(true);
      const getConcerts = () => {
    
        var requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
        
        fetch("http://localhost:3030/concerts/"  + `${concert_id}`, {
          method: 'GET',
          redirect: 'follow'
        })
          .then(response => response.json())
          .then(result => setConcerts(result))
          .catch(error => console.log('error', error));
      }
        // console.log(concerts)
        //.then(setConcerts(false));
        const getUsers = () => {
    
          var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("http://localhost:3030/auth/"  + `${localStorage.getItem('user_id')}`, {
            method: 'GET',
            redirect: 'follow'
          })
            .then(response => response.json())
            .then(result => setUsers(result))
            .catch(error => console.log('error', error));
        }
        getConcerts()
        getUsers()
          // console.log(concerts)
          //.then(setConcerts(false));
    }, []);

    const Buy = () => {
        if (concerts === undefined) return null
        if (users === undefined) return null
        var tour = concerts.tour
        var price = concerts.price
        var artist = concerts.artist
        var date = concerts.date
        var place = concerts.place
        var type = concerts.type
        var lastName = users.lastName

        axios.post('http://localhost:3030/bookings', {concert_id, author, tour, price,artist,date, place,type, lastName  }).then(
        ({data}) => {
            console.log({data})
            alert('Booking created successfully')
        },
        (err) => alert('error'))
    }
    if (author === undefined) return null
    if (concerts === undefined) return null
   
return (
<div>

    <Container fluid >
    <NavBar></NavBar>
    <Card style={{ width: '20rem' }} className='card-wrap-1'>
        <CardImg style={{ width: '18rem' }} className="img-concert" src="../images/show.png"></CardImg>
        <Card.Body>
      <><Card.Title className='concert-title'> {concerts.tour} </Card.Title><Card.Text className='artist'> {concerts.artist} </Card.Text><h5> {concerts.date} </h5></>
      <h6> ${concerts.price} </h6>
      {localStorage.getItem('user_id') != null ?
      <Button variant="primary" onClick={() => Buy()}>Buy ticket</Button> 
      : <Button variant="primary"><Link to={{ pathname: '/login' }}>Login to Buy</Link></Button> }
      </Card.Body>
    </Card>
    </Container>
    <Container >
         <Col xs={6} className='salle-wrap'>
             <CardImg className='salle' src="../images/PlanSalle_numéroté_vF.jpg"/>
         </Col>
    </Container>
</div>
)

}

export default ConcertDetail; 