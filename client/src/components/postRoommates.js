import React, { Component } from 'react';
import App from '../App';
// import {Cascader, Form, Input} from "antd";
import {
    Form,
    Input,
    Tooltip,
    Icon,
    Cascader,
    Select,
    InputNumber,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete,
    Upload,
    Modal
} from 'antd';
import AsyncStorage from "@callstack/async-storage/lib/index";
import sha1 from "sha1";
import superagent from "superagent";
import {HttpUtils} from "../Services/HttpUtils";

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
    constructor(props){
        super(props)
        this.state = {
            userId: '',
            desLength: 0,
            fileList: [],
            previewVisible: false,
            previewImage: '',
        }
    }

    componentWillMount(){
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

    checkValue(rule, value, callback) {
        this.setState({desLength: value ? value.length : 0})
        callback();
    }

    checkCheckBox = (rule, value, callback) => {
        console.log(value);
        if (!value) {
            callback('Please check at least one!');
        } else {
            callback();
        }
    };

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
        this.props.form.validateFieldsAndScroll((err, values) => {
        	if(!err) {
                this.funcForUpload(values)
            }
		})
    }

    async funcForUpload(values){
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

    async postData(values, response) {
        const {userId} = this.state;
		var obj = {
            user_id: userId,
            address: values.address,
            category: values.category[0],
            city: values.city[0],
            condition: values.condition[0],
            contactInfo: values.contactInfo,
            contactMode: values.contactMode,
            delivery: values.delivery,
            description: values.description,
            make: values.make,
            modelName: values.modelName,
            number: values.number,
            postingTitle: values.postingTitle,
            postingType: values.postingType[0],
            price: values.price,
            arr_url: response ? response : []
        }
        console.log(obj, 'objjjjjjjjjjjjjj')
        var req = await HttpUtils.post('postbusinessdata', obj)
        this.props.form.resetFields();
    }

	render(){
        const { previewVisible, previewImage, fileList, desLength } = this.state;
        const {getFieldDecorator} = this.props.form;
        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">Upload</div>
            </div>
        );

        const optionsContact = [
            { label: 'email', value: 'email' },
            { label: 'phone', value: 'phone' },
            { label: 'text', value: 'text' },
        ];
        const optionsDelivery = [
            { label: 'Pickup', value: 'pickup' },
            { label: 'Free Shipping', value: 'freeShipping' },
            { label: 'Local Delivery', value: 'localDelivery' },
            { label: 'Not Applicable', value: 'notApplicable' },
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

		return(
            <div>
                {/*================================App component include Start===========================*/}
                <App/>
                {/*================================App component include End===========================*/}

                {/*================================post business form start============================*/}
                <div className="container">
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <div className="panel-group">
                            <div className="panel panel-default">
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
                                        label="Posting Type"
                                    >
                                        {getFieldDecorator('postingType', {
                                            initialValue: ['zhejiang', 'hangzhou', 'xihu'],
                                            rules: [{ type: 'array', required: true, message: 'Please select your Posting Type!' }],
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
                                        label="Price"
                                    >
                                        {getFieldDecorator('price', {
                                            rules: [{ required: true, message: 'Please input your Price!', whitespace: true }],
                                        })(
                                        	<div>
												<Col span={5}>
													<InputNumber  />
												</Col>
												<Col span={5}>
                                                    <Checkbox>(Hide Price)</Checkbox>
												</Col>
                                            </div>
                                        )}
                                    </FormItem>
                                </div>
                            </div>
                            <br/>
                            <div className="panel panel-default">
                                <div className="panel-body">
                                    <FormItem
                                        {...formItemLayout}
                                        label="Condition"
                                    >
                                        {getFieldDecorator('condition', {
                                            initialValue: ['zhejiang', 'hangzhou', 'xihu'],
                                            rules: [{ type: 'array', required: true, message: 'Please select your Condition!' }],
                                        })(
                                            <Cascader options={category} />
                                        )}
                                    </FormItem>
                                    <FormItem
                                        {...formItemLayout}
                                        label="Make"
                                    >
                                        {getFieldDecorator('make', {
                                            rules: [{ required: true, message: 'Please input your Make!', whitespace: true }],
                                        })(
                                            <Input  />
                                        )}
                                    </FormItem>
                                    <FormItem
                                        {...formItemLayout}
                                        label="Model Name"
                                    >
                                        {getFieldDecorator('modelName', {
                                            rules: [{ required: true, message: 'Please input your Model Name!', whitespace: true }],
                                        })(
                                            <Input  />
                                        )}
                                    </FormItem>
                                    <FormItem
                                        {...formItemLayout}
                                        label="Number"
                                    >
                                        {getFieldDecorator('number', {
                                            rules: [{ required: true, message: 'Please input your Number!', whitespace: true }],
                                        })(
                                            <Input  />
                                        )}
                                    </FormItem>
									<FormItem
                                        {...formItemLayout}
                                        label="Size/Dimensions"
                                    >
                                        {getFieldDecorator('dimensions', {
                                            rules: [{ required: true, message: 'Please input your Size/Dimensions!', whitespace: true }],
                                        })(
                                            <InputGroup compact>
                                                <Input style={{ width: '20%' }} placeholder="Length" />
                                                <Input style={{ width: '20%' }} placeholder="Width"/>
                                                <Input style={{ width: '20%' }} placeholder="Height"/>
                                            </InputGroup>
                                        )}
                                    </FormItem>
									<FormItem
                                        {...formItemLayout}
                                        label="Size/Dimensions"
                                    >
                                        {getFieldDecorator('dimensions', {
                                            rules: [{ required: true, message: 'Please input your Size/Dimensions!', whitespace: true }],
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
                                </div>
                            </div>
                            <br/>
                            <div className="panel panel-default">
                                <div className="panel-body">
                                    <FormItem
                                        {...formItemLayout}
                                        label="Contact Info"
                                    >
                                        {getFieldDecorator('contactInfo', {
                                            rules: [{ required: true, message: 'Please input your Contact Info!', whitespace: true }],
                                        })(
                                            <div>
                                                <Col span={5}>
                                                    <Input placeholder="name" />
                                                </Col>
												&emsp;
                                                <Col span={8}>
                                                    <Input placeholder="email"/>
                                                </Col>
                                                &emsp;
												<Col span={5}>
                                                    <Input placeholder="number"/>
                                                </Col>
											</div>
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
									<FormItem
                                        {...formItemLayout}
                                        label="Delivery"
                                    >
                                        {getFieldDecorator('delivery', {
                                            rules: [{ validator: this.checkCheckBox }],
                                        })(
                                            <CheckboxGroup options={optionsDelivery} />
                                        )}
                                    </FormItem>
									<FormItem
                                        {...formItemLayout}
                                        label="Address"
                                    >
                                        {getFieldDecorator('address', {
                                            rules: [{ required: true, message: 'Please input your Address!', whitespace: true }],
                                        })(
                                            <div>
                                                <Col span={12}>
                                                    <Input />
                                                </Col>
                                                <Col span={5}>
                                                    <Checkbox>(Hide Price)</Checkbox>
                                                </Col>
                                            </div>
                                        )}
                                    </FormItem>
                                </div>
                            </div>
                            <div className="row center_global">
                                <button className="btn color_button">Submit</button>
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