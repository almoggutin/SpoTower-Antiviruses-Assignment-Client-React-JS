import { useContext } from 'react';
import './searchbar.styles.scss';

import { SearchContext } from '../../contexts/Search.context';
import { updateCompatibilityAction, updateSearchAction } from '../../actions/searchbar.actions';

const Searchbar = () => {
    const { dispatchSearchState } = useContext(SearchContext);

    const handleInput = (event) => {
        const searchInput = event.target.value;

        dispatchSearchState(updateSearchAction(searchInput));
    };

    const handleChange = (event) => {
        const checkboxInput = event.target;

        dispatchSearchState(updateCompatibilityAction(checkboxInput.value, checkboxInput.checked));
    };

    return (
        <form className="searchbar">
            <input type="text" placeholder="Antivirus name" onInput={handleInput} />

            <div className="os-compatibilities-container">
                <div>
                    <input type="checkbox" value="macos" onChange={handleChange} />
                    <label>MacOS</label>
                </div>

                <div>
                    <input type="checkbox" value="ios" onChange={handleChange} />
                    <label>iOS</label>
                </div>

                <div>
                    <input type="checkbox" value="windows" onChange={handleChange} />
                    <label>Windows</label>
                </div>

                <div>
                    <input type="checkbox" value="android" onChange={handleChange} />
                    <label>Android</label>
                </div>
            </div>
        </form>
    );
};

export default Searchbar;
