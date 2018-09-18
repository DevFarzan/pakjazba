import React, { Component } from 'react';
import './buyfirstfold.css'
import { connect } from 'react-redux'

class Firstfold extends Component{
    constructor(props){
        super(props);
        this.category = this.category.bind(this);
    }
    category(e){
        const { dispatch } = this.props;
        var inputValue = e.target.alt;
        dispatch({type: 'SEARCHON', inputValue})
    }

    render(){
        return(
            <div className="firstfold">
                <h3> Categories </h3>
                <div className="row">
                    <div className="col-md-3">
                        <div className="media">
                            <div className="media-left">
                                <a onClick={this.category}>
                                    <img className="media-object" src="../images/icons for buy sell/furniture.png" alt="Furniture" style={{width:"100px"}} />
                                </a>
                            </div>
                            <div className="media-body">
                                <h4 className="media-heading">Furniture</h4>
                                Bed, Sofa, Garden..
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="media">
                            <div className="media-left">
                                <a onClick={this.category}>
                                    <img className="media-object" src="../images/icons for buy sell/pets.png" alt="Pets" style={{width:"100px"}}/>
                                </a>
                            </div>
                            <div className="media-body">
                                <h4 className="media-heading">Pets</h4>
                                Dogs, Cats, Exotic
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="media">
                            <div className="media-left">
                                <a onClick={this.category}>
                                    <img className="media-object" src="../images/icons for buy sell/reak-estate.png" alt="Real Estate" style={{width:"100px"}}/>
                                </a>
                            </div>
                            <div className="media-body">
                                <h4 className="media-heading">Real Estate</h4>
                                House, Appartments
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="media">
                            <div className="media-left">
                                <a onClick={this.category}>
                                    <img className="media-object" src="../images/icons for buy sell/reak-estate.png" alt="Jobs" style={{width:"100px"}}/>
                                </a>
                            </div>
                            <div className="media-body">
                                <h4 className="media-heading">Jobs</h4>
                                Find Jobs, Offer Jobs
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3">
                        <div className="media">
                            <div className="media-left">
                                <a onClick={this.category}>
                                    <img className="media-object" src="../images/icons for buy sell/cars.png" alt="Cars" style={{width:"100px"}}/>
                                </a>
                            </div>
                            <div className="media-body">
                                <h4 className="media-heading">Cars</h4>
                                New, Used, Rent
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="media">
                            <div className="media-left">
                                <a onClick={this.category}>
                                    <img className="media-object" src="../images/icons for buy sell/mobile.png" alt="Mobile" style={{width:"100px"}}/>
                                </a>
                            </div>
                            <div className="media-body">
                                <h4 className="media-heading">Mobile</h4>
                                Apple, Samsung
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="media">
                            <div className="media-left">
                                <a onClick={this.category}>
                                    <img className="media-object" src="../images/icons for buy sell/cameras.png" alt="Cameras" style={{width:"100px"}}/>
                                </a>
                            </div>
                            <div className="media-body">
                                <h4 className="media-heading">Cameras</h4>
                                Photo, Video, Lenses
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="media">
                            <div className="media-left">
                                <a onClick={this.category}>
                                    <img className="media-object" src="../images/icons for buy sell/sports.png" alt="Sports" style={{width:"100px"}}/>
                                </a>
                            </div>
                            <div className="media-body">
                                <h4 className="media-heading">Sports</h4>
                                Ski, Bikes, Hockey
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3">
                        <div className="media">
                            <div className="media-left">
                                <a onClick={this.category}>
                                    <img className="media-object" src="../images/icons for buy sell/electro.png" alt="Electro" style={{width:"100px"}}/>
                                </a>
                            </div>
                            <div className="media-body">
                                <h4 className="media-heading">Electro</h4>
                                Tv, Radio, PC
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="media">
                            <div className="media-left">
                                <a onClick={this.category}>
                                    <img className="media-object" src="../images/icons for buy sell/cloting.png" alt="Clothing" style={{width:"100px"}}/>
                                </a>
                            </div>
                            <div className="media-body">
                                <h4 className="media-heading">Clothing</h4>
                                Shirts, Trousers...
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="media">
                            <div className="media-left">
                                <a onClick={this.category}>
                                    <img className="media-object" src="../images/icons for buy sell/books.png" alt="Books" style={{width:"100px"}}/>
                                </a>
                            </div>
                            <div className="media-body">
                                <h4 className="media-heading">Books</h4>
                                Fanatasy, Horror, Sci-Fi..
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="media">
                            <div className="media-left">
                                <a onClick={this.category}>
                                    <img className="media-object" src="../images/icons for buy sell/music.png" alt="Music" style={{width:"100px"}}/>
                                </a>
                            </div>
                            <div className="media-body">
                                <h4 className="media-heading">Music</h4>
                                Rock, Techno, Folks...
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default connect()(Firstfold);
