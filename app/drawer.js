import React from 'react';

const Drawer = (props) => {
  return (
      <div className="part-drawer panel panel-default">
        <div className="panel-heading">
          <h3>Parts info</h3>
        </div>
        <div className="panel-body">
          <p>Item Name: {props.assembly[0].assemblyItemName}</p>
          <p>Description: {props.assembly[0].assemblyDescription}</p>
        </div>
      </div>
    )
};

export default Drawer;
