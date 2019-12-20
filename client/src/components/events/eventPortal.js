import React, { Component } from 'react';
import {
    Form,
    Input,
    Icon,
    Cascader,
    Spin,
    Upload,
    Modal,
    DatePicker,
    TimePicker,
    Checkbox
} from 'antd';
import moment from 'moment';
import { Redirect } from 'react-router';
import AsyncStorage from "@callstack/async-storage/lib/index";
import Burgermenu from '../header/burgermenu';
import Footer from '../footer/footer';
import sha1 from "sha1";
import superagent from "superagent";
import { HttpUtils } from "../../Services/HttpUtils";
import { Shareholder, CustomTickets } from './ColorPicker';
import stateCities from "../../lib/countrycitystatejson";

const FormItem = Form.Item;
const RangePicker = DatePicker.RangePicker;
const { TextArea } = Input;
const CheckboxGroup = Checkbox.Group;

const ticketNames = [
    {
        value: 'Early Bird',
        label: 'Early Bird',
    },
    {
        value: 'Normal Ticket',
        label: 'Normal Ticket',
    },
    {
        value: 'Both',
        label: 'Both',
    },
    {
        value: 'Free',
        label: 'Free',
    },
    {
        value: 'Custom Tickets',
        label: 'Custom Tickets',
    },
]

const category = [{
    value: 'art/film',
    label: 'art/film'
}, {
    value: 'career',
    label: 'career',
}, {
    value: 'charitable',
    label: 'charitable',
}, {
    value: 'competition',
    label: 'competition'
}, {
    value: 'dance',
    label: 'dance',
}, {
    value: 'fest/fair',
    label: 'fest/fair',
}, {
    label: 'fitness/health',
    value: 'fitness/health',
}, {
    label: 'food/drink',
    value: 'food/drink',
}, {
    value: 'free',
    label: 'free',
}, {
    value: 'kid friendly',
    label: 'kid friendly',
}, {
    value: 'literary',
    label: 'literary',
}, {
    value: 'music',
    label: 'music',
}, {
    value: 'outdoor',
    label: 'outdoor',
}, {
    value: 'sale',
    label: 'sale',
}, {
    value: 'singles',
    label: 'singles',
}, {
    value: 'tech',
    label: 'tech',
}];

const Dragger = Upload.Dragger;

