import React, { Component } from 'react';
import App from '../../App';
import ClassifiedIcons from './jobClassifiedicon';
import FeaturedBox from './featuredJob';
import Footer from '../footer/footer';
import { connect } from 'react-redux';

class JobClassified extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render(){
        return (
            <div>
                <App/>
                {!this.props.text && <ClassifiedIcons/>}
                <FeaturedBox/>
                <Footer/>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return({
        text: state.text
    })
}

export default connect(mapStateToProps)(JobClassified);
