import React from 'react';
import assembly from '../assemblyData';
import PartDetail from './partDetail';

const PartDetailList = (props) => {

  const documents = assembly[0].assemblyItems
    .filter(item => {return item.partItemNum === props.params.partID})
    .map(item => {return item.documents})
  
  let partDetails  
  
  if (documents[0]) {
    partDetails = documents[0]
    .map(item => (<PartDetail key = {item.title} part={item}/>))
  }

  return (
    <div className="col">
      <h3>Parts Detail List</h3>
      <table className="part-detail-table table table-bordered">
        <thead className="part-detail-table-header">
          <tr>
            <th>Title</th>
            <th>Revision</th>
            <th>Format</th>
          </tr>
        </thead>
        <tbody>
        {partDetails}
        </tbody>  
      </table>
    </div>
  )
}

export default PartDetailList;