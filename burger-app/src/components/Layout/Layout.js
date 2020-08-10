import React from 'react';
import Aux from "../../hoc/AuxC";
import './Layout.css'
import ToolBar from '../Navigation/ToolBar/ToolBar'
import SideDrader from '../Navigation/SideDrawer/SideDrawer'

const layout = ( props ) => {
  return (
    <Aux>
      <SideDrader />
      <ToolBar />
      <main className="Content">
        {props.children}
      </main>
    </Aux>
  )
}

export default layout