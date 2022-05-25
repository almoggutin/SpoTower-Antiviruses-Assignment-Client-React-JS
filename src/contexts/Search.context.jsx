import { createContext, useReducer } from 'react';

import searchbarReducer, { SEARCHBAR_INITIAL_STATE } from '../reducers/searchbar.reducer';

export const SearchContext = createContext();

const SearchContextProvider = ({ children }) => {
    const [searchState, dispatchSearchState] = useReducer(searchbarReducer, SEARCHBAR_INITIAL_STATE);

    const value = { searchState, dispatchSearchState };

    return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
};

export default SearchContextProvider;
