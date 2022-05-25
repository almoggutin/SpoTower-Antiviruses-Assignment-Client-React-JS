import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faAppStoreIos, faWindows, faAndroid } from '@fortawesome/free-brands-svg-icons';
import './compatibility.styles.scss';

const Compatibility = ({ compatibilities, className }) => {
    return (
        <div className={`compatibility-container ${className}`}>
            <span>Compatibility</span>

            <div className="compatibility-icons">
                {compatibilities.macos && <FontAwesomeIcon icon={faApple} />}

                {compatibilities.ios && <FontAwesomeIcon icon={faAppStoreIos} />}

                {compatibilities.windows && <FontAwesomeIcon icon={faWindows} />}

                {compatibilities.android && <FontAwesomeIcon icon={faAndroid} />}
            </div>
        </div>
    );
};

export default Compatibility;
