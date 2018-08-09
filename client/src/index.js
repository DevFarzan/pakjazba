import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise';
import {BrowserRouter, Route} from 'react-router-dom';
import reducers from './reducers';


//component
import App from './App';
import Postbusiness from './components/postBusiness';
import Postroommates from './components/postRoommates';
import Postbuysell from './components/postBuysell';

//css
import './app.css';



const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore)

ReactDOM.render(
		<Provider store={createStoreWithMiddleware(reducers)}>
			<BrowserRouter>
				<div>
					<Route exact path="/" component={App}></Route>
					<Route path="/postad_business" component={Postbusiness}></Route>
					<Route path="/postad_Roommates" component={Postroommates}></Route>
					<Route path="/postad_buysell" component={Postbuysell}></Route>
				</div>
			</BrowserRouter>
		</Provider>
	, document.getElementById('root'));
