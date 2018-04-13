import React, {Component} from 'react'
import TodoList from '../components/TodoList'
import { connect } from 'react-redux'
import {toggleTodo} from '../actions'

const getVisibleTodos = (filter, todos) => {
    switch (filter){
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed)
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed)
        default:
            return todos;
    }
}

const mapDispatchToProps = dispatch => {
    return{
        handleTodoClick: id => dispatch(toggleTodo(id))
    }

}
const mapStateToProps = state => {
    return {
        todos: getVisibleTodos(state.visible, state.todos)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)
