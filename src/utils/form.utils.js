export const areFormValuesValid = (values) => {
    const areValuesValid = Object.values(values).every((value) => value);

    return areValuesValid;
};

export const areSomeFormValuesValid = (values) => {
    const areSomeValuesValid = Object.values(values).some((value) => value);

    return areSomeValuesValid;
};
