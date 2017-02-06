import React, { Component }from 'react';

class Drawer extends Component {
  constructor (props){
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div className="part-drawer panel panel-default">
        <div className="panel-heading">
          <h3>Parts info</h3>
        </div>
        <div className="panel-body">
          <p>Item Name:</p>
          <p>Description:</p>
        </div>
      </div>
    )

  }
}

export default Drawer;
