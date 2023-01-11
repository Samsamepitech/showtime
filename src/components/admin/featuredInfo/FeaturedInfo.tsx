import "../../../style/Adminstyle/featuredInfo.css"
import { ArrowUpward } from "@material-ui/icons"
import {useState, useEffect } from 'react';

export default function FeaturedInfo() {
    const [bookings, setBookings] = useState([]);
    const [users, setUsers] = useState([]);
    // fetch all concerts from data
    useEffect(() => {
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
      
      const getUsers = () => {
  
          var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("http://localhost:3030/auth", {
            method: 'GET',
            redirect: 'follow'
          })
            .then(response => response.json())
            .then(result => setUsers(result))
            .catch(error => console.log('error', error));
        }
        getUsers()
          // console.log(concerts)
          //.then(setConcerts(false));
      getBookings()
        // console.log(concerts)
        //.then(setConcerts(false));

    }, []);
  return (
    <div className="featured"> 
        <div className="featuredItem">
            <span className="featuredTitle">
                Number Of Sales
            </span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">
                {bookings.length}
                </span>
            </div>
        <div className="featuredSub">Compared to last month : +{bookings.length} <span className="arrow"><ArrowUpward/> </span> </div>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">
                Number of users
            </span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">
                    {users.length}
                </span>
            </div>
        <div className="featuredSub">Compared to last month: +{users.length} <ArrowUpward/></div>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">
                Taux de transfo user
            </span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">
                {bookings.length/users.length*100}%
                </span>
            </div>
        <div className="featuredSub">Compared to last month: +95% <ArrowUpward/></div>
        </div>
    </div>
  )
}
