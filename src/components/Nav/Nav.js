 import React from 'react'
import { Outlet, Link } from "react-router-dom";
import './nav.css'
// import Navbar from 'react-bootstrap/Navbar'
// import Container from 'react-bootstrap/Container'
// import { Link } from "react-router-dom";
const Nav = () => {

    function dropDown(){
      let drop = document.querySelector('.drop')
      let dam = document.querySelector('.damax')
      setTimeout(() => {
          dam.style.display = 'inline' 
      }, 1000);
      drop.style.height='100vh'

      setTimeout(() => {
          document.body.style.overflow='hidden'
          drop.style.top='100%'
      }, 3000);

      setTimeout(() => {
          drop.style.height='0vh'
          dam.style.display = 'none' 
          setTimeout(() => {
          drop.style.top='0'
          document.body.style.overflow='scroll'
        }, 1400);

      }, 4000);
    }
  return (
    <>
      <div className="drop">
        <p className="damax">Artme</p>
      </div>
      <nav className="navcontainer">
        <ul>
          <li onClick={dropDown}>
            <Link to="/home" className="link">
              Home
            </Link>
          </li>
          <li onClick={dropDown}>Artist</li>
          <li onClick={dropDown}>
            <Link to="/gallery" className="link">
              shop
            </Link>
          </li>
          <li onClick={dropDown}>About</li>
        </ul>
        <h1>Artme</h1>
        <p>follow us @Artme</p>
      </nav>
      <Outlet />
     
    </>
  );
}

export default Nav