import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import { BrowserRouter, Route } from 'react-router-dom';
import Favicon from 'react-favicon';

//component
import Privacy from './components/home/privacyPolicy';
import TermOfServices from './components/home/termsofservices';
import HomePage from './components/home/homePage';
import Signin from './components/signin_seperate/signin';
import ResetPassword from './components/signin_seperate/resetPassword';
import Postbusiness from './components/business/postBusiness';
import JobPortal from './components/job_portal/postJob';
import EventPortal from './components/events/eventPortal';
import Postroommates from './components/roomrenting/postRoommates';
import Postbuysell from './components/buy_sell/postBuysell';
import ProfileUser from './components/user_profile/profileUser';
import DetailBuySell from './components/buy_sell/detail_buySell';
import DetailBusiness from './components/business/detail_business';
import DetailRoommates from './components/roomrenting/detail_roomRent';
import JobDetail from './components/job_portal/jobDetail';
import EventDetail from './components/events/EventDetail';
import EproductDetails from './components/ecommerce/productdetail/EproductDetails';
import EcomForms from './components/ecommerce/EcomForms/EcomForms';
import VideoBox from './components/entertainment/EntDetailpages/VideoBox';
import UploadVideo from './components/entertainment/entertainmentPages/uploadVideo';
import { PrivateRoute } from './components/signin_seperate';
import ShopForm from './components/ecommerce/shops/ShopForm'
import EcomProile from './components/ecommerce/EcommerceProfile/ecommerceProfile';
import AddListing from './components/header/addAlisting';
import Explore from './components/Explore/explore';
import AboutUs from './components/About us/aboutUs';
import ContactUs from './components/Contact us/contactUs';

//css
import './app.css';

const initialState = {
  text: '',
  data: {},
  otherData: {},
  blogData: {},
  route: false
}

function reducer(state = initialState, action) {

  switch (action.type) {
    case 'SEARCHON':
      return { ...state, text: action.inputValue }
    case 'SEARCHOF':
      return { ...state, text: initialState.text }
    case 'FACEBOOKSIGNUP':
      return { ...state, data: action.data }
    case 'ANOTHERDATA':
      return { ...state, otherData: action.otherData }
    case 'BLOGDATA':
      return { ...state, blogData: action.blogData }
    case 'GOROUTE':
      return { ...state, route: action.route }
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
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/sigin" component={Signin}></Route>
        <Route exact path="/reset/:token" component={ResetPassword} />

        {/*============Explore Page In Header=============*/}
        <Route path="/explore" component={Explore}></Route>

        {/*============Header dropdown post your need route=============*/}
        <Route path="/add_listing" component={AddListing}></Route>

        {/*============Room Renting=============*/}
        <PrivateRoute path="/postad_Roommates" component={Postroommates}></PrivateRoute>
        <Route path="/detail_roomRent" component={DetailRoommates}></Route>
        {/*============Room Renting End=============*/}
       

        {/*============Bussiness=============*/}
        <PrivateRoute path="/postad_business" component={Postbusiness}></PrivateRoute>
        <Route path="/detail_business" component={DetailBusiness}></Route>
        {/*============Bussiness End=============*/}

        {/*============Buy And Sell start=============*/}
        <PrivateRoute path="/postad_buysell" component={Postbuysell}></PrivateRoute>
        <Route path="/detail_buySell" component={DetailBuySell}></Route>
        {/*============Buy and Sell End=============*/}


        {/*============Job=============*/}
        <PrivateRoute path="/postad_jobPortal" component={JobPortal}></PrivateRoute>
        <Route path="/detail_jobPortal" component={JobDetail}></Route>
        {/*============Job End=============*/}


        {/*============Events Start=============*/}
        <PrivateRoute path="/postad_eventPortal" component={EventPortal}></PrivateRoute>
        <Route path="/detail_eventPortal/:value" component={EventDetail}></Route>
        {/*============Events Start=============*/}


        {/*============Ecommerce=============*/}
        <Route path="/Forms_Ecommerce" component={EcomForms}></Route>
        <Route path="/products_DetailStyle/:value" component={EproductDetails}></Route>
        <PrivateRoute path="/shopForm" component={ShopForm}></PrivateRoute>
        <Route path="/EcommerceProfile/:value" component={EcomProile}></Route>

        {/*============Ecommerce=============*/}


        {/*=============Entertainment====================*/}
        <Route path="/entertainment_detail/:value" component={VideoBox}></Route>
        <Route path="/UploadVideo" component={UploadVideo}></Route>
        {/*===============Entertainement end===============================*/}



        <Route path="/profile_user/:value" component={ProfileUser}></Route>
        <Route path="/privacypolicy" component={Privacy}></Route>
        <Route path="/termofservice" component={TermOfServices}></Route> 
        <Route path="/aboutus" component={AboutUs}></Route>
        <Route path="/contactus" component={ContactUs}></Route> 

      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
