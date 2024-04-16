// AddTodoForm.js
import React, { useState } from 'react';
import TodoInput from './TodoInput';
import formValidation from '../../utils/formValidation';

const AddTodoForm = ({ addTodo, todos }) => {
  const [error, setError] = useState('');

  const handleSubmit = (value) => {
    const validationError = formValidation(value, todos);

    if (validationError) {
      setError(validationError);
      return;
    }

    addTodo(value.trim());
    setError('');
  };

  return (
    <div>
      <label htmlFor="todoInput">Add new todo:</label>
      <TodoInput onSubmit={handleSubmit} />
      {error && <div className="error">{error}</div>}
    </div>
  );
}

export default AddTodoForm;
