import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise';
import {BrowserRouter, Route} from 'react-router-dom';
import reducers from './reducers';


//component
import App from './App';
import Signin from './components/signin_seperate/signin';
import Postbusiness from './components/postBusiness';
import Postroommates from './components/postRoommates';
import Postbuysell from './components/postBuysell';
import ProfileUser from './components/profileUser';
import DetailedPage from './components/detailedPage';
import MarketBusiness from './components/marketBusiness';
import MarketClassified from './components/marketClassified';

//css
import './app.css';



const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore)

ReactDOM.render(
		<Provider store={createStoreWithMiddleware(reducers)}>
			<BrowserRouter>
				<div>
					<Route exact path="/" component={App}></Route>
					<Route path="/sigin" component={Signin}></Route>
					<Route path="/postad_business" component={Postbusiness}></Route>
					<Route path="/postad_Roommates" component={Postroommates}></Route>
					<Route path="/postad_buysell" component={Postbuysell}></Route>
					<Route path="/profile_user" component={ProfileUser}></Route>
					<Route path="/detail_page" component={DetailedPage}></Route>
					<Route path="/market_business" component={MarketBusiness}></Route>
					<Route path="/market_classified" component={MarketClassified}></Route>
				</div>
			</BrowserRouter>
		</Provider>
	, document.getElementById('root'));
