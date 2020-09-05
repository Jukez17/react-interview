import React, { useContext } from 'react';
import { TodosContext } from '../../context/Context';
import TodoItem from './TodoItem';

function TodoList() {
  const todos = useContext(TodosContext);

  return (
    <ul style={{ paddingLeft: 10, width: '95%' }}>
      {todos.map(todo => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
}

export default TodoList;