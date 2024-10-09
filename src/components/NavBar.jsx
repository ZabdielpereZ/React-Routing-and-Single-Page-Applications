import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import '../styles/nav.css'

const NavBar = () => {
  return (
    <div className="navbar-container">
      {/* Acts like <a></a> tag  */}
      <Link to="/">Home</Link>

      {/* Also acts like <a></a> tag but allows you to assign "active" classname in addition */}
      <nav>
        <NavLink to="/comics" activeclassname="active">Comics</NavLink>
        <NavLink to="/browse-characters" activeclassname="active">Characters</NavLink>
        <NavLink to="/character-details" activeclassname="active">Character Details</NavLink>
      </nav>

    </div>
  )
}

export default NavBar
