import React, { Component } from 'react';
import Buydetailfirstfold from './buydetail/buydetailfirstfold'
import { Redirect } from 'react-router';
import HeaderMenu from '../header/headermenu';
import Footer from '../footer/footer';
import { HttpUtils } from "../../Services/HttpUtils";

class DetailBuySell extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isData: true,
            data: {}
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        let data = this.props.location.state;
        if (data === undefined) {
            this.setState({
                isData: true
            })
        } else {
            this.getProfile(data)
        }
    }

    async getProfile(data) {
        let _id = data.profileid ? data.profileid : data.profileId ? data.profileId : '';
        let req = await HttpUtils.get('getprofile?profileId=' + _id);
        let allData = { ...data, ...{ userImage: req ? req.content.imageurl : '' } }
        this.setState({
            isData: true,
            data: allData
        })
    }

    render() {
        const { isData, data } = this.state;

        if (!isData) {
            return <Redirect to='/detail_buySell' />
        }

        return (
            <div>
                <HeaderMenu />
                <Buydetailfirstfold data={data} />
                <Footer />
            </div>
        )
    }
}

export default DetailBuySell;
