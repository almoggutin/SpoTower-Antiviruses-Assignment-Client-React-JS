import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import './details.styles.scss';

const Details = ({ title, advantages, className = '' }) => {
    return (
        <div className={`details-container ${className}`}>
            <div className="title">{title}</div>

            <ul className="advantages-items">
                {advantages.map(({ id, description }) => (
                    <li key={id} className="advantages-item">
                        <FontAwesomeIcon icon={faCheck} />

                        <span>{description}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Details;
