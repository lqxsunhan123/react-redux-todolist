import React from 'react'
import { render } from 'react-dom'
import App from './components/App'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
const store = createStore(rootReducer, {visible: 'SHOW_ALL', todos: [{id:1, text:'s', completed: false}, {id:2, text:'m', completed: false}]})

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)
