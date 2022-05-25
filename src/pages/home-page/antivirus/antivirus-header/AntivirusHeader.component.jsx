import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './antivirus-header.styles.scss';

import { ScreenSizeContext } from '../../../../contexts/ScreenSize.context';

import Button from '../../../../components/button/Button.component';

const AntivirusHeader = ({ index }) => {
    const { isMobile } = useContext(ScreenSizeContext);

    return (
        <div className="antivirus-header">
            <div>
                {isMobile && <div className="index-mobile">{index}</div>}

                <div className="editors-choice">Editor's Choice</div>
            </div>

            <Button className="save-btn">
                <FontAwesomeIcon icon={faStar} />
            </Button>
        </div>
    );
};

export default AntivirusHeader;
