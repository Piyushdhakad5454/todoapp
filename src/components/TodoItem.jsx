// src/TodoItem.jsx
import React from 'react';

const TodoItem = ({ todo, index, handleDeleteTodo, handleToggleComplete }) => {
  return (
    <li style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => handleToggleComplete(index)}
          style={{ marginRight: '10px' }}
        />
        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          {todo.text}
        </span>
      </div>
      <button className="delete-button" onClick={() => handleDeleteTodo(index)} style={{ padding: '5px 10px' }}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
