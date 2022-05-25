import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './rating-stars.styles.scss';

const RatingStars = ({ amount }) => {
    return (
        <div className="rating-stars">
            {[...Array(amount)].map(() => (
                <FontAwesomeIcon key={uuidv4()} icon={faStar} />
            ))}
        </div>
    );
};

export default RatingStars;
