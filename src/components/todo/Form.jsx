import React, { useContext } from 'react';
import { DispatchContext } from '../../context/Context';
import useInputState from '../../hooks/UseInputState';
import useStyles from '../../styles/FormStyle';
import { ADD_TODO } from '../../constants/Actions';

function Form() {
  const classes = useStyles();
  const dispatch = useContext(DispatchContext);
  const [value, handleChange, clearValue] = useInputState('');

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        dispatch({ type: ADD_TODO, task: value });
        clearValue();
      }}
      className={classes.TodoForm}
    >
      <input
        placeholder="Add your task here..."
        value={value}
        onChange={handleChange}
        className={classes.input}
      />
    </form>
  );
}

export default Form;