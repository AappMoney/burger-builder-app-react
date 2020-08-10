import React, { Component } from 'react';
import MenuBtn from '../MenuBtn/MenuBtn';
import Aux from '../../../hoc/AuxC';
import Logo from '../../LOGO/Logo';
import './SideDrawer.css';
import NavItem from '../NavBar/NavBarItem/NavBarItem';
import BackDrop from '../../UI/BackDrop/BackDrop'

class SideDrawer extends Component {
  state = {
    show: false,
  }

  closeHandler = () => {
    this.setState({show: false});
  }

  openHandler = () => {
    this.setState({show: true});
  }

  render() {
    return (
      <Aux>
  
          <div style={{
            transform: !this.state.show ? ' translateX(-100%)' :  'translateX(0%)'
          }} className="SideDrawer">
            <span className="textMenu">Menu</span>
            <div>
              <NavItem nav="Burger-bulder" Link="/" active/>
              <NavItem nav="About" Link="/" />
            </div>
          </div>
          <BackDrop  cliced={this.closeHandler} isShow={this.state.show} />
  
          <div className="ToolbarSide">
            <MenuBtn openClick={this.openHandler} />
            <Logo />
          </div>
      </Aux>
    )
  }
}

export default SideDrawer;