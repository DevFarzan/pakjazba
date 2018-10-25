import React, { Component } from 'react';
import {
    Form,
    Input,
    Icon,
    Cascader,
    Spin,
    notification,
    Upload,
    Modal,
    TimePicker
} from 'antd';
import Burgermenu from '../header/burgermenu';
import Slider from '../header/Slider';
import Footer from '../footer/footer';
import JobDetailpage from './DetailjobUi';
import JobSecondrow from './secondRow';
import Thirdrow from './Thirdrow';
import { Redirect } from 'react-router';
import './jobDetail.css';


class JobDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isData: true,
            data: {}
        }
    }

    componentDidMount() {
        let data = this.props.location.state;
        if(data === undefined){
            this.setState({
                isData: false
            })
        }else {
            if(data.sec === 'mainPart'){
                window.scrollTo(0,0);
            }else {
                window.scrollTo(0,1150);
            }
            this.setState({data});
        }
    }

    render(){
        const { data, isData } = this.state;
        if(!isData){
            return <Redirect to='/' />
        }

        return (
            <div>
                <span>
                    <div className ="" style={{"backgroundImage":"url('../images/bgc-images/job-portal.png')", marginTop : "-20px",backgroundSize: 'cover'}}>
                        <div className="background-image">
                            <Burgermenu/>
                            <Slider mainH1="Job Portal" mainH2="Find your jobs here"/>
                        </div>
                    </div>
                </span>
                <div className="row jobdetail-page">
                    <div className="col-md-12 col-sm-12 col-xs-12" style={{textAlign:"center"}}>
                        <div className="">
                            <h1 style={{fontFamily: 'Work Sans, sans-serif', fontWeight:"bold"}}>Job Detail</h1>
                        </div>
                    </div>
                </div>
                <JobDetailpage data={data}/>
                <JobSecondrow data={data}/>
                <Thirdrow data={data}/>
                <Footer/>
            </div>
        )
    }
}

export default JobDetail;
