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
    Upload,
    Modal
} from 'antd';
import App from '../App';
import Geosuggest from 'react-geosuggest';
import sha1 from "sha1";
import superagent from "superagent";
import axios from "axios";

const FormItem = Form.Item
const category = [{
	value: 'imported',
    label: 'imported'
},{
    value: 'local',
    label: 'local',
}];

class Postbusiness extends Component {
    state = {
        previewVisible: false,
        previewImage: '',
        fileList: [],
        arrURL: [],
        lengthFileList : 0,
    };
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
        console.log('hellooooooo')
        this.setState({ previewVisible: false })
    }

    handlePreview = (file) => {
        console.log('9999999999999999')
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,
        });
    }

    handleChange = ({ fileList }) => {
        this.setState({fileList})
    }
    //--------------upload functions end ---------------------

    //--------------function for cloudnary url ---------------
    uploadFile = (files) =>{
        console.log(files, 'filessssssssssssss')
        var { arrURL, fileList } = this.state;
        console.log('uploadFile:')
        const image = files.originFileObj
        console.log(image);

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

        let uploadRequest = superagent.post(url)
        uploadRequest.attach('file', image)

        Object.keys(params).forEach((key) =>{
            uploadRequest.field(key, params[key])
        })
        // this.setState({
        //     fileList: files,
        // })
        uploadRequest.end((err, resp) =>{
            if(err){
                alert(err)
                return
            }else {
                console.log('Upload Complete: '+JSON.stringify(resp.body.url))
                return JSON.stringify(resp.body.url)
            }
            // arrURL.push(JSON.stringify(resp.body.url))
            // // fileList.push(files[0])
            // console.log('Upload Complete: '+JSON.stringify(resp.body.url))
            // this.setState({
            //     // imageresponse:JSON.stringify(resp.body.url)
            //     lengthFileList : fileList.length,
            //
            //     arrURL: arrURL
            // })
        })
    }

    //-----------------cloudnary function end ------------------

    handleSubmit = (e) => {
        e.preventDefault();
        const { fileList } = this.state;
        var cloudURL = [];
            console.log(fileList, 'eeeeeeeeeeeeeeeeee')
        fileList.map((val) => {
            // new Promise((resolve, reject) => {
                var res = this.uploadFile(val)
                console.log(val, 'resssssssssss')
            // })

            // cloudURL.push(res)
            // console.log(cloudURL, 'cloudURLLLLLLLLLLLL')
        })
        this.props.form.validateFieldsAndScroll((err, values) => {
            console.log(err, 'errrrrrr')
            console.log(values, 'valuesssssss')
        })
    }

    render() {
        const { previewVisible, previewImage, fileList, arrURL } = this.state;
        // console.log(arrURL, 'arrUrlllllllllllll')
        const {getFieldDecorator} = this.props.form;
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
                <App/>
                {/*================================App component include End===========================*/}

                {/*================================post business form start============================*/}
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
                                    <button className="btn color_button">Sign up</button>
                                </div>
                                {/*main panel content*/}
                            </div>
                        </div>
                        {/*panel-group*/}
                    </Form>
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