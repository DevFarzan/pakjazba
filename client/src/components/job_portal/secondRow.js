import React, { Component } from 'react';
import './JobSecondrow.css';

class JobSecondrow extends Component{
    render(){
        const { data } = this.props;
        return(
            <div className="container" style={{width:"90%"}}>
                <div className="row">
                    <div className="col-md-4 col-sm-12 col-xs-12 des-space">
                        <div className="box-for">
                            <span className="paddingTop">
                                <h3 className="margin-left font-style"> Location </h3>
                                <hr className="hr-class"/>
                                <p className="marginleft-paragraph font-style">{data.location}</p>
                            </span>
                            <span>
                                <h3 className="margin-left font-style"> Salary </h3>
                                <hr className="hr-class"/>
                                <p className="marginleft-paragraph font-style">{data.salary}</p>
                                {/*<p  className="marginleft-paragraph font-style"> ......... (if Sallary not mentioned)</p>*/}

                                <h3 className="margin-left font-style"> Experience</h3>
                                  <hr className="hr-class"/>
                                  <p className="marginleft-paragraph font-style">{data.experience}</p>

                                <h3 className="margin-left font-style"> Posted </h3>
                                <hr className="hr-class"/>
                                <p className="marginleft-paragraph font-style"> 32 Minutes Ago <br/> <br/></p>
                            </span>
                        </div>
                    </div>
                    <div className="col-md-8 col-sm-12 col-xs-12 des-space" style={{marginTop:"-15px"}}>
                        <h3 className="font-style"> Description </h3>
                        <hr className="hr-class" style={{width:"100%"}}/>
                        <p className="font-style" style={{marginTop:"40px"}}>{data.compDescription}</p>
                        <button type="button" className="btn2 btn2-success" style={{marginTop:"70px", padding:"5px"}}>Apply This Job</button>
                    </div>
              </div>
          </div>
        )
    }
}

export default JobSecondrow;
