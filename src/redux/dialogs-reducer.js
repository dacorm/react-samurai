
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
    const stateCopy = {...state}
    if (action.type === 'ADD-MESSAGE') {
        const newMsg = {author: 'Dmitry', text: state.newMessageText, id: `${state.message.length} + 1`};
        stateCopy.message = [...state.message];
        stateCopy.message.push(newMsg);
    } else if (action.type === 'UPDATE-MESSAGE-TEXT') {
        stateCopy.newMessageText = action.newText;}

    return stateCopy
}

export const updateMessageTextActionCreator = (text) => {
    return {type: 'UPDATE-MESSAGE-TEXT', newText: text}
}

export const addMessageActionCreator = () => {
    return {type: 'ADD-MESSAGE'}
}


export default dialogsReducer