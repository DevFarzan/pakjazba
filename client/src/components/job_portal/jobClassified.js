import React, { Component } from 'react';
import Burgermenu from '../header/burgermenu';
import Slider from '../header/Slider';
import ClassifiedIcons from './jobClassifiedicon';
import FeaturedBox from './featuredJob';
import JobBlog from './jobBlogs';
import { Redirect } from 'react-router';
import Footer from '../footer/footer';
import { connect } from 'react-redux';
import {HttpUtils} from "../../Services/HttpUtils";

class JobClassified extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        window.scrollTo(0,0);
        this.getAllBusiness();
    }

    async getAllBusiness(){
        let res = await HttpUtils.get('marketplace')
        this.setState({
            data: res && res.jobPortalData
        })
    }

    // componentWillUnmount(){
    //     let inputValue = '';
    //     if(this.props.text.length){
    //         const { dispatch } = this.props;
    //         dispatch({type: 'SEARCHON', inputValue})
    //     }
    // }

    render(){
        if(this.props.text){
            return <Redirect to={{pathname: '/apply_forJob', state: this.state.data}}/>
        }
        return (
            <div>
                <span>
                    <div className ="" style={{"backgroundImage":"url('../images/bgc-images/job-portal.png')", marginTop : "104px",backgroundSize: 'cover'}}>
                        <div className="background-image">
                            <Burgermenu/>
                            <Slider mainH1="Job Portal" mainH2="Find your jobs here"/>
                        </div>
                    </div>
                </span>
                {!this.props.text && <ClassifiedIcons/>}
                <FeaturedBox/>
                <JobBlog/>
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

export default connect(mapStateToProps)(JobClassified);
