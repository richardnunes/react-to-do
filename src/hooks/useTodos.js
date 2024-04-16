import useLocalStorage from './useLocalStorage';

const useTodos = () => {
  const [todos, setTodos] = useLocalStorage('todos', []);

  const addTodo = (todoText) => {
    setTodos([...todos, { id: Date.now(), text: todoText, completed: false }]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return { todos, addTodo, toggleTodo, removeTodo };
};

export default useTodos;
