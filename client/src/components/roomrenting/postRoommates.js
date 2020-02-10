import React, { Component } from 'react';
import {
    Form,
    Input,
    Icon,
    Cascader,
    Spin,
    Checkbox,
    notification,
    Upload,
    Modal,
    DatePicker,
    Radio,
    Row,
    Col,
    Anchor,
} from 'antd';
import moment from 'moment';
import superagent from "superagent";
import { Redirect } from 'react-router';
import { HttpUtils } from "../../Services/HttpUtils";
//import MapContainer from './google_map/Map'
import sha1 from "sha1";
import Burgermenu from '../header/burgermenu';
import HeaderMenu from '../header/headermenu';
import Footer from '../footer/footer';
import AsyncStorage from "@callstack/async-storage/lib/index";
import stateCities from "../../lib/countrycitystatejson";

const { Link } = Anchor;

const handleClick = (e, link) => {
    e.preventDefault();
    console.log(link);
};


const RangePicker = DatePicker.RangePicker;
const { TextArea } = Input;
const CheckboxGroup = Checkbox.Group;
const RadioGroup = Radio.Group;
const FormItem = Form.Item
//const stateCities= require('countrycitystatejson')

const category = [{
    value: 'Property to rent',
    label: 'Property to rent',
    children: [{
        value: 'Single Family Home',
        label: 'Single Family Home',
        children: [{
            value: '1 Bed',
            label: '1 Bed',
        }, {
            value: '2 Beds',
            label: '2 Beds',
        }, {
            value: '3 Beds',
            label: '3 Beds',
        }, {
            value: '4+ Beds',
            label: '4+ Beds',
        }],
    },
    {
        value: 'Appartment',
        label: 'Apartment',
        children: [{
            value: '1 Bed',
            label: '1 Bed',
        }, {
            value: '2 Beds',
            label: '2 Beds',
        }, {
            value: '3 Beds',
            label: '3 Beds',
        }, {
            value: '4+ Beds',
            label: '4+ Beds',
        }],
    }, {
        value: 'Condo',
        label: 'Condo',
        children: [{
            value: '1 Bed',
            label: '1 Bed',
        }, {
            value: '2 Beds',
            label: '2 Beds',
        }, {
            value: '3 Beds',
            label: '3 Beds',
        }, {
            value: '4+ Beds',
            label: '4+ Beds',
        }],
    }, {
        value: 'Town house',
        label: 'Town house',
        children: [{
            value: '1 Bed',
            label: '1 Bed',
        }, {
            value: '2 Beds',
            label: '2 Beds',
        }, {
            value: '3 Beds',
            label: '3 Beds',
        }, {
            value: '4+ Beds',
            label: '4+ Beds',
        }],
    }, {
        value: 'Homes',
        label: 'Homes',
        children: [{
            value: '1 Bed',
            label: '1 Bed',
        }, {
            value: '2 Beds',
            label: '2 Beds',
        }, {
            value: '3 Beds',
            label: '3 Beds',
        }, {
            value: '4+ Beds',
            label: '4+ Beds',
        }],
    }],
}, {
    value: 'Room to rent',
    label: 'Room to rent',
    children: [{
        value: 'Shared Room',
        label: 'Shared Room',
    }, {
        value: 'Single Room',
        label: 'Single Room',
    }, {
        value: 'Paying Guest',
        label: 'Paying Guest',
    }],
}, {
    value: 'Office & commercial to rent',
    label: 'Office & commercial to rent',
    children: [{
        value: 'Office Space',
        label: 'Office Space',
    }, {
        value: 'Retail Outlet',
        label: 'Retail Outlet',
    }, {
        value: 'Others',
        label: 'Others',
    }],

}, {
    value: 'Parking & storage to rent',
    label: 'Parking & storage to rent',
}];

const accomodateCategory = [{
    value: 1,
    label: 1
}, {
    value: 2,
    label: 2
}, {
    value: 3,
    label: 3
}, {
    value: 4,
    label: 4
}, {
    value: 5,
    label: 5
}, {
    value: 6,
    label: 6
}]

const priceCategory = [{
    value: 'per night',
    label: 'per night'
}, {
    value: 'per day',
    label: 'per day'
}, {
    value: 'per week',
    label: 'per week'
}, {
    value: 'per month',
    label: 'per month'
}]

