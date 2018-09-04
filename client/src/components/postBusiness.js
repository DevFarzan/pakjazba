/* global google */
import React, { Component } from 'react';
import {
    Form,
    Input,
    Tooltip,
    Icon,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete,
    notification,
    Upload,
    Modal
} from 'antd';
import App from '../App';
import Geosuggest from 'react-geosuggest';
import Burgermenu from '../components/business/burgermenu';
import Footer from '../components/footer/footer';
import sha1 from "sha1";
import superagent from "superagent";
import axios from "axios";
import { Redirect } from 'react-router';
import {HttpUtils} from '../Services/HttpUtils';
import AsyncStorage from "@callstack/async-storage/lib/index";

const { TextArea } = Input;
const FormItem = Form.Item
const category = [{
	value: 'imported',
    label: 'imported'
},{
    value: 'local',
    label: 'local',
}];

class Postbusiness extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userId: '',
            previewVisible: false,
            previewImage: '',
            fileList: [],
            arrURL: [],
            lengthFileList: 0,
            desLength: 0,
            msg: false,
        };
    }


    componentWillMount(){
        this.handleLocalStorage();
    }

    componentDidMount(){
        this.handleLocalStorage();
    }

    handleLocalStorage = () =>{
        AsyncStorage.getItem('user')
            .then((obj) => {
                var userObj = JSON.parse(obj)
                if(!!userObj) {
                    this.setState({
                        userId: userObj._id
                    })
                }
            })
    }
    //-------- GeoSuggest fuctions start ------------

    /**
     * When the input receives focus
     */
    onFocus() {
        console.log('onFocus'); // eslint-disable-line
    }

    /**
     * When the input loses focus
     * @param {String} value The user input
     */
    onBlur(value) {
        console.log('onBlur', value); // eslint-disable-line
    }

    /**
     * When the input got changed
     * @param {String} value The new value
     */
    onChange(value) {
        console.log('input changes to :' + value); // eslint-disable-line
    }

    /**
     * When a suggest got selected
     * @param  {Object} suggest The suggest
     */
    onSuggestSelect(suggest) {
        // console.log(suggest, '1111111111111'); // eslint-disable-line
    }

    /**
     * When there are no suggest results
     * @param {String} userInput The user input
     */
    onSuggestNoResults(userInput) {
        console.log('onSuggestNoResults for :' + userInput); // eslint-disable-line
    }

    //-------------- GeoSuggest functions end -----------------

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

    //--------------delete uploaded image start-------------------
    deleteFile = () => {
        const cloudName = 'dxk0bmtei'
        const url = 'https://api.cloudinary.com/v1_1/'+cloudName+'/image/destroy'
        const timestamp = Date.now()/1000
        const publicId = "kc2i5zrbymr6dwlp9man"
        const paramsStr = 'timestamp='+timestamp+'&public_id='+publicId+'U8W4mHcSxhKNRJ2_nT5Oz36T6BI'
        const signature = sha1(paramsStr)
        console.log(signature.toString(),' signatureeeeeeeeeeee')
        // const signature = "f32d42d4c15b560b49ead0878aaefb71016ca04d"
        const params = {
            'api_key':'878178936665133',
            'timestamp':timestamp,
            'public_id':publicId,
            'signature':signature.toString()
        }

        axios.post('https://api.cloudinary.com/v1_1/'+cloudName+'/image/destroy?'+'public_id='+publicId+'&timestamp='+timestamp+'&api_key=878178936665133'+'&signature='+signature,{}).then((res) => {
            console.log(res, 'resssssssssss')
        }).catch((err) => {
            console.log(err, 'errrrrrrrrrr')
        })

        // let deleteRequest = superagent.post(url)
        // console.log(deleteRequest, 'urlllllllll')
        // Object.keys(params).forEach((key) =>{
        //     deleteRequest.field(key, params[key])
        // })
        // deleteRequest.end((err, resp) =>{
        //     console.log(err, 'errrrrrrrrrr')
        //     console.log(resp, 'respppppppp')
        //     err ? rej(err) : res(resp);
        // })

    }
    //--------------delete uploaded image end-------------------

    //--------------function for cloudnary url ---------------
    uploadFile = (files) =>{
        const image = files.originFileObj
        const cloudName = 'dxk0bmtei'
        const url = 'https://api.cloudinary.com/v1_1/'+cloudName+'/image/upload'
        const timestamp = Date.now()/1000
        const uploadPreset = 'toh6r3p2'
        const paramsStr = 'timestamp='+timestamp+'&upload_preset='+uploadPreset+'U8W4mHcSxhKNRJ2_nT5Oz36T6BI'
        const signature = sha1(paramsStr)
        const params = {
            'api_key':'878178936665133',
            'timestamp':timestamp,
            'upload_preset':uploadPreset,
            'signature':signature
        }

        return new Promise((res, rej) => {
            let uploadRequest = superagent.post(url)
            uploadRequest.attach('file', image)
            Object.keys(params).forEach((key) =>{
                uploadRequest.field(key, params[key])
            })

            uploadRequest.end((err, resp) =>{
                err ? rej(err) : res(resp);
            })
        })
    }

    //-----------------cloudnary function end ------------------

    handleSubmit = (e) => {
        e.preventDefault();
        const { fileList } = this.state;
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                if (fileList.length) {
                    this.postDataWithURL(values)
                } else {
                    var objectData = {
                        key: 'value'
                    }
                    this.postData(values)
                }
            }
        })
    }

    async postDataWithURL(values){
        const { fileList } = this.state;
        var cloudURL = [];

        Promise.all(fileList.map((val) => {
            return this.uploadFile(val).then((result) => {
                return result.body.url
            })
        })).then((results) => {
            this.postData(values, results)
        })
    }

    async postData(values, response){
        const { userId } = this.state;
        var obj = {
            user_id: userId,
            address: values.address,
            businessAddress: values.businessAddress,
            businessCategory: values.businessCategory[0],
            businessEmail: values.businessEmail,
            businessId: values.businessId,
            businessName: values.businessName,
            firstName:values.firstName,
            lastName:values.lastName,
            businessNumber: values.businessNumber,
            businessOwner: values.businessOwner,
            description: values.description,
            city: values.city,
            state: values.state,
            zip: values.zip,
            arr_url: response ? response : []
        }
        var req = await HttpUtils.post('postbusinessdata', obj)
        if(req.code == 200){
            this.props.form.resetFields();
            this.openNotification()
            this.setState({msg: true})
        }
    }

    openNotification() {
        notification.open({
            message: 'Success ',
            description: 'Your need is submited successfully, Kindly visit your profile',
        });
    };

    checkValue(rule, value, callback) {
        this.setState({desLength: value.length})
        callback();
    }

    render() {
        const { previewVisible, previewImage, fileList, desLength } = this.state;
        const {getFieldDecorator} = this.props.form;
        if (this.state.msg === true) {
            return <Redirect to='/' />
        }

        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">Upload</div>
            </div>
        );

        var fixtures = [
            {label: 'New York', location: {lat: 40.7033127, lng: -73.979681}},
            {label: 'Rio', location: {lat: -22.066452, lng: -42.9232368}},
            {label: 'Tokyo', location: {lat: 35.673343, lng: 139.710388}}
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

        return (
            <div>
                {/*================================App component include Start===========================*/}
                <Burgermenu/>
                {/*================================App component include End===========================*/}

                {/*================================post business form start============================*/}
                <div className="">
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <div className="panel-group">
                            <div className="panel panel-default">
                                <div className="main_c_panel">Roommates / Rentals<br/>
                                    Find all your Local Rentals in one place
                                </div>
                                <div className="panel-body">
                                    {/*==========main panel content=============*/}
                                    {/*==========location panel start=========*/}
                                    <div class="panel panel-default">
                                        <div class="panel-heading bold_c_text"><Icon type="info-circle"/><span
                                            className="margin_font_location">Location</span></div>
                                        <div class="panel-body">
											<FormItem
                                                {...formItemLayout}
												label="Address"
											>
                                            {getFieldDecorator('address', {
                                                rules: [{ required: true, message: 'Please input your Address!', whitespace: true }],
                                            })(
                                                <Input  />
                                            )}
                                        	</FormItem>
											<FormItem
                                                {...formItemLayout}
												label="City"
											>
                                            {getFieldDecorator('city', {
                                                rules: [{ required: true, message: 'Please input your City!', whitespace: true }],
                                            })(
                                                <Input  />
                                            )}
                                        	</FormItem>
											<FormItem
                                                {...formItemLayout}
												label="State"
											>
                                            {getFieldDecorator('state', {
                                                rules: [{ required: true, message: 'Please input your State!', whitespace: true }],
                                            })(
                                                <Input  />
                                            )}
                                        	</FormItem>
											<FormItem
                                                {...formItemLayout}
												label="Zip"
											>
                                            {getFieldDecorator('zip', {
                                                rules: [{ required: true, message: 'Please input your Zip!', whitespace: true }],
                                            })(
                                                <Input  />
                                            )}
                                        	</FormItem>
										</div>
                                    </div>
                                    <br/>
                                    {/*==========location panel end===========*/}
                                    {/*==========Business panel start=========*/}
                                    <div class="panel panel-default">
                                        <div class="panel-heading bold_c_text"><Icon type="info-circle"/><span
                                            className="margin_font_location">Business</span></div>
                                        <div class="panel-body">
                                        <FormItem
                                                {...formItemLayout}
                                                label="First Name"
                                            >
                                                {getFieldDecorator('firstName', {
                                                    rules: [{ required: true, message: 'Please input your  First Name!', whitespace: true }],
                                                })(
                                                    <Input  />
                                                )}
                                            </FormItem>
                                            <FormItem
                                                {...formItemLayout}
                                                label="Last Name"
                                            >
                                                {getFieldDecorator('lastName', {
                                                    rules: [{ required: true, message: 'Please input your Last Name!', whitespace: true }],
                                                })(
                                                    <Input  />
                                                )}
                                            </FormItem>
                                            <FormItem
                                                {...formItemLayout}
                                                label="Business Name"
                                            >
                                                {getFieldDecorator('businessName', {
                                                    rules: [{ required: true, message: 'Please input your Business Name!', whitespace: true }],
                                                })(
                                                    <Input  />
                                                )}
                                            </FormItem>
                                            <FormItem
                                                {...formItemLayout}
                                                label="Business Number"
                                            >
                                                {getFieldDecorator('businessNumber', {
                                                    rules: [{ required: true, message: 'Please input your Business Number!', whitespace: true }],
                                                })(
                                                    <Input  />
                                                )}
                                            </FormItem>
                                            <FormItem
                                                {...formItemLayout}
                                                label="Your Business Email id"
                                            >
                                                {getFieldDecorator('businessId', {
                                                    rules: [{ required: true, message: 'Please input your Business Email id!', whitespace: true }],
                                                })(
                                                    <Input  />
                                                )}
                                            </FormItem>
                                            <FormItem
                                                {...formItemLayout}
                                                label="Business Address"
                                            >
                                                {getFieldDecorator('businessAddress', {
                                                    rules: [{ required: true, message: 'Please input your Business Address!', whitespace: true }],
                                                })(
                                                    <Input  />
                                                )}
                                            </FormItem>
											<FormItem
                                                {...formItemLayout}
                                                label="Business Owner Name"
                                            >
                                                {getFieldDecorator('businessOwner', {
                                                    rules: [{ required: true, message: 'Please input your Business Owner Name!', whitespace: true }],
                                                })(
                                                    <Input  />
                                                )}
                                            </FormItem>
											<FormItem
                                                {...formItemLayout}
                                                label="Business Email"
                                            >
                                                {getFieldDecorator('businessEmail', {
                                                    rules: [
                                                    	{ type: 'email', message: 'The input is not valid E-mail!', whitespace: true },
														{ required: true, message: 'Please input your E-mail!',}
														],
                                                })(
                                                    <Input  />
                                                )}
                                            </FormItem>
                                            <FormItem
                                                {...formItemLayout}
                                                label="Business Category"
                                            >
                                                {getFieldDecorator('businessCategory', {
                                                    initialValue: ['zhejiang', 'hangzhou', 'xihu'],
                                                    rules: [{ type: 'array', required: true, message: 'Please select your Business Category!' }],
                                                })(
                                                    <Cascader options={category} />
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
                                                    <TextArea style={{"margin-bottom": "12px"}}
                                                        rows={6}
                                                        maxlength="500"
                                                    />
                                                )}
                                                <br /><br />
                                                <span className="text-area_business">{500 - desLength} Words</span>
                                            </FormItem>
										</div>
                                    </div>
                                    <br/>
                                    {/*==========Business panel end===========*/}
                                    {/*==========upload panel start=========*/}
                                    <div class="panel panel-default">
                                        <div class="panel-heading bold_c_text"><Icon type="info-circle"/><span
                                            className="margin_font_location">Upload</span></div>
                                        <div class="panel-body">
                                            <Upload
                                                action="//jsonplaceholder.typicode.com/posts/"
                                                listType="picture-card"
                                                fileList={fileList}
                                                onPreview={this.handlePreview}
                                                onChange={this.handleChange}
                                            >
                                                {fileList.length >= 2 ? null : uploadButton}
                                            </Upload>
                                            <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                                                <img alt="example" style={{ width: '100%' }} src={previewImage} />
                                            </Modal>
                                        </div>
                                    </div>
                                    {/*==========upload panel end===========*/}
                                </div>
                                <div className="row center_global">
                                    <button className="btn color_button">Submit</button>
                                </div>
                                {/*main panel content*/}
                            </div>
                        </div>
                        {/*panel-group*/}
                    </Form>
                    <Footer />
                </div>
                {/*container*/}

                {/*================================post business form End==============================*/}
            </div>
        )
    }
}
const WrappedRegistrationForm = Form.create()(Postbusiness);
export default WrappedRegistrationForm;

{/*<Geosuggest*/}
// fixtures={fixtures}
// onFocus={this.onFocus}
// onBlur={this.onBlur}
// onChange={this.onChange}
// onSuggestSelect={this.onSuggestSelect}
// onSuggestNoResults={this.onSuggestNoResults}
// location={new google.maps.LatLng(53.558572, 9.9278215)}
// radius="20"
// />