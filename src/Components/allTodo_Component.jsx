import React from 'react';
import {connect } from 'react-redux';
import {ClearTodo, toogleStatus} from '../redux/todo/todo-actions'


const AllTodo = ({todo,ClearTodo,toogleStatus}) => {
    const { Todo,status } = todo
    return(
        <div className="">
                <div>
                <input type="checkbox" checked={status} onClick={() => toogleStatus(todo)}/>
                    <p>{ Todo }</p>
                    {status ? (
                        <span>completed</span>
                        ) : null
                    }
                    <span  onClick = {() => ClearTodo(todo)} style={{cursor:'pointer'}}>
                        &#10005;
                    </span>
                </div>            
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    ClearTodo: (todo) => dispatch(ClearTodo(todo)),
    toogleStatus: (todo) => dispatch(toogleStatus(todo))
})


export default connect(null,mapDispatchToProps)(AllTodo);