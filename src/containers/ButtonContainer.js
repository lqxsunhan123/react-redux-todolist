

import React, {Component} from 'react'
import Button from '../components/Button'
import { connect } from 'react-redux'
import {setVisible} from '../actions'

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleClick:()=> {
            dispatch(setVisible(ownProps.filter))
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.visible
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Button)
