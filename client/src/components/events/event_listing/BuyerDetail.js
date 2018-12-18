import React, { Component } from 'react';
import Burgermenu from '../../header/burgermenu';
import Footer from '../../footer/footer';
import Slider from '../../header/Slider';
import CardDetail from '../event_listing/CardDetail';
import ContactDetail from '../event_listing/ContactDetails';
import TermsandConditions from '../event_listing/Terms&Conditions';
import OrderCard from '../event_listing/OrderSummarycard';
import ModalOrderCard from '../event_listing/ModalForm';
import { Icon, Spin } from 'antd';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';

class BuyerDetail extends Component{
    constructor(props){
        super(props);
        this.state = {
            cardData: {
                eBirdVal: '',
                nTicketVal: '',
                total: '',
                eventId: '',
                firstName: '',
                email: ''
            },
            loader: false
        }
    }

    componentDidMount(){
        let data = this.props.location.state;
    }

    onClick = () => {
        this.setState({loader: true});
        this.child.handleSubmit();
    }

    onReceiveData(e){
        let data = this.props.location.state || this.props.otherData;
        let { cardData } = this.state;
        cardData = {...cardData, ...e, eventId: data._id}
        this.setState({cardData});
    }

    async postTicketData(obj){
        let data = this.props.location.state || this.props.otherData;
        let objData = {data, obj};
        this.setState({objData}, () => {
            this.child2.creditCard();
        });
    }

    changeHandler(data){
        this.setState({msg: true, loader: false});
    }

    handleError = () => {
        this.setState({loader: false})
    }

    changeNameEmail = (e) => {
        let { cardData } = this.state;
        cardData = {...cardData, ...e};
        this.setState({ cardData });
    }

    render(){
        const { msg, objData } = this.state;
        let data = this.props.location.state || this.props.otherData;
        if(msg === true) {
            return <Redirect to={{pathname: '/Ticket_eventPortals', state: objData}} />
        }

        const antIcon = <Icon type="loading" style={{ fontSize: 24, marginRight: '10px' }} spin />;

        return(
            <div className="">
                <Burgermenu/>
                <div style={{backgroundColor:"#032a30",width:"100%",height:"67px",marginTop:"-20px"}}>
                </div>
                <div className="col-md-8" style={{marginTop: '70px'}}>
                    <ContactDetail
                        onRef={ref => (this.child = ref)}
                        data={this.state.cardData}
                        onError={this.handleError}
                        onChange={this.changeNameEmail}
                        onPostTicketData={this.postTicketData.bind(this)}/>
                    {(data.earlyBird || data.normalTicket) && <CardDetail
                        onRef={ref => (this.child2 = ref)}
                        data={this.state.cardData}
                        onError={this.handleError}
                        onChange={this.changeHandler.bind(this)}/>}
                    <TermsandConditions/>
                    <div className="row center_global row">
                        {this.state.loader && <Spin indicator={antIcon} />}
                        <button disabled={!!this.state.loader} style={{textAlign: 'center', width:"45%"}} className="btn button_custom"  onClick={this.onClick}>Submit Event</button>
                    </div>
                </div>
                <div className="col-md-4 hidden-xs hidden-sm" style={{marginTop: '50px'}}>
                    <OrderCard 
                        data={data} 
                        onChange={this.onReceiveData.bind(this)}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return({
        otherData: state.otherData
    });
}

export default connect(mapStateToProps)(BuyerDetail);
