import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import './slider.css';

class Slider extends Component{
    constructor(props){
        super(props);
        this.state = {
            inputValue: ''
        }
    }

    componentDidMount(){
        const { dispatch } = this.props;
        dispatch({type: 'SEARCHOF'});
    }

    onChange(e){
        var inputValue = e.target.value;
        this.setState({
            inputValue,
        })
        if(inputValue === ''){
            const { dispatch } = this.props;
            dispatch({type: 'SEARCHON', inputValue})
        }
    }

    searchText = (e) => {
        e.preventDefault();
        const  { inputValue } = this.state;
        const { dispatch } = this.props;
        dispatch({type: 'SEARCHON', inputValue})
    }

    postRoom = (e) => {
        e.preventDefault();
        this.props.getMethod();
    }

    render(){
        
        return (
            <div>
                <div>

                    {/*<div className="row">
                        <div className="col-md-6 col-sm-12 col-xs-12">
                        <h3 className="text-h1" style={{fontSize:'36px',fontWeight:'bold',color:'black'}}>{this.props.mainH1}</h3>
                        <div className="row">
                            <div className="col-md-12" style={{marginLeft:'24%'}}>
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Recipient's username" aria-describedby="basic-addon2" style={{border:'1px solid rgb(55, 169, 155)',width:'50%',borderRight:'none'}} />
                                    <input type="text" className="form-control" placeholder="Recipient's username" aria-describedby="basic-addon2" style={{border:'1px solid rgb(55, 169, 155)',width:'50%',borderLeft:'none'}} />
                                 </div>
                             </div>
                         </div>
                    </div>
                    </div>*/}
                    {this.props.mainH1 === 'Pakjazba Classified' && <div className="row">
                        <span className="col-md-2"></span>
                        <div className="col-md-5 col-sm-12 col-xs-12">
                        <h3 className="text-h1" style={{fontSize:'36px',fontWeight:'bold',color:'black',textAlign:'left'}}>{this.props.mainH1}</h3>
                        <form>
                            <div className="single">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Search" onChange={this.onChange.bind(this)}/>
                                    <span className="input-group-btn">
                                        <button className="btn btn-theme" type="submit" style={{backgroundColor:'#37a99b',color:'white'}} onClick={this.searchText}><i class="fa fa-search"/></button>
                                    </span>
                                </div>
                            </div>
                        </form>
                        </div>
                        <div className="col-md-5 col-sm-6 hidden-xs">
                            <img src="../images/buysell/header1.png" style={{width:'50%'}} />
                        </div>
                    </div> }

                    

                     {this.props.mainH1 === 'Pakjazba Business Listing' && <div className="row">
                        <div className="col-md-2 col-sm-2"> </div>
                         <div className="col-md-5 col-sm-12 col-xs-12">
                         <h3 className="text-h1" style={{fontSize:'36px',fontWeight:'bold',color:'black',textAlign:'left'}}>{this.props.mainH1}</h3>
                         <div className="row">
                              <div className="col-md-12">
                                 <form>
                                    <div className="single">
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Search" onChange={this.onChange.bind(this)}/>
                                            <span className="input-group-btn">
                                                <button className="btn btn-theme" type="submit" style={{backgroundColor:'#37a99b',color:'white'}} onClick={this.searchText}><i className="fa fa-search"/></button>
                                            </span>
                                        </div>
                                    </div>
                                </form>

                                  <div className="row" style={{padding:"10px"}}>
                                    <div className="col-md-3 col-xs-4">
                                      <h5> Nightlife </h5>
                                    </div>
                                    <div className="col-md-3 col-xs-4">
                                      <h5> Resturant </h5>
                                    </div>
                                    <div className="col-md-3 col-xs-4">
                                      <h5> Delivery</h5>
                                    </div>
                                    <div className="col-md-3">
                                    </div>
                                  </div>
                              </div>
                          </div>

                        </div>
                        <div className="col-md-5 col-sm-6 hidden-xs">
                          <img src="../images/business/busi-illus-1.png" style={{width:"50%"}}/>
                        </div>
                      </div>}
                    {/*Slider for Business Listing End*/}

                    {/*Slider for Job Portal start*/}
                    {this.props.mainH1 === 'Pak Jazba Job Portal' && <div className="row">
                        <span className="col-md-2"></span>
                        <div className="col-md-5 col-sm-12 col-xs-12">
                        <h3 className="text-h1" style={{fontSize:'36px',fontWeight:'bold',color:'black',textAlign:'left'}}>{this.props.mainH1}</h3>

                        <form>
                                    <div className="single">
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Search" onChange={this.onChange.bind(this)}/>
                                            <span className="input-group-btn">
                                                <button className="btn btn-theme" type="submit" style={{backgroundColor:'#37a99b',color:'white'}} onClick={this.searchText}><i class="fa fa-search"/></button>
                                            </span>
                                        </div>
                                    </div>
                                </form>
                        </div>
                        <div className="col-md-5 col-sm-6 hidden-xs">
                            <img src="../images/job-icons/ilus-1.png" style={{width:'50%'}} />
                        </div>
                    </div> }
                    {/*Slider for Job Portal start*/}

                     
                   {/*<div className="col-md-5 col-sm-6 hidden-xs">
                       <img src="../images/business/busi-illus-1.png" style={{width:"50%"}}/>
                   </div>*/}
                   </div>}
                 {/*=====================roomRenting start==================*/}
                  {/*<!-- Header Start -->*/}
                    {this.props.mainH1 === "PakJazba Room Renting" && <div className="row">
                        <span className="col-md-2"></span>
                        <div className="col-md-5 col-sm-12 col-xs-12">
                        <h3 className="text-h1" style={{fontSize:'36px',fontWeight:'bold',color:'black',textAlign:'left'}}>{this.props.mainH1}</h3>
                        <form>
                            <div className="single">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Search" onChange={this.onChange.bind(this)}/>
                                    <span className="input-group-btn">
                                        <button className="btn btn-theme" type="submit" style={{backgroundColor:'#37a99b',color:'white'}} onClick={this.searchText}><i className="fa fa-search"/></button>
                                    </span>
                                </div>
                                <div className="row">
                                  <div className="col-md-7">
                                    <h4>Looking for tenant or a roommate?</h4>
                                  </div>
                                  <div className="col-md-5">
                                    <button className="header_button" onClick={this.postRoom}>Post Your Room</button>
                                  </div>
                                </div>
                            </div>
                        </form>
                        </div>
                        <div className="col-md-5 col-sm-6 hidden-xs">
                            <img src="../images/room icon/room_header.png" style={{width:'50%'}} />
                        </div>
                    </div> }
                      {/*<!-- Header End -->*/}

                 {/*=====================roomRenting end====================*/}

                  {/*  <div className="row">
                        <div className="col-md-6 col-sm-12 col-xs-12" style={{width:"100%", marginTop: "107px", backgroundColor: "aliceblue"}}>
                          <h3 className="text-h1" style={{fontSize:'36px',fontWeight:'bold',color:'black', marginLeft:"15px"}}>{this.props.mainH1}</h3>
                          <div className="row">
                            <div className="col-md-6">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Recipient's username" aria-describedby="basic-addon2" style={{ border:'1px solid rgb(55, 169, 155)', width:'50%',borderRight:'none'}}/>
                                    <input type="text" className="form-control" placeholder="Recipient's username" aria-describedby="basic-addon2" style={{border:'1px solid rgb(55, 169, 155)',width:'50%',borderLeft:'1px solid black'}} />
                                      <span class="input-group-addon" id="basic-addon2"><i class="fa fa-search"/></span>
                                </div>

                                <div className="row" style={{padding:"10px"}}>
                                  <div className="col-md-3">
                                    <h5> Nightlife </h5>
                                  </div>
                                  <div className="col-md-3">
                                    <h5> Resturant </h5>
                                  </div>
                                  <div className="col-md-3">
                                    <h5> Delivery</h5>
                                  </div>
                                  <div className="col-md-3">
                                  </div>
                                </div>
                            </div>
                            <div className="col-md-2">
                            </div>
                            <div className="col-md-4">
                              <img src="images/business/busi-illus-1.png" style={{width:"100%"}}/>
                            </div>
                          </div>
                        </div>


                    </div>*/ }
                    {/* <div className="row">
                       <div className="col-md-6 col-sm-12 col-xs-12">
                       <h3 className="text-h1" style={{fontSize:'36px',fontWeight:'bold',color:'black'}}>{this.props.mainH1}</h3>
                       <div className="row">
                            <div className="col-md-12">
                               <div className="input-group">
                                   <input type="text" className="form-control" placeholder="Recipient's username" aria-describedby="basic-addon2" style={{border:'1px solid rgb(55, 169, 155)',width:'50%',borderRight:'none'}} />
                                   <input type="text" className="form-control" placeholder="Recipient's username" aria-describedby="basic-addon2" style={{border:'1px solid rgb(55, 169, 155)',width:'50%',borderLeft:'1px solid black'}}/>
                                    <span class="input-group-addon" id="basic-addon2"><i class="fa fa-search"/></span>

                                </div>
                                <div className="row" style={{padding:"10px"}}>
                                  <div className="col-md-3 col-xs-4">
                                    <h5> Nightlife </h5>
                                  </div>
                                  <div className="col-md-3 col-xs-4">
                                    <h5> Resturant </h5>
                                  </div>
                                  <div className="col-md-3 col-xs-4">
                                    <h5> Delivery</h5>
                                  </div>
                                  <div className="col-md-3">
                                  </div>
                                </div>
                            </div>
                        </div>

                   </div>
                   <div className="col-md-1">
                   </div>
                   <div className="col-md-5 hidden-xs">
                     <img src="images/business/busi-illus-1.png" style={{width:"100%"}}/>
                   </div>
                   </div>*/}

                {/*For Business Market*/}

                   {/*Business Market end*/}


                    {/*<section className="home-newsletter">
                        <div className="">
                            <div className="row">
                                <div className="col-md-2"></div>
                                {!this.props.hide && <div className="col-md-8 col-sm-12 col-xs-12" style={{textAlign: 'center !important'}}>
                                    <form>
                                    <div className="single">
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Search" onChange={this.onChange.bind(this)}/>
                                            <span className="input-group-btn">
                                                <button className="btn btn-theme" type="submit" onClick={this.searchText}>Search</button>
                                            </span>
                                        </div>
                                    </div>
                                    </form>
                                </div>}
                                <div className="col-md-2"></div>
                            </div>
                        </div>
                    </section>*/}

                </div>
            
        );
    }
}

const mapStateToProps = (state) => {
    return({
        text: state.text
    })
}

export default connect(mapStateToProps)(Slider);
