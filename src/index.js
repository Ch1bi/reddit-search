import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker'
import { createStore } from 'redux'
import { Search } from './components/Search'
import Home from './components/Search'
import { SavedPosts } from './components/SavedPosts'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
