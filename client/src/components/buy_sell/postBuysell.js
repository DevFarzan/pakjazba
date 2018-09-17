import React, { Component } from 'react';
import {
    Form,
    Input,
    Icon,
    Cascader,
    Checkbox,
    notification,
    Upload,
    Modal
} from 'antd';
import AsyncStorage from "@callstack/async-storage/lib/index";
import Burgermenu from '../header/burgermenu';
import Footer from '../footer/footer';
import sha1 from "sha1";
import superagent from "superagent";
import { Redirect } from 'react-router';
import {HttpUtils} from "../../Services/HttpUtils";
import stateCities from "../../lib/countrycitystatejson";

const { TextArea } = Input;
const CheckboxGroup = Checkbox.Group;
const FormItem = Form.Item
//const stateCities= require('countrycitystatejson')

const condition = [{
    value: 'New',
    label: 'New'
},{
    value: 'Used',
    label: 'Used',
},{
    value: 'Good',
    label: 'Good',
},{
    value: 'Excellent',
    label: 'Excellent',
},{
    value: 'Age-Worn',
    label: 'Age-Worn',
},{
    value: 'Refurbished',
    label: 'Refurbished',
}];

class Postbuysell extends Component{
    constructor(props){
        super(props)
        this.state = {
            userId: '',
            desLength: 0,
            fileList: [],
            previewVisible: false,
            previewImage: '',
            hidePrice: false,
            hideAddress: false,
            msg: false,
            dLength: '',
            dWidth: '',
            dHeight: '',
            err: false,
            errMsg: '',
            categ: [],
            subCat: [],
            selectedCat: [],
            allCateg: {},
            selectSubCat: false,
            secSubCat: [],
            profileId: '',
            dataCat: [],
            dataCatSub: [],
            dataSubSub: [],
            dataTitle: '',
            dataDescription: '',
            dataPrice: '',
            dataHidePrice: false,
            dataCondition: [],
            dataMake: '',
            dataModelName: '',
            dataModelNumber: '',
            dataContact: '',
            dataEmail: '',
            dataNumber: '',
            dataCheckedList: [],
            dataDelivery: [],
            dataCity: [],
            dataAddress: '',
            dataHideAddress: '',
            imageList: [],
            objectId: '',
            statesUS: [],
            citiesUS: [],
        }
    }

    componentDidMount(){
        this.categorylist();
        this.handleLocalStorage();
        let data = this.props.location.state;

        if(data){
            this.setState({
                dataCat: [data.category],
                dataCatSub: [data.subcategory],
                dataSubSub: [data.subsubcategory],
                dataTitle: data.title,
                dataDescription: data.description,
                dataPrice: data.price,
                dataHidePrice: data.hideprice,
                dataCondition: [data.condition],
                dataMake: data.modelmake,
                dataModelName: data.modelname,
                dataModelNumber: data.modelnumber,
                dLength: data.sizedimension[0].length,
                dWidth: data.sizedimension[0].width,
                dHeight: data.sizedimension[0].height,
                dataContact: data.contactname,
                dataEmail: data.contactemail,
                dataNumber: data.contactnumber,
                dataCheckedList: data.modeofcontact,
                dataDelivery: data.delivery,
                dataCity: [data.city],
                dataState: [data.state],
                dataAddress: data.address,
                dataHideAddress: data.hideaddress,
                imageList: data.images,
                objectId: data._id
            })
        }
    }

