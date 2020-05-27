import React from 'react';
import {connect } from 'react-redux';
import {ClearTodo} from '../redux/todo/todo-actions'

const AllTodo = ({Todos,ClearTodo}) => {
    return(
        <div className="">
        { Todos.map((todo) =>{
            return(
                <div>
                    <p>{ todo.Todo}</p>
                    <span  onClick = {() => ClearTodo(todo)} style={{cursor:'pointer'}}>
                        &#10005;
                    </span>
                </div>
            )
        })}
            
        </div>
    )
}
const mapStateToProps = state =>({
    Todos: state.todo.Todos
})

const mapDispatchToProps = dispatch => ({
    ClearTodo: (todo) => dispatch(ClearTodo(todo))
})


export default connect(mapStateToProps,mapDispatchToProps)(AllTodo);