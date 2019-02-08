import React, { Component } from 'react';
import {
  Form, Select, InputNumber, Switch, Radio,
  Slider, Button, Upload, Icon, Rate, Input, Checkbox,
  Row, Col,
} from 'antd';




const { Option } = Select;

class UploadForm extends Component{

  handleSubmit = (e) => {
   e.preventDefault();
   this.props.form.validateFields((err, values) => {
     if (!err) {
       console.log('Received values of form: ', values);
     }
   });
 }

 normFile = (e) => {
   console.log('Upload event:', e);
   if (Array.isArray(e)) {
     return e;
   }
   return e && e.fileList;
 }


  render(){

    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };


    return(
    <div>
      <Form onSubmit={this.handleSubmit}>
        <Form.Item
          label="Title"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          {getFieldDecorator('note', {
            rules: [{ required: true, message: 'Please input your note!' }],
          })(
            <Input />
          )}
        </Form.Item>

        <Form.Item
          label="Description"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          {getFieldDecorator('note', {
            rules: [{ required: true, message: 'Please input your note!' }],
          })(
            <Input />
          )}
        </Form.Item>

        <Form.Item
          {...formItemLayout}
          label="Thumbnail Url"
          extra="Upload Thumbnail Url"
        >
          {getFieldDecorator('upload', {
            valuePropName: 'fileList',
            getValueFromEvent: this.normFile,
          })(
            <Upload name="logo" action="/upload.do" listType="picture">
              <Button>
                <Icon type="upload" /> Click to upload
              </Button>
            </Upload>
          )}
        </Form.Item>

        <Form.Item
          {...formItemLayout}
          label="Video"
          extra="Upload Video"
        >
          {getFieldDecorator('upload', {
            valuePropName: 'fileList',
            getValueFromEvent: this.normFile,
          })(
            <Upload name="logo" action="/upload.do" listType="picture">
              <Button>
                <Icon type="upload" /> Click to upload
              </Button>
            </Upload>
          )}
        </Form.Item>
      </Form>
    </div>

    )
  }
}
const WrappedvideoForm = Form.create()(UploadForm);
export default WrappedvideoForm;
