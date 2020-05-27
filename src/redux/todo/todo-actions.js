import todoActionTypes from './todo-types';

export const addTodo = todo => ({
  type: todoActionTypes.ADD_TODO,
  payload: todo
});

export const ClearTodo = todo => ({
  type: todoActionTypes.CLEAR_TODO,
  payload: todo
});


export const toogleStatus = (todo) => ({
  type: todoActionTypes.TOGGLE_STATUS,
  payload: todo
});