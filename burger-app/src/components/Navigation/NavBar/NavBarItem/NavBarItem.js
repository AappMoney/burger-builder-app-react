import React from 'react';
import './NavBarItem.css'

const NavItem = (props) => {
  return (
    <div className="NavItem">
      <a className={['navLink', props.active ? "active" : null ].join(' ')} href={props.Link}>{props.nav}</a>
    </div>
  )
}

export default NavItem;