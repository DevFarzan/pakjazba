import React, { Component } from   'react';
//import antd  from 'antd-init';
//import ImageDropzone from './components/imagedropzone';
import { Input } from 'antd';
import 'antd/dist/antd.css';
import Signup from './components/signupmodal';
import MainLogin from './components/mainLogin'
// import Signin from './components/signinmodal';
// import Dropzone from './components/imagedropzone';
import Category from './components/getcategory';



class App extends Component {
  state = {
      response: '',
      username: null
    };

    
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
            <nav className="navbar navbar-default">
                <div className="row">
                      <div className="col-md-2">
                          <div className="logoWidth_main">
                            <img src="./images/logo.png" />
                          </div>
                      </div>{/*col-md-3*/}
                      <div className="col-md-6 searchbox">
                        <Search
                            placeholder="input search text"
                            onSearch={value => console.log(value)}
                            enterButton
                      />
                      
                      </div>{/*col-md-7*/}
                      <div className="col-md-2 loginSignup">
                          <p className="padding_left_p"><MainLogin/></p>
                      </div>
                      <div className="col-md-2 category_margin"><Category/></div>
                      <div>
                          
                      </div>
                </div>{/*row*/}
            </nav>
            
        </div>
      );
    }
  }

  export default App;
