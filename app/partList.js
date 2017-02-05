import React from 'react';
import Part from './part';


const PartList = (props) => {
  const assemblyParts = props.assembly[0].assemblyItems.map((item) => {
    return <Part key={item.partItemNum} part={item} />
  })
  

  return (
      <div className="col">
        <h3>Parts List</h3>
        <table className="parts-table table table-hover table-bordered">
          <thead className="parts-table-header">
            <tr>
              <th>Part Number</th>
              <th>Part Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {assemblyParts}
          </tbody>  
        </table>
      </div>
    )
};

export default PartList;
