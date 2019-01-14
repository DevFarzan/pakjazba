
import React, { Component } from 'react';
import './buyfirstfold.css'
import { connect } from 'react-redux'

class Firstfold extends Component{
    constructor(props){
        super(props);
        this.state = {
            open: ''
        }
        this.category = this.category.bind(this);
    }
    category(e){
        const { dispatch } = this.props;
        var inputValue = e.target.alt || e.target.innerText;
        dispatch({type: 'SEARCHON', inputValue})
    }
    dropDown(e){
        const { open } = this.state;
        this.setState({open: open === true ? '' : e})
    }

    render(){
        const { open } = this.state;
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <span className="popular_c">Popular categories</span>
                    </div>
                </div>
                <div className="row" style={{padding:'0px'}}>
                    <div className="col-md-4 col-sm-3 col-xs-12" style={{marginRight:'-30px'}}>
                         
                            <div style={{border:'1px solid black',padding:'6px'}}>
                                <i className="fa fa-car margin_right_c"></i>
                                <span className="margin_right_c">Motors</span>
                            </div>
                            <div style={{border:'1px solid black',borderTop:'none'}}>
                             <ul className="list_style_c">
                                <li className="color_b"><span>Cars</span></li>
                                <li className="color_b"><span>Car Accessories</span></li>
                                <li className="color_b"><span>Spare parts</span></li>
                                <li className="color_b"><span>Busess,Vans</span></li>
                                <li className="color_b"><span>Trucks</span></li>
                            </ul>
                            </div>

                    </div>
                    <div className="col-md-4 col-sm-3 col-xs-12" style={{marginRight:'-30px'}}>
                            <div style={{border:'1px solid black',padding:'6px'}}>
                                <i className="fa fa-tv margin_right_c"></i>
                                <span className="margin_right_c">Fashion</span>
                            </div>
                            <div style={{border:'1px solid black',borderTop:'none'}}>
                             <ul className="list_style_c">
                                <li className="color_b"><span>Bath & Body</span></li>
                                <li className="color_b"><span>Luxury Handbags </span></li>
                                <li className="color_b"><span>Health Care </span></li>
                                <li className="color_b"><span>Diamond Jewelry and Loose Diamonds </span></li>
                                

                                 
                            </ul>
                            </div>
                    </div>
                    <div className="col-md-4 col-sm-3 col-xs-12">
                            <div style={{border:'1px solid black',padding:'6px'}}>
                                <i className="fa fa-black-tie margin_right_c"></i>
                                <span className="margin_right_c">Electronics</span>
                                <span className="fa fa-chevron-circle-down visible-xs" onClick={this.dropDown.bind(this, 'kello')} style={{float:'right',fontSize:'27px'}}></span>
                            </div>
                            {open === 'kello' && <div style={{border:'1px solid black',borderTop:'none'}}>
                             <ul className="list_style_c">
                                <li className="color_b"><span>Binoculars & Telescopes </span></li>
                                <li className="color_b"><span>12-Volt Portable Appliances </span></li>
                                <li className="color_b"><span>Batteries </span></li>
                                <li className="color_b"><span>Cables & Connectors </span></li>
                                <li className="color_b"><span>Computer Components & Parts </span></li>
                            </ul>
                            </div>}
                    </div>
                </div>
                <div className="row" style={{padding:'0px'}}>
                    <div className="col-md-4 col-sm-3 col-xs-12" style={{marginRight:'-30px'}}>
                          
                            <div style={{border:'1px solid black',padding:'6px'}}>
                                <i className="fa fa-home margin_right_c"></i>
                                <span className="margin_right_c">Home</span>
                                <span className="fa fa-chevron-circle-down" onClick={this.dropDown.bind(this, 'yello')} style={{float:'right',fontSize:'27px'}}></span>
                            </div>
                            {open === 'yello' && <div style={{border:'1px solid black',borderTop:'none'}}>
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
                    <div className="col-md-4 col-sm-3 col-xs-12" style={{marginRight:'-30px'}}>
                            <div style={{border:'1px solid black',padding:'6px'}}>
                                <i className="fa fa-futbol margin_right_c"></i>
                                <span className="margin_right_c">Garden</span>
                            </div>
                            <div style={{border:'1px solid black',borderTop:'none'}}>
                             <ul className="list_style_c">
                                <li className="color_b"><span>Yard & Garden</span></li>
                                <li className="color_b"><span>Bird & Wildlife Accessories </span></li>
                                <li className="color_b"><span>Firepits & Chimineas </span></li>
                                <li className="color_b"><span>Lawnmowers </span></li>
                                <li className="color_b"><span>Other Yard, Garden & Outdoor </span></li>
                                <li className="color_b"><span>Lawnmowers </span></li>
                                <li className="color_b"><span>Outdoor Lighting </span></li>
                            </ul>
                            </div>
                    </div>
                    <div className="col-md-4 col-sm-3 col-xs-12">
                            <div style={{border:'1px solid black',padding:'6px'}}>
                                <i className="fa fa-pagelines margin_right_c"></i>
                                <span className="margin_right_c">Toys</span>
                            </div>
                            <div style={{border:'1px solid black',borderTop:'none'}}>
                             <ul className="list_style_c">
                                <li className="color_b"><span>Animals & Dinosaurs </span></li>
                                <li className="color_b"><span>Building Blocks </span></li>
                                <li className="color_b"><span>Accessories, Parts & Display </span></li>
                                <li className="color_b"><span>Alphabet & Language </span></li>
                                <li className="color_b"><span>Board & Traditional Games </span></li>
                                <li className="color_b"><span>G Scale  </span></li>
                                <li className="color_b"><span>Aircraft (Non-Military) </span></li>
                            </ul>
                            </div>
                    </div>
                </div>
                <div className="row" style={{padding:'0px'}}>
                    <div className="col-md-12" style={{textAlign:'right'}}>
                        <span style={{marginRight:'5%',cursor:'pointer'}}>See more</span>
                    </div>
                </div>
            {/*<!-- jambo section start -->*/}
        <div className="row hidden-xs">
            <div className="col-md-12 col-sm-12 col-xs-12 card_border" style={{width:'94%'}}>
                <div className="col-md-6">
                    <h1 className="jambo_text"><b>Find your desire item and buy it pakjazba classified</b></h1>
                    <p className="under_jumbo_text"><b>Lots of variety availible with vast category</b></p>
                </div>
                <div className="col-md-6">
                    <img src="images/buysell/thirdsec.png" className="img-responsive jambo_img center-block"/>
                </div>
            </div>
        </div>
        <br/><br/>
       {/*<!-- jambo section End -->*/}
            </div>
        )
    }
}

