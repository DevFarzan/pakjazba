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
    Modal,
    TimePicker
} from 'antd';
import App from '../../App';
import Geosuggest from 'react-geosuggest';
import Burgermenu from '../header/burgermenu';
import Footer from '../footer/footer';
import sha1 from "sha1";
import superagent from "superagent";
import axios from "axios";
import { Redirect } from 'react-router';
import {HttpUtils} from '../../Services/HttpUtils';
import AsyncStorage from "@callstack/async-storage/lib/index";
import moment from 'moment'

const { TextArea } = Input;
const FormItem = Form.Item
const category = [{
	value: 'Advertising Agency',
    label: 'Advertising Agency'
},{
    value: 'Answering Service',
    label: 'Answering Service',
},{
    value: 'Audio Visual Equipment Hire',
    label: 'Audio Visual Equipment Hire',
},{value:'Branding Consultant',label:'Branding Consultant'},{
    value:'Business Advisor',
    label:'Business Advisor',
},{
    value:'Business Consultant',
    label:'Business Consultant',
},{
    label:'Business Franchise Consultant',
    value:'Business Franchise Consultant',
},{
    label:'Business Training Service',
    value:'Business Training Service',
},{
    value:'Car Body Shop',
    label:'Car Body Shop',
},{
    value:'Car Detailer',
    label:'Car Detailer',
},{
    value:'Car Sales Showroom',
    label:'Car Sales Showroom',
},{
    value:'Caterer',
    label:'Caterer',
},{
    value:'Charity',
    label:'Charity',
},{
    value:'Chauffeur',
    label:'Chauffeur',
},{
    value:'Chef',
    label:'Chef',
},{
    value:'Clothing Supplier',
    label:'Clothing Supplier',
},{
    value:'Computer Networks Installer',
    label:'Computer Networks Installer',
},{
    value:'Computer Repair Centre',
    label:'Computer Repair Centre',
},{
    value:'Computer Software Developer',
    label:'Computer Software Developer',
},{
    value:'Computer Software Sales',
    label:'Computer Software Sales',
},{
    value:'Computer Training Provider',
    label:'Computer Training Provider',
},{
    value:'Concierge',
    label:'Concierge',
},{
    value:'Copywriter',
    label:'Copywriter',
},{
    value:'Courier',
    label:'Courier',
},{
    value:'Custom Clothing Company',
    label:'Custom Clothing Company',
},{
    value:'Data Cabling Installer',
    label:'Data Cabling Installer',
},{
   value:'Detective Agency',
   label:'Detective Agency' 
},{
    value:'Email Marketing Service',
    label:'Email Marketing Service',
},{
    value:'Executive Coach',
    label:'Executive Coach',
},{
    value:'Fire Safety Training Provider',
    label:'Fire Safety Training Provider',
},{
    value:'Furniture Shop',
    label:'Furniture Shop',
},{
    value:'Graphic Designer',
    label:'Graphic Designer',
},{
    value:'Hotel',
    label:'Hotel',
},{
    value:'Human Resources Consultant',
    label:'Human Resources Consultant',
},{
    value:'Illustrator',
    label:'Illustrator',
},{
    value:'Information Technology Consultant',
    label:'Information Technology Consultant',
},{
    value:'Internet Marketing Consultant',
    label:'Internet Marketing Consultant',
},{
    value:'Internet Service Provider',
    label:'Internet Service Provider',
},{
    value:'IT Support Services',
    label:'IT Support Services',
},{
    value:'Language Tutor',
    label:'Language Tutor',
},{
    value:'Leadership Development Consultant',
    label:'Leadership Development Consultant',
},{
    value:'Limousine Service',
    label:'Limousine Service',
},{
    value:'Local Magazine or Directory',
    label:'Local Magazine or Directory',
},{
    value:'Mailing Service',
    label:'Mailing Service',
},{
    value:'Management Consultant',
    label:'Management Consultant',
},{
    value:'Market Research Agency',
    label:'Market Research Agency',
},{
    value:'Marketing Consultant',
    label:'Marketing Consultant',
},{
    value:'Mediation Service',
    label:'Mediation Service',
},{
    value:'Mobile Phone Supplier',
    label:'Mobile Phone Supplier',
},{
    value:'Office Equipment Leasing',
    label:'Office Equipment Leasing',
},{
    value:'Office Furnisher',
    label:'Office Furnisher',
},{
    value:'Office Machines Company',
    label:'Office Machines Company',
},{
    value:'Office Products Supplier',
    label:'Office Products Supplier',
},{
    value:'Personal Assistant',
    label:'Personal Assistant',
},{
    value:'Printer',
    label:'Printer',
},{
    value:'Printer Ink Cartridges Supplier',
    label:'Printer Ink Cartridges Supplier',
},{
    value:'Professional Organiser',
    label:'Professional Organiser',
},{
    value:'Professional Speaker',
    label:'Professional Speaker',
},{
    value:'Promotional Goods Supplier',
    label:'Promotional Goods Supplier',
},{
    value:'Public Relations Agency',
    label:'Public Relations Agency',
},{
    value:'Public Speaking Coach',
    label:'Public Speaking Coach',
},{
    value:'Publicist',
    label:'Publicist',
},{
    value:'Radio Station',
    label:'Radio Station',
},{
    value:'Recruitment Agency',
    label:'Recruitment Agency',
},{
    value:'Restaurant',
    label:'Restaurant',
},{
    value:'Sales Training Consultant',
    label:'Sales Training Consultant',
},{
    value:'Search Engine Optimisation Consultant',
    label:'Search Engine Optimisation Consultant',
},{
    value:'Security Guarding Agency',
    label:'Security Guarding Agency',
},{
    value:'Security Personnel Agency',
    label:'Security Personnel Agency',
},{
    value:'Shop Fitter',
    label:'Shop Fitter',
},{
    value:'Sign Company',
    label:'Sign Company',
},{
    value:'Social Media Marketing Agency',
    label:'Social Media Marketing Agency',
},{
    value:'Solicitor',
    label:'Solicitor',
},{
    value:'Storage Facility',
    label:'Storage Facility',
},{
    value:'Tailor',
    label:'Tailor',
},{
    value:'Taxi Service',
    label:'Taxi Service',
},{
    value:'Telecommunications Service',
    label:'Telecommunications Service',
},{
    value:'Telemarketing Service',
    label:'Telemarketing Service',
},{
    value:'Tour Operator',
    label:'Tour Operator',
},{
    value:'Translator',
    label:'Translator',
},{
    value:'Trophie Supplier',
    label:'Trophie Supplier',
},{
    value:'Utilities Broker',
    label:'Utilities Broker',
},{
    value:'Vending Machine Supplier',
    label:'Vending Machine Supplier',
},{
    value:'Video Production Service',
    label:'Video Production Service',
},{
    value:'Virtual Assistant',
    label:'Virtual Assistant',
},{
    value:'Water Cooler Supplier',
    label:'Water Cooler Supplier',
},{
    value:'Web Designer',
    label:'Web Designer',
},{
    value:'Web Developer',
    label:'Web Developer',
},{
    value:'Web Hosting Provider',
    label:'Web Hosting Provider',
},{
    value:'Writer',
    label:'Writer',
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
            socFac: '',
            socGoo: '',
            socLin: '',
            profileId: '',
            openingTime: '',
            closingTime: '',
            imageList: []
        };
    }


    // componentWillMount(){
    //     this.handleLocalStorage();
    // }

    componentDidMount(){
        this.handleLocalStorage();
        let data = this.props.location.state;
        if(data) {
            this.setState({
                dataAddress: data.address,
                dataCity: data.city,
                dataState: data.state,
                dataZip: data.zipcode,
                dataFname: data.firstname,
                dataLname: data.lastname,
                dataBname: data.businessname,
                dataBnumber: data.businessnumber,
                dataBemailId: data.businessemailid,
                dataBaddress: data.businessaddress,
                dataBOwnernamae: data.businessownername,
                dataBemail: data.businessemail,
                dataCategory: [data.businesscategory],
                dataDescription: data.description ? data.description : 'write some description',
                socFac: data.socialFaceBook ? data.socialFaceBook : '',
                socGoo: data.socialGoogle ? data.socialGoogle : '',
                socLin: data.socialLinkIn ? data.socialLinkIn : '',
                imageList: data.businessImages,
                dataOtime: data.openingTime,
                dataCtime: data.closingTime,
            })
        }
    }

    deleteImage(e){
        let { imageList } = this.state;
        imageList = imageList.filter((elem) => elem !== e)
        this.setState({imageList: imageList})
    }

    handleLocalStorage = () =>{
        AsyncStorage.getItem('user')
            .then((obj) => {
                var userObj = JSON.parse(obj)
                if(!!userObj) {
                    this.setState({
                        userId: userObj._id,
                        profileId: userObj.profileId
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

    onChangeSocial(e){
        let target = e.target.id;
        let value = e.target.value;
        if(target === 'socFac'){
            this.setState({
                socFac: value
            })
        }else if(target === 'socGoo'){
            this.setState({
                socGoo: value
            })
        }else if(target === 'socLin'){
            this.setState({
                socLin: value
            })
        }
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

    validateTime(rule, value, callback){
        if (!(!!value)) {
            callback('Please select your Time!');
        } else {
            callback();
        }
    }

    async postData(values, response){
        const { userId, socLin, socGoo, socFac, profileId, openingTime, closingTime } = this.state;
        var obj = {
            user_id: userId,
            profileId: profileId,
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
            openingTime: openingTime,
            closingTime: closingTime,
            socialFaceBook: socFac,
            socialGoogle: socGoo,
            socialLinkIn: socLin,
            arr_url: response ? response : []
        }
        console.log('businessData:'+obj);
        var req = await HttpUtils.post('postbusinessdata', obj)

        if(req.code === 200){
            this.props.form.resetFields();
            this.openNotification()
            this.setState({
                msg: true,
                socFac: '',
                socGoo: '',
                socLin: '',
                openingTime: '',
                closingTime: ''
            })
        }
    }

    onOpeningTime(time, timeString){
        this.setState({
            openingTime: timeString,
        })
    }

    onClosingTime(time, timeString){
        this.setState({
            closingTime: timeString,
        })
    }

    openNotification() {
        notification.open({
            message: 'Success ',
            description: 'Your need is submited successfully, Kindly visit your profile',
        });
    };

    checkValue(rule, value, callback) {
        this.setState({desLength: value.length && value.length})
        callback();
    }

    render() {
        const { previewVisible, previewImage, fileList, desLength, socFac, socGoo,socLin } = this.state;
        const {getFieldDecorator} = this.props.form;
        if (this.state.msg === true) {
            return <Redirect to='/' />
        }

        const uploadedImages = (
            <div style={{display: 'flex'}}>
                {this.state.imageList.map((elem) => {
                    return(
                        <div>
                            <img alt='img1' style={{width: '100px', height: '100px'}} src={elem} />
                            <span
                                onClick={this.deleteImage.bind(this, elem)}
                                style={{position: 'absolute', marginTop: '10px', marginLeft: '-14px', cursor: 'pointer', color: 'white'}}>
                                X
                            </span>
                        </div>
                    )
                })}
            </div>
        )

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
                        <div className="panel-group" style={{paddingTop:"104px"}}>
                            <div className="panel panel-default">
                                <div className="main_c_panel">Add Business<br/>
                                    Find all your Local Business in one place
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
                                                initialValue: this.state.dataAddress,
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
                                                initialValue: this.state.dataCity,
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
                                                initialValue: this.state.dataState,
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
                                                initialValue: this.state.dataZip,
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
                                                    initialValue: this.state.dataFname,
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
                                                    initialValue: this.state.dataLname,
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
                                                    initialValue: this.state.dataBname,
                                                    rules: [{ required: true, message: 'Please input your Business Name!', whitespace: true }],
                                                })(
                                                    <Input  />
                                                )}
                                            </FormItem>
                                            <div className='row'>
                                                <div className="col-md-3">
                                                    <label htmlFor="email" style={{fontColor: 'black', float: 'right'}}>Opening & closing Time:</label>
                                                </div>
                                                <div className="col-md-3">
                                                    <FormItem>
                                                        {getFieldDecorator('openingTime', {
                                                            initialValue: moment(this.state.dataOtime, 'HH:mm:ss'),
                                                            rules: [{ validator: this.validateTime.bind(this) }],
                                                        })(
                                                            <TimePicker placeholder="Opening Time" use12Hours format="h:mm:ss A" onChange={this.onOpeningTime.bind(this)} />
                                                        )}
                                                    </FormItem>
                                                </div>
                                                <div className="col-md-3">
                                                    <FormItem>
                                                        {getFieldDecorator('closingTime', {
                                                            initialValue: moment(this.state.dataCtime, 'HH:mm:ss'),
                                                            rules: [{ validator: this.validateTime.bind(this) }],
                                                        })(
                                                            <TimePicker placeholder="Closing Time" use12Hours format="h:mm:ss A" onChange={this.onClosingTime.bind(this)} />
                                                        )}
                                                    </FormItem>
                                                </div>
                                                <div className="col-md-3"></div>
                                            </div>
                                            <FormItem
                                                {...formItemLayout}
                                                label="Business Number"
                                            >
                                                {getFieldDecorator('businessNumber', {
                                                    initialValue: this.state.dataBnumber,
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
                                                    initialValue: this.state.dataBemailId,
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
                                                    initialValue: this.state.dataBaddress,
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
                                                    initialValue: this.state.dataBOwnernamae,
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
                                                    initialValue: this.state.dataBemail,
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
                                                    initialValue: this.state.dataCategory,
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
                                                    initialValue: this.state.dataDescription,
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
                                    {/*==========social links box start===========*/}
                                        <div className="panel panel-default">
                                        <div className="panel-heading bold_c_text"><Icon type="info-circle"/><span
                                            className="margin_font_location">Social Links</span></div>
                                        <div className="panel-body">
                                            <FormItem
                                                {...formItemLayout}
                                                label="Facebook"
                                            >
                                                <Input id='socFac' value={socFac} onChange={this.onChangeSocial.bind(this)}/>
                                            </FormItem>
                                            <FormItem
                                                {...formItemLayout}
                                                label="Google"
                                            >
                                                <Input id='socGoo' value={socGoo} onChange={this.onChangeSocial.bind(this)} />
                                            </FormItem>
                                            <FormItem
                                                {...formItemLayout}
                                                label="Linkedin"
                                            >
                                                <Input id='socLin' value={socLin} onChange={this.onChangeSocial.bind(this)} />
                                            </FormItem>
                                        </div>
                                    </div>
                                    {/*==========social links box end===========*/}
                                    {/*==========upload panel start=========*/}
                                    <div className="panel panel-default">
                                        <div className="panel-heading bold_c_text"><Icon type="info-circle"/><span
                                            className="margin_font_location">Upload</span></div>
                                        <div className="panel-body">
                                            <Upload
                                                action="//jsonplaceholder.typicode.com/posts/"
                                                listType="picture-card"
                                                fileList={fileList}
                                                onPreview={this.handlePreview}
                                                onChange={this.handleChange}
                                            >
                                                {this.state.imageList.length + fileList.length >= 4 ? null : uploadButton}
                                            </Upload>
                                            <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                                                <img alt="example" style={{ width: '100%' }} src={previewImage} />
                                            </Modal>
                                            {uploadedImages}
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