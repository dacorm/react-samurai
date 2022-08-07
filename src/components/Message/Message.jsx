import React, {useEffect} from 'react';
import styles from './Message.module.css';
import {connect} from "react-redux";
import {useNavigate} from "react-router-dom";
import {authRedirect} from "../../hoc/authRedirect";

const Message = ({ author, text, id, isAuth }) => {


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

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
})

const Redirect = authRedirect(Message)

export default connect(mapStateToProps, {})(Redirect)