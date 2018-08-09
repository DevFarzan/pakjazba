import React, { Component } from 'react';
import sha1 from 'sha1';
import axios from 'axios';
import superagent from 'superagent'
import Dropzone from 'react-dropzone';

//import { Upload, message, Button, Icon } from 'antd-init';


class ImageDropzone extends Component{
  uploadFile = (files) =>{
			console.log('uploadFile:')
			const image = files[0]
      console.log(image);

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

			let uploadRequest = superagent.post(url)
			uploadRequest.attach('file', image)

			Object.keys(params).forEach((key) =>{
				uploadRequest.field(key, params[key])
			})

			uploadRequest.end((err, resp) =>{
				if(err){
					alert(err)
					return
				}
				//console.log('Upload Complete: '+JSON.stringif(resp.body))
        console.log('Upload Complete: '+JSON.stringify(resp.body.url))
        this.setState({
          imageresponse:JSON.stringify(resp.body.url)
        })

        axios.get('http://localhost:5000/api/getimagedata?image='+this.state.imageresponse)
        .then(function(response){
          console.log(response);
        })
			})
  }//upload files

  handlecategory = () =>{
  	var category = this.refs.category.value;
  	axios.get('http://localhost:5000/api/categoryPost?category='+category).then(function(response){
  		console.log(response);
  	})
  }

        render(){
          return(
            <div>
              <h4>image upload!</h4>

                <Dropzone onDrop={this.uploadFile.bind(this)}/>

                <input type="text" ref="category" placeholder="add category" />
                <button className="adddetail" onClick={this.handlecategory}>Add Details</button>
            </div>
          )
        }
}

export default  ImageDropzone;
