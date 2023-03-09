// import React from 'react';
// import Navbar from '.';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from '../pages';
// import About from '../pages/about';
// import Appetizers from './Links/appetizer';
// import Breakfast from '../pages/breakfast';
// import Dinner from '../pages/dinner';
// import Drinks from '../pages/drinks';
// import Lunch from '../pages/lunch';
// import Specials from '../pages/specials';

// function Nav() { 
//   return(
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path = '/' exact component = {Home} />
//         <Route path = '/about' exact component = {About} />
//         <Route path = '/appetizers' exact component = {Appetizers} />
//         <Route path = '/breakfast' exact component = {Breakfast} />
//         <Route path = '/dinner' exact component = {Dinner} />
//         <Route path = '/drinks' exact component = {Drinks} />
//         <Route path = '/lunch' exact component = {Lunch} />
//         <Route path = '/specials' exact component = {Specials} />
//       </Routes>
//     </Router>
//   );
// }

// export default Nav;

import React from 'react';

function NavBar() {
  return (
    <>
      <div id="mainNavigation">
      <nav role="navigation">
        <div class="py-3 text-center border-bottom">
          <img src="/static_files/images/logos/logo_3_white_2.png" alt="" class="invert">
        </div>
      </nav>
      <div class="navbar-expand-md">
        <div class="navbar-dark text-center my-2">
          <button class="navbar-toggler w-75" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span> <span class="align-middle">Menu</span>
          </button>
        </div>
        <div class="text-center mt-3 collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav mx-auto ">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Hours & Location</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Events</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Menu
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a class="dropdown-item" href="#">Appetizers</a></li>
                <li><a class="dropdown-item" href="#">Breakfast</a></li>
                <li><a class="dropdown-item" href="#">Lunch</a></li>
                <li><a class="dropdown-item" href="#">Dinner</a></li>
                <li><a class="dropdown-item" href="#">Drinks</a></li>
                <li><a class="dropdown-item" href="#">Special</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      </div>
    </>
  );
} 

export default NavBar