export const required = (value: string) => {
    if (value) return undefined;

    return "Это поле обязательно к заполнению";
}

export const maxLengthCreator = (maxLength: number) => (value: string) => {
    if (value.length > maxLength) return `Max length is ${maxLength} symbols`;
    return undefined;
}

export const myPostsValidator = (value: string) => {
    if (value && value.length > 30) return `Max length is 30 symbols`;
    if (value) return undefined
    return "Это поле обязательно к заполнению";
}

export const ProfileValidator = (value: string) => {
    if (value && value.length > 45) return `Max length is 45 symbols`;
}