import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Part from './part';
import Summary from './summary';
import PartList from './partList';
import assembly from '../assemblyData';

//write function to get raw JSON data for assembly from DB instead of file
//getAssemblyData = (assemblyId)

class App extends Component  {
  constructor(props){
    super(props)
    this.state = {assembly}
  }
  
  render(){
    return (
            <div>
              <Summary assembly = {this.state.assembly}/>
              <PartList assembly = {this.state.assembly}/>
            </div>
            )}
  
}

ReactDOM.render( <App />, document.getElementById('app'))
