import React, { useState } from 'react'
import { stringify, v4 as uuidv4 } from 'uuid';


export const CreateTask = ({tasks, setTasks}) => {
  const [task, setTask] = useState({
    id: "",
    name: "",
    status: "todo"
  })
  console.log(task);

  const handleSubmit = (e) => {
    e.preventDefault();

    setTask((prev)=>{
      const list = [...prev, task]
localStorage.setItem("task", stringify(list))
      return list
    })
  }

  return (
    <form onSubmit={handleSubmit} action="" className='d-flex justify-content-center'>
        <input type="text" placeholder='Create Task ...' className='boder-2 border-slate-100 bg-slate-100 rounded-md task-input' value={task.name} onChange={(e)=> setTask({...task, id: uuidv4(), name: e.target.value})}/>
        <button type='submit' className='button' ><span>Create</span></button>
    </form>
  )
}
