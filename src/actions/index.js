let todoId = 3;
export const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        text: text,
        id: todoId++
    }
}
export const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id: id
    }
}

export const setVisible = (filter) => {
    return {
        type: 'SET_VISIBLE',
        filter: filter
    }
}
