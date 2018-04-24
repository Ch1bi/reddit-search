import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import redditApp from './reducers';
import registerServiceWorker from './registerServiceWorker'
import { createStore } from 'redux'
import { Provider } from 'react-redux' 
import { Search } from './components/Search'
import Home from './components/Search'
import { SavedPosts } from './components/SavedPosts'

const store = createStore(redditApp)

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, 
document.getElementById('root'));
registerServiceWorker();
