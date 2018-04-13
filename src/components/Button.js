import React, {Component} from 'react'
class Button extends Component{
    constructor(props){
        super(props);

    }

    render() {
        return (
           <button disabled={this.props.active} onClick={() => this.props.handleClick()} >{this.props.children}</button>
        )
    }

}

export default Button