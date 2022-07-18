import React, {useState, useContext, useEffect} from 'react';
import ToDoContext from './ToDoContext';
import styles from '../../styles/AddTaskModal.module.css'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';


const AddTaskModal = () => {

    const [state, dispatch] = useContext(ToDoContext);
    const [newTask, setNewTask] = useState('');

    const changeHandler = (e) =>{
        e.preventDefault();
        setNewTask(e.target.value);
        console.log(newTask);
    }

    const addNewTask = (e) => {
        e.preventDefault();
        if(newTask === ''){
            alert('Please enter a task');
            return;
        } 

        dispatch({type: 'ADD_TODO', id: Date.now(), text: newTask});
        dispatch({type: "HIDE_MODAL"})
    }

    const closeModal = ()=>{
        dispatch({type: "HIDE_MODAL"})
    }

    return (
        <div className={styles.modalContainer}>
            <div className={styles.overlay} onClick={closeModal}></div>
            <form onSubmit={addNewTask} className={styles.modalForm}>
                <HighlightOffIcon onClick={closeModal} className={styles.modalForm__close}/>
                <h1>Add New task</h1>
                <input type="text" value={newTask} onChange={changeHandler} placeholder="Enter a new task"className={styles.modalForm__input}/>
                <button type="submit" className={styles.modalForm__button}>Add Task</button>  
            </form>
        </div>
    );
}

export default AddTaskModal;