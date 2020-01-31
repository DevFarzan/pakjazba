import React, { Component } from 'react';
import HeaderMenu from '../../header/headermenu';
import Footer from '../../footer/footer';
import Slider from '../../header/Slider';
import CardDetail from '../event_listing/CardDetail';
import ContactDetail from '../event_listing/ContactDetails';
import TermsandConditions from '../event_listing/Terms&Conditions';
import OrderCard from '../event_listing/OrderSummarycard';
import MapOrderCard from '../event_listing/mapOrderCard';
import ModalOrderCard from '../event_listing/ModalForm';
import { HttpUtils } from "../../../Services/HttpUtils";
import { Icon, Spin } from 'antd';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';

class BuyerDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardData: {
                eBirdVal: '',
                nTicketVal: '',
                total: '',
                eventId: '',
                firstName: '',
                email: '',
                selectSeat: false
            },
            loader: false,
            booked: []
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.dispatch({ type: 'GOROUTE', route: false });
        const { booked } = this.props.location.state !== undefined ? this.props.location.state || this.props.location.state.data : [];
        let { data } = this.props.location.state !== undefined ? this.props.location.state.data || this.props.location.state : this.props.otherData;
        if (booked !== undefined && booked.length > 0) {
            this.setState({ booked });
        }
    }

    componentWillUnmount() {
        if (!this.state.selectSeat && !this.state.msg && !this.props.route) {
            // let data = this.props.location.state.data || this.props.location.state || this.props.otherData;
            let data = this.props.location.state !== undefined ? this.props.location.state.data || this.props.location.state : this.props.otherData;
            this.props.history.push(`/detail_eventPortal/${data.randomKey}`)
        }
    }

    onClick = () => {
        // let data = this.props.location.state.data || this.props.location.state || this.props.otherData,
        let data = this.props.location.state !== undefined ? this.props.location.state.data || this.props.location.state : this.props.otherData,
            condition = data.map && this.state.booked.length == 0 ? false : true;
        if (condition) {
            this.setState({ loader: true });
            this.child.handleSubmit();
        } else {
            alert("you didn't booked any seat yet");
        }
    }

    selectSeat = () => {
        this.setState({ selectSeat: true })
    }

    onReceiveData(e) {
        // let data = this.props.location.state.data || this.props.location.state || this.props.otherData;
        let data = this.props.location.state !== undefined ? this.props.location.state.data || this.props.location.state : this.props.otherData;
        let { cardData } = this.state;
        cardData = { ...cardData, ...e, eventId: data._id }
        this.setState({ cardData });
    }

    async postTicketData(obj) {
        const { booked } = this.state;
        // let data = this.props.location.state.data || this.props.location.state || this.props.otherData;
        let data = this.props.location.state !== undefined ? this.props.location.state.data || this.props.location.state : this.props.otherData;
        let objData = { data, obj, booked };
        this.setState({ objData }, () => {
            this.child2.creditCard();
        });
    }

    async changeHandler(data2) {
        const { data, obj, booked } = this.state.objData;
        let sendObj = { obj: { ...obj, ...{ eventId: data._id }, booked }, data },
            req = await HttpUtils.post('eventTicket', sendObj);
        this.setState({ msg: true, loader: false });
    }

    handleError = () => {
        this.setState({ loader: false })
    }

    changeNameEmail = (e) => {
        let { cardData } = this.state;
        cardData = { ...cardData, ...e };
        this.setState({ cardData });
    }

    render() {
        const { msg, objData, selectSeat, booked } = this.state;
        // let data = this.props.location.state.data || this.props.location.state || this.props.otherData;
        let data = this.props.location.state !== undefined ? this.props.location.state.data || this.props.location.state : this.props.otherData;
        if (selectSeat) {
            return <Redirect to={{ pathname: '/seat_map', state: { data, objData } }} />
        }
        if (msg) {
            return <Redirect to={{ pathname: '/Ticket_eventPortals', state: objData }} />
        }
        const antIcon = <Icon type="loading" style={{ fontSize: 24, marginRight: '10px' }} spin />;

        return (
            <div>
                <HeaderMenu />
                <div className="row" style={{ marginTop: '110px' }}>
                    <div className="col-md-8">
                        {data.map && <button style={{ textAlign: 'center', width: "40%" }} className=" col-md-offset-7 btn button_custom" onClick={this.selectSeat}>I want to select my seat</button>}
                        <ContactDetail
                            onRef={ref => (this.child = ref)}
                            data={this.state.cardData}
                            onError={this.handleError}
                            onChange={this.changeNameEmail}
                            onPostTicketData={this.postTicketData.bind(this)} />
                        {(data.earlyBird || data.normalTicket) && <CardDetail
                            onRef={ref => (this.child2 = ref)}
                            data={this.state.cardData}
                            onError={this.handleError}
                            onChange={this.changeHandler.bind(this)} />}
                        <TermsandConditions />
                        <div className="row center_global row">
                            {this.state.loader && <Spin indicator={antIcon} />}
                            <button disabled={!!this.state.loader} style={{ textAlign: 'center', width: "45%" }} className="btn button_custom" onClick={this.onClick}>Submit</button>
                        </div>
                    </div>
                    <div className="col-md-4 hidden-xs hidden-sm">
                        {!data.map && <OrderCard
                            data={data}
                            onChange={this.onReceiveData.bind(this)}
                        />}
                        {data.map && <MapOrderCard
                            booked={booked}
                        />}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return ({
        otherData: state.otherData,
        route: state.route
    });
}

export default connect(mapStateToProps)(BuyerDetail);
