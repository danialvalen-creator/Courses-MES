import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const handleDeleteTodo = (indexToDelete) => {
    setTodos(todos.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="todo-section">
      <h2 className="section-title">Список дел</h2>
      <form onSubmit={handleAddTodo} className="todo-form">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Введите задачу..."
          className="todo-input"
        />
        <button type="submit" className="btn btn-primary">
          Добавить
        </button>
      </form>
      
      {todos.length > 0 ? (
        <ul className="todo-list">
          {todos.map((todo, index) => (
            <li key={index} className="todo-item">
              <span className="todo-text">{todo}</span>
              <button
                onClick={() => handleDeleteTodo(index)}
                className="btn-delete"
                aria-label="Удалить задачу"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="empty-message">Пока нет задач. Добавьте первую!</p>
      )}
    </div>
  );
};

export default TodoList;
