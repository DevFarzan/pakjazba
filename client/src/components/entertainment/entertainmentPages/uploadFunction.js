import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import UploadForm from './uploadForm';
import './uploadVideo.css';

class UploadFunction extends Component{
  //*for modal*//
  constructor(props) {
      super(props);
      this.state = { visible: false }
  }

  showModal = () => {
      this.setState({ visible: true });
  }

  handleOk = (e) => {
      this.setState({ visible: false });
  }

  handleCancel = (e) => {
      this.setState({ visible: false });
  }

  handleVideo = e => {
      this.handleOk();
      this.props.onLoader();
  }

  render(){
      return(
          <div className="row" style={{border:'1px solid #80808033',width:'94%',marginLeft:'28px', marginTop:"25px"}}>
              <div className="col-md-6 col-sm-6">
                  <h2 style={{fontSize:'40px',marginTop:'58px'}}><b>Upload and Share your videos</b></h2>
                  <p style={{marginTop:'2px'}}>videos not longer than 15 minutes
                      By submitting your videos to Pakjazba, you acknowledge that you agree to pakjazba Terms of Service
                       and Community Guidelines.
                  </p>
                  <Button type="primary" onClick={this.showModal}>
                      Upload Your Video
                  </Button>
                  <Modal
                      title="Upload Video"
                      visible={this.state.visible}
                      onOk={this.handleOk}
                      onCancel={this.handleCancel}
                  >
                    <UploadForm onOk={this.handleVideo}/>
                  </Modal>
              </div>
              <div className="col-md-1 col-sm-1">
              </div>
              <div className="col-md-4 col-sm-5">
                  <img src="../images/ic.png" style={{width:'100%', marginTop:"65px"}} />
              </div>
          </div>
      )
  }
}

export default UploadFunction;


{/*<div className="uploadingcard">
  <div>
  <h4 style={{textAlign:"center"}}>Upload Your Video</h4>
    <span className="addvalue">
      <i class="fa fa-plus-square-o" style={{fontSize:"100px"}}></i>
    </span>
    <span className="modalform" style={{marginTop:"100px"}}>

    <Button type="primary" onClick={this.showModal}>
      Upload Video
        </Button>
      {/*Modal
      <Modal
        title="Upload Video"
        visible={this.state.visible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
      >
        <UploadForm/>
    </Modal>

    </span>
  </div>
</div>*/}
