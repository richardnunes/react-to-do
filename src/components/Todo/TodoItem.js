import React from 'react';

const TodoItem = ({ todo, toggleTodo, removeTodo }) => {
  return (
    <li className={todo.completed ? 'completed' : ''}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <span>{todo.text}</span>
      <button onClick={() => removeTodo(todo.id)}>Remove</button>
    </li>
  );
}

export default TodoItem;
