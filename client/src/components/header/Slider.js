import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { connect } from 'react-redux'

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

    searchText(){
        const  { inputValue } = this.state;
        const { dispatch } = this.props;
        dispatch({type: 'SEARCHON', inputValue})
    }

    render(){
        return (
            <div>
                <div>
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                        <p className="paragragh-text"></p>
                        <h1 className="text-h1" style={{fontSize:'58px',fontWeight:'bold'}}>{this.props.mainH1}</h1>
                        <h2 style={{textAlign:'center',color: 'white'}}>{this.props.mainH2}</h2>
                    </div>
                    </div>
                    <section className="home-newsletter">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 col-sm-12 col-xs-12">
                                    <div className="single">
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Search" onChange={this.onChange.bind(this)}/>
                                            <span className="input-group-btn">
                                <button className="btn btn-theme" type="submit" onClick={this.searchText.bind(this)}>Search</button>
                                </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
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
