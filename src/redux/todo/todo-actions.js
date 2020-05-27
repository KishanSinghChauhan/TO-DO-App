import todoActionTypes from './todo-types';

export const addTodo = todo => ({
  type: todoActionTypes.ADD_TODO,
  payload: todo
});