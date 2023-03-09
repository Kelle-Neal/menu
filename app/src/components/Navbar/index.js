import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  // NavBtn,
  // NavBtnLink,
} from './NavbarElements'

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to = '/about' activeStyle>
            About
          </NavLink>
          <NavLink to = '/appetizers' activeStyle>
            Appetizers
          </NavLink>
          <NavLink to = '/breakfast' activeStyle>
            Breakfast
          </NavLink>
          <NavLink to = '/dinner' activeStyle>
            Dinner
          </NavLink>                    
          <NavLink to = '/drinks' activeStyle>
            Drinks
          </NavLink>
          <NavLink to = '/lunch' activeStyle>
            Lunch
          </NavLink>
          <NavLink to = '/specials' activeStyle>
            Specials
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
}
export default Navbar;