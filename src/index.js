import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux' 
import thunk from 'redux-thunk';

const store = createStore(reducers, window.devToolsExtension && window.devToolsExtension(), applyMiddleware(thunk))

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, 
document.getElementById('root'));
registerServiceWorker();
