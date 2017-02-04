import React from 'react';

const Part = (props) => {
  return (
      <li>Part Num {props.part.partItemNum}, Part Name {props.part.partName}</li>
    )
};

export default Part;
