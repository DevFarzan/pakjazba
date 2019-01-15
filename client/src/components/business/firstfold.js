import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './firstfold.css';
import { connect } from 'react-redux';

class Firstfold extends Component{
    constructor(props){
        super(props);
        this.clickItem = this.clickItem.bind(this);
    }

    clickItem(item){
        const { dispatch } = this.props;
        var inputValue = item;
        dispatch({type: 'SEARCHON', inputValue})
    }

    render(){
        return(
            <div className="container" style={{width:"70%"}}>
                <div className="Bestbusiness">
                    <div className="row">
                        <h3 className="text-align" style={{fontWeight:"bold"}}>  Find the Best Business </h3>
                        <div className="col-md-3 col-sm-3 col-xs-6" onClick={() => {this.clickItem('hotels')}}>
                            <img src="../images/business/home.jpg"/>
                            <p style={{textAlign: "center", paddingTop: "5px"}}>Hotels</p>
                        </div>
                        <div className="col-md-3 col-sm-3 col-xs-6" onClick={() => {this.clickItem('massage')}}>
                            <img src="images/business/shutterstock_1270435183.jpg"/>
                            <p style={{textAlign: "center", paddingTop: "5px"}}>Massage</p>
                        </div>
                        <div className="col-md-3 col-sm-3 col-xs-6" onClick={() => {this.clickItem('gym')}}>
                            <img src="images/business/shutterstock_1270450375.jpg"/>
                            <p style={{textAlign: "center", paddingTop: "5px"}}>Gym</p>
                        </div>
                        <div className="col-md-3 col-sm-3 col-xs-6" onClick={() => {this.clickItem('goldsmith')}}>
                            <img src="../images/business/shutterstock_1268093062.jpg"/>
                            <p style={{textAlign: "center", paddingTop: "5px"}}>Goldsmith</p>
                        </div>
                    </div>
                </div>
                <div className="hidden-xs">
                    <div className="Person" style={{width:"100%"}}>
                        <div className="row">
                            <div className="col-md-6">
                                <h1> Grow Your Business <br/> by Listing on <br/> PakJazba </h1>
                                <p> We will showcase your business to more customers </p>
                            </div>
                            <div className="col-md-6">
                                <img src="images/business/busi-illus-2.png"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(Firstfold);
