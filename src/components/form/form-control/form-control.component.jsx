import React from 'react';
import './form-control.styles.scss';

const FormControl = ({ id, type = 'text', className = 'form-control', required = false, handleInput }) => {
    return <input id={id} className={className} type={type} required={required} onInput={handleInput} />;
};

export default FormControl;
