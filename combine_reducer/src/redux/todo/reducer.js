import { ADD_TODO, GET_TODOS_ERROR, GET_TODOS_LOADING, GET_TODOS_SUCCESS } from "./action";

const initState={
    todos:[],
    loading:false,
    error:false
}
export const todoReducer=(state=initState,action)=>{
    switch (action.type) {
        case ADD_TODO:
            return {todos:[...state.todos,action.payload]}
        case GET_TODOS_LOADING:
            return {
                ...state,
                loading:true,
                error:false,
                todos:[]
            }
            case GET_TODOS_ERROR:
            return {
                ...state,
                loading:false,
                error:true,
                todos:[]
            }    
            case GET_TODOS_SUCCESS:
                return {
                    ...state,
                    loading:false,
                    error:false,
                    todos:action.payload
                }    
          default: return initState
    }
}