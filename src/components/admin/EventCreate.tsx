import React from 'react';
import axios from 'axios';
import { Link, useNavigate} from "react-router-dom";
import {Button,Col, Container, Form, Row} from "react-bootstrap";


export default function EventUpdate() {
    const navigate =  useNavigate() 
    const [artist, setArtist] = React.useState<string>();
    const [tour, setTour] = React.useState<string>();
    const [type, setType] = React.useState<string>();
    const [date, setDate] = React.useState<string>();
    const [place, setPlace] = React.useState<string>();
    const [price, setPrice] = React.useState<string>();

    const Create = () => {

        if (!artist) {
            alert('Please enter artist');
            return;
          }
        if (!tour) {
            alert('Please enter tour');
            return;
          }
        if (!type) {
            alert('Please enter type');
            return;
          }
        if (!date) {
            alert('Please enter date');
            return;
          }
        if (!place) {
            alert('Please enter place');
            return;
          }
          
        axios.defaults.headers.put['Access-Control-Allow-Origin'] = '*'
        axios.defaults.headers.put['Content-Type' ] = 'application/json'
        axios.post('http://localhost:3030/concerts', {artist, tour, type, date, place, price }).then(
        ({data}) => {
            console.log({data})
            alert('Event created successfully')
        },
        (err) => alert(err))

        navigate('/admin/concerts')
        window.location.reload()
    }
  return (
    <Container>
    <Row>
    <Col lg={{ span: 6, offset: 4 }} className="register">
      <h1>CREATE AN EVENT</h1>
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
        <Button variant="warning" onClick={() => Create()}>Create</Button>
      </Form>
      <br></br>
      <Link to={{pathname:"/admin/concerts"}}>Return To Concert's List</Link>
    </Col>
  </Row>
  </Container>
);
}
