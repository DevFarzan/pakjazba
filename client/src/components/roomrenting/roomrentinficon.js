import React, { Component } from 'react';
import './roomrentingicon.css';
import { connect } from 'react-redux'

class RoomrentingIcon extends Component{
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
            <div className="">
                <div className="row" style={{marginTop:'33px'}}>
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <h4><b>Explore Pakjazba Room Renting</b></h4>
                        <br/>
                    </div>
                </div>
                <div className="row" style={{marginTop:'-30px'}}>
                    <div className="col-md-3 col-sm-4" onClick={() => {this.clickItem('Condo')}}>
                        <div className="card_room">
                            <div className="space tag1">
                                <a href="/market_roommates" className="option_text">
                                    <img alt="img" src="../images/room icon/home_option1.jpg" className="option_img"/>
                                    <b className="tag1"> Condo</b>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-4" onClick={() => {this.clickItem('Home')}}>
                        <div className="card_room">
                            <div className="space tag1">
                                <a href="/market_roommates" className="option_text">
                                    <img alt="img" src="../images/room icon/home_option2.jpg" className="option_img"/>
                                    <b className="tag1"> Homes</b>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-4" onClick={() => {this.clickItem('Apartment')}}>
                        <div className="card_room">
                            <div className="space tag1">
                                <a href="/market_roommates" className="option_text">
                                    <img alt="img" src="../images/room icon/home_option3.jpg" className="option_img"/>
                                    <b className="tag1"> Apartment</b>
                                </a>
                            </div>
                        </div>
                        <br/><br/><br/>
                    </div>
                </div>
                    {/*<!-- jambo section start -->*/}
                        <div className="row" style={{border:'1px solid #80808057'}}>
                            <div className="col-md-12 col-sm-12 col-xs-12 card">
                                <div className="col-md-6">
                                    <h1 className="jambo_text"><b>Find your New Home With Pak Jazba Room Renting</b></h1>
                                    <p><b>more than 100 of Rent and Sale Property Available</b></p>
                                </div>
                                <div className="col-md-6">
                                    <img src="../images/room icon/jumbport.png" className="img-responsive jambo_img" />
                                </div>
                            </div>
                        </div>
                        <br/><br/>
                {/*<!-- jambo section end -->*/}
            </div>
        )
    }
}

export default connect()(RoomrentingIcon);
