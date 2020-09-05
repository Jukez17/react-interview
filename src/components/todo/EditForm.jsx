import React, { useContext } from 'react';
import { DispatchContext } from '../../context/Context';
import UseInputState from '../../hooks/UseInputState';
import useStyles from '../../styles/EditFormStyle';
import { EDIT_TODO } from '../../constants/Actions';

function EditTodoForm({ id, task, toggleEditForm }) {
  const classes = useStyles();
  const dispatch = useContext(DispatchContext);
  const [value, handleChange, clearValue] = UseInputState(task);

  return (
    <form
      testid="form"
      onSubmit={e => {
        e.preventDefault();
        dispatch({ type: EDIT_TODO, id, task: value });
        toggleEditForm();
        clearValue();
      }}
      className={classes.EditTodoForm}
    >
      <input
        testid='formInput'
        autoFocus
        value={value}
        onChange={handleChange}
        onClick={e => e.stopPropagation()}
        className={classes.input}
      />
    </form>
  );
}

export default EditTodoForm;