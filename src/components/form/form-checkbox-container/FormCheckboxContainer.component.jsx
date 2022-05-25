import './form-checkbox-container.styles.scss';

import FormControlCheckbox from '../form-control-checkbox/FormControlCheckbox.component';
import FormLabel from '../form-label/FormLabel.component';

const FormCheckboxContainer = ({ id, labelTitle, value, handleChange }) => {
    return (
        <div className="form-checkbox-container">
            <FormControlCheckbox id={id} value={value} handleChange={handleChange} />

            <FormLabel title={labelTitle} htmlFor={id} className="form-label-checkbox" />
        </div>
    );
};

export default FormCheckboxContainer;
