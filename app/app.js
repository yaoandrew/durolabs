import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Summary from './summary';
import PartList from './partList';
import assembly from '../assemblyData';
import PartDetailList from './partDetailList';
import { Link } from 'react-router';
import Drawer from './drawer'

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
      </div>
    )
  }
}

export default App;