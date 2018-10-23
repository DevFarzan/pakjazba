import React, { Component } from 'react';
import Burgermenu from '../header/burgermenu';
import Slider from '../header/Slider';
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

    componentDidMount() {
        window.scrollTo(0,0);
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
                <span>
                    <div className ="" style={{"backgroundImage":"url('../images/bgc-images/job-portal.png')", marginTop : "-20px",backgroundSize: 'cover'}}>
                        <div className="background-image">
                            <Burgermenu/>
                            <Slider mainH1="Job Portal" mainH2="Find your jobs here"/>
                        </div>
                    </div>
                </span>
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
