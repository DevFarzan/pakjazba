import React, { Component } from 'react';
import "./roomrenting2content.css";


class Roomrenting3contentarea extends Component{

    render(){
        return(

            <span>
            <div className="countainer">

                <div className="row">


                    <div className="col-md-12 col-sm-12 col-xs-12">

                        <div className="col-md-2 col-sm-12 col-xs-12">

                        </div>


                        <div className="col-md-10 col-sm-12 col-xs-12">

                            <div className="col-md-3 col-sm-6 col-xs-12">

                                <h4><span className="glyphicon glyphicon-calendar"></span> 06-09-2018</h4>
                                <h4> Available From</h4>

                            </div>

                            <div className="col-md-3 col-sm-6 col-xs-12">

                                <h4><span className="glyphicon glyphicon-user"></span> Name</h4>
                                <h4> Male/Female</h4>

                            </div>

                            <div className="col-md-3 col-sm-6 col-xs-12">

                                <h4> Single Room</h4>
                                <h4> Area Sq ft</h4>

                            </div>

                            <div className="col-md-3 col-sm-6 col-xs-12">

                                <h3> Furnished Room</h3>
                                <h4><span className="glyphicon glyphicon-map-marker"></span> Location </h4>
                                <h3><span className="glyphicon glyphicon-usd"></span> 1700 </h3>

                            </div>
                        </div>

                    </div>
                </div>


                <div className="col-md-12 col-sm-12 main-space">

                    <div className="col-md-2 col-sm-12 col-xs-12">

                        <h3><span className="glyphicon glyphicon-usd"></span> Price Rating </h3>

                        <div className="slidecontainer">
                            <input type="range" min="1" max="100" value="50" className="slider" id="myRange"/>
                            <p>Value: <span id="demo"></span></p>
                        </div>


                        <br/>
                        <h3><span className="glyphicon glyphicon-map-marker"></span> Location </h3>

                        <div className="checkbox">
                            <label><input type="checkbox" value=""/>Option 1</label>
                        </div>
                        <div className="checkbox">
                            <label><input type="checkbox" value=""/>Option 2</label>
                        </div>
                        <div className="checkbox">
                            <label><input type="checkbox" value=""/>Option 3</label>
                        </div>
                        <div className="checkbox">
                            <label><input type="checkbox" value=""/>Option 4</label>
                        </div>

                        <br>

                            <h3><span className="glyphicon glyphicon-bed"></span> Bedrooms</h3>

                            <div className="checkbox">
                                <label><input type="checkbox" value=""/>Option 1</label>
                            </div>
                            <div className="checkbox">
                                <label><input type="checkbox" value=""/>Option 2</label>
                            </div>
                            <div className="checkbox">
                                <label><input type="checkbox" value=""/>Option 3</label>
                            </div>
                            <div className="checkbox">
                                <label><input type="checkbox" value=""/>Option 4</label>
                            </div>

                            <br>

                                <h3><span className="glyphicon glyphicon-resize-horizontal"></span> Meters</h3>

                                <div className="checkbox">
                                    <label><input type="checkbox" value=""/>Option 1</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value=""/>Option 2</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value=""/>Option 3</label>
                                </div>
                                <div className="checkbox">
                                    <label><input type="checkbox" value=""/>Option 4</label>
                                </div>

                                <br/>

                                <h3><span className="glyphicon glyphicon-map-marker"></span> On the Map</h3>

                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.6337348509687!2d67.03749541472551!3d24.807992284078704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33da992be1aa7%3A0x7646411a2d8e6ac5!2sKRL+Creatives!5e0!3m2!1sen!2s!4v1536302761580"
                                    width="200" height="200" frameBorder="0" style={{"border": "0"}}
                                    allowFullScreen></iframe>


                                <div className="col-md-10 col-sm-12 col-xs-12">


                                    <div className="row">

                                        <div className="col-md-12">

                                            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                                                <ol className="carousel-indicators">
                                                    <li data-target="#myCarousel" data-slide-to="0"
                                                        className="active"></li>
                                                    <li data-target="#myCarousel" data-slide-to="1"></li>
                                                    <li data-target="#myCarousel" data-slide-to="2"></li>
                                                </ol>

                                                <div className="carousel-inner">
                                                    <div className="item active">
                                                        <img src="img/black1.jpg" className="img-responsive"/>
                                                    </div>

                                                    <div className="item">
                                                        <img src="img/black1.jpg"/>
                                                    </div>

                                                    <div className="item">
                                                        <img src="img/black1.jpg"/>
                                                    </div>
                                                </div>


                                                <a className="left carousel-control" href="#myCarousel"
                                                   data-slide="prev">
                                                    <span className="glyphicon glyphicon-chevron-left"></span>
                                                    <span className="sr-only">Previous</span>
                                                </a>
                                                <a className="right carousel-control" href="#myCarousel"
                                                   data-slide="next">
                                                    <span className="glyphicon glyphicon-chevron-right"></span>
                                                    <span className="sr-only">Next</span>
                                                </a>
                                            </div>

                                        </div>
                                    </div>


                                    <div className="col-lg-4 col-md-4 col-sm-12 space-top">
                                        <img src="img/black.jpg" alt="" className="responsive img-rounded"
                                             style={{"width": "100%"}}/>
                                    </div>

                                    <div className="col-lg-4 col-md-4 col-sm-12 space-top">
                                        <img src="img/black.jpg" alt="" className="responsive img-rounded"
                                             style={{"width": "100%"}}/>
                                    </div>

                                    <div className="col-lg-4 col-md-4 col-sm-12 space-top">
                                        <img src="img/black.jpg" alt="" className="responsive img-rounded"
                                             style={{"width": "100%"}}/>

                                    </div>


                                    <div className="row">

                                        <div className="col-md-12 col-sm-12 col-xs-12 des-space">
                                            <h3> Description </h3>
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry. Lorem Ipsum has been the industry's standard dummy text ever
                                                since the 1500s, when an unknown printer took a galley of type and
                                                scrambled it to make a type specimen book.
                                            </p>


                                        </div>


                                    </div>

                                    <div className="row">

                                        <div className="col-md-12 col-sm-12 col-xs-12 des-space">

                                            <div className="col-md-4 col-sm-12 col-xs-12 des-space">

                                                <h3> Details </h3>
                                                <p><b>Date Added:</b> 09-07-2018</p>
                                                <p><b>Type:</b> Offer</p>
                                                <p><b>Status:</b> Used</p>
                                                <p><b>First Owner:</b> Yes</p>
                                                <p><b>Material:</b> Wood</p>
                                                <p><b>Color:</b> White</p>


                                            </div>

                                            <div className="col-md-4 col-sm-12 col-xs-12 des-space">

                                                <h3>Location </h3>

                                                <iframe
                                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.6337348509687!2d67.03749541472551!3d24.807992284078704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33da992be1aa7%3A0x7646411a2d8e6ac5!2sKRL+Creatives!5e0!3m2!1sen!2s!4v1536302761580"
                                                    width="600" height="400" frameBorder="0" style="border:0"
                                                    allowFullScreen></iframe>


                                            </div>


                                        </div>


                                    </div>


                                    <div className="row">

                                        <div className="col-md-12 col-sm-12 col-xs-12 des-space">
                                            <h3> Features </h3>

                                            <div className="col-md-3 col-sm-12 col-xs-12 ">

                                                <div className="checkbox">
                                                    <h4><label><input type="checkbox" value="" checked="checked"/>Quality
                                                        Wood</label></h4></div>

                                            </div>

                                            <div className="col-md-3 col-sm-12 col-xs-12 ">

                                                <div className="checkbox">
                                                    <h4><label><input type="checkbox" value="" checked="checked"/>Form
                                                        Mattres</label></h4>
                                                </div>

                                            </div>

                                            <div className="col-md-3 col-sm-12 col-xs-12 ">

                                                <div className="checkbox">
                                                    <h4><label><input type="checkbox" value="" checked="checked"/>3 Fold
                                                        Pull Out</label></h4>
                                                </div>

                                            </div>

                                            <div className="col-md-3 col-sm-12 col-xs-12 ">

                                                <div className="checkbox">
                                                    <h4><label><input type="checkbox" value="" checked="checked"/>Almunium</label>
                                                    </h4>
                                                </div>

                                            </div>

                                        </div>


                                    </div>

                                    <div className="row">

                                        <div className="col-md-12 col-sm-12 col-xs-12 ">

                                            <div className="col-md-3 col-sm-12 col-xs-12 ">

                                                <div className="checkbox">
                                                    <h4><label><input type="checkbox" value="" checked="checked"/>Handles</label>
                                                    </h4>
                                                </div>

                                            </div>

                                            <div className="col-md-3 col-sm-12 col-xs-12 ">

                                                <div className="checkbox">
                                                    <h4><label><input type="checkbox" value="" checked="checked"/>Detachable</label>
                                                    </h4>
                                                </div>

                                            </div>


                                        </div>
                                    </div>


                                    <div className="row">

                                        <div className="col-md-12 col-sm-12 col-xs-12 des-space auther-border ">
                                            <h3> Author </h3>

                                            <div className="">

                                                <div className="col-md-6 col-sm-12 col-xs-12">


                                                    <img src="img/black1.jpg" className="img-circle" alt="" height="200"
                                                         width="200"/>
                                                    <h3>
                                                        <span className="heading">Asad Butt</span>
                                                        <span className="fa fa-star checked"></span>
                                                        <span className="fa fa-star checked"></span>
                                                        <span className="fa fa-star checked"></span>
                                                        <span className="fa fa-star checked"></span>
                                                        <span className="fa fa-star"></span>
                                                    </h3>

                                                    <hr/>
                                                    <br/>
                                                    <h4><b> Phone: </b> 830-247-0972</h4>
                                                    <h4><b> Email: </b> asad@example.com</h4>


                                                    <div className="col-md-6 col-sm-12 col-xs-12">

                                                        <form action="#">
                                                            <div className="form-group">
                                                                <label htmlFor="Name">Name:</label>
                                                                <input type="text" className="form-control" id=""/>
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="email">Email address:</label>
                                                                <input type="email" className="form-control" id=""/>
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="Phone">Phone:</label>
                                                                <input type="num" className="form-control" id=""/>
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="Massage">Massage:</label>
                                                                <textarea className="form-control"> </textarea>
                                                            </div>
                                                            <button type="submit" className="btn search-btn">Submit
                                                            </button>
                                                        </form>


                                                    </div>


                                                </div>

                                            </div>


                                        </div>


                                    </div>

</div>

                                
                            
        
        )
    }
}

export default Roomrenting3contentarea