const searchbarActionTypes = {
    UPDATE_SEARCH: 'UPDATE_SEARCH',
    UPDATE_COMPATIBILITY: 'UPDATE_COMPATIBILITY',
};

export const updateSearchAction = (search) => ({
    type: searchbarActionTypes.UPDATE_SEARCH,
    payload: {
        search,
    },
});

export const updateCompatibilityAction = (compatibilityType, isCompatible) => ({
    type: searchbarActionTypes.UPDATE_COMPATIBILITY,
    payload: {
        compatibilityType,
        isCompatible,
    },
});

export default searchbarActionTypes;
