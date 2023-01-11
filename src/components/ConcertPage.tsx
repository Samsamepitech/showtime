import React from 'react';
import axios from 'axios';
import {useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter as Router, Route,Link} from "react-router-dom";
import {Button, Navbar, Col, Container, Form, Row, Nav, NavDropdown, InputGroup, Card, CardImg} from "react-bootstrap";
import Sidebar from './SideBar';
import '../style/Home.css';
import '../style/ConcertPage.css';
import NavBar from './NavBar';
import TypeData from '../types/api.types';


export const ConcertPage = () =>{

    const [concerts, setConcerts] = useState<Array<TypeData>>([]);

    // fetch all concerts from data
    useEffect(() => {
      //setConcerts(true);
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
        // console.log(concerts)
        //.then(setConcerts(false));
    }, []);

return (
<div>

    <Container fluid >
    <NavBar></NavBar>
    <Card style={{ width: '48rem' }} className='card-wrap'>
        <CardImg style={{ width: '18rem' }} className="img-concert" src="../images/juliette-armanet-SLIDE-multiple-200422.jpg"></CardImg>
        <Card.Body>
        {concerts.map((concert : any)=>{ return (
      <><Card.Title className='concert-title'> {concert.tour} </Card.Title><Card.Text className='artist'> {concert.artist} </Card.Text><h5> {concert.date} </h5></>) })}
      <Button variant="primary">Buy ticket</Button>
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

export default ConcertPage;