import React from "react";
import {CardImg, Nav} from "react-bootstrap";
import axiosRequest from "../api/Requests";
import { apiUrl } from "../api/axios-ask";
import { useRef, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import '../style/Sidebar.css'


export const Sidebar = () => {

    const [concerts, setConcerts] = useState("");



    return (
    <>
            <Nav className="col-md-12 d-none d-md-block sidebar"
            activeKey="/home">
                <div className="sidebar-sticky"></div>
            <Nav.Item as="li">
                <Nav.Link eventKey="Pop Rock" className="nav-li"> <Link to={{pathname: `/concert/rock`}}><h4> </h4></Link></Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link eventKey="Jazz Blues Funk" className="nav-li"> <Link to={{pathname: `/concert/pop`}}><h4> </h4></Link></Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link eventKey="Folklore Gospel" className="nav-li"><Link to={{pathname: `/concert/urbain`}}><h4></h4></Link></Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link eventKey="Open Air" className="nav-li"><Link to={{pathname: `/concert/classique`}}><h4></h4></Link></Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link eventKey="Heavy Metal" className="nav-li"><Link to={{pathname: `/concert/hardrock`}}><h4></h4></Link></Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link eventKey="Hip-hop Rap" className="nav-li"><Link to={{pathname: `/concert/electro`}}><h4></h4></Link></Nav.Link>
                <Nav.Link eventKey="Pop Rock" className="nav-li"> <Link to={{pathname: `/concert/rock`}}><h4> Rock</h4></Link></Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link eventKey="Jazz Blues Funk" className="nav-li"> <Link to={{pathname: `/concert/pop`}}><h4> Pop</h4></Link></Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link eventKey="Folklore Gospel" className="nav-li"><Link to={{pathname: `/concert/urbain`}}><h4>Urbain</h4></Link></Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link eventKey="Open Air" className="nav-li"><Link to={{pathname: `/concert/classique`}}><h4>Classique</h4></Link></Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link eventKey="Heavy Metal" className="nav-li"><Link to={{pathname: `/concert/hardrock`}}><h4>Hard Rock</h4></Link></Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link eventKey="Hip-hop Rap" className="nav-li"><Link to={{pathname: `/concert/electro`}}><h4>Electro</h4></Link></Nav.Link>
            </Nav.Item>
            </Nav>
        </>
        );
    }


  export default Sidebar