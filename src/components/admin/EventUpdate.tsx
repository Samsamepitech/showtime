import React from 'react';
import axios from 'axios';
import { Link, useParams} from "react-router-dom";
import {Button,Col, Container, Form, Row,} from "react-bootstrap";

export default function EventUpdate() {

    
    const { id } = useParams()
    const [artist, setArtist] = React.useState<string>();
    const [tour, setTour] = React.useState<string>();
    const [type, setType] = React.useState<string>();
    const [date, setDate] = React.useState<string>();
    const [place, setPlace] = React.useState<string>();
    const [price, setPrice] = React.useState<string>();

    
    const Submit = () => {
          
    axios.defaults.headers.put['Access-Control-Allow-Origin'] = '*'
    axios.defaults.headers.put['Content-Type' ] = 'application/json'
    axios.put('http://localhost:3030/concerts/' + `${id}`, {artist, tour, type, date, place, price }).then(
      ({data}) => {
        console.log({data})
        alert('Event updated successfully')
      },
      (err) => alert(err))
    }


  if (localStorage.getItem('role') === "1")
  return (
    <Container>
    <Row>
    <Col lg={{ span: 6, offset: 4 }} className="register">
      <h1>UPDATE EVENT'S INFORMATIONS</h1>
      <br/>
      <br/>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Artist</Form.Label>
          <Form.Control type="text" placeholder="Enter artist" onChange={(e) => setArtist(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Tour</Form.Label>
          <Form.Control type="text" placeholder="Enter tour" onChange={(e) => setTour(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Type </Form.Label>
          <Form.Control type="text" placeholder="Enter type" onChange={(e) => setType(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Date</Form.Label>
          <Form.Control type="text" placeholder="Enter date" onChange={(e) => setDate(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Place</Form.Label>
          <Form.Control type="text" placeholder="Enter place" onChange={(e) => setPlace(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Price</Form.Label>
          <Form.Control type="text" placeholder="Enter price" onChange={(e) => setPrice(e.target.value)} />
        </Form.Group>
        <Button variant="warning" onClick={() => Submit()}>Validate</Button>
        <br/>
        <br/>
        <Link to={{pathname: '/admin/concerts'}}>
          Return to event list
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

