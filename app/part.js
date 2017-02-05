import React from 'react';

const Part = (props) => {
  return (
      <tr className="part-list-item">
        <td>{props.part.partItemNum}</td>
        <td>{props.part.partName}</td>
        <td>{props.part.partDescription}</td>
      </tr>
    )
};

export default Part;
