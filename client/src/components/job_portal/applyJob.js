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
import CategoriesjobMarket from './CategoriesJobs';
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
        let res = this.props.location.state;
        console.log(this.props.text)
        console.log(res, 'DDDDDDDDDDDDDDDDDDDDd')
        this.setState({
            job: res && res,
            showJob: res && res.slice(0, 6),
            loader: false
        });
    }

    filteringData(e){
        const { job } = this.state;
        console.log(job, 'jobbbbbbbbb')
        let data = job.filter((elem) => {
            return (elem.jobCat.toLowerCase().includes(e.toLowerCase()))
        })
        console.log(e, 'filtering functionnnnnnnn')
        this.setState({
            filteredData: data,
            showJob: data.slice(0, 6)
        })
    }

    render(){
        return (
            <div>
                <App/>
                <div className="row jobdetail-page">
                  <div className="col-md-12 col-sm-12 col-xs-12" style={{textAlign:"center"}}>
                    <div className="">
                      <h1 style={{fontFamily: 'Work Sans, sans-serif', fontWeight:"bold"}}>JOBS</h1>
                    </div>
                  </div>
                </div>
                <CategoriesjobMarket filteringData={this.filteringData.bind(this)}/>
                <Secondscreencard data={this.state.showJob} allData={this.getAllBusiness.bind(this)}/>
                {/*<JobNews/>*/}

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
