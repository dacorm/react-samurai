import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";

export const authRedirect = (Component) => {

    const Redirect = (props) => {
        const navigate = useNavigate();

        useEffect(() => {
            if (!props.isAuth) navigate('/login')
        }, [props.isAuth])

        return <Component {...props} />
    };

    return Redirect
}


