import React, { useState } from 'react';

const Practice = () => {

  const tasks = [
    'Поесть',
    'Поиграть',
    'Посмотреть фильм'
  ];

  const generateList = () => {
    return (
      <ol>
        {tasks.map((task, index) => (
          <li>{task}</li>
        ))}
      </ol>
    );
  };

  return (
    <div>
      <h2>Мои дела на сегодня:</h2>
      {generateList()}
    </div>
  );
    
};

export default Practice;