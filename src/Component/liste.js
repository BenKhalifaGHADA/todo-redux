import React from 'react'
import './liste.css'
import Task from './task.js'
import { connect } from 'react-redux'



  function Liste(props) {
    
    return (
        <div className="liste">
           { props.liste.map((el,i)=>(<Task id={el.id} task={el.todo} complete={el.isComplete}/>))}
        </div>
    )
}
const mapStateToProps= state =>({
    liste:state,
    })
    
    export default connect(mapStateToProps)(Liste)

