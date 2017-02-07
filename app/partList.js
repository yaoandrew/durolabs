import React, { Component } from 'react';
import Part from './part';
import Drawer from './drawer';


class PartList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isVisible : true
    }
    

  }

  handleUpdateFromChild(info) {
    this.setState({info})
    console.log("parent", info)
  }
 
  render (){

      const assemblyParts = this.props.assembly[0].assemblyItems.map((item) => {
        return <Part myCommFunc={() => this.handleUpdateFromChild.bind(this)} key={item.partItemNum} part={item} />
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
        <Drawer toolTipInfo = {this.state} isVisible = {this.state.isVisible} />
      </div>
    )
  }
};

export default PartList;
