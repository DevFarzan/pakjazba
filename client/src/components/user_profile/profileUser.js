import React, { Component } from 'react';
import {Icon, Input, Form, Upload, message, Pagination} from 'antd';
import App from '../../App';
import Footer from '../footer/footer.js';
import sha1 from "sha1";
import superagent from "superagent";
import AsyncStorage from "@callstack/async-storage";
import {HttpUtils} from "../../Services/HttpUtils";
import Burgermenu from '../header/burgermenu';
import { Link } from "react-router-dom";
import { Redirect } from 'react-router';

const FormItem = Form.Item;
const { TextArea } = Input;

class ProfileUser extends Component{
    constructor(props) {
        super(props)
        this.state = {
            userId: '',
            profileId: '',
            loading: false,
            imageUrl: '',
            profileSec: true,
            changePass: false,
            name: '',
            email: '',
            phone: '',
            description: '',
            location: '',
            twitter: '',
            facebook: '',
            listing: false,
            listData: [],
            allData: [],
            buySell: false,
            business: false,
            rooms: false,
            data: []
        };
    }

    componentDidMount(){
        this.handleLocalStorage();
    }

    handleLocalStorage = () =>{
        AsyncStorage.getItem('user')
            .then((obj) => {
                var userObj = JSON.parse(obj)
                if(!!userObj) {
                    this.getprofileData(userObj.profileId, userObj._id)
                    this.setState({
                        userId: userObj._id,
                        profileId: userObj.profileId
                    })
                }
            })
    }

    async getprofileData(id, userId){
        var req = await HttpUtils.get('getprofile?profileId=' + id)
        var user = req.content;
        this.setState({
            name: user.name,
            email: user.email,
            location:user.location,
            description:user.description,
            phone:user.phone,
            twitter:user.twitterlink,
            facebook:user.facebooklink,
            imageUrl: user.imageurl
        })
        this.getAllBusiness(userId)
    }

    async getAllBusiness(id){
        let arr = [];
        var req = await HttpUtils.get('marketplace')
        req && req.busell.map((elem) => {
            if(elem.userid === id){
                let data = {...elem, ...{route: 'buySell'}}
                arr.push(data)
            }
        })
        req && req.business.map((elem) => {
            if(elem.user_id === id){
                let data = {...elem, ...{route: 'business'}}
                arr.push(data)
            }
        })
        req && req.roomrentsdata.map((elem) => {
            if(elem.user_id === id){
                let data = {...elem, ...{route: 'rooms'}}
                arr.push(data)
            }
        })
        this.setState({
            listData: arr.slice(0, 6),
            allData: arr,
        })
    }

    funcIndexes(page){
        var to = 6 * page;
        var from = to - 6;
        return {from: page === 1 ? 0 : from, to: page === 1 ? 6 : to}
    }

    onChange = (page) => {
        const { allData } = this.state;
        var indexes = this.funcIndexes(page)
        this.setState({
            current: page,
            listData: allData.slice(indexes.from, indexes.to)
        });
    }

    getBase64(img, callback) {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }

    uploadFile = (files) =>{
        const image = files.originFileObj
        const cloudName = 'dxk0bmtei'
        const url = 'https://api.cloudinary.com/v1_1/'+cloudName+'/image/upload'
        const timestamp = Date.now()/1000
        const uploadPreset = 'toh6r3p2'
        const paramsStr = 'timestamp='+timestamp+'&upload_preset='+uploadPreset+'U8W4mHcSxhKNRJ2_nT5Oz36T6BI'
        const signature = sha1(paramsStr)
        const params = {
            'api_key':'878178936665133',
            'timestamp':timestamp,
            'upload_preset':uploadPreset,
            'signature':signature
        }

        return new Promise((res, rej) => {
            let uploadRequest = superagent.post(url)
            uploadRequest.attach('file', image)
            Object.keys(params).forEach((key) =>{
                uploadRequest.field(key, params[key])
            })

            uploadRequest.end((err, resp) =>{
                err ? rej(err) : res(resp);
            })
        })
    }

