import React from 'react';
import Aux from "../../hoc/AuxC";
import './Layout.css'
import ToolBar from '../Navigation/ToolBar/ToolBar'

const layout = ( props ) => {
  return (
    <Aux>
      <ToolBar />
      <main className="Content">
        {props.children}
      </main>
    </Aux>
  )
}

export default layout