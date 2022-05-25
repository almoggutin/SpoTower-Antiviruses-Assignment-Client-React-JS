import './form-control-checkbox.styles.scss';

const FormControlCheckbox = ({ id, value, className = 'form-control-checkbox', required = false, handleChange }) => {
    return (
        <input
            id={id}
            type="checkbox"
            value={value}
            className={className}
            required={required}
            onChange={handleChange}
        />
    );
};

export default FormControlCheckbox;
