import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import GeneralLayouts from './components/GeneralLayouts';
import ProductPage from './components/ProductPage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route element={<GeneralLayouts />}>
                <Route path='/' element={<App />}></Route>
                <Route path='/product-page/:productName' element={<ProductPage />}></Route>
            </Route>
        </Routes>

    </BrowserRouter>
);
