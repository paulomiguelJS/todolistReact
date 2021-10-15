import React from 'react';

function Task({ task }) {
  return <div className="task-container">{task.title}</div>;
}

export default Task;
