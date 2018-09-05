import React, { Component } from 'react';
import Burgermenu from '../components/business/burgermenu';


class DetailedPage extends Component{
    render(){
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
                DetailedPage
            </div>
        )
    }
}

export default DetailedPage;