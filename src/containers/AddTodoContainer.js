

import React, {Component} from 'react'
import AddTodo from '../components/AddTodo'
import { connect } from 'react-redux'
import {addTodo} from '../actions'

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick:(text)=> {
            dispatch(addTodo(text))
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    // console.log(state);
    // console.log(ownProps)
    // return {
    //     active: ownProps.filter === state.visible
    // }
    return state;
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTodo)

