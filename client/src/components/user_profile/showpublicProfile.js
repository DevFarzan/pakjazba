import React, { Component } from 'react';
import {Icon, Input, Form, Upload, Pagination, Tabs,Button} from 'antd';
import Footer from '../footer/footer.js';
import sha1 from "sha1";
import superagent from "superagent";
import AsyncStorage from "@callstack/async-storage";
import {HttpUtils} from "../../Services/HttpUtils";
import { Link } from "react-router-dom";


const TabPane = Tabs.TabPane;

class ShowProfilepublic extends Component{
	constructor(props) {
        super(props)
        this.state = {
        	listing: true,
			listData1: [],
            listData2: [],
            listData3: [],
            listData4: [],
        }
    }

	componentDidMount(){
        this.handleLocalStorage();
    }

    handleLocalStorage = () =>{
        AsyncStorage.getItem('user')
            .then((obj) => {
                let userObj = JSON.parse(obj)
                if(!!userObj) {
                    this.getprofileData(userObj.profileId, userObj._id)
                    this.setState({
                        userId: userObj._id,
                        profileId: userObj.profileId
                    })
                }
            })
    }

    async getprofileData(id, userId){
        let req = await HttpUtils.get('getprofile?profileId=' + id)
        let user = req.content;
        this.setState({
            name: user.name,
            email: user.email,
            location:user.location,
            description:user.description,
            phone:user.phone,
            twitter:user.twitterlink,
            facebook:user.facebooklink,
            imageUrl: user.imageurl
        })
        this.getAllBusiness(userId)
    }

     async getAllBusiness(id){
        let arr1 = [];
        let arr2 = [];
        let arr3 = [];
        let arr4 = [];
        let req = await HttpUtils.get('marketplace')
        req.busell && req.busell.map((elem) => {
            if(elem.userid === id){
                let data = {...elem, ...{route: 'buySell'}}
                arr1.push(data)
            }
        })
        req.business && req.business.map((elem) => {
            if(elem.user_id === id){
                let data = {...elem, ...{route: 'business'}}
                arr2.push(data)
            }
        })
        req.roomrentsdata && req.roomrentsdata.map((elem) => {
            if(elem.user_id === id){
                let data = {...elem, ...{route: 'rooms'}}
                arr3.push(data)
            }
        })
        req.jobPortalData && req.jobPortalData.map((elem) => {
            if(elem.user_id === id){
                let data = {...elem, ...{route: 'jobPortal'}}
                arr4.push(data)
            }
        })
        this.setState({
            listData1: arr3,
            listData2: arr2,
            listData3: arr1,
            listData4: arr4,
        })
    }
	editBusiness = (e) => {
        if(e.route === "buySell"){
            this.setState({
                buySell: true,
                data: e,
            })
        }else if(e.route === "business"){
            this.setState({
                business: true,
                data: e,
            })
        }else if(e.route === "rooms"){
            this.setState({
                rooms: true,
                data: e,
            })
        }else if(e.route === "jobPortal"){
            this.setState({
                jobPortal: true,
                data: e,
            })
        }
    }	

