import React, { Component } from 'react';
import { Input, Select, Modal, Button, Form, Cascader } from 'antd';
import OrderCard from '../event_listing/OrderSummarycard';
import  './OrderSummarycard.css';
import ModalOrderCard from '../event_listing/ModalForm';
import AsyncStorage from "@callstack/async-storage/lib/index";
import stateCities from "../../../lib/countrycitystatejson";
import moment from 'moment';

const FormItem = Form.Item;

class ContactDetail extends Component{
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            hoNumber: ''
        }
    }

    componentDidMount(){
        window.scrollTo(0,0);
        this.props.onRef(this);
        this.handleLocalStorage();
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.data !== this.props.data){
            this.setState({receivedData: this.props.data});
        }
    }

    componentWillUnmount() {
        this.props.onRef(undefined);
    }

    handleLocalStorage = () =>{
        let states = stateCities.getStatesByShort('US');
        states = states.map((elem) => {
            return {
                label: elem,
                value: elem
            }
        })
        AsyncStorage.getItem('user')
            .then((obj) => {
                var userObj = JSON.parse(obj)
                if(!!userObj) {
                    this.setState({
                        userId: userObj._id,
                        profileId: userObj.profileId,
                        statesUS: states
                    });
                }
            });
    }

    onChangeState(value) {
        if (!!value.length) {
            let cities = stateCities.getCities('US', value[0])
            cities = cities.map((elem) => {
                return {
                    label: elem,
                    value: elem
                }
            });
            this.setState({
                citiesUS: cities
            });
        }
    }

    onChangeReview(e){
        let target = e.target.id;
        if(target === 'name1'){
            this.setState({hoNumber: e.target.value})
        }
    }

    handleSubmit = (e) => {
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                this.postData(values)
            }else {
                this.props.onError()
            }
        })
    }

    postData(values) {
        const { hoNumber, receivedData, userId } = this.state;
        let docId = Math.floor((Math.random() * 1000000) + 54);
        let obj = {
            userId,
            address: values.address,
            city: values.city[0],
            conEmail: values.conEmail,
            email: values.email,
            firstName: values.firstName,
            lastName: values.lastName,
            moNumber: values.moNumber,
            state: values.state[0],
            zipCode: values.zipCode,
            hoNumber,
            docId,
            posted: moment().format('LL')
        }
        obj = {...obj, ...receivedData};
        this.props.onPostTicketData(obj);
    }

    showModal = () => {
        this.setState({ visible: true });
    }

    handleOk = (e) => {
        this.setState({ visible: false });
    }

    handleCancel = (e) => {
        this.setState({ visible: false });
    }

    validateNumber(rule, value, callback){
        if(isNaN(value)){
            callback('Please type Numbers');
        }else {
            callback();
        }
    }

    changeNameEmail(rule, value, callback){
        let obj = {
            firstName: (rule.field === 'firstName') && value || this.state.firstName || '',
            email: (rule.field === 'email') && value || this.state.email || ''
        }
        if(rule.field === 'firstName'){
            this.setState({firstName: value})
        }else if(rule.field === 'email'){
            this.setState({email: value})
        }
        this.props.onChange(obj);
        callback();
    }

    render(){
        const { statesUS , citiesUS } = this.state;
        const {getFieldDecorator} = this.props.form;

        function filter(inputValue, path) {
            return (path.some(option => (option.label).toLowerCase().indexOf(inputValue.toLowerCase()) > -1));
        }

        return(
            <div className="panel-body">
                <div className="panel panel-default">
                    <div className="bold_c_text formHeadEvent">
                        <icon type="info-circle"/>
                        <span className="margin_font_location">Share Your Contact Details</span>
                    </div>
                    <div className="container" style={{width:'90%'}}>
                        <section>
                            <Form onSubmit={this.handleSubmit} className="login-form">
                                <div className="row visible-xs visible-sm">
                                    <div className="col-md-12" style={{textAlign:"right"}}>
                                        <div>
                                            <Button type="primary" onClick={this.showModal} style={{backgroundColor: "#008080",color: "white", textAlign:"right"}}>
                                                Open Modal
                                            </Button>
                                            <Modal
                                                title="Basic Modal"
                                                visible={this.state.visible}
                                                onOk={this.handleOk}
                                                onCancel={this.handleCancel}
                                            >
                                                <ModalOrderCard/>
                                            </Modal>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="col-md-6">
                                            <label> First Name</label>
                                            <FormItem>
                                                {getFieldDecorator('firstName', {
                                                    initialValue: this.state.firstName,
                                                    rules: [{ required: true, message: 'Please input your First Name!', whitespace: true },
                                                        { validator: this.changeNameEmail.bind(this) }],
                                                })(
                                                    <Input type="text" className="form-control formInputEventBuyer"/>
                                                )}
                                            </FormItem>
                                        </div>
                                        <div className="col-md-6">
                                            <label> Last Name</label>
                                            <FormItem>
                                                {getFieldDecorator('lastName', {
                                                    initialValue: this.state.lastName,
                                                    rules: [{ required: true, message: 'Please input your Last Name!', whitespace: true }],
                                                })(
                                                    <Input type="text" className="form-control formInputEventBuyer"/>
                                                )}
                                            </FormItem>
                                        </div>
                                        <br/>
                                        <br/>
                                    </div>
                                    <div className="col-md-12" style={{marginTop:"20px"}}>
                                        <div className="col-md-6">
                                            <label> Email </label>
                                            <FormItem>
                                                {getFieldDecorator('email', {
                                                    initialValue: this.state.email,
                                                    rules: [{ type: 'email', message: 'The input is not valid E-mail!', whitespace: true },
                                                        { required: true, message: 'Please input your Contact Email!', whitespace: true },
                                                        { validator: this.changeNameEmail.bind(this) }],
                                                })(
                                                    <Input type="text" className="form-control formInputEventBuyer"  />
                                                )}
                                            </FormItem>
                                        </div>
                                        <div className="col-md-6">
                                            <label> Confirm Email </label>
                                            <FormItem>
                                                {getFieldDecorator('conEmail', {
                                                    initialValue: this.state.conEmail,
                                                    rules: [{ type: 'email', message: 'The input is not valid E-mail!', whitespace: true },
                                                        { required: true, message: 'Please input your Contact Email!', whitespace: true }],
                                                })(
                                                    <Input type="text" className="form-control formInputEventBuyer" />
                                                )}
                                            </FormItem>
                                        </div>
                                        <br/>
                                    </div>
                                    <div className="col-md-12" style={{marginTop:"20px"}}>
                                        <div className="col-md-6">
                                            <label> Home Phone </label>
                                            <Input placeholder="" id="name1" value={this.state.hoNumber} onChange={this.onChangeReview.bind(this)} className="form-control formInputEventBuyer" />
                                        </div>
                                        <div className="col-md-6">
                                            <label> Mobile Phone </label>
                                            <FormItem>
                                                {getFieldDecorator('moNumber', {
                                                    initialValue: this.state.moNumber,
                                                    rules: [{ required: true, message: 'Please input your Mobile Phone Number!', whitespace: true },
                                                        { validator: this.validateNumber.bind(this) }],
                                                })(
                                                    <Input type="text" className="form-control formInputEventBuyer"/>
                                                )}
                                            </FormItem>
                                        </div>
                                        <br/>
                                    </div>
                                    <div className="col-md-12" style={{marginTop:"20px"}}>
                                        <div className="col-md-6">
                                            <label> Address </label>
                                            <FormItem>
                                                {getFieldDecorator('address', {
                                                    initialValue: this.state.address,
                                                    rules: [{ required: true, message: 'Please input your Address!', whitespace: true }],
                                                })(
                                                    <Input  type="text" className="form-control formInputEventBuyer" />
                                                )}
                                            </FormItem>
                                        </div>
                                        <div className="col-md-6">
                                            <label style={{display:"block"}}> State </label>
                                            <FormItem>
                                                {getFieldDecorator('state', {
                                                    initialValue: this.state.state,
                                                    rules: [{ type: 'array', required: true, message: 'Please select your State!' }],
                                                })(
                                                    <Cascader options={statesUS} showSearch={{ filter }} onChange={this.onChangeState.bind(this)}/>
                                                )}
                                            </FormItem>
                                        </div>
                                    </div>
                                    <div className="col-md-12" style={{marginTop:"20px"}}>
                                        <div className="col-md-6">
                                            <label style={{display:"block"}}> City </label>
                                            <FormItem>
                                                {getFieldDecorator('city', {
                                                    initialValue: this.state.city,
                                                    rules: [{ type: 'array', required: true, message: 'Please select your City!' }],
                                                })(
                                                    <Cascader options={citiesUS} showSearch={{ filter }}/>
                                                )}
                                            </FormItem>
                                        </div>
                                        <div className="col-md-6">
                                            <label style={{display:"block"}}> Zip Code </label>
                                            <FormItem>
                                                {getFieldDecorator('zipCode', {
                                                    initialValue: this.state.zipCode,
                                                    rules: [{ required: true, message: 'Please input your Zip Code Number!', whitespace: true },
                                                        { validator: this.validateNumber.bind(this) }],
                                                })(
                                                    <Input type="text" className="form-control formInputEventBuyer"/>
                                                )}
                                            </FormItem>
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        </section>
                    </div>
                </div>
            </div>
        )
    }
}

const BuyerDetailForm = Form.create()(ContactDetail);
export default BuyerDetailForm;
