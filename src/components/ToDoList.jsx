import React, { useState } from 'react'
import Task from './Task';
import { IoIosClose } from "react-icons/io";

function ToDoList() {
    const [taskInput, setTaskInput] = useState('');
    const [tasks, setTasks] = useState([]);

    const handleAdd = () => {
        if(taskInput !== ''){
            setTaskInput('');
            setTasks([...tasks, taskInput]);
        }
    }

    const deleteTask = (index) => {
        setTasks(tasks.filter((__, i) => i !== index));
    }

  return (
    <div className='bg-[#FEFEFE] p-10 max-w-2xl w-full rounded-lg shadow-lg space-y-3'>
      <div className='space-y-3'>
        <h1 className='font-bold text-2xl uppercase text-[#004481]'>To Do List</h1>
        <div className='flex gap-3'>
            <input type='text' className='px-5 py-3 border border-slate-200 rounded-lg w-full focus:border-2 focus:border-[#004481] outline-none'
            placeholder='Input Task'
            value={taskInput}       //reference of deleting input
            onChange={(e) => setTaskInput(e.target.value)}
            ></input>
            <button className='bg-[#004481] text-[#FEFEFE] px-12 py-3 rounded-lg' onClick={handleAdd}>ADD</button>
        </div>
      </div>
      <div className='space-y-3'>
        {tasks.map((task, index) => (
                    <div key={index} className='border border-slate-200 px-5 py-3 rounded-lg flex justify-between'>
                        <p>{task}</p>
                        <IoIosClose size={25} onClick={() => deleteTask(index)}/>
                    </div>
                ))}
      </div>
    </div>
  )
}

export default ToDoList