export default connect()(Firstfold);

// {/*<div className="firstfold">
//                 <h3> Categories </h3>
//                 <div className="row">
//                     <div className="col-md-3">
//                         <div className="media">
//                             <div className="media-left">
//                                 <a onClick={this.category}>
//                                     <img className="media-object" src="../images/icons for buy sell/furniture.png" alt="Furniture" style={{width:"100px"}} />
//                                 </a>
//                             </div>
//                             <div className="media-body">
//                                 <a onClick={this.category}>
//                                 <h4 className="media-heading">Furniture</h4>
//                                 <span style={{color:'black'}}>Bed, Sofa, Garden..</span>
//                                 </a>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="col-md-3">
//                         <div className="media">
//                             <div className="media-left">
//                                 <a onClick={this.category}>
//                                     <img className="media-object" src="../images/icons for buy sell/pets.png" alt="Pets" style={{width:"100px"}}/>
//                                 </a>
//                             </div>
//                             <div className="media-body">
//                                 <a onClick={this.category}>
//                                 <h4 className="media-heading">Pets</h4>
//                                 <span style={{color:'black'}}>Dogs, Cats, Exotic</span>
//                                 </a>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="col-md-3">
//                         <div className="media">
//                             <div className="media-left">
//                                 <a onClick={this.category}>
//                                     <img className="media-object" src="../images/icons for buy sell/reak-estate.png" alt="Real Estate" style={{width:"100px"}}/>
//                                 </a>
//                             </div>
//                             <div className="media-body">
//                                 <a onClick={this.category}>
//                                 <h4 className="media-heading">Real Estate</h4>
//                                 <span style={{color:'black'}}>House, Appartments</span>
//                                 </a>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="col-md-3">
//                         <div className="media">
//                             <div className="media-left">
//                                 <a onClick={this.category}>
//                                     <img className="media-object" src="../images/icons for buy sell/jobs.png" alt="Jobs" style={{width:"100px"}}/>
//                                 </a>
//                             </div>
//                             <div className="media-body">
//                                 <a onClick={this.category}>
//                                 <h4 className="media-heading">Jobs</h4>
//                                 <span style={{color:'black'}}>Find Jobs, Offer Jobs</span>
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="row">
//                     <div className="col-md-3">
//                         <div className="media">
//                             <div className="media-left">
//                                 <a onClick={this.category}>
//                                     <img className="media-object" src="../images/icons for buy sell/cars.png" alt="Cars" style={{width:"100px"}}/>
//                                 </a>
//                             </div>
//                             <div className="media-body">
//                             <a onClick={this.category}>
//                                 <h4 className="media-heading">Cars</h4>
//                                 <span style={{color:'black'}}>New, Used, Rent</span>
//                             </a>    
//                             </div>
//                         </div>
//                     </div>

