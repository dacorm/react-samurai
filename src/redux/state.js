import {rerender} from "../render";


const state = {
    posts: [{ message: 'Hey its my first post', id: 1 },{ message: 'Im writing social network', id: 2 },],
    message: [{author: 'Dmitry', text: 'I can have text inside', id: 1}, {author: 'Denis', text: 'I cannot have', id: 2}],
    users: [{ name: 'Andrew', id: 1}, { name: 'Petr', id: 2}, { name: 'Demetro', id: 3}, { name: 'Max', id: 4},],
}

export const addPost = (message) => {
    const newMsg = { message: message, id: `${state.posts.length} + 1`}
    state.posts.unshift(newMsg);
    rerender(state, addPost);
}

export default state