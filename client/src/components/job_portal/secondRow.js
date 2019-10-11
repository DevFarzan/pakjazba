import React, { Component } from 'react';
import { Modal } from 'antd';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import './JobSecondrow.css';

class JobSecondrow extends Component {
    constructor(props) {
        super(props)
        this.state = {
            objData: {},
            visible: false,
            goForLogin: false
        }
    }

    clickItem(item) {
        this.setState({ visible: true, objData: item })
    }

    handleCancel = (e) => {
        this.setState({ visible: false });
    }

    handleLogin = (e) => {
        const { dispatch } = this.props;
        const { objData } = this.state;
        let otherData = { ...objData, user: true };
        dispatch({ type: 'ANOTHERDATA', otherData })
        this.setState({ goForLogin: true, visible: false })
    }

    render() {
        const { data } = this.props;
        const { goForLogin, objData } = this.state;
        console.log(data.user, 'userrrrrrrr')

        if (goForLogin) {
            return <Redirect to={{ pathname: '/sigin', state: { from: { pathname: "/detail_jobPortal" }, state: objData } }} />;
        }

        return (
            <div className="container" style={{ width: "90%" }}>
                <div className="row" style={{ border: '1px solid #80808059' }}>
                    <div className="col-md-4 col-sm-12 col-xs-12 " style={{ border: '1px solid #80808059' }}>
                        <div className="row">
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <h3 className="font-style"> Posted By: </h3>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <span className="font-style">{data.compName}</span>
                            </div>
                        </div>
                        <div className="row" style={{ marginTop: '-29px' }}>
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <h3 className="font-style"> Location: </h3>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <span className="font-style">{data.location}</span>
                            </div>
                        </div>

                        <div className="row" style={{ marginTop: '-29px' }}>
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <h3 className="font-style"> Salary: </h3>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <p className="font-style">${data.salary}</p>
                            </div>
                        </div>
                        <div className="row" style={{ marginTop: '-29px' }}>
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <h3 className="font-style"> Experience: </h3>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <p className="font-style">{data.experience}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 col-sm-12 col-xs-12">
                        <div style={{ border: '1px solid #80808059', padding: '13px' }}>
                            <h3 className="font-style" style={{ marginTop: '2px' }}> About {data.compName} </h3>
                            <hr className="hr-class" style={{ width: "100%" }} />
                            <p className="font-style" style={{ marginTop: "40px" }}>{data.compDescription}</p>
                            {!data.user && <button type="button" className="btn2 btn2-success" style={{ marginTop: "70px", padding: "5px" }} onClick={() => { this.clickItem(data) }}>Apply This Job</button>}
                        </div>
                    </div>
                </div>
                {this.state.visible && <Modal
                    title="Kindly Login first"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <div className="row">
                        <div className="col-md-6" style={{ textAlign: 'center' }}><button className="btn btn-sm btn2-success" style={{ width: '100%' }} onClick={this.handleLogin}>Login</button></div>
                        <div className="col-md-6" style={{ textAlign: 'center' }}><button className="btn btn-sm btn2-success" style={{ width: '100%' }} onClick={this.handleCancel}>Cancel</button></div>
                    </div>
                </Modal>}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        text: state.text
    })
}

export default connect(mapStateToProps)(JobSecondrow);
