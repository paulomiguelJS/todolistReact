import React from 'react';
import Button from './Button';

import './Button.css';

export const TaskDetails = () => {
  return (
    <>
      <div className="back-button-cotainer">
        <Button>Voltar</Button>
      </div>
      <div className="task-details-container">
        <p></p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae
          quia cupiditate consectetur reiciendis officiis a.
        </p>
      </div>
    </>
  );
};

export default TaskDetails;
