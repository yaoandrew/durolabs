import React, {Component} from 'react';
import { Link } from 'react-router';

class Part extends Component {
  constructor() {
    super()
    this.state = {
      isVisible : false,
      currentToolTip : ""
    }
  }

  handleMouseExit() {
    this.setState({
      isVisible : false,
      currentToolTip : ""
    })
  }

  handleMouseOver() {
    this.setState({
      isVisible : true,
      currentToolTip: this.props.part
    })

    console.log ("Part State: ",this.state)

    this.updateParent(this.props.part, this.state)
  }
  
  updateParent() {
    this.props.myCommFunc(this.state.currentToolTip)
  }

  render() {
    return (
      <tr className="part-list-item" onMouseEnter={this.handleMouseOver.bind(this)}
        onMouseLeave={this.handleMouseExit.bind(this)}>
         <td><Link to={`/partdetail/${this.props.part.partItemNum}`}>
            {this.props.part.partItemNum}</Link></td>
         <td>{this.props.part.partName}</td>
         <td>{this.props.part.partDescription}</td>
       </tr>
      )
  }    
}

export default Part;
