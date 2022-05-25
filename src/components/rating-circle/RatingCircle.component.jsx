import './rating-circle.styles.scss';

const RatingCircle = ({ rating }) => {
    return (
        <div className="rating-circle">
            <div>
                <h3>{rating.description}</h3>
                <h1>{rating.number}</h1>
            </div>
        </div>
    );
};

export default RatingCircle;
