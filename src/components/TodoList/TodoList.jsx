import React from 'react';
import {
  useGetTodosQuery,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} from 'redux/toDos-api';

export const TodoList = () => {
  const { data } = useGetTodosQuery();
  const [updateTodo, { isLoading: updateLoading }] = useUpdateTodoMutation();
  const [deleteTodo, { isLoading: deleteLoading }] = useDeleteTodoMutation();
  const isBlocked = updateLoading || deleteLoading;
  const handleCheckbox = todo => {
    const updatedTodo = { ...todo, isDone: !todo.isDone };
    updateTodo(updatedTodo);
  };
  return (
    <ul style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
      {data?.map(item => (
        <li
          style={{
            border: '1px solid violet',
            padding: '10px',
            listStyle: 'none',
          }}
          key={item?.id}
        >
          <input
            type="checkbox"
            checked={item.isDone}
            onChange={() => handleCheckbox(item)}
            disabled={isBlocked}
          />
          <button
            disabled={isBlocked}
            type="button"
            onClick={() => deleteTodo(item.id)}
          >
            Delete
          </button>

          <h2>{item?.name}</h2>
          <h3>{item?.address}</h3>
          <p>{item?.text}</p>
        </li>
      ))}
    </ul>
  );
};
