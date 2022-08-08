import React, {useEffect} from 'react';
import styles from './Login.module.css';
import {Field, Form} from 'react-final-form';
import {required} from "../../utils/validator";
import Element from "../../hoc/formValidation";
import {connect} from "react-redux";
import {authThunk, loginThunk} from "../../redux/auth-reducer";
import {useNavigate} from "react-router-dom";

const Input = Element('input')

const LoginForm = ({ onSubmit }) => {

    return (
            <Form
                onSubmit={onSubmit}
                render={({ handleSubmit }) => (
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <Field name='email' placeholder={'email'} component={Input} validate={required} />
                        <Field name='password' placeholder={'password'} component={Input} validate={required} type='password' />
                        <div className={styles.container}>
                            <Field name='rememberMe' type='checkbox' component='input' />
                            <p>remember me</p>
                        </div>
                        <button type='submit'>Login</button>
                    </form>
                )}
            />
        );
};

const Login = ({ id, isAuth, loginThunk, authThunk }) => {
    const navigate = useNavigate();

    const onSubmit = (formData) => {
       loginThunk(formData.email, formData.password, formData.rememberMe)
    }

    useEffect(() => {
        if (isAuth) navigate(`/profile/${id}`)
    }, [isAuth, id])

    return (
        <div>
            <h1>Login</h1>
            <LoginForm onSubmit={onSubmit} loginThunk={loginThunk} authThunk={authThunk} />
        </div>
    );
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    id: state.auth.userId
})

export default connect(mapStateToProps, {loginThunk, authThunk})(Login);