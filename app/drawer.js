import React, { Component }from 'react';

class Drawer extends Component {
  constructor (props){
    super(props)
  }


  render () {
    return (
      <div className="part-drawer panel panel-default" style = {this.props.isVisible ? 
        {opacity : 1 } : {opacity : 0}}>
        <div className="panel-heading">
          <h3>Parts info</h3>
        </div>
        <div className="panel-body">
          <p>Item Name: {this.props.info}</p>
          <p>Description:</p>
        </div>
      </div>
    )

  }
}

export default Drawer;
