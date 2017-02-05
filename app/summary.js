import React from 'react';

const Summary = (props) => {

  return (
      <div className="summary-comp">
        <h3>Assembly Summary</h3>
        <ul className="assembly-list">
          <li>Item Number: {props.assembly.assemblyItemNum}</li>
          <li>Item Name: {props.assembly.assemblyItemName}</li>
          <li>Description: {props.assembly.assemblyDescription}</li>
        </ul>
      </div>
    )

};

export default Summary;
