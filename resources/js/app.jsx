import './bootstrap';
import '../css/app.css';

import React from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { render } from 'react-dom';
import { createInertiaApp } from '@inertiajs/inertia-react';
import { InertiaProgress } from '@inertiajs/progress';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import AddressPage from './Pages/AddressPage';
import Thankyou from './Pages/Thankyou';
import Addaddress from './Pages/Addaddress';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        return render(
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={ <App {...props} />} />
                    <Route path='/home' element={ <App />} />
                    <Route exact path='/address-page' element={  <AddressPage />}/>
                    <Route exact path='/add-address' element={  <Addaddress />}/>
                    <Route exact path='/thankyou' element={  <Thankyou />}/>
                </Routes>
            </BrowserRouter>, el

        );
    },
});

InertiaProgress.init({ color: '#4B5563' });
