
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddTodo from './components/addTodo/';
import actions from './actions/';
import TodoList from './components/todoList/index';
import { Navbar } from 'react-bootstrap'

export const App = ({ submitTodo, todos, deleteTodo }) => (


  <div>
    <Navbar inverse>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">To Do List</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Navbar.Text>
          Made with React & React Redux
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
    <AddTodo submitTodo={submitTodo} />
    <TodoList todos={todos} deleteTodo={deleteTodo} />
  </div>
);

App.propTypes = {
  submitTodo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    },
  )).isRequired,
  deleteTodo: PropTypes.func.isRequired,
};


const mapStateToProps = state => state.todoListApp;

const mapDispatchToProps = dispatch => ({
  submitTodo: (text) => {
    if (text) {
      dispatch(actions.submitTodo(text));
    }
  },

  deleteTodo: (id) => {
    dispatch(actions.deleteTodo(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);