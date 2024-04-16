import React, { useState } from 'react';

function TodoInput({ onSubmit }) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="todoInput"
        aria-label="Todo input"
        value={inputValue}
        onChange={handleChange}
        autoFocus
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoInput;
