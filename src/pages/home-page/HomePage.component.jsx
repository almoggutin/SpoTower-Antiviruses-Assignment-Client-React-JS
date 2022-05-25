import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './home-page.styles.scss';

import { AntivirusesContext } from '../../contexts/Antiviruses.context';
import { SearchContext } from '../../contexts/Search.context';

import Loader from '../../components/shared/loader/Loader.component';
import Button from '../../components/button/Button.component';
import Searchbar from '../../components/searchbar/Searchbar.component';
import Antivirus from './antivirus/Antivirus.component';

import { LOADER_TIMEOUT } from '../../constants/constants';

const HomePage = () => {
    const navigate = useNavigate();

    const { antivirusesState } = useContext(AntivirusesContext);
    const { searchState } = useContext(SearchContext);

    const [isLoading, setIsLoading] = useState(true);
    const [filteredAntiViruses, setFilteredAntiViruses] = useState([]);

    const handleClick = () => navigate('/antiviruses/add');

    useEffect(() => {
        const search = searchState.search;
        const compatibilities = searchState.compatibilities;

        if (search === '' && Object.values(compatibilities).every((compatiblity) => compatiblity === false))
            setFilteredAntiViruses(antivirusesState);
        else {
            const filteredCompatiblities = Object.entries(compatibilities).filter(
                ([compatiblityKey, compatiblityValue]) => compatiblityValue
            );

            const filteredArray = antivirusesState.filter((antivirus) => {
                return (
                    (search !== '' && antivirus.title.includes(search)) ||
                    filteredCompatiblities.some(([compatiblity]) => antivirus.compatibilities[compatiblity] === true)
                );
            });

            setFilteredAntiViruses(filteredArray);
        }

        setTimeout(() => {
            setIsLoading(false);
        }, LOADER_TIMEOUT);
    }, [searchState]);

    return isLoading ? (
        <Loader />
    ) : (
        <main className="home-page">
            <Button className="add-antivirus-btn" handleClick={handleClick}>
                Add AntiVirus
            </Button>

            <Searchbar />

            <div className="antiviruses-container">
                {filteredAntiViruses.length === 0 ? (
                    <h2>Nothing Matched Your Search Description</h2>
                ) : (
                    filteredAntiViruses.map((antivirus, index) => (
                        <Antivirus key={antivirus.id} {...antivirus} index={index} />
                    ))
                )}
            </div>
        </main>
    );
};

export default HomePage;
