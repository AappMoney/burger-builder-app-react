import React from 'react';
import './NavBar.css';
import NavItem from './NavBarItem/NavBarItem'

const Nav = (props) => {
  return (
    <div className="Nav">
      <NavItem nav="Burger-bulder" Link="/" active/>
      <NavItem nav="About" Link="/" />
    </div>
  )
}

export default Nav