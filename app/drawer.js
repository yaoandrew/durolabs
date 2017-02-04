import React from 'react';

const Drawer = (props) => {
  return (
      <div>
        <h3>Parts info</h3>
        <ul className="part-drawer">
          <li>Item Name: {props.assembly.assemblyItemName}</li>
          <li>Description: {props.assembly.assemblyDescription}</li>
        </ul>
      </div>
    )
};

export default Drawer;
