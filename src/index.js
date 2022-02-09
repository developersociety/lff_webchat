// Comment out following polyfills if you don't need IE11 support
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';
import 'regenerator-runtime/runtime';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ip_lookup from './ip_lookup';


async function init_react_with_ip_data() {
    let app_config = window.appConfig;
    let ip_data = await ip_lookup()

    app_config.context = ip_data;

    ReactDOM.render(
        <App configuration={app_config} />,
        document.getElementById("root")
    );

    registerServiceWorker();
}

init_react_with_ip_data()