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
     this.setState({
       visible: true,
     });
   }

   handleOk = (e) => {
     console.log(e);
     this.setState({
       visible: false,
     });
   }

   handleCancel = (e) => {
     console.log(e);
     this.setState({
       visible: false,
     });
   }


  render(){
    return(
      <div className="row">
        <div className="col-md-8">
          <div className="uploadingcard">
            <div>
            <h4 style={{textAlign:"center"}}>Upload Your Video</h4>
              <span className="addvalue">
                <i class="fa fa-plus-square-o" style={{fontSize:"100px"}}></i>
              </span>
              <span className="modalform" style={{marginTop:"100px"}}>

              <Button type="primary" onClick={this.showModal}>
                Upload Video
                  </Button>
                {/*Modal*/}
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
          </div>
        </div>
        <div className="col-md-4">
        </div>
      </div>
    )
  }
}

export default UploadFunction;