    handleChange = (info) => {
         this.uploadFile(info.file).then((result) => {
             this.setState({
                 url : result.body.url,
                 imageUrl : result.body.url,
                 loading: false,
         })})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { url, name, location, description, email, phone, twitter, facebook, changePass, userId, profileId } = this.state;
        if(changePass) {
            this.props.form.validateFieldsAndScroll((err, values) => {
                if(!err) {
                    var obj = {
                        userId,
                        currentPassword: values.currentPass,
                        newPassword: values.password,
                        confirmPassword: values.confirm,
                    }
                    this.passwordData(obj)
                }
            })
        }else {
            var obj = {
                profileId,
                userId,
                description,
                email,
                facebook,
                location,
                name,
                phone,
                twitter,
                url
            }
            this.profileData(obj)
      }
    }

    async profileData(obj){
        var req = await HttpUtils.post('profile', obj)
    }

    async passwordData(obj){
        var req = await HttpUtils.post('changepassword', obj)
    }

    handleProfile(){
        this.setState({
            profileSec: true,
            changePass: false,
            listing: false
        })
    }

    handleListing(){
        this.setState({
            profileSec: false,
            changePass: false,
            listing: true
        })
    }

    handlePassSec(){
        this.setState({
            profileSec: false,
            changePass: true,
            listing: false
        })
    }

