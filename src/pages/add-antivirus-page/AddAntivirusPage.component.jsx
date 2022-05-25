import './add-antivirus-page.styles.scss';

import useLoader from '../../hooks/useLoader.hook';

import Loader from '../../components/shared/loader/Loader.component';
import AddAntivirusForm from './add-antivirus-form/AddAntivirusForm.component';

const AddAntivirusPage = () => {
    const isMobile = useLoader();

    return isMobile ? (
        <Loader />
    ) : (
        <main className="add-antivirus-page">
            <h1>Add Antivirus</h1>

            <AddAntivirusForm />
        </main>
    );
};

export default AddAntivirusPage;
