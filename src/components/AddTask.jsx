import React, { useState } from 'react';

import './addTask.css';

import Button from './Button';

function AddTask({ handleTaskAddition }) {
  const [inputData, setInputData] = useState('');

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const handleAddTaskClick = () => {
    if (inputData.trim() === '') {
      return alert('Please, you need to add a task!');
    }

    handleTaskAddition(inputData);
    setInputData('');
  };

  return (
    <div className="add-task-container">
      <input
        onChange={handleInputChange}
        value={inputData}
        className="add-task-input"
        type="text"
        maxLength="30"
      />
      <div className="add-task-button-container">
        {' '}
        <Button onClick={handleAddTaskClick}>Add Task</Button>
      </div>
    </div>
  );
}

export default AddTask;
