import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const AddTodo = ({ submitTodo }) => {
  let input ; 

  const styles = {
    containerStyle:{
      marginTop: "25px",
      marginLeft: "60px"
    },
    btnStyle: {
      marginLeft: "10px",
    }
  };

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

          <Button 
            style={styles.btnStyle}
            bsStyle="primary"
            bsSize="small"
            type="submit"
            className="todo-submit">
            Add Item
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