//                     <div className="col-md-3">
//                         <div className="media">
//                             <div className="media-left">
//                                 <a onClick={this.category}>
//                                     <img className="media-object" src="../images/icons for buy sell/mobile.png" alt="Mobile" style={{width:"100px"}}/>
//                                 </a>
//                             </div>
//                             <div className="media-body">
//                                 <a onClick={this.category}>
//                                 <h4 className="media-heading">Mobile</h4>
//                                 <span style={{color:'black'}}>Apple, Samsung</span>
//                                 </a>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="col-md-3">
//                         <div className="media">
//                             <div className="media-left">
//                                 <a onClick={this.category}>
//                                     <img className="media-object" src="../images/icons for buy sell/cameras.png" alt="Cameras" style={{width:"100px"}}/>
//                                 </a>
//                             </div>
//                             <div className="media-body">
//                             <a onClick={this.category}>
//                                 <h4 className="media-heading">Cameras</h4>
//                                 <span style={{color:'black'}}>Photo, Video, Lenses</span>
//                             </a>    
//                             </div>
//                         </div>
//                     </div>

//                     <div className="col-md-3">
//                         <div className="media">
//                             <div className="media-left">
//                                 <a onClick={this.category}>
//                                     <img className="media-object" src="../images/icons for buy sell/sports.png" alt="Sports" style={{width:"100px"}}/>
//                                 </a>
//                             </div>
//                             <div className="media-body">
//                                 <a onClick={this.category}>
//                                 <h4 className="media-heading">Sports</h4>
//                                 <span style={{color:'black'}}>Ski, Bikes, Hockey</span>
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="row">
//                     <div className="col-md-3">
//                         <div className="media">
//                             <div className="media-left">
//                                 <a onClick={this.category}>
//                                     <img className="media-object" src="../images/icons for buy sell/electro.png" alt="Electro" style={{width:"100px"}}/>
//                                 </a>
//                             </div>
//                             <div className="media-body">
//                                 <a onClick={this.category}>
//                                 <h4 className="media-heading">Electro</h4>
//                                 <span style={{color:'black'}}>Tv, Radio, PC</span>
//                                 </a>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="col-md-3">
//                         <div className="media">
//                             <div className="media-left">
//                                 <a onClick={this.category}>
//                                     <img className="media-object" src="../images/icons for buy sell/cloting.png" alt="Clothing" style={{width:"100px"}}/>
//                                 </a>
//                             </div>
//                             <div className="media-body">
//                                 <a onClick={this.category}>
//                                 <h4 className="media-heading">Clothing</h4>
//                                 <span style={{color:'black'}}>Shirts, Trousers...</span>
//                                 </a>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="col-md-3">
//                         <div className="media">
//                             <div className="media-left">
//                                 <a onClick={this.category}>
//                                     <img className="media-object" src="../images/icons for buy sell/books.png" alt="Books" style={{width:"100px"}}/>
//                                 </a>
//                             </div>
//                             <div className="media-body">
//                             <a onClick={this.category}>
//                                 <h4 className="media-heading">Books</h4>
//                                 <span style={{color:'black'}}>Fanatasy, Horror, Sci-Fi..</span>
//                                 </a>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="col-md-3">
//                         <div className="media">
//                             <div className="media-left">
//                                 <a onClick={this.category}>
//                                     <img className="media-object" src="../images/icons for buy sell/music.png" alt="Music" style={{width:"100px"}}/>
//                                 </a>
//                             </div>
//                             <div className="media-body">
//                                 <a onClick={this.category}>
//                                 <h4 className="media-heading">Music</h4>
//                                 <span style={{color:'black'}}>Rock, Techno, Folks...</span>
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>*/}
//             