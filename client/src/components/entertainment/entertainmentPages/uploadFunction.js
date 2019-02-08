import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import UploadForm from './uploadForm';
import './uploadVideo.css';


class UploadFunction extends Component{
  //*for modal*//

  state = { visible: false }

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
              <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>

                {/*Modal*/}
                <div id="myModal" class="modal fade" role="dialog">
                <div class="modal-dialog">

                  {/* Modal content */}
                  <div class="modal-content">
                    <div class="modal-header">
                      <button type="button" class="close" data-dismiss="modal">&times;</button>
                      <h4 class="modal-title">Upload Video</h4>
                    </div>
                    <div class="modal-body">
                      <UploadForm/>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                  </div>

                </div>
                </div>
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