    async categorylist(){
        let res = await HttpUtils.get('categoryclassifieddata')
        let mainCategory = res.data[1]
        let categ = Object.keys(mainCategory)
        categ = categ.filter((val) => val !== '_id')
        categ = categ.map((elem) => {
            return {
                value: elem,
                label: elem
            }
        })
        this.setState({
            categ: categ,
            allCateg: mainCategory
        })
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
                    })
                }
            })
    }

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

    checkCheckBox = (rule, value, callback) => {
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

        Promise.all(fileList.map((val) => {
            return this.uploadFile(val).then((result) => {
                return result.body.url
            })
        })).then((results) => {
            this.postData(values, results)
        })
    }

    async postData(values, response) {
        const {userId, dLength, dWidth, dHeight, profileId, objectId} = this.state;
        let obj = {
            user_id: userId,
            profileId: profileId,
            address: values.address,
            category: values.category[0],
            subCategory: values.subcategory[0],
            city: values.city[0],
            state: values.state[0],
            hideAddress: this.state.hideAddress,
            hidePrice: this.state.hidePrice,
            condition: values.condition[0],
            contactName: values.contactName,
            contactEmail: values.contactEmail,
            contactNumber: values.contactNumber,
            sizedimension: !!(dLength && dWidth && dHeight) ? [{length: dLength, width: dWidth, height: dHeight}] : !!(dLength) ? [{length: dLength}] : !!(dWidth) ? [{width: dWidth}] : !!(dHeight) ? [{height: dHeight}] : [],
            contactMode: values.contactMode,
            delivery: values.delivery,
            description: values.description,
            make: values.make,
            modelName: values.modelName,
            number: values.number,
            postingTitle: values.postingTitle,
            subSubCategory: values.subsubcategory ? values.subsubcategory[0] : '',
            price: values.price,
            arr_url: response ? response : [],
            objectId: objectId
        }
        let req = await HttpUtils.post('postbuyselldata', obj)
        if(req.code === 200){
            this.props.form.resetFields();
            this.openNotification()
            this.setState({msg: true, dLength: '', dWidth: '', dHeight: ''})
        }
    }

    openNotification() {
        notification.open({
            message: 'Success ',
            description: 'Your need is submited successfully, Kindly visit your profile',
        });
    };

    onChangePrice(e) {
        this.setState({hidePrice: e.target.checked});
    }

    onChangeAddress(e) {
        this.setState({hideAddress: e.target.checked});
    }

    onDimensionChange = (e) => {
        if (!isNaN(e.target.value)) {
            this.setState({err: false, errMsg: ''})
            if (e.target.placeholder === 'Length') {
                this.setState({dLength: e.target.value})
            } else if (e.target.placeholder === 'Width') {
                this.setState({dWidth: e.target.value})
            } else if (e.target.placeholder === 'Height') {
                this.setState({dHeight: e.target.value})
            }
        } else {
            if (e.target.placeholder === 'Length') {
                this.setState({err: true, errMsg: 'Input must be number', dLength: ''})
            } else if (e.target.placeholder === 'Width') {
                this.setState({err: true, errMsg: 'Input must be number', dWidth: ''})
            } else if (e.target.placeholder === 'Height') {
                this.setState({err: true, errMsg: 'Input must be number', dHeight: ''})
            }
        }
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

    onChangeCat(value){
        if(!!value.length) {
            const {allCateg} = this.state;
            let selected = allCateg[value[0]]
            let selectedArr = Object.keys(selected[0])
            selectedArr = selectedArr.map((elem) => {
                return {
                    label: elem,
                    value: elem
                }
            })
            this.setState({
                subCat: selectedArr,
                selectedCat: selected[0],
                secSubCat: [],
                selectSubCat: false
            })
        }
    }

    onChangeSubCat(value){
        if(!!value.length) {
            const { selectedCat } = this.state;
            let selected = selectedCat[value[0]]
            selected = selected.map((elem) => {
                return {
                    label: elem,
                    value: elem
                }
            })
            this.setState({
                secSubCat: selected,
                selectSubCat: true
            })
        }
    }

    deleteImage(e){
        let { imageList } = this.state;
        imageList = imageList.filter((elem) => elem !== e)
        this.setState({imageList: imageList})
    }

    render(){
        const { previewVisible, previewImage, fileList, desLength, categ, subCat, selectSubCat, secSubCat, statesUS, citiesUS } = this.state;
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
                <Burgermenu/>
                {/*================================post business form start============================*/}
                <div className="">
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <div className="panel-group" style={{paddingTop:"104px"}}>
                            <div className="panel panel-default">
                            <div className="main_c_panel">Add Business<br/>
                                    Find all your Local Business in one place
                                </div>
                                <div className="panel-body">
                                <div className="panel panel-default">
                                        <div className="panel-heading bold_c_text"><Icon type="info-circle"/><span
                                            className="margin_font_location">Brand Detail</span></div>
                                    <FormItem
                                        {...formItemLayout}
                                        label="Category"
                                        style={{marginTop: "20px"}}>
                                        {getFieldDecorator('category', {
                                            initialValue: this.state.dataCat,
                                            rules: [{ type: 'array', required: true, message: 'Please select your Category!' }],
                                        })(
                                            <Cascader options={categ} onChange={this.onChangeCat.bind(this)}/>
                                        )}
                                    </FormItem>
                                    <FormItem
                                        {...formItemLayout}
                                        label="Sub-Category"
                                    >
                                        {getFieldDecorator('subcategory', {
                                            initialValue: this.state.dataCatSub,
                                            rules: [{ type: 'array', required: true, message: 'Please select your Sub-Category!' }],
                                        })(
                                            <Cascader options={subCat} onChange={this.onChangeSubCat.bind(this)}/>
                                        )}
                                    </FormItem>
                                    {(!!this.state.dataSubSub.length || selectSubCat) && <div className="row">
                                        <div className="col-md-3"></div>
                                        <div className="col-md-6" style={{padding: 0}}>
                                            <FormItem>
                                                {getFieldDecorator('subsubcategory', {
                                                    initialValue: this.state.dataSubSub,
                                                    rules: [{ type: 'array', required: true, message: 'Please select your Posting Type!' }],
                                                })(
                                                    <Cascader options={secSubCat} />
                                                )}
                                            </FormItem>
                                        </div>
                                        <div className="col-md-3"></div>
                                    </div>}
                                    <FormItem
                                        {...formItemLayout}
                                        label="Posting Title"
                                    >
                                        {getFieldDecorator('postingTitle', {
                                            initialValue: this.state.dataTitle,
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
                                            initialValue: this.state.dataDescription,
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
                                                maxLength="500"
                                            />
                                        )}
                                        <br />
                                        <span>{500 - desLength}</span>
                                    </FormItem>
                                    <div className="row" style={{'textAlign': 'center'}}>
                                        <div className="col-md-2"></div>
                                        <div className="col-md-3">
                                            <FormItem
                                                {...formItemLayout}
                                                label="Price"
                                            >
                                                {getFieldDecorator('price', {
                                                    initialValue: this.state.dataPrice,
                                                    rules: [{ validator: this.checkPriceValue.bind(this) }],
                                                })(
                                                    <Input />
                                                )}
                                            </FormItem>
                                        </div>
                                        <div className="col-md-3" style={{'textAlign': 'left'}}>
                                            <Checkbox checked={this.state.dataHidePrice} onChange={this.onChangePrice.bind(this)}>(Hide Price)</Checkbox>
                                        </div>
                                        <div className="col-md-4"></div>
                                    </div>
                                </div>
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
                                            initialValue: this.state.dataCondition,
                                            rules: [{ type: 'array', required: true, message: 'Please select your Condition!' }],
                                        })(
                                            <Cascader options={condition} />
                                        )}
                                    </FormItem>
                                    <FormItem
                                        {...formItemLayout}
                                        label="Make"
                                    >
                                        {getFieldDecorator('make', {
                                            initialValue: this.state.dataMake,
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
                                            initialValue: this.state.dataModelName,
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
                                            initialValue: this.state.dataModelNumber,
                                            rules: [{ required: true, message: 'Please input your Number!', whitespace: true }],
                                        })(
                                            <Input  />
                                        )}
                                    </FormItem>
                                    <div className="row">
                                    <div></div>
                                    <div className="col-md-3" style={{textAlign:"right"}}><label style={{"color":"black"}}>Length/Width/Height:</label></div>
                                    <div className="col-md-6">
                                        <Input style={{ width: '20%' }} value={this.state.dLength} onChange={this.onDimensionChange} placeholder="Length" />
                                        <Input style={{ width: '20%' }} value={this.state.dWidth} onChange={this.onDimensionChange} placeholder="Width"/>
                                        <Input style={{ width: '20%' }} value={this.state.dHeight} onChange={this.onDimensionChange} placeholder="Height"/>
                                    </div>
                                    </div>
                                    <span>{this.state.err && this.state.errMsg}</span>
                                    <FormItem
                                        {...formItemLayout}
                                        label="Images"
                                    >
                                        {getFieldDecorator('images', {
                                            initialValues: this.state.imageList,
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
                                                    {this.state.imageList.length + fileList.length >= 4 ? null : uploadButton}
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
                            <br/>
                            <div className="panel panel-default">
                                <div className="panel-body">
                                    <FormItem
                                        {...formItemLayout}
                                        label="Contact Name"
                                    >
                                        {getFieldDecorator('contactName', {
                                            initialValue: this.state.dataContact,
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
                                            initialValue: this.state.dataEmail,
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
                                            initialValue: this.state.dataNumber,
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
                                            initialValue: this.state.dataCheckedList,
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
                                            initialValue: this.state.dataDelivery,
                                            rules: [{ validator: this.checkCheckBox }],
                                        })(
                                            <CheckboxGroup options={optionsDelivery} />
                                        )}
                                    </FormItem>
                                    <FormItem
                                        {...formItemLayout}
                                        label="State"
                                    >
                                        {getFieldDecorator('state', {
                                            initialValue: this.state.dataState,
                                            rules: [{ type: 'array', required: true, message: 'Please select your State!' }],
                                        })(
                                            <Cascader options={statesUS} onChange={this.onChangeState.bind(this)}/>
                                        )}
                                    </FormItem>
                                    <FormItem
                                        {...formItemLayout}
                                        label="City"
                                    >
                                        {getFieldDecorator('city', {
                                            initialValue: this.state.dataCity,
                                            rules: [{ type: 'array', required: true, message: 'Please select your City!' }],
                                        })(
                                            <Cascader options={citiesUS} />
                                        )}
                                    </FormItem>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-4">
                                            <FormItem
                                                {...formItemLayout}
                                                label="Address"
                                            >
                                                {getFieldDecorator('address', {
                                                    initialValue: this.state.dataAddress,
                                                    rules: [{
                                                        required: true,
                                                        message: 'Please input your Address!',
                                                        whitespace: true
                                                    }],
                                                })(
                                                    <Input/>
                                                )}
                                            </FormItem>
                                        </div>
                                        <div className="col-md-3" style={{'textAlign': 'left'}}>
                                            <Checkbox checked={this.state.dataHideAddress} onChange={this.onChangeAddress.bind(this)}>(Hide Address)</Checkbox>
                                        </div>
                                        <div className="col-md-3"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="row center_global">
                                <button className="btn color_button" style={{"width": "20%"}}>Submit</button>
                            </div>
                        </div>
                    </Form>
                    <Footer />
                </div>
            </div>
        )
    }
}

const WrappedBusinessForm = Form.create()(Postbuysell);
export default WrappedBusinessForm;
