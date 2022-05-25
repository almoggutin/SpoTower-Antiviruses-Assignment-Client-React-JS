import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import './antivirus-content-mobile.styles.scss';

import { ScreenSizeContext } from '../../../../contexts/ScreenSize.context';

import RatingStars from '../../../../components/rating-stars/RatingStars.component';
import Details from '../../../../components/details/Details.component';
import Compatibility from '../../../../components/compatibility/Compatibility.component';
import Button from '../../../../components/button/Button.component';

const AntivirusContentMobile = ({ title, imageURL, logoURL, rating, compatibilities, advantages }) => {
    const { isMobile } = useContext(ScreenSizeContext);

    return (
        <div className="antivirus-content-mobile">
            <div className="product-container">
                <div className="images-container">
                    <img src={imageURL} alt="Product" />
                    <img src={logoURL} alt="Logo" />
                </div>

                <div className="meta-container">
                    <div className="ratings-container">
                        <h1>{rating.number}</h1>

                        <RatingStars amount={5} />
                    </div>

                    <Compatibility compatibilities={compatibilities} className="mobile" />
                </div>
            </div>

            <Details title={title} advantages={advantages} />

            <Button className="visit-site-btn">
                <span>Vist Site</span>

                {isMobile && <FontAwesomeIcon icon={faArrowRightLong} />}
            </Button>
        </div>
    );
};

export default AntivirusContentMobile;