const furnishedcategory = [{
    value: 'Unfurnished',
    label: 'Unfurnished',
}, {
    value: 'Furnished with Bed',
    label: 'Furnished with Bed',
}, {
    value: 'Semi Furnished',
    label: 'Semi Furnished',
}, {
    value: 'Fully Furnished',
    label: 'Fully Furnished',
}];

class Postroommates extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userId: '',
            desLength: 0,
            fileList: [],
            previewVisible: false,
            previewImage: '',
            hideAddress: false,
            dateObj: { from: '', to: '' },
            radio: true,
            amenities: [],
            vegNoVeg: 'Yes',
            petFriendly: 'No',
            smoking: 'No',
            statesUS: [],
            citiesUS: [],
            profileId: '',
            msg: false,
            imageList: [],
            objectId: '',
            loader: false,
            objData: {},
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.handleLocalStorage();
        let data = this.props.location.state;
        if (data) {
            this.setState({
                dataState: [data.state],
                dataCity: [data.city],
                dataLocation: data.propertylocation,
                dataZip: data.propertyzipcode,
                dataCat: [data.category],
                dataTitle: data.postingtitle,
                dataDescription: data.discription,
                dataRent: data.rent,
                dataPmode: [data.pricemode],
                dataAccom: [data.accomodates],
                dataFurn: [data.furnished],
                dataAmmen: data.amenitiesinclude,
                dataName: data.contactname,
                dataEmail: data.contactemail,
                dataNumber: data.contactnumber,
                dataMcont: data.modeofcontact,
                petFriendly: data.petfriendly,
                smoking: data.smoking,
                vegNoVeg: data.vegetariansprefered,
                radio: data.Attachedbath,
                imageList: data.imageurl,
                dataStart: data.startdate,
                dataEnd: data.enddate,
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

    checkValue(rule, value, callback) {
        this.setState({ desLength: value ? value.length : 0 })
        callback();
    }

    validateDate(rule, value, callback) {
        if (!(!!value)) {
            callback('Please select your Date Range!');
        } else {
            callback();
        }
    }

    onChangePrice(e) {
        this.setState({ hidePrice: e.target.checked });
    }

    onChangeDate(dates, dateStrings) {
        this.setState({
            dateObj: {
                from: dateStrings[0],
                to: dateStrings[1]
            }
        })
    }

    onChangeAmenities(checkedValues) {
        this.setState({ amenities: checkedValues });
    }

    onChangeAddress(e) {
        this.setState({ hideAddress: e.target.checked });
    }

    checkCheckBox = (rule, value, callback) => {
        if (!value) {
            callback('Please check at least one!');
        } else {
            callback();
        }
    };

    changeAttBath = (e) => {
        if (e.target.name === 'radio') {
            this.setState({
                radio: e.target.value,
            });
        } else if (e.target.name === 'vegNoVeg') {
            this.setState({
                vegNoVeg: e.target.value,
            });
        } else if (e.target.name === 'smoking') {
            this.setState({
                smoking: e.target.value,
            });
        } else if (e.target.name === 'petFriendly') {
            this.setState({
                petFriendly: e.target.value,
            });
        }
    }

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

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                this.setState({ loader: true })
                this.funcForUpload(values)
                console.log(values, 'values')
            }
        })
    }

    async funcForUpload(values) {
        const { fileList } = this.state;

        Promise.all(fileList.map((val) => {
            return this.uploadFile(val).then((result) => {
                return result.body.url
            })
        })).then((results) => {
            this.postData(values, results)
        })
    }

    async postData(values, response) {
        const { dateObj, userId, petFriendly, radio, smoking, vegNoVeg, profileId, objectId, imageList } = this.state;
        let obj = {
            user_id: userId,
            profileId: profileId,
            accommodates: values.accommodates[0],
            amenities: values.amenities,
            attachedBath: radio,
            category: values.category[0],
            subCategory: values.category[1] ? values.category[1] : '',
            subSubCategory: values.category[2] ? values.category[2] : '',
            state: values.state[0],
            city: values.city[0],
            contactEmail: values.contactEmail,
            contactMode: values.contactMode,
            contactName: values.contactName,
            contactNumber: values.contactNumber,
            dateRange: dateObj,
            description: values.description,
            furnished: values.furnished[0],
            postingTitle: values.postingTitle,
            price: values.price,
            priceMode: values.priceMode[0],
            propertyLocation: values.propertyLocation,
            zipCode: values.zipCode,
            petFriendly: petFriendly,
            smoking: smoking,
            vegNoVeg: vegNoVeg,
            arr_url: [...response, ...imageList],
            objectId: objectId,
            posted: moment().format('LL'),
            beds: values.beds
        }
        let req = await HttpUtils.post('postroomrent', obj)
        if (req.code === 200) {
            this.props.form.resetFields();
            this.openNotification()
            this.setState({ msg: true, objData: obj, loader: false })
        }
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

    validateNumber(rule, value, callback) {
        if (isNaN(value)) {
            callback('Please type Numbers');
        } else {
            callback()
        }
    }

    render() {
        const { desLength, fileList, previewVisible, previewImage, statesUS, citiesUS, objData } = this.state;
        const { getFieldDecorator } = this.props.form;
        const dateFormat = 'YYYY-MM-DD';
        const antIcon = <Icon type="loading" style={{ fontSize: 24, marginRight: '10px' }} spin />;

        if (this.state.msg === true) {
            return <Redirect to={{ pathname: '/detail_roomRent', state: objData }} />
        }

        const optionsContact = [
            { label: 'email', value: 'email' },
            { label: 'phone', value: 'phone' }
        ];

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

        function filter(inputValue, path) {
            return (path.some(option => (option.label).toLowerCase().indexOf(inputValue.toLowerCase()) > -1));
        }

        const uploadedImages = (
            <div style={{ display: 'flex' }}>
                {this.state.imageList.map((elem) => {
                    return (
                        <div className='insideDiv'>
                            <a>
                                <img alt='img1' src={elem} />
                                <span>
                                    <a><Icon title='Preview file' onClick={() => this.handlePreview(elem)} type="eye" theme="outlined" style={{ zIndex: 10, transition: 'all .3s', fontSize: '16px', width: '16px', color: 'rgba(255, 255, 255, 0.85)', margin: '0 4px' }} /></a>
                                    <Icon title='Remove file' type='delete' onClick={this.deleteImage.bind(this, elem)} style={{ zIndex: 10, transition: 'all .3s', fontSize: '16px', width: '16px', color: 'rgba(255, 255, 255, 0.85)', margin: '0 4px' }} />
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

        return (
            <div>
                <HeaderMenu />
                <div className="hidden-xs" style={{ width: "100%", height: "67px", marginTop: "40px" }}></div>{/*3*/}
                <div className="col-lg-3 col-md-3 hidden-sm hidden-xs"></div>
                <div className="col-lg-2 col-md-2 hidden-sm hidden-xs" id="section1" style={{ marginLeft: '4%', marginTop: '103px', position: 'fixed', }}>
                    <Anchor className="" style={{ margin: '2%', backgroundColor: '#f6f6f6' }}>
                        <Link href="#scrollChange1" title="General" />
                        <Link href="#scrollChange2" title="Location" />
                        <Link href="#scrollChange3" title="RentDetails" />
                        <Link href="#scrollChange4" title="Upload" />
                        <Link href="#scrollChange5" title="Price Details" />
                        <Link href="#scrollChange6" title="About" />
                    </Anchor>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">

                    <div className="main_c_panel" style={{ color: 'white', textAlign: 'center' }}>
                        <h3 style={{ color: 'black', fontWeight: 'bold' }}>Roommates / Rentals<br />
                            Find all your Local Rentals in one place</h3>
                    </div>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <div className="">{/*panel-group 32 */}
                            <div className="">{/*panel panel-default */}

                                <div className="" id="scrollChange1" style={{ marginBottom: '25px' }}>{/*panel-body */}
                                    {/*==========main panel content=============*/}
                                    {/*==========General panel start=========*/}
                                    <div className="card formRadius" style={{ padding: '0 0 1vw 0' }}>{/*panel panel-default */}
                                        <div className="bold_c_text topRadius" style={{ color: 'black', padding: '2%', border: 'none', borderBottom: '1px solid #d9d9d9', borderRadius: '3px !important', }}>
                                            {/* <Icon type="info-circle"/> */}
                                            <i class="fa fa-info-circle iconStyle"></i>
                                            <span className="margin_font_location">General</span>
                                        </div>
                                        <div className="formRadius">{/* panel-body*/}
                                            <div className="row">
                                                <div className="col-xs-12 col-sm-6 col-md-6">
                                                    <label htmlFor="sel1">Category</label>
                                                    <FormItem
                                                    // {...formItemLayout}
                                                    // label="Category"

                                                    // style={{ padding: '2%' }}
                                                    >
                                                        {getFieldDecorator('category', {
                                                            initialValue: this.state.dataCat,
                                                            rules: [{ type: 'array', required: true, message: 'Please select your Category!' }],
                                                        })(
                                                            <Cascader options={category} showSearch={{ filter }} />
                                                        )}
                                                    </FormItem>
                                                </div>
                                                <div className="col-xs-12 col-sm-6 col-md-6">
                                                    <label htmlFor="sel1">Posting Title</label>
                                                    <FormItem
                                                    // {...formItemLayout}
                                                    // label="Posting Title"

                                                    // style={{ padding: '2%' }}
                                                    >
                                                        {getFieldDecorator('postingTitle', {
                                                            initialValue: this.state.dataTitle,
                                                            rules: [{ required: true, message: 'Please input your Posting Title!', whitespace: true }],
                                                        })(
                                                            <Input />
                                                        )}
                                                    </FormItem>
                                                </div>
                                            </div>

                                            <hr className="hrLineStyle" />
                                            <div className="row">
                                                <div className="col-xs-1 col-sm-3 col-md-3"></div>
                                                <div className="col-xs-10 col-sm-6 col-md-6">
                                                    <label htmlFor="sel1">Description/Details</label>
                                                    <FormItem
                                                    // {...formItemLayout}
                                                    // label="Description/Details"

                                                    // style={{ padding: '2%' }}
                                                    >
                                                        {getFieldDecorator('description', {
                                                            initialValue: this.state.dataDescription,
                                                            rules: [
                                                                {
                                                                    required: true, message: 'Please input your Description/Details!', whitespace: true
                                                                },
                                                                {
                                                                    validator: this.checkValue.bind(this)
                                                                }],
                                                        })(
                                                            <TextArea
                                                                rows={6}
                                                                maxLength="500"
                                                                style={{ "marginBottom": "10px" }} />
                                                        )}
                                                        <br />
                                                        <span style={{ "float": "right" }}>{500 - desLength} Words</span>
                                                    </FormItem>
                                                </div>
                                                <div className="col-xs-1 col-sm-3 col-md-3"></div>
                                            </div>


                                            {/* <FormItem
                                                {...formItemLayout}
                                                label="Beds"

                                                style={{ padding: '2%' }}
                                            >
                                                {getFieldDecorator('beds', {
                                                    initialValue: this.state.dataAmmen,
                                                    rules: [{ validator: this.checkCheckBox }],
                                                })(
                                                    <Radio.Group style={{ width: '100%' }} onChange={this.onChangeAmenities.bind(this)}>
                                                        <Row>
                                                            <Col span={8}><Radio value="1">1</Radio></Col>
                                                            <Col span={8}><Radio value="2">2</Radio></Col>
                                                            <Col span={8}><Radio value="3">3</Radio></Col>
                                                            <Col span={8}><Radio value="4+">4+</Radio></Col>
                                                        </Row>
                                                    </Radio.Group>
                                                )}
                                            </FormItem> */}
                                        </div>
                                    </div>
                                </div>

                                <div className="" id="scrollChange2">{/*panel-body */}
                                    {/*==========main panel content=============*/}
                                    {/*==========location panel start=========*/}
                                    <div className="formRadius card">{/*panel panel-default */}
                                        <div className="bold_c_text topRadius" style={{ backgroundColor: 'white', color: 'black', padding: '2%', border: 'none', borderBottom: '1px solid #d9d9d9', borderRadius: '3px !important', }}>
                                            {/* <Icon type="info-circle"/> */}
                                            <i class="fa fa-map-marker iconStyle" aria-hidden="true"></i>
                                            <span className="margin_font_location">Location</span>
                                        </div>
                                        <div className="formRadius" style={{ backgroundColor: 'white', padding: '1vw 0px 5px 0px', }}>{/*panel-body */}
                                            <div className="row">
                                                <div className="col-xs-12 col-sm-6 col-md-6">
                                                    <label htmlFor="sel1">Property Location</label>
                                                    <FormItem
                                                    // {...formItemLayout}
                                                    // label="Property Location"

                                                    // style={{ padding: '2%' }}
                                                    >
                                                        {getFieldDecorator('propertyLocation', {
                                                            initialValue: this.state.dataLocation,
                                                            rules: [{
                                                                required: true,
                                                                message: 'Please input your Property Location!',
                                                                whitespace: true
                                                            }],
                                                        })(
                                                            <Input />
                                                        )}
                                                    </FormItem>
                                                </div>
                                                <div className="col-xs-12 col-sm-6 col-md-6">
                                                    <label htmlFor="sel1">Property Zip Code</label>
                                                    <FormItem
                                                    // {...formItemLayout}
                                                    // label="Property Zip Code"

                                                    // style={{ padding: '2%' }}
                                                    >
                                                        {getFieldDecorator('zipCode', {
                                                            initialValue: this.state.dataZip,
                                                            rules: [{
                                                                required: true,
                                                                message: 'Please input your Property Zip Code!',
                                                                whitespace: true
                                                            }],
                                                        })(
                                                            <Input />
                                                        )}
                                                    </FormItem>
                                                </div>
                                            </div>

                                            <hr className="hrLineStyle" />

                                            <div className="row">
                                                <div className="col-xs-12 col-sm-6 col-md-6">
                                                    <label htmlFor="sel1">State</label>
                                                    <FormItem>
                                                        {getFieldDecorator('state', {
                                                            initialValue: this.state.dataState,
                                                            rules: [{ type: 'array', required: true, message: 'Please select your State!' }],
                                                        })(
                                                            <Cascader options={statesUS} onChange={this.onChangeCat.bind(this)} showSearch={{ filter }} />
                                                        )}
                                                    </FormItem>
                                                </div>
                                                <div className="col-xs-12 col-sm-6 col-md-6">
                                                    <label htmlFor="sel1">City</label>
                                                    <FormItem>
                                                        {getFieldDecorator('city', {
                                                            initialValue: this.state.dataCity,
                                                            rules: [{ type: 'array', required: true, message: 'Please select your City!' }],
                                                        })(
                                                            <Cascader options={citiesUS} showSearch={{ filter }} />
                                                        )}
                                                    </FormItem>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="" id="scrollChange3" style={{ marginBottom: '25px', marginTop: '5%' }}>{/*panel-body */}
                                    {/*==========main panel content=============*/}
                                    {/*==========General panel start=========*/}
                                    <div className="card formRadius" style={{ padding: '0 0 1vw 0' }}>{/*panel panel-default */}
                                        <div className="bold_c_text topRadius" style={{ color: 'black', padding: '2%', border: 'none', borderBottom: '1px solid #d9d9d9', borderRadius: '3px !important', }}>
                                            {/* <Icon type="info-circle"/> */}
                                            <i class="fa fa-info-circle iconStyle"></i>
                                            <span className="margin_font_location">Rent details</span>
                                        </div>
                                        <div className="formRadius">{/* panel-body*/}
                                            <div className="row">
                                                <div className="col-xs-12 col-sm-6 col-md-6">
                                                    <label htmlFor="sel1">Accommodates</label>
                                                    <FormItem
                                                    // {...formItemLayout}
                                                    // label="Accommodates"

                                                    // style={{ padding: '2%' }}
                                                    >
                                                        {getFieldDecorator('accommodates', {
                                                            initialValue: this.state.dataAccom,
                                                            rules: [{ type: 'array', required: true, message: 'Please select your Accommodates!' }],
                                                        })(
                                                            <Cascader options={accomodateCategory} showSearch={{ filter }} />
                                                        )}
                                                    </FormItem>
                                                </div>
                                                <div className="col-xs-12 col-sm-6 col-md-6">
                                                    <label htmlFor="sel1">Furnished</label>
                                                    <FormItem
                                                    // {...formItemLayout}
                                                    // label="Furnished"

                                                    // style={{ padding: '2%' }}
                                                    >
                                                        {getFieldDecorator('furnished', {
                                                            initialValue: this.state.dataFurn,
                                                            rules: [{ type: 'array', required: true, message: 'Please select your Furnished!' }],
                                                        })(
                                                            <Cascader options={furnishedcategory} showSearch={{ filter }} />
                                                        )}
                                                    </FormItem>
                                                </div>
                                            </div>

                                            <hr className="hrLineStyle" />

                                            <div className="row">
                                                <div className="col-xs-12 col-sm-6 col-md-6">
                                                    <div><label htmlFor="sel1" style={{marginLeft: '8px;'}}>Attached Bath</label></div>
                                                    <FormItem
                                                        // {...formItemLayout}
                                                        // label="Attached Bath"
                                                        style={{marginLeft: '8px'}}
                                                    >
                                                        <RadioGroup onChange={this.changeAttBath} name='radio' value={this.state.radio}>
                                                            <Radio value={true}>YES</Radio>
                                                            <Radio value={false}>NO</Radio>
                                                        </RadioGroup>
                                                    </FormItem>

                                                    <hr className="hrLineStyle" />

                                                    <label htmlFor="sel1" style={{marginLeft: '8px;'}}>Vegetarians Preferred</label>
                                                    <FormItem
                                                        // {...formItemLayout}
                                                        // label="Vegetarians Preferred"
                                                        style={{marginLeft: '8px'}}
                                                    >
                                                        <RadioGroup onChange={this.changeAttBath} name='vegNoVeg' value={this.state.vegNoVeg}>
                                                            <Radio value={'Yes'}>YES</Radio>
                                                            <Radio value={'No'}>NO</Radio>
                                                        </RadioGroup>
                                                    </FormItem>

                                                    <hr className="hrLineStyle" />

                                                    <label htmlFor="sel1" style={{marginLeft: '8px;'}}>Smoking</label>
                                                    <FormItem
                                                        // {...formItemLayout}
                                                        // label="Smoking"
                                                        style={{marginLeft: '8px'}}
                                                    >
                                                        <RadioGroup onChange={this.changeAttBath} name='smoking' value={this.state.smoking}>
                                                            <Radio value={'Yes'}>YES</Radio>
                                                            <Radio value={'No'}>NO</Radio>
                                                            <Radio value={'Outside'}>Outside only</Radio>
                                                        </RadioGroup>
                                                    </FormItem>

                                                    <hr className="hrLineStyle" />

                                                    <label htmlFor="sel1" style={{marginLeft: '8px;'}}>Pet Friendly</label>
                                                    <FormItem
                                                        // {...formItemLayout}
                                                        // label="Pet Friendly"
                                                        style={{marginLeft: '8px'}}
                                                    >
                                                        <RadioGroup onChange={this.changeAttBath} name='petFriendly' value={this.state.petFriendly}>
                                                            <Radio value={'No'}>No</Radio>
                                                            <Radio value={'Only Cats'}>Only Cats</Radio>
                                                            <Radio value={'Only Dogs'}>Only Dogs</Radio>
                                                            <Radio value={'Any Pet'} style={{marginTop:'10px'}}>Any Pet</Radio>
                                                        </RadioGroup>
                                                    </FormItem>
                                                </div>
                                                <div className="col-xs-12 col-sm-6 col-md-6">
                                                    <label htmlFor="sel1">Amenities include</label>
                                                    <FormItem
                                                    // {...formItemLayout}
                                                    // label="Amenities include"

                                                    // style={{ padding: '2%' }}
                                                    >
                                                        {getFieldDecorator('amenities', {
                                                            initialValue: this.state.dataAmmen,
                                                            rules: [{ validator: this.checkCheckBox }],
                                                        })(
                                                            <CheckboxGroup style={{ width: '100%' }} onChange={this.onChangeAmenities.bind(this)}>
                                                                <Row>
                                                                    <Col span={17}><Checkbox value="Gym/Fitness Center">Gym/Fitness Center</Checkbox></Col>
                                                                    <Col span={17}><Checkbox value="Swimming Pool">Swimming Pool</Checkbox></Col>
                                                                    <Col span={17}><Checkbox value="Car Park">Car Park</Checkbox></Col>
                                                                    <Col span={17}><Checkbox value="Visitors Parking">Visitors Parking</Checkbox></Col>
                                                                    <Col span={17}><Checkbox value="Power Backup">Power Backup</Checkbox></Col>
                                                                    <Col span={17}><Checkbox value="Garbage Disposal">Garbage Disposal</Checkbox></Col>
                                                                    <Col span={17}><Checkbox value="Private Lawn">Private Lawn</Checkbox></Col>
                                                                    <Col span={17}><Checkbox value="Water Heater Plant">Water Heater Plant</Checkbox></Col>
                                                                    <Col span={17}><Checkbox value="Security System">Security System</Checkbox></Col>
                                                                    <Col span={17}><Checkbox value="Laundry Service">Laundry Service </Checkbox></Col>
                                                                    <Col span={17}><Checkbox value="Elevator">Elevator</Checkbox></Col>
                                                                    <Col span={17}><Checkbox value="Club House">Club House</Checkbox></Col>
                                                                </Row>
                                                            </CheckboxGroup>
                                                        )}
                                                    </FormItem>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="" id="scrollChange4" style={{ marginBottom: '25px' }}>{/*panel-body */}
                                    {/*==========main panel content=============*/}
                                    {/*==========General panel start=========*/}
                                    <div className="card formRadius" style={{ padding: '0 0 1vw 0' }}>{/*panel panel-default */}
                                        <div className="bold_c_text topRadius" style={{ color: 'black', padding: '2%', border: 'none', borderBottom: '1px solid #d9d9d9', borderRadius: '3px !important', }}>
                                            {/* <Icon type="info-circle"/> */}
                                            <i class="fa fa-upload iconStyle"></i>
                                            <label {...formItemLayout} className="margin_font_location">Upload</label>
                                        </div>
                                        <div className="formRadius">{/* panel-body*/}
                                            <FormItem

                                                label="Images"

                                                style={{ padding: '2%' }}
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
                                                            {this.state.imageList.length + fileList.length >= 3 ? null : uploadButton}
                                                        </Upload>
                                                        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                                                            <img alt="example" style={{ width: '100%' }} src={previewImage} />
                                                        </Modal>
                                                        {uploadedImages}
                                                    </div>
                                                )}
                                            </FormItem>
                                        </div>
                                    </div>
                                </div>

                                <div className="" id="scrollChange5" style={{ marginBottom: '25px' }}>{/*panel-body */}
                                    {/*==========main panel content=============*/}
                                    {/*==========General panel start=========*/}
                                    <div className="card formRadius" style={{ padding: '0 0 1vw 0' }}>{/*panel panel-default */}
                                        <div className="bold_c_text topRadius" style={{ color: 'black', padding: '2%', border: 'none', borderBottom: '1px solid #d9d9d9', borderRadius: '3px !important', }}>
                                            {/* <Icon type="info-circle"/> */}
                                            <i class="fa fa-info-circle iconStyle"></i>
                                            <span className="margin_font_location">Price details</span>
                                        </div>
                                        <div className="formRadius">{/* panel-body*/}
                                            <FormItem
                                                {...formItemLayout}
                                                label="Date Range"

                                                style={{ padding: '2%' }}
                                            >
                                                {getFieldDecorator('dateRange', {
                                                    initialValue: [moment(this.state.dataStart), moment(this.state.dataEnd)],
                                                    rules: [{ validator: this.validateDate.bind(this) }],
                                                })(
                                                    <RangePicker
                                                        ranges={{ Today: [moment(), moment()], 'This Month': [moment(), moment().endOf('month')] }}
                                                        onChange={this.onChangeDate.bind(this)}
                                                    />
                                                )}
                                            </FormItem>

                                            <hr className="hrLineStyle" />

                                            <div className="row">
                                                <div className="col-xs-12 col-sm-6 col-md-6">
                                                    <label htmlFor="sel1">Rent</label>
                                                    <FormItem
                                                    // {...formItemLayout}
                                                    // label="Rent"

                                                    // style={{ padding: '2%' }}
                                                    >
                                                        {getFieldDecorator('price', {
                                                            initialValue: this.state.dataRent,
                                                            rules: [{ required: true, message: 'Please input your Price!', whitespace: true },
                                                            { validator: this.validateNumber.bind(this) }],
                                                        })(
                                                            <Input />
                                                        )}
                                                    </FormItem>
                                                </div>
                                                <div className="col-xs-12 col-sm-6 col-md-6">
                                                    <label htmlFor="sel1">Price Mode</label>
                                                    <FormItem
                                                    // {...formItemLayout}
                                                    // label="Price Mode"

                                                    // style={{ padding: '2%' }}
                                                    >
                                                        {getFieldDecorator('priceMode', {
                                                            initialValue: this.state.dataPmode,
                                                            rules: [{ type: 'array', required: true, message: 'Please select your Price Mode!' }],
                                                        })(
                                                            <Cascader options={priceCategory} showSearch={{ filter }} />
                                                        )}
                                                    </FormItem>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="" id="scrollChange6">{/*panel-body */}
                                    {/*==========main panel content=============*/}
                                    {/*==========location panel start=========*/}
                                    <div className="card formRadius" style={{ padding: '0 0 1vw 0' }}>{/*panel panel-default */}
                                        <div className="bold_c_text topRadius" style={{ color: 'black', padding: '2%', border: 'none', borderBottom: '1px solid #d9d9d9', borderRadius: '3px !important', }}>
                                            {/* <Icon type="info-circle"/> */}
                                            <i class="fa fa-address-card iconStyle"></i>
                                            <span className="margin_font_location">About</span>
                                        </div>
                                        <div className="formRadius" style={{ padding: '1vw 0 1vw 0' }}>{/* panel-body*/}
                                            <div className="row">
                                                <div className="col-xs-12 col-sm-6 col-md-6">
                                                    <label htmlFor="sel1">Contact Name</label>
                                                    <FormItem
                                                    // {...formItemLayout}
                                                    // label="Contact Name"

                                                    // style={{ padding: '2%' }}
                                                    >
                                                        {getFieldDecorator('contactName', {
                                                            initialValue: this.state.dataName,
                                                            rules: [{ required: true, message: 'Please input your Contact Name!', whitespace: true }],
                                                        })(
                                                            <Input />
                                                        )}
                                                    </FormItem>
                                                </div>
                                                <div className="col-xs-12 col-sm-6 col-md-6">
                                                    <label htmlFor="sel1">Contact Email</label>
                                                    <FormItem
                                                    // {...formItemLayout}
                                                    // label="Contact Email"

                                                    // style={{ padding: '2%' }}
                                                    >
                                                        {getFieldDecorator('contactEmail', {
                                                            initialValue: this.state.dataEmail,
                                                            rules: [{ type: 'email', message: 'The input is not valid E-mail!', whitespace: true },
                                                            {
                                                                required: true,
                                                                message: 'Please input your Contact Email!', whitespace: true
                                                            }],
                                                        })(
                                                            <Input />
                                                        )}
                                                    </FormItem>
                                                </div>
                                            </div>

                                            <hr className="hrLineStyle" />
                                            
                                            <div className="row">
                                                <div className="col-xs-12 col-sm-6 col-md-6">
                                                    <label htmlFor="sel1">Contact Number</label>
                                                    <FormItem
                                                        // {...formItemLayout}
                                                        // label="Contact Number"

                                                        // style={{ padding: '2%' }}
                                                    >
                                                        {getFieldDecorator('contactNumber', {
                                                            initialValue: this.state.dataNumber,
                                                            rules: [{ required: true, message: 'Please input your Contact Number!', whitespace: true },
                                                            { validator: this.validateNumber.bind(this) }],
                                                        })(
                                                            <Input />
                                                        )}
                                                    </FormItem>
                                                </div>
                                                <div className="col-xs-12 col-sm-6 col-md-6">
                                                    <label htmlFor="sel1">Mode of Contact</label>
                                                    <FormItem
                                                        // {...formItemLayout}
                                                        // label="Mode of Contact"

                                                        // style={{ padding: '2%' }}
                                                    >
                                                        {getFieldDecorator('contactMode', {
                                                            initialValue: this.state.dataMcont,
                                                            rules: [{ validator: this.checkCheckBox }],
                                                        })(
                                                            <CheckboxGroup options={optionsContact} />
                                                        )}
                                                    </FormItem>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row center_global">
                                    {this.state.loader && <Spin indicator={antIcon} />}
                                    <button disabled={!!this.state.loader} className="btn color_button" style={{ width: '19%' }}>Submit</button>
                                </div>
                            </div>
                        </div>
                    </Form>

                </div>
                {/* <Footer /> */}
            </div>
        )
    }
}

const WrappedBusinessForm = Form.create()(Postroommates);
export default WrappedBusinessForm;
