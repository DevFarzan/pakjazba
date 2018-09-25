import React, { Component } from   'react';
import Formsignin from '../signin_seperate/form_signin';
import Facebook from '../Facebook';
import Google from '../Google';
import Form_signup from './form_signup.js';
import {HttpUtils} from "../../Services/HttpUtils";
import AsyncStorage from "@callstack/async-storage/lib/index";
import {connect} from "react-redux";
import {Form} from "antd/lib/index";
import { withRouter, Redirect, } from 'react-router-dom';

class Signin extends Component{
    constructor(props) {
        super(props)
        this.state = {
            obj: [],
            route: 'seperate',
            redirectToReferrer: false
        }
    }

    componentDidMount(){
        this.handleLocalStorage();
        this.getSignData();
    }

    componentDidUpdate(prevProps, prevState){
        const { data } = this.props;
        const { route, obj } = this.state;
        let arr = obj.map((elem) => elem.password)
        if(prevProps.data !== data){
            if(data && data.route === route) {
                if(arr.includes(data.id)){
                    obj.map((elem) => {
                        if(elem.password === data.id){
                            this.funcLogin({userName: elem.email, password: elem.password})
                        }
                    })
                }else {
                    if (data && data.email === undefined) {
                        this.setState({secModal: true})
                    }
                    else {
                        if (data) {
                            let obj = {
                                nickname: data.name,
                                email: data.email,
                                password: data.id,
                                notrobot: true
                            }
                            this.funcSignUp(obj)
                        }
                    }
                }
            }
        }
    }

    async getSignData(){
        let res = await HttpUtils.get('facebookdata')
        if(res){
            this.setState({obj: res.data})
        }
        this.getAllUsers()
    }

    handleLocalStorage = () =>{
        AsyncStorage.getItem('user')
            .then((obj) => {
                let userObj = JSON.parse(obj)
                if(!!userObj){
                    this.setState({
                        dropdown: true,
                    })
                }
                else {
                    this.setState({
                        dropdown: false
                    })
                }
            })
    }

    async getAllUsers(){
        let response = await HttpUtils.get('allusers')
        if(response){
            this.setState({allUser: response && response.content, _isMount: true})
        }
    }

    async funcLogin(values){
        let response = await HttpUtils.get('usersignin?useremail='+values.userName+'&password='+values.password)
        if(response.code === 200){
            this.getProfile(response)
                .then((data) => {
                    AsyncStorage.setItem('user', JSON.stringify(data))
                        .then(() => {
                            // this.props.modalContent();
                            this.setState({
                                loader:false,
                                visible:false,
                                showloader:false,
                                redirectToReferrer: true
                            })
                        })
                })
        }//end if
        else{
            this.setState({
                msg: response.msg,
            })
        }
    }

    async getProfile(data){
        let _id = data.profileId ? data.profileId : '';
        let req = await HttpUtils.get('getprofile?profileId=' + _id);
        let allData = {...data, ...{userImage: req ? req.content.imageurl : ''}}
        return allData;
    }

    async funcSignUp(values){
        let response = await HttpUtils.get('userregister?nickname='+values.nickname+'&email='+values.email+'&password='+values.password+'&notrobot='+values.notrobot)
        if(response) {
            this.getProfileId(response)
        }else {
            this.setState({msg: 'network error'})
        }
    }

    async getProfileId(response){
        if(response.code === 200){
            let obj = {
                name: response.name,
                email: response.email,
                userId: response._id,
                profileId: ''
            }
            let req = await HttpUtils.post('profile', obj)
            let userInfo = {...response, ...{profileId: req.content}}
            AsyncStorage.setItem('user', JSON.stringify(userInfo))
                .then(() => {
                    this.setState({
                        loader:false,
                        visible:false,
                        secModal: false,
                        dropdown: true,
                        redirectToReferrer: true
                    })
                })
        }//end if
        else{
            this.setState({
                msg: response.msg ? response.msg : response.err._message,
            })
        }
    }

    render(){
        const { from } = this.props.location.state || { from: { pathname: "/" } };
        let {redirectToReferrer} = this.state;
        if (redirectToReferrer) {
            return <Redirect to={from} />;
        }

		return(
			<div>
				<span></span>
				<div className="row">
					<div className="col-md-2"></div>
					<div className="col-md-8 signin_background">
						<span><img alt='' src="../images/logo.png"/></span>
					</div>
					<div className="col-md-2"></div>
				</div>{/*row*/}<br/>
				<div className="row">
					<div className="col-md-2"></div>
					<div className="col-md-3">
							<span className="font_weight_signin_seperate_he">Sign in to your Pakjazba account</span><br/><br/>
							<div className="main_seperate_div">
								<Formsignin/>
							</div>
					</div>
					<div className="col-md-3">
						<span className="font_weight_signin_seperate_he">Sign in using any of the following</span><br/><br/>
						<div className="main_seperate_div">
							<span><Facebook inRup={'seperate'}/></span><br/>
							<span><Google inRup={'seperate'}/></span>
						</div>
					</div>
					<div className="col-md-3">
						<span className="font_weight_signin_seperate_he">Create a new Pakjazba account</span><br/><br/>
						<div className="main_seperate_div">
							<Form_signup/>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
    return({
        data: state.data
    })
}

export default connect(mapStateToProps)(Signin);
