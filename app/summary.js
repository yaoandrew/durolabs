import React from 'react';

const Summary = (props) => {

  return (
      <div className="summary-comp col">
        <h3>Assembly Summary</h3>
        <table className="table table-bordered">
          <tbody>
            <tr>
              <th>Item Number</th>
              <td>{props.assembly[0].assemblyItemNum}</td>
            </tr>
            <tr>
              <th>Item Name</th>
              <td>{props.assembly[0].assemblyItemName}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{props.assembly[0].assemblyDescription}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )

};

export default Summary;
