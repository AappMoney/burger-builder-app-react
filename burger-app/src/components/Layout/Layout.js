import React from 'react';
import Aux from "../../hoc/AuxC";
import './Layout.css'

const layout = ( props ) => {
  return (
    <Aux>
      <div>ToolBar, SideDrow, BackDrop</div>
      <main className="Content">
        {props.children}
      </main>
    </Aux>
  )
}

export default layout