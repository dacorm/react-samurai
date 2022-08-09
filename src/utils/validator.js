export const required = value => {
    if (value) return undefined;

    return "Это поле обязательно к заполнению";
}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return `Max length is ${maxLength} symbols`;
    return undefined;
}

export const myPostsValidator = (value) => {
    if (value && value.length > 30) return `Max length is 30 symbols`;
    if (value) return undefined
    return "Это поле обязательно к заполнению";
}

export const ProfileValidator = (value) => {
    if (value && value.length > 45) return `Max length is 45 symbols`;
}