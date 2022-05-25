const AntiVirusesActionTypes = {
    ADD_ANTIVIRUS: 'ADD_ANTIVIRUS',
};

export const addAntivirusAction = (antivirus) => ({
    type: AntiVirusesActionTypes.ADD_ANTIVIRUS,
    payload: {
        antivirus,
    },
});

export default AntiVirusesActionTypes;
