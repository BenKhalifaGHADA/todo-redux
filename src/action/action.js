import{ADD_LIST,DELETE_LIST,EDIT_LIST,COMPLETE_LIST} from './action-type.js';


 export const addNewTask=(todo)=>(
    { type:ADD_LIST, payload:{todo:todo,id:Date.now(),isComplete:false}}

)


export const deleteTask=(id)=>(
    { type:DELETE_LIST, payload:id

    }
)
export const editTask=(newTodo,id)=>(
    { type:EDIT_LIST, payload:{newTodo,id}

    }
)
export const completeTask=(id)=>(
    { type:COMPLETE_LIST, payload:id

    }
)