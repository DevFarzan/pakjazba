import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

class Slider extends Component{
    constructor(props){
        super(props);
        this.state = {
            inputValue: ''
        }
    }

    componentDidMount(){
        const { dispatch } = this.props;
        dispatch({type: 'SEARCHOF'})
    }

    onChange(e){
        var inputValue = e.target.value;
        this.setState({
            inputValue,
        })
        if(inputValue === ''){
            const { dispatch } = this.props;
            dispatch({type: 'SEARCHON', inputValue})
        }
    }

    searchText = (e) => {
        e.preventDefault();
        const  { inputValue } = this.state;
        const { dispatch } = this.props;
        dispatch({type: 'SEARCHON', inputValue})
    }

    render(){
        return (
            <div>
                <div>
                     
                    {/*<div className="row">
                        <div className="col-md-6 col-sm-12 col-xs-12">
                        <h3 className="text-h1" style={{fontSize:'36px',fontWeight:'bold',color:'black'}}>{this.props.mainH1}</h3>
                        <div className="row">
                            <div className="col-md-12" style={{marginLeft:'24%'}}>
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Recipient's username" aria-describedby="basic-addon2" style={{border:'1px solid rgb(55, 169, 155)',width:'50%',borderRight:'none'}} />
                                    <input type="text" className="form-control" placeholder="Recipient's username" aria-describedby="basic-addon2" style={{border:'1px solid rgb(55, 169, 155)',width:'50%',borderLeft:'none'}} />
                                 </div>
                             </div>
                         </div>
                    </div>
                    </div>*/}
                    <div className="row">
                        <span className="col-md-2"></span>
                        <div className="col-md-5 col-sm-12 col-xs-12">
                        <h3 className="text-h1" style={{fontSize:'36px',fontWeight:'bold',color:'black',textAlign:'left'}}>{this.props.mainH1}</h3>

                        <div className="form-group has-feedback">
                            <input type="text" placeholder="Find" className="form-control" id="inputSuccess2" onChange={this.onChange.bind(this)} style={{border:'1px solid rgb(55, 169, 155)'}}/>
                            <span className=" btn btn-sm glyphicon glyphicon-search form-control-feedback" onClick={this.searchText}  style={{background:'rgb(55, 169, 155)',color:'white'}}></span>
                        </div>
                        </div>
                        <div className="col-md-5 col-sm-6 hidden-xs">
                            <img src="../images/buysell/header1.png" style={{width:'50%'}} />
                        </div>
                        
                    </div>    
                    {/*<section className="home-newsletter">
                        <div className="">
                            <div className="row">
                                <div className="col-md-2"></div>
                                {!this.props.hide && <div className="col-md-8 col-sm-12 col-xs-12" style={{textAlign: 'center !important'}}>
                                    <form>
                                    <div className="single">
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Search" onChange={this.onChange.bind(this)}/>
                                            <span className="input-group-btn">
                                                <button className="btn btn-theme" type="submit" onClick={this.searchText}>Search</button>
                                            </span>
                                        </div>
                                    </div>
                                    </form>
                                </div>}
                                <div className="col-md-2"></div>
                            </div>
                        </div>
                    </section>*/}

                    
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return({
        text: state.text
    })
}

export default connect(mapStateToProps)(Slider);
