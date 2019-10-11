import React, { Component } from 'react';
import './ecomNine.css';
import { Rate} from 'antd';
import { isMobile, isTablet, isBrowser } from 'react-device-detect';

class EcomNine extends Component{
    render(){
      return(
        <div className="container" style={{padding:'0px', width:'100%'}}>
            <div className="row">
                <div className="col-md-12" style={isMobile ? {padding: "0px"} : {padding:"15px"}}>
                    <div className="col-md-3 col-sm-4">
                        <div className="sellercardopacity" style={{ cursor: 'pointer' }}>
                        <div className="sellerstorecard" >
                            <img alt='' src='/images/ecommerce/61Yeir0uhIL._AC_SY200_.jpg'/>
                        </div>
                        <h4 style={{ marginTop: "20px", textAlign: "left" }}>Hisense AC 1.5 ton</h4>
                        <p> Rs. 65000</p>
                            <div className='row' style={{padding:'0'}}>
                                <div className='col-md-8 col-xs-8'>
                                <Rate  style={{paddingBottom: '20px', marginTop:"-20px",fontFamily: 'Source Sans Pro, sans-serif'}} allowHalf value={4.5}/>
                                </div>
                                <div className="vol-md-4 col-xs-4">
                                <p style={{marginTop:'0', color: '#D3D3D3', marginLeft: '0px'}}>Huston</p>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-4">
                        <div className="sellercardopacity" style={{ cursor: 'pointer' }}>
                        <div className="sellerstorecard" >
                            <img alt='' src='/images/ecommerce/61Yeir0uhIL._AC_SY200_.jpg'/>
                        </div>
                        <h4 style={{ marginTop: "20px", textAlign: "left" }}>Hisense AC 1.5 ton</h4>
                        <p style={{color:"#37a99b", textAlign: 'left', fontWeight: '600', marginLeft: '15px'}}> Rs. 65000</p>
                        <div className='row' style={{padding:'0'}}>
                                <div className='col-md-8 col-xs-8'>
                                <Rate  style={{paddingBottom: '20px', marginTop:"-20px",fontFamily: 'Source Sans Pro, sans-serif'}} allowHalf value={4.5}/>
                                </div>
                                <div className="vol-md-4 col-xs-4">
                                <p style={{marginTop:'0', color: '#D3D3D3', marginLeft: '0px'}}>Huston</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-4">
                        <div className="sellercardopacity" style={{ cursor: 'pointer' }}>
                        <div className="sellerstorecard" >
                            <img alt='' src='/images/ecommerce/61Yeir0uhIL._AC_SY200_.jpg'/>
                        </div>
                        <h4 style={{ marginTop: "20px", textAlign: "left" }}>Hisense AC 1.5 ton</h4>
                        <p style={{color:"#37a99b", textAlign: 'left', fontWeight: '600', marginLeft: '15px'}}> Rs. 65000</p>
                        <div className='row' style={{padding:'0'}}>
                                <div className='col-md-8 col-xs-8'>
                                <Rate  style={{paddingBottom: '20px', marginTop:"-20px",fontFamily: 'Source Sans Pro, sans-serif'}} allowHalf value={4.5}/>
                                </div>
                                <div className="vol-md-4 col-xs-4">
                                <p style={{marginTop:'0', color: '#D3D3D3', marginLeft: '0px'}}>Huston</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-4">
                        <div className="sellercardopacity" style={{ cursor: 'pointer' }}>
                        <div className="sellerstorecard" >
                            <img alt='' src='/images/ecommerce/61Yeir0uhIL._AC_SY200_.jpg'/>
                        </div>
                        <h4 style={{ marginTop: "20px", textAlign: "left" }}>Hisense AC 1.5 ton</h4>
                        <p style={{color:"#37a99b", textAlign: 'left', fontWeight: '600', marginLeft: '15px'}}> Rs. 65000</p>
                        <div className='row' style={{padding:'0'}}>
                                <div className='col-md-8 col-xs-8'>
                                <Rate  style={{paddingBottom: '20px', marginTop:"-20px",fontFamily: 'Source Sans Pro, sans-serif'}} allowHalf value={4.5}/>
                                </div>
                                <div className="vol-md-4 col-xs-4">
                                <p style={{marginTop:'0', color: '#D3D3D3', marginLeft: '0px'}}>Huston</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                
                <div className="col-md-12">
                    <div className="col-md-3">
                        <div className="sellercardopacity" style={{ cursor: 'pointer' }}>
                        <div className="sellerstorecard" >
                            <img alt='' src='/images/ecommerce/61Yeir0uhIL._AC_SY200_.jpg'/>
                        </div>
                        <h4 style={{ marginTop: "20px", textAlign: "left" }}>Hisense AC 1.5 ton</h4>
                        <p style={{color:"#37a99b", textAlign: 'left', fontWeight: '600', marginLeft: '15px'}}> Rs. 65000</p>
                        <Rate  style={{paddingBottom: '20px', marginTop:"-20px",fontFamily: 'Source Sans Pro, sans-serif'}} allowHalf value={4.5}/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="sellercardopacity" style={{ cursor: 'pointer' }}>
                        <div className="sellerstorecard" >
                            <img alt='' src='/images/ecommerce/61Yeir0uhIL._AC_SY200_.jpg'/>
                        </div>
                        <h4 style={{ marginTop: "20px", textAlign: "left" }}>Hisense AC 1.5 ton</h4>
                        <p style={{color:"#37a99b", textAlign: 'left', fontWeight: '600', marginLeft: '15px'}}> Rs. 65000</p>
                        
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="sellercardopacity" style={{ cursor: 'pointer' }}>
                        <div className="sellerstorecard" >
                            <img alt='' src='/images/ecommerce/61Yeir0uhIL._AC_SY200_.jpg'/>
                        </div>
                        <h4 style={{ marginTop: "20px", textAlign: "left" }}>Hisense AC 1.5 ton</h4>
                        <p style={{color:"#37a99b", textAlign: 'left', fontWeight: '600', marginLeft: '15px'}}> Rs. 65000</p>
                        
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="sellercardopacity" style={{ cursor: 'pointer' }}>
                        <div className="sellerstorecard" >
                            <img alt='' src='/images/ecommerce/61Yeir0uhIL._AC_SY200_.jpg'/>
                        </div>
                        <h4 style={{ marginTop: "20px", textAlign: "left" }}>Hisense AC 1.5 ton</h4>
                        <p style={{color:"#37a99b", textAlign: 'left', fontWeight: '600', marginLeft: '15px'}}> Rs. 65000</p>
                        <Rate  style={{paddingBottom: '20px', marginTop:"-20px",fontFamily: 'Source Sans Pro, sans-serif'}} allowHalf value={4.5}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                
                <div className="col-md-12">
                    <div className="col-md-3">
                        <div className="sellercardopacity" style={{ cursor: 'pointer' }}>
                        <div className="sellerstorecard" >
                            <img alt='' src='/images/ecommerce/61Yeir0uhIL._AC_SY200_.jpg'/>
                        </div>
                        <h4 style={{ marginTop: "20px", textAlign: "left" }}>Hisense AC 1.5 ton</h4>
                        <p style={{color:"#37a99b", textAlign: 'left', fontWeight: '600', marginLeft: '15px'}}> Rs. 65000</p>
                        
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="sellercardopacity" style={{ cursor: 'pointer' }}>
                        <div className="sellerstorecard" >
                            <img alt='' src='/images/ecommerce/61Yeir0uhIL._AC_SY200_.jpg'/>
                        </div>
                        <h4 style={{ marginTop: "20px", textAlign: "left" }}>Hisense AC 1.5 ton</h4>
                        <p style={{color:"#37a99b", textAlign: 'left', fontWeight: '600', marginLeft: '15px'}}> Rs. 65000</p>
                        
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="sellercardopacity" style={{ cursor: 'pointer' }}>
                        <div className="sellerstorecard" >
                            <img alt='' src='/images/ecommerce/61Yeir0uhIL._AC_SY200_.jpg'/>
                        </div>
                        <h4 style={{ marginTop: "20px", textAlign: "left" }}>Hisense AC 1.5 ton</h4>
                        <p style={{color:"#37a99b", textAlign: 'left', fontWeight: '600', marginLeft: '15px'}}> Rs. 65000</p>
                        
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="sellercardopacity" style={{ cursor: 'pointer' }}>
                        <div className="sellerstorecard" >
                            <img alt='' src='/images/ecommerce/61Yeir0uhIL._AC_SY200_.jpg'/>
                        </div>
                        <h4 style={{ marginTop: "20px", textAlign: "left" }}>Hisense AC 1.5 ton</h4>
                        <p style={{color:"#37a99b", textAlign: 'left', fontWeight: '600', marginLeft: '15px'}}> Rs. 65000</p>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
}
export default EcomNine;