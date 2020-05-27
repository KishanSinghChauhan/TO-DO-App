export const addTodoID = (Todos, currentTodoToAdd) => {
    return [...Todos, { ...currentTodoToAdd, id:Todos.length }];
};
   