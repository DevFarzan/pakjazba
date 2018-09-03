import React, { Component } from 'react';
import {Icon, Input, Form, Upload, message} from 'antd';
import App from '../../App';
import sha1 from "sha1";
import superagent from "superagent";
import AsyncStorage from "@callstack/async-storage";
import {HttpUtils} from "../../Services/HttpUtils";

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
        };
    }

    componentWillMount(){
        this.handleLocalStorage();
    }

    handleLocalStorage = () =>{
        AsyncStorage.getItem('user')
            .then((obj) => {
                var userObj = JSON.parse(obj)
                if(!!userObj) {
                    this.getprofileData(userObj.profileId)
                    this.setState({
                        userId: userObj._id,
                        profileId: userObj.profileId
                    })
                }
            })
    }

    async getprofileData(id){
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
    }

    getBase64(img, callback) {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }

    // beforeUpload(file) {
    //     console.log(file, 'fileeeeee')
    //     const isJPG = file.type === 'image/jpeg';
    //     if (!isJPG) {
    //         message.error('You can only upload JPG file!');
    //     }
    //     const isLt2M = file.size / 1024 / 1024 < 2;
    //     if (!isLt2M) {
    //         message.error('Image must smaller than 2MB!');
    //     }
    //     return isJPG && isLt2M;
    // }

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
        // console.log(info, 'infoooooooooooooo')
        // if (info.file.status === 'uploading') {
        //     this.setState({ loading: true });
        //     return;
        // }
        // if (info.file.status === 'done') {
         this.uploadFile(info.file).then((result) => {
             this.setState({
                 url : result.body.url,
                 imageUrl : result.body.url,
                 loading: false,
         })})
            // this.getBase64(info.file.originFileObj, imageUrl => {
            //    this.setState({
            //     imageUrl,
            //     loading: false,
            // })
            // });
        // }
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
            changePass: false
      })
   }

    handlePassSec(){
        this.setState({
            profileSec: false,
            changePass: true
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

    render(){
        const {getFieldDecorator} = this.props.form;
        const { imageUrl, profileSec, changePass, name, email, description, phone, twitter, facebook, location } = this.state;
        const props = {
            action: '//jsonplaceholder.typicode.com/posts/',
            onChange: this.handleChange,
        };

        return(
            <div>
                <App/>
                <div className="content" style={{"margin-top": "110px"}}>
                    <div className="container">
                        <div className="hero">
                            <div className="row">
                                {/*=======================col-md-3============================*/}
                                <div className="col-md-3">
                                    <nav className="nav flex-column side-nav">
                                        <a className="nav-link active icon border_sidenav"
                                           onClick={this.handleProfile.bind(this)}>
                                            <Icon type="user"/><span className="linktext_margin">My Profile</span>
                                        </a><br/><br/>
                                        <a className="nav-link active icon border_sidenav" href="my-profile.html">
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
                                                                       placeholder="Your Email"/>
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
                                                             src={imageUrl ? imageUrl : '../images/images.jpg'} alt=""/>
                                                    </div>
                                                    <div className="single-file-input"
                                                         style={{"textAlign": "center", "marginTop": "9px"}}>
                                                        <Upload {...props} >
                                                            <div className="btn btn-framed btn-primary small">Upload a
                                                                picture
                                                            </div>
                                                        </Upload>
                                                    </div>
                                                </div>
                                            </div>}
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const WrappedBusinessForm = Form.create()(ProfileUser);
export default WrappedBusinessForm;
