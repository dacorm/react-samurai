import React from 'react';
import styles from './Message.module.css';
import {connect} from "react-redux";
import {authRedirect} from "../../hoc/authRedirect";
import {compose} from "redux";
import {AppStateType} from "../../redux/redux-store";

export type MessageProps = {
    author: string
    text: string
    id: number | null
    isAuth: boolean
}

const Message: React.FC<MessageProps> = ({ author, text, id, isAuth }): JSX.Element => {


    return (
        <div className={styles.message}>
            <div className={styles.avatar}>
                <div className={styles.round}/>
                <p className={styles.author}>{author}</p>
            </div>
            <div className={styles.messageItem}>{text}</div>
        </div>
    )
}

let mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
})



export default compose(
    connect(mapStateToProps, {}),
    authRedirect
)(Message);