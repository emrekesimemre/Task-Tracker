// import React from 'react'

import Task from './Task';

const Tasks = ({ tasks, deleteTask, toggleDone, clearAll }) => {
  // console.log("tasks", tasks);
  return (
    <div>
      <button
        style={{ backgroundColor: 'red' }}
        className="btn btn-block"
        onClick={clearAll}
      >
        Clear All
      </button>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleDone={toggleDone}
        />
      ))}
    </div>
  );
};

export default Tasks;
