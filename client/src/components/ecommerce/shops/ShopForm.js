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
    Button
} from 'antd';
import Burgermenu from '../../header/burgermenu';
import sha1 from "sha1";
import superagent from "superagent";
import Footer from '../../footer/footer';

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
            keyFor: ''
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

    handlePreview = (file) => {
        this.setState({
            previewImage: file.url || file.thumbUrl || file,
            previewVisible: true,
        });
    }

    handleChange = ({ fileList }) => {
        this.setState({ fileList })
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
        let { fileList, coverPhoto, banner } = this.state,
            arr = [],
            coverImg = { ...coverPhoto[0], ...{ id: 'banner' } },
            bannerImg = { ...banner[0], ...{ id: 'gridImage' } };
        arr.push(coverImg, bannerImg)
        // fileLists.push(image)
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                // this.setState({ loader: true })
                this.funcForUpload(values, arr, fileList)
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

    async funcForUpload(values, arr, fileList) {
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

                    this.postData(values, results, images);
                })
            }
        })
    }

    async postData(values, response, images) {
        const { keyFor } = this.state;
        let cetogires = [];
        let cover = '';
        let banner = '';
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
        }
        console.log(obj, 'objjjjjjjjjjj')
        // let req = await HttpUtils.post('postEventPortal', obj)
        // console.log(req, 'responseeeeeeeee')
        // if (req.code === 200) {
        //     this.setState({ objData: obj, msg: true, randomKey })
        // }
    }



    render() {
        const { fileList, previewImage, previewVisible, keyFor } = this.state;
        const { getFieldDecorator, getFieldValue } = this.props.form;

        console.log(keyFor, 'keyFor')
        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">Upload</div>
            </div>
        );

        const gridImage = (
            <div style={{ height: '190px', width: '150px', border: '1px dotted black' }}>
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
                    <div className="col-md-8"
                        // style={{ textAlign: 'left', display: 'grid' }} 
                        key={index}>
                        <label htmlFor="Category"> Category </label>
                        <FormItem>
                            {getFieldDecorator(`shopCategories${index}`, {
                                // initialValue: this.state.shopCategory,
                                rules: [{
                                    type: 'array',
                                    required: true,
                                    message: 'Please select your Shop Category!'
                                }],
                            })(
                                <Cascader
                                    options={category}
                                />
                            )}
                        </FormItem>
                    </div>
                    {keys.length > 1 ? (
                        <Icon
                            className="dynamic-delete-button btn btn-danger iconBtn fa fa-minus"
                            onClick={() => this.removeForm(k)}
                        />
                    ) : null}
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

                <Form onSubmit={this.handleSubmit.bind(this)}>
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
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="sel1">Shop Title</label>
                                                    <FormItem>
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
                                                    </FormItem>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="sel1">Address</label>
                                                    <FormItem>
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
                                                    </FormItem>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className="col-md-6">
                                            <div className="row" style={{ padding: '0px' }}>
                                                <div className="col-md-7" style={{ display: 'grid' }}>
                                                    <label> City </label>
                                                    <FormItem>
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
                                                    </FormItem>
                                                </div>
                                                <div className="col-md-5">
                                                    <label> State </label>
                                                    <FormItem>
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
                                                    </FormItem>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="row">
                                                {formItems}
                                                <div className="col-md-4" style={{ paddingLeft: '0.6%' }}>
                                                    <Form.Item >
                                                        <Button type="dashed" onClick={this.addForm}
                                                            className='btn btn-primary iconBtn up'
                                                        >
                                                            <Icon className='glyphicon glyphicon-plus' />
                                                        </Button>
                                                    </Form.Item>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="sel1">Description</label>
                                                    <FormItem>
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
                            <div className="bold_c_text"
                                style={{
                                    backgroundColor: '#37a99b', color: 'white', padding: '8px',
                                    fontFamily: 'Crimson Text, serif !important'
                                }}>
                                <Icon type="info-circle" />
                                <span className="margin_font_location">Upload</span>
                            </div>

                            <div className="container" style={{ width: '80%' }}>
                                <section className="row">
                                    <div className="col-md-6">
                                        <FormItem>
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
                                        </FormItem>
                                    </div>
                                    <div className="col-md-6">
                                        {/* <img src=''/> */}
                                    </div>
                                </section>
                            </div>
                            <div className="container" style={{ width: '80%' }}>
                                <section className="row">
                                    <div className="col-md-3">
                                        <FormItem>
                                            {getFieldDecorator('gridImage', {
                                                rules: [{
                                                    required: true,
                                                    message: 'Please upload your Images!',
                                                    whitespace: true
                                                }],
                                            })(
                                                <span>
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
                                                            style={{ height: '190px' }} />
                                                    </div>}
                                                </span>
                                            )}
                                        </FormItem>
                                    </div>
                                    <div className="col-md-3">
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
