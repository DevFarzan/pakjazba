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
import App from '../../App';
import Secondscreencard from './Secondscreenjob';
import JobNews from './Rssforjob';
import Footer from '../footer/footer';
import CategoriesjobMarket from './CategoriesJobs';
import {HttpUtils} from "../../Services/HttpUtils";
import { connect } from 'react-redux';

class ApplyJob extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount(){
        window.scrollTo(0,0);
        this.getAllBusiness();
    }

    async getAllBusiness(){
        let data = this.props.location.state;
        let res = data.length ? data : await HttpUtils.get('marketplace');
        let text = this.props.text;
        this.setState({
            job: res.jobPortalData ? res.jobPortalData : res,
            loader: false
        }, () => {
            this.filteringData(text)
        });
    }

    filteringData(e){
        const { job } = this.state;
        let data = job.filter((elem) => {
            if(typeof(e) === 'string'){
                return (elem.jobCat.toLowerCase().includes(e.toLowerCase()))
            }else {
                return (elem.jobCat.toLowerCase().includes(e.cat.toLowerCase())) ||
                    (elem.jobType.toLowerCase().includes(e.typeR.toLowerCase()))
            }
        })
        this.setState({
            filteredData: data,
            showJob: data.slice(0, 6)
        })
    }

    render(){
        return (
            <div>
                <App/>
                <div className="row jobdetail-page" style={{marginTop:'6%'}}>
                  <div className="col-md-12 col-sm-12 col-xs-12" style={{textAlign:"center"}}>
                    {/*<div className="">
                      <h1 style={{fontFamily: 'Work Sans, sans-serif', fontWeight:"bold"}}>JOBS</h1>
                    </div>*/}
                  </div>
                </div>
                <CategoriesjobMarket filteringData={this.filteringData.bind(this)}/>
                <Secondscreencard data={this.state.showJob} allData={this.getAllBusiness.bind(this)}/>
                <Footer/>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return({
        text: state.text
    })
}

export default connect(mapStateToProps)(ApplyJob);
