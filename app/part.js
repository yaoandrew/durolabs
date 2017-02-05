import React from 'react';

const Part = (props) => {
  return (
      <li className="part-item">Part Num {props.part.partItemNum}, Part Name {props.part.partName}</li>
    )
};

export default Part;
