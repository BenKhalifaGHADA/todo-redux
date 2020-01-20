import React, { Component } from 'react'
import './add.css'
import{connect} from 'react-redux'
import  {addNewTask} from '../action/action.js'



 class Add extends Component {
    state={
        value:"",
        
    }
    
    onChangeValue =(event) => {
        this.setState({value : event.target.value} );
      
      }
      

    render() {
        return (

            <div className="box">
                
                <h1 className="titre">Daily Todo Lists</h1>
                <div className="form">
                <input className="input" type="text" value={this.state.value} onChange={this.onChangeValue} />
                <button className="bouton" onClick= {()=>{this.props.handleAdd(this.state.value)
                    this.setState({value:""})}}>+</button>
                </div>
                <span></span>
            </div>

            
        )
    }
}

  
const mapDispatchToProps = dispatch => ({
    handleAdd: (value) => dispatch(addNewTask(value)),
    
  });
  export default connect(null, mapDispatchToProps)(Add);
