import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import './antivirus-content-desktop.styles.scss';

import RatingCircle from '../../../../components/rating-circle/RatingCircle.component';
import RatingStars from '../../../../components/rating-stars/RatingStars.component';
import Details from '../../../../components/details/Details.component';
import Button from '../../../../components/button/Button.component';

const AntivirusContentDesktop = ({ title, imageURL, logoURL, rating, advantages, reviews }) => {
    return (
        <div className="antivirus-content-desktop">
            <div className="images-container">
                <img src={imageURL} alt="Product" />
                <img src={logoURL} alt="Logo" />
            </div>

            <Details title={title} advantages={advantages} className="desktop" />

            <div className="ratings-container">
                <RatingCircle rating={rating} />

                <RatingStars amount={5} />

                <span>{`Reviews (${reviews})`}</span>
            </div>

            <Button className="visit-site-btn">Visit Site</Button>
        </div>
    );
};

export default AntivirusContentDesktop;
