import React from 'react';
import Navbar from '.';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../../pages';
import About from '../../pages/about';
import Appetizers from './Links/appetizer';
import Breakfast from '../../pages/breakfast';
import Dinner from '../../pages/dinner';
import Drinks from '../../pages/drinks';
import Lunch from '../../pages/lunch';
import Specials from '../../pages/specials';

function Nav() { 
  return(
    <Router>
      <Navbar />
      <Routes>
        <Route path = '/' exact component = {Home} />
        <Route path = '/about' exact component = {About} />
        <Route path = '/appetizers' exact component = {Appetizers} />
        <Route path = '/breakfast' exact component = {Breakfast} />
        <Route path = '/dinner' exact component = {Dinner} />
        <Route path = '/drinks' exact component = {Drinks} />
        <Route path = '/lunch' exact component = {Lunch} />
        <Route path = '/specials' exact component = {Specials} />
      </Routes>
    </Router>
  );
}

export default Nav;