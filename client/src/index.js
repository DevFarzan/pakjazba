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
import EventPortal from './components/events/eventPortal';
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
import MarketEvent from './components/events/marketEvent'
import ApplyJob from './components/job_portal/applyJob';
import JobDetail from './components/job_portal/jobDetail';
import TicketDetail from './components/events/event_listing/TicketDetail';
import BuyerDetail from './components/events/event_listing/BuyerDetail';
import EventDetail from './components/events/EventDetail';
//import TicketDetail from './components/events/TicketDetail';
//import TicketDetail from './components/events/TicketDetail'
import {PrivateRoute} from './components/signin_seperate';



//css
import './app.css';

const initialState = {
    text: '',
	data: {},
	otherData: {},
	blogData: {}
}

function reducer(state = initialState, action){
    switch (action.type) {
        case 'SEARCHON':
            return {...state, text: action.inputValue}
        case 'SEARCHOF':
            return {...state, text: initialState.text}
		case 'FACEBOOKSIGNUP':
			return {...state, data: action.data}
		case 'ANOTHERDATA':
			return {...state, otherData: action.otherData}
		case 'BLOGDATA':
			return {...state, blogData: action.blogData}
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
          			<PrivateRoute path="/postad_eventPortal" component={EventPortal}></PrivateRoute>
					<PrivateRoute path="/profile_user" component={ProfileUser}></PrivateRoute>
					<Route path="/profile_userDetail" component={ProfileUser}></Route>
					<Route path="/detail_buySell" component={DetailBuySell}></Route>
					<Route path="/detail_jobPortal" component={JobDetail}></Route>
					<Route path="/apply_forJob" component={ApplyJob}></Route>
					<Route path="/detail_business" component={DetailBusiness}></Route>
					<Route path="/detail_blog" component={DetailBlog}></Route>
					<Route path="/filter_roomRent" component={Roomrentingtwocontentarea}></Route>
					<Route path="/detail_roomRent" component={DetailRoommates}></Route>
					<Route path="/market_business" component={MarketBusiness}></Route>
					<Route path="/market_classified" component={MarketClassified}></Route>
					<Route path="/market_roommates" component={MarketRoommates}></Route>
    				<Route path="/market_jobPortal" component={JobClassified}></Route>
			        <Route path="/market_eventPortal" component={MarketEvent}></Route>
			        <Route path="/detail_eventPortal/:value" component={EventDetail}></Route>
			        <Route path="/Ticket_eventPortals" component={TicketDetail}></Route>
               <Route path="/Buyer_Detailpage" component={BuyerDetail}></Route>

				</div>
			</BrowserRouter>
		</Provider>
	, document.getElementById('root'));
