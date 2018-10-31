import React, { Component } from 'react';
import axios from "axios/index";
import { Carousel, notification, Icon, Spin, Tabs} from 'antd';
import "./roomrenting2content.css";
import moment from 'moment'
import { Redirect } from 'react-router';
import {HttpUtils} from "../../Services/HttpUtils";


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
        console.log(sports.data.articles, 'sportssssssssss')
        const news = await axios.get('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=6e7e6a696773424187f9bdb80954ded7');
        console.log(news.data.articles, 'newssssssssssssssss')
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
        let email= data.contactMode && data.contactMode.includes('email') ? data.contactEmail : 'abc@gmail.com';
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

        return(
            <div>
                <div className="">
                    <div className="col-md-12" style={{border:'1px solid #8080804d'}}>
                       <h2 className="head-space">{data.postingtitle || data.postingTitle} Available</h2>
                    </div>
                </div>
                {/*<div className="row" style={{"marginTop": "62px"}}>
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="col-md-2 col-sm-12 col-xs-12">
                        </div>
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <h4 style={{fontSize: "16px"}}> <span className="glyphicon glyphicon-calendar"></span>{data.startdate}</h4>
                                <h4 style={{fontSize: "16px"}}> Available From</h4>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <h4 style={{fontSize: "16px"}}> <span className="glyphicon glyphicon-user"></span>{data.contactname || data.contactName}</h4>
                                <h4 style={{fontSize: "16px"}}> Male/Female</h4>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <h4 style={{fontSize: "16px"}}> Single Room</h4>
                                <h4 style={{fontSize: "16px"}}> Area Sq ft</h4>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <h3 style={{fontSize: "16px"}}> Furnished Room</h3>
                                <h4 style={{fontSize: "16px"}}><span className="glyphicon glyphicon-map-marker"></span>{data.propertylocation}</h4>
                                <div style={{"width": "50%","background": "#F1F2F2","paddingLeft": "32px","paddingTop": "2px"}}><h3 style={{fontSize: "16px"}}><span className="glyphicon glyphicon-usd"></span>{data.rent}</h3></div>
                            </div>
                        </div>
                    </div>
                </div>*/}
                <div className="col-md-12 col-sm-12 col-xs-12">
                    <div className="row" style={{"border-style": 'none',boxShadow:'none',border: '1px solid #8080804f',background: 'white',marginTop:'11px'}}>
                        <div className="col-lg-5 col-md-6 col-sm-6 col-xs-12">
                            <Carousel autoplay>
                                {images && images.map((elem) => {
                                    return(
                                        <div>
                                            <img src={elem}/>
                                        </div>
                                    )
                                })}
                            </Carousel>
                        </div>
                        <div className="col-lg-7 col-md-6 col-sm-6 col-xs-12">

                         <div className="col-md-12 col-sm-12 col-xs-12 des-space auther-border"  style={{"border-style": 'none',boxShadow:'none',border: '1px solid #8080804f',background: 'white',marginTop: '10px'}}>
                        <h3 style={{"marginTop":"14px","textAlign":"center","textDecoration": "underline"}}> Author </h3>
                        <div className="">
                            <div className="col-md-6 col-sm-12 col-xs-12">
                                <img src={data.userImage && data.userImage.length ? data.userImage : '../images/images.jpg'} class="img-circle" alt="" height="200" width="200" style={{cursor:'pointer'}} onClick={() => {this.goToProfile()}}/>
                                <hr/>
                                <br/>
                                <h4><b> Phone: </b>{' ' + phone}</h4>
                                <h4><b> Email: </b>{' ' + email}</h4>
                            </div>
                            <div className="col-md-6 col-sm-12 col-xs-12">
                                <form action="#">
                                    <div className="form-group">
                                        <label for="Name">Name:</label>
                                        <input type="text" value={this.state.name} onChange={this.onChangeValue} className="form-control" id="name"/>
                                    </div>
                                    <div className="form-group">
                                        <label for="email">Email address:</label>
                                        <input type="email" value={this.state.email} onChange={this.onChangeValue} className="form-control" id="email"/>
                                    </div>
                                    <div className="form-group">
                                        <label for="Massage">Massage:</label>
                                        <textarea className="form-control" value={this.state.msg} onChange={this.onChangeValue} id="msg"> </textarea>
                                    </div>
                                    {this.state.loader && <Spin indicator={antIcon} />}
                                    <button disabled={!!this.state.loader} type="submit" onClick={this.submitMsg.bind(this)} className="btn btn2-success">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                        </div>
                    </div>
                </div>
                
                    <div className="col-lg-9 col-md-6 col-sm-12 col-xs-12" style={{border:'1px solid #8080804d',marginTop:'16px',height:'222px'}}>
                        <h3 style={{marginTop:'9px'}}> Description </h3>
                        <p>{data.discription || data.description}</p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                        <ul class="list-group" style={{marginTop:'15px',border:'1px solid #80808040'}}>
                            <div className="row">
                                <div className="col-md-6"><h4 style={{fontSize: "16px",fontWeight:'bold',color: 'dimgray'}}> Available From</h4></div>
                                <div className="col-md-6"><h4 style={{fontSize: "16px"}}> <span className="glyphicon glyphicon-calendar"></span>{dateRange}</h4></div>
                            </div>
                            <div className="row">
                                <div className="col-md-6"><h4 style={{fontSize: "16px",fontWeight:'bold',color: 'dimgray'}}>Posted On</h4></div>
                                <div className="col-md-6"><h4 style={{fontSize: "16px"}}> <span className="glyphicon glyphicon-user"></span>{data.posted || '10-18-2018'}</h4></div>
                            </div>
                            <div className="row">
                                <div className="col-md-6"><h4 style={{fontSize: "16px",fontWeight:'bold',color: 'dimgray'}}>Posted By</h4></div>
                                <div className="col-md-6" onClick={() => {this.goToProfile()}}><h4 style={{fontSize: "16px", cursor: 'pointer'}}> <span className="glyphicon glyphicon-user"></span>{data.contactname || data.contactName}</h4></div>
                            </div>
                         </ul>
                    
                </div>
                <div className="row" >
                    <div >
                        <div className="col-md-12 col-sm-12 col-xs-12 des-space" style={{border:'1px solid #8080804d',marginTop:'11px'}}>
                            <div className="col-md-4 col-sm-12 col-xs-12 des-space">
                                <h3> Details </h3>
                                <p><b>Date Added:</b>{' ' + dateRange}</p>
                                <p><b>Type:</b>{' ' + data.category}</p>
                                <p><b>Status:</b>{' ' + data.furnished}</p>
                                <p><b>Pet Friendly:</b>{' ' + petFriendly}</p>
                                <p><b>Accommodates:</b>{' ' + accommodates}</p>
                                <p><b>Smoking:</b>{' ' + data.smoking}</p>
                            </div>
                            <div className="col-md-8 col-sm-12 col-xs-12">
                                <h3 style={{marginTop:'18px'}}>Location </h3>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.6337348509687!2d67.03749541472551!3d24.807992284078704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33da992be1aa7%3A0x7646411a2d8e6ac5!2sKRL+Creatives!5e0!3m2!1sen!2s!4v1536302761580" width="100%" height="400" frameborder="0" style={{"border":"0"}} allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{border:'1px solid #8080804d',marginTop:'11px'}}>
                    <h3> Features </h3>
                    {AIncludes && AIncludes.map((elem) => {
                        return(
                            <div className="col-md-3 col-sm-12 col-xs-12 des-space">
                                <div className="col-md-12 col-sm-12 col-xs-12 ">
                                    <div className="checkbox">
                                        <h4> <label><input type="checkbox" value="" checked="checked"/>{elem}</label> </h4>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Roomrenting3contentarea;
