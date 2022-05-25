import './button.styles.scss';

const Button = ({ type = 'button', className = '', disabled = false, handleClick, children }) => {
    return (
        <button type={type} disabled={disabled} className={`custom-btn ${className}`} onClick={handleClick}>
            {children}
        </button>
    );
};

export default Button;
