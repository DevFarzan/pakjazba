import React, { Component } from 'react';
import Burgermenu from '../header/burgermenu';
import Slider from '../header/Slider';
import Footer from '../footer/footer';
import { connect } from 'react-redux';
import EventFeatured from './Eventfeaturedcard';
import EventBanner from './bannerAndtop';
import { HttpUtils } from "../../Services/HttpUtils";

class MarketEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: []
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.setState({ showBtn: true });
        this.getAllBusiness();
    }

    async getAllBusiness() {
        var res = await HttpUtils.get('marketplace');
        if (res) {
            if (res.code === 200) {
                let data = res.eventPortalData;
                this.setState({
                    events: data ? data : [],
                    showBtn: false
                });
            }
        }
        // this.handleLocalStorage();
    }

    componentWillUnmount() {
        let inputValue = '';
        if (this.props.text.length) {
            const { dispatch } = this.props;
            dispatch({ type: 'SEARCHON', inputValue })
        }
    }

    render() {
        return (
            <div>
                <span>
                    <div className="vissible-xs" style={{ "background": "#d8e7e4", marginTop: "102px", backgroundSize: 'cover' }}>
                        <div className="visible-xs" style={{ marginTop: '-119px' }}></div>
                        <div className="background-image">
                            <Burgermenu />
                            <Slider mainH1="PakJazba Event Portal" mainH2="Find what you need" showBtn={this.state.showBtn} />
                        </div>
                    </div>
                </span>
                {!this.props.text && <EventBanner events={this.state.events} />}
                {/*{!this.props.text && <EventCategories/>}*/}
                <EventFeatured events={this.state.events} />
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

export default connect(mapStateToProps)(MarketEvent);
