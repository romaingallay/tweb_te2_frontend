import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <Link className="brand-logo" to="/">TWEB - TE2</Link>
        <ul className="right">
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to="/popular">Popular Movies</NavLink></li>
          <li><NavLink to='/upcoming'>Upcoming Movies</NavLink></li>
        </ul>
      </div>
    </nav> 
  )
}

export default withRouter(Navbar)