import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Part from './part';
import Summary from './summary';
import PartList from './partList';
import assembly from '../assemblyData';
//function to get raw JSON data for assembly
//getAssemblyData = (assemblyId)

class App extends Component  {
  constructor(props){
    super(props)

    this.state = {assembly}
    console.log (this.props)
  }
  
    render(){
      return (
              <div>
                <Summary assembly = {this.state.assembly}/>
                <PartList />
              </div>
              )}
  
}

ReactDOM.render( <App />, document.getElementById('app'))
