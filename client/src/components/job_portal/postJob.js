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
    Anchor,
} from 'antd';
import { Redirect } from 'react-router';
import AsyncStorage from "@callstack/async-storage/lib/index";
import Burgermenu from '../header/burgermenu';
import HeaderMenu from '../header/headermenu';
import Footer from '../footer/footer';
import sha1 from "sha1";
import moment from 'moment';
import superagent from "superagent";
import {HttpUtils} from "../../Services/HttpUtils";

const { Link } = Anchor;

const handleClick = (e, link) => {
  e.preventDefault();
  console.log(link);
};

const FormItem = Form.Item;
const { TextArea } = Input;

const category = [{
    value: 'Accounting',
    label: 'Accounting'
},{
    value: 'Admin & Clerical',
    label: 'Admin & Clerical',
},{
    value: 'Banking & Finance',
    label: 'Banking & Finance',
},{
    value:'Business Opportunities',
    label:'Business Opportunities'
},{
    value:'Contract & Freelance',
    label:'Contract & Freelance',
},{
    value:'Customer Service',
    label:'Customer Service',
},{
    label:'Diversity Opportunities',
    value:'Diversity Opportunities',
},{
    label:'Engineering',
    value:'Engineering',
},{
    value:'Executive',
    label:'Executive',
},{
    value:'Franchise',
    label:'Franchise',
},{
    value:'Government',
    label:'Government',
},{
    value:'Health Care',
    label:'Health Care',
},{
    value:'Hospitality',
    label:'Hospitality',
},{
    value:'Human Resources',
    label:'Human Resources',
},{
    value:'Information Technology',
    label:'Information Technology',
},{
    value:'Internships & College',
    label:'Internships & College',
},{
    value:'Manufacturing',
    label:'Manufacturing',
},{
    value:'Nonprofit',
    label:'Nonprofit',
},{
    value:'Retail',
    label:'Retail',
},{
    value:'Sales & Marketing',
    label:'Sales & Marketing',
},{
    value:'Science & Biotech',
    label:'Science & Biotech',
},{
    value:'Transportation',
    label:'Transportation',
}];

