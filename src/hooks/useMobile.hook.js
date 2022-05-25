import { useState, useEffect } from 'react';

const useMobile = () => {
    const [isMobile, setIsMobile] = useState(false);

    const handleResize = () => {
        const width = window.innerWidth;

        width > 999 ? setIsMobile(false) : setIsMobile(true);
    };

    useEffect(() => {
        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isMobile]);

    return isMobile;
};

export default useMobile;
