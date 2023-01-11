import React from 'react';
import {useState, useEffect } from 'react';
import {Link, useNavigate, useParams } from "react-router-dom";
import {Button,Navbar, CardImg, Container, Card, Nav, NavDropdown} from "react-bootstrap";
import { confirm } from "react-confirm-box";
import '../style/ReadBooking.css'
import TypeData from '../types/api.types';
import axios from '../api/axios';
import QRCode from "qrcode.react"

export const MyBooking= () =>{


  const [bookings, setBookings] = useState<TypeData>();
  const { id } = useParams()

  useEffect(() => {

    const getBooking = () => {
      fetch(`http://localhost:3030/bookings/${id}` , {
        method: 'GET',
        redirect: 'follow'
      })
        .then(response => response.json())
        .then(result => setBookings(result))
        .catch(error => console.log('error', error));
    }
    
    getBooking()

  }, []);
 
    if(bookings === undefined) {return null}

    return ( 
      <Container>
          <div className="mainbook">
          <div className="container">
            <h1 className="booktitle">
              MY BOOKING
            </h1>
                <div className="booking">
                <div className="lastName">
                <label>LAST NAME</label>
                  <div className="lN"> 
                  { bookings.lastName }
                  </div>
                </div>
                <div className="artist">
                <label>ARTIST</label>
                  <div className="A"> 
                  { bookings.artist }
                  </div>
                </div>
                <div className="type">
                <label>TYPE</label>
                  <div className="ty"> 
                  { bookings.type }
                  </div>
                </div>
                <div className="tour">
                <label>TOUR</label>
                  <div className="to"> 
                  { bookings.tour }
                  </div>
                </div>
                <div className="date">
                <label>DATE</label>
                  <div className="da"> 
                  { bookings.date }
                  </div>
                </div>
                <div className="place">
                <label>PLACE</label>
                  <div className="pl"> 
                  { bookings.place }
                  </div>
                </div>
                <div className="price">
                <label>PRICE</label>
                  <div className="pri"> 
                  ${ bookings.price }
                  </div>
                </div>
                </div>
          </div>
        </div>
      </Container>
    
    );
  }

  export default MyBooking;