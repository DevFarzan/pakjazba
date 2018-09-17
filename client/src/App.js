import React, { Component } from   'react';
import 'antd/dist/antd.css';
import Burgermenu from './components/header/burgermenu';
import Slider from './components/header/Slider';
import {HttpUtils} from "./Services/HttpUtils";

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            response: ''
        };
    }

    componentDidMount() {
        this.getAllBusiness();
        // this.callApi()
        //     .then(res => this.setState({ response: res.express }))
        //     .catch(err => console.log(err));

    }

    async getAllBusiness(){
        var req = await HttpUtils.get('marketplace')
        console.log(req, 'reqqqqqqqqqqqq')
    }

    // callApi = async () => {
    //     const response = await fetch('/api/hello');
    //     const body = await response.json();
    //
    //     if (response.status !== 200) throw Error(body.message);
    //     return body;
    // };

    render() {
        return (
            <span>
                <div className ="" style={{"backgroundImage":"url('https://images.alphacoders.com/633/633643.jpg')","height": "407px",marginTop: "-19px"}}>
                    <div className="background-image">
                        <Burgermenu/>
                        <Slider/>
                    </div>
                </div>
            </span>
        );
    }
}


export default App;
