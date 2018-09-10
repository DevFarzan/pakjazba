import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise';
import {BrowserRouter, Route} from 'react-router-dom';
// import reducers from './reducers';

//component
import App from './App';
import Signin from './components/signin_seperate/signin';
import Postbusiness from './components/business/postBusiness';
import Postroommates from './components/roomrenting/postRoommates';
import Postbuysell from './components/buy_sell/postBuysell';
import ProfileUser from './components/user_profile/profileUser';
import DetailBuySell from './components/buy_sell/detail_buySell';
import DetailBusiness from './components/business/detail_business';
import MarketBusiness from './components/business/marketBusiness';
import MarketClassified from './components/buy_sell/marketClassified';
import MarketRoommates from './components/roomrenting/MarketRoommates';
import {PrivateRoute} from './components/signin_seperate'


//css
import './app.css';

const initialState = {
    text: ''
}

function reducer(state = initialState, action){
    switch (action.type) {
        case 'SEARCHON':
            return {
                text: action.inputValue
            }
        case 'SEARCHOF':
            return {
                text: initialState.text
            }
        default:
            return state;
    }
}

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore)

ReactDOM.render(
		<Provider store={createStoreWithMiddleware(reducer)}>
			<BrowserRouter>
				<div>
					<Route exact path="/" component={App}></Route>
					<Route path="/sigin" component={Signin}></Route>
					<PrivateRoute path="/postad_business" component={Postbusiness}></PrivateRoute>
					<PrivateRoute path="/postad_Roommates" component={Postroommates}></PrivateRoute>
					<PrivateRoute path="/postad_buysell" component={Postbuysell}></PrivateRoute>
					<PrivateRoute path="/profile_user" component={ProfileUser}></PrivateRoute>
					<Route path="/detail_buySell" component={DetailBuySell}></Route>
					<Route path="/detail_business" component={DetailBusiness}></Route>
					<Route path="/market_business" component={MarketBusiness}></Route>
					<Route path="/market_classified" component={MarketClassified}></Route>
					<Route path="/market_roommates" component={MarketRoommates}></Route>
				</div>
			</BrowserRouter>
		</Provider>
	, document.getElementById('root'));
