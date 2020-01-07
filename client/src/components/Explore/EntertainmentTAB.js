import React, { Component } from 'react';
import { Tabs, Icon } from 'antd';
import EntertainmentHome from '../entertainment/entertainmenthome/EntertainmentHome';
import Entslider from '../entertainment/entertainmenthome/EntSlider';
import EntertainmentCategory from '../entertainment/entertainmentPages/EntertainmentTabCategory';
import axios from "axios/index";
    
class EntertainmentTab extends Component{
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            searchArr: []
        }
    }

    onChange(e){
        this.setState({ inputValue: e.target.value });
    }

    searchText = async (e) => {
        e.preventDefault();
        const { inputValue } = this.state,
        { entertainment } = this.props;
        if(!!inputValue){
            let data = await axios.get(`https://api.dailymotion.com/videos?fields=embed_url,id,thumbnail_120_url,description,thumbnail_url,title,&country=pk&sort=recent&tags=${inputValue}&page=1&limit=100`);
            let arr = data.data.list;
            this.props.history.push({pathname: `/entertainment_Category/${inputValue}`, state: {arr,entertainment}})
        }
    }

    render(){

        const { TabPane } = Tabs;
        const { states, noText, showroomrents, roomrents, filteredArr, cities, to, from, loader, objData, goDetail } = this.state;
        const antIcon = <Icon type="loading" style={{ fontSize: 120 }} spin />;
        const { news, sports, dramas, movies, musics } = this.state;
        
        return(
            <div>
                <div className="row">
                    <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                        <Tabs defaultActiveKey="1">
                            <TabPane tab={
                                <span><Icon type="apple" /> Filter </span>}
                                key="1">
                                <div className="col-md-12">
                                    <span className="button_globalclassName">
                                    <form style={{marginTop:'2vw'}}>
                                        <div className="input-group"
                                            // style={{marginTop: '-40px', marginRight: '20px', paddingBottom: '10px'}}
                                            >
                                            <input type="text" required
                                                className="form-control"
                                                // style={{width: '20%', float: 'right'}}
                                                placeholder="Search"
                                                onChange={this.onChange.bind(this)}/>
                                            <span className="input-group-btn">
                                                <button className="btn btn-theme" type="submit"
                                                    style={{backgroundColor:'#37a99b',color:'white', padding:"3px", marginBottom:"6px"}}
                                                    onClick={this.searchText}><i className="fa fa-search"/>
                                                </button>
                                            </span>
                                        </div>
                                        </form>
                                    </span>
                                </div>
                            </TabPane>
                            <TabPane tab={
                                <span><Icon type="android" /> Category </span>}
                                key="2">
                                <EntertainmentCategory />
                            </TabPane>
                        </Tabs>
                    </div>
                    <div className="col-xs-12 col-sm-9 col-md-9 col-lg-9">
                        {/* <Entslider  entertainment={{news, sports, dramas, movies, musics}} {...this.props} style={{marginTop:'20%'}} /> */}
                    </div>
                </div>
            </div>
        )
    }
}
export default EntertainmentTab;
