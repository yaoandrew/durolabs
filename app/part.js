import React from 'react';
import { Link } from 'react-router';

const Part = (props) => {
  return (
      <tr className="part-list-item">
        <td><Link to={`/partdetail/${props.part.partItemNum}`}>{props.part.partItemNum}</Link></td>
        <td>{props.part.partName}</td>
        <td>{props.part.partDescription}</td>
      </tr>
    )
};

export default Part;