class EventPortal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fileList: [],
            previewVisible: false,
            previewImage: '',
            eventTitle: '',
            eventCategory: '',
            state: '',
            city: '',
            startDate: '',
            endDate: '',
            description: '',
            desLength: '',
            earlyBirdFree: false,
            normalTicketFree: false,
            availableTickets: '',
            totalTickets: '',
            price: '',
            name: '',
            email: '',
            number: '',
            website: '',
            faceBook: '',
            linkdIn: '',
            google: '',
            statesUS: [],
            citiesUS: [],
            objectId: '',
            loader: false,
            msg: false,
            openingTime: '00:00:00',
            closingTime: '00:00:00',
            normalTicket: true,
            earlyBird: true,
            coverPhoto: [],
            coverPhotoSrc: '',
            bannerSrc: '',
            banner: [],
            termsCondition: [{ name: "" }],
            map: false,
            customTicket: false,
            customTicketDetail: [{ name: "", quantity: "", price: "" }],
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.handleLocalStorage();
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
                var userObj = JSON.parse(obj)
                if (!!userObj) {
                    this.setState({
                        userId: userObj._id,
                        profileId: userObj.profileId,
                        statesUS: states
                    })
                }
            })
    }

    onChangeState(value) {
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

    onSelectTicket(value) {
        if (value[0] === 'Early Bird') {
            this.setState({ earlyBird: true, normalTicket: false })
        } else if (value[0] === 'Normal Ticket') {
            this.setState({ earlyBird: false, normalTicket: true })
        } else if (value[0] === 'Both' || value.length == 0) {
            this.setState({ earlyBird: true, normalTicket: true })
        } else if (value[0] === 'Free') {
            this.setState({ earlyBird: false, normalTicket: false })
        } else if (value[0] === 'Custom Tickets') {
            this.setState({ earlyBird: false, normalTicket: false, customTicket: true })
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
        let { fileList, coverPhoto, banner } = this.state,
            arr = [],
            image = { ...fileList[0], ...{ id: 'image' } },
            coverImg = { ...coverPhoto[0], ...{ id: 'cover' } },
            bannerImg = { ...banner[0], ...{ id: 'banner' } };
        arr.push(image, coverImg, bannerImg)
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                this.setState({ loader: true })
                this.funcForUpload(values, arr)
            }
        })
    }

    async funcForUpload(values, arr) {
        Promise.all(arr.map((val) => {
            return this.uploadFile(val).then((result) => {
                let id = val.id;
                return { [id]: result.body.url }
            })
        })).then((results) => {
            this.postData(values, results);
        })
    }

    async postData(values, response) {
        const { dateObj, userId, profileId, objectId, website, faceBook, linkdIn, google,
            earlyBird, normalTicket, earlyBirdFree, normalTicketFree, openingTime,
            closingTime, termsCondition, map, customTicketDetail } = this.state;
        let rand = Math.floor((Math.random() * 1000000) + 54),
            image = '',
            cover = '',
            banner = '';
        response.map((elem) => {
            if (Object.keys(elem)[0] == 'image') {
                image = elem['image']
            }
            else if (Object.keys(elem)[0] == 'cover') {
                cover = elem['cover']
            }
            else if (Object.keys(elem)[0] == 'banner') {
                banner = elem['banner']
            }
        })
        var randomKey = values.eventTitle + "_" + values.eventCategory[0] + "_" + rand;
        let obj = {
            state: values.state[0],
            city: values.city[0],
            address: values.address,
            dateRange: dateObj,
            description: values.description,
            email: values.email,
            eventCategory: values.eventCategory[0],
            eventTitle: values.eventTitle,
            images: image,
            bannerSrc: banner,
            coverPhotoSrc: cover,
            top: false,
            name: values.name,
            number: values.number,
            openingTime,
            closingTime,
            earlyBird,
            termsCondition,
            map,
            earlyBirdAvailableTickets: earlyBird === false ? '' : values.earlyBirdAvailableTickets,
            earlyBirdTotalTickets: earlyBird === false ? '' : values.earlyBirdTotalTickets,
            earlyBirdPaymentMode: values.earlyBirdPaymentMode === undefined ? [] : values.earlyBirdPaymentMode,
            earlyBirdDelivery: values.earlyBirdDelivery === undefined ? [] : values.earlyBirdDelivery,
            earlyBirdPrice: earlyBird === false ? '' : values.earlyBirdPrice,
            earlyBirdFree,
            normalTicket,
            normalTicketAvailableTickets: normalTicket === false ? '' : values.normalTicketAvailableTickets,
            normalTicketTotalTickets: normalTicket === false ? '' : values.normalTicketTotalTickets,
            normalTicketPaymentMode: values.normalTicketPaymentMode === undefined ? [] : values.normalTicketPaymentMode,
            normalTicketDelivery: values.normalTicketDelivery === undefined ? [] : values.normalTicketDelivery,
            normalTicketPrice: normalTicket === false ? '' : values.normalTicketPrice,
            normalTicketFree,
            customTicketDetail,
            website,
            faceBook,
            linkdIn,
            google,
            userId,
            profileId,
            objectId,
            randomKey,
            posted: moment().format('LL')
        }
        let req = await HttpUtils.post('postEventPortal', obj)
        if (req.code === 200) {
            this.setState({ objData: obj, msg: true, randomKey })
        }
    }

    validateDate(rule, value, callback) {
        if (!value.length) {
            callback('Please select your Date Range!');
        } else {
            callback();
        }
    }

    onChangeDate(dates, dateStrings) {
        this.setState({
            dateObj: {
                from: dateStrings[0],
                to: dateStrings[1]
            }
        })
    }

    checkValue(rule, value, callback) {
        this.setState({ desLength: value ? value.length : 0 })
        callback();
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

    onChangePrice1(e) {
        this.setState({ earlyBirdFree: e.target.checked });
    }

    onChangePrice2(e) {
        this.setState({ normalTicketFree: e.target.checked });
    }

    checkCheckBox = (rule, value, callback) => {
        if (!value) {
            callback('Please check at least one!');
        } else {
            callback();
        }
    };

    // validateNumber(rule, value, callback){
    //     if(isNaN(value)){
    //         callback('Please type Numbers');
    //     }else if(rule.field === 'earlyBirdPrice' || rule.field === 'normalTicketPrice'){
    //         if(value < 5){
    //             callback('put atleast $5')
    //         }else {
    //             callback()
    //         }
    //     }
    // }

    onChangeValue(e) {
        if (e.target.id === 'faceBook') {
            this.setState({ faceBook: e.target.value })
        } else if (e.target.id === 'linkdIn') {
            this.setState({ linkdIn: e.target.value })
        } else if (e.target.id === 'google') {
            this.setState({ google: e.target.value })
        } else if (e.target.id === 'website') {
            this.setState({ website: e.target.value })
        }
    }

    validateTime(rule, value, callback) {
        if (!(!!value)) {
            callback('Please select your Time!');
        } else {
            callback();
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

    onChangeCoverPhoto = info => {
        let self = this,
            file = info.file,
            coverPhoto = [],
            reader = new FileReader();

        //Read the contents of Image File.
        reader.readAsDataURL(info.file.originFileObj);
        reader.onload = function (e) {

            //Initiate the JavaScript Image object.
            var image = new Image();

            //Set the Base64 string return from FileReader as source.
            image.src = e.target.result;

            //Validate the File Height and Width.
            image.onload = function () {
                let height = this.height,
                    width = this.width;
                if (height < width) {
                    file.src = e.target.result;
                    coverPhoto.push(file);
                    self.setState({ coverPhotoSrc: file.src, coverPhoto });
                    return false;
                }
                alert("Image must be in landscape mode.");
                return true;
            };
        }

    }

    onChangeBanner = info => {
        if (info.event !== undefined) {
            let self = this,
                file = info.file,
                banner = [],
                reader = new FileReader();

            //Read the contents of Image File.
            reader.readAsDataURL(info.file.originFileObj);
            reader.onload = function (e) {

                //Initiate the JavaScript Image object.
                var image = new Image();

                //Set the Base64 string return from FileReader as source.
                image.src = e.target.result;

                //Validate the File Height and Width.
                image.onload = function () {
                    let height = this.height,
                        width = this.width;
                    if (height > width) {
                        file.src = e.target.result;
                        banner.push(file);
                        self.setState({ bannerSrc: file.src, banner });
                        return false;
                    }
                    alert("Image must be in portrait mode.");
                    return true;
                };
            }
        }

    }

    handleCard = (e, f) => {
        this.setState({ [e]: f })
    }

    render() {
        const { fileList, previewImage, previewVisible, statesUS, citiesUS, msg, objData, randomKey } = this.state;
        const { getFieldDecorator } = this.props.form;

        if (msg === true) {
            return <Redirect to={{ pathname: `/detail_eventPortal/${randomKey}`, state: objData }} />
        }
        const antIcon = <Icon type="loading" style={{ fontSize: 24, marginRight: '10px' }} spin />;
        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">Upload</div>
            </div>
        );

        const bannerButton = (
            <div style={{ height: '190px', width: '150px', border: '1px dotted black' }}>
                <Icon type="plus-square" />
                <div className="ant-upload-text">Upload Banner</div>
            </div>
        )

        function filter(inputValue, path) {
            return (path.some(option => (option.label).toLowerCase().indexOf(inputValue.toLowerCase()) > -1));
        }

        const optionsPayment = [
            { label: 'On Event', value: 'On Event' },
            { label: 'Cash', value: 'Cash' },
            { label: 'PayPal', value: 'PayPal' },
            { label: 'Credit Card', value: 'Credit Card' }
        ];

        const optionsDelivery = [
            { label: 'At Venue', value: 'At Venue' },
            { label: 'Pickup', value: 'Pickup' },
            { label: 'Free Shipping', value: 'Free Shipping' },
        ];


        return (
            <div>
                <Burgermenu />
                <div className="hidden-sm" style={{ marginTop: '10%' }}></div>
                <div className="visible-sm" style={{ marginTop: '15%' }}></div>
                <div className="row jobdetail-page" style={{ backgroundColor: "#37a99b" }}>
                    <div className="col-md-12 col-sm-12 col-xs-12" style={{ textAlign: "center" }}>
                        <div className="">
                            <h1 style={{ fontFamily: 'Work Sans, sans-serif', fontWeight: "bold", color: 'white' }}>SUBMIT YOUR EVENT</h1>
                        </div>
                    </div>
                </div>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <div className="panel-body">
                        <div className="panel panel-default">
                            <div className="bold_c_text" style={{ backgroundColor: '#37a99b', color: 'white', padding: '8px', fontFamily: 'Crimson Text, serif !important' }}>
                                <Icon type="info-circle" />
                                <span className="margin_font_location">Event Detail</span>
                            </div>
                            <div className="container" style={{ width: '80%' }}>
                                <section>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="sel1">Event Title</label>
                                                    <FormItem>
                                                        {getFieldDecorator('eventTitle', {
                                                            initialValue: this.state.eventTitle,
                                                            rules: [{ required: true, message: 'Please input your Event Title!', whitespace: true }],
                                                        })(
                                                            <input type="text" className="form-control" />
                                                        )}
                                                    </FormItem>
                                                </div>
                                            </div>
                                            <div className="col-md-6" style={{ textAlign: 'left', display: 'grid' }}>
                                                <label htmlFor="Price Mode"> Category </label>
                                                <FormItem>
                                                    {getFieldDecorator('eventCategory', {
                                                        initialValue: this.state.eventCategory,
                                                        rules: [{ type: 'array', required: true, message: 'Please select your Event Category!' }],
                                                    })(
                                                        <Cascader options={category} showSearch={{ filter }} />
                                                    )}
                                                </FormItem>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="col-md-6">
                                                <div className="row" style={{ padding: '0px' }}>
                                                    <div className="col-md-7" style={{ display: 'grid' }}>
                                                        <label> State </label>
                                                        <FormItem>
                                                            {getFieldDecorator('state', {
                                                                initialValue: this.state.state,
                                                                rules: [{ type: 'array', required: true, message: 'Please select your State!' }],
                                                            })(
                                                                <Cascader options={statesUS} showSearch={{ filter }} onChange={this.onChangeState.bind(this)} />
                                                            )}
                                                        </FormItem>
                                                    </div>
                                                    <div className="col-md-5">
                                                        <label> City </label>
                                                        <FormItem>
                                                            {getFieldDecorator('city', {
                                                                initialValue: this.state.city,
                                                                rules: [{ type: 'array', required: true, message: 'Please select your City!' }],
                                                            })(
                                                                <Cascader options={citiesUS} showSearch={{ filter }} />
                                                            )}
                                                        </FormItem>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="sel1">Date Range</label>
                                                <FormItem>
                                                    {getFieldDecorator('dateRange', {
                                                        initialValue: [(this.state.startDate),
                                                        (this.state.endDate)],
                                                        rules: [{ validator: this.validateDate.bind(this) }],
                                                    })(
                                                        <RangePicker
                                                            ranges={{
                                                                Today: [moment(), moment()],
                                                                'This Month': [moment(), moment().endOf('month')]
                                                            }}
                                                            onChange={this.onChangeDate.bind(this)}
                                                        />
                                                    )}
                                                </FormItem>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="sel1">Description</label>
                                                    <FormItem>
                                                        {getFieldDecorator('description', {
                                                            initialValue: this.state.description,
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
                                                        <span style={{ "float": "right" }}>{500 - this.state.desLength} Words</span>
                                                    </FormItem>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="sel1">Address</label>
                                                    <FormItem>
                                                        {getFieldDecorator('address', {
                                                            initialValue: this.state.address,
                                                            rules: [{ required: true, message: 'Please input your Address!', whitespace: true }],
                                                        })(
                                                            <Input />
                                                        )}
                                                    </FormItem>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                    <div className="panel-body">
                        <div className="panel panel-default">
                            <div className="bold_c_text" style={{ backgroundColor: '#37a99b', color: 'white', padding: '8px', fontFamily: 'Crimson Text, serif !important' }}>
                                <Icon type="info-circle" />
                                <span className="margin_font_location">Upload</span>
                            </div>
                            <div className="container" style={{ width: '80%' }}>
                                <section className="row">
                                    <div className="col-md-3">
                                        <FormItem>
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
                                                        {fileList.length > 1 ? null : uploadButton}
                                                    </Upload>
                                                    <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                                                        <img alt="example" style={{ width: '100%' }} src={previewImage} />
                                                    </Modal>
                                                </div>
                                            )}
                                        </FormItem>
                                    </div>
                                    <div className="col-md-6">
                                        <FormItem>
                                            {getFieldDecorator('coverPhoto', {
                                                rules: [{ required: true, message: 'Please upload your Images!', whitespace: true }],
                                            })(
                                                <span>
                                                    {this.state.coverPhotoSrc.length == 0 && <Dragger
                                                        id="coverPhoto"
                                                        name='file'
                                                        action="//jsonplaceholder.typicode.com/posts/"
                                                        onChange={this.onChangeCoverPhoto}>
                                                        <p className="ant-upload-drag-icon">
                                                            <Icon type="inbox" />
                                                        </p>
                                                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                                                        <p className="ant-upload-hint">Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
                                                    </Dragger>}
                                                    {this.state.coverPhotoSrc.length > 0 && <div>
                                                        <img alt="example" src={this.state.coverPhotoSrc} style={{ height: '190px' }} />
                                                    </div>}
                                                </span>
                                            )}
                                        </FormItem>
                                    </div>
                                    <div className="col-md-3">
                                        <FormItem>
                                            {getFieldDecorator('banner', {
                                                rules: [{ required: true, message: 'Please upload your Images!', whitespace: true }],
                                            })(
                                                <span>
                                                    {this.state.bannerSrc.length == 0 && <Upload
                                                        action="//jsonplaceholder.typicode.com/posts/"
                                                        // listType="picture-card"
                                                        // style={{border: '1px dotted black'}}
                                                        // fileList={fileList}
                                                        onPreview={this.handlePreview}
                                                        onChange={this.onChangeBanner}
                                                    >
                                                        {bannerButton}
                                                    </Upload>}
                                                    {this.state.bannerSrc.length > 0 && <div>
                                                        <img alt="example" src={this.state.bannerSrc} style={{ height: '190px' }} />
                                                    </div>}
                                                </span>
                                            )}
                                        </FormItem>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                    <div className="panel-body">
                        <div className="panel panel-default">
                            <div className="bold_c_text" style={{ backgroundColor: '#37a99b', color: 'white', padding: '8px', fontFamily: 'Crimson Text, serif !important' }}>
                                <Icon type="info-circle" />
                                <span className="margin_font_location">Ticket Detail</span>
                            </div>
                            <div className="container" style={{ width: '80%' }}>
                                <section>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="col-md-6">
                                                <label> Select Tickets </label>
                                                <FormItem>
                                                    {getFieldDecorator('ticketsCategory', {
                                                        initialValue: this.state.ticketsCategory,
                                                        rules: [{ type: 'array', required: true, message: 'Please select your Ticket category!' }],
                                                    })(
                                                        <Cascader options={ticketNames} showSearch={{ filter }} onChange={this.onSelectTicket.bind(this)} />
                                                    )}
                                                </FormItem>
                                            </div>
                                            <div className="col-md-6">
                                                <label>Opening & closing Time</label>
                                                <div className="row" style={{ marginTop: '-17px' }}>
                                                    <div className="col-md-6">
                                                        <FormItem>
                                                            {getFieldDecorator('openingTime', {
                                                                initialValue: moment(this.state.openingTime, 'HH:mm:ss'),
                                                                rules: [{ validator: this.validateTime.bind(this) }],
                                                            })(
                                                                <TimePicker placeholder="Opening Time" onChange={this.onOpeningTime.bind(this)} />
                                                            )}
                                                        </FormItem>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <FormItem>
                                                            {getFieldDecorator('closingTime', {
                                                                initialValue: moment(this.state.closingTime, 'HH:mm:ss'),
                                                                rules: [{ validator: this.validateTime.bind(this) }],
                                                            })(
                                                                <TimePicker placeholder="Closing Time" onChange={this.onClosingTime.bind(this)} />
                                                            )}
                                                        </FormItem>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {this.state.earlyBird && <div className="row">
                                        <div className="col-md-12">
                                            <div className="col-md-6">
                                                <label style={{ fontSize: '18px' }}>Early Bird</label><br />
                                                <label> Available Tickets &nbsp;&nbsp;&nbsp;Total</label>
                                                <div className="row">
                                                    <div className="col-md-3" style={{ paddingLeft: '0px' }}>
                                                        <FormItem>
                                                            {getFieldDecorator('earlyBirdAvailableTickets', {
                                                                initialValue: this.state.earlyBirdAvailableTickets,
                                                                rules: [{ required: true, message: 'Please input your Available Tickets!', whitespace: true },
                                                                    // { validator: this.validateNumber.bind(this) }
                                                                ],
                                                            })(
                                                                <input type="text" className="form-control" />
                                                            )}
                                                        </FormItem>
                                                    </div>
                                                    <div className="col-md-3" style={{ paddingRight: '0px' }}>
                                                        <FormItem>
                                                            {getFieldDecorator('earlyBirdTotalTickets', {
                                                                initialValue: this.state.earlyBirdTotalTickets,
                                                                rules: [{ required: true, message: 'Please input your Total Tickets!', whitespace: true },
                                                                    // { validator: this.validateNumber.bind(this) }
                                                                ],
                                                            })(
                                                                <input type="text" className="form-control" />
                                                            )}
                                                        </FormItem>
                                                    </div>
                                                    <div className="col-md-3" style={{ marginTop: '-27px' }}>
                                                        <label> Price </label>
                                                        <FormItem>
                                                            {getFieldDecorator('earlyBirdPrice', {
                                                                initialValue: this.state.earlyBirdPrice,
                                                                rules: [{ required: true, message: 'Please input your Price!', whitespace: true },
                                                                    // { validator: this.validateNumber.bind(this) }
                                                                ],
                                                            })(
                                                                <input type="text" className="form-control" />
                                                            )}
                                                        </FormItem>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <label className="ant-checkbox ant-checkbox-wrapper">
                                                            <Checkbox checked={this.state.earlyBirdFree} onChange={this.onChangePrice1.bind(this)}>(Free)</Checkbox>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            {!this.state.earlyBirdFree && <div className="col-md-6" style={{ marginTop: '35px' }}>
                                                <label> Mode Of Payment </label>
                                                <FormItem>
                                                    {getFieldDecorator('earlyBirdPaymentMode', {
                                                        initialValue: this.state.earlyBirdPaymentMode,
                                                        rules: [{ validator: this.checkCheckBox }],
                                                    })(
                                                        <CheckboxGroup options={optionsPayment} />
                                                    )}
                                                </FormItem>
                                            </div>}
                                        </div>
                                    </div>}
                                    {this.state.earlyBird && <div className="row">
                                        {!this.state.earlyBirdFree && <div className="col-md-6">
                                            <label>Ticket Delivery</label>
                                            <FormItem>
                                                {getFieldDecorator('earlyBirdDelivery', {
                                                    initialValue: this.state.earlyBirdDelivery,
                                                    rules: [{ validator: this.checkCheckBox }],
                                                })(
                                                    <CheckboxGroup options={optionsDelivery} />
                                                )}
                                            </FormItem>
                                        </div>}
                                        <div className="col-md-6">

                                        </div>
                                    </div>}
                                    {this.state.normalTicket && this.state.earlyBird && <hr />}
                                    {this.state.normalTicket && <div className="row">
                                        <div className="col-md-12">
                                            <div className="col-md-6">
                                                <label style={{ fontSize: '18px' }}>Normal Ticket</label><br />
                                                <label> Available Tickets &nbsp;&nbsp;&nbsp;Total</label>
                                                <div className="row">
                                                    <div className="col-md-3" style={{ paddingLeft: '0px' }}>
                                                        <FormItem>
                                                            {getFieldDecorator('normalTicketAvailableTickets', {
                                                                initialValue: this.state.normalTicketAvailableTickets,
                                                                rules: [{ required: true, message: 'Please input your Available Tickets!', whitespace: true },
                                                                    // { validator: this.validateNumber.bind(this) }
                                                                ],
                                                            })(
                                                                <input type="text" className="form-control" />
                                                            )}
                                                        </FormItem>
                                                    </div>
                                                    <div className="col-md-3" style={{ paddingRight: '0px' }}>
                                                        <FormItem>
                                                            {getFieldDecorator('normalTicketTotalTickets', {
                                                                initialValue: this.state.normalTicketTotalTickets,
                                                                rules: [{ required: true, message: 'Please input your Total Tickets!', whitespace: true },
                                                                    // { validator: this.validateNumber.bind(this) }
                                                                ],
                                                            })(
                                                                <input type="text" className="form-control" />
                                                            )}
                                                        </FormItem>
                                                    </div>
                                                    <div className="col-md-3" style={{ marginTop: '-27px' }}>
                                                        <label> Price </label>
                                                        <FormItem>
                                                            {getFieldDecorator('normalTicketPrice', {
                                                                initialValue: this.state.normalTicketPrice,
                                                                rules: [{ required: true, message: 'Please input your Price!', whitespace: true },
                                                                    // { validator: this.validateNumber.bind(this) }
                                                                ],
                                                            })(
                                                                <input type="text" className="form-control" />
                                                            )}
                                                        </FormItem>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <label className="ant-checkbox ant-checkbox-wrapper">
                                                            <Checkbox checked={this.state.normalTicketFree} onChange={this.onChangePrice2.bind(this)}>(Free)</Checkbox>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            {!this.state.normalTicketFree && <div className="col-md-6" style={{ marginTop: '35px' }}>
                                                <label> Mode Of Payment </label>
                                                <FormItem>
                                                    {getFieldDecorator('normalTicketPaymentMode', {
                                                        initialValue: this.state.normalTicketPaymentMode,
                                                        rules: [{ validator: this.checkCheckBox }],
                                                    })(
                                                        <CheckboxGroup options={optionsPayment} />
                                                    )}
                                                </FormItem>
                                            </div>}
                                        </div>
                                    </div>}
                                    {this.state.normalTicket && <div className="row">
                                        {!this.state.normalTicketFree && <div className="col-md-6">
                                            <label>Ticket Delivery</label>
                                            <FormItem>
                                                {getFieldDecorator('normalTicketDelivery', {
                                                    initialValue: this.state.normalTicketDelivery,
                                                    rules: [{ validator: this.checkCheckBox }],
                                                })(
                                                    <CheckboxGroup options={optionsDelivery} />
                                                )}
                                            </FormItem>
                                        </div>}
                                        <div className="col-md-6">

                                        </div>
                                    </div>}
                                    {this.state.customTicket && <div className="row">
                                        <CustomTickets
                                            label="Custom Ticket"
                                            id="customTicketDetail"
                                            value={this.state.customTicketDetail}
                                            onChange={this.handleCard}
                                        />
                                    </div>}
                                </section>
                            </div>
                        </div>
                    </div>
                    <div className="panel-body">
                        <div className="panel panel-default">
                            <div className="bold_c_text" style={{ backgroundColor: '#37a99b', color: 'white', padding: '8px', fontFamily: 'Crimson Text, serif !important' }}>
                                <Icon type="info-circle" />
                                <span className="margin_font_location">Organizer Detail</span>
                            </div>
                            <div className="container" style={{ width: '80%' }}>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label htmlFor="sel1">Name</label>
                                            <FormItem>
                                                {getFieldDecorator('name', {
                                                    initialValue: this.state.name,
                                                    rules: [{ required: true, message: 'Please input your Contact Name!', whitespace: true }],
                                                })(
                                                    <Input />
                                                )}
                                            </FormItem>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label htmlFor="sel1">Email</label>
                                            <FormItem>
                                                {getFieldDecorator('email', {
                                                    initialValue: this.state.email,
                                                    rules: [{ type: 'email', message: 'The input is not valid E-mail!', whitespace: true },
                                                    { required: true, message: 'Please input your Contact Email!', whitespace: true }],
                                                })(
                                                    <Input />
                                                )}
                                            </FormItem>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label htmlFor="sel1">Website</label>
                                            <FormItem>
                                                <input type="text" id='website'
                                                    value={this.state.website}
                                                    className="form-control" onChange={this.onChangeValue.bind(this)} />
                                            </FormItem>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="sel1">Phone</label>
                                            <FormItem>
                                                {getFieldDecorator('number', {
                                                    initialValue: this.state.number,
                                                    rules: [{
                                                        required: true,
                                                        message: 'Please input your Number!',
                                                        whitespace: true
                                                    },
                                                        // { validator: this.validateNumber.bind(this) }
                                                    ],
                                                })(
                                                    <input type="text" className="form-control" />
                                                )}
                                            </FormItem>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="usr">Social Media Links</label>
                                            <FormItem>
                                                <div className='row' style={{ paddingTop: '0px', paddingBottom: '0px' }}>
                                                    <button
                                                        type="button"
                                                        className="btn btn-fb"
                                                        style={{ width: '10%', display: 'inline-block', marginBottom: '4px', borderRadius: '0px', backgroundColor: '#3B5999' }}
                                                    >
                                                        <i className="fa fa-facebook" style={{ color: 'white' }}></i>
                                                    </button>
                                                    <input type="text"
                                                        id='faceBook'
                                                        className="form-control"
                                                        value={this.state.faceBook}
                                                        onChange={this.onChangeValue.bind(this)}
                                                        style={{ width: '90%', display: 'inline-block', borderRadius: '0px' }}
                                                    />
                                                </div>
                                                <div className='row' style={{ paddingTop: '0px', paddingBottom: '0px' }}>
                                                    <button
                                                        type="button"
                                                        className="btn btn-fb"
                                                        style={{ width: '10%', display: 'inline-block', marginBottom: '4px', borderRadius: '0px', backgroundColor: '#0077B5' }}
                                                    >
                                                        <i className="fa fa-linkedin" style={{ color: 'white' }}></i>
                                                    </button>
                                                    <input
                                                        type="text"
                                                        id='linkdIn'
                                                        className="form-control"
                                                        value={this.state.linkdIn}
                                                        onChange={this.onChangeValue.bind(this)}
                                                        style={{ width: '90%', display: 'inline-block', borderRadius: '0px' }}
                                                    />
                                                </div>
                                                <div className='row' style={{ paddingTop: '0px', paddingBottom: '0px' }}>
                                                    <button
                                                        type="button"
                                                        className="btn btn-fb"
                                                        style={{ width: '10%', display: 'inline-block', marginBottom: '4px', borderRadius: '0px', backgroundColor: '#DC4E41' }}
                                                    >
                                                        <i className="fa fa-google-plus" style={{ color: 'white' }}></i>
                                                    </button>
                                                    <input
                                                        type="text"
                                                        id='google'
                                                        className="form-control"
                                                        value={this.state.google}
                                                        onChange={this.onChangeValue.bind(this)}
                                                        style={{
                                                            width: '90%',
                                                            display: 'inline-block', borderRadius: '0px'
                                                        }} />
                                                </div>
                                            </FormItem>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="usr">Terms and Conditions</label>
                                            <Shareholder
                                                id="termsCondition"
                                                value={this.state.termsCondition}
                                                onChange={this.handleCard}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row center_global row">
                        {this.state.loader && <Spin indicator={antIcon} />}
                        <button disabled={!!this.state.loader} style={{ textAlign: 'center', width: "45%" }} className="btn button_custom">Submit Event</button>
                    </div>
                </Form>
                <Footer />
            </div>
        )
    }
}

const WrappedEventForm = Form.create()(EventPortal);
export default WrappedEventForm;