class JobPortal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fileList: [],
            imageList: [],
            loader: false,
            faceBook: '',
            LinkdIn: '',
            Google: '',
            Website: '',
            Tagline: '',
            userId: '',
            profileId: '',
            msg: false,
            objectId: '',
            objData: {}
        }
    }

    componentDidMount() {
        window.scrollTo(0,0);
        this.handleLocalStorage();
        let data = this.props.location.state;
        if(data) {
            this.setState({
                faceBook: data.faceBook,
                LinkdIn: data.LinkdIn,
                Google: data.Google,
                Website: data.Website,
                Tagline: data.Tagline,
                compDescription: data.compDescription,
                compEmail: data.compEmail,
                email: data.email,
                experience: data.experience,
                jobCat: data.jobCat,
                jobDescription: data.jobDescription,
                jobTitle: data.jobTitle,
                jobType: [data.jobType],
                location: data.location,
                salary: data.salary,
                imageList: data.arr_url,
                objectId: data._id
            })
        }
    }

    handleLocalStorage = () =>{
        AsyncStorage.getItem('user')
            .then((obj) => {
                let userObj = JSON.parse(obj)
                if(!!userObj) {
                    this.setState({
                        userId: userObj._id,
                        profileId: userObj.profileId,
                    })
                }
            })
    }

    checkValue(rule, value, callback) {
        this.setState({desLength: value ? value.length : 0})
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

    handleSubmit = (e) => {
        e.preventDefault();
        const { fileList } = this.state;
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                this.setState({loader: true})
                if (fileList.length) {
                    this.postDataWithURL(values)
                } else {
                    this.postData(values)
                }
            }
        })
    }

    async postDataWithURL(values){
        const { fileList } = this.state;

        Promise.all(fileList.map((val) => {
            return this.uploadFile(val).then((result) => {
                return result.body.url
            })
        })).then((results) => {
            this.postData(values, results)
        })
    }

    async postData(values, response){
        const {userId, profileId, faceBook, LinkdIn, Google, Website, Tagline, objectId} = this.state;
        let obj = {
            user_id: userId,
            profileId: profileId,
            compDescription: values.compDescription,
            compEmail: values.compEmail,
            compName: values.compName,
            email: values.email,
            experience: values.experience,
            jobCat: values.jobCat[0],
            jobDescription: values.jobDescription,
            jobTitle: values.jobTitle,
            jobType: values.jobType,
            location: values.location,
            salary: values.salary,
            faceBook,
            LinkdIn,
            Google,
            Website,
            Tagline,
            arr_url: response ? response : [],
            objectId,
            posted: moment().format('LL')
        }
        let req = await HttpUtils.post('postJobPortal', obj)
        if(req.code === 200){
            this.openNotification()
            this.setState({
                objData: obj,
                msg: true,
                loader: false
            })
        }
    }

    openNotification() {
        notification.open({
            message: 'Success ',
            description: 'Your job is submited successfully, Kindly visit your profile',
        });
    };

    //-----------------cloudnary function end ------------------

    onChangeState = (rule, value, callback) => {
        if (!value) {
            callback('Please select at least one!');
        } else {
            callback();
        }
    }

    onChangeValue(e) {
        if (e.target.id === 'faceBook') {
            this.setState({faceBook: e.target.value})
        } else if (e.target.id === 'LinkdIn') {
            this.setState({LinkdIn: e.target.value})
        } else if (e.target.id === 'Google') {
            this.setState({Google: e.target.value})
        } else if (e.target.id === 'Website') {
            this.setState({Website: e.target.value})
        } else if (e.target.id === 'Tagline') {
            this.setState({Tagline: e.target.value})
        }
    }

    deleteImage(e){
        let { imageList } = this.state;
        imageList = imageList.filter((elem) => elem !== e)
        this.setState({imageList: imageList})
    }

    validateNumber(rule, value, callback){
        if(isNaN(value)){
            callback('Please type Numbers');
        }else {
            callback()
        }
    }

    render(){
        const {getFieldDecorator} = this.props.form;
        const { email, jobTitle, jobType, jobCat, salary, compDescription, jobDescription, experience, compEmail, location, previewVisible, previewImage, fileList, objData } = this.state;

        if (this.state.msg === true) {
            return <Redirect to={{pathname: '/detail_jobPortal', state: {...objData, user: false}}} />
        }

        const uploadedImages = (
            <div style={{display: 'flex'}}>
                {this.state.imageList.map((elem) => {
                    return(
                        <div className='insideDiv'>
                            <a>
                            <img alt='img1' src={elem} />
                            <span>
                                <a><Icon title='Preview file' onClick={() => this.handlePreview(elem)} type="eye" theme="outlined" style={{zIndex: 10, transition: 'all .3s', fontSize: '16px', width: '16px', color: 'rgba(255, 255, 255, 0.85)', margin: '0 4px'}} /></a>
                                <Icon title='Remove file' type='delete' onClick={this.deleteImage.bind(this, elem)} style={{zIndex: 10, transition: 'all .3s', fontSize: '16px', width: '16px', color: 'rgba(255, 255, 255, 0.85)', margin: '0 4px'}}/>
                            </span>
                            </a>
                        </div>
                    )
                })}
            </div>
        )

        const categ = [
            {
                label: 'Full Time',
                value: 'Full Time',
            },{
                label: 'Part Time',
                value: 'Part Time',
            },{
                label: 'Night Shift',
                value: 'Night Shift',
            }
        ];

        function filter(inputValue, path) {
            return (path.some(option => (option.label).toLowerCase().indexOf(inputValue.toLowerCase()) > -1));
        }

        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">Upload</div>
            </div>
        );

        const antIcon = <Icon type="loading" style={{ fontSize: 24, marginRight: '10px' }} spin />;

        return (
            <div>
                <HeaderMenu/>
                <div className="hidden-xs" style={{width:"100%", height:"67px", marginTop: "40px"}} />
                <div className="col-lg-3 col-md-3 hidden-sm hidden-xs"></div>
                <div className="col-lg-2 col-md-2 hidden-sm hidden-xs card formRadius" id="section1" style={{marginLeft: '4%', marginTop: '116px', position: 'fixed',}}>
                    <Anchor className="" style={{margin: '2%',backgroundColor: '#f6f6f6'}}>
                        <Link href="#scrollChange1" title="Job Details" />
                        <Link href="#scrollChange2" title="Upload" />
                        <Link href="#scrollChange3" title="Company Details" />
                        <Link href="#scrollChange4" title="Social Links" />
                    </Anchor>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="main_c_panel" style={{textAlign: 'center'}}>
                        <h3 style={{color: 'black',fontWeight: 'bold'}}>Add Job<br/>
                        Find all your Jobs in one place</h3>
                    </div>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <div className="">{/* style={{panel-group paddingTop:"50px"}} */}
                            <div className="">{/*panel panel-default */}
                                
                                <div className=" row">{/*panel-body */}
                                    {/* <div className="col-md-2"/> */}
                                    <div className="formRadius card" id="scrollChange1" style={{paddingLeft: '0px', paddingRight: '0px'}}>{/* col-md-8 panel panel-default */}
                                        <div className="bold_c_text" style={{color:'black',padding:'2%',borderBottom: '1px solid #d9d9d9'}}>
                                            {/* <Icon type="info-circle"/> */}
                                            <i class="fa fa-info-circle iconStyle"></i>
                                            <span className="margin_font_location">Job Details</span>
                                        </div>
                                        <section className="bottomRadius card">{/* style={{backgroundColor: '#F1F2F2'}} */}
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="sel1">Your Email</label>
                                                        <FormItem style={{padding: '2%'}}>
                                                            {getFieldDecorator('email', {
                                                                initialValue: email,
                                                                rules: [{ type: 'email', message: 'The input is not valid E-mail!', whitespace: true },{
                                                                    required: true,
                                                                    message: 'Please input your Email!',
                                                                    whitespace: true
                                                                }],
                                                            })(
                                                                <input type="text" className="form-control"/>
                                                            )}
                                                        </FormItem>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="usr">Job Title</label>
                                                        <FormItem style={{padding: '2%'}}>
                                                            {getFieldDecorator('jobTitle', {
                                                                initialValue: jobTitle,
                                                                rules: [{
                                                                    required: true,
                                                                    message: 'Please input your Job Title!',
                                                                    whitespace: true
                                                                }],
                                                            })(
                                                                <input type="text" className="form-control"/>
                                                            )}
                                                        </FormItem>
                                                    </div>
                                                </div>
                                            </div>

                                            <hr className="hrLineStyle"/>

                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="sel1">Location</label>
                                                        <FormItem style={{padding: '2%'}}>
                                                            {getFieldDecorator('location', {
                                                                initialValue: location,
                                                                rules: [{
                                                                    required: true,
                                                                    message: 'Please input your Location!',
                                                                    whitespace: true
                                                                }],
                                                            })(
                                                                <input type="text" className="form-control"/>
                                                            )}
                                                        </FormItem>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="usr">Job Type</label>
                                                        <FormItem style={{padding: '2%'}}>
                                                            {getFieldDecorator('jobType', {
                                                                initialValue: jobType,
                                                                rules: [{ validator: this.onChangeState }],
                                                            })(
                                                                <Cascader options={categ} showSearch={{ filter }}/>
                                                            )}
                                                        </FormItem>
                                                    </div>
                                                </div>
                                            </div>

                                            <hr className="hrLineStyle"/>

                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="sel1">Job Category</label>
                                                        <FormItem style={{padding: '2%'}}>
                                                            {getFieldDecorator('jobCat', {
                                                                initialValue: jobCat,
                                                                rules: [{ validator: this.onChangeState }],                                                            })(
                                                                <Cascader options={category} showSearch={{ filter }}/>
                                                            )}
                                                        </FormItem>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="usr">Salary</label>
                                                        <FormItem style={{padding: '2%'}}>
                                                            {getFieldDecorator('salary', {
                                                                initialValue: salary,
                                                                rules: [{
                                                                    required: true,
                                                                    message: 'Please input your Job Salary!',
                                                                    whitespace: true
                                                                },
                                                                { validator: this.validateNumber.bind(this) }],
                                                            })(
                                                                <input type="text" className="form-control"/>
                                                            )}
                                                        </FormItem>
                                                    </div>
                                                </div>
                                            </div>

                                            <hr className="hrLineStyle"/>

                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="sel1">Description</label>
                                                        <FormItem style={{padding: '2%'}}>
                                                            {getFieldDecorator('jobDescription', {
                                                                initialValue: jobDescription,
                                                                rules: [
                                                                    {
                                                                        required: true, message: 'Please input your Description!', whitespace: true
                                                                    },
                                                                    {
                                                                        validator: this.checkValue.bind(this)
                                                                    }],
                                                            })(
                                                                <TextArea rows={6} maxLength="500"/>
                                                            )}
                                                        </FormItem>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="usr">Experience</label>
                                                        <FormItem style={{padding: '2%'}}>
                                                            {getFieldDecorator('experience', {
                                                                initialValue: experience,
                                                                rules: [{
                                                                    required: true,
                                                                    message: 'Please input your Experience!',
                                                                    whitespace: true
                                                                }],
                                                            })(
                                                                <input type="text" className="form-control"/>
                                                            )}
                                                        </FormItem>
                                                    </div>
                                                </div>
                                            </div>

                                            <hr className="hrLineStyle"/>

                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="sel1">Receiving CV/Resume Email</label>
                                                        <FormItem style={{padding: '2%'}}>
                                                            {getFieldDecorator('compEmail', {
                                                                initialValue: compEmail,
                                                                rules: [{
                                                                    required: true,
                                                                    message: 'Please input your Company Email!',
                                                                    whitespace: true
                                                                }],
                                                            })(
                                                                <input type="text" className="form-control"/>
                                                            )}
                                                        </FormItem>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </section>
                                    </div>
                                    <div className="col-md-2"/>
                                </div>

                                <div className="row">{/*panel-body  */}
                                    {/* <div className="col-md-2"/> */}
                                    <div className="topRadius card" id="scrollChange2" style={{paddingLeft: '0px', paddingRight: '0px'}}>{/*panel panel-default col-md-8 */}
                                        <div className="bold_c_text" style={{color:'black',padding:'2%',borderBottom: '1px solid #d9d9d9'}}>
                                            {/* <Icon type="info-circle"/> */}
                                            <i class="fa fa-upload iconStyle"></i>
                                            <span className="margin_font_location">Upload</span>
                                        </div>
                                        <section className="bottomRadius card">{/* style={{backgroundColor: '#F1F2F2'}} */}
                                            <div className="col-md-12 bottomRadius card">
                                                <div className="form-group">
                                                    <label htmlFor="usr" style={{padding: '2%'}}>Job Banner/Image</label>
                                                    <div className="">{/*panel-body */}
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
                                            </div>
                                            
                                        </section>
                                    </div>
                                </div>

                                <div className="row">{/*panel-body  */}
                                    {/* <div className="col-md-2"/> */}
                                    <div className="formRadius card" id="scrollChange3" style={{paddingLeft: '0px', paddingRight: '0px'}}>{/*panel panel-default col-md-8 */}
                                        <div className="bold_c_text" style={{color:'black',padding:'2%',borderBottom: '1px solid #d9d9d9'}}>
                                            {/* <Icon type="info-circle"/> */}
                                            <i class="fa fa-info-circle iconStyle"></i>
                                            <span className="margin_font_location">Company Details</span>
                                        </div>
                                        <section className="formRadius card">{/* style={{backgroundColor: '#F1F2F2'}} */}
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label htmlFor="sel1">Company Name</label>
                                                        <FormItem style={{padding: '2%'}}>
                                                            {getFieldDecorator('compName', {
                                                                initialValue: email,
                                                                rules: [{
                                                                    required: true,
                                                                    message: 'Please input your Company Name!',
                                                                    whitespace: true
                                                                }],
                                                            })(
                                                                <input type="text" className="form-control"/>
                                                            )}
                                                        </FormItem>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label htmlFor="sel1">Website</label>
                                                        <FormItem style={{padding: '2%'}}>
                                                            <input type="text" id='Website'
                                                                value={this.state.Website}
                                                                className="form-control" onChange={this.onChangeValue.bind(this)}/>
                                                        </FormItem>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label htmlFor="sel1">Tagline</label>
                                                        <FormItem style={{padding: '2%'}}>
                                                            <input type="text" id='Tagline'
                                                                value={this.state.Tagline}
                                                                className="form-control" onChange={this.onChangeValue.bind(this)}/>
                                                        </FormItem>
                                                    </div>
                                                </div>
                                            </div>

                                            <hr className="hrLineStyle"/>

                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="sel1">Description</label>
                                                        <FormItem style={{padding: '2%'}}>
                                                            {getFieldDecorator('compDescription', {
                                                                initialValue: compDescription,
                                                                rules: [
                                                                    {
                                                                        required: true, message: 'Please input your Description!', whitespace: true
                                                                    },
                                                                    {
                                                                        validator: this.checkValue.bind(this)
                                                                    }],
                                                            })(
                                                                <TextArea rows={6} maxLength="500"/>
                                                            )}
                                                        </FormItem>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </section>
                                    </div>
                                    <div className="col-md-2" />
                                </div>

                                
                                <div className="row">{/*panel-body  */}
                                    {/* <div className="col-md-2"/> */}
                                    <div className="topRadius card" id="scrollChange4" style={{paddingLeft: '0px', paddingRight: '0px'}}>{/*panel panel-default col-md-8 */}
                                        <div className="bold_c_text " style={{color:'black',padding:'2%',borderBottom: '1px solid #d9d9d9'}}>
                                            {/* <Icon type="info-circle"/> */}
                                            <i class="fa fa-link iconStyle"></i>
                                            <span className="margin_font_location">Social Links</span>
                                        </div>
                                        <section className="formRadius card">{/* style={{backgroundColor: '#F1F2F2'}} */}
                                            <div className="col-md-12 bottomRadius card">
                                                <div className="form-group">
                                                    <label htmlFor="usr" style={{padding: '2%'}}>Social Media Links</label>
                                                    <div className="">{/*panel-body */}
                                                    <div className="col-md-6">
                                                    <div className="form-group">
                                                        <FormItem style={{padding: '2%'}}>
                                                            <div className='row' style={{paddingTop: '0px', paddingBottom: '0px'}}>
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-fb btnSet"
                                                                    style={{width: '10%', display: 'inline-block', marginBottom: '4px', borderRadius: '0px', backgroundColor: '#3B5999'}}
                                                                >
                                                                    <i className="fa fa-facebook iconSet" style={{color: 'white'}}></i>
                                                                </button>
                                                                <input type="text"
                                                                       id='faceBook'
                                                                       value={this.state.faceBook}
                                                                       className="form-control inputSet"
                                                                       style={{width: '90%', display: 'inline-block', borderRadius: '0px'}}
                                                                       onChange={this.onChangeValue.bind(this)}/>
                                                            </div>
                                                            <div className='row' style={{paddingTop: '0px', paddingBottom: '0px'}}>
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-fb btnSet"
                                                                    style={{width: '10%', display: 'inline-block', marginBottom: '4px', borderRadius: '0px', backgroundColor: '#0077B5'}}
                                                                >
                                                                    <i className="fa fa-linkedin" style={{color: 'white'}}></i>
                                                                </button>
                                                                <input
                                                                    type="text"
                                                                    id='LinkdIn'
                                                                    value={this.state.LinkdIn}
                                                                    className="form-control inputSet"
                                                                    style={{width: '90%', display: 'inline-block', borderRadius: '0px'}}
                                                                    onChange={this.onChangeValue.bind(this)}/>
                                                            </div>
                                                            <div className='row' style={{paddingTop: '0px', paddingBottom: '0px'}}>
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-fb btnSet"
                                                                    style={{width: '10%', display: 'inline-block', marginBottom: '4px', borderRadius: '0px', backgroundColor: '#DC4E41'}}
                                                                >
                                                                    <i className="fa fa-google-plus" style={{color: 'white'}}></i>
                                                                </button>
                                                                <input
                                                                    type="text"
                                                                    id='Google'
                                                                    value={this.state.Google}
                                                                    className="form-control inputSet"
                                                                    style={{width: '90%', display: 'inline-block', borderRadius: '0px'}}
                                                                    onChange={this.onChangeValue.bind(this)}/>
                                                            </div>
                                                        </FormItem>
                                                    </div>
                                                </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </section>
                                    </div>
                                </div>

                                <div className="row center_global row">

                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        {this.state.loader && <Spin className="col-xs-2 col-md-6" indicator={antIcon} />}
                                        <button style={{textAlign: 'center',width:'19%'}} disabled={!!this.state.loader} className="btn color_button">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form>
                </div>
                {/* <Footer/> */}
            </div>
        )
    }

}

const WrappedJobPortalForm = Form.create()(JobPortal);
export default WrappedJobPortalForm;
