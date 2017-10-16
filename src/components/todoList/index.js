import React from 'react';
import PropTypes from 'prop-types';
import { Panel, Button } from 'react-bootstrap';

const TodoList = ({ todos, deleteTodo }) => {

  const styles = {
    containerStyle:{
      marginTop: "60px",
      marginLeft: "60px",
    },
    panelStyles:{
      width: "600px",
    }, 
    btn: {
      marginTop: "5px"
    },
  };


  const todoItems = todos.map( item => (
  <li key={item.id}>

    <Button
      style={styles.btn}
      bsStyle="danger"
      bsSize="small"
      className="todo-delete"
      onClick={ () => deleteTodo(item.id)}
      >Delete</Button>    <span className="todo-text">{item.text}</span>
  </li>
  ));

  return (
    <div style={styles.containerStyle}>
      <Panel style={styles.panelStyles} header="To Do Items" bsStyle="primary"> 
        <ul>
          {todoItems}
        </ul>
      </Panel>
    </div>
  );
};

TodoList.PropTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    },
  )).isRequired,
  deleteTodo: PropTypes.func.isRequired,
};


export default TodoList;