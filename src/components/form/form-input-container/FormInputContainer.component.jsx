import React from 'react';
import './form-input-container.styles.scss';

import FormLabel from '../form-label/FormLabel.component';
import FormControl from '../form-control/form-control.component';

const FormInputContainer = ({ id, labelTitle, inputType, isRequired, handleInput, errorMessage }) => {
    return (
        <div className="form-input-container">
            <FormLabel htmlFor={id} title={labelTitle} />

            <FormControl id={id} type={inputType} required={isRequired} handleInput={handleInput} />

            <div className="error-message">{errorMessage}</div>
        </div>
    );
};

export default FormInputContainer;
