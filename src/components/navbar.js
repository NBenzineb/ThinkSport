import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import tslogo from '../styles/tslogo.png';

import {
  Nav,
  NavLogo,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
const Navbar = () => {
    return (
        <>
           <Nav>
            <NavLogo to="/">
                <input class="logo" type="image" src="../styles/tslogo.png"></input>
            </NavLogo>
            <Bars />

            <NavMenu>
                <NavLink to="/" activeStyle={{ color:'black' }}> </NavLink>
                <NavLink to="/workouts"  activeStyle={{ color: 'black' }}>All Workouts</NavLink>
                <NavLink to="/myworkouts" activeStyle={{ color: 'black' }} >My Workouts </NavLink>
                <NavLink to="/signin"  activeStyle={{ color: 'black' }}> Sign In</NavLink>
                <NavBtn> <NavBtnLink to="/sign-up">Sign Up</NavBtnLink> </NavBtn>
            </NavMenu> 
           </Nav> 
        </>
    );
};
export default Navbar;