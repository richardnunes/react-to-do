import React from 'react';
import TodoList from './components/Todo/TodoList';
import AddTodoForm from './components/Todo/AddTodoForm';
import useTodos from './hooks/useTodos';
import './App.css';

const App = () => {
  const { todos, addTodo, toggleTodo, removeTodo } = useTodos();

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <AddTodoForm addTodo={addTodo} todos={todos} />
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        removeTodo={removeTodo}
      />
    </div>
  );
}

export default App;
