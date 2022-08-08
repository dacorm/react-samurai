import React from 'react';
import styles from './Login.module.css';
import {Field, Form} from 'react-final-form';

const LoginForm = () => {

    const onSubmit = (formData) => {
        console.log(formData)
    }

    return (
            <Form
                onSubmit={onSubmit}
                render={({ handleSubmit }) => (
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <Field name='login' placeholder={'Login'} component='input' />
                        <Field name='password' placeholder={'password'} component='input'/>
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

const Login = () => {
    return (
        <div>
            <h1>Login</h1>
            <LoginForm />
        </div>
    );
};

export default Login;