import{ADD_LIST,DELETE_LIST,EDIT_LIST,COMPLETE_LIST} from '../action/action-type.js';


const todoList=[]
export const reducerList=(state=todoList, action)=>{
    switch(action.type){
        case ADD_LIST:
            return (state.concat(action.payload));
        case DELETE_LIST:
                return state.filter(el=> el.id!=(action.payload));
                    
         case EDIT_LIST:
              return state.map(el=> el.id==action.payload.id? {...el,todo:action.payload.newTodo}:el); 

         case COMPLETE_LIST:
              return state.map(el=> el.id===action.payload?{ ...el,isComplete:!el.isComplete}:el);      
      
    
        default:return state
    }
}
