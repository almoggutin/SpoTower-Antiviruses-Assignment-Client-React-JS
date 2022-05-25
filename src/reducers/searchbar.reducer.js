import { cloneDeep } from 'lodash';

import searchbarActionTypes from '../actions/searchbar.actions';

export const SEARCHBAR_INITIAL_STATE = {
    search: '',
    compatibilities: {
        macos: false,
        ios: false,
        windows: false,
        android: false,
    },
};

const searchbarReducer = (state, action) => {
    switch (action.type) {
        case searchbarActionTypes.UPDATE_SEARCH: {
            const { search } = action.payload;

            const updatedState = { ...cloneDeep(state), search };

            return updatedState;
        }
        case searchbarActionTypes.UPDATE_COMPATIBILITY: {
            const { compatibilityType, isCompatible } = action.payload;

            const updatedState = cloneDeep(state);
            updatedState.compatibilities[compatibilityType] = isCompatible;

            return updatedState;
        }
        default:
            return state;
    }
};

export default searchbarReducer;
