import React, { Component } from 'react';
import { Icon } from 'antd';
import './profileDetail.css';

class ProfileDetail extends Component{
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            location: '',
            description: '',
            twitterlink: '',
            facebooklink: '',
            imageurl: '',
            reviewProfile: false
        }
    }

    componentDidUpdate(prevProps, prevState){
        let obj  = this.props.profileDetail;
        if(prevProps.profileDetail !== obj){        
            for(var el in obj){
              this.setState({ [el]: obj[el] });
            }
        }
    }

    onGoBack(){
        this.props.callPublicSection();
    }

    render(){
        const { imageurl, name, location, description, facebooklink, twitterlink, reviewProfile } = this.state;
        let fb = facebooklink.length > 0 ? true : false,
        twitter = twitterlink.length > 0 ? true : false;
        return(
            <div className="row">
                <div className="col-md-4">
                    <img src={imageurl.length > 0 ? imageurl : '../images/images.jpg'} style={{width:"100%"}}/>
                </div>
                <div className="col-md-8">
                    <h2> Hi, I am {name} 
                        {!reviewProfile && <Icon 
                            type="edit" size={16} 
                            style={{marginLeft:'13%', cursor: 'pointer'}} 
                            onClick={() => {this.onGoBack()}}>
                        </Icon>}
                    </h2>                    
                    <hr className="horizontaildetail"/>
                    <div className="row" style={{padding:"0"}}>
                        <div className="col-md-6">
                            <p className="detailpara"> Join Date 19-2-2018 </p>
                        </div>
                        <div className="col-md-6">
                            <p className="detailpara">
                                <span className="glyphicon glyphicon-map-marker" style={{color: "#008080",margin:"2px"}}></span>
                                <span style={{color:"black"}}>
                                    {location}
                                </span>
                            </p>
                        </div>
                    </div>
                    <p className="detailpara">{description}</p>
                    <div className="row">
                        {fb && <a href={facebooklink} target="_blank" className="fa fa-facebook"></a>}
                        {twitter && <a href={twitterlink} target="_blank" className="fa fa-twitter"></a>}
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileDetail;
