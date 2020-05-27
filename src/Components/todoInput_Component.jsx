import React, { Component } from 'react';
import {connect } from 'react-redux';
import {addTodo} from '../redux/todo/todo-actions'
class TodoInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleInputChange(event) {
        const target = event.target;
        const value =  target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault()
        // alert(JSON.stringify(this.state));
        
        const { todo } =  this.state
        this.props.addTodo({ Todo:todo})
        this.setState({
            todo:''
        })
    }

    render(){
       
        return (
            <div>
                <div className="row row-content">
                        <div className="col-12" style={{marginTop:'0%'}}>
                        <form onSubmit={this.handleSubmit}>
                                    <input type="text" id="todo" name="todo"
                                        placeholder="todo Name"
                                        value={this.state.todo}
                                        onChange={this.handleInputChange} />
                             
                                    <button type="submit" color="success">
                                        POST
                                    </button>
                        </form>
                    </div>
               </div>
        </div>
    );
    }
}

const mapDispatchToProps = dispatch =>({
    addTodo: todo => dispatch(addTodo(todo))
})
export default connect(null,mapDispatchToProps)(TodoInput);
