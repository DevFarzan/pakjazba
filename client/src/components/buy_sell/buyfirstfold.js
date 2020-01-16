import React, { Component } from 'react';
import './buyfirstfold.css'
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { isBrowser, isMobile } from "react-device-detect";

class Firstfold extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: '',
            goToFilter: false
        }
        this.category = this.category.bind(this);
    }

    category(e) {
        const { dispatch } = this.props;
        var inputValue = e.target.textContent;
        // console.log(inputValue , 'inputValue')
        this.props.mainCategoryFilter(inputValue)
        dispatch({ type: 'SEARCHON', inputValue })

    }

    dropDown(e) {
        const { open } = this.state;
        this.setState({ open: open === e ? '' : e })
    }

    filterPage = () => {
        this.setState({ goToFilter: true })
    }

    render() {
        // const { open, goToFilter } = this.state;
        // if (goToFilter) {
        //     return <Redirect to={{ pathname: `/filter_buySell` }} />
        // }
        return (
            <div className="container" style={{ width: "100%" }}>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" onClick={this.category} style={{ cursor: 'pointer' }}>
                        <div className="wrimagecard wrimagecard-topimage">
                            <div className="wrimagecard-topimage_headerMotor" onClick={this.dropDown.bind(this, 'motors')}>
                                <center>
                                    <h3 className="categoryInnerText">Motors</h3>
                                </center>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" onClick={this.category} style={{ cursor: 'pointer' }}>
                        <div className="wrimagecard wrimagecard-topimage">
                            <div className="wrimagecard-topimage_headerFashion" onClick={this.dropDown.bind(this, 'Fashion')}>
                                <center>
                                    <h3 className="categoryInnerText">Fashion</h3>
                                </center>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" onClick={this.category} style={{ cursor: 'pointer' }}>
                        <div className="wrimagecard wrimagecard-topimage">
                            <div className="wrimagecard-topimage_headerElectric" onClick={this.dropDown.bind(this, 'Electronics')} >
                                <center>
                                    <h3 className="categoryInnerText">Electronics</h3>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" onClick={this.category} style={{ cursor: 'pointer' }}>

                    <div className="wrimagecard wrimagecard-topimage">
                        <div className="wrimagecard-topimage_headerHomeBuy" onClick={this.dropDown.bind(this, 'Home')} >
                            <center>
                                <h3 className="categoryInnerText">Collectibles & Art</h3>
                            </center>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" onClick={this.category} style={{ cursor: 'pointer' }}>

                    <div className="wrimagecard wrimagecard-topimage">
                        <div className="wrimagecard-topimage_headerHomeBuy" onClick={this.dropDown.bind(this, 'Home')} >
                            <center>
                                <h3 className="categoryInnerText">Home</h3>
                            </center>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" onClick={this.category} style={{ cursor: 'pointer' }}>
                    <div className="wrimagecard wrimagecard-topimage">
                        <div className="wrimagecard-topimage_headerGarden" onClick={this.dropDown.bind(this, 'Garden')} >
                            <center>
                                <h3 className="categoryInnerText">Garden</h3>
                            </center>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" onClick={this.category} style={{ cursor: 'pointer' }}>
                    <div className="wrimagecard wrimagecard-topimage">
                        <div className="wrimagecard-topimage_headerToy" onClick={this.dropDown.bind(this, 'Toys')}>
                            <center>
                                <h3 className="categoryInnerText">Sporting Goods</h3>
                            </center>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" onClick={this.category} style={{ cursor: 'pointer' }}>
                    <div className="wrimagecard wrimagecard-topimage">
                        <div className="wrimagecard-topimage_headerToy" onClick={this.dropDown.bind(this, 'Toys')}>
                            <center>
                                <h3 className="categoryInnerText">Toys & Hobbies</h3>
                            </center>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" onClick={this.category} style={{ cursor: 'pointer' }}>
                    <div className="wrimagecard wrimagecard-topimage">
                        <div className="wrimagecard-topimage_headerToy" onClick={this.dropDown.bind(this, 'Toys')}>
                            <center>
                                <h3 className="categoryInnerText">Business & Industrial</h3>
                            </center>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" onClick={this.category} style={{ cursor: 'pointer' }}>
                    <div className="wrimagecard wrimagecard-topimage">
                        <div className="wrimagecard-topimage_headerToy" onClick={this.dropDown.bind(this, 'Toys')}>
                            <center>
                                <h3 className="categoryInnerText">Music</h3>
                            </center>
                        </div>
                    </div>
                </div>
                {/* <div className="row" style={{padding:"0", marginTop:"10px", marginBottom:"15px"}}>
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <span className="popular_c">Popular categories</span>
                    </div>
                </div> */}
                {/* <div className="row" style={{padding:'0px'}}>
                    <div className="col-md-4 col-sm-4 col-xs-12" style={{marginRight:'-30px'}} onClick={this.category}>
                        <div style={{border:'1px solid black',padding:'6px'}}>
                            <i className="fa fa-car margin_right_c"></i>
                            <span className="margin_right_c">Motors</span>
                            <span className="fa fa-chevron-circle-down visible-xs" onClick={this.dropDown.bind(this, 'motors')} style={{float:'right',fontSize:'27px'}}></span>
                        </div>
                        {(isBrowser || (isMobile && open === 'motors')) && <div style={{border:'1px solid black',borderTop:'none'}}>
                        <ul className="list_style_c">
                            <li className="color_b"><span>Cars</span></li>
                            <li className="color_b"><span>Car Accessories</span></li>
                            <li className="color_b"><span>Spare parts</span></li>
                            <li className="color_b"><span>Busess,Vans</span></li>
                            <li className="color_b"><span>Trucks</span></li>
                        </ul>
                        </div>}
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-12" style={{marginRight:'-30px'}} onClick={this.category}>
                        <div style={{border:'1px solid black',padding:'6px'}}>
                            <i className="fa fa-tv margin_right_c"></i>
                            <span className="margin_right_c">Fashion</span>
                            <span className="fa fa-chevron-circle-down visible-xs" onClick={this.dropDown.bind(this, 'fashion')} style={{float:'right',fontSize:'27px'}}></span>
                        </div>
                        {(isBrowser || (isMobile && open === 'fashion')) && <div style={{border:'1px solid black',borderTop:'none'}}>
                        <ul className="list_style_c">
                            <li className="color_b"><span>Bath & Body</span></li>
                            <li className="color_b"><span>Luxury Handbags </span></li>
                            <li className="color_b"><span>Health Care </span></li>
                            <li className="color_b"><span>Diamond Jewelry</span></li>
                            <li className="color_b"><span>Loose Diamonds</span></li>
                        </ul>
                        </div>}
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-12" onClick={this.category}>
                        <div style={{border:'1px solid black',padding:'6px'}}>
                            <i className="fa fa-black-tie margin_right_c"></i>
                            <span className="margin_right_c">Electronics</span>
                            <span className="fa fa-chevron-circle-down visible-xs" onClick={this.dropDown.bind(this, 'electronics')} style={{float:'right',fontSize:'27px'}}></span>
                        </div>
                        {(isBrowser || (isMobile && open === 'electronics')) && <div style={{border:'1px solid black',borderTop:'none'}}>
                        <ul className="list_style_c">
                            <li className="color_b"><span>Binoculars & Telescopes </span></li>
                            <li className="color_b"><span>12-Volt Portable Appliances </span></li>
                            <li className="color_b"><span>Batteries </span></li>
                            <li className="color_b"><span>Cables & Connectors </span></li>
                            <li className="color_b"><span>Computer Components & Parts </span></li>
                        </ul>
                        </div>}
                    </div>
                </div> */}
                {/* <div className="row" style={{padding:'0px'}}>
                    <div className="col-md-4 col-sm-4 col-xs-12" style={{marginRight:'-30px'}} onClick={this.category}>
                        <div style={{border:'1px solid black',padding:'6px'}}>
                            <i className="fa fa-home margin_right_c"></i>
                            <span className="margin_right_c">Home</span>
                            <span className="fa fa-chevron-circle-down visible-xs" onClick={this.dropDown.bind(this, 'home')} style={{float:'right',fontSize:'27px'}}></span>
                        </div>
                        {(isBrowser || (isMobile && open === 'home')) && <div style={{border:'1px solid black',borderTop:'none'}}>
                        <ul className="list_style_c">
                            <li className="color_b"><span>Baby Gear</span></li>
                            <li className="color_b"><span>Bath Accessory Sets </span></li>
                            <li className="color_b"><span>Crafts</span></li>
                            <li className="color_b"><span>Food and Beverages</span></li>
                            <li className="color_b"><span>Home Décor</span></li>
                            <li className="color_b"><span>Home Improvement</span></li>
                            <li className="color_b"><span>Major Appliances</span></li>
                        </ul>
                        </div>}
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-12" style={{marginRight:'-30px'}} onClick={this.category}>
                        <div style={{border:'1px solid black',padding:'6px'}}>
                            <i className="fa fa-futbol-o margin_right_c"></i>
                            <span className="margin_right_c">Garden</span>
                            <span className="fa fa-chevrson-circle-down visible-xs" onClick={this.dropDown.bind(this, 'garden')} style={{float:'right',fontSize:'27px'}}></span>
                        </div>
                        {(isBrowser || (isMobile && open === 'garden')) && <div style={{border:'1px solid black',borderTop:'none'}}>
                        <ul className="list_style_c">
                            <li className="color_b"><span>Yard & Garden</span></li>
                            <li className="color_b"><span>Bird & Wildlife Accessories </span></li>
                            <li className="color_b"><span>Firepits & Chimineas </span></li>
                            <li className="color_b"><span>Lawnmowers </span></li>
                            <li className="color_b"><span>Other Yard, Garden & Outdoor </span></li>
                            <li className="color_b"><span>Lawnmowers </span></li>
                            <li className="color_b"><span>Outdoor Lighting </span></li>
                        </ul>
                        </div>}
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-12" onClick={this.category}>
                        <div style={{border:'1px solid black',padding:'6px'}}>
                            <i className="fa fa-pagelines margin_right_c"></i>
                            <span className="margin_right_c">Toys</span>
                            <span className="fa fa-chevron-circle-down visible-xs" onClick={this.dropDown.bind(this, 'toys')} style={{float:'right',fontSize:'27px'}}></span>
                        </div>
                        {(isBrowser || (isMobile && open === 'toys')) && <div style={{border:'1px solid black',borderTop:'none'}}>
                        <ul className="list_style_c">
                            <li className="color_b"><span>Animals & Dinosaurs </span></li>
                            <li className="color_b"><span>Building Blocks </span></li>
                            <li className="color_b"><span>Accessories, Parts & Display </span></li>
                            <li className="color_b"><span>Alphabet & Language </span></li>
                            <li className="color_b"><span>Board & Traditional Games </span></li>
                            <li className="color_b"><span>G Scale  </span></li>
                            <li className="color_b"><span>Aircraft (Non-Military) </span></li>
                        </ul>
                        </div>}
                    </div>
                </div> */}
                {/* <div className="row" style={{padding:'0px'}}>
                    <div className="col-md-12" style={{textAlign:'right'}}>
                        <span style={{marginRight:'5%',cursor:'pointer'}} onClick={this.filterPage}><b>See more</b></span>
                    </div>
                </div> */}
                {/*<!-- jambo section start -->*/}
                {/* <div className="row hidden-xs">
            <div className="col-md-12 col-sm-12 col-xs-12 card_border" style={{width:'94%'}}>
                <div className="col-md-6">
                    <h1 className="jambo_text" style={{fontSize:"40px"}}><b>Find your desire item and buy it pakjazba classified</b></h1>
                    <p className="under_jumbo_text"><b>Lots of variety availible with vast category</b></p>
                </div>
                <div className="col-md-6">
                    <img src="images/buysell/thirdsec.png" className="img-responsive jambo_img center-block" alt='img'/>
                </div>
            </div>
        </div> */}
                <br /><br />
                {/*<!-- jambo section End -->*/}
            </div>
        )
    }
}

export default connect()(Firstfold);