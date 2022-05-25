import { createContext } from 'react';

import useMobile from '../hooks/useMobile.hook';

export const ScreenSizeContext = createContext();

const ScreenSizeContextProvider = ({ children }) => {
    const isMobile = useMobile();

    const value = { isMobile };

    return <ScreenSizeContext.Provider value={value}>{children}</ScreenSizeContext.Provider>;
};

export default ScreenSizeContextProvider;
