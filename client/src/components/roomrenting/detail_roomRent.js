import React, { Component } from 'react';
import Burgermenu from '../header/burgermenu';
import Roomrentingtwocontentarea from "./roomrenting2contentarea";
import { Redirect } from 'react-router';

class DetailRoommates extends Component{

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
            <div>
                <div className="row">
                    <div className="col-md-12">
                        {/*<span><img src="../images/business_detail.jpg" style={{"width": "100%","height": "260px","margin-top": "-38px"}} /></span>*/}
                    </div>
                </div>
                <span className="background_listing">
                	<Burgermenu/>
                </span>
                <Roomrentingtwocontentarea />
                DetailRoommates
            </div>
        )
    }
}

export default DetailRoommates;