import React, { Component } from 'react';
import axios from "axios/index";
import { Carousel, Rate, notification, Icon, Spin, Cascader} from 'antd';
import "./roomrenting2content.css";
import moment from 'moment'
import { Redirect } from 'react-router';
import Gallery from './gallery';
import {HttpUtils} from "../../Services/HttpUtils";
import { DatePicker } from 'antd';
import AsyncStorage from "@callstack/async-storage/lib/index";
import { Tabs } from 'antd';


const { MonthPicker, RangePicker } = DatePicker;
const dateFormat = 'YYYY-MM-DD';
const monthFormat = 'YYYY/MM';
const options = [{
  value: '2 guests',
  label: '2 guests',
},
{
  value: '3 guests',
  label: '3 guests',

}
];

class RoomRenting3ContentArea3 extends Component{
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            msg: '',
            receiver: '',
            reviews: [],
            item: 4,
            loader: false,
            goProfile: false,
            amenitiesArr: [
              {key: "Gym/Fitness Center", value: "../images/icons-room/gym.png"},
              {key: "Visitors Parking", value: "../images/icons-room/visitor-parking.png"},
              {key: "Private Lawn", value: "../images/icons-room/lawn.png"},
              {key: "Laundry Service", value: "../images/icons-room/Washer.png"},
              {key: "Swimming Pool", value: "../images/icons-room/swimmimg.png"},
              {key: "Power Backup", value: "../images/icons-room/power-backup.png"},
              {key: "Water Heater Plant", value: "../images/icons-room/water-heater-filled.png"},
              {key: "Elevator", value: "../images/icons-room/elevator.png"},
              {key: "Car Park", value: "../images/icons-room/car-park.png"},
              {key: "Garbage Disposal", value: "../images/icons-room/garbage.png"},
              {key: "Security System", value: "../images/icons-room/security-system.png"},
              {key: "Club House", value: "../images/icons-room/club-house.png"},
            ]
        }
    }

    componentDidMount(){
      this.getReviews(this.props.location.state);
      this.handleLocalStorage();
    }

    componentDidUpdate(prevProps, prevState){
        let email = this.props.data.contactemail;
        if(prevState.receiver !== email) {
            this.setState({receiver: email})
        }
    }

    handleLocalStorage = () =>{
        AsyncStorage.getItem('user')
            .then((obj) => {
                let userObj = JSON.parse(obj)
                if(!!userObj) {
                    this.getProfile(userObj);
                }
            })
    }

    async getProfile(userObj){
        let req = await HttpUtils.get('getprofile?profileId=' + userObj.profileId)
        this.setState({
            userId: userObj._id,
            profileId: userObj.profileId,
            userImg: req.content ? req.content.imageurl : '',
            userName: userObj.name
        })
    }

    async getReviews(data){
        let res = await HttpUtils.get('getreviews'),
        id = data._id;
        if(res.code === 200) {
            let filteredReviews = res.content.filter((elem) => elem.objid === id)
            this.setState({reviews: filteredReviews, data})
        }
    }

    onChangeReview(e){
        let target = e.target.id;
        if(target === 'name1'){
            this.setState({name1: e.target.value})
        }else if(target === 'email1'){
            this.setState({email1: e.target.value})
        }else if(target === 'message1'){
            this.setState({msg1: e.target.value})
        }
    }

    async submitReview(){
        this.setState({loader: true})
        let { name1, email1, msg1, star, reviews, data, userId, profileId, userImg } = this.state;
        let obj = {
            objId: data._id,
            name : name1,
            email: email1,
            message: msg1,
            star,
            written: moment().format('LL'),
            userId,
            profileId,
            userImg
        }
        let res = await HttpUtils.post('reviews', obj)
        reviews.push(obj)
        if(res.code === 200) {
            let message1 = 'Your review sent successfully'
            this.openNotification(message1)
            this.setState({name1: '', email1: '', msg1: '', star: 0, reviews, loader: false})
        }
    }

    openNotification(msg) {
        notification.open({
            message: 'Success ',
            description: msg,
        });
    };

    goToProfile = (reviewUserId, reviewProfileId) => {
        this.setState({goProfile : true, reviewUserId, reviewProfileId})
    }

    handleChange(value){
        this.setState({star: value})
    }

    render(){
        const { TabPane } = Tabs;
        const { data } = this.props,
        { goProfile, reviews, item, reviewUserId, reviewProfileId } = this.state,
        antIcon = <Icon type="loading" style={{ fontSize: 24, marginRight: '10px' }} spin />;
        let from = data.startdate || data.dateRange && data.dateRange.from,
        to = data.enddate || data.dateRange && data.dateRange.to,
        petFriendly = data.petfriendly || data.petFriendly,
        accommodates = data.accomodates || data.accommodates,
        images = data.imageurl || data.arr_url,
        AIncludes = data.amenitiesinclude || data.amenities,
        email= data.contactMode && data.contactMode.includes('email') ? data.contactEmail : '*****@gmail.com',
        phone = data.contactMode && data.contactMode.includes('phone') ? data.contactNumber : '***********';
        if(goProfile){
            return <Redirect to={{pathname: '/profile_userDetail', state: {userId: reviewUserId, profileId: reviewProfileId}}}/>
        }

        if(data.modeofcontact && data.modeofcontact.includes('email')){
            email = data.contactemail;
        }

        if(data.modeofcontact && data.modeofcontact.includes('phone')){
            phone = data.contactnumber;
        }
        let postedOn = moment(data.posted, "LL").format('YYYY-MM-DD');
        
        return(
            <div>
                <div className="container hidden-xs" style={{width:"68%"}}>{/*width:'70' */}
                    <div className="row">
                        <div className=" romRentForm">{/*card outset  style={{ boxShadow: "none", background:"whitesmoke"}}*/}
                            <div className="card-body space">
                                <div className="row">
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        <h3><b><a name="linkReview" className="black">Add Review</a></b></h3>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        {/*Section: Contact v.2*/}
                                        <section className="section">
                                            <h4>Your Rating:
                                                <Rate onChange={this.handleChange.bind(this)} allowHalf value={this.state.star}/>
                                            </h4>
                                        </section>
                                        {/*Section: Contact v.2*/}
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {/*Grid column*/}
                                <div className="col-md-7 mb-md-0 mb-5">
                                    <form id="contact-form" name="contact-form">
                                        {/*Grid row*/}
                                        <div className="row">
                                            {/*Grid column*/}
                                            <div className="col-md-6">
                                                <div className="md-form mb-0">
                                                    <label className="">Your name</label>
                                                    <input type="text" id="name1" name="name" className="form-control" value={this.state.name1} onChange={this.onChangeReview.bind(this)} />
                                                </div>
                                            </div>
                                            {/*Grid column*/}
                                            {/*Grid column*/}
                                            <div className="col-md-6">
                                                <div className="md-form mb-0">
                                                    <label className="">Your email</label>
                                                    <input type="text" id="email1" name="email" className="form-control" value={this.state.email1} onChange={this.onChangeReview.bind(this)}/>
                                                </div>
                                            </div>
                                            {/*Grid column*/}
                                        </div>
                                        {/*Grid row*/}
                                        {/*Grid row*/}
                                        <div className="row">
                                            {/*Grid column*/}
                                            <div className="col-md-12">
                                                <div className="md-form">
                                                    <label>Your message</label>
                                                    <textarea type="text" id="message1" name="message" rows="2"
                                                     className="form-control md-textarea"
                                                     value={this.state.msg1}
                                                     onChange={this.onChangeReview.bind(this)}></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        {/*Grid row*/}
                                    </form>
                                    <div className="text-center text-md-left">
                                        {this.state.loader && <Spin indicator={antIcon} />}
                                        <a disabled={!!this.state.loader} onClick={this.submitReview.bind(this)} className="btn button_custom" style={{width: "35%"}}>Send</a>
                                    </div>
                                    <div className="status"></div>
                                </div>
                                {/*Grid column*/}
                            </div>
                        </div>
                    </div>
                  </div>

            </div>
            )
        }
    }
    
    export default RoomRenting3ContentArea3;