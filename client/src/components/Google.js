import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login-component';
import {connect} from "react-redux";

class Google extends Component {
    constructor (props, context) {
        super(props, context);
        this.state= {
            once : true
        }
    }//constructor

    // componentDidMount(){
    //     if(this.state.once == true){
    //         console.log('helloooooooooooo')
    //         this.setState({once : false})
    //         const { dispatch, inRup } = this.props;
    //         console.log(inRup);
    //         let data = {
    //             id: '0987654321',
    //             name: 'testing',
    //             email: 'email2@gmail.com'
    //         }
    //         data = {...data, ...{route: inRup}}
    //         dispatch({type: 'FACEBOOKSIGNUP', data})
    //     }
    // }

    responseGoogle = (googleUser) =>{
        var id_token = googleUser.getAuthResponse();
        var googleId = googleUser.getId();

        console.log({ googleId });
        console.log(googleUser.w3.Eea, 'iddddddddddd');
        console.log(googleUser.w3.U3, 'maillllllll');
        console.log(googleUser.w3.ig, 'nameeeeeeeeeeee');
        console.log({accessToken: id_token});
        //anything else you want to do(save to localStorage)...
        const { dispatch, inRup } = this.props;
        console.log(inRup);
        let data = {
            id: googleUser.w3.Eea,
            name: googleUser.w3.ig,
            email: googleUser.w3.U3
        }
        data = {...data, ...{route: inRup}}
        dispatch({type: 'FACEBOOKSIGNUP', data})
    }

    render(){
        return(
            <div>
                <GoogleLogin socialId="873832275515-3oclgfb5n1ie7inhfa16a6uu7crbab2a.apps.googleusercontent.com"
                             className="google-login"
                             scope="profile"
                             fetchBasicProfile={true}
                             responseHandler={this.responseGoogle}
                             buttonText="Login With Google"/>
            </div>
        )
    }
}

export default connect()(Google);



