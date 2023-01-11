import React from 'react';
import './App.css';
import {Register} from './components/Register';
import { BrowserRouter as Router} from 'react-router-dom';
import { Routes ,Route } from 'react-router-dom';
import {Login} from "./components/Login";
import {MyAccount} from "./components/MyAccount";
import {UpdateMyAccount} from "./components/UpdateMyAccount";
import {Home} from "./components/HomePage";

import Sidebar from './components/SideBar';
import ConcertPage from './components/ConcertPage';
import AdminView from './components/admin/AdminView';
import UserList from './components/admin/UserList';
import EventList from './components/admin/EventList';
import UserUpdate from './components/admin/UserUpdate';
import EventUpdate from './components/admin/EventUpdate';
import EventCreate from './components/admin/EventCreate';
import UserCreate from './components/admin/UserCreate';
import ConcertDetail from './components/ConcertDetail';
import ReadBooking from './components/ReadBooking';
import Rock from './components/Rock';
import Urbain from './components/Urbain';
import Pop from './components/Pop';
import Classique from './components/Classique';
import HardRock from './components/HardRock';
import Electro from './components/Electro';


function App() {
  return (
<Router>
    <Routes>
        <Route path="/register" caseSensitive={false} element={<Register/>} />
        <Route path="/login" caseSensitive={false} element={<Login />} />
        <Route path="/account" caseSensitive={false} element={<MyAccount />} />
        <Route path="/account/updatei" caseSensitive={false} element={<UpdateMyAccount />} />
        <Route path="/" caseSensitive={false} element={<Home />} />
        <Route path="/" caseSensitive={false} element={<Sidebar />} />
        <Route path="/concert" caseSensitive={false} element={<ConcertPage/>} />

        <Route path="/concert/rock" caseSensitive={false} element={<Rock/>} />
        <Route path="/concert/rock" caseSensitive={false} element={<Sidebar />} />
        <Route path="/concert/urbain" caseSensitive={false} element={<Urbain/>} />
        <Route path="/concert/pop" caseSensitive={false} element={<Pop/>} />
        <Route path="/concert/classique" caseSensitive={false} element={<Classique/>} />
        <Route path="/concert/hardrock" caseSensitive={false} element={<HardRock/>} />
        <Route path="/concert/electro" caseSensitive={false} element={<Electro/>} />

        <Route path="/concert/:concert_id" caseSensitive={false} element={<ConcertDetail/>} />
        <Route path="/admin" caseSensitive={false} element={<AdminView/>} />
        <Route path="/admin/users" caseSensitive={false} element={<UserList/>} />
        <Route path="/admin/users/update/:id" caseSensitive={false} element={<UserUpdate/>} />
        <Route path="/admin/concerts" caseSensitive={false} element={<EventList/>} />
        <Route path="/admin/concerts/create" caseSensitive={false} element={<EventCreate/>} />
        <Route path="/admin/concerts/update/:id" caseSensitive={false} element={<EventUpdate/>} />
        <Route path="/admin/concerts/create" caseSensitive={false} element={<EventCreate/>} />
        <Route path="/admin/users/create" caseSensitive={false} element={<UserCreate/>} />
        <Route path="/booking/:id" caseSensitive={false} element={<ReadBooking/>} />


    </Routes>
</Router>
  );
}

export default App;
