import React, { Component } from 'react';
import './roomrentingicon.css';
import { connect } from 'react-redux'

class RoomrentingIcon extends Component{
    constructor(props){
        super(props);
        // this.clickItem = this.clickItem.bind(this);
    }

    clickItem(item){
        const { dispatch } = this.props;
        console.log(item, 'ggggggggggggggggggg')
        var inputValue = item;
        dispatch({type: 'SEARCHON', inputValue})
    }

    render(){
        return(
            <div className="">
                <div className="row" style={{marginTop:'33px', padding:"0"}}>
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <h4><b>Explore Pakjazba Room Renting</b></h4>
                        <br/>
                    </div>
                </div>
                <div className="row" style={{marginTop:'-30px'}}>
                    <div className="col-md-3 col-sm-4" onClick={this.clickItem.bind(this, 'Condo')} style={{cursor: 'pointer'}}>
                        <div className="card_room">
                            <div className="space tag1">
                                <div className="option_text">
                                    <img alt="img" src="../images/room icon/home_option1.jpg" className="option_img"/>
                                    <b className="tag1"> Condo</b>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-4" onClick={() => {this.clickItem('Home')}} style={{cursor: 'pointer'}}>
                        <div className="card_room">
                            <div className="space tag1">
                                <div className="option_text">
                                    <img alt="img" src="../images/room icon/home_option2.jpg" className="option_img"/>
                                    <b className="tag1"> Homes</b>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-4" onClick={() => {this.clickItem('Apartment')}} style={{cursor: 'pointer'}}>
                        <div className="card_room">
                            <div className="space tag1">
                                <div className="option_text">
                                    <img alt="img" src="../images/room icon/home_option3.jpg" className="option_img"/>
                                    <b className="tag1"> Apartment</b>
                                </div>
                            </div>
                        </div>
                        <br/><br/><br/>
                    </div>
                </div>
                    {/*<!-- jambo section start -->*/}
                        <div className="row Person" style={{border:'1px solid #80808057',width:'100%',marginTop:'-4%'}}>
                            <div className="col-md-12 col-sm-12 col-xs-12 card">
                                <div className="col-md-6">
                                    <h1 className="" style={{marginTop:'-5%',fontSize:'25px'}}><b>Find your New Home With Pak Jazba Room Renting</b></h1>
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
