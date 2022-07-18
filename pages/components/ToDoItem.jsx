import React, {useState, useContext} from 'react'
import ToDoContext from "./ToDoContext";
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from "../../styles/ToDoItem.module.css"

const ToDoItem = ({todo, index}) => {
    const [complete, setComplete] = useState(false);
    const [state, dispatch] = useContext(ToDoContext);

    const completeToDo = () => {
        if(complete === false){
            setComplete(true)
        } else{
            setComplete(false)
        }
    }

    const deleteToDo = () => {
        dispatch({type: 'DELETE_TODO', id: todo.id})
    }

    const strikeStyle = {
        textDecorationLine: complete ? 'line-through' : 'none', 
        color: '#231942',
        textDecorationThickness: '0.2rem'
    }

    return (
        <div className= {styles.todoItem}>
            <div className={styles.todoItem__container}>
                <span style={strikeStyle}>
                    <span style={{color: 'white'}}>{todo.todo}</span>
                </span>
                {
                    complete ? <CheckCircleIcon onClick={completeToDo}/> :
                    <RadioButtonUncheckedIcon onClick={completeToDo} />
                }
            </div>
            <DeleteIcon className={styles.todoItem__delete} onClick={deleteToDo}/>
        </div>
    );
}

export default ToDoItem;