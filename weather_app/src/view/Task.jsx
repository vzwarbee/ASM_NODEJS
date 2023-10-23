import { useState } from 'react';
import {CreateTask}  from '../component/UI/CreateTask';
import '../style/task.css'


  const Task = () => {
    const [tasks, setTasks] = useState([])
    

    return (
      <div className="task-wrapper bg-slate-100 w-screen h-screen flex flex-col itrams-center pt-3 gap-16">
        <CreateTask task={tasks} setTask={setTasks}/>
      </div>
    );
  };

  export default Task;