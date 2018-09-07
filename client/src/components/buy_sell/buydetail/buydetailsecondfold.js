import React, { Component } from 'react';
import './buydetailsecondfold.css'

class Buydetailsecondfold extends Component{
    render(){
        var data = this.props.data;
        console.log(data, 'dataaaaaaaa')
        var email= 'abc@gmail.com';
        var phone = '***********';

        if(data.modeofcontact && data.modeofcontact.includes('email')){
            email = data.contactemail;
        }

        if(data.modeofcontact && data.modeofcontact.includes('phone')){
            phone = data.contactnumber;
        }

        return(
            <div className="">
                <div className="">
                    <h3 className="heading-padding"> Authors </h3>
                    <div className="shadowbox">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="col-md-3 col-sm-3 col-xs-12" style={{marginTop:"26px"}}>
                                    <div className="review-block-img">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar6.png" className="img-rounded" alt=""/>
                                    </div>
                                </div>
                                <div className="col-sm-9 col-xs-12" style={{marginTop: "33px",textAlign:"left"}}>
                                    <div className="review-block-rate">
                                        <div className="review-block-name"><a href="#">{data.contactname}</a></div>
                                        <button type="button" className="btn btn-success btn-xs" aria-label="Left Align">
                                            <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
                                        </button>
                                        <button type="button" className="btn btn-success btn-xs" aria-label="Left Align">
                                            <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
                                        </button>
                                        <button type="button" className="btn btn-success btn-xs" aria-label="Left Align">
                                            <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
                                        </button>
                                        <button type="button" className="btn btn-default btn-xs" aria-label="Left Align">
                                            <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
                                        </button>
                                        <button type="button" className="btn btn-default btn-xs" aria-label="Left Align">
                                            <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
                                        </button>
                                    </div>
                                    <div className="review-block-title">Show my Listining(12)</div>
                                </div>
                                <section  style={{float: "left",marginLeft: "16px"}}>
                                    <span><h4>Phone:</h4></span>
                                </section>
                                <section>{phone}</section><br/>
                                <section style={{float: "left",marginLeft: "17px"}}><h4>Email</h4></section>
                                <section>{email}</section>
                            </div>{/*col-md-6*/}
                            <div className="col-md-6 col-sm-6 col-xs-12" style={{marginTop: "15px"}}>
                                <form action="/action_page.php">
                                    <div className="form-group">
                                        <label style={{float:"left"}}>Name:</label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <label style={{float:"left"}}>Email</label>
                                        <input type="email" className="form-control" id="email" />
                                    </div>
                                    <label style={{float:"left"}}>Message:</label>
                                    <div className="form-group">
                                        <textarea type="text" className="form-control"></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-default">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Buydetailsecondfold;
