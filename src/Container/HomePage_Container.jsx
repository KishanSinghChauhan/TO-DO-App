import React from 'react';
import AllTodo from '../Components/allTodo_Component'
import {connect} from 'react-redux';
// import ToDoInput from '../Components/todoInput_Component';

const HomePage = ({Todos}) => {
    return(
        <div className="container">
        { Todos.map(({id, ...othertodos}) => (
            <AllTodo key={id} { ...othertodos }/>
        ))}
        {/* <ToDoInput /> */}
        </div>
    )
}

const mapStateToProps = state =>({
    Todos: state.todo.Todos
})

export default connect(mapStateToProps)(HomePage);