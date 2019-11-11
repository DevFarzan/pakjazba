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
    Button,
    Radio
} from 'antd';
import Burgermenu from '../../header/burgermenu';
import sha1 from "sha1";
import superagent from "superagent";
import Footer from '../../footer/footer';
import './shopForm.css'

const FormItem = Form.Item;
const { TextArea } = Input;
const CheckboxGroup = Checkbox.Group;
const Dragger = Upload.Dragger;


const category = [
    {
        value: 'Automotive & Motorbike',
        label: 'Automotive & Motorbike',
    },
    {
        value: 'Babies & Toys',
        label: 'Babies & Toys',
    },
    {
        value: 'Electronic Accessories',
        label: 'Electronic Accessories',
    },
    {
        value: 'Electronic Devices',
        label: 'Electronic Devices'
    },
    {
        value: 'Fashion Accessories',
        label: 'Fashion Accessories',
    },
    {
        value: 'Groceries & Pets',
        label: 'Groceries & Pets',
    },
    {
        value: 'Health & Beauty',
        label: 'Health & Beauty'
    },
    {
        label: 'Home & Lifestyle',
        value: 'Home & Lifestyle',
    },
    {
        value: 'Men,s Fashion',
        label: 'Men,s Fashion',
    },
    {
        value: 'Sports & Outdoor',
        label: 'Sports & Outdoor',
    },
    {
        value: 'TV & Home Appliances',
        label: 'TV & Home Appliances',
    },
    {
        label: 'Women,s Fashion',
        value: 'Women,s Fashion',
    },
];

let id = 0;

class ShopForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fileList: [],
            previewVisible: false,
            previewImage: '',
            coverPhotoSrc: '',
            bannerSrc: '',
            keyFor: '',
            shopPurpose: '',
            fileListLogo: [],
            previewVisibleLogo: false,
            previewImageLogo: '',
        }
    }


    addForm = () => {
        const { form } = this.props;
        // can use data-binding to get
        const keys = form.getFieldValue('keys');
        const nextKeys = keys.concat(id++);
        console.log()
        // can use data-binding to set
        // important! notify form to detect changes
        this.setState({ keyFor: nextKeys.length })
        form.setFieldsValue({
            keys: nextKeys,
        });
    }


    removeForm = (k) => {
        const { form } = this.props;
        // can use data-binding to get
        const keys = form.getFieldValue('keys');

        // We need at least one passenger
        if (keys.length === 1) {
            return;
        }
        // can use data-binding to set
        this.setState({ keyFor: keys.length - 1 })
        form.setFieldsValue({
            keys: keys.filter(key => key !== k),
        });
    }

    handleCancel = () => {
        this.setState({ previewVisible: false })
    }
    handleCancelLogo = () => {
        this.setState({ previewVisibleLogo: false })
    }

    handlePreview = (file) => {
        this.setState({
            previewImage: file.url || file.thumbUrl || file,
            previewVisible: true,
        });
    }

    handlePreviewLogo = (file) => {
        this.setState({
            previewImageLogo: file.url || file.thumbUrl || file,
            previewVisibleLogo: true,
        });
    }

    handleChange = ({ fileList }) => {
        console.log(fileList, 'fileList')
        this.setState({ fileList })
    }

    handleChangeLogo = ({ fileList }) => {
        console.log(fileList, 'fileListLogo')
        this.setState({ fileListLogo: fileList })
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

    handleSubmit = (e) => {
        e.preventDefault();
        let { fileList, coverPhoto, banner, fileListLogo } = this.state;
        let arr = [];
        let coverImg;
        let bannerImg;
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                coverImg = { ...coverPhoto[0], ...{ id: 'banner' } },
                    bannerImg = { ...banner[0], ...{ id: 'gridImage' } };
                arr.push(coverImg, bannerImg)
                this.funcForUpload(values, arr, fileList, fileListLogo)
            }
        })
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

    async funcForUpload(values, arr, fileList, fileListLogo) {
        Promise.all(arr.map((val) => {
            return this.uploadFile(val).then((result) => {
                let id = val.id;
                return { [id]: result.body.url }
            })
        })).then((results) => {
            if (results) {
                Promise.all(fileList.map((val) => {
                    return this.uploadFile(val).then((result) => {
                        return result.body.url
                    })
                })).then((images) => {
                    if (images) {
                        Promise.all(fileListLogo.map((val) => {
                            return this.uploadFile(val).then((result) => {
                                return result.body.url
                            })
                        })).then((logo) => {

                            this.postData(values, results, images, logo);
                        })
                    }
                    // this.postData(values, results, images);
                })
            }
        })
    }

    async postData(values, response, images, logo) {
        const { keyFor, shopPurpose } = this.state;
        let cetogires = [];
        let cover = '';
        let banner = '';
        console.log(values, 'values')
        response.map((elem) => {
            if (Object.keys(elem)[0] == 'banner') {
                cover = elem['banner']
            }
            else if (Object.keys(elem)[0] == 'gridImage') {
                banner = elem['gridImage']
            }
        })
        if (keyFor == '') {
            cetogires.push(values.shopCategories0[0])
        }
        else {
            for (var i = 0; i < keyFor; i++) {
                cetogires.push(values[`shopCategories${i}`][0])
            }
        }
        let obj = {
            shopTitle: values.shopTitle,
            shopCategories: cetogires,
            shopAddress: values.shopAddress,
            shopCity: values.shopCity,
            shopState: values.shopState,
            shopDescription: values.shopDescription,
            images: images,
            gridImageSrc: banner,
            bannerPhotoSrc: cover,
            shopPurpose: shopPurpose,
            shopLogo: logo
        }
        console.log(obj, 'objjjjjjjjjjj')
        // let req = await HttpUtils.post('postEventPortal', obj)
        // console.log(req, 'responseeeeeeeee')
        // if (req.code === 200) {
        //     this.setState({ objData: obj, msg: true, randomKey })
        // }
    }

    onChangeShop = e => {
        console.log('radio checked', e.target.value);
        this.setState({
            shopPurpose: e.target.value,
        });
    };


    render() {
        const { fileList, previewImage, previewVisible, keyFor, fileListLogo, previewImageLogo, previewVisibleLogo } = this.state;
        const { getFieldDecorator, getFieldValue } = this.props.form;

        console.log(this.state.fileListLogo, 'this.state.shopPurpose')
        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        const uploadButtonLogo = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        const gridImage = (
            <div className="shopcataloge">
                <Icon type="plus-square" />
                <div className="ant-upload-text">Upload Grid Image</div>
            </div>
        )

        { getFieldDecorator('keys', { initialValue: [keys] }) };
        const keys = getFieldValue('keys');
        const formItems = keys.map((k, index) => {
            return (
                <Form.Item
                    required={false}
                    key={k}
                >
                    <div className='row' style={{ paddingTop: '0px', paddingBottom: '0px' }}>
                        <div className="col-md-10 col-sm-10 col-xs-10"
                            // style={{ textAlign: 'left', display: 'grid' }} 
                            key={index} style={{ marginTop: '10px' }}>
                            <label htmlFor="Category"> Category </label>
                            <Form.Item style={{ marginTop: '10px' }}>
                                {getFieldDecorator(`shopCategories${index}`, {
                                    // initialValue: this.state.shopCategory,
                                    rules: [{
                                        type: 'array',
                                        required: true,
                                        message: 'Please select your Shop Category!',
                                    }],
                                })(
                                    <Cascader
                                        options={category}
                                    />
                                )}
                            </Form.Item>
                        </div>
                        {keys.length > 1 ? (
                            <div className='col-md-2 col-sm-2 col-xs-2'>
                                <button
                                    type="button"
                                    onClick={() => this.removeForm(k)}
                                    className="btn btn-fb"
                                    style={{ marginTop: '24px', backgroundColor: 'white', marginLeft: '-20px' }}
                                >
                                    <i className="fa fa-minus" style={{ color: 'gray', width: '100%', border: '1px solid', padding: '8px' }}></i>
                                </button>
                            </div>

                            //     <Icon
                            //         className="dynamic-delete-button btn btn-danger iconBtn fa fa-minus"
                            //         onClick={() => this.removeForm(k)}
                            //     />
                        ) : null}
                    </div>
                </Form.Item>
            )
        })
        return (
            <div>
                {/*================================App component include Start===========================*/}

                <Burgermenu />

                <div className="hidden-xs" style={{ width: "100%", height: "67px", marginTop: "3px" }}></div>

                {/*================================post business form start============================*/}
                <div className="hidden-sm" style={{ marginTop: '10%' }}></div>
                <div className="visible-sm" style={{ marginTop: '15%' }}></div>
                <div className="row jobdetail-page" style={{ backgroundColor: "#37a99b" }}>
                    <div className="col-md-12 col-sm-12 col-xs-12" style={{ textAlign: "center" }}>
                        <div className="">
                            <h1 style={{ fontFamily: 'Work Sans, sans-serif', fontWeight: "bold", color: 'white' }}>CREATE YOUR SHOP</h1>
                        </div>
                    </div>
                </div>

                <Form onSubmit={this.handleSubmit}>
                    <div className="panel-body">
                        <div className="panel panel-default">
                            <div className="bold_c_text"
                                style={{
                                    backgroundColor: '#37a99b', color: 'white', padding: '8px',
                                    fontFamily: 'Crimson Text, serif !important'
                                }}>
                                <Icon type="info-circle" />
                                <span className="margin_font_location">Shop Detail</span>
                            </div>
                            <div className="container" style={{ width: '80%' }}>
                                <section>
                                    <div className="row" style={{ padding: '0px', marginTop: '10px' }}>
                                        <div className="col-md-12">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="sel1">Shop Title</label>
                                                    <Form.Item>
                                                        {getFieldDecorator('shopTitle', {
                                                            // initialValue: this.state.shopTitle,
                                                            rules: [{
                                                                required: true,
                                                                message: 'Please input your Shop Title!',
                                                                whitespace: true
                                                            }],
                                                        })(
                                                            <input type="text" className="form-control" />
                                                        )}
                                                    </Form.Item>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="sel1">Address</label>
                                                    <Form.Item>
                                                        {getFieldDecorator('shopAddress', {
                                                            // initialValue: this.state.shopAddress,
                                                            rules: [{
                                                                required: true,
                                                                message: 'Please input your Address!',
                                                                whitespace: true
                                                            }],
                                                        })(
                                                            <Input />
                                                        )}
                                                    </Form.Item>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className="col-md-6">
                                            <div className="row" style={{ padding: '0px' }}>
                                                <div className="col-md-7" style={{ display: 'grid' }}>
                                                    <label> City </label>
                                                    <Form.Item>
                                                        {getFieldDecorator('shopCity', {
                                                            // initialValue: this.state.shopCity,
                                                            rules: [{
                                                                whitespace: true,
                                                                required: true,
                                                                message: 'Please select your City!'
                                                            }],
                                                        })(
                                                            <Input />
                                                        )}
                                                    </Form.Item>
                                                </div>
                                                <div className="col-md-5">
                                                    <label> State </label>
                                                    <Form.Item>
                                                        {getFieldDecorator('shopState', {
                                                            // initialValue: this.state.shopState,
                                                            rules: [{
                                                                whitespace: true,
                                                                required: true,
                                                                message: 'Please select your State!'
                                                            }],
                                                        })(
                                                            <Input />
                                                        )}
                                                    </Form.Item>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="row" style={{ padding: '0px' }}>
                                                <div className="col-md-6" className="form-group">
                                                    <label htmlFor="sel1">Shop Purpose</label>
                                                    <Form.Item>
                                                        {getFieldDecorator('shopPurpose', {
                                                            // initialValue: this.state.shopAddress,
                                                            rules: [{
                                                                required: true,
                                                                message: 'Please select your Shop Purpose!',
                                                                whitespace: true
                                                            }],
                                                        })(
                                                            // <Input />
                                                            <Radio.Group onChange={this.onChangeShop} value={this.state.shopPurpose}>
                                                                <Radio value={"Gift Shop"}>Gift Shop</Radio>
                                                                <Radio value={"Shop"}>Shop</Radio>
                                                            </Radio.Group>
                                                        )}
                                                    </Form.Item>
                                                </div>
                                                <div className="col-md-6">
                                                    <Form.Item>
                                                        {getFieldDecorator('shopLogo', {
                                                            rules: [{
                                                                required: true,
                                                                message: 'Please upload your shop logo!',
                                                                whitespace: true
                                                            }],
                                                        })(
                                                            <div>
                                                                <Upload
                                                                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                                                    listType="picture-card"
                                                                    fileList={fileListLogo}
                                                                    onPreview={this.handlePreviewLogo}
                                                                    onChange={this.handleChangeLogo}
                                                                >
                                                                    {/* {uploadButtonLogo} */}
                                                                    {fileListLogo.length > 1 ? null : uploadButtonLogo}
                                                                </Upload>
                                                                <div>
                                                                    <Modal visible={previewVisibleLogo} footer={null} onCancel={this.handleCancelLogo}>
                                                                        <img alt="example" style={{ width: '100%' }} src={previewImageLogo} />
                                                                    </Modal>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </Form.Item>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="col-md-6"> */}
                                        {/* <div className="form-group" style={{ padding: '0px' }}> */}
                                        {/* <label htmlFor="sel1"></label> */}
                                        {/* <FormItem>
                                                    {getFieldDecorator('shopCity', {
                                                        // initialValue: this.state.shopCity,
                                                        rules: [{
                                                            whitespace: true,
                                                            required: true,
                                                            message: 'Please select your City!'
                                                        }],
                                                    })( */}
                                        {/* <Radio.Group onChange={this.onChangeShop} value={this.state.shopPurpose}>
                                                    <Radio value={"Gift Shop"}>Gift Shop</Radio>
                                                    <Radio value={"Shop"}>Shop</Radio>
                                                </Radio.Group> */}
                                        {/* )}
                                                    <FormItem> */}

                                        {/* </div> */}
                                        {/* </div> */}
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="col-md-4">
                                                <div className="row" style={{ padding: '0px' }}>
                                                    <div className="col-md-12" style={{ padding: '0px' }}>
                                                        <div className="col-md-8 col-sm-10 col-xs-10" style={{ padding: '0px' }}>
                                                            {formItems}
                                                        </div>
                                                        <div className="col-md-4 col-sm-2 col-xs-2" style={{ paddingLeft: '0.6%' }}>
                                                            <Form.Item >
                                                                <div className='row' style={{ paddingTop: '0px', paddingBottom: '0px' }}>
                                                                    <button
                                                                        type="button"
                                                                        onClick={this.addForm}
                                                                        className="btn btn-fb"
                                                                        style={{ marginTop: '24px', backgroundColor: 'white' }}
                                                                    >
                                                                        <i className="fa fa-plus" style={{ color: 'gray', width: '100%', border: '1px solid', padding: '8px' }}></i>
                                                                    </button>
                                                                </div>
                                                            </Form.Item>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="sel1">Description</label>
                                                    <Form.Item>
                                                        {getFieldDecorator('shopDescription', {
                                                            // initialValue: this.state.shopDescription,
                                                            rules: [
                                                                {
                                                                    required: true,
                                                                    message: 'Please input your Description/Details!',
                                                                    whitespace: true
                                                                }],
                                                        })(
                                                            <TextArea
                                                                rows={6}
                                                                maxLength="500"
                                                                style={{ "marginBottom": "10px" }} />
                                                        )}
                                                        <br />
                                                        <span style={{ "float": "right" }}>
                                                            {/* {500 - this.state.desLength} Words */}
                                                        </span>
                                                    </Form.Item>
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
                            <div className="bold_c_text"
                                style={{
                                    backgroundColor: '#37a99b', color: 'white', padding: '8px',
                                    fontFamily: 'Crimson Text, serif !important'
                                }}>
                                <Icon type="info-circle" />
                                <span className="margin_font_location">Upload</span>
                            </div>

                            <div className="container" style={{ width: '95%' }}>
                                <section className="row">
                                    <div className="col-md-12" style={{ padding: '0px' }}>
                                        <Form.Item>
                                            {getFieldDecorator('banner', {
                                                rules: [{
                                                    required: true,
                                                    message: 'Please upload your Images!',
                                                    whitespace: true
                                                }],
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
                                                        <p className="ant-upload-hint">Upload your shop banner. Support for a single or bulk upload.</p>
                                                    </Dragger>}
                                                    {this.state.coverPhotoSrc.length > 0 && <div>
                                                        <img alt="example"
                                                            src={this.state.coverPhotoSrc}
                                                            style={{ height: '190px' }} />
                                                    </div>}
                                                </span>
                                            )}
                                        </Form.Item>
                                    </div>
                                    <div className="col-md-6">
                                        {/* <img src=''/> */}
                                    </div>
                                </section>
                            </div>
                            <div className="container" style={{ width: '80%' }}>
                                <section className="row">
                                    <div className="col-md-12">
                                        <div className="col-md-6 col-sm-6">
                                            <Form.Item style={{ width: '100%' }}>
                                                {getFieldDecorator('gridImage', {
                                                    rules: [{
                                                        required: true,
                                                        message: 'Please upload your Images!',
                                                        whitespace: true
                                                    }],
                                                })(
                                                    <span style={{ width: '100%' }}>
                                                        {this.state.bannerSrc.length == 0 && <Upload
                                                            action="//jsonplaceholder.typicode.com/posts/"
                                                            onPreview={this.handlePreview}
                                                            onChange={this.onChangeBanner}
                                                        >
                                                            {gridImage}
                                                        </Upload>}
                                                        {this.state.bannerSrc.length > 0 && <div>
                                                            <img alt="example"
                                                                src={this.state.bannerSrc}
                                                                className="shopcataloge" />
                                                        </div>}
                                                    </span>
                                                )}
                                            </Form.Item>
                                        </div>
                                        <div className="col-md-6 col-sm-6">
                                            <div className="row" style={{ padding: '0px' }}>
                                                <div className="col-md-12">
                                                    <div className="col-md-6 col-sm-6 col-xs-6 clearfix" style={{ marginBottom: '20px' }}>
                                                        <Form.Item>
                                                            {getFieldDecorator('images', {
                                                                rules: [{
                                                                    required: true,
                                                                    message: 'Please upload your Images!',
                                                                    whitespace: true
                                                                }],
                                                            })(
                                                                <div>
                                                                    <Upload
                                                                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                                                        listType="picture-card"
                                                                        fileList={fileList}
                                                                        onPreview={this.handlePreview}
                                                                        onChange={this.handleChange}
                                                                    >
                                                                        {fileList.length > 3 ? null : uploadButton}
                                                                    </Upload>

                                                                </div>
                                                            )}
                                                        </Form.Item>
                                                    </div>
                                                    <div className="col-md-6 col-sm-6 col-xs-6" style={{ marginBottom: '20px' }}>
                                                        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                                                            <img alt="example" style={{ width: '100%' }} src={previewImage} />
                                                        </Modal>
                                                    </div>
                                                    {/* <div className="col-md-6 col-sm-6 col-xs-6" style={{marginBottom: '20px'}}>
                                                    <FormItem>
                                                        {getFieldDecorator('images', {
                                                            rules: [{
                                                                required: true,
                                                                message: 'Please upload your Images!',
                                                                whitespace: true
                                                            }],
                                                        })(
                                                            <div>
                                                                <Upload
                                                                    action="//jsonplaceholder.typicode.com/posts/"
                                                                    listType="picture-card"
                                                                    fileList={fileList}
                                                                    onPreview={this.handlePreview}
                                                                    onChange={this.handleChange}
                                                                >
                                                                    {fileList.length > 3 ? null : uploadButton}
                                                                </Upload>
                                                                <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                                                                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                                                                </Modal>
                                                            </div>
                                                        )}
                                                    </FormItem>
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-xs-6" style={{marginBottom: '20px'}}>
                                                    <FormItem>
                                                        {getFieldDecorator('images', {
                                                            rules: [{
                                                                required: true,
                                                                message: 'Please upload your Images!',
                                                                whitespace: true
                                                            }],
                                                        })(
                                                            <div>
                                                                <Upload
                                                                    action="//jsonplaceholder.typicode.com/posts/"
                                                                    listType="picture-card"
                                                                    fileList={fileList}
                                                                    onPreview={this.handlePreview}
                                                                    onChange={this.handleChange}
                                                                >
                                                                    {fileList.length > 3 ? null : uploadButton}
                                                                </Upload>
                                                                <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                                                                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                                                                </Modal>
                                                            </div>
                                                        )}
                                                    </FormItem>
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-xs-6" style={{marginBottom: '20px'}}>
                                                    <FormItem>
                                                        {getFieldDecorator('images', {
                                                            rules: [{
                                                                required: true,
                                                                message: 'Please upload your Images!',
                                                                whitespace: true
                                                            }],
                                                        })(
                                                            <div>
                                                                <Upload
                                                                    action="//jsonplaceholder.typicode.com/posts/"
                                                                    listType="picture-card"
                                                                    fileList={fileList}
                                                                    onPreview={this.handlePreview}
                                                                    onChange={this.handleChange}
                                                                >
                                                                    {fileList.length > 3 ? null : uploadButton}
                                                                </Upload>
                                                                <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                                                                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                                                                </Modal>
                                                            </div>
                                                        )}
                                                    </FormItem>
                                                </div> */}
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>

                    </div>
                    <div className="row center_global row">
                        <button style={{ textAlign: 'center', width: "45%" }} className="btn button_custom">Submit Shop</button>
                    </div>
                    {/* <div className="row center_global row">
                        {this.state.loader && <Spin indicator={antIcon} />}
                        <button disabled={!!this.state.loader} style={{ textAlign: 'center', width: "45%" }} className="btn button_custom">Submit Event</button>
                    </div> */}
                </Form>
                <Footer />
            </div >
        )
    }
}

const WrappedBusinessForm = Form.create()(ShopForm);
export default WrappedBusinessForm;
