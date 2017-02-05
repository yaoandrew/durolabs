import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Summary from './summary';
import PartList from './partList';
import assembly from '../assemblyData';
import PartDetail from './partDetail';
import { Link } from 'react-router';
import Drawer from './drawer'

//write function to get raw JSON data for assembly from DB instead of file
//getAssemblyData = (assemblyId)

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {assembly}
  }
  
  render() {
    return (
      <div className="container">
        <div className="row">
          <Summary assembly = {this.state.assembly} />
          <PartList assembly = {this.state.assembly}/>
        </div>
        <PartDetail />
        <Drawer assembly = {this.state.assembly}/>
      </div>
    )
  }
  
}

export default App;