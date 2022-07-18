import { ActionTypes } from '@mui/base';
import React, {createContext, useContext, useReducer} from 'react'

const ToDoContext = createContext();

export function ToDoProvider({children}) {
    
    const initialState = {
        todoList: [],
        visible: false
    }

    const reducer = (state, action) => {
        switch(action.type){
            case 'SHOW_MODAL':
                return {
                    ...state,
                    visible: true
                }
            case 'HIDE_MODAL':
                return{
                    ...state,
                    visible: false
                }
            case 'ADD_TODO':
                return{
                    ...state,
                    todoList: [...state.todoList, {todo: action.text, id: action.id}]
                }
            case 'DELETE_TODO':
                const filteredList = state.todoList.filter((todo)=>{
                        return todo.id !== action.id;
                    })
                return{
                    ...state,
                    todoList: filteredList
                }
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <ToDoContext.Provider value={[state, dispatch]}>
            {children}
        </ToDoContext.Provider>
    );
}

export default ToDoContext;