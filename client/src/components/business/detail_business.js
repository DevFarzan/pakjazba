import React, { Component } from 'react';
import Burgermenu from '../header/burgermenu';
import Slider from '../header/Slider';
import "./detail_business.css";
import moment from 'moment';
import { Carousel, Rate, notification, Icon, Spin, Modal } from 'antd';
import { Redirect } from 'react-router';
import {HttpUtils} from "../../Services/HttpUtils";
// import FbImageLibrary from '../../lib/react-fb-image-grid'

class DetailBusiness extends Component{
    constructor(props){
        super()
        this.state = {
            isData: true,
            data: {},
            star: 0,
            name: '',
            email: '',
            msg: '',
            name1: '',
            email1: '',
            msg1: '',
            reviews: [],
            loader: false,
            goProfile: false,
            previewVisible: false
        }
    }

    componentDidMount(){
        window.scrollTo(0,0);
        let data = this.props.location.state;
        if(data === undefined){
            this.setState({
                isData: false
            })
        }else {
            this.setState({
                isData : true,
                data : data
            })
            this.getReviews(data)
        }
    }

    async getReviews(data){
        let res = await HttpUtils.get('getreviews')
        if(res.code === 200) {
            let filteredReviews = res.content.filter((elem) => elem.objid === data._id)
            this.setState({reviews: filteredReviews})
        }
    }

    handleChange(value){
        this.setState({star: value})
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
        let { name1, email1, msg1, star, reviews, data } = this.state;
        let obj = {
            objId: data._id,
            name : name1,
            email: email1,
            message: msg1,
            star,
            written: moment().format('LL')
        }
        let res = await HttpUtils.post('reviews', obj)
        reviews.push(obj)
        if(res.code === 200) {
            let message1 = 'Your review sent successfully'
            this.openNotification(message1)
            this.setState({name1: '', email1: '', msg1: '', star: 0, reviews, loader: false})
        }
    }

