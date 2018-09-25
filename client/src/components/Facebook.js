import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import {connect} from "react-redux";

class Facebook extends Component {
    state={
        isloggedIn:false,
        userId:'',
        name:'',
        email:'',
        picture:'',
        clicked: false
    }

    responseFacebook = response =>{
        const { clicked } = this.state;
        const { dispatch, inRup } = this.props;
        console.log(response);
        console.log(inRup);
        if(clicked) {
            let data = response
            // let data = {
            // 	accessToken: 'sdjhfalskjfhajhflakjflkahfja',
                // email: 'zb@brother.com',
                // expiresIn: '7500',
                // id: '918273364508',
                // name: 'brother2',
                // picture: 'skdjfkals',
                // userId: '1029384756'
            // }
            data = {...data, ...{route: inRup}}
            dispatch({type: 'FACEBOOKSIGNUP', data})
        }
    }

    componentClicked = () =>{
        console.log('clicked');
        this.setState({clicked: true})
    }

    render(){
        let fbContent;
        let data = 'abc'
        if(this.state.isloggedIn){
            fbContent = null;
        }else{
            fbContent = (<FacebookLogin
                appId="644559659253564"
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook}
                scope="email"
                cssClass="loginBtn loginBtn--facebook"
                textButton="Login with Facebook"
            />)
        }
        return(
            <div data={data}>
                {fbContent}
            </div>
        )
    }
}

export default connect()(Facebook);