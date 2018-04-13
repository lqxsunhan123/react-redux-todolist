import React, {Component} from 'react'
class AddTodo extends Component{
    constructor(props){
        super(props);
    }

    render() {
        let obj;
        return (
            <div>
                <input type="text" ref={node => obj = node}/><button onClick={() => this.props.handleClick(obj.value)}>Add Todo</button>
            </div>
        )
    }

}

export default AddTodo