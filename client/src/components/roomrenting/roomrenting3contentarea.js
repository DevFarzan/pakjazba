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
import RoomRenting3ContentArea2 from './roomRenting3ContentArea2';
import RoomRenting3ContentArea3 from './roomRenting3ContentArea2';
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

class Roomrenting3contentarea extends Component{
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
                <Gallery images={images} style={{marginTop: '0%'}}/>
                <div className="row tabMainDiV">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <Tabs defaultActiveKey="1">
                            <TabPane
                                // onClick={this.tabnavigation('true')}
                                tab={
                                    <span>
                                       Profile{" "}
                                    </span>
                                }
                                key="1"
                            >
                                {/* <JobdetailIconPanel /> */}
                            </TabPane>
                            <TabPane
                                // onClick={this.tabnavigation('false')}
                                tab={
                                    <span>
                                        Add Review{" "}
                                    </span>
                                }
                                key="2"
                            >
                                <RoomRenting3ContentArea2 />
                            </TabPane>
                            <TabPane
                                // onClick={this.tabnavigation('false')}
                                tab={
                                    <span>
                                        Information{" "}
                                    </span>
                                }
                                key="2"
                            >
                                <RoomRenting3ContentArea3 />
                            </TabPane>
                        </Tabs>
                    </div>
                </div>

                  <div className="container hidden-xs" style={{width:"70%"}}>
                    <div className="row">
                      <div className="col-md-8">
                        <div className="romRentForm" style={{marginBottom: '5%'}}>
                          <h3 className="head-space2"> California  </h3>

                          <h1 className="head-space2"><b>{data.postingtitle || data.postingTitle} Available</b></h1>

                          <h4 style={{marginLeft:"0"}}> { data.propertylocation || data.propertyLocation } </h4>

                          <h5>
                            <span className="glyphicon glyphicon-phone" style={{marginRight: "15px", color:"#36a89f"}}></span>
                            <span style={{color: "rgba(0, 0, 0, 0.65)"}}>{phone}</span>
                          </h5>

                          <h5 style={{marginBottom:"70px"}}>
                            <span className="glyphicon glyphicon-globe" style={{marginRight: "15px", color:"#36a89f"}}></span>
                            <span style={{color: "rgba(0, 0, 0, 0.65)"}}>{email}</span>
                          </h5>
                        </div>

                        <div className="col-md-12 romRentForm" style={{marginBottom: '5%'}}>
                          <div className="row" style={{padding: '0'}}>
                            <div className="col-md-1">
                            <i className="fa fa-home" style={{fontSize:"30px"}}/>
                            </div>
                            <div className="col-md-11">
                              <h4 style={{margin:"0"}}> ENTIRE APPARTMENT </h4>
                              <span className="appartmentdes">
                                <p> { data.accomodates } Guest  </p>
                                <p> { data.subSubCategory} Bedrooms</p>
                                {data.Attachedbath && <p> Attachedbath </p>}
                                {data.attachedBath && <p> Attachedbath </p>}
                              </span>
                            </div>
                            <div className="col-md-1">
                            <i className="fa fa-map" style={{fontSize:"30px"}}/>
                            </div>
                            <div className="col-md-11">
                              <h4 style={{margin:"0"}}> GREAT LOCATION </h4>
                              <span className="appartmentdes">
                                <p> 100% of recent guests gave this homes's location a 5-star rating.  </p>

                              </span>
                            </div>
                            <div className="col-md-1">
                            <i className="fa fa-snowflake-o" style={{fontSize:"30px"}}/>
                            </div>
                            <div className="col-md-11">
                              <h4 style={{margin:"0"}}> Sparkling Clean </h4>
                              <span className="appartmentdes">
                                <p> 10 recent guests have said that this home was sparkling clean.  </p>
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-12 romRentForm" style={{marginBottom: '5%'}}>
                          <h3 style={{marginTop:'9px'}}> Description </h3>
                          <p>{data.discription || data.description}</p>
                        </div>

