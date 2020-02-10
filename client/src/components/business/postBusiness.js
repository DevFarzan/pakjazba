// /* global google */
import React, { Component } from 'react';
import {
    Form,
    Input,
    Icon,
    Cascader,
    Spin,
    notification,
    Upload,
    Modal,
    TimePicker,
    Anchor,
} from 'antd';
// import Geosuggest from 'react-geosuggest';
import HeaderMenu from '../header/headermenu';
import sha1 from "sha1";
import superagent from "superagent";
import { Redirect } from 'react-router';
import { HttpUtils } from '../../Services/HttpUtils';
import AsyncStorage from "@callstack/async-storage/lib/index";
import moment from 'moment';
import stateCities from "../../lib/countrycitystatejson";
import './postBusiness.css';

const { Link } = Anchor;

const handleClick = (e, link) => {
    e.preventDefault();
    console.log(link);
};

//const stateCities= require('countrycitystatejson')
const { TextArea } = Input;
const FormItem = Form.Item
const category = [{
    value: 'Advertising Agency',
    label: 'Advertising Agency'
}, {
    value: 'Answering Service',
    label: 'Answering Service',
}, {
    value: 'Audio Visual Equipment Hire',
    label: 'Audio Visual Equipment Hire',
}, { value: 'Branding Consultant', label: 'Branding Consultant' }, {
    value: 'Business Advisor',
    label: 'Business Advisor',
}, {
    value: 'Business Consultant',
    label: 'Business Consultant',
}, {
    label: 'Business Franchise Consultant',
    value: 'Business Franchise Consultant',
}, {
    label: 'Business Training Service',
    value: 'Business Training Service',
}, {
    value: 'Car Body Shop',
    label: 'Car Body Shop',
}, {
    value: 'Car Detailer',
    label: 'Car Detailer',
}, {
    value: 'Car Sales Showroom',
    label: 'Car Sales Showroom',
}, {
    value: 'Caterer',
    label: 'Caterer',
}, {
    value: 'Charity',
    label: 'Charity',
}, {
    value: 'Chauffeur',
    label: 'Chauffeur',
}, {
    value: 'Chef',
    label: 'Chef',
}, {
    value: 'Clothing Supplier',
    label: 'Clothing Supplier',
}, {
    value: 'Computer Networks Installer',
    label: 'Computer Networks Installer',
}, {
    value: 'Computer Repair Centre',
    label: 'Computer Repair Centre',
}, {
    value: 'Computer Software Developer',
    label: 'Computer Software Developer',
}, {
    value: 'Computer Software Sales',
    label: 'Computer Software Sales',
}, {
    value: 'Computer Training Provider',
    label: 'Computer Training Provider',
}, {
    value: 'Concierge',
    label: 'Concierge',
}, {
    value: 'Copywriter',
    label: 'Copywriter',
}, {
    value: 'Courier',
    label: 'Courier',
}, {
    value: 'Custom Clothing Company',
    label: 'Custom Clothing Company',
}, {
    value: 'Data Cabling Installer',
    label: 'Data Cabling Installer',
}, {
    value: 'Detective Agency',
    label: 'Detective Agency'
}, {
    value: 'Email Marketing Service',
    label: 'Email Marketing Service',
}, {
    value: 'Executive Coach',
    label: 'Executive Coach',
}, {
    value: 'Fire Safety Training Provider',
    label: 'Fire Safety Training Provider',
}, {
    value: 'Furniture Shop',
    label: 'Furniture Shop',
}, {
    value: 'Graphic Designer',
    label: 'Graphic Designer',
}, {
    value: 'Hotel',
    label: 'Hotel',
}, {
    value: 'Human Resources Consultant',
    label: 'Human Resources Consultant',
}, {
    value: 'Illustrator',
    label: 'Illustrator',
}, {
    value: 'Information Technology Consultant',
    label: 'Information Technology Consultant',
}, {
    value: 'Internet Marketing Consultant',
    label: 'Internet Marketing Consultant',
}, {
    value: 'Internet Service Provider',
    label: 'Internet Service Provider',
}, {
    value: 'IT Support Services',
    label: 'IT Support Services',
}, {
    value: 'Language Tutor',
    label: 'Language Tutor',
}, {
    value: 'Leadership Development Consultant',
    label: 'Leadership Development Consultant',
}, {
    value: 'Limousine Service',
    label: 'Limousine Service',
}, {
    value: 'Local Magazine or Directory',
    label: 'Local Magazine or Directory',
}, {
    value: 'Mailing Service',
    label: 'Mailing Service',
}, {
    value: 'Management Consultant',
    label: 'Management Consultant',
}, {
    value: 'Market Research Agency',
    label: 'Market Research Agency',
}, {
    value: 'Marketing Consultant',
    label: 'Marketing Consultant',
}, {
    value: 'Mediation Service',
    label: 'Mediation Service',
}, {
    value: 'Mobile Phone Supplier',
    label: 'Mobile Phone Supplier',
}, {
    value: 'Office Equipment Leasing',
    label: 'Office Equipment Leasing',
}, {
    value: 'Office Furnisher',
    label: 'Office Furnisher',
}, {
    value: 'Office Machines Company',
    label: 'Office Machines Company',
}, {
    value: 'Office Products Supplier',
    label: 'Office Products Supplier',
}, {
    value: 'Personal Assistant',
    label: 'Personal Assistant',
}, {
    value: 'Printer',
    label: 'Printer',
}, {
    value: 'Printer Ink Cartridges Supplier',
    label: 'Printer Ink Cartridges Supplier',
}, {
    value: 'Professional Organiser',
    label: 'Professional Organiser',
}, {
    value: 'Professional Speaker',
    label: 'Professional Speaker',
}, {
    value: 'Promotional Goods Supplier',
    label: 'Promotional Goods Supplier',
}, {
    value: 'Public Relations Agency',
    label: 'Public Relations Agency',
}, {
    value: 'Public Speaking Coach',
    label: 'Public Speaking Coach',
}, {
    value: 'Publicist',
    label: 'Publicist',
}, {
    value: 'Radio Station',
    label: 'Radio Station',
}, {
    value: 'Recruitment Agency',
    label: 'Recruitment Agency',
}, {
    value: 'Restaurant',
    label: 'Restaurant',
}, {
    value: 'Sales Training Consultant',
    label: 'Sales Training Consultant',
}, {
    value: 'Search Engine Optimisation Consultant',
    label: 'Search Engine Optimisation Consultant',
}, {
    value: 'Security Guarding Agency',
    label: 'Security Guarding Agency',
}, {
    value: 'Security Personnel Agency',
    label: 'Security Personnel Agency',
}, {
    value: 'Shop Fitter',
    label: 'Shop Fitter',
}, {
    value: 'Sign Company',
    label: 'Sign Company',
}, {
    value: 'Social Media Marketing Agency',
    label: 'Social Media Marketing Agency',
}, {
    value: 'Solicitor',
    label: 'Solicitor',
}, {
    value: 'Storage Facility',
    label: 'Storage Facility',
}, {
    value: 'Tailor',
    label: 'Tailor',
}, {
    value: 'Taxi Service',
    label: 'Taxi Service',
}, {
    value: 'Telecommunications Service',
    label: 'Telecommunications Service',
}, {
    value: 'Telemarketing Service',
    label: 'Telemarketing Service',
}, {
    value: 'Tour Operator',
    label: 'Tour Operator',
}, {
    value: 'Translator',
    label: 'Translator',
}, {
    value: 'Trophie Supplier',
    label: 'Trophie Supplier',
}, {
    value: 'Utilities Broker',
    label: 'Utilities Broker',
}, {
    value: 'Vending Machine Supplier',
    label: 'Vending Machine Supplier',
}, {
    value: 'Video Production Service',
    label: 'Video Production Service',
}, {
    value: 'Virtual Assistant',
    label: 'Virtual Assistant',
}, {
    value: 'Water Cooler Supplier',
    label: 'Water Cooler Supplier',
}, {
    value: 'Web Designer',
    label: 'Web Designer',
}, {
    value: 'Web Developer',
    label: 'Web Developer',
}, {
    value: 'Web Hosting Provider',
    label: 'Web Hosting Provider',
}, {
    value: 'Writer',
    label: 'Writer',
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
            imageList: [],
            objectId: '',
            statesUS: [],
            citiesUS: [],
            loader: false,
            dataOtime: '00:00:00',
            dataCtime: '00:00:00',
            objData: {},
            tabsScroll: window.scrollTo(0, 0),
            windScrolBusines: '',
            start: 0,
            end: 0
        };
    }
    componentWillMount() {
        const { start, end } = this.state;
        window.scrollTo(start, end);

    }

    componentDidMount() {
        this.setState({windScrolBusines: window.scrollTo(0, 0) })
        window.scrollTo(0, 0);
        this.handleLocalStorage();
        let data = this.props.location.state;
        if (data) {
            this.setState({
                dataAddress: data.address,
                dataCity: [data.city],
                dataState: [data.state],
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
                objectId: data._id
            })
        }
    }

    deleteImage(e) {
        let { imageList } = this.state;
        imageList = imageList.filter((elem) => elem !== e)
        this.setState({ imageList: imageList })
    }

    handleLocalStorage = () => {
        let states = stateCities.getStatesByShort('US');
        states = states.map((elem) => {
            return {
                label: elem,
                value: elem
            }
        })
        AsyncStorage.getItem('user')
            .then((obj) => {
                let userObj = JSON.parse(obj)
                if (!!userObj) {
                    this.setState({
                        userId: userObj._id,
                        profileId: userObj.profileId,
                        statesUS: states
                    })
                }
            })
    }
    //-------- GeoSuggest fuctions start ------------

    /**
     * When the input receives focus
     */
    onFocus() {
        // console.log('onFocus'); // eslint-disable-line
    }

    /**
     * When the input loses focus
     * @param {String} value The user input
     */
    onBlur(value) {
        // console.log('onBlur', value); // eslint-disable-line
    }

    /**
     * When the input got changed
     * @param {String} value The new value
     */
    onChange(value) {
        // console.log('input changes to :' + value); // eslint-disable-line
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
        // console.log('onSuggestNoResults for :' + userInput); // eslint-disable-line
    }

    //-------------- GeoSuggest functions end -----------------

    //-------------- upload functions start -------------------
    handleCancel = () => {
        this.setState({ previewVisible: false })
    }

    handlePreview = (file) => {
        this.setState({
            previewImage: file.url || file.thumbUrl || file,
            previewVisible: true,
        });
    }


    handleChange = ({ fileList }) => {
        this.setState({ fileList })
    }
    //--------------upload functions end ---------------------


    //--------------function for cloudnary url ---------------
    uploadFile = (files) => {
        const image = files.originFileObj
        const cloudName = 'dxk0bmtei'
        const url = 'https://api.cloudinary.com/v1_1/' + cloudName + '/image/upload'
        const timestamp = Date.now() / 1000
        const uploadPreset = 'toh6r3p2'
        const paramsStr = 'timestamp=' + timestamp + '&upload_preset=' + uploadPreset + 'U8W4mHcSxhKNRJ2_nT5Oz36T6BI'
        const signature = sha1(paramsStr)
        const params = {
            'api_key': '878178936665133',
            'timestamp': timestamp,
            'upload_preset': uploadPreset,
            'signature': signature
        }

        return new Promise((res, rej) => {
            let uploadRequest = superagent.post(url)
            uploadRequest.attach('file', image)
            Object.keys(params).forEach((key) => {
                uploadRequest.field(key, params[key])
            })

            uploadRequest.end((err, resp) => {
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
                this.setState({ loader: true })
                if (fileList.length) {
                    this.postDataWithURL(values)
                } else {
                    this.postData(values)
                }
            }
        })
    }

    onChangeSocial(e) {
        let target = e.target.id;
        let value = e.target.value;
        if (target === 'socFac') {
            this.setState({
                socFac: value
            })
        } else if (target === 'socGoo') {
            this.setState({
                socGoo: value
            })
        } else if (target === 'socLin') {
            this.setState({
                socLin: value
            })
        }
    }

    async postDataWithURL(values) {
        const { fileList } = this.state;

        Promise.all(fileList.map((val) => {
            return this.uploadFile(val).then((result) => {
                return result.body.url
            })
        })).then((results) => {
            this.postData(values, results)
        })
    }

    validateTime(rule, value, callback) {
        if (!(!!value)) {
            callback('Please select your Time!');
        } else {
            callback();
        }
    }

    validateNumber(rule, value, callback) {
        if (isNaN(value)) {
            callback('Please type Numbers');
        } else {
            callback()
        }
    }

    async postData(values, response) {
        const { userId, socLin, socGoo, socFac, profileId, openingTime, closingTime, objectId, imageList } = this.state;
        let obj = {
            user_id: userId,
            profileId: profileId,
            address: values.address,
            businessAddress: values.businessAddress,
            businessCategory: values.businessCategory[0],
            businessEmail: values.businessEmail,
            businessId: values.businessId,
            businessName: values.businessName,
            firstName: values.firstName,
            lastName: values.lastName,
            businessNumber: values.businessNumber,
            businessOwner: values.businessOwner,
            description: values.description,
            city: values.city[0],
            state: values.state[0],
            zip: values.zip,
            openingTime: openingTime,
            closingTime: closingTime,
            socialFaceBook: socFac,
            socialGoogle: socGoo,
            socialLinkIn: socLin,
            arr_url: response ? [...response, ...imageList] : imageList,
            objectId: objectId,
            posted: moment().format('LL')
        }
        let req = await HttpUtils.post('postbusinessdata', obj)
        if (req.code === 200) {
            this.props.form.resetFields();
            this.openNotification()
            this.setState({
                objData: obj,
                msg: true,
                socFac: '',
                socGoo: '',
                socLin: '',
                openingTime: '',
                closingTime: '',
                loader: false
            })
        }
    }

    onOpeningTime(time, timeString) {
        this.setState({
            openingTime: timeString,
        })
    }

    onClosingTime(time, timeString) {
        this.setState({
            closingTime: timeString,
        })
    }

    openNotification() {
        notification.open({
            message: 'Success ',
            description: 'You have successfully submitted your ad',
        });
    };

    onChangeCat(value) {
        if (!!value.length) {
            let cities = stateCities.getCities('US', value[0])
            cities = cities.map((elem) => {
                return {
                    label: elem,
                    value: elem
                }
            })
            this.setState({
                citiesUS: cities
            })
        }
    }

    checkValue(rule, value, callback) {
        if (value) {
            this.setState({ desLength: value.length && value.length })
            callback();
        }
        else {
            callback('Please input your Description!')
        }

    }

    // ancharTabsScrolling = () => {
    //     this.setState({
    //         start: 600,
    //         end: 1600
    //     });
    // }

    render() {
        const { previewVisible, previewImage, fileList, desLength, socFac, socGoo, socLin, statesUS, citiesUS, objData } = this.state;
        const { getFieldDecorator } = this.props.form;
        if (this.state.msg === true) {
            return <Redirect to={{ pathname: '/detail_business', state: objData }} />
        }

        const uploadedImages = (
            <div style={{ display: 'flex' }}>
                {this.state.imageList.map((elem) => {
                    return (
                        <div className='insideDiv'>
                            <a>
                                <img alt='img1' src={elem} />
                                <span>
                                    <a><Icon title='Preview file'
                                        onClick={() => this.handlePreview(elem)} type="eye" theme="outlined"
                                        style={{
                                            zIndex: 10, transition: 'all .3s', fontSize: '16px', width: '16px',
                                            color: 'rgba(255, 255, 255, 0.85)', margin: '0 4px'
                                        }} />
                                    </a>
                                    <Icon title='Remove file' type='delete'
                                        onClick={this.deleteImage.bind(this, elem)}
                                        style={{
                                            zIndex: 10, transition: 'all .3s', fontSize: '16px', width: '16px',
                                            color: 'rgba(255, 255, 255, 0.85)', margin: '0 4px'
                                        }} />
                                </span>
                            </a>
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

        const antIcon = <Icon type="loading" style={{ fontSize: 24, marginRight: '10px' }} spin />;

        function filter(inputValue, path) {
            return (path.some(option => (option.label).toLowerCase().indexOf(inputValue.toLowerCase()) > -1));
        }

        const formItemLayout = {
            labelCol: {
                md: { span: 6 },
                xs: { span: 24 },
                sm: { span: 5 },
            },
            wrapperCol: {
                md: { span: 12 },
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };

        return (
            <div>
                {/*================================App component include Start===========================*/}
                <HeaderMenu />
                {/*================================post business form start============================*/}
                <div className="hidden-xs" style={{ width: "100%", height: "67px", marginTop: "3px" }}></div>
                <div className="col-lg-3 col-md-3 hidden-sm hidden-xs"></div>
                <div className="col-lg-2 col-md-2 hidden-sm hidden-xs" id="section1" style={{ marginLeft: '4%', marginTop: '128px', position: 'fixed', }}>
                    <Anchor className="" style={{ margin: '2%', backgroundColor: '#f6f6f6' }} onClick={this.ancharTabsScrolling}>
                        <Link href="#scrollChange1" title="General" />
                        <Link href="#scrollChange2" title="Location" />
                        <Link href="#scrollChange3" title="Business" />
                        <Link href="#scrollChange4" title="Social Links" />
                        <Link href="#scrollChange5" title="Upload" />
                    </Anchor>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <div className="" style={{ paddingTop: "74px", }}>{/*panel-group 37px*/}
                            <div style={{ textAlign: 'center' }}>
                                <h2 style={{ color: 'black', fontWeight: 'bold' }}>Your listing details</h2>
                            </div>
                            <div className="forSpace">{/*panel panel-default */}

                                <div className="">
                                    {/*==========main panel content=============*/}
                                    {/*==========location panel start=========*/}
                                    <div className="formRadius card scroll-container" id="scrollChange1">
                                        <div className="bold_c_text topRadius"
                                            style={{
                                                backgroundColor: 'white', color: 'black', padding: '2%',
                                                fontFamily: 'Crimson Text, serif !important', border: 'none',
                                                borderBottom: '1px solid #d9d9d9',
                                            }}>

                                            <i class="fa fa-info-circle iconStyle"></i>
                                            <span className="margin_font_location">General</span>
                                        </div>
                                        <div style={{ padding: '8px 0px 8px 0px', }}>

                                            <div className="row">
                                                <div className="col-xs-12 col-sm-6 col-md-6">
                                                    <label htmlFor="sel1">Business Category</label>
                                                    <FormItem
                                                    // {...formItemLayout}
                                                    // label="Business Category"

                                                    // style={{ padding: '2%' }}
                                                    >
                                                        {getFieldDecorator('businessCategory', {
                                                            initialValue: this.state.dataCategory,
                                                            rules: [{ type: 'array', required: true, message: 'Please select your Business Category!' }],
                                                        })(
                                                            <Cascader options={category} showSearch={{ filter }} />
                                                        )}
                                                    </FormItem>
                                                </div>
                                                <div className="col-xs-12 col-sm-6 col-md-6">
                                                    <label htmlFor="sel1">Description</label>
                                                    <FormItem
                                                    // {...formItemLayout}
                                                    // label="Description"

                                                    // style={{ padding: '2%' }}
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
                                                            <TextArea style={{ "marginBottom": "12px" }}
                                                                rows={6}
                                                                maxLength="500"
                                                            />
                                                        )}
                                                        <br /><br />
                                                        <span className="text-area_business">{500 - desLength} Words</span>
                                                    </FormItem>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <br />

                                    <div className="formRadius card" id="scrollChange2">
                                        <div className="bold_c_text topRadius"
                                            style={{
                                                backgroundColor: '#fff', color: 'black', padding: '2%',
                                                fontFamily: 'Crimson Text, serif !important', borderBottom: '1px solid #d9d9d9',
                                                boxShadow: '0 2px 5px 0 rgba(0,0,0,.07)',
                                            }}>
                                            <i class="fa fa-map-marker iconStyle" aria-hidden="true"></i>
                                            <span className="margin_font_location">Location</span>
                                        </div>
                                        <div className="">{/*panel-body */}
                                            <div className="row">
                                                <div className="col-xs-12 col-sm-6 col-md-6">
                                                    <label htmlFor="sel1">Address</label>
                                                    <FormItem
                                                    // {...formItemLayout}
                                                    // label="Address"

                                                    // style={{ padding: '2%' }}
                                                    >
                                                        {getFieldDecorator('address', {
                                                            initialValue: this.state.dataAddress,
                                                            rules: [{ required: true, message: 'Please input your Address!', whitespace: true }],
                                                        })(
                                                            <Input />
                                                        )}
                                                    </FormItem>
                                                </div>
                                                <div className="col-xs-12 col-sm-6 col-md-6">
                                                    <label htmlFor="sel1">State</label>
                                                    <FormItem
                                                    // {...formItemLayout}
                                                    // label="State"

                                                    // style={{ padding: '2%' }}
                                                    >
                                                        {getFieldDecorator('state', {
                                                            initialValue: this.state.dataState,
                                                            rules: [{ type: 'array', required: true, message: 'Please select your State!' }],
                                                        })(
                                                            <Cascader options={statesUS} onChange={this.onChangeCat.bind(this)} showSearch={{ filter }} />
                                                        )}
                                                    </FormItem>
                                                </div>
                                            </div>

                                            <hr className="hrLineStyle" />

                                            <div className="row">
                                                <div className="col-xs-12 col-sm-6 col-md-6">
                                                    <label htmlFor="sel1">City</label>
                                                    <FormItem
                                                    // {...formItemLayout}
                                                    // label="City"

                                                    // style={{ padding: '2%' }}
                                                    >
                                                        {getFieldDecorator('city', {
                                                            initialValue: this.state.dataCity,
                                                            rules: [{ type: 'array', required: true, message: 'Please select your City!' }],
                                                        })(
                                                            <Cascader options={citiesUS} showSearch={{ filter }} />
                                                        )}
                                                    </FormItem>
                                                </div>
                                                <div className="col-xs-12 col-sm-6 col-md-6">
                                                    <label htmlFor="sel1">Zip</label>
                                                    <FormItem
                                                    // {...formItemLayout}
                                                    // label="Zip"

                                                    // style={{ padding: '2%' }}
                                                    >
                                                        {getFieldDecorator('zip', {
                                                            initialValue: this.state.dataZip,
                                                            rules: [{ required: true, message: 'Please input your Zip!', whitespace: true }],
                                                        })(
                                                            <Input />
                                                        )}
                                                    </FormItem>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    {/*==========location panel end===========*/}
                                    {/*==========Business panel start=========*/}
                                    <div className="formRadius" id="scrollChange3">{/*panel panel-default */}
                                        <div className="bold_c_text topRadius card" style={{ backgroundColor: '#white', color: 'black', padding: '2%', fontFamily: 'Crimson Text, serif !important', borderBottom: '1px solid #d9d9d9' }}>
                                            <i class="fa fa-building iconStyle"></i>
                                            <span className="margin_font_location">Business</span>
                                        </div>
                                        <div className="bottomRadius card" style={{ paddingBottom: '5px', }}>{/*panel-body  */}
                                            <div className="row">
                                                <div className="col-xs-12 col-sm-6 col-md-6">
                                                    <label htmlFor="sel1">First Name</label>
                                                    <FormItem
                                                    // {...formItemLayout}
                                                    // label="First Name"

                                                    // style={{ padding: '2%' }}
                                                    >
                                                        {getFieldDecorator('firstName', {
                                                            initialValue: this.state.dataFname,
                                                            rules: [{ required: true, message: 'Please input your  First Name!', whitespace: true }],
                                                        })(
                                                            <Input />
                                                        )}
                                                    </FormItem>
                                                </div>
                                                <div className="col-xs-12 col-sm-6 col-md-6">
                                                    <label htmlFor="sel1">Last Name</label>
                                                    <FormItem
                                                    // {...formItemLayout}
                                                    // label="Last Name"

                                                    // style={{ padding: '2%' }}
                                                    >
                                                        {getFieldDecorator('lastName', {
                                                            initialValue: this.state.dataLname,
                                                            rules: [{ required: true, message: 'Please input your Last Name!', whitespace: true }],
                                                        })(
                                                            <Input />
                                                        )}
                                                    </FormItem>
                                                </div>
                                            </div>

                                            <hr className="hrLineStyle" />
                                            <div className="row">
                                                <div className="col-xs-12 col-sm-6 col-md-6">
                                                    <label htmlFor="sel1">Business Name</label>
                                                    <FormItem
                                                    // {...formItemLayout}
                                                    // label="Business Name"

                                                    // style={{ padding: '2%' }}
                                                    >
                                                        {getFieldDecorator('businessName', {
                                                            initialValue: this.state.dataBname,
                                                            rules: [
                                                                { required: true, message: 'Please input your Business Name!', whitespace: true },
                                                            ],
                                                        })(
                                                            <Input />
                                                        )}
                                                    </FormItem>
                                                </div>
                                                <div className="col-xs-12 col-sm-6 col-md-6">
                                                    <label htmlFor="sel1">Opening & closing Time:</label>
                                                    <div className="row" style={{ padding: '0px' }}>
                                                        <div className="col-xs-12 col-sm-6 col-md-6">
                                                            <FormItem>
                                                                {getFieldDecorator('openingTime', {
                                                                    initialValue: moment(this.state.dataOtime, 'HH:mm:ss'),
                                                                    rules: [{ validator: this.validateTime.bind(this) }],
                                                                })(
                                                                    <TimePicker placeholder="Opening Time" onChange={this.onOpeningTime.bind(this)} />
                                                                )}
                                                            </FormItem>
                                                        </div>
                                                        <div className="col-xs-12 col-sm-6 col-md-6">
                                                            <FormItem>
                                                                {getFieldDecorator('closingTime', {
                                                                    initialValue: moment(this.state.dataCtime, 'HH:mm:ss'),
                                                                    rules: [{ validator: this.validateTime.bind(this) }],
                                                                })(
                                                                    <TimePicker placeholder="Closing Time" onChange={this.onClosingTime.bind(this)} />
                                                                )}
                                                            </FormItem>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <label htmlFor="email" style={{ fontColor: 'black', float: 'right' }}></label> */}


                                            <hr className="hrLineStyle" />

                                            <div className="row">
                                                <div className="col-xs-12 col-sm-6 col-md-6">
                                                    <label htmlFor="sel1">Business Number</label>
                                                    <FormItem
                                                    // {...formItemLayout}
                                                    // label="Business Number"

                                                    // style={{ padding: '2%' }}
                                                    >
                                                        {getFieldDecorator('businessNumber', {
                                                            initialValue: this.state.dataBnumber,
                                                            rules: [{ required: true, message: 'Please input your Business Number!', whitespace: true },
                                                            { validator: this.validateNumber.bind(this) }]
                                                        })(
                                                            <Input />
                                                        )}
                                                    </FormItem>
                                                </div>
                                                <div className="col-xs-12 col-sm-6 col-md-6">
                                                    <label htmlFor="sel1">Your Business Email id</label>
                                                    <FormItem
                                                    // {...formItemLayout}
                                                    // label="Your Business Email id"

                                                    // style={{ padding: '2%' }}
                                                    >
                                                        {getFieldDecorator('businessId', {
                                                            initialValue: this.state.dataBemailId,
                                                            rules: [{
                                                                required: true,
                                                                message: 'Please input your Business Email id!', whitespace: true
                                                            },
                                                            { type: 'email', message: 'The input is not valid E-mail!' }]
                                                        })(
                                                            <Input />
                                                        )}
                                                    </FormItem>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br />

                                    {/*==========Business panel end===========*/}
                                    {/*==========social links box start===========*/}
                                    <div className="formRadius card" id="scrollChange4" style={{ backgroundColor: 'white', marginBottom: '5%' }}>
                                        <div className="bold_c_text topRadius card" style={{ backgroundColor: 'white', color: 'black', padding: '2%', fontFamily: 'Crimson Text, serif !important', borderBottom: '1px solid #d9d9d9' }}>
                                            <i class="fa fa-link iconStyle"></i>
                                            <span className="margin_font_location">Social Links</span>
                                        </div>
                                        <div className="bottomRadius card" style={{ paddingBottom: '5px', }}>
                                            <FormItem
                                                {...formItemLayout}
                                                label="Facebook"

                                                style={{ padding: '2%' }}>

                                                <Input id='socFac' value={socFac} onChange={this.onChangeSocial.bind(this)} />
                                            </FormItem>

                                            <hr className="hrLineStyle" />

                                            <FormItem
                                                {...formItemLayout}
                                                label="Google"

                                                style={{ padding: '2%' }}
                                            >
                                                <Input id='socGoo' value={socGoo} onChange={this.onChangeSocial.bind(this)} />
                                            </FormItem>

                                            <hr className="hrLineStyle" />

                                            <FormItem
                                                {...formItemLayout}
                                                label="Linkedin"

                                                style={{ padding: '2%' }}
                                            >
                                                <Input id='socLin' value={socLin} onChange={this.onChangeSocial.bind(this)} />
                                            </FormItem>
                                        </div>
                                    </div>
                                    {/*==========social links box end===========*/}
                                    {/*==========upload panel start=========*/}
                                    <div className="formRadius" id="scrollChange5">
                                        <div className="bold_c_text topRadius card" style={{ backgroundColor: 'white', color: 'black', padding: '2%', borderBottom: '1px solid #d9d9d9' }}>
                                            <i class="fa fa-upload iconStyle"></i>
                                            <span className="margin_font_location">Upload</span>
                                        </div>
                                        <div className="bottomRadius card uplodBusiness">
                                            <Upload
                                                action="//jsonplaceholder.typicode.com/posts/"
                                                listType="picture-card"
                                                fileList={fileList}
                                                onPreview={this.handlePreview}
                                                onChange={this.handleChange}
                                            >
                                                {this.state.imageList.length + fileList.length >= 3 ? null : uploadButton}
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
                                    {this.state.loader && <Spin indicator={antIcon} />}
                                    <button disabled={!!this.state.loader} className="btn color_button" style={{ width: '19%' }}>Submit</button>{/*color_button */}
                                </div>
                                {/*main panel content*/}
                            </div>
                        </div>
                        {/*panel-group*/}
                    </Form>
                </div>
                <div className="col-lg-3 col-md-3 hidden-xs"></div>


                {/* <Footer/> */}
            </div>
        )
    }
}

const WrappedRegistrationForm = Form.create()(Postbusiness);
export default WrappedRegistrationForm;