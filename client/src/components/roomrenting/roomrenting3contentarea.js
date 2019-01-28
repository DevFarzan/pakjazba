import React, { Component } from 'react';
import axios from "axios/index";
import { Carousel, Rate, notification, Icon, Spin, Tabs, Cascader} from 'antd';
import "./roomrenting2content.css";
import moment from 'moment'
import { Redirect } from 'react-router';
import Gallery from './gallery';
import {HttpUtils} from "../../Services/HttpUtils";
import { DatePicker } from 'antd';

const { MonthPicker, RangePicker } = DatePicker;

const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';

const options = [{
  value: '2 guests',
  label: '2 guests',
},
  {
    value: '3 guests',
    label: '3 guests',

  }];

  function onChange(value) {
    console.log(value);
  }

const TabPane = Tabs.TabPane;
class Roomrenting3contentarea extends Component{
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            msg: '',
            receiver: '',
            loader: false,
            news: [],
            sports: [],
            goProfile: false
        }
    }

    componentDidMount() {
        this.callApi()
        //this.getAllBlogs()
    }

    componentDidUpdate(prevProps, prevState){
        let email = this.props.data.contactemail;
        if(prevState.receiver !== email) {
            this.setState({receiver: email})
        }
    }

    onChangeValue = (e) => {
        let target = e.target.id;
        let value = e.target.value;
        if(target === 'name'){
            this.setState({name: value})
        }else if(target === 'email'){
            this.setState({email: value})
        }else if(target === 'msg'){
            this.setState({msg: value})
        }
    }

    async submitMsg(e){
        e.preventDefault();
        this.setState({loader: true})
        const { name, email, msg, receiver } = this.state;
        let obj = {
            name,
            sender: email,
            msg,
            receiver,
            written: moment().format('LL')
        }
        let res = await HttpUtils.post('sendmessage', obj)
        if(res.code === 200) {
            let message1 = 'Your message sent successfully'
            this.openNotification(message1)
            this.setState({name: '', email: '', msg: '', loader: false})
        }
    }

    openNotification(msg) {
        notification.open({
            message: 'Success ',
            description: msg,
        });
    };

     async callApi(){
        const sports = await axios.get('https://newsapi.org/v2/top-headlines?sources=bbc-sport&apiKey=6e7e6a696773424187f9bdb80954ded7');
        const news = await axios.get('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=6e7e6a696773424187f9bdb80954ded7');
        this.setState({news: news.data.articles, sports: sports.data.articles})
    }

    goToProfile(){
        this.setState({goProfile : true})
    }

    render(){
        const { data } = this.props;
        const { news, sports, goProfile } = this.state;
        let dateRange = data.startdate || data.dateRange && data.dateRange.from;
        let petFriendly = data.petfriendly || data.petFriendly;
        let accommodates = data.accomodates || data.accommodates;
        let images = data.imageurl || data.arr_url;
        let AIncludes = data.amenitiesinclude || data.amenities;
        let email= data.contactMode && data.contactMode.includes('email') ? data.contactEmail : '*****@gmail.com';
        let phone = data.contactMode && data.contactMode.includes('phone') ? data.contactNumber : '***********';
        const antIcon = <Icon type="loading" style={{ fontSize: 24, marginRight: '10px' }} spin />;

        if(goProfile){
            return <Redirect to={{pathname: '/profile_userDetail', state: {userId: data.user_id, profileId: data.profileId}}}/>
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
                <div className="" style={{marginTop: '7%'}}>

                </div>
                
                <Gallery images={images} style={{marginTop: '13%'}}/>            
                  <div className="container" style={{width:"70%"}}>
                    <div className="row">
                      <div className="col-md-8">
                          <h3 className="head-space2"> California  </h3>
                          <h1 className="head-space2"><b>{data.postingtitle || data.postingTitle} Available</b></h1>
                          <h4 style={{marginLeft:"0", marginBottom:"70px"}}> Riva </h4>
                          <div className="row" style={{padding:"0"}}>
                            <div className="col-md-1">
                            <i class="fa fa-home" style={{fontSize:"30px"}}/>
                            </div>
                            <div className="col-md-11">
                              <h4 style={{margin:"0"}}> ENTIRE APPARTMENT </h4>
                              <span className="appartmentdes">
                                <p> 6 Guest  </p>
                                <p> 2 Bedrooms</p>
                                <p> 1 Bath</p>
                               </span>
                            </div>
                            <div className="col-md-1">
                            <i class="fa fa-map" style={{fontSize:"30px"}}/>
                            </div>
                            <div className="col-md-11">
                              <h4 style={{margin:"0"}}> GREAT LOCATION </h4>
                              <span className="appartmentdes">
                                <p> 100% of recent guests gave this homes's location a 5-star rating.  </p>

                               </span>
                            </div>
                            <div className="col-md-1">
                            <i class="fa fa-snowflake-o" style={{fontSize:"30px"}}/>
                            </div>
                            <div className="col-md-11">
                              <h4 style={{margin:"0"}}> Sparkling Clean </h4>
                              <span className="appartmentdes">
                                <p> 10 recent guests have said that this home was sparkling clean.  </p>
                               </span>
                            </div>
                          </div>
                          <hr/>
                          <h3 style={{marginTop:'9px'}}> Description </h3>
                          <p>{data.discription || data.description}</p>
                          <hr/>
                          <h3 style={{marginTop:'9px'}}> Amenities </h3>
                          <div className="forimage">
                            <div className="row" style={{padding:"0"}}>
                              <div className="col-md-12 col-sm-12 col-xs-12">
                              <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="col-md-4 col-xs-5">
                                  <img src="../images/icons-room/gym.png"/>
                                </div>
                                <div className="col-md-8 col-xs-7">
                                  <p> Gym/Fitness Center </p>
                                </div>
                                <div className="col-md-4 col-xs-5">
                                  <img src="../images/icons-room/swimmimg.png"/>
                                </div>
                                <div className="col-md-8 col-xs-7">
                                  <p> Swimming Pool </p>
                                </div>
                                <div className="col-md-4 col-xs-5">
                                  <img src="../images/icons-room/lawn.png"/>
                                </div>
                                <div className="col-md-8 col-xs-7">
                                  <p> Private Lawn </p>
                                </div>
                                <div className="col-md-4 col-xs-5">
                                  <img src="../images/icons-room/power-backup.png"/>
                                </div>
                                <div className="col-md-8 col-xs-7">
                                  <p> Power Backup </p>
                                </div>
                              </div>
                              <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="col-md-4 col-xs-5">
                                  <img src="../images/icons-room/water-heater-filled.png"/>
                                </div>
                                <div className="col-md-8 col-xs-7">
                                  <p> Water Heater</p>
                                </div>
                                <div className="col-md-4 col-xs-5">
                                  <img src="../images/icons-room/car-park.png"/>
                                </div>
                                <div className="col-md-8 col-xs-7">
                                  <p> Car Park </p>
                                </div>
                                <div className="col-md-4 col-xs-5">
                                  <img src="../images/icons-room/garbage.png"/>
                                </div>
                                <div className="col-md-8 col-xs-7">
                                  <p> Garbage Disposal </p>
                                </div>
                                <div className="col-md-4 col-xs-5">
                                  <img src="../images/icons-room/club-house.png"/>
                                </div>
                                <div className="col-md-8 col-xs-7">
                                  <p> Club House </p>
                                </div>
                              </div>
                              <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="col-md-4 col-xs-5">
                                  <img src="../images/icons-room/security-system.png"/>
                                </div>
                                <div className="col-md-8 col-xs-7">
                                  <p> Security System </p>
                                </div>
                                <div className="col-md-4 col-xs-5">
                                  <img src="../images/icons-room/elevator.png"/>
                                </div>
                                <div className="col-md-8 col-xs-7">
                                  <p> Elevator </p>
                                </div>
                                <div className="col-md-4 col-xs-5">
                                  <img src="../images/icons-room/visitor-parking.png"/>
                                </div>
                                <div className="col-md-8 col-xs-7">
                                  <p> Visitors Parking </p>
                                </div>
                                <div className="col-md-4 col-xs-5">
                                  <img src="../images/icons-room/Washer.png"/>
                                </div>
                                <div className="col-md-8 col-xs-7">
                                  <p> Washer </p>
                                </div>
                              </div>


                              </div>

                            </div>
                          </div>
                          <hr/>
                          <h3 style={{marginTop:'9px'}}> Sleeping Arrangments </h3>
                          <div className="forimage">
                            <div className="row" style={{padding:"0"}}>
                              <div className="col-md-4 col-sm-4">
                                <div className="col-md-4 col-sm-5 col-xs-4">
                                  <img src="../images/icons-room/gym.png"/>
                                </div>
                                <div className="col-md-8 col-sm-7 col-xs-8">
                                  <p> 1 Bed </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="availability">  Availability </p>
                          <p style={{marginBottom:"0"}}> 1 night minimum stay </p>
                          <span>
                            <Rate allowHalf defaultValue={5} />
                          </span>
                          <div className="row" style={{padding:"0px", marginTop:"50px"}}>
                            <div class="col-md-2 col-sm-3" style={{paddingLeft:"0"}}>
                                <h4>
                                <b>Excellent </b>
                                </h4>
                            </div>
                            <div class="col-md-5 col-sm-5">
                                <Rate allowHalf defaultValue={5} style={{marginTop: "-6px", marginLeft: "10px"}} />
                            </div>
                            <div class="col-md-5 col-sm-4">

                                <div class="progres">
                                  <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60"
                                  aria-valuemin="0" aria-valuemax="100" style={{width:"100%", height:"50%"}}>
                                  </div>
                                </div>
                            </div>

                            <div class="col-md-2 col-sm-3" style={{paddingLeft:"0"}}>
                                <h4>
                                <b>Good </b>
                                </h4>
                            </div>
                            <div class="col-md-5 col-sm-5">
                                <Rate allowHalf defaultValue={4} style={{marginTop: "-6px", marginLeft: "10px"}} />
                            </div>
                            <div class="col-md-5 col-sm-4">

                                <div class="progres">
                                  <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60"
                                  aria-valuemin="0" aria-valuemax="100" style={{width:"60%", height:"50%"}}>
                                  </div>
                                </div>
                            </div>

                            <div class="col-md-2 col-sm-3" style={{paddingLeft:"0"}}>
                                <h4>
                                <b>Average </b>
                                </h4>
                            </div>
                            <div class="col-md-5 col-sm-5">
                                <Rate allowHalf defaultValue={3} style={{marginTop: "-6px", marginLeft: "10px"}} />
                            </div>
                            <div class="col-md-5 col-sm-4">

                                <div class="progres">
                                  <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60"
                                  aria-valuemin="0" aria-valuemax="100" style={{width:"45%", height:"50%"}}>
                                  </div>
                                </div>
                            </div>

                            <div class="col-md-2 col-sm-3" style={{paddingLeft:"0"}}>
                                <h4>
                                <b>Bad </b>
                                </h4>
                            </div>
                            <div class="col-md-5 col-sm-5">
                                <Rate allowHalf defaultValue={2} style={{marginTop: "-6px", marginLeft: "10px"}} />
                            </div>
                            <div class="col-md-5 col-sm-4">

                                <div class="progres">
                                  <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60"
                                  aria-valuemin="0" aria-valuemax="100" style={{width:"20%", height:"50%"}}>
                                  </div>
                                </div>
                            </div>
                          </div>
                          <hr/>
                          <div className="card">
                              <div className="row" style={{padding:"0px"}}>
                                          <div  className="card-body space" style={{marginBottom:"0px", paddingLeft:"0px"}}>
                                              <div className="row">
                                                  <div className="col-md-12 col-sm-12 col-xs-12">
                                                      <div className="col-md-3 col-sm-4 col-xs-12 " style={{paddingLeft:"0px" ,  paddingRight:"0px"}}><br/>
                                                          <img src="../images/images.jpg" className="image-circle" alt="" width="100" height="100" />
                                                      </div>
                                                      <div className="col-md-5 col-sm-4"  style={{marginTop:"40px"}}>
                                                            <h5 className="" style={{margin:"0"}}>Farzan</h5>
                                                          <Rate disabled allowHalf value={5}/>
                                                      </div>
                                                      <div className="col-md-4 col-sm-4 col-xs-12" style={{marginTop:"40px"}}>
                                                          <a name="linkReview"><p className="star-space1">Writen On 2018 </p></a>
                                                      </div>
                                                  </div>
                                                  <div className="col-md-12 col-sm-12 col-xs-12"><br/>
                                                      <div className="col-md-12 col-sm-12 col-xs-12" style={{paddingLeft:"0"}}>
                                                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                           when an unknown printer took a galley of type and scrambled it to make a type
                                                           specimen book. It has survived not only five centuries, </p>
                                                      </div>
                                                  </div>
                                              </div>
                                              <hr style={{marginTop:"-10px"}}/>
                                              <div className="">
                                                <a  className="btn btndetail-success" style={{display:"block", margin:"auto0"}}>More</a>
                                              </div>
                                          </div>

                              </div>
                          </div>
                      </div>

                      <div className="col-md-4" style={{position: 'sticky',top:'25'}}>
                        <div className="roomdetail">
                          <h2 className="head-space2"><b>$ 81</b><sub> per night</sub></h2>
                          <br/>
                          <p> Dates </p>
                          <RangePicker
                          defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
                          format={dateFormat}
                          />
                          <p> Guests </p>
                           <Cascader options={options} onChange={onChange} placeholder="Please select" style={{width:"100%"}} />
                          <hr/>
                          <div className="row">
                            <div className="col-md-8">
                              <p style={{marginTop:"0"}}> $81 X 27 nights </p>
                            </div>
                            <div className="col-md-4">
                              $2,430
                            </div>
                          </div>
                          <hr/>
                          <div className="row">
                            <div className="col-md-8">
                              <p style={{marginTop:"0"}}> Cleaning Fee </p>
                            </div>
                            <div className="col-md-4">
                              $25
                            </div>
                          </div>
                          <hr/>
                          <div className="row">
                            <div className="col-md-8">
                              <p style={{marginTop:"0"}}> Service Fee </p>
                            </div>
                            <div className="col-md-4">
                              $285
                            </div>
                          </div>
                          <hr/>
                          <div className="row">
                            <div className="col-md-8">
                              <p style={{marginTop:"0"}}> <b> Total </b></p>
                            </div>
                            <div className="col-md-4">
                              <b>$2,430</b>
                            </div>
                          </div>


                        </div>
                      </div>


                    </div>
                  </div>
                  <div className="container" style={{width:"70%"}}>
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
                                                <Rate allowHalf value={5} />
                                            </h4>

                                        </section>
                                        {/*Section: Contact v.2*/}
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {/*Grid column*/}
                                <div className="col-md-7 mb-md-0 mb-5">
                                    <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                                        {/*Grid row*/}
                                        <div className="row">
                                            {/*Grid column*/}
                                            <div className="col-md-6">
                                                <div className="md-form mb-0">
                                                    <label className="">Your name</label>
                                                    <input type="text" id="name1" name="name" className="form-control" />
                                                </div>
                                            </div>
                                            {/*Grid column*/}
                                            {/*Grid column*/}
                                            <div className="col-md-6">
                                                <div className="md-form mb-0">
                                                    <label className="">Your email</label>
                                                    <input type="text" id="email1" name="email" className="form-control" />
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
                                                    <textarea type="text" id="message1" name="message" rows="2"  className="form-control md-textarea"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        {/*Grid row*/}
                                    </form>
                                    <div className="text-center text-md-left">
                                        <a className="btn button_custom" style={{width: "35%"}}>Send</a>
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
