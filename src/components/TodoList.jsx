import React, { useState } from 'react'

const TodoList = () => {
    const [tasks,setTasks] = useState([]);
    const [newTask,setNewTask] = useState("");

    const handleInputChange = (event) => {
        setNewTask(event.target.value);
    }
    const addTask = () =>{
        if (newTask.trim() !=='') {
            setTasks(t =>[...t,newTask])
            setNewTask(""); 
        }
    }
    const deleteTask = (index) => {
        const updatedTask = tasks.filter((_,i)=>i!==index);
        setTasks(updatedTask);
    }

    const moveTaskUp = (index) => {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index-1]] = [updatedTasks[index-1] , updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    const moveTaskDown = (index) => {
        
        if (index < tasks.length - 1) {
            console.log("if");
            
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index+1]] = [updatedTasks[index+1] , updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

  return (
    <div className='to-do-list'>
        <h1>To do List</h1>

        <div>
            <input type='text'
            placeholder='Enter a task' 
            value={newTask} 
            onChange={handleInputChange}/>

             <button
            className='add-button'
            onClick={addTask}
            > Add</button>

            <ol>
                {tasks.map((task,index) =>
                <li key={index}>
                    <span className='text'>{task}</span>
                    <button
                    className='delete-button'
                    onClick={() => deleteTask(index)}>
                        Delete
                    </button>
                    <button
                    className='move-button'
                    onClick={() => moveTaskUp(index)}>
                        Move Up
                    </button>
                    <button
                    className='move-button'
                    onClick={() => moveTaskDown(index)}>
                        Move Down
                    </button>
                </li>
                )}
            </ol>
        </div>
    </div>
  )
}

export default TodoList