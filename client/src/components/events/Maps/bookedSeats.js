import React, { Component } from 'react';

class Sittingarrangements extends Component{
    render(){
        const { data } = this.props;

        return(          
            <div 
                ref={this.myRef}
                onScroll={this.onScroll}
                className="row" 
                style={{height: '400px', overflowY: 'overlay'}}>
                <h3>Your Booking</h3>
                {data && data.map((elem, key) => {
                  {/*if(key <= this.state.upto){*/}
                    return(
                        <div key={key}>
                            <div className="col-md-8">
                                <p className="seatsvalue"><b>{elem.str}</b></p>
                                <p> Verified Resale Ticket </p>
                            </div>
                            <div className="col-md-4">
                                <p className="pricingvalue">{elem.price}</p>
                            </div>
                        </div>
                    )
                  {/*}*/}
                })}                
            </div>
        )
    }
}

export default Sittingarrangements;