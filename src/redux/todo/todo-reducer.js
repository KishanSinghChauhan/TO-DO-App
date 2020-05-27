import todoActionTypes from './todo-types';
import { addTodoID } from './todo-utils';
import { TODOs } from '../../shared/Todo_Data'

const INITIAL_STATE = {
  Todos: TODOs
}
const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
      case todoActionTypes.ADD_TODO:
        return {
          ...state,
          Todos :  addTodoID(state.Todos , action.payload)
        };
    default:
      return state;
  }
};

export default todoReducer;