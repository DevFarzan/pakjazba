import React, { Component } from 'react';
import App from '../App';
import {
    Form,
    Input,
    Icon,
    Cascader,
    InputNumber,
    Checkbox,
    notification,
    Upload,
    Modal,
    DatePicker
} from 'antd';
import moment from 'moment';
import superagent from "superagent";
import {HttpUtils} from "../Services/HttpUtils";

const RangePicker = DatePicker.RangePicker;
const InputGroup = Input.Group;
const { TextArea } = Input;
const CheckboxGroup = Checkbox.Group;
const FormItem = Form.Item
const category = [{
    value: 'imported',
    label: 'imported'
},{
    value: 'local',
    label: 'local',
}];

class Postroommates extends Component{
    constructor(props) {
        super(props)
        this.state = {
            desLength: 0,
            fileList: [],
            previewVisible: false,
            previewImage: '',
        }
    }

    //-------------- upload functions start -------------------
    handleCancel = () => {
        this.setState({ previewVisible: false })
    }

    handlePreview = (file) => {
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,
        });
    }

    handleChange = ({ fileList }) => {
        this.setState({fileList})
    }
    //--------------upload functions end ---------------------

    checkValue(rule, value, callback) {
        this.setState({desLength: value ? value.length : 0})
        callback();
    }

    checkPriceValue(rule, value, callback){
        if (!value) {
            callback('Please input your Price!');
        } else {
            callback();
        }
    }

    validateDate(rule, value, callback){
        if (!value.length) {
            callback('Please select your Date Range!');
        } else {
            callback();
        }
    }

    onChangePrice(e) {
        this.setState({hidePrice: e.target.checked});
    }

    onChangeDate(dates, dateStrings) {
        console.log('From: ', dates[0], ', to: ', dates[1]);
        console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
    }

    onChangeAddress(e) {
        this.setState({hideAddress: e.target.checked});
    }

    async addressLatLong() {
        var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=Tuheed+Commercial+Area,+Defence+Karachi&key=AIzaSyDhMPFM50yo4Is2afbhqgStOWTPULLr0F8'
        let uploadRequest = await superagent.post(url)
        console.log(uploadRequest, 'oooooooooooooooooooo')
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.addressLatLong();


        // this.props.form.validateFieldsAndScroll((err, values) => {
        //     if(!err) {
        //         this.funcForUpload(values)
        //     }
        // })
    }

    render(){
        const { desLength, fileList, previewVisible, previewImage } = this.state;
        const {getFieldDecorator} = this.props.form;
        const optionsContact = [
            { label: 'email', value: 'email' },
            { label: 'phone', value: 'phone' },
            { label: 'text', value: 'text' },
        ];

        const formItemLayout = {
            labelCol: {
                md:{span:6},
                xs: {span: 24},
                sm: {span: 5},
            },
            wrapperCol: {
                md:{span:12},
                xs: {span: 24},
                sm: {span: 16},
            },
        };

        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">Upload</div>
            </div>
        );

        return(
            <div>
                <App/>
                <div className="container">
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <div className="panel-group">
                            <div className="panel panel-default">
                                <div className="main_c_panel">Roommates / Rentals<br/>
                                    Find all your Local Rentals in one place
                                </div>
                                <div className="panel-body">
                                    {/*==========main panel content=============*/}
                                    {/*==========location panel start=========*/}
                                    <div className="panel panel-default">
                                        <div className="panel-heading bold_c_text"><Icon type="info-circle"/><span
                                            className="margin_font_location">Location</span></div>
                                        <div className="panel-body">
                                            <FormItem
                                                {...formItemLayout}
                                                label="City"
                                            >
                                                {getFieldDecorator('city', {
                                                    initialValue: ['zhejiang', 'hangzhou', 'xihu'],
                                                    rules: [{ type: 'array', required: true, message: 'Please select your City!' }],
                                                })(
                                                    <Cascader options={category} />
                                                )}
                                            </FormItem>
                                            <FormItem
                                                {...formItemLayout}
                                                label="Category"
                                            >
                                                {getFieldDecorator('category', {
                                                    initialValue: ['zhejiang', 'hangzhou', 'xihu'],
                                                    rules: [{ type: 'array', required: true, message: 'Please select your Category!' }],
                                                })(
                                                    <Cascader options={category} />
                                                )}
                                            </FormItem>
                                            <FormItem
                                                {...formItemLayout}
                                                label="Posting Title"
                                            >
                                                {getFieldDecorator('postingTitle', {
                                                    rules: [{ required: true, message: 'Please input your Posting Title!', whitespace: true }],
                                                })(
                                                    <Input  />
                                                )}
                                            </FormItem>
                                            <FormItem
                                                {...formItemLayout}
                                                label="Description"
                                            >
                                                {getFieldDecorator('description', {
                                                    rules: [
                                                        {
                                                            required: true, message: 'Please input your Description!', whitespace: true
                                                        },
                                                        {
                                                            validator: this.checkValue.bind(this)
                                                        }],
                                                })(
                                                    <TextArea
                                                        rows={6}
                                                        maxlength="500"
                                                    />
                                                )}
                                                <br />
                                                <span>{500 - desLength}</span>
                                            </FormItem>
                                            <FormItem
                                                {...formItemLayout}
                                                label="Date Range"
                                            >
                                                {getFieldDecorator('dateRange', {
                                                    rules: [{ validator: this.validateDate.bind(this) }],
                                                })(
                                                    <RangePicker
                                                        ranges={{ Today: [moment(), moment()], 'This Month': [moment(), moment().endOf('month')] }}
                                                        onChange={this.onChangeDate.bind(this)}
                                                    />
                                                )}
                                            </FormItem>
                                            <div className="row" style={{'text-align': 'center'}}>
                                                <div className="col-md-2"></div>
                                                <div class="col-md-3">
                                                    <FormItem
                                                        {...formItemLayout}
                                                        label="Rent (Expected/Preferred)"
                                                    >
                                                        {getFieldDecorator('price', {
                                                            rules: [{ validator: this.checkPriceValue.bind(this) }],
                                                        })(
                                                            <Input />
                                                        )}
                                                    </FormItem>
                                                </div>
                                                <div className="col-md-3" style={{'text-align': 'left'}}>
                                                    <Checkbox onChange={this.onChangePrice.bind(this)}>/ month</Checkbox>
                                                </div>
                                                <div className="col-md-4"></div>
                                            </div>
                                            <FormItem
                                                {...formItemLayout}
                                                label="Accommodates"
                                            >
                                                {getFieldDecorator('accommodates', {
                                                    initialValue: ['zhejiang', 'hangzhou', 'xihu'],
                                                    rules: [{ type: 'array', required: true, message: 'Please select your Accommodates!' }],
                                                })(
                                                    <Cascader options={category} />
                                                )}
                                            </FormItem>
                                            <FormItem
                                                {...formItemLayout}
                                                label="Gender Preference"
                                            >
                                                {getFieldDecorator('genderPreference', {
                                                    rules: [{ required: true, message: 'Please input your Gender Preference!', whitespace: true }],
                                                })(
                                                    <Input  />
                                                )}
                                            </FormItem>
                                            <FormItem
                                                {...formItemLayout}
                                                label="Attached Bath"
                                            >
                                                {getFieldDecorator('attachedBath', {
                                                    rules: [{ required: true, message: 'Please input your Attached Bath!', whitespace: true }],
                                                })(
                                                    <Input  />
                                                )}
                                            </FormItem>
                                            <FormItem
                                                {...formItemLayout}
                                                label="Images"
                                            >
                                                {getFieldDecorator('images', {
                                                    rules: [{ required: true, message: 'Please upload your Images!', whitespace: true }],
                                                })(
                                                    <div>
                                                        <Upload
                                                            action="//jsonplaceholder.typicode.com/posts/"
                                                            listType="picture-card"
                                                            fileList={fileList}
                                                            onPreview={this.handlePreview}
                                                            onChange={this.handleChange}
                                                        >
                                                            {fileList.length >= 3 ? null : uploadButton}
                                                        </Upload>
                                                        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                                                            <img alt="example" style={{ width: '100%' }} src={previewImage} />
                                                        </Modal>
                                                    </div>
                                                )}
                                            </FormItem>
                                            <div className="row">
                                                <div className="col-md-2"></div>
                                                <div className="col-md-4">
                                                    <FormItem
                                                        {...formItemLayout}
                                                        label="Location"
                                                    >
                                                        {getFieldDecorator('location', {
                                                            rules: [{
                                                                required: true,
                                                                message: 'Please input your Location!',
                                                                whitespace: true
                                                            }],
                                                        })(
                                                            <Input/>
                                                        )}
                                                    </FormItem>
                                                </div>
                                                <div className="col-md-3" style={{'text-align': 'left'}}>
                                                    <Checkbox onChange={this.onChangeAddress.bind(this)}>(insert Map)</Checkbox>
                                                </div>
                                                <div className="col-md-3"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel-body">
                                    {/*==========main panel content=============*/}
                                    {/*==========location panel start=========*/}
                                    <div className="panel panel-default">
                                        <div className="panel-heading bold_c_text"><Icon type="info-circle"/><span
                                            className="margin_font_location">About</span></div>
                                        <div className="panel-body">
                                            <FormItem
                                                {...formItemLayout}
                                                label="Contact Name"
                                            >
                                                {getFieldDecorator('contactName', {
                                                    rules: [{ required: true, message: 'Please input your Contact Name!', whitespace: true }],
                                                })(
                                                    <Input  />
                                                )}
                                            </FormItem>
                                            <FormItem
                                                {...formItemLayout}
                                                label="Contact Email"
                                            >
                                                {getFieldDecorator('contactEmail', {
                                                    rules: [{ required: true, message: 'Please input your Contact Email!', whitespace: true }],
                                                })(
                                                    <Input  />
                                                )}
                                            </FormItem>
                                            <FormItem
                                                {...formItemLayout}
                                                label="Contact Number"
                                            >
                                                {getFieldDecorator('contactNumber', {
                                                    rules: [{ required: true, message: 'Please input your Contact Number!', whitespace: true }],
                                                })(
                                                    <Input  />
                                                )}
                                            </FormItem>
                                            <FormItem
                                                {...formItemLayout}
                                                label="Mode of Contact"
                                            >
                                                {getFieldDecorator('contactMode', {
                                                    rules: [{ validator: this.checkCheckBox }],
                                                })(
                                                    <CheckboxGroup options={optionsContact} />
                                                )}
                                            </FormItem>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel-body">
                                    {/*==========main panel content=============*/}
                                    {/*==========location panel start=========*/}
                                    <div className="panel panel-default">
                                        <div className="panel-heading bold_c_text"><Icon type="info-circle"/><span
                                            className="margin_font_location">About</span></div>
                                        <div className="panel-body">
                                        </div>
                                    </div>
                                </div>
                                <div className="row center_global">
                                    <button className="btn color_button">Submit</button>
                                </div>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        )
    }
}

const WrappedBusinessForm = Form.create()(Postroommates);
export default WrappedBusinessForm;