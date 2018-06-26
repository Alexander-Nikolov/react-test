import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import UserReducer from './reducers/user';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
    UserReducer
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
