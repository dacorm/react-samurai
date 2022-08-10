import {InferActionsTypes} from "./redux-store";


type MessageType = {
    author: string
    text: string
    id: number | string
}

type UsersType = {
    name: string
    id: number
}


const initialState = {
    message: [{author: 'Dmitry', text: 'I can have text inside', id: 1}, {
        author: 'Denis',
        text: 'I cannot have',
        id: 2
    }] as Array<MessageType>,
    users: [{name: 'Andrew', id: 1}, {name: 'Petr', id: 2}, {name: 'Demetro', id: 3}, {name: 'Max', id: 4},] as Array<UsersType>,
    newMessageText: ""
}

const dialogsReducer = (state = initialState, action: ActionsType) => {
    const stateCopy = {...state}
    if (action.type === 'ADD-MESSAGE') {
        const newMsg = {author: 'Dmitry', text: state.newMessageText, id: `${state.message.length} + 1`} as MessageType;
        stateCopy.message = [...state.message];
        stateCopy.message.push(newMsg);
    } else if (action.type === 'UPDATE-MESSAGE-TEXT') {
        stateCopy.newMessageText = action.newText;}

    return stateCopy
}

export const actions = {
    updateMessageTextActionCreator: (text: string) => ({type: 'UPDATE-MESSAGE-TEXT', newText: text}) as const,
    addMessageActionCreator: () => ({type: 'ADD-MESSAGE'}) as const
}

export const updateMessageTextActionCreator = (text: string) => {
    return {type: 'UPDATE-MESSAGE-TEXT', newText: text}
}

export const addMessageActionCreator = () => {
    return {type: 'ADD-MESSAGE'}
}


export default dialogsReducer
type ActionsType = InferActionsTypes<typeof actions>