import React, {useContext, useState} from "react";
import styles from "../../styles/ToDoList.module.css"
import AddTaskModal from "./AddTaskModal";
import ToDoItem from "./ToDoItem";
import ToDoContext from "./ToDoContext";

const ToDoList = (todo) => {
    const [state, dispatch] = useContext(ToDoContext);

    const toggleModal = (e) =>{
        e.preventDefault();
        dispatch({type: 'SHOW_MODAL'})
    }

    return (
        <div className={styles.todoList__container}>
            {
                state.todoList.length === 0 ? 
                <div className={styles.emptyToDo}>Nothing to do yet...</div>
                :
                state.todoList.map((todo, index)=>{
                    return(
                        <ToDoItem key={index} todo={todo} id={todo.id}/>
                    )
                })
            }
           
            <button onClick={toggleModal} className={styles.addNewTask}>Add New Task</button>
            {
                state.visible && <AddTaskModal />
            }
        </div>
    );
}

export default ToDoList;