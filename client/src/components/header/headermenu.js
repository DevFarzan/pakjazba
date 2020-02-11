import React, { Component } from 'react';
import './burgermenu.css';
import './headermenu.css'
import MainLogin from '../header/mainLogin';
import Category from '../header/getcategory';
import MoreBtnDropdown from './moreBtnDropdown';
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Redirect } from 'react-router';
import { isTablet } from 'react-device-detect';

class HeaderMenu extends Component {

    constructor(props) {
        super(props)
        this.state = {
            collapsed: false,
            hidemenu: false,
        }
    }
    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    openNav = () => {
        document.getElementById("myNav").style.width = "100%";
    }
    closeNav = () => {
        document.getElementById("myNav").style.width = "0%";
    }

    renderList = e => {
        let str = this.props.match.path,
            path = str.slice(str.indexOf('/') + 1, str.length);
        if (path !== e) {
            this.props.dispatch({ type: 'GOROUTE', route: true });
            this.setState({ selectRoute: true, route: e });
        }
    }


    render() {
        const { selectRoute, route } = this.state;
        if (selectRoute) {
            return <Redirect to={`/${route}`} />
        }
        return (
            <div>
                <nav className="navbar navbar-fixed-top mainNavBarHeaderStyle hidden-xs hidden-sm">
                    <div className="container-fluid" style={{ padding: "0" }}>
                        <div className="row" style={{ padding: '0', margin: '0' }}>
                            <div className="col-md-2 col-sm-6 col-xs-6">
                                <div className="navbar-header">
                                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false" >
                                        <span className="sr-only">Toggle navigation</span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                    <p onClick={() => this.renderList('')} className="navbar-brand hidden-sm">
                                        <img alt='' src="../images/PakJazbaLogo-01.png" className="headerLogoNav" />
                                    </p>
                                    <Link to={`/`} className="navbar-brand visible-sm">
                                        <img alt='' src="../images/PakJazbaLogo-01.png" style={{ "width": "100%", marginTop: "8px" }} />
                                    </Link>

                                </div>
                            </div>
                            <div className="col-md-2">
                            </div>
                            <div className="col-md-8 col-sm-6 col-xs-6">
                                <div className="row">
                                    <div className="col-md-2" style={{ marginTop: "26px" }}>
                                    </div>
                                    <div className="col-md-1" style={{ marginTop: "33px" }}>
                                        <Link to={`/`} className="homeheader">Home</Link>
                                    </div>
                                    <div className="col-md-1" style={{ marginTop: "33px" }}>
                                        <Link to={`/explore`} className="homeheader">Explore</Link>
                                    </div>
                                    <div className="col-md-2" style={{ marginTop: "33.2px" }}>
                                        <MoreBtnDropdown />
                                    </div>
                                    <div className="col-md-2 col-sm-2 col-xs-12" style={{ marginTop: "29px" }}>
                                        <MainLogin />
                                    </div>
                                    <div className="col-md-3 col-sm-2 col-xs-12" style={{ marginTop: "21px" }}>
                                        <Category />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                {/*=============================================visible xs============================================*/}
                <div id="myNav" className="overlay visible-xs visible-sm navbar-fixed-top" style={{}}>
                    <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav} style={{ marginTop: '-8%' }}>&times;</a>
                    <div className="overlay-content">
                        <div className="row">
                            <div className="col-xs-6">
                                <MainLogin />
                            </div>
                            <div className="col-xs-12">
                                <Category />
                            </div>
                        </div>
                        <span>
                            <Link rel="noopener noreferrer" to={`/`} onClick={this.closeNav}>Home</Link>
                        </span>
                        <span style={{ marginTop: "8px" }}>
                            <Link rel="noopener noreferrer" to={`/explore`}>Explore</Link>
                        </span>
                        <span style={{ marginTop: "8px" }}>
                            <Link rel="noopener noreferrer" to={`/explore`}>More</Link>
                        </span>
                    </div>
                </div>
                <div className="row visible-xs visible-sm" style={{ background: '#0000001f' }}>

                    <div className="col-sm-3 col-xs-5">
                        <Link to={`/`}><img src="../images/PakJazbaLogo-01.png" alt='img' style={{ width: '100%' }} /></Link>
                    </div>

                    <div className="col-sm-6 col-xs-5">
                    </div>
                    <div className="col-sm-3 col-xs-2">
                        <i onClick={this.openNav} className="fa fa-bars" style={isTablet ? { color: 'white', fontSize: '24px', marginTop: '20px', cursor: 'pointer' } : { color: 'white', fontSize: '24px', marginTop: '20px', cursor: 'pointer', marginLeft: "20px" }}></i>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        route: state.route
    });
}

export default withRouter(connect(mapStateToProps)(HeaderMenu));
