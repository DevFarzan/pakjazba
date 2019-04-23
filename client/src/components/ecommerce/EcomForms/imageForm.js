import React, { Component } from 'react';
import {
  Upload, Button, Icon, message,
} from 'antd';

class ImageForm extends Component {

  state = {
    fileList: [],
    uploading: false,
  }

  handleUpload = () => {
    const { fileList } = this.state;
    const formData = new FormData();
    fileList.forEach((file) => {
      formData.append('files[]', file);
    });

    this.setState({
      uploading: true,
    });

    // You can use any AJAX library you like
  }


  render() {

    const { uploading, fileList } = this.state;
    const props = {
      onRemove: (file) => {
        this.setState((state) => {
          const index = state.fileList.indexOf(file);
          const newFileList = state.fileList.slice();
          newFileList.splice(index, 1);
          return {
            fileList: newFileList,
          };
        });
      },
      beforeUpload: (file) => {
        this.setState(state => ({
          fileList: [...state.fileList, file],
        }));
        return false;
      },
      fileList,
    };

    return (
      <div className="container" style={{ width: "100%" }}>
        <div className="row">
          <div className="col-md-12">
            <div className="col-md-3">
              <div className="vitalbox">
                <h4> Listing Assitant </h4>
                <p> Supply enough information tomake the
                  buying decision easy. Please ensure that
                  all products and content comply with our
                  Selling and Policies restrictions including
                  the Restructed products policy </p>

                <p style={{ textAlign: "center" }}> *Fields are required </p>
              </div>
            </div>
            <div className="col-md-9">
              <div className="vitalbox">
                <div className="row">
                  <div className="col-md-4">
                    <h4> Main </h4>
                    <div className="vitalbox">
                      <img src='./images/ecommerce/photo-camera-icon-01-.jpg' />
                      <div className="row" style={{ padding: "0px", marginTop: "20px" }}>
                        <div className="col-md-6">
                          <Upload {...props}>
                            <Button>
                              <Icon type="upload" /> Select File
                            </Button>
                          </Upload>
                        </div>
                        <div className="col-md-6">
                          <h6 style={{ marginTop: "10px", marginLeft: "4px" }}> No File Chosen</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <h4> Product images style guidline </h4>
                    <p> Listing that are missing a main image will not appear in search or browser you fix the listing. Choose images that are clear, information-rich and attractive <br />
                      Images must meet the following  </p>
                    <ul>
                      <li> Products must fill at least 85% of image. Images must show only the product that is for sell,
                      with fewer or no props with no logo,
                      watermarks or insert images, images may only contain text that is a part of product.   </li>
                      <li> Main image must have pure white background, nmust be a photo (Not a drawing), and must not contain excluded accessories.</li>
                      <li> Image must be at least 1000 pixel on the longest side and atleast 500 pixels on shortest side to be zoom-able </li>
                      <li> Images must not exceed 10000 pixels on the longest side </li>
                      <li> JPEG is the prefered image format, but you may also use TIFF and GIF files.</li>
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="vitalbox">
                      <img src='./images/ecommerce/photo-camera-icon-01-.jpg' />
                      <div className="row" style={{ padding: "0px", marginTop: "20px" }}>
                        <div className="col-md-6">
                          <Upload {...props}>
                            <Button>
                              <Icon type="upload" /> Select File
                            </Button>
                          </Upload>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="vitalbox">
                      <img src='./images/ecommerce/photo-camera-icon-01-.jpg' />
                      <div className="row" style={{ padding: "0px", marginTop: "20px" }}>
                        <div className="col-md-6">
                          <Upload {...props}>
                            <Button>
                              <Icon type="upload" /> Select File
                            </Button>
                          </Upload>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="vitalbox">
                      <img src='./images/ecommerce/photo-camera-icon-01-.jpg' />
                      <div className="row" style={{ padding: "0px", marginTop: "20px" }}>
                        <div className="col-md-6">
                          <Upload {...props}>
                            <Button>
                              <Icon type="upload" /> Select File
                            </Button>
                          </Upload>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="vitalbox">
                      <img src='./images/ecommerce/photo-camera-icon-01-.jpg' />
                      <div className="row" style={{ padding: "0px", marginTop: "20px" }}>
                        <div className="col-md-6">
                          <Upload {...props}>
                            <Button>
                              <Icon type="upload" /> Select File
                            </Button>
                          </Upload>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="vitalbox">
                      <img src='./images/ecommerce/photo-camera-icon-01-.jpg' />
                      <div className="row" style={{ padding: "0px", marginTop: "20px" }}>
                        <div className="col-md-6">
                          <Upload {...props}>
                            <Button>
                              <Icon type="upload" /> Select File
                            </Button>
                          </Upload>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="vitalbox">
                      <img src='./images/ecommerce/photo-camera-icon-01-.jpg' />
                      <div className="row" style={{ padding: "0px", marginTop: "20px" }}>
                        <div className="col-md-6">
                          <Upload {...props}>
                            <Button>
                              <Icon type="upload" /> Select File
                            </Button>
                          </Upload>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row" style={{ paddingTop: "10px", paddingLeft: "" }}>
                <div className="col-md-3 col-xs-4">
                  <div className="row center_global row">
                    <button style={{ textAlign: 'center', width: "50%" }}
                      className="btn ecombutton">Cancel</button>
                  </div>
                </div>
                <div className="col-md-3 col-xs-4">
                  <div className="row center_global row">
                    <button style={{ textAlign: 'center', width: "70%" }}
                      className="btn ecombutton">Save as Draft</button>
                  </div>
                </div>
                <div className="col-md-3 col-xs-4">
                  <div className="row center_global row">
                    <button style={{ textAlign: 'center', width: "70%" }}
                      className="btn button_custom">Next</button>
                  </div>
                </div>
                <div className="col-md-3">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default ImageForm;
