import { cloneDeep } from 'lodash';

import addAntivirusFormActionTypes from '../actions/add-antivirus-form.actions';

import { areFormValuesValid, areSomeFormValuesValid } from '../utils/form.utils';

export const ADD_ANTIVIRUS_FORM_INITIAL_STATE = {
    values: {
        title: '',
        imageURL: '',
        logoURL: '',
        compatibilities: {
            macos: false,
            ios: false,
            windows: false,
            android: false,
        },
    },
    validities: {
        title: true,
        imageURL: true,
        logoURL: true,
        compatibility: true,
    },
    errorMessages: {
        title: '',
        imageURL: '',
        logoURL: '',
    },
    isFormValid: false,
};

const addAntivirusFormReducer = (state, action) => {
    switch (action.type) {
        case addAntivirusFormActionTypes.UPDATE_INPUT: {
            const { inputType, value, isValid, errorMessage } = action.payload;

            const updatedState = cloneDeep(state);
            state.values[inputType] = value;
            state.validities[inputType] = isValid;
            state.errorMessages[inputType] = errorMessage;

            updatedState.isFormValid =
                areFormValuesValid(updatedState.validities) &&
                areFormValuesValid(updatedState.values) &&
                areSomeFormValuesValid(updatedState.values.compatibilities);

            return updatedState;
        }
        case addAntivirusFormActionTypes.UPDATE_CHECKBOX: {
            const { checkboxType, isChecked } = action.payload;

            const updatedState = cloneDeep(state);
            state.values.compatibilities[checkboxType] = isChecked;

            const isCompatibleValid = Object.values(state.values.compatibilities).includes(true);
            state.validities.compatibility = isCompatibleValid;
            updatedState.isFormValid =
                areFormValuesValid(updatedState.validities) &&
                areFormValuesValid(updatedState.values) &&
                areSomeFormValuesValid(updatedState.values.compatibilities);

            return updatedState;
        }
        default:
            return state;
    }
};

export default addAntivirusFormReducer;
