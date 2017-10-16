import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const AddTodo = ({ submitTodo }) => {
  let input ; 

  const styles = {
    containerStyle:{
      marginTop: "60px",
      marginLeft: "60px"
    }
  }

  return (
    <div>
      <div style={styles.containerStyle}>
        <form
          onSubmit={(event) => {
          event.preventDefault();
          submitTodo(input.value);
          input.value = '';
          }}
        >

          <input
            className="todo-input"
            ref={(element) => { 
              input = element;
            }}      
          />

          <Button bsStyle="primary" bsSize="small" type="submit" className="todo-submit">
            Add Todo
          </Button>
        </form>
      </div>
    </div>
  );
};


AddTodo.PropTypes = {
  submitTodo: PropTypes.func.isRequired,
};

export default AddTodo;