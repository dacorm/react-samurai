
const initialState = {
    message: [{author: 'Dmitry', text: 'I can have text inside', id: 1}, {
        author: 'Denis',
        text: 'I cannot have',
        id: 2
    }],
    users: [{name: 'Andrew', id: 1}, {name: 'Petr', id: 2}, {name: 'Demetro', id: 3}, {name: 'Max', id: 4},],
    newMessageText: ""
}

const dialogsReducer = (state = initialState, action) => {
    if (action.type === 'ADD-MESSAGE') {
        const newMsg = {author: 'Dmitry', text: state.newMessageText, id: `${state.message.length} + 1`};
        state.message.push(newMsg);
    } else if (action.type === 'UPDATE-MESSAGE-TEXT') {
        state.newMessageText = action.newText;}

    return state
}

export default dialogsReducer