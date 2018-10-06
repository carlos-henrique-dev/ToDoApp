export const ADD_TODO = 'ADD_TODO';
export const addTodo = text => ({
    type: ADD_TODO,
    text: text // no ES6 da pra usar so ' text ' ja que é igual
});

