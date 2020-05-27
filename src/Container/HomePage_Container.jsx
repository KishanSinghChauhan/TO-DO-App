import React from 'react';
import AllTodo from '../Components/allTodo_Component'
import ToDoInput from '../Components/todoInput_Component';
import {connect} from 'react-redux'
const HomePage = ({Todos}) => {
    return(
        <div className="container">
        {Todos.map((todo) =>{
            return(
                <>
                <AllTodo key={todo.id} todo={todo}/>

                </>
            )})}
            <ToDoInput />
        </div>
    )
}
const mapStateToProps = state =>({
    Todos: state.todo.Todos
})

export default connect(mapStateToProps)(HomePage);