    async submitMessage(){
        this.setState({loader: true})
        const { name, email, msg, data } = this.state;
        let obj = {
            name,
            sender: email,
            msg,
            receiver: data.businessemail,
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

    onChangeInput(e){
        let target = e.target.id;
        if(target === 'name'){
            this.setState({name: e.target.value})
        }else if(target === 'email'){
            this.setState({email: e.target.value})
        }else if(target === 'message'){
            this.setState({msg: e.target.value})
        }
    }

    goToProfile(){
        this.setState({goProfile : true})
    }

    handleCancel = () => {
        this.setState({ previewVisible: false })
    }

    render(){
        const { isData, data, reviews, goProfile, previewVisible, previewImage } = this.state;
        const hide = true;
        let images = data.businessImages || data.arr_url;
        const antIcon = <Icon type="loading" style={{ fontSize: 24, marginRight: '10px' }} spin />;

        if(!isData){
            return <Redirect to='/' />
        }

        if(goProfile){
            return <Redirect to={{pathname: '/profile_userDetail', state: {userId: data.user_id, profileId: data.profileId}}}/>
        }

        return(
            <div>
                <span>
                    <div className ="" style={{"backgroundImage":"url('../images/bgc-images/busnes-listing.png')", marginTop : "-20px",backgroundSize: 'cover'}}>
                        <div className="background-image">
                            <Burgermenu/>
                        </div>
                    </div>
                </span>
                <div className="container" style={{width:"100%", marginTop:"142px"}}>
                  <div className="backgroundColor">
                    <div className="container" style={{width:"70%"}}>
                      <div className="row">
                          <div className="col-md-7">
                            <div className="card">
                                <div className="card-body space" style={{padding: "17px"}}>
                                  <h1 style={{fontWeight:"bold"}}>{data.businessName || data.businessname}</h1>
                                  <span>
                                  <Rate disabled style={{paddingBottom: '20px', marginTop:"-10px"}} allowHalf value={5}/> 5.0
                                  </span>
                                    <h5><span className="glyphicon glyphicon-home" style={{marginRight: "15px", color:"#36a89f"}}></span><span style={{color: "rgba(0, 0, 0, 0.65)"}}>{data.address || data.businessAddress}</span></h5>

                                    <h5><span className="glyphicon glyphicon-phone" style={{marginRight: "15px", color:"#36a89f"}}></span><span style={{color: "rgba(0, 0, 0, 0.65)"}}>{data.businessnumber || data.businessNumber}</span></h5>

                                    <h5><span className="glyphicon glyphicon-globe" style={{marginRight: "15px", color:"#36a89f"}}></span><span style={{color: "rgba(0, 0, 0, 0.65)"}}>{data.businessemail || data.businessEmail}</span></h5>
                                </div>
                            </div>
                            {/*End first tile */}
                          </div>
                          <div className="col-lg-5 col-md-5 col-sm-12 " >
                            {/*Start first tile */}
                            <div className="card">
                                <img className="card-img-top" src={images && images[0]} alt="" style={{"width":"100%"}} />
                            </div>
                            <div className="row" style={{padding:"0"}}>
                              <div className="col-md-6 col-sm-6 col-xs-6">
                                  <a  className="btn btndetail-success">Write a Review</a>
                              </div>
                              <div className="col-md-6 col-sm-6 col-xs-6">
                                  <a className="btn btndetail-success">Share</a>
                              </div>
                            </div>
                          </div>
                      </div>
                    </div>
                  </div>
                  <div className="container" style={{width:"70%"}}>
                    <div className="row">
                      <div className="col-md-7">
                        <div className="card-body space" style={{padding: "2px"}}>
                            <div className="row" style={{padding:"0"}}>
                                <div className="col-md-12">
                                    <h4><b>Opening Time</b></h4>
                                    <p style={{marginLeft:"16px"}}>You can contact between these timings</p>
                                    <hr size="3"/>
                                </div>
                            </div>
                            <div className="row" style={{padding:"0"}}>
                                <div className="col-md-12">
                                    <div className="col-md-6">
                                        <p><b>Opening Time</b></p>
                                    </div>
                                    <div className="col-md-6">
                                        <p><b>{data.openingTime}</b></p>
                                    </div>
                                </div>
                            </div>
                            <div className="row" style={{padding:"0"}}>
                                <div className="col-md-12">
                                    <div className="col-md-6">
                                        <p><b>Closing Time</b></p>
                                    </div>
                                    <div className="col-md-6">
                                        <p><b>{data.closingTime}</b></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>

                          <div className="row" style={{padding:"0px", marginTop:"10px"}}>
                            <div class="col-md-2">
                                <h4>
                                <b>Excellent </b>
                                </h4>
                            </div>
                            <div class="col-md-5">
                                <Rate allowHalf defaultValue={5} style={{marginTop: "-6px", marginLeft: "10px"}} />
                            </div>
                            <div class="col-md-5">

                                <div class="progress">
                                  <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60"
                                  aria-valuemin="0" aria-valuemax="100" style={{width:"100%"}}>
                                  </div>
                                </div>
                            </div>

                            <div class="col-md-2">
                                <h4>
                                <b>Good </b>
                                </h4>
                            </div>
                            <div class="col-md-5">
                                <Rate allowHalf defaultValue={4} style={{marginTop: "-6px", marginLeft: "10px"}} />
                            </div>
                            <div class="col-md-5">

                                <div class="progress">
                                  <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60"
                                  aria-valuemin="0" aria-valuemax="100" style={{width:"60%"}}>
                                  </div>
                                </div>
                            </div>

                            <div class="col-md-2">
                                <h4>
                                <b>Average </b>
                                </h4>
                            </div>
                            <div class="col-md-5">
                                <Rate allowHalf defaultValue={3} style={{marginTop: "-6px", marginLeft: "10px"}} />
                            </div>
                            <div class="col-md-5">

                                <div class="progress">
                                  <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60"
                                  aria-valuemin="0" aria-valuemax="100" style={{width:"45%"}}>
                                  </div>
                                </div>
                            </div>

                            <div class="col-md-2">
                                <h4>
                                <b>Bad </b>
                                </h4>
                            </div>
                            <div class="col-md-5">
                                <Rate allowHalf defaultValue={2} style={{marginTop: "-6px", marginLeft: "10px"}} />
                            </div>
                            <div class="col-md-5">

                                <div class="progress">
                                  <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60"
                                  aria-valuemin="0" aria-valuemax="100" style={{width:"20%"}}>
                                  </div>
                                </div>
                            </div>
                          </div>

                        </div>
                        <hr/>
                        {/*Start 5th tile */}
                        <div className="card">
                            {!!reviews.length && <div className="row" style={{padding:"0px"}}>
                                {reviews && reviews.map((elem, key) => {
                                    return(
                                        <div  key={key} className="card-body space" style={{marginBottom:"0px", paddingLeft:"0px"}}>
                                            <div className="row">
                                                <div className="col-md-12 col-sm-12 col-xs-12">
                                                    <div className="col-md-3 col-sm-12 col-xs-12 " style={{paddingLeft:"0px" ,  paddingRight:"0px"}}><br/>
                                                        <img src="../images/images.jpg" className="image-circle" alt="" width="100" height="100" />
                                                    </div>
                                                    <div className="col-md-5"  style={{marginTop:"40px"}}>
                                                          <h5 className="" style={{margin:"0"}}>{elem.name}</h5>
                                                        <Rate disabled allowHalf value={elem.star} />
                                                    </div>
                                                    <div className="col-md-4 col-sm-12 col-xs-12" style={{marginTop:"40px"}}>
                                                        <a name="linkReview"><p className="star-space1">Writen On {elem.written}</p></a>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 col-sm-12 col-xs-12"><br/>
                                                    <div className="col-md-2 col-sm-12 col-xs-12">
                                                    </div>
                                                    <div className="col-md-10 col-sm-12 col-xs-12">
                                                        <p>{elem.message}.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr style={{marginTop:"-10px"}}/>
                                            <div className="">
                                              <a  className="btn btndetail-success" style={{display:"block", margin:"auto0"}}>More</a>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>}
                        </div>
                        {/*End 5th tile */}
                      </div>
                      <div className="col-md-5">
                        <div className="">
                          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7242.887220253883!2d67.02816338632098!3d24.814498692583676!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x74882ba91beb6409!2sBar.B.Q.+Tonight!5e0!3m2!1sen!2snl!4v1547465385394" width="100%" height="250" frameborder="0" style={{border:"0"}} allowfullscreen></iframe>
                        </div>
                        <div className="">
                          <h4> More Business Info </h4>
                          <span><p> Accept Credit Card </p> <p><strong>No.</strong></p> </span>
                          <span><p> By Appointment Only  </p> <p><strong>No.</strong></p> </span>
                          <br/>
                          <h4> From The Business  </h4>
                          <p> How are we different</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="container" style={{width:"70%"}}>
                  <div className="row">
                      <div className="card">
                          <div className="card-body space">
                              <div className="row">
                                  <div className="col-md-12 col-sm-12 col-xs-12">
                                      <h3><b><a name="linkReview" className="black">Add Review</a></b></h3>
                                      <hr/>
                                  </div>
                              </div>
                              <div className="row">
                                  <div className="col-md-12">
                                      {/*Section: Contact v.2*/}
                                      <section className="section">
                                          <h4>Your Rating:
                                              <Rate onChange={this.handleChange.bind(this)} allowHalf value={this.state.star} />
                                          </h4>

                                      </section>
                                      {/*Section: Contact v.2*/}
                                  </div>
                              </div>
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
                                            <input type="text" id="name1" name="name" className="form-control" value={this.state.name1} onChange={this.onChangeReview.bind(this)}/>
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
                                            <textarea type="text" id="message1" name="message" rows="2" value={this.state.msg1} className="form-control md-textarea" onChange={this.onChangeReview.bind(this)}></textarea>
                                        </div>
                                    </div>
                                </div>
                                {/*Grid row*/}
                            </form>
                            <div className="text-center text-md-left">
                                {this.state.loader && <Spin indicator={antIcon} />}
                                <a disabled={!!this.state.loader} className="btn button_custom" onClick={this.submitReview.bind(this)} style={{width: "35%"}}>Send</a>
                            </div>
                            <div className="status"></div>
                        </div>
                        {/*Grid column*/}
                    </div>
                  </div>
                </div>
            </div>
        )
    }
}

export default DetailBusiness;
