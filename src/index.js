import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Thanks from './components/Thanks';

import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

ReactDOM.render(
<Router>
	<Switch>
		<Route exact path="/">	
			<App />
		</Route>
		<Route path="/thanks">
			<Thanks/>
		</Route>
	</Switch>
</Router>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
