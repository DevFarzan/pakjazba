import React, { Component } from 'react';
import {
  Form, Select, InputNumber, Switch, Radio,
  Slider, Button, Upload, Icon, Rate, Input, Checkbox,
  Row, Col, Progress 
} from 'antd';
import { HttpUtils } from '../../../Services/HttpUtils';
import sha1 from "sha1";
import superagent from "superagent";
import Loader from 'react-loader-advanced';
import './uploadForm.css'

const { Option } = Select;
//const children = [];
const provinceData = ["Film & Animation", "Autos & Vehicles", "Music", "Pets & Animals", "Sports", "Travel & Events", "Gaming", "People & Blogs", "Comedy", "Entertainment", "News & Politics", "Howto & Style", "Education", "Science & Technology", "Nonprofits & Activism"];
const cityData = {
  Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
  Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
};

class UploadForm extends Component{
  constructor(props) {
      super(props);
      this.state = {
          loader: false,
          percent: 0
      }
  }

  handleProvinceChange = (value) => {
      this.setState({ category:value });
  }

  handleChange = (value) => {
      this.setState({
          tags:value
      })
  }

  //--------------function for cloudnary url ---------------
  uploadFile = (files, para) =>{
      const image = files.originFileObj
      const cloudName = 'dxk0bmtei'
      const url = 'https://api.cloudinary.com/v1_1/'+cloudName+'/'+para+'/upload'
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
          });
          uploadRequest.on('progress', (progress) => {
            this.onPhotoUploadProgress(progress)
          });

          uploadRequest.end((err, resp) =>{
              err ? rej(err) : res(resp);
          });
      })
  }

  onPhotoUploadProgress(progress) {
      if(progress.percent && progress.percent > 0 && progress.percent <= 100){
          this.setState({ percent: Math.floor(progress.percent) });
      }      
  }

  //-----------------cloudnary function end ------------------

  handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
            this.setState({ loader: true })
            var arr = [],videoLink,imageLink;
            arr.push(
                values.uploadvideo[0],
                values.uploadthumbnail[0]
            )
            this.postDataWithURL(arr,values);
        }
      });
  }

  async postDataWithURL(arr,values){
      Promise.all(arr.map((val, key) => {
          let str = key == 0 ? 'video' : 'image';
          return this.uploadFile(val, str).then((result) => {
              return result.body.url
          })
      })).then((results) => {
          let obj = {
              title:values.note,
              description:values.description,
              videoLink:results[0],
              thumbnailImageLink:results[1],
              category:this.state.category,
              tags:this.state.tags
          }
          this.postdataToServer(obj);
      })
  }

  postdataToServer = async (obj) => {
      let response = await HttpUtils.post('customvideo', obj);
      this.setState({loader: false})
      this.props.onOk(false);
  }

  normFile = (e) => {
    if (Array.isArray(e)) {
        return e;
    }
    return e && e.fileList;
  }


  render(){
    const { tags, suggestions,cities } = this.state;
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
                {getFieldDecorator('description', {
                  rules: [{ required: true, message: 'Please input your description!' }],
                })(
                  <Input />
                )}
              </Form.Item>

              <Form.Item
                {...formItemLayout}
                label="Thumbnail Url"
                extra="Upload Thumbnail Url"
              >
              <div class="loading">Loading&#8230;</div>
                {getFieldDecorator('uploadthumbnail', {
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
                {getFieldDecorator('uploadvideo', {
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
              <div className="row">
                <div className="col-md-3" style={{textAlign:'right'}}>
                    <label>Tags</label>
                </div>
                <div className="col-md-9">
                <Select
                    mode="tags"
                    style={{ width: '100%' }}
                    placeholder="Tags Mode"
                    onChange={this.handleChange}
                    >
                </Select>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <label style={{textAlign:'right'}}>Category</label>
                </div>
                <div className="col-md-6">
                <Select
                    defaultValue={provinceData[0]}
                    onChange={this.handleProvinceChange}
                  >
                    {provinceData.map(province => <Option key={province}>{province}</Option>)}
                  </Select>
                </div>
                <div className="col-md-3"></div>
              </div>
              <div className="row">
                <div className="col-md-12" style={{textAlign:'right'}}>
                  {this.state.loader && <Progress type="circle" percent={this.state.percent} width={50} />}
                  <button className="btn btn-lg">Upload Video</button>
                </div>
              </div>
            </Form>
          </div>

    )
  }
}

const WrappedvideoForm = Form.create()(UploadForm);
export default WrappedvideoForm;
