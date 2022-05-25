import { createContext, useReducer } from 'react';

import antivirusesReducer, { ANTIVIRUSES_INITIAL_STATE } from '../reducers/antiviruses.reducer';

export const AntivirusesContext = createContext();

const AntivirusesContextProvider = ({ children }) => {
    const [antivirusesState, dispatchAntivirusesState] = useReducer(antivirusesReducer, ANTIVIRUSES_INITIAL_STATE);

    const value = { antivirusesState, dispatchAntivirusesState };

    return <AntivirusesContext.Provider value={value}>{children}</AntivirusesContext.Provider>;
};

export default AntivirusesContextProvider;
