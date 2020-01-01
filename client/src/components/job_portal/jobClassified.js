import React, { Component } from 'react';
import Burgermenu from '../header/burgermenu';
import Slider from '../header/Slider';
import ClassifiedIcons from './jobClassifiedicon';
import FeaturedBox from './featuredJob';
import { Redirect } from 'react-router';
import Footer from '../footer/footer';
import { connect } from 'react-redux';
import { HttpUtils } from "../../Services/HttpUtils";

class JobClassified extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.getAllBusiness();
    }

    async getAllBusiness() {
        let res = await HttpUtils.get('marketplace')
        if (res) {
            this.setState({
                data: res && res.jobPortalData
            })
        }
    }

    // componentWillUnmount(){
    //     let inputValue = '';
    //     if(this.props.text.length){
    //         const { dispatch } = this.props;
    //         dispatch({type: 'SEARCHON', inputValue})
    //     }
    // }

    render() {
        if (this.props.text) {
            return <Redirect to={{ pathname: '/apply_forJob', state: this.state.data }} />
        }
        return (
            <div>
                <div className="vissible-xs" style={{ "background": "#d8e7e4", marginTop: "102px", backgroundSize: 'cover' }}>
                    <div className="visible-xs" style={{ marginTop: '-119px' }}></div>
                    <div className="background-image">
                        {/* <Burgermenu /> */}
                        <Slider mainH1="PakJazba Job Portal" mainH2="" />
                    </div>
                </div>
                {!this.props.text && <ClassifiedIcons />}
                <FeaturedBox />
                <Footer />
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return ({
        text: state.text
    })
}

export default connect(mapStateToProps)(JobClassified);
