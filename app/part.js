import React, {Component} from 'react';
import { Link } from 'react-router';

class Part extends Component {
  constructor() {
    super()
    this.state = {
      showToolTip : false,
      currentToolTip : ""
    }
  }

  handleMouseOver() {
    
    this.setState({
      showToolTip : true,
      currentToolTip: this.props.part
    })
    this.updateParent(this.props.part)
  }

  
  updateParent() {
    this.props.myCommFunc(this.state.currentToolTip)
  }

  render() {
    return (
      <tr className="part-list-item" onMouseOver={this.handleMouseOver.bind(this)}>
         <td><Link to={`/partdetail/${this.props.part.partItemNum}`}>
            {this.props.part.partItemNum}</Link></td>
         <td>{this.props.part.partName}</td>
         <td>{this.props.part.partDescription}</td>
       </tr>
      )
  }    
}

export default Part;
