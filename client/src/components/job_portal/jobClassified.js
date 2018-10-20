import React, { Component } from 'react';
import App from '../../App';
import ClassifiedIcons from './jobClassifiedicon';
import FeaturedBox from './featuredJob';
import JobBlog from './jobBlogs';
import Footer from '../footer/footer';
import { connect } from 'react-redux';

class JobClassified extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentWillUnmount(){
        let inputValue = '';
        if(this.props.text.length){
            const { dispatch } = this.props;
            dispatch({type: 'SEARCHON', inputValue})
        }
    }

    render(){
        return (
            <div>
                <App/>
                {!this.props.text && <ClassifiedIcons/>}
                <FeaturedBox/>
                <JobBlog/>
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
