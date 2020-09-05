import React, { useContext, memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
import { DispatchContext } from "../../context/Context";
import EditForm from "./EditForm";
import UseToggleState from "../../hooks/UseToggleState";
import useStyles from "../../styles/TodoItemStyle";
import { REMOVE_TODO, TOGGLE_TODO } from "../../constants/Actions";

export function Todo({ id, task, completed }) {
  const classes = useStyles();
  const dispatch = useContext(DispatchContext);
  const [isEditing, toggle] = UseToggleState(false);

  if (isEditing) {
    return (
      <li
        className={classes.Todo}
        style={{ overflowY: "hidden" }}
        onClick={() => toggle()}
      >
        <EditForm id={id} task={task} toggleEditForm={toggle} />
      </li>
    );
  }

  return (
    <li
      className={classes.Todo}
      onClick={() => dispatch({ type: TOGGLE_TODO, id })}
    >
      <span
        style={{
          textDecoration: completed ? "line-through" : "",
          color: completed ? "#A9ABAE" : "#34495e",
        }}
      >
        {task}
      </span>
      <div className={classes.icons}>
        <FontAwesomeIcon
          icon={faPen}
          size="1x"
          onClick={(e) => {
            e.stopPropagation();
            toggle();
          }}
        />{" "}
        <FontAwesomeIcon
          icon={faTrash}
          size="1x"
          color={"#c0392b"}
          onClick={(e) => {
            e.stopPropagation();
            dispatch({ type: REMOVE_TODO, id });
          }}
        />
      </div>
    </li>
  );
}

export default memo(Todo);
