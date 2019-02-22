import React, { Component } from 'react';

class BestSeats extends Component{
    constructor(props) {
        super(props)
        this.state ={ 
            upto: 10,
            arr: []
        }
        this.myRef = React.createRef();
    }

    componentDidMount(){
      this.filterData();
    }
    
    componentDidUpdate(prevProps, prevState){
        if(prevState.range !== this.props.range){
            this.filterData();
        }
    }

    filterData(){
        const { data, range } = this.props;                
        let arr = data.filter((elem) => {
            let str = elem.price.slice(3, elem.price.length)
            if(range[0] <= str && range[1] >= str){
               return elem;
            }
        })
        this.setState({arr, range})
    }

    onScroll = () => {
        const { scrollTop, clientHeight, scrollHeight } = this.myRef.current;
        if(scrollTop + clientHeight >= scrollHeight){
            this.setState((prevState) => {
                this.setState({upto: prevState.upto+10})
            })
        } 
    }

    render(){
        const { arr } = this.state;
        
        return(
            <div
                ref={this.myRef}
                onScroll={this.onScroll} 
                className="row" 
                style={{height: '400px', overflowY: 'overlay'}}>
                {arr.length > 0 ? arr.map((elem, key) => {
                  if(key <= this.state.upto){
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
                  }
                })
                : 
                <h1>no match with this filter</h1>
                }                
            </div>
        )
    }
}

export default BestSeats;
