import React from 'react';
import './Task.css';

import Task from './Task';

const Tasks = ({ tasks, handleTaskClick }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task task={task} handleTaskClick={handleTaskClick} />
      ))}
    </>
  );
};

export default Tasks;
