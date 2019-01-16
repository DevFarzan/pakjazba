import React, { Component } from 'react';
import { Cascader } from 'antd';
import './CategoriesJobs.css';

const type = [
      {
          label: 'Full Time',
          value: 'Full Time',
      },{
          label: 'Part Time',
          value: 'Part Time',
      },{
          label: 'Night Shift',
          value: 'Night Shift',
      }
  ];

const categ = [
    {
        label: 'Information Technology',
        value: 'Information Technology',
    },{
        label: 'Banking',
        value: 'Banking',
    },{
        label: 'Accounting',
        value: 'Accounting',
    },
    {
        label: 'Management',
        value: 'Management',
    },{
        label: 'Digital and Creative',
        value: 'Digital and Creative',
    },{
        label: 'Sales and Marketing',
        value: 'Sales and Marketing',
    }
];

class CategoriesjobMarket extends Component{
  constructor(props){
      super(props);
      this.state = {
        typeR: '',
        cat: ''
      }
      this.clickItem = this.clickItem.bind(this);
  }

  onChangeType(value){
      this.setState({typeR: value[0]})
  }

  onChangeCategory(value){
      this.setState({cat: value[0]})
  }

  clickItem(item){
      const { cat, typeR } = this.state;
      let str = typeof(item) == 'string' ? item : {cat, typeR};
      this.props.filteringData(str)
  }

  render(){
    const {typeR, cat} = this.state;
    return(
      <div className="container categoriesbars">
      	<div className="row">
          <div className="col-md-6">
            <div className="row">
        	    <form className="col-md-6">
        	        <label>Sort By:</label>
        	        <Cascader style={{width: '100%'}} options={type} onChange={this.onChangeType.bind(this)} placeholder="Please select" />
        	    </form>
              <form className="col-md-6">
        	        <label>Categoies:</label>
        	        <Cascader style={{width: '100%'}} options={categ} onChange={this.onChangeCategory.bind(this)} placeholder="Please select" />
        	    </form>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className=" col-md-2">
                <div className="input-group">
                  <label>Search:</label>
                    <div className="flex">
                      <button 
                          type="button" 
                          className="btn btn-sm btn2-success 
                          font-style" 
                          style={{backgroundColor:"#8cbc40"}}
                          onClick={this.clickItem}
                      >
                          Search
                      </button>
                    </div>
                </div>
              </div>
              <div className="col-md-10">
                <div className="custom-row">
                    <label>Keywords:</label>
                    <div className="flex">
                      <button type="button" className="btn btn-sm btn3-success font-style" onClick={() => {this.clickItem('Content Writer')}}>
                          Content Writer
                      </button>
                      <button type="button" className="btn btn-sm btn3-success font-style" onClick={() => {this.clickItem('IT Specialist')}}>
                          IT Specialist
                      </button>
                      <button type="button" className="btn btn-sm btn3-success font-style" onClick={() => {this.clickItem('Web Developer')}}>
                          Web Developer
                      </button>
                      <button type="button" className="btn btn-sm btn3-success font-style" onClick={() => {this.clickItem('Business management')}}>
                          Business management
                      </button>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default CategoriesjobMarket;
