import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/Images/logo.png'

const Navbar = () => {
  return (
    <header>
        <div>
            <img src={logo} alt="logo" />
            <div className='title'>
                <h1>SARKARI RESULTS 2.0</h1>
                <a href="www.sarakriresult.com">www.sarakriresult.com</a>
            </div>
        </div>
        <nav>
            <ul>
                <li>
                    <NavLink className="nav-link" to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link">Latest Jobs</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link">Results</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link">Admit Card</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link">Answer Key</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link">Syllabus</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link">Search</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link">Contact Us</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar