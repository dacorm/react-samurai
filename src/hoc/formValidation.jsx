import React from 'react';
import s from './formValidation.module.css';

const Element = Element => ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
        <>
            <Element {...input} {...props} className={ s.formControl + " " + (hasError ? s.error : "") + " " + (Element === 'textarea' ? s.form : "") } />
            { hasError && <span> { meta.error } </span> }
        </>
    );
};

export default Element