import React from 'react';
import assembly from '../assemblyData';

const PartDetailList = (props) => {


console.log("this window" ,window.x)
  return (
    <div>
        <h3>PartDetail that appear for {props.params.partID}</h3>
    </div>

// const partDetailItems = assembly.filter(ItemNum).documents.map((item) => {
//   return <PartDetail key= />


      // return (
      //   <div className="col">
      //   <h3>Parts Detail List</h3>
      //   <table className="part-detail-table table table-hover table-bordered">
      //     <thead className="part-detail-table-header">
      //       <tr>
      //         <th>Title</th>
      //         <th>Revision</th>
      //         <th>Format</th>
      //       </tr>
      //     </thead>
      //     <tbody>
      //       {partDetailItems}
      //     </tbody>  
      //   </table>
      // </div>
      // )


    )
}

export default PartDetailList;