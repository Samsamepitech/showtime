import "../../../style/Adminstyle/widgetLarge.css"
import {useState, useEffect } from 'react';


export default function WidgetLarge() {

  const [bookings, setBookings] = useState([]);
  
// fetch all concerts from data
useEffect(() => {
  //setConcerts(true);
  const getBookings = () => {

    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("http://localhost:3030/bookings", {
      method: 'GET',
      redirect: 'follow'
    })
      .then(response => response.json())
      .then(result => setBookings(result))
      .catch(error => console.log('error', error));
  }
  getBookings()
    // console.log(concerts)
    //.then(setConcerts(false));
}, []);
  
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Sales</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Event</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Price</th>
        </tr>
        <tr className="widgetLgTr">
        {bookings.slice(0, 3).map((booking : any) =>{ return ( <td className="widgetLgUser"> 
            <img src="https://i.pinimg.com/originals/86/08/70/860870066df05a7a29bcb5bb9ea2e9a7.jpg" 
            alt="" className="widgetLhImg" />
            <span className="widgetLgName"> {booking.lastName} </span>
          </td> ) })}
          <td className="widgetLgEvent">{bookings.slice(0, 3).map((booking : any)=>{ 
            return <p key={booking.id}>{ booking.tour }</p>
          } )}</td>
          <td className="widgetLgDate">{bookings.slice(0, 3).map((booking : any)=>{ 
            return <p key={booking.id}>{ booking.date }</p> })} </td>
          <td className="widgetLgPrice">{bookings.slice(0, 3).map((booking : any)=>{ 
            return <p key={booking.id}>${ booking.price }</p> })} </td>
        </tr>
      </table>
    </div>
  )
}

