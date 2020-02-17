import React, { Component } from 'react';
import './jobClassifiedicon.css';
import { connect } from 'react-redux'

class ClassifiedIcons extends Component {
  constructor(props) {
    super(props);
  }

  clickItem(item) {
    this.props.mainCategoryFilter(item);
  }

  render() {
    return (
      <span>
        <div className="container" style={{ width: '100%' }}>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" onClick={() => { this.clickItem('Accounting') }} style={{ cursor: 'pointer' }}>
              <div className="wrimagecard wrimagecard-topimage">
                <div className="wrimagecard-topimage_headerAccounting">
                  <center>
                    <h3 className="categoryInnerText">Accounting</h3>
                  </center>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" onClick={() => { this.clickItem('Admin & Clerical') }} style={{ cursor: 'pointer' }}>
              <div className="wrimagecard wrimagecard-topimage">
                <div className="wrimagecard-topimage_headerAdmin">
                  <center>
                    <h3 className="categoryInnerText">Admin & Clerical</h3>
                  </center>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" onClick={() => { this.clickItem('Banking & Finance') }} style={{ cursor: 'pointer' }}>
              <div className="wrimagecard wrimagecard-topimage">
                <div className="wrimagecard-topimage_headerCustomerService">
                  <center>
                    <h3 className="categoryInnerText">Banking & Finance</h3>
                  </center>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" onClick={() => { this.clickItem('Business Opportunities') }} style={{ cursor: 'pointer' }}>
              <div className="wrimagecard wrimagecard-topimage">
                <div className="wrimagecard-topimage_headerExecutive">
                  <center>
                    <h3 className="categoryInnerText">Business Opportunities</h3>
                  </center>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" onClick={() => { this.clickItem('Contract & Freelance') }} style={{ cursor: 'pointer' }}>
              <div className="wrimagecard wrimagecard-topimage">
                <div className="wrimagecard-topimage_headerFreelancer">
                  <center>
                    <h3 className="categoryInnerText">Contract & Freelance</h3>
                  </center>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" onClick={() => { this.clickItem('Customer Service') }} style={{ cursor: 'pointer' }}>
              <div className="wrimagecard wrimagecard-topimage">
                <div className="wrimagecard-topimage_headerCustomerService">
                  <center>
                    <h3 className="categoryInnerText">Customer Service</h3>
                  </center>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" onClick={() => { this.clickItem('Diversity Opportunities') }} style={{ cursor: 'pointer' }}>
              <div className="wrimagecard wrimagecard-topimage">
                <div className="wrimagecard-topimage_headerDiversity">
                  <center>
                    <h3 className="categoryInnerText">Diversity Opportunities</h3>
                  </center>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" onClick={() => { this.clickItem('Engineering') }} style={{ cursor: 'pointer' }}>
              <div className="wrimagecard wrimagecard-topimage">
                <div className="wrimagecard-topimage_headerEngineering">
                  <center>
                    <h3 className="categoryInnerText">Engineering</h3>
                  </center>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" onClick={() => { this.clickItem('Executive') }} style={{ cursor: 'pointer' }}>
              <div className="wrimagecard wrimagecard-topimage">
                <div className="wrimagecard-topimage_headerExecutive">
                  <center>
                    <h3 className="categoryInnerText">Executive</h3>
                  </center>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" onClick={() => { this.clickItem('Franchise') }} style={{ cursor: 'pointer' }}>
              <div className="wrimagecard wrimagecard-topimage">
                <div className="wrimagecard-topimage_headerFranchise">
                  <center>
                    <h3 className="categoryInnerText">Franchise</h3>
                  </center>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" onClick={() => { this.clickItem('Government') }} style={{ cursor: 'pointer' }}>
              <div className="wrimagecard wrimagecard-topimage">
                <div className="wrimagecard-topimage_headerGovernMent">
                  <center>
                    <h3 className="categoryInnerText">Government</h3>
                  </center>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" onClick={() => { this.clickItem('Health Care') }} style={{ cursor: 'pointer' }}>
              <div className="wrimagecard wrimagecard-topimage">
                <div className="wrimagecard-topimage_headerHealthCare">
                  <center>
                    <h3 className="categoryInnerText">Health Care</h3>
                  </center>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" onClick={() => { this.clickItem('Hospitality') }} style={{ cursor: 'pointer' }}>
              <div className="wrimagecard wrimagecard-topimage">
                <div className="wrimagecard-topimage_headerHospitality">
                  <center>
                    <h3 className="categoryInnerText">Hospitality</h3>
                  </center>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" onClick={() => { this.clickItem('Human Resources') }} style={{ cursor: 'pointer' }}>
              <div className="wrimagecard wrimagecard-topimage">
                <div className="wrimagecard-topimage_headerHumanResource">
                  <center>
                    <h3 className="categoryInnerText">Human Resources</h3>
                  </center>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" onClick={() => { this.clickItem('Information Technology') }} style={{ cursor: 'pointer' }}>
              <div className="wrimagecard wrimagecard-topimage">
                <div className="wrimagecard-topimage_headerInformation">
                  <center>
                    <h3 className="categoryInnerText">Information Technology</h3>
                  </center>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" onClick={() => { this.clickItem('Internships & Collage') }} style={{ cursor: 'pointer' }}>
              <div className="wrimagecard wrimagecard-topimage">
                <div className="wrimagecard-topimage_headerInternShip">
                  <center>
                    <h3 className="categoryInnerText">Internships & Collage</h3>
                  </center>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" onClick={() => { this.clickItem('Manufacturing') }} style={{ cursor: 'pointer' }}>
              <div className="wrimagecard wrimagecard-topimage">
                <div className="wrimagecard-topimage_headerManufeaturing">
                  <center>
                    <h3 className="categoryInnerText">Manufacturing</h3>
                  </center>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" onClick={() => { this.clickItem('Nonprofit') }} style={{ cursor: 'pointer' }}>
              <div className="wrimagecard wrimagecard-topimage">
                <div className="wrimagecard-topimage_headerNonProfit">
                  <center>
                    <h3 className="categoryInnerText">Nonprofit</h3>
                  </center>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" onClick={() => { this.clickItem('Retail') }} style={{ cursor: 'pointer' }}>
              <div className="wrimagecard wrimagecard-topimage">
                <div className="wrimagecard-topimage_headerRetail">
                  <center>
                    <h3 className="categoryInnerText">Retail</h3>
                  </center>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" onClick={() => { this.clickItem('Sales & Marketing') }} style={{ cursor: 'pointer' }}>
              <div className="wrimagecard wrimagecard-topimage">
                <div className="wrimagecard-topimage_headerHealthCare">
                  <center>
                    <h3 className="categoryInnerText">Sales & Marketing</h3>
                  </center>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" onClick={() => { this.clickItem('Science & Biotech') }} style={{ cursor: 'pointer' }}>
              <div className="wrimagecard wrimagecard-topimage">
                <div className="wrimagecard-topimage_headerScienceNBio">
                  <center>
                    <h3 className="categoryInnerText">Science & Biotech</h3>
                  </center>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" onClick={() => { this.clickItem('Transportation') }} style={{ cursor: 'pointer' }}>
              <div className="wrimagecard wrimagecard-topimage">
                <div className="wrimagecard-topimage_headerTransport">
                  <center>
                    <h3 className="categoryInnerText">Transportation</h3>
                  </center>
                </div>
              </div>
            </div>
          </div>
        </div>
      </span>
    )
  }
}

export default connect()(ClassifiedIcons);
