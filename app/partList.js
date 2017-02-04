import React from 'react';
import Part from './part';


const PartList = (props) => {
  const assemblyParts = props.assembly.assemblyItems.map((item) => {
    return <Part key={item.partItemNum} part={item} />
  })
  
  console.log(assemblyParts[0])

  return (
      <div>
        <h3>Parts List</h3>
        <ul className="part-list-group">
          {assemblyParts}
        </ul>
      </div>
    )
};

export default PartList;
