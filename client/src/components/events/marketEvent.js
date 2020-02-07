import React, { Component } from 'react';
import Headermenu from '../header/headermenu';
import { connect } from 'react-redux';
import EventFeatured from './Eventfeaturedcard';
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
                    <Headermenu/>
                </span>
                {/* {!this.props.text && <EventBanner events={this.state.events} />} */}
                {/* {!this.props.text && <EventCategories/>} */}
                <EventFeatured events={this.state.events} />
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
