import React from 'react';
import {connect } from 'react-redux';
import {ClearTodo, toogleStatus} from '../redux/todo/todo-actions'
import './styles/TodoList_styles.scss'


const TodoList = ({todo,ClearTodo,toogleStatus}) => {
    const { Todo,status } = todo
    return(
        <div className="todo-list">
            <span className="font-awesome-icon"><i className="fa fa-ellipsis-v fa-md" aria-hidden="true"></i><i className="fa fa-ellipsis-v fa-md" aria-hidden="true"></i></span>
            <input type="checkbox" checked={status} onClick={() => toogleStatus(todo)}/>
            <span className="todo-name">{ Todo }</span>
            {status ? (
                <span className="status-complete text-success">completed</span>
                ) : null
            }
            <span className="delete-option" onClick = {() => ClearTodo(todo)} style={{cursor:'pointer'}}>
                &#10005;
            </span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    ClearTodo: (todo) => dispatch(ClearTodo(todo)),
    toogleStatus: (todo) => dispatch(toogleStatus(todo))
})


export default connect(null,mapDispatchToProps)(TodoList);