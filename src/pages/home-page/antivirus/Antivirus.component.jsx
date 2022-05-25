import { useContext } from 'react';
import './antivirus.styles.scss';

import { ScreenSizeContext } from '../../../contexts/ScreenSize.context';

import AntivirusHeader from './antivirus-header/AntivirusHeader.component';
import AntivirusContentMobile from './antivirus-content-mobile/AntivirusContentMobile.component';
import AntivirusContentDesktop from './antivirus-content-desktop/AntivirusContentDesktop.component';
import Compatibility from '../../../components/compatibility/Compatibility.component';

const Antivirus = ({ imageURL, logoURL, rating, reviews, compatibilities, advantages, title, index }) => {
    const { isMobile } = useContext(ScreenSizeContext);

    return (
        <div className="antivirus-container">
            <AntivirusHeader index={index} />

            {!isMobile && <div className="index-desktop">{index}</div>}

            {isMobile ? (
                <AntivirusContentMobile
                    title={title}
                    imageURL={imageURL}
                    logoURL={logoURL}
                    rating={rating}
                    compatibilities={compatibilities}
                    advantages={advantages}
                />
            ) : (
                <AntivirusContentDesktop
                    title={title}
                    imageURL={imageURL}
                    logoURL={logoURL}
                    rating={rating}
                    advantages={advantages}
                    reviews={reviews}
                />
            )}

            {!isMobile && <Compatibility compatibilities={compatibilities} className="desktop" />}
        </div>
    );
};

export default Antivirus;
