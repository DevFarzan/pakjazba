import React, { Component } from 'react';
import { Rate, notification } from 'antd';
import { isMobile } from 'react-device-detect';
import { HttpUtils } from "../../../Services/HttpUtils";

const desc = ['Terrible', 'Bad', 'Normal', 'Good', 'Wonderful'];

class ProductReviews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            name: '',
            email: '',
            message: '',
            rating: 0,
            date: '',
            time: '',
            commentData: [],
            averageRatingProduct: 0
        }
    }
    componentDidMount() {
        const date = new Date().getDate();
        let month = new Date().getMonth() + 1;
        const year = new Date().getFullYear();
        const hours = new Date().getHours();
        const min = new Date().getMinutes();
        const sec = new Date().getSeconds();
        const userData = JSON.parse(localStorage.getItem('user'));
        if (userData) {
            this.setState({
                date: date + '-' + month + '-' + year,
                time: hours + ':' + min + ':' + sec,
                userId: userData._id
            })
        }
    }
    async componentWillMount() {
        const { productId, shopId } = this.props;
        if (productId) {
            let getCommentObj = {
                productId: productId
            }
            let res = await HttpUtils.post('getecommercecomment', getCommentObj);
            if (res.content.length > 0) {
                this.setState({
                    commentData: res.content
                })
                this.calculateRating()
            }
            else {
                this.setState({
                    averageRatingProduct: 0
                })
            }
        }
    }
    sendComment = async (e) => {
        const { name, email, message, rating, date, time, userId, commentData } = this.state;
        const { productId, shopId } = this.props;
        e.preventDefault();
        let perOfProductRating;
        if (rating == 0) {
            perOfProductRating = 0
        }
        else if (rating == 0.5) {
            perOfProductRating = 10
        }
        else if (rating == 1) {
            perOfProductRating = 20
        }
        else if (rating == 1.5) {
            perOfProductRating = 30
        }
        else if (rating == 2) {
            perOfProductRating = 40
        }
        else if (rating == 2.5) {
            perOfProductRating = 20
        }
        else if (rating == 3) {
            perOfProductRating = 60
        }
        else if (rating == 3.5) {
            perOfProductRating = 70
        }
        else if (rating == 4) {
            perOfProductRating = 80
        }
        else if (rating == 4.5) {
            perOfProductRating = 90
        }
        else if (rating == 5) {
            perOfProductRating = 100
        }
        let objComment = {
            name: name,
            email: email,
            message: message,
            rating: rating,
            date: date,
            time: time,
            userId: userId,
            productId: productId,
            shopId: shopId,
            averageRatingProduct: perOfProductRating
        }

        let res = await HttpUtils.post('postecommercecomment', objComment);
        if (res.code == 200) {
            this.setState({
                name: '',
                email: '',
                message: '',
                rating: 0,
                commentData: [...commentData, objComment]
            })
            notification.open({
                message: 'Your Review',
                description:
                    'Post your review about product',
                onClick: () => {
                    console.log('Notification Clicked!');
                },
            });
            this.calculateRating()
        }
    }

    changeRating = (newRating, name) => {
        this.setState({
            rating: newRating
        });
    }

    calculateRating = async () => {
        const { commentData } = this.state;
        const { productId } = this.props;

        let numberOfPerson = 0;
        let totalPercantageOfProduct = 0;
        let finalPercantageOfProduct = 0;
        let totalAverageRateProduct = 0;
        for (var i = 0; i < commentData.length; i++) {
            numberOfPerson = numberOfPerson + 1;
            totalPercantageOfProduct = totalPercantageOfProduct + commentData[i].averageRatingProduct;
            finalPercantageOfProduct = totalPercantageOfProduct / numberOfPerson;
            totalAverageRateProduct = finalPercantageOfProduct / 20
        }

        let obj = {
            objectId: productId,
            percantageOfProduct: finalPercantageOfProduct,
            averageRateProduct: totalAverageRateProduct
        }
        
        let responseEcommreceData = await HttpUtils.post('postecommercedata', obj)
        console.log(responseEcommreceData , 'responseEcommreceData')
        // console.log(numberOfPerson, 'numberOfPerson')
        // console.log(totalPercantageOfProduct, 'totalPercantageOfProduct')
        // console.log(finalPercantageOfProduct, 'finalPercantageOfProduct')
        // console.log(totalAverageRateProduct, 'totalAverageRateProduct')



    }
    render() {
        const { rating, name, email, message, commentData } = this.state;
        return (
            <div className="container" style={isMobile ? { width: "92%", paddingLeft: "5px" } : { width: "85%" }}>
                <div class="vitalbox">
                    <div class="">
                        {commentData && commentData.map((elem, key) => {

                            return (
                                <div>
                                    <div class="row" style={isMobile ? { paddingRight: "10px", paddingLeft: "10px" } : { paddingRight: "80px", paddingLeft: "80px" }}>
                                        <div class="col-md-2 col-xs-3">
                                            <img src="https://image.ibb.co/jw55Ex/def_face.jpg" class="img img-rounded img-fluid" />
                                        </div>
                                        <div class="col-md-10">
                                            <div className="row" style={{ padding: "0px" }}>
                                                <div className="col-md-6">
                                                    <h4><strong>{elem.name}</strong></h4>
                                                </div>
                                                <div className="col-md-6">
                                                    <p style={{ marginBottom: "0px", textAlign: "right" }}> Written on {elem.date} </p>
                                                </div>
                                            </div>
                                            <span style={{ paddingLeft: "10px" }}>
                                                <Rate tooltips={desc} allowHalf value={elem.rating} />
                                                {elem.rating ? <span className="ant-rate-text">{desc[elem.rating - 1]}</span> : ''}
                                            </span>
                                            <div class="clearfix"></div>
                                            <p>{elem.message}</p>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                            )
                        })}

                    </div>
                    <div className="row" style={isMobile ?

                        { paddingRight: "10px", paddingLeft: "10px" } : { paddingRight: "80px", paddingLeft: "80px" }}>
                        <div className="col-md-12">
                            {/*Section: Contact v.2*/}
                            <div>
                                <h4>Your Rating :
                                    <span style={{ paddingLeft: "10px" }}>
                                        <Rate tooltips={desc} allowHalf onChange={this.changeRating} value={rating} />
                                        {rating ? <span className="ant-rate-text">{desc[rating - 1]}</span> : ''}
                                    </span>
                                </h4>
                                <div className="row">
                                    {/*Grid column*/}
                                    <div className="col-md-12 mb-md-0 mb-5">
                                        <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                                            {/*Grid row*/}
                                            <div className="row">
                                                {/*Grid column*/}
                                                <div className="col-md-6">
                                                    <div className="md-form mb-0">
                                                        <label className="">Your name</label>
                                                        <input type="text" id="name1" name="name" className="form-control"
                                                            onChange={e => this.setState({ name: e.target.value })}
                                                            value={name}
                                                        />
                                                    </div>
                                                </div>
                                                {/*Grid column*/}
                                                {/*Grid column*/}
                                                <div className="col-md-6">
                                                    <div className="md-form mb-0">
                                                        <label className="">Your email</label>
                                                        <input type="text" id="email1" name="email" className="form-control"
                                                            onChange={e => this.setState({ email: e.target.value })}
                                                            value={email} />
                                                    </div>
                                                </div>
                                                {/*Grid column*/}
                                            </div>
                                            {/*Grid row*/}
                                            {/*Grid row*/}
                                            <div className="row">
                                                {/*Grid column*/}
                                                <div className="col-md-12">
                                                    <div className="md-form">
                                                        <label>Your message</label>
                                                        <textarea type="text" id="message1" name="message" rows="2" className="form-control md-textarea"
                                                            onChange={e => this.setState({ message: e.target.value })}
                                                            value={message}></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*Grid row*/}
                                        </form>
                                        <div className="text-center text-md-left">

                                            <a className="btn button_custom" style={{ width: "35%" }} onClick={this.sendComment}>Send</a>
                                        </div>
                                        <div className="status"></div>
                                    </div>
                                    {/*Grid column*/}
                                </div>
                            </div>
                            {/*Section: Contact v.2*/}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductReviews;
