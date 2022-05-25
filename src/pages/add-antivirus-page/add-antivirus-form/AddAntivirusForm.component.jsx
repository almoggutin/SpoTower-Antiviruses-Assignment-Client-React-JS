import { useReducer, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './add-antivirius-form.styles.scss';

import { AntivirusesContext } from '../../../contexts/Antiviruses.context';
import addAntivirusFormReducer, {
    ADD_ANTIVIRUS_FORM_INITIAL_STATE,
} from '../../../reducers/add-antivirus-form.reducer';
import { updateInputAction, updateCheckbox } from '../../../actions/add-antivirus-form.actions';
import { addAntivirusAction } from '../../../actions/antiviruses.actions';

import FormInputContainer from '../../../components/form/form-input-container/FormInputContainer.component';
import FormCheckboxContainer from '../../../components/form/form-checkbox-container/FormCheckboxContainer.component';
import FormLabel from '../../../components/form/form-label/FormLabel.component';
import Button from '../../../components/button/Button.component';

import { Antivirus } from '../../../models/antivirus.model';

const AddAntivirusForm = () => {
    const navigate = useNavigate();

    const { dispatchAntivirusesState } = useContext(AntivirusesContext);

    const [addAntivirusFormState, dispatchAddAntivirusFormState] = useReducer(
        addAntivirusFormReducer,
        ADD_ANTIVIRUS_FORM_INITIAL_STATE
    );

    const handleTitleInput = (event) => {
        const titleInput = event.target.value.trim();

        if (titleInput === '')
            return dispatchAddAntivirusFormState(updateInputAction('title', titleInput, false, 'Please add a title'));

        dispatchAddAntivirusFormState(updateInputAction('title', titleInput));
    };

    const handleImageURLInput = (event) => {
        const imageURLInput = event.target.value.trim();

        if (imageURLInput === '')
            return dispatchAddAntivirusFormState(
                updateInputAction('imageURL', imageURLInput, false, 'Please add an image url')
            );

        dispatchAddAntivirusFormState(updateInputAction('imageURL', imageURLInput));
    };

    const handleLogoURLInput = (event) => {
        const logoURLInput = event.target.value.trim();

        if (logoURLInput === '')
            return dispatchAddAntivirusFormState(
                updateInputAction('logoURL', logoURLInput, false, 'Please add an image url')
            );

        dispatchAddAntivirusFormState(updateInputAction('logoURL', logoURLInput));
    };

    const handleCompatibilityChange = (event) => {
        const chekcbox = event.target;

        dispatchAddAntivirusFormState(updateCheckbox(chekcbox.value, chekcbox.checked));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const {
            title,
            imageURL,
            logoURL,
            compatibilities: { macos, ios, windows, android },
        } = addAntivirusFormState.values;
        const antivirus = new Antivirus(title, imageURL, logoURL, [], 0, '', 0, macos, ios, windows, android);

        dispatchAntivirusesState(addAntivirusAction(antivirus));

        navigate('/');
    };

    return (
        <form className="add-antivirus-form" onSubmit={handleSubmit}>
            <FormInputContainer
                id="title"
                labelTitle="Title:"
                handleInput={handleTitleInput}
                errorMessage={addAntivirusFormState.errorMessages.title}
            />

            <FormInputContainer
                id="image-url"
                labelTitle="Image URL:"
                handleInput={handleImageURLInput}
                errorMessage={addAntivirusFormState.errorMessages.imageURL}
            />

            <FormInputContainer
                id="logo-url"
                labelTitle="Logo URL:"
                handleInput={handleLogoURLInput}
                errorMessage={addAntivirusFormState.errorMessages.logoURL}
            />

            <div className="compatibilities">
                <FormLabel title="Compatibilities:" />

                <FormCheckboxContainer
                    id="macos-compatible"
                    labelTitle="MacOS"
                    value="macos"
                    handleChange={handleCompatibilityChange}
                />

                <FormCheckboxContainer
                    id="ios-compatible"
                    labelTitle="iOS"
                    value="ios"
                    handleChange={handleCompatibilityChange}
                />

                <FormCheckboxContainer
                    id="windows-compatible"
                    labelTitle="Windows"
                    value="windows"
                    handleChange={handleCompatibilityChange}
                />

                <FormCheckboxContainer
                    id="android-compatible"
                    labelTitle="Android"
                    value="android"
                    handleChange={handleCompatibilityChange}
                />

                {!addAntivirusFormState.validities.compatibility && (
                    <div className="error-message">Please choose at least one compatible OS</div>
                )}
            </div>

            <Button type="submit" className="add-btn" disabled={!addAntivirusFormState.isFormValid}>
                Add
            </Button>
        </form>
    );
};

export default AddAntivirusForm;