                          <div className="col-md-12 romRentForm" style={{marginBottom: '5%'}}>
                            <h3> Amenities </h3>{/* style={{marginTop:'9px'}} */}
                            <div className="forimage">
                              <div className="row" style={{padding:"0"}}>
                                <div className="col-md-12 col-sm-12 col-xs-12">
                                  {AIncludes && AIncludes.map((elem, key) => {
                                    return(
                                      this.state.amenitiesArr.map((el, i) => {
                                        if(el.key === elem){
                                          return (
                                            <div className="col-md-4 col-sm-4 col-xs-12">
                                              <div className="col-md-4 col-xs-5">
                                                <img src={el.value}/>
                                              </div>
                                              <div className="col-md-8 col-xs-7" style={{width: '50%'}}>
                                                <p> {el.key} </p>
                                              </div>
                                            </div>
                                          )
                                        }
                                      })
                                    )
                                  })}
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-12 romRentForm" style={{marginBottom: '5%'}}>
                            <h3> Sleeping Arrangments </h3>{/* style={{marginTop:'9px'}} */}
                            <div className="forimage" style={{display:"inline"}}>
                              <div className="row" style={{padding:"0"}}>
                                <div className="col-md-5 col-sm-4">
                                  <div className="col-md-6 col-sm-5 col-xs-4">
                                    <i class="fa fa-bed" aria-hidden="true" style={{fontSize: '30px'}}></i>
                                  </div>
                                  <div className="col-md-6 col-sm-7 col-xs-8">
                                    <p style={{marginTop:"15px", marginBottom:"0"}}> { data.subSubCategory } </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/*<p className="availability">  Availability </p>
                          <p style={{marginBottom:"0"}}> 1 night minimum stay </p>
                          <span>
                            <Rate allowHalf defaultValue={5} />
                          </span>*/}
                          
                          <div className="row">{/* style={{padding:"0px", marginTop:"50px"}} */}
                          <div className="col-md-12 col-sm-12 romRentForm" style={{marginBottom: '5%'}}>
                            <div className="col-md-2 col-sm-3" style={{paddingLeft:"0"}}>
                                <h4>
                                <b>Excellent </b>
                                </h4>
                            </div>
                            <div className="col-md-5 col-sm-5">
                                <Rate disabled allowHalf defaultValue={5} style={{marginTop: "-6px", marginLeft: "10px"}} />
                            </div>
                            <div className="col-md-5 col-sm-4">

                                <div className="progres">
                                  <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60"
                                  aria-valuemin="0" aria-valuemax="100" style={{width:"100%", height:"50%"}}>
                                  </div>
                                </div>
                            </div>

                            <div className="col-md-2 col-sm-3" style={{paddingLeft:"0"}}>
                                <h4>
                                <b>Good </b>
                                </h4>
                            </div>
                            <div className="col-md-5 col-sm-5">
                                <Rate disabled allowHalf defaultValue={4} style={{marginTop: "-6px", marginLeft: "10px"}} />
                            </div>
                            <div className="col-md-5 col-sm-4">

                                <div className="progres">
                                  <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60"
                                  aria-valuemin="0" aria-valuemax="100" style={{width:"60%", height:"50%"}}>
                                  </div>
                                </div>
                            </div>

                            <div className="col-md-2 col-sm-3" style={{paddingLeft:"0"}}>
                                <h4>
                                <b>Average </b>
                                </h4>
                            </div>
                            <div className="col-md-5 col-sm-5">
                                <Rate disabled allowHalf defaultValue={3} style={{marginTop: "-6px", marginLeft: "10px"}} />
                            </div>
                            <div className="col-md-5 col-sm-4">

                                <div className="progres">
                                  <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60"
                                  aria-valuemin="0" aria-valuemax="100" style={{width:"45%", height:"50%"}}>
                                  </div>
                                </div>
                            </div>

                            <div className="col-md-2 col-sm-3" style={{paddingLeft:"0"}}>
                                <h4>
                                <b>Bad </b>
                                </h4>
                            </div>
                            <div className="col-md-5 col-sm-5">
                                <Rate disabled allowHalf defaultValue={2} style={{marginTop: "-6px", marginLeft: "10px"}} />
                            </div>
                            <div className="col-md-5 col-sm-4">

                                <div className="progres">
                                  <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60"
                                  aria-valuemin="0" aria-valuemax="100" style={{width:"20%", height:"50%"}}>
                                  </div>
                                </div>
                            </div>
                            </div>
                          </div>

                          {/* <hr style={{borderTop:'1px solid black',borderTopWidth:'1px',width:'97%'}}/> */}
                          
                          <div className="card">
                              <div className="row" style={{padding:"0px"}}>
                              {!!reviews.length && <div className="row" style={{padding:"0px"}}>
                                {reviews && reviews.map((elem, key) => {
                                    if(key <= item -1 )
                                    return(
                                      <div  className="card-body space" style={{marginBottom:"0px", paddingLeft:"0px"}}>
                                          <div className="row">
                                              <div className="col-md-12 col-sm-12 col-xs-12">
                                                  <div className="col-md-3 col-sm-4 col-xs-12 " style={{paddingLeft:"0px" ,  paddingRight:"0px"}}><br/>
                                                      <img
                                                        src={elem.userImg ? elem.userImg : "../images/images.jpg"}
                                                        className="image-circle"
                                                        alt="" width="100" height="100"
                                                        style={{cursor: 'pointer'}}
                                                        onClick={this.goToProfile.bind(this, elem.userId, elem.profileId)}
                                                      />
                                                  </div>
                                                  <div className="col-md-5 col-sm-4"  style={{marginTop:"40px"}}>
                                                      <h5 className=""
                                                          style={{margin:"0", cursor: 'pointer'}}
                                                          onClick={this.goToProfile.bind(this, elem.userId, elem.profileId)}
                                                      >{elem.name}</h5>
                                                      <Rate disabled allowHalf value={elem.star}/>
                                                  </div>
                                                  <div className="col-md-4 col-sm-4 col-xs-12" style={{marginTop:"40px"}}>
                                                      <a name="linkReview"><p className="star-space1">Writen On {elem.written} </p></a>
                                                  </div>
                                              </div>
                                              <div className="col-md-12 col-sm-12 col-xs-12"><br/>
                                                  <div className="col-md-12 col-sm-12 col-xs-12" style={{paddingLeft:"0"}}>
                                                      <p>{elem.message}.</p>
                                                  </div>
                                              </div>
                                          </div>
                                          <hr style={{borderTop:'1px solid black',borderTopWidth:'1px',width:'97%'}}/>
                                      </div>
                                  )
                                  })}
                              </div>}
                              {reviews.length > item && <div className="">
                                <a
                                  className="btn btndetail-success"
                                  style={{display:"block", margin:"auto0"}}
                                  onClick={() => this.setState({item: item + 4})}
                                >More</a>
                              </div>}
                          </div>
                      </div>
                      </div>

                      <div className="col-md-4" style={{position: 'sticky',top:'25'}}>
                        <div className="roomdetail romRentForm">
                          <div className="row">{/* style={{padding:"0"}} */}
                           <div className="col-md-7">
                             <h2 className="head-space2" style={{fontSize:"28px"}}><b>$ { data.rent || data.price }</b>
                             </h2>
                           </div>
                           <div className="col-md-5">{/* style={{padding:"0"}} */}
                             <p style={{marginTop:"2px", fontSize:"18px", fontWeight:"bold"}}>{ data.pricemode || data.priceMode }</p>
                           </div>
                         </div>
                          <br/>
                          <div>
                          <span> Dates </span>{/*p tag */}
                              <input value={" " + from + " ~ " + to + " "} />
                          <span style={{fontFamily: 'Source Sans Pro, sans-serif'}}> Accomodates </span>
                          <span style={{fontFamily: 'Source Sans Pro, sans-serif'}}> {accommodates} </span>
                          </div>

                           {/*<Cascader options={options} onChange={onChange} placeholder="Please select" style={{width:"100%"}} />*/}
                          <hr style={{borderTop:'1px solid black',borderTopWidth:'1px',width:'191px'}}/>
                          <div className="row">
                            <div className="col-md-4">
                              <p style={{marginTop:"0"}}> Pets </p>
                            </div>
                            <div className="col-md-8">
                              <span style={{fontFamily: 'Source Sans Pro, sans-serif'}}>{petFriendly}</span>
                            </div>
                          </div>
                          <hr style={{borderTop:'1px solid black',borderTopWidth:'1px',width:'191px'}}/>
                          <div className="row">
                            <div className="col-md-4">
                              <p style={{marginTop:"0"}}> Smoking </p>
                            </div>
                            <div className="col-md-8">
                              <span style={{fontFamily: 'Source Sans Pro, sans-serif'}}>{data.smoking}</span>
                            </div>
                          </div>
                          <hr style={{borderTop:'1px solid black',borderTopWidth:'1px',width:'191px'}}/>
                          <div className="row">
                            <div className="col-md-4">
                              <p style={{marginTop:"0"}}> Vegetarian </p>
                            </div>
                            <div className="col-md-8">
                              {data.vegetariansprefered || data.vegNoVeg }
                            </div>
                          </div>
                          <hr style={{borderTop:'1px solid black',borderTopWidth:'1px',width:'191px'}}/>
                          <div className="row">
                            <div className="col-md-4">
                              <p style={{marginTop:"0"}}> <b> Furnished </b></p>
                            </div>
                            <div className="col-md-8">
                              {data.furnished}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
                  <div className="container visible-xs">
                    <div className="row">
                      <div className="col-md-8">
                          <h3 className="head-space2"></h3>
                          <h1 className="head-space2" style={{fontSize:'18px'}}><b>{data.postingtitle || data.postingTitle} Available</b></h1>
                          <h4 style={{marginLeft:"0",fontSize:'18px'}}> { data.propertylocation || data.propertyLocation } </h4>
                          <h5><span className="glyphicon glyphicon-phone" style={{marginRight: "15px", color:"#36a89f"}}></span><span style={{color: "rgba(0, 0, 0, 0.65)"}}>{phone}</span></h5>
                          <h5 style={{marginBottom:"70px"}}><span className="glyphicon glyphicon-globe" style={{marginRight: "15px", color:"#36a89f"}}></span><span style={{color: "rgba(0, 0, 0, 0.65)"}}>{email}</span></h5>
                          <div className="row" style={{padding:"0"}}>
                            <div className="col-md-1">
                            <i className="fa fa-home" style={{fontSize:"30px"}}/>
                            </div>
                            <div className="col-md-11">
                              <h4 style={{margin:"0"}}> ENTIRE APPARTMENT </h4>
                              <span className="appartmentdes">
                                <p> { data.accomodates } Guest  </p>
                                <p> { data.subSubCategory} Bedrooms</p>
                                {data.Attachedbath && <p> Attachedbath </p>}
                                {data.attachedBath && <p> Attachedbath </p>}
                               </span>
                            </div>
                            <div className="col-md-1">
                            <i className="fa fa-map" style={{fontSize:"30px"}}/>
                            </div>
                            <div className="col-md-11">
                              <h4 style={{margin:"0"}}> GREAT LOCATION </h4>
                              <span className="appartmentdes">
                                <p> 100% of recent guests gave this homes's location a 5-star rating.  </p>

                               </span>
                            </div>
                            <div className="col-md-1">
                            <i className="fa fa-snowflake-o" style={{fontSize:"30px"}}/>
                            </div>
                            <div className="col-md-11">
                              <h4 style={{margin:"0"}}> Sparkling Clean </h4>
                              <span className="appartmentdes">
                                <p> 10 recent guests have said that this home was sparkling clean.  </p>
                               </span>
                            </div>
                          </div>
                          <hr style={{borderTop:'1px solid black',borderTopWidth:'1px',width:'100%'}}/>
                          <h3 style={{marginTop:'9px'}}> Description </h3>
                          <p>{data.discription || data.description}</p>
                          <hr style={{borderTop:'1px solid black',borderTopWidth:'1px',width:'97%'}}/>
                          <h3 style={{marginTop:'9px'}}> Amenities </h3>
                          <div className="forimage">
                            <div className="row" style={{padding:"0"}}>
                              <div className="col-md-12 col-sm-12 col-xs-12">
                                {AIncludes && AIncludes.map((elem, key) => {
                                  return(
                                    this.state.amenitiesArr.map((el, i) => {
                                      if(el.key === elem){
                                        return (
                                          <div className="col-md-4 col-sm-4 col-xs-12">
                                            <div className="col-md-4 col-xs-5">
                                              <img src={el.value}/>
                                            </div>
                                            <div className="col-md-8 col-xs-7" style={{width: '50%'}}>
                                              <p> {el.key} </p>
                                            </div>
                                          </div>
                                        )
                                      }
                                    })
                                  )
                                })}
                              </div>
                            </div>
                          </div>
                          <hr style={{borderTop:'1px solid black',borderTopWidth:'1px',width:'97%'}}/>
                          <h3 style={{marginTop:'9px'}}> Sleeping Arrangments </h3>
                          <div className="forimage" style={{display:"inline"}}>
                            <div className="row" style={{padding:"0"}}>
                              <div className="col-md-12 col-sm-4">
                                <div className="col-md-6 col-sm-5 col-xs-4">
                                  <i class="fa fa-bed" aria-hidden="true" style={{fontSize: '30px'}}></i>
                                </div>
                                <div className="col-md-6 col-sm-7 col-xs-8">
                                  <p style={{marginTop:"15px", marginBottom:"0"}}> { data.subSubCategory } </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/*<p className="availability">  Availability </p>
                          <p style={{marginBottom:"0"}}> 1 night minimum stay </p>
                          <span>
                            <Rate allowHalf defaultValue={5} />
                          </span>*/}
                          <div className="row" style={{padding:"0px", marginTop:"50px"}}>
                            <div className="col-md-2 col-sm-3" style={{paddingLeft:"0"}}>
                                <h4>
                                <b>Excellent </b>
                                </h4>
                            </div>
                            <div className="col-md-5 col-sm-5">
                                <Rate disabled allowHalf defaultValue={5} style={{marginTop: "-6px", marginLeft: "10px"}} />
                            </div>
                            <div className="col-md-5 col-sm-4">

                                <div className="progres">
                                  <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60"
                                  aria-valuemin="0" aria-valuemax="100" style={{width:"100%", height:"50%"}}>
                                  </div>
                                </div>
                            </div>

                            <div className="col-md-2 col-sm-3" style={{paddingLeft:"0"}}>
                                <h4>
                                <b>Good </b>
                                </h4>
                            </div>
                            <div className="col-md-5 col-sm-5">
                                <Rate disabled allowHalf defaultValue={4} style={{marginTop: "-6px", marginLeft: "10px"}} />
                            </div>
                            <div className="col-md-5 col-sm-4">

                                <div className="progres">
                                  <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60"
                                  aria-valuemin="0" aria-valuemax="100" style={{width:"60%", height:"50%"}}>
                                  </div>
                                </div>
                            </div>

                            <div className="col-md-2 col-sm-3" style={{paddingLeft:"0"}}>
                                <h4>
                                <b>Average </b>
                                </h4>
                            </div>
                            <div className="col-md-5 col-sm-5">
                                <Rate disabled allowHalf defaultValue={3} style={{marginTop: "-6px", marginLeft: "10px"}} />
                            </div>
                            <div className="col-md-5 col-sm-4">

                                <div className="progres">
                                  <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60"
                                  aria-valuemin="0" aria-valuemax="100" style={{width:"45%", height:"50%"}}>
                                  </div>
                                </div>
                            </div>

                            <div className="col-md-2 col-sm-3" style={{paddingLeft:"0"}}>
                                <h4>
                                <b>Bad </b>
                                </h4>
                            </div>
                            <div className="col-md-5 col-sm-5">
                                <Rate disabled allowHalf defaultValue={2} style={{marginTop: "-6px", marginLeft: "10px"}} />
                            </div>
                            <div className="col-md-5 col-sm-4">

                                <div className="progres">
                                  <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60"
                                  aria-valuemin="0" aria-valuemax="100" style={{width:"20%", height:"50%"}}>
                                  </div>
                                </div>
                            </div>
                          </div>
                          <hr style={{borderTop:'1px solid black',borderTopWidth:'1px',width:'97%'}}/>
                          <div className="card">
                              <div className="row" style={{padding:"0px"}}>
                              {!!reviews.length && <div className="row" style={{padding:"0px"}}>
                                {reviews && reviews.map((elem, key) => {
                                    if(key <= item -1 )
                                    return(
                                      <div  className="card-body space" style={{marginBottom:"0px", paddingLeft:"0px"}}>
                                          <div className="row">
                                              <div className="col-md-12 col-sm-12 col-xs-12">
                                                  <div className="col-md-3 col-sm-4 col-xs-12 " style={{paddingLeft:"0px" ,  paddingRight:"0px"}}><br/>
                                                      <img
                                                        src={elem.userImg ? elem.userImg : "../images/images.jpg"}
                                                        className="image-circle"
                                                        alt="" width="100" height="100"
                                                        style={{cursor: 'pointer'}}
                                                        onClick={this.goToProfile.bind(this, elem.userId, elem.profileId)}
                                                      />
                                                  </div>
                                                  <div className="col-md-5 col-sm-4"  style={{marginTop:"40px"}}>
                                                      <h5 className=""
                                                          style={{margin:"0", cursor: 'pointer'}}
                                                          onClick={this.goToProfile.bind(this, elem.userId, elem.profileId)}
                                                      >{elem.name}</h5>
                                                      <Rate disabled allowHalf value={elem.star}/>
                                                  </div>
                                                  <div className="col-md-4 col-sm-4 col-xs-12" style={{marginTop:"40px"}}>
                                                      <a name="linkReview"><p className="star-space1">Writen On {elem.written} </p></a>
                                                  </div>
                                              </div>
                                              <div className="col-md-12 col-sm-12 col-xs-12"><br/>
                                                  <div className="col-md-12 col-sm-12 col-xs-12" style={{paddingLeft:"0"}}>
                                                      <p>{elem.message}.</p>
                                                  </div>
                                              </div>
                                          </div>
                                          <hr style={{borderTop:'1px solid black',borderTopWidth:'1px',width:'97%',marginTop:'-10%'}}/>
                                      </div>
                                  )
                                  })}
                              </div>}
                              {reviews.length > item && <div className="">
                                <a
                                  className="btn btndetail-success"
                                  style={{display:"block", margin:"auto0"}}
                                  onClick={() => this.setState({item: item + 4})}
                                >More</a>
                              </div>}
                          </div>
                      </div>
                      </div>

                      <div className="col-md-4" style={{position: 'sticky',top:'25'}}>
                        <div className="roomdetail">
                          <h2 className="head-space2"><b>$ { data.rent || data.price }</b><sub>{ data.pricemode || data.priceMode }</sub></h2>
                          <br/>
                          <p> Dates </p>
                              <input value={" " + from + " ~ " + to + " "} />
                          <p> Accomodates </p>
                          <p> {accommodates} </p>

                           {/*<Cascader options={options} onChange={onChange} placeholder="Please select" style={{width:"100%"}} />*/}
                          <hr style={{borderTop:'1px solid black',borderTopWidth:'1px',width:'141px'}}/>
                          <div className="row">
                            <div className="col-md-4">
                              <p style={{marginTop:"0"}}> Pets </p>
                            </div>
                            <div className="col-md-8">
                              {petFriendly}
                            </div>
                          </div>
                          <hr style={{borderTop:'1px solid black',borderTopWidth:'1px',width:'141px'}}/>
                          <div className="row">
                            <div className="col-md-4">
                              <p style={{marginTop:"0"}}> Smoking </p>
                            </div>
                            <div className="col-md-8">
                              {data.smoking}
                            </div>
                          </div>
                          <hr style={{borderTop:'1px solid black',borderTopWidth:'1px',width:'141px'}}/>
                          <div className="row">
                            <div className="col-md-4">
                              <p style={{marginTop:"0"}}> Vegetarian </p>
                            </div>
                            <div className="col-md-8">
                              {data.vegetariansprefered || data.vegNoVeg }
                            </div>
                          </div>
                          <hr style={{borderTop:'1px solid black',borderTopWidth:'1px',width:'141px'}}/>
                          <div className="row">
                            <div className="col-md-4">
                              <p style={{marginTop:"0"}}> <b> Furnished </b></p>
                            </div>
                            <div className="col-md-8">
                              {data.furnished}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="container visible-xs">
                    <div className="row">
                        <div className="card outset" style={{ boxShadow: "none", background:"whitesmoke"}}>
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

export default Roomrenting3contentarea;
