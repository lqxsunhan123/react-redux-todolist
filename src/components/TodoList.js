import React, {Component} from 'react'

class TodoList extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <ul>
                {this.props.todos.map((obj) => {
                    return <li style={{ textDecoration: obj.completed ? 'line-through' : 'none'}} onClick={() => this.props.handleTodoClick(obj.id)} key={obj.id}>{obj.text}</li>
                })}
            </ul>
        )
    }

}

export default TodoList