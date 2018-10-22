import React, { Component } from 'react';
import './JobSecondrow.css';

class JobSecondrow extends Component{
  render(){
    return(
      <div className="container" style={{width:"90%"}}>
        <div className="row">

              <div className="col-md-4 col-sm-12 col-xs-12 des-space">
                  <div className="box-for">
                  <span className="paddingTop">
                    <h3 className="margin-left"> Location </h3>
                    <hr className="hr-class"/>
                    <p className="marginleft-paragraph"> Sector 17 Abdullah Haroon Road, Karachi, Pakistan</p>
                  </span>
                  <span>
                    <h3 className="margin-left"> Salary </h3>
                    <hr className="hr-class"/>
                    <p className="marginleft-paragraph"> 25,000 Per. Month </p>
                    <p  className="marginleft-paragraph"> ......... (if Sallary not mentioned)</p>

                    <h3 className="margin-left"> Experience</h3>
                      <hr className="hr-class"/>
                      <p className="marginleft-paragraph"> 3 Years </p>

                    <h3 className="margin-left"> Posted </h3>
                      <hr className="hr-class"/>
                      <p className="marginleft-paragraph"> 32 Minutes Ago </p>
                  </span>
                </div>
              </div>
              <div className="col-md-8 col-sm-12 col-xs-12 des-space" style={{marginTop:"-15px"}}>
                  <h3> Description </h3>
                  <hr className="hr-class" style={{width:"100%"}}/>
                  <p style={{marginTop:"40px"}}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                  in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                  Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                  The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
              </div>

      </div>
    </div>
    )
  }
}

export default JobSecondrow;
