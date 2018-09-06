import React, { Component } from   'react';
//import antd  from 'antd-init';
//import ImageDropzone from './components/imagedropzone';
import { Input, Button } from 'antd';
import 'antd/dist/antd.css';
import Burgermenu from './components/header/burgermenu';
import Slider from './components/header/Slider';
import Signup from './components/header/signupmodal';
import MainLogin from './components/header/mainLogin'
import Firstfold from './components/business/firstfold';
// import Signin from './components/signinmodal';
import Dropzone from './components/imagedropzone';
import Category from './components/header/getcategory';
import {HttpUtils} from "./Services/HttpUtils";
import axios from "axios";

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            response: '',
            username: null
        };
    }

    componentWillMount(){
        this.getAllBusiness();
    }

    async getAllBusiness(){
        var req = await HttpUtils.get('marketplace')
        console.log(req, 'reqqqqqqqqqqqq')
    }

    componentDidMount() {
        this.callApi()
            .then(res => this.setState({ response: res.express }))
            .catch(err => console.log(err));

    }

    callApi = async () => {
        const response = await fetch('/api/hello');
        const body = await response.json();

        if (response.status !== 200) throw Error(body.message);
        return body;
    };

    render() {

        const Search = Input.Search;
        const {username} = this.state;
        return (
            <div className ="">
                    {/*<div className="row">
                        <div className="col-md-2">
                            <div className="logoWidth_main">
                                <img src="./images/logo.png" />
                            </div>
                        </div>{/*col-md-3*
                        <div className="col-md-6 searchbox">
                            <Search
                                placeholder="input search text"
                                onSearch={value => console.log(value)}
                                enterButton
                            />

                        </div>{/*col-md-7*
                        <div className="col-md-2 loginSignup">
                            <span className="padding_left_p"><MainLogin/></span>
                        </div>
                        <div className="col-md-2 category_margin"><Category/></div>
                        <div>
                        </div>
                    </div>*/}
                    <div className="background-image">
                        <Burgermenu/>
                        <Slider/>
                    </div>

            </div>
        );
    }
}

export default App;
