
const dialogsReducer = (state, action) => {
    if (action.type === 'ADD-MESSAGE') {
        const newMsg = {author: 'Dmitry', text: state.newMessageText, id: `${state.message.length} + 1`};
        state.message.push(newMsg);
    } else if (action.type === 'UPDATE-MESSAGE-TEXT') {
        state.newMessageText = action.newText;}

    return state
}

export default dialogsReducer