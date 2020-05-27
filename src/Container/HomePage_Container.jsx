import React from 'react';
import AllTodo from '../Components/allTodo_Component'
import ToDoInput from '../Components/todoInput_Component';
const HomePage = () => {
    return(
        <div className="container">
            <AllTodo />
            <ToDoInput />
        </div>
    )
}


export default HomePage;