    onChangeValue(e){
        if(e.target.id === 'name'){
            this.setState({name: e.target.value})
        }else if(e.target.id === 'location'){
            this.setState({location: e.target.value})
        }else if(e.target.id === 'description'){
            this.setState({description: e.target.value})
        }else if(e.target.id === 'phone'){
            this.setState({phone: e.target.value})
        }else if(e.target.id === 'email'){
            this.setState({email: e.target.value})
        }else if(e.target.id === 'twitter'){
            this.setState({twitter: e.target.value})
        }else if(e.target.id === 'facebook'){
            this.setState({facebook: e.target.value})
        }
    }

    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    }

    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    }

    editBusiness = (e) => {
        if(e.route === "buySell"){
            this.setState({
                buySell: true,
                data: e,
            })
        }else if(e.route === "business"){
            this.setState({
                business: true,
                data: e,
            })
        }else if(e.route === "rooms"){
            this.setState({
                rooms: true,
                data: e,
            })
        }
    }

    render(){
        const {getFieldDecorator} = this.props.form;
        const { imageUrl, profileSec, changePass, name, email, description, phone, twitter, facebook, location, listing, listData, buySell, business, rooms, data, allData } = this.state;

        if(buySell){
            return(
                <Redirect to={{pathname: '/postad_buysell', state: data}}/>
            )
        }else if(business){
            return(
                <Redirect to={{pathname: '/postad_business', state: data}}/>
            )
        }else if(rooms){
            return(
                <Redirect to={{pathname: '/postad_Roommates', state: data}}/>
            )
        }

        const props = {
            action: '//jsonplaceholder.typicode.com/posts/',
            onChange: this.handleChange,
        };

        return(
            <div>
                <Burgermenu/>
                <div className="content" style={{"paddingTop": "106px"}}>
                    <div className="container" style={{width:"87%"}}>
                        <div className="hero">
                            <div className="row">
                                {/*=======================col-md-3============================*/}
                                <div className="col-md-3">
                                    <nav className="nav flex-column side-nav">
                                        <a className="nav-link active icon border_sidenav"
                                           onClick={this.handleProfile.bind(this)}>
                                            <Icon type="user"/><span className="linktext_margin">My Profile</span>
                                        </a><br/><br/>
                                        <a className="nav-link active icon border_sidenav"
                                           onClick={this.handleListing.bind(this)}>
                                            <Icon type="heart"/><span className="linktext_margin">My Ads Listing</span>
                                        </a><br/><br/>
                                        <a className="nav-link active icon border_sidenav"
                                           onClick={this.handlePassSec.bind(this)}>
                                            <Icon type="key"/><span className="linktext_margin">Change Password</span>
                                        </a>
                                    </nav>
                                </div>
                                {/*col-md-3*/}
                                {/*======================col-md-3================================*/}
                                {/*======================col-md-9================================*/}
                                <div className="col-md-9">
                                    <Form onSubmit={this.handleSubmit} className="form">
                                        <div className="row">
                                            {profileSec && <div className="col-md-8">
                                                <h2>Personal Information</h2>
                                                <section>
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <div className="form-group">
                                                                <label htmlFor="sel1">Title:</label>
                                                                <select className="form-control" id="sel1">
                                                                    <option>Mr</option>
                                                                    <option>Mrs</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-8">
                                                            <div className="form-group">
                                                                <label htmlFor="usr">Name:</label>
                                                                <FormItem>
                                                                    {getFieldDecorator('name', {
                                                                        initialValue: name,
                                                                        rules: [{
                                                                            required: true,
                                                                            message: 'Please input your Name!',
                                                                            whitespace: true
                                                                        }],
                                                                    })(
                                                                        <input type="text" className="form-control"
                                                                               onChange={this.onChangeValue.bind(this)}
                                                                        />
                                                                    )}
                                                                </FormItem>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="form-group">
                                                                <label htmlFor="usr">Your Location:</label>
                                                                <FormItem>
                                                                    {getFieldDecorator('location', {
                                                                        initialValue: location,
                                                                        rules: [{
                                                                            required: true,
                                                                            message: 'Please input your Location!',
                                                                            whitespace: true
                                                                        }],
                                                                    })(
                                                                        <input type="text" className="form-control"
                                                                               onChange={this.onChangeValue.bind(this)}/>
                                                                    )}
                                                                </FormItem>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="form-group">
                                                                <label htmlFor="usr">More About You:</label>
                                                                <FormItem>
                                                                    {getFieldDecorator('description', {
                                                                        initialValue: description,
                                                                        rules: [
                                                                            {
                                                                                required: true,
                                                                                message: 'Please input your Info!',
                                                                                whitespace: true
                                                                            }],
                                                                    })(
                                                                        <TextArea className="form-control"
                                                                                  onChange={this.onChangeValue.bind(this)}
                                                                                  placeholder="tell more" rows={3}
                                                                                  maxlength="500"/>
                                                                    )}
                                                                </FormItem>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </section>
                                                <section>
                                                    <h2>Contact</h2>
                                                    <div className="form-group">
                                                        <label htmlFor="phone" className="col-form-label">Phone</label>
                                                        <FormItem>
                                                            {getFieldDecorator('phone', {
                                                                initialValue: phone,
                                                                rules: [{
                                                                    required: true,
                                                                    message: 'Please input your Phone!',
                                                                    whitespace: true
                                                                }],
                                                            })(
                                                                <Input name="phone" type="text" className="form-control"
                                                                       onChange={this.onChangeValue.bind(this)}
                                                                       placeholder="Your Phone"/>
                                                            )}
                                                        </FormItem>
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="email" className="col-form-label">Email</label>
                                                        <FormItem>
                                                            {getFieldDecorator('email', {
                                                                initialValue: email,
                                                                rules: [{
                                                                    type: 'email',
                                                                    message: 'The input is not valid E-mail!',
                                                                }, {
                                                                    required: true,
                                                                    message: 'Please input your E-mail!',
                                                                }],
                                                            })(
                                                                <Input name="email" type="email"
                                                                       className="form-control"
                                                                       onChange={this.onChangeValue.bind(this)}
                                                                       placeholder="Your Email" readOnly />
                                                            )}
                                                        </FormItem>
                                                    </div>
                                                </section>
                                                <section>
                                                    <h2>Social</h2>
                                                    <div className="form-group">
                                                        <label htmlFor="phone"
                                                               className="col-form-label">Twitter</label>
                                                        <FormItem>
                                                            {getFieldDecorator('twitter', {
                                                                initialValue: twitter,
                                                                rules: [{
                                                                    required: true,
                                                                    message: 'Please input your Twitter!',
                                                                    whitespace: true
                                                                }],
                                                            })(
                                                                <input name="phone" type="text" className="form-control"
                                                                       onChange={this.onChangeValue.bind(this)}
                                                                       placeholder="Your Twitter Link"/>
                                                            )}
                                                        </FormItem>
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="email"
                                                               className="col-form-label">Facebook</label>
                                                        <FormItem>
                                                            {getFieldDecorator('facebook', {
                                                                initialValue: facebook,
                                                                rules: [{
                                                                    required: true,
                                                                    message: 'Please input your Facebook!',
                                                                    whitespace: true
                                                                }],
                                                            })(
                                                                <input name="email" type="text" className="form-control"
                                                                       onChange={this.onChangeValue.bind(this)}
                                                                       placeholder="Your Facebook Link"/>
                                                            )}
                                                        </FormItem>
                                                    </div>
                                                </section>
                                                <section>
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <button className="btn btn-primary"
                                                                    style={{"float": "right"}}>Save Changes
                                                            </button>
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>}
                                            {changePass && <div className="col-md-8">
                                                <h2>Change Password</h2>
                                                <section>
                                                    <div className="form-group">
                                                        <label htmlFor="currentpassword" className="col-form-label">Current
                                                            Password</label>
                                                        <FormItem>
                                                            {getFieldDecorator('currentPass', {
                                                                rules: [{
                                                                    required: true,
                                                                    message: 'Please input your Current Password!',
                                                                }],
                                                            })(
                                                                <Input name="currentpassword" type="password"
                                                                       className="form-control" id="password"
                                                                       placeholder="Current Password"/>
                                                            )}
                                                        </FormItem>
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="newpassword" className="col-from-label">New
                                                            Password</label>
                                                        <FormItem>
                                                            {getFieldDecorator('password', {
                                                                rules: [{
                                                                    required: true,
                                                                    message: 'Please input your New Password!',
                                                                }, {
                                                                    validator: this.validateToNextPassword,
                                                                }],
                                                            })(
                                                                <Input name="newpassword" type="password"
                                                                       className="form-control" id="New password"
                                                                       placeholder="new password"/>
                                                            )}
                                                        </FormItem>
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="confrimpassword" className="col-form-label">Confrim
                                                            Password</label>
                                                        <FormItem>
                                                            {getFieldDecorator('confirm', {
                                                                rules: [{
                                                                    required: true,
                                                                    message: 'Please input your Confirm Password!',
                                                                }, {
                                                                    validator: this.compareToFirstPassword,
                                                                }],
                                                            })(
                                                                <Input name="confrimpassword" type="password"
                                                                       className="form-control" id="confrimpassword"
                                                                       placeholder="Confrim Password"/>
                                                            )}
                                                        </FormItem>
                                                    </div>
                                                </section>
                                                <section>
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <button className="btn btn-primary"
                                                                    style={{"float": "right"}}>Change Password
                                                            </button>
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>}
                                            {profileSec && <div className="col-md-4">
                                                <div className="profile-image">
                                                    <div className="img-circle">
                                                        <img className="img-circle"
                                                             src={imageUrl ? imageUrl : '../images/images.jpg'} alt="" style={{"width":"78%"}} />
                                                    </div>
                                                    <div className="single-file-input"
                                                         style={{"padding": "16px", "marginTop": "-6px"}}>
                                                        <Upload {...props} >
                                                            <div className="btn btn-framed btn-primary small">Upload a
                                                                picture
                                                            </div>
                                                        </Upload>
                                                    </div>
                                                </div>
                                            </div>}
                                        {/*===============Ad Listing start=================*/}
                                            {listing && <div className="secondfold" style={{backgroundColor: '#FBFAFA'}}>
                                                <div className="index-content" style={{marginBottom: "-225px", marginTop: '-125px'}}>
                                                    <div className="row">
                                                        {listData && listData.map((elem) => {
                                                            let img = elem.images && elem.images[0] || elem.businessImages && elem.businessImages[0] || elem.imageurl && elem.imageurl[0] || '../images/images.jpg';
                                                            let title = elem.title || elem.businessname || elem.postingtitle || ''
                                                            let str = elem.description || elem.discription || '';
                                                            if(str.length > 100) {
                                                                str = str.substring(0, 100);
                                                                str = str + '...'
                                                            }
                                                            return(
                                                                <div className="col-md-5"  style={{'marginBottom': '30px'}}>
                                                                    <div className="card">
                                                                        <img src={img} />
                                                                        <h4>{title}</h4>
                                                                        <p>{str}</p>
                                                                        <a onClick={this.editBusiness.bind(this, elem)}><i className="glyphicon glyphicon-edit" style={{padding: "16px",marginTop: "8px",color:"gray"}}><span style={{margin:"7px"}}>Edit</span></i></a>
                                                                        <i className="glyphicon glyphicon-trash" style={{padding: "16px",marginTop: "8px",float:"right",color:"gray"}}><span style={{margin:"7px"}}>Remove</span></i>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })}
                                                    </div>
                                                    <span style={{textAlign:"center"}}><Pagination defaultCurrent={1} defaultPageSize={6} total={allData.length} onChange={this.onChange} /></span>
                                                </div>
                                             </div>}
                                        {/*===============Ad listing end=============*/}
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

const WrappedBusinessForm = Form.create()(ProfileUser);
export default WrappedBusinessForm;
