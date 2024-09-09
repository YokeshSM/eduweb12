import React from 'react'
import Heading from '../heading/heading'
import "./header.css"
import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom'
const Header = () => {
  const [click,setClick]=useState(false)
  return (
    <div>
      <Heading/>
      <header>
      <nav className="flexSB">
      <ul className={click ? "mobile-nav":"flexSB"} onClick={()=> setClick(false)}>
        <Router>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/courses">All Courses</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/team">Team</Link></li>
        <li><Link to="/pricing">Pricing</Link></li>
        <li><Link to="/journal">Journal</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        </Router>
      </ul>
      <div className="start">
        <div className="button">LEARN WITH US</div>
      </div>
      <button className="toggle" onClick={()=>setClick(!click)}>
        {click ? <i className="fa fa-times"></i>:<i className='fa fa-bars'></i>}
      </button>
      </nav>
      </header>
    </div>
  )
}

export default Header

