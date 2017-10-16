import React from 'react';
import PropTypes from 'prop-types';

const TodoList = ({ todos }) => {
  const todoItems = todos.map( item => (
    <li key={item.id}>
      <span className="todo-text">{item.text}</span>
    </li>
  ));

  return (
    <ul>
      {todoItems}
    </ul>
  );
};

TodoList.PropTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    },
  )).isRequired,
};


export default TodoList;