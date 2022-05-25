import { cloneDeep } from 'lodash';

import AntiVirusesActionTypes from '../actions/antiviruses.actions';

import antivirusesData from '../data/antiviruses.data';

export const ANTIVIRUSES_INITIAL_STATE = antivirusesData;

const antivirusesReducer = (state, action) => {
    switch (action.type) {
        case AntiVirusesActionTypes.ADD_ANTIVIRUS: {
            const { antivirus } = action.payload;

            const updatedState = cloneDeep(state);
            updatedState.push(antivirus);

            return updatedState;
        }
        default: {
            return state;
        }
    }
};

export default antivirusesReducer;
