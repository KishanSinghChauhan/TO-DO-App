import todoActionTypes from './todo-types';
import { addTodoID,toggleStatusToTodo } from './todo-utils';
import { TODOs } from '../../shared/Todo_Data'

const INITIAL_STATE = {
  Todos: TODOs,
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
        case todoActionTypes.TOGGLE_STATUS:
          return {
            ...state,
            Todos: toggleStatusToTodo(state.Todos,action.payload)
            // status: !state.status
          };
    default:
      return state;
  }
};

export default todoReducer;