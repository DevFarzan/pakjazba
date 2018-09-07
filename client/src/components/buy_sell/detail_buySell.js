import React, { Component } from 'react';
import Burgermenu from '../header/burgermenu';
import Buydetailfirstfold from './buydetail/buydetailfirstfold'
import Buydetailsecondfold from './buydetail/buydetailsecondfold'
import { Redirect } from 'react-router';
import App from "../../App";
import Footer from '../footer/footer';

class DetailBuySell extends Component{

    constructor(props){
        super()
        this.state = {
            isData: true,
            data: {}
        }
    }

    componentDidMount(){
        if(this.props.location.state === undefined){
            this.setState({
                isData: false
            })
        }else {
            this.setState({
                isData : true,
                data : this.props.location.state
            })
        }
    }

    render(){
        const { isData, data } = this.state;

        if(!isData){
            return <Redirect to='/' />
        }

        return(
            <div id="body">
                <div className="background_listing">
                	<App/>
                </div>
                <div className='container' style={{width:"80%"}}>
                    <Buydetailfirstfold data={data}/>
                    <Buydetailsecondfold data={data}/>
                </div>
                <Footer />
            </div>
        )
    }
}

export default DetailBuySell;