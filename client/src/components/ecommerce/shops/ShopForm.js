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
} from 'antd';
import Burgermenu from '../../header/burgermenu';
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

class ShopForm extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        const { getFieldDecorator } = this.props.form;
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

                <Form onSubmit={this.handleSubmit} className="login-form">
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
                                            <div className="col-md-6" style={{ textAlign: 'left', display: 'grid' }}>
                                                <label htmlFor="Price Mode"> Category </label>
                                                <FormItem>
                                                    {getFieldDecorator('shopCategory', {
                                                        // initialValue: this.state.shopCategory,
                                                        rules: [{
                                                            type: 'array',
                                                            required: true,
                                                            message: 'Please select your Shop Category!'
                                                        }],
                                                    })(
                                                        <Cascader
                                                            options={category}
                                                        // showSearch={{ filter }} 
                                                        />
                                                    )}
                                                </FormItem>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
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
                                        <div className="col-md-6">
                                            <div className="row" style={{ padding: '0px' }}>
                                                <div className="col-md-7" style={{ display: 'grid' }}>
                                                    <label> City </label>
                                                    <FormItem>
                                                        {getFieldDecorator('shopCity', {
                                                            // initialValue: this.state.shopCity,
                                                            rules: [{
                                                                type: 'array',
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
                                                                type: 'array',
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
                                                                },
                                                                {
                                                                    // validator: this.checkValue.bind(this)
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
                                                    // fileList={fileList}
                                                    // onPreview={this.handlePreview}
                                                    // onChange={this.handleChange}
                                                    >
                                                        {/* {fileList.length > 1 ? null : uploadButton} */}
                                                    </Upload>
                                                    <Modal
                                                        // visible={previewVisible} 
                                                        footer={null} onCancel={this.handleCancel}>
                                                        <img alt="example" style={{ width: '100%' }}
                                                        // src={previewImage} 
                                                        />
                                                    </Modal>
                                                </div>
                                            )}
                                        </FormItem>
                                    </div>
                                    <div className="col-md-6">
                                        <FormItem>
                                            {getFieldDecorator('coverPhoto', {
                                                rules: [{
                                                    required: true,
                                                    message: 'Please upload your Images!',
                                                    whitespace: true
                                                }],
                                            })(
                                                <span>
                                                    {/* {this.state.coverPhotoSrc.length == 0 &&  */}
                                                    <Dragger
                                                        id="coverPhoto"
                                                        name='file'
                                                        action="//jsonplaceholder.typicode.com/posts/"
                                                    // onChange={this.onChangeCoverPhoto}
                                                    >
                                                        <p className="ant-upload-drag-icon">
                                                            <Icon type="inbox" />
                                                        </p>
                                                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                                                        <p className="ant-upload-hint">Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
                                                    </Dragger>
                                                    {/* } */}
                                                    {/* {this.state.coverPhotoSrc.length > 0 &&  */}
                                                    <div>
                                                        <img alt="example"
                                                            // src={this.state.coverPhotoSrc} 
                                                            style={{ height: '190px' }} />
                                                    </div>
                                                    {/* } */}
                                                </span>
                                            )}
                                        </FormItem>
                                    </div>
                                    <div className="col-md-3">
                                        <FormItem>
                                            {getFieldDecorator('banner', {
                                                rules: [{
                                                    required: true,
                                                    message: 'Please upload your Images!',
                                                    whitespace: true
                                                }],
                                            })(
                                                <span>
                                                    {/* {this.state.bannerSrc.length == 0 &&  */}
                                                    <Upload
                                                        action="//jsonplaceholder.typicode.com/posts/"
                                                    // listType="picture-card"
                                                    // style={{border: '1px dotted black'}}
                                                    // fileList={fileList}
                                                    // onPreview={this.handlePreview}
                                                    // onChange={this.onChangeBanner}
                                                    >
                                                        {/* {bannerButton} */}
                                                    </Upload>
                                                    {/* } */}
                                                    {/* {this.state.bannerSrc.length > 0 &&  */}
                                                    <div>
                                                        <img alt="example"
                                                            // src={this.state.bannerSrc} 
                                                            style={{ height: '190px' }} />
                                                    </div>
                                                    {/* } */}
                                                </span>
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
            </div>
        )
    }
}

const WrappedBusinessForm = Form.create()(ShopForm);
export default WrappedBusinessForm;
