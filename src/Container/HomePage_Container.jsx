import React from 'react';
import TodoList from '../Components/TodoList_Component'
import ToDoInput from '../Components/todoInput_Component';
import {connect} from 'react-redux'
import './HomePage_styles.scss'
const HomePage = ({Todos}) => {
    return(
        <div className="container home-page">
        <h1 className="home-head">My TO-DO's</h1>
            {Todos.map((todo) =>{
                return(
                    <>
                        <TodoList key={todo.id} todo={todo}/>
                    </>
                )}
            )}
            <ToDoInput />
        </div>
    )
}
const mapStateToProps = state =>({
    Todos: state.todo.Todos
})

export default connect(mapStateToProps)(HomePage);