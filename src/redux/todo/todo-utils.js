export const addTodoID = (Todos, currentTodoToAdd) => {
    return [...Todos, { ...currentTodoToAdd, id:Todos.length +1}];
};
   
export const toggleStatusToTodo = (Todos, statustoaddTodo) => {
    const existingTodo = Todos.find(
      todo => todo.id === statustoaddTodo.id
    );
  
    if (existingTodo) {
      return Todos.map(todo =>
        todo.id === statustoaddTodo.id
          ? { ...todo, status: !todo.status }
          : todo
      );
    }
}