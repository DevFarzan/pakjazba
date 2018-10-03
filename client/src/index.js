import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise';
import {BrowserRouter, Route} from 'react-router-dom';
import Favicon from 'react-favicon';
// import reducers from './reducers';

//component
import Home from './components/home/home1';
import Signin from './components/signin_seperate/signin';
import Postbusiness from './components/business/postBusiness';
import JobPortal from './components/job_portal/postJob';
import Postroommates from './components/roomrenting/postRoommates';
import Postbuysell from './components/buy_sell/postBuysell';
import ProfileUser from './components/user_profile/profileUser';
import DetailBuySell from './components/buy_sell/detail_buySell';
import DetailBusiness from './components/business/detail_business';
import DetailBlog from './components/home/detail_blog';
import Roomrentingtwocontentarea from "./components/roomrenting/roomrenting2contentarea";
import DetailRoommates from './components/roomrenting/detail_roomRent';
import MarketBusiness from './components/business/marketBusiness';
import MarketClassified from './components/buy_sell/marketClassified';
import MarketRoommates from './components/roomrenting/MarketRoommates';
import JobClassified from './components/job_portal/jobClassified';
import {PrivateRoute} from './components/signin_seperate'


//css
import './app.css';

const initialState = {
    text: '',
	data: {}
}

function reducer(state = initialState, action){
	console.log(action, 'actionnnnnnnnnnnnn')
    switch (action.type) {
        case 'SEARCHON':
            return {
                text: action.inputValue
            }
        case 'SEARCHOF':
            return {
                text: initialState.text
            }
		case 'FACEBOOKSIGNUP':
			return {
				data: action.data
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
                    <Favicon url="https://res.cloudinary.com/dxk0bmtei/image/upload/v1534159021/pakjazba_f3orb0.png" />
					<Route exact path="/" component={Home}></Route>
					<Route path="/sigin" component={Signin}></Route>
					<PrivateRoute path="/postad_business" component={Postbusiness}></PrivateRoute>
					<PrivateRoute path="/postad_Roommates" component={Postroommates}></PrivateRoute>
					<PrivateRoute path="/postad_buysell" component={Postbuysell}></PrivateRoute>
					<PrivateRoute path="/postad_jobPortal" component={JobPortal}></PrivateRoute>
					<PrivateRoute path="/profile_user" component={ProfileUser}></PrivateRoute>
					<Route path="/detail_buySell" component={DetailBuySell}></Route>
					<Route path="/detail_business" component={DetailBusiness}></Route>
					<Route path="/detail_blog" component={DetailBlog}></Route>
					<Route path="/filter_roomRent" component={Roomrentingtwocontentarea}></Route>
					<Route path="/detail_roomRent" component={DetailRoommates}></Route>
					<Route path="/market_business" component={MarketBusiness}></Route>
					<Route path="/market_classified" component={MarketClassified}></Route>
					<Route path="/market_roommates" component={MarketRoommates}></Route>
          <Route path="/market_jobPortal" component={JobClassified}></Route>
				</div>
			</BrowserRouter>
		</Provider>
	, document.getElementById('root'));
