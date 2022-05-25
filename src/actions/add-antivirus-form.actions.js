const addAntivirusFormActionTypes = {
    UPDATE_INPUT: 'UPDATE_INPUT',
    UPDATE_CHECKBOX: 'UPDATE_CHECKBOX',
};

export const updateInputAction = (inputType, value, isValid = true, errorMessage = '') => ({
    type: addAntivirusFormActionTypes.UPDATE_INPUT,
    payload: {
        inputType,
        value,
        isValid,
        errorMessage,
    },
});

export const updateCheckbox = (checkboxType, isChecked = false) => ({
    type: addAntivirusFormActionTypes.UPDATE_CHECKBOX,
    payload: {
        checkboxType,
        isChecked,
    },
});

export default addAntivirusFormActionTypes;
