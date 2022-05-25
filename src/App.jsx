import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import ScreenSizeContextProvider from './contexts/ScreenSize.context';
import AntivirusesContextProvider from './contexts/Antiviruses.context';
import SearchContextProvider from './contexts/Search.context';

import Loader from './components/shared/loader/Loader.component';
const HomePage = lazy(() => import('./pages/home-page/HomePage.component'));
const AddAntivirusPage = lazy(() => import('./pages/add-antivirus-page/AddAntivirusPage.component'));

const App = () => {
    return (
        <BrowserRouter>
            <ScreenSizeContextProvider>
                <AntivirusesContextProvider>
                    <SearchContextProvider>
                        <Suspense fallback={<Loader />}>
                            <Routes>
                                <Route path="" element={<HomePage />} />
                                <Route path="antiviruses/add" element={<AddAntivirusPage />} />

                                <Route path="*" element={<Navigate to="/" />} />
                            </Routes>
                        </Suspense>
                    </SearchContextProvider>
                </AntivirusesContextProvider>
            </ScreenSizeContextProvider>
        </BrowserRouter>
    );
};

export default App;