	render(){
		const {listing, listData1, listData2, listData3, listData4} = this.state
		return(
			<span>
			<div className="row">
				<div className="col-md-6">
					<span className="name_style margin-left_13">Farzan Hanif</span>
				</div>
				<div className="col-md-6" style={{textAlign:'right'}}>
					
					<img className="img-circle" style={{width:'16%',marginRight:'22px'}} src="https://i.pinimg.com/280x280_RS/c0/f5/06/c0f5060f106a7e3e4afcc8e463f9ba8c.jpg" />
					<Button className="btn btn-sm" style={{width:'19%',border:'1px solid gray'}}>Edit Profile</Button>
				</div>
			</div>
			<div className="row">
				<div className="col-md-12">
				<div className="container" style={{width:'90%'}}>
					 {/*===============Ad Listing start=================*/}
                                            {listing && <Tabs defaultActiveKey="2">
                                                <TabPane tab='Room Renting' key="1" style={{background:'#8080801a'}}>
                                                    <div className="secondfold">
                                                        <div className="index-content" style={{marginTop: '-125px'}}>
                                                            <div className="row">
                                                                {listData1.length ? listData1.map((elem) => {
                                                                    let img = elem.imageurl && elem.imageurl[0] || '../images/images.jpg';
                                                                    let title = elem.postingtitle || ''
                                                                    let str = elem.discription || '';
                                                                    if(str.length > 100) {
                                                                        str = str.substring(0, 100);
                                                                        str = str + '...'
                                                                    }
                                                                    return(
                                                                        <div className="col-md-3"  style={{'marginBottom': '30px', marginTop: '30px'}}>
                                                                            <div className="card">
                                                                                <Link to={{pathname: `/detail_roomRent`, state: elem}}>
                                                                                    <img alt='' src={img} />
                                                                                    <h4>{title}</h4>
                                                                                    <p>{str}</p>
                                                                                </Link>
                                                                                <a onClick={this.editBusiness.bind(this, elem)}><i className="glyphicon glyphicon-edit" style={{padding: "16px",marginTop: "8px",color:"gray"}}><span style={{margin:"7px"}}>Edit</span></i></a>
                                                                                <i className="glyphicon glyphicon-trash" style={{padding: "16px",marginTop: "8px",float:"right",color:"gray"}}><span style={{margin:"7px"}}>Remove</span></i>
                                                                            </div>
                                                                        </div>

                                                                    )
                                                                }) :
                                                                <div style={{marginTop: '25px'}}>
                                                                    <h1>
                                                                        you dont have data to show...
                                                                    </h1>
                                                                </div>}
                                                            </div>
                                                            {/*!!listData.length && <span style={{textAlign:"center"}}><Pagination defaultCurrent={1} defaultPageSize={6} total={allData.length} onChange={this.onChange} /></span>*/}
                                                        </div>
                                                    </div>
                                                </TabPane>
                                                <TabPane tab='Bussiness Listing' key="2" style={{background:'#8080801a'}}>
                                                    <div className="secondfold">
                                                        <div className="index-content" style={{marginTop: '-125px'}}>
                                                            <div className="row">
                                                                {listData2.length ? listData2.map((elem) => {
                                                                    let img = elem.businessImages && elem.businessImages[0] || '../images/images.jpg';
                                                                    let title = elem.businessname || ''
                                                                    let str = elem.description || '';
                                                                    if(str.length > 100) {
                                                                        str = str.substring(0, 100);
                                                                        str = str + '...'
                                                                    }
                                                                    return(
                                                                        <div className="col-md-3"  style={{'marginBottom': '30px', marginTop: '30px'}}>
                                                                            <div className="card">
                                                                                <Link to={{pathname: `/detail_business`, state: elem}}>
                                                                                    <img alt='' src={img} />
                                                                                    <h4>{title}</h4>
                                                                                    <p>{str}</p>
                                                                                </Link>
                                                                                <a onClick={this.editBusiness.bind(this, elem)}><i className="glyphicon glyphicon-edit" style={{padding: "16px",marginTop: "8px",color:"gray"}}><span style={{margin:"7px"}}>Edit</span></i></a>
                                                                                <i className="glyphicon glyphicon-trash" style={{padding: "16px",marginTop: "8px",float:"right",color:"gray"}}><span style={{margin:"7px"}}>Remove</span></i>
                                                                            </div>
                                                                        </div>

                                                                    )
                                                                }) :
                                                                <div style={{marginTop: '25px'}}>
                                                                    <h1>
                                                                        you dont have data to show...
                                                                    </h1>
                                                                </div>}
                                                            </div>
                                                            {/*!!listData.length && <span style={{textAlign:"center"}}><Pagination defaultCurrent={1} defaultPageSize={6} total={allData.length} onChange={this.onChange} /></span>*/}
                                                        </div>
                                                    </div>
                                                </TabPane>
                                                <TabPane tab='Buy & Sell' key="3" style={{background:'#8080801a'}}>
                                                    <div className="secondfold">
                                                        <div className="index-content" style={{marginTop: '-125px'}}>
                                                            <div className="row">
                                                                {listData3.length ? listData3.map((elem) => {
                                                                    let img = elem.images && elem.images[0] || '../images/images.jpg';
                                                                    let title = elem.title || ''
                                                                    let str = elem.description || '';
                                                                    if(str.length > 100) {
                                                                        str = str.substring(0, 100);
                                                                        str = str + '...'
                                                                    }
                                                                    return(
                                                                        <div className="col-md-3"  style={{'marginBottom': '30px', marginTop: '30px'}}>
                                                                            <div className="card">
                                                                                <Link to={{pathname: `/detail_buySell`, state: elem}}>
                                                                                    <img alt='' src={img} />
                                                                                    <h4>{title}</h4>
                                                                                    <p>{str}</p>
                                                                                </Link>
                                                                                <a onClick={this.editBusiness.bind(this, elem)}><i className="glyphicon glyphicon-edit" style={{padding: "16px",marginTop: "8px",color:"gray"}}><span style={{margin:"7px"}}>Edit</span></i></a>
                                                                                <i className="glyphicon glyphicon-trash" style={{padding: "16px",marginTop: "8px",float:"right",color:"gray"}}><span style={{margin:"7px"}}>Remove</span></i>
                                                                            </div>
                                                                        </div>

                                                                    )
                                                                }) :
                                                                <div style={{marginTop: '25px'}}>
                                                                    <h1>
                                                                        you dont have data to show...
                                                                    </h1>
                                                                </div>}
                                                            </div>
                                                            {/*!!listData.length && <span style={{textAlign:"center"}}><Pagination defaultCurrent={1} defaultPageSize={6} total={allData.length} onChange={this.onChange} /></span>*/}
                                                        </div>
                                                    </div>
                                                </TabPane>
                                                <TabPane tab='Job Portal' key="4">
                                                    <div className="secondfold">
                                                        <div className="index-content" style={{marginTop: '-125px'}}>
                                                            <div className="row">
                                                                {listData4.length ? listData4.map((elem) => {
                                                                    let img = elem.arr_url && elem.arr_url[0] || '../images/images.jpg';
                                                                    let title = elem.compName || ''
                                                                    let str = elem.compDescription || '';
                                                                    if(str.length > 100) {
                                                                        str = str.substring(0, 100);
                                                                        str = str + '...'
                                                                    }
                                                                    return(
                                                                        <div className="col-md-3"  style={{'marginBottom': '30px', marginTop: '30px'}}>
                                                                            <div className="card">
                                                                                <Link to={{pathname: `/detail_jobPortal`, state: elem}}>
                                                                                    <img alt='' src={img} />
                                                                                    <h4>{title}</h4>
                                                                                    <p>{str}</p>
                                                                                </Link>
                                                                                <a onClick={this.editBusiness.bind(this, elem)}><i className="glyphicon glyphicon-edit" style={{padding: "16px",marginTop: "8px",color:"gray"}}><span style={{margin:"7px"}}>Edit</span></i></a>
                                                                                <i className="glyphicon glyphicon-trash" style={{padding: "16px",marginTop: "8px",float:"right",color:"gray"}}><span style={{margin:"7px"}}>Remove</span></i>
                                                                            </div>
                                                                        </div>

                                                                    )
                                                                }) :
                                                                <div style={{marginTop: '25px'}}>
                                                                    <h1>
                                                                        you dont have data to show...
                                                                    </h1>
                                                                </div>}
                                                            </div>
                                                            {/*!!listData.length && <span style={{textAlign:"center"}}><Pagination defaultCurrent={1} defaultPageSize={6} total={allData.length} onChange={this.onChange} /></span>*/}
                                                        </div>
                                                    </div>
                                                </TabPane>
                                            </Tabs>}
                                        {/*===============Ad listing end=============*/}
                                        </div>
				</div>

			</div>
			</span>
			)
	}	


}

export default ShowProfilepublic;



