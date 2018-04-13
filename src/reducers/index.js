import { combineReducers } from 'redux'
const todos = (state = [], action) => {
    switch (action.type){
        case 'ADD_TODO':
            return [...state,  {id: action.id, text: action.text, completed: false}]
        case 'TOGGLE_TODO':
            return state.map((obj) => {
                if(obj.id === action.id){
                    return {...obj, completed: !obj.completed}
                }
                return obj;
            })
        default:
            return state;
    }
}

const visible = (state = 'SHOW_ALL', action) => {
    switch (action.type){
        case 'SET_VISIBLE':
            return action.filter;
        default:
            return state;
    }
}

export default combineReducers({
      todos,
      visible
})
