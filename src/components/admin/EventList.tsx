import React from 'react'
import { Web, Timeline, PersonSharp, Event } from "@material-ui/icons"
import {Nav, Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import { NotificationImportantSharp, Language, Settings, DeleteForever, Update } from '@material-ui/icons';
import {useState, useEffect } from 'react';
import axios from 'axios';
import "../../style/Adminstyle/EventList.css"
import { useNavigate } from 'react-router-dom';
export default function EventList() {
    const [concerts, setConcert] = useState([]);
  
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
          .then(result => setConcert(result))
          .catch(error => console.log('error', error));
      }
      getConcerts()
        // console.log(concerts)
        //.then(setConcerts(false));
        
    }, []);
    const navigate = useNavigate();
const getRole = () => {
  if (localStorage.getItem('role') === "0")
  navigate("/");
}
getRole()
    if (concerts === undefined) return null
  return (
        <div>
          <div className='topbar'>
          <div className="topbarWrapper">
              <div className="topLeft"><span>LOGO SHOW TIME</span></div>
              <div className="topRight">
                  <div className="topbarIconContainer">
                      <NotificationImportantSharp/>
                      <span className="topIconBadge">2</span>
                  </div>
                  <div className="topbarIconContainer">
                      <Language/>
                      <span className="topIconBadge">2</span>
                  </div>
                  <div className="topbarIconContainer">
                      <Settings/>
                  </div>
                  <img src="https://pickaface.net/gallery/avatar/unr_workplacemale_180407_1548_cm3i.png" className='topAvatar'/>
              </div>
          </div>
      </div>
      <div className="main">
      <div className="AdminSideBar1">
         <div className="sidebarWrapper1">
           <div className="sidebarMenu1">
             <h3 className="sidebarTitle1">
               Dashboard
              </h3>
              <ul className="sidebarList1">
                <li className="sidebartListItem1">
                <Web className="sidebarIcon"/> <Nav.Link href="/">Website</Nav.Link> 
                </li>
                <li className="sidebartListItem1">
                <Timeline className="sidebarIcon"/> <Nav.Link href="/admin">Analytics</Nav.Link> 
                </li>
              </ul>
                <h3 className="sidebarTitle1">
                  Management
                </h3>
              <ul className="sidebarList1">
                <li className="sidebartListItem1">
                  <PersonSharp className="sidebarIcon1"/> <Nav.Link href="/admin/users">Users</Nav.Link> 
                </li>
                <li className="sidebartListItem1">
                <Event className="sidebarIcon"/><Nav.Link href="/admin/concerts">Events</Nav.Link>
                </li>
              </ul>
           </div>
         </div>
  
      </div>
        <div className="userList">
        <div className="allUsers">
        <h3 className="alluTitle">Events List</h3>
        <Button className="createconcert"><Link to={{pathname: '/admin/concerts/create'}}>Create an Event</Link></Button>
        <table className="alluTable">
          <tr className="alluTr">
            <th className="alluTh">ID</th>
            <th className="alluTh">TOUR</th>
            <th className="alluTh">ARTIST(S)</th>
            <th className="alluTh">DATE</th>
            <th className="alluTh">PLACE</th>
            <th className="alluTh">TYPE</th>
            <th className="alluTh">PRICE</th>
            <th className="alluTh">UPDATE</th>
            <th className="alluTh">DELETE</th>
          </tr>
          <tr className="widgetLgTr">
              <td className="id">{concerts.map((concert : any)=>{ 
              return <p key={concert.id}>{ concert._id }</p>
              } )}</td>
              <td className="tour">{concerts.map((concert : any)=>{ 
              return <p key={concert.id}>{ concert.tour }</p>
              } )}</td>
              <td className="artist">{concerts.map((concert : any)=>{ 
              return <p key={concert.id}>{ concert.artist }</p>
              } )}</td>
              <td className="date">{concerts.map((concert : any)=>{ 
              return <p key={concert.id}>{ concert.date }</p> })} </td>
              <td className="place">{concerts.map((concert : any)=>{ 
              return <p key={concert.id}>{ concert.place }</p> })} </td>
              <td className="type">{concerts.map((concert : any)=>{ 
              return <p key={concert.id}>{ concert.type }</p> })} </td>
              <td className="price">{concerts.map((concert : any)=>{ 
              return <p key={concert.id}>${ concert.price }</p> })} </td>
              <td className="update">{concerts.map((concert : any)=>{ 
              return <p key={concert.id}> <Link to={{pathname: `/admin/concerts/update/${concert._id}`}}>
              <Update/>
            </Link> </p>})} </td>
              <td className="deleteC">{concerts.map((concert : any)=>{ 
              return <p key={concert.id}> <Link to={{pathname: "/admin" }}> <DeleteForever onClick={() =>  axios.delete(`http://localhost:3030/concerts/${concert._id}`)}/> </Link> </p>})} </td>
          </tr>
        </table>
      </div>
      </div>
        </div>
    </div>
    )
  }
