import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import sha1 from "sha1";
import superagent from "superagent";
import moment from 'moment';
import { HttpUtils } from '../../Services/HttpUtils';
import { Icon, Spin, notification } from 'antd';
import './Thirdrow.css';

class Thirdrow extends Component {
    constructor(props) {
        super()
        this.state = {
            name1: '',
            name2: '',
            email1: '',
            email2: '',
            objId: '',
            msg: '',
            err: 'Your CV must be a pdf, docx and no bigger than 3 MB',
            file: {},
            err2: '',
            job: [],
            loader: false,
            loader2: false,
        }
    }

    componentDidMount() {
        this.getAllBusiness();
    }

    async getAllBusiness() {
        var res = await HttpUtils.get('marketplace');
        this.setState({
            job: res && res.jobPortalData,
        });
    }

    componentDidUpdate(prevProps, prevState) {
        const { data } = this.props;
        if (prevProps.data !== data) {
            this.setState({ email2: data.compEmail, objId: data._id })
        }
    }

    onChangeInput(e) {
        let target = e.target.id;
        if (target === 'name1') {
            this.setState({ name1: e.target.value })
        } else if (target === 'name2') {
            this.setState({ name2: e.target.value })
        } else if (target === 'email1') {
            this.setState({ email1: e.target.value })
        } else if (target === 'message') {
            this.setState({ msg: e.target.value })
        }
    }

    uploadFile = (files) => {
        this.setState({ loader2: true })
        const file = files[0];
        let name = file.name;
        let ext = name.substring(name.indexOf('.'), name.length)
        if ((file.name.split('.').length - 1 === 1) && (ext === '.pdf' || ext === '.docx')) {
            if (file.size <= 3000000) {
                this.setState({ file, err: name + ' is uploaded.', loader2: false });
            } else {
                this.setState({ err: 'File size is to big', loader2: false });
            }
        } else {
            this.setState({ err: 'File type is not valid', loader2: false });
        }
    }

    uploadToCloud(file) {
        const cloudName = 'dxk0bmtei'
        const url = 'https://api.cloudinary.com/v1_1/' + cloudName + '/auto/upload'
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
            uploadRequest.attach('file', file)
            Object.keys(params).forEach((key) => {
                uploadRequest.field(key, params[key])
            })

            uploadRequest.end((err, resp) => {
                err ? rej(err) : res(resp);
            })
        })
    }

    handleSubmit = async () => {
        const { name1, name2, email1, msg, file, email2, objId } = this.state;
        if (!!name1 && !!name2 && !!email1 && !!msg && !!file) {
            this.setState({ err2: '', loader: true })
            let res = await this.uploadToCloud(file)
            let obj = {
                senFirName: name1,
                senLastName: name2,
                senEmail: email1,
                senCV: res.body.url,
                senMsg: msg,
                resEmail: email2,
                appliedOn: moment().format('LL'),
                jobId: objId
            }
            let req = await HttpUtils.post('AppliedForJob', obj)
            if (req.code === 200) {
                console.log(req.msg)
                this.openNotification()
                this.setState({
                    loader: false,
                    name1: '',
                    name2: '',
                    email1: '',
                    msg: ''
                })
            }

        } else {
            this.setState({ err2: 'Please fill all fields' })
        }
    }

    openNotification() {
        notification.open({
            message: 'Success ',
            description: 'Your job is submited successfully, Kindly visit your profile',
        });
    };

    render() {
        const { loader, loader2 } = this.state;
        const antIcon = <Icon type="loading" style={{ fontSize: 24, marginRight: '10px' }} spin />;

        return (
            <div className="container" style={{ width: "70%" }}>
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12 des-space">
                        <div className="row">
                            <div className="card outset" style={{ boxShadow: "none", marginTop: "-40px", background: "whitesmoke" }}>
                                <div className="card-body space">
                                    <div className="row">
                                        <div className="col-md-12 col-sm-12 col-xs-12">
                                            <div className="col-md-6">
                                                <div className="md-form mb-0">
                                                    <label className="font-style">First Name</label>
                                                    <input type="text" id="name1" name="first name" className="form-background1" value={this.state.name1} onChange={this.onChangeInput.bind(this)} />
                                                </div>
                                            </div>
                                            {/*Grid column*/}
                                            {/*Grid column*/}
                                            <div className="col-md-6">
                                                <div className="md-form mb-0">
                                                    <label className="font-style">Last Name</label>
                                                    <input type="text" id="name2" name="last name" className="form-background1" value={this.state.name2} onChange={this.onChangeInput.bind(this)} />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="md-form mb-0">
                                                    <label className="font-style">Your Email</label>
                                                    <input type="text" id="email1" name="email" className="form-background1" value={this.state.email1} onChange={this.onChangeInput.bind(this)} />
                                                </div>
                                            </div>
                                            {/*Grid column*/}
                                            {/*Grid column*/}
                                            <div className="col-md-6">
                                                <div className="md-form mb-0">
                                                    <label className="font-style">Add Your CV</label>
                                                    <div className="form-background">
                                                        <Dropzone style={{ border: 'none' }} onDrop={this.uploadFile.bind(this)}>
                                                            <button className="btn button_custom" style={{ width: "100%" }}>Choose File</button>
                                                        </Dropzone>
                                                    </div>
                                                    {loader2 && <Spin className="col-xs-2 col-md-1" indicator={antIcon} />}
                                                    <p className="font-style">{this.state.err}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                {/*Grid column*/}
                                                <div className="col-md-12">
                                                    <div className="md-form">
                                                        <label className="font-style">Additional Information</label>
                                                        <textarea type="text" id="message" name="message" className="form-background1" style={{ height: "235px" }} value={this.state.msg} onChange={this.onChangeInput.bind(this)}></textarea>
                                                    </div>
                                                    <div className="form-background">
                                                        {loader && <Spin className="col-xs-2 col-md-1" indicator={antIcon} />}
                                                        <button className="btn button_custom" disabled={!!loader} style={{ width: "100%" }} onClick={this.handleSubmit}>Submit Now</button>
                                                        <p className="font-style">{this.state.err2}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Thirdrow;
