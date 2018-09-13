import React, { Component } from 'react';
import Burgermenu from '../header/burgermenu';
import Roomrentingthreecontentarea from "./roomrenting3contentarea";
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
        console.log(data, 'kkkkkkkkkkkkkkkkkkkk')
        if(!isData){
            return <Redirect to='/' />
        }

        return(
            <div>
                <span className="background_listing">
                	<Burgermenu/>
                </span>
                <div className="container" style={{"width":"90%"}}>
                    {!!data && <Roomrentingthreecontentarea data={data}/>}
                </div>
            </div>
        )
    }
}

export default DetailRoommates;