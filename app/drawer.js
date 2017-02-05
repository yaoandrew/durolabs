import React from 'react';

const Drawer = (props) => {
  return (
      <div className="part-drawer">
        <h3>Parts info</h3>
        <ul>
          <li>Item Name: {props.assembly.assemblyItemName}</li>
          <li>Description: {props.assembly.assemblyDescription}</li>
        </ul>
      </div>
    )
};

export default Drawer;
