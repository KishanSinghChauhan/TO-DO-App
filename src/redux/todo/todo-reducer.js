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
        case todoActionTypes.CLEAR_TODO:
          return {
            ...state,
            Todos: state.Todos.filter(
              todo => todo.id !== action.payload.id
            )
          };
    default:
      return state;
  }
};

export default todoReducer;