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
                <div style={{marginTop: "58px"}}>
                    <p className="paragragh-text"></p>
                    <h1 className="text-h1">Lorem Forem</h1>
                    <section className="home-newsletter">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 col-sm-12 col-xs-12">
                                    <div className="single">
                                        <div className="input-group">
                                            <input type="email" className="form-control" placeholder="Enter your email" onChange={this.onChange.bind(this)}/>
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
