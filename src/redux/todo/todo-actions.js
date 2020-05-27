import todoActionTypes from './todo-types';

export const addTodo = todo => ({
  type: todoActionTypes.ADD_TODO,
  payload: todo
});

export const ClearTodo = todo => ({
  type: todoActionTypes.CLEAR_TODO,
  payload: todo
});