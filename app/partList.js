import React from 'react';

const PartList = (props) => {
  return (
      <div>
        <h3>Parts List</h3>
        <ul className="part-list-group">
          <li>{props.assembly.assemblyItems[0].partItemNum}</li>
          <li>{props.assembly.assemblyItems[1].partItemNum}</li>
          <li>{props.assembly.assemblyItems[2].partItemNum}</li>
        </ul>
      </div>
    )
};

export default PartList;
