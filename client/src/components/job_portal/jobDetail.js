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
import AsyncStorage from "@callstack/async-storage";
import {connect} from "react-redux";


class JobDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isData: true,
            data: {},
            user: false,
            visible: false,
            goForLogin: false
        }
    }

    componentDidMount() {
        let data = this.props.location.state || this.props.otherData;
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
            this.setState({data, user: data.user});
        }
    }

    clickItem(item){
        this.setState({visible: true, objData: item})
    }

    handleCancel = (e) => {
        this.setState({visible: false});
    }

    handleLogin = (e) => {
        const { dispatch } = this.props;
        const { data, user } = this.state;
        let otherData = {...data, user: true};
        dispatch({type: 'ANOTHERDATA', otherData})
        this.setState({goForLogin: true, visible: false})
    }

    render(){
        const { data, isData, user, goForLogin } = this.state;
        if(!isData){
            return <Redirect to='/' />
        }
        if (goForLogin) {
            return <Redirect to={{pathname: '/sigin', state: {from: { pathname: "/detail_jobPortal" }, state: data}}}/>;
        }

        return (
            <div>
                <span>
                    <div className ="" style={{marginTop : "60px",backgroundSize: 'cover'}}>
                        <div className="background-image">
                            <Burgermenu/>
                            <Slider mainH1="Job Portal" mainH2="Find your jobs here"/>
                        </div>
                    </div>
                </span>

                <JobDetailpage data={data}/>
                {/*<JobSecondrow data={data}/>*/}
                {user && <Thirdrow data={data}/>}
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12" style={{textAlign:"center"}}>
                        {!user && <button
                            type="button"
                            className="btn2"
                            style={{marginTop:"70px", padding:"5px", backgroundColor:'#37a99b',color:'white'}}
                            onClick={() => {this.clickItem(data)}}
                        >
                            Apply This Job
                        </button>}
                    </div>
                </div>
                <Footer/>
                {this.state.visible && <Modal
                    title="Kindly Login first"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                <div className="row">
                    <div className="col-md-6" style={{textAlign:'center'}}><button className="btn btn-sm btn2-success" style={{width:'100%'}} onClick={this.handleLogin}>Login</button></div>
                    <div className="col-md-6" style={{textAlign:'center'}}><button className="btn btn-sm btn2-success" style={{width:'100%'}} onClick={this.handleCancel}>Cancel</button></div>
                </div>
                </Modal>}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return({
        otherData: state.otherData
    })
}

export default connect(mapStateToProps)(JobDetail);
