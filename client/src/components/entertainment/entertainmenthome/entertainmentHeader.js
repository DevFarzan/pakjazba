import React, { Component } from 'react';
import MainLogin from '../../header/mainLogin';
import Category from '../../header/getcategory';
import { Link } from "react-router-dom";
import { Menu, Icon, Button } from 'antd';
import axios from "axios/index";

const SubMenu = Menu.SubMenu;


class EHeader extends Component{
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            searchArr: []
        }
    }

    onChange(e){
        this.setState({ inputValue: e.target.value });
    }

    searchText = async (e) => {
        e.preventDefault();
        const { inputValue } = this.state,
        { entertainment } = this.props;
        if(!!inputValue){
            let data = await axios.get(`https://api.dailymotion.com/videos?fields=embed_url,id,thumbnail_120_url,description,thumbnail_url,title,&country=pk&sort=recent&tags=${inputValue}&page=1&limit=100`);
            let arr = data.data.list;
            this.props.history.push({pathname: `/entertainment_Category/${inputValue}`, state: {arr,entertainment}})
        }
    }

  render(){
    const { entertainment } = this.props,
    { news, sports, dramas, movies, musics } = entertainment;

    return(
      <span>
      <div className="row hidden-xs hidden-sm" style={{background:'#ececec',width:'73%', marginLeft:"182px", padding:"0"}}>
        <div className="col-md-8 hidden-xs" style={{marginTop:"15px"}}>
            <div  className="">
               <span type="" name='room' className="button_globalclassName">
                   <Link  rel="noopener noreferrer" to={`/entertainment_Home`} style={{color:'black',fontSize:'17px',margin: '21px'}}>Entertainment</Link>
               </span>
               <span type="" name='Category' className="button_globalclassName" style={{marginRight: '10px'}}>
                   <Link rel="noopener noreferrer" to={{pathname: `/entertainment_Category/${'Movies'}`, state: {movies, entertainment}}} style={{color:'black',fontSize:'17px',margin: '21px'}}>Movies</Link>
               </span>
               <span type="" name='buySell' className="button_globalclassName">
                   <Link rel="noopener noreferrer" to={{pathname: `/entertainment_Category/${'Dramas'}`, state: {dramas, entertainment}}} style={{color:'black',fontSize:'17px',margin: '21px'}}>Dramas</Link>
               </span>
               {/*<span type="" name='events' className="button_globalclassName">
                   <Link rel="noopener noreferrer" to={{pathname: `/entertainment_Category/${'Musics'}`, state: {musics, entertainment}}} style={{color:'black',fontSize:'17px',margin: '21px'}}>Music</Link>
               </span> */}
               <span type="" name='EcommerceMarket' className="button_globalclassName">
                   <Link rel="noopener noreferrer" to={{pathname: `/entertainment_Category/${'Sports'}`, state: {sports, entertainment}}} style={{color:'black',fontSize:'17px',margin: '21px'}}>Sports</Link>
               </span>
               <span type="" name='EcommerceMarket' className="button_globalclassName">
                   <Link rel="noopener noreferrer" to={{pathname: `/entertainment_Category/${'News'}`, state: {news, entertainment}}} style={{color:'black',fontSize:'17px',margin: '21px'}}>News</Link>
               </span>
               <span type="" name='EcommerceMarket' className="button_globalclassName">
                   <Link rel="noopener noreferrer" to={`/UploadVideo`} style={{color:'black',fontSize:'17px',margin: '21px'}}>User</Link>
               </span>
          </div>
          </div>
          <div className="col-md-4 hidden-xs">
               <span className="button_globalclassName">
               <form style={{marginTop:'2%'}}>
                  <div className="input-group"
                    // style={{marginTop: '-40px', marginRight: '20px', paddingBottom: '10px'}}
                    >
                    <input type="text" required
                        className="form-control"
                        // style={{width: '20%', float: 'right'}}
                        placeholder="Search"
                        onChange={this.onChange.bind(this)}/>
                    <span className="input-group-btn">
                        <button className="btn btn-theme" type="submit"
                            style={{backgroundColor:'#37a99b',color:'white', padding:"3px", marginBottom:"6px"}}
                            onClick={this.searchText}><i className="fa fa-search"/>
                        </button>
                    </span>
                  </div>
                </form>
               </span>
          </div>
      </div>
      <div className="row visible-xs">
          <div className="col-md-6">
              <Link rel="noopener noreferrer" to={{pathname: `/entertainment_Category/${'Movies'}`, state: {movies, entertainment}}} style={{fontSize:'21px',marginBottom:'-6%',margin:'12px'}}>Movies</Link>
              <Link rel="noopener noreferrer" to={{pathname: `/entertainment_Category/${'Dramas'}`, state: {dramas, entertainment}}} style={{fontSize:'21px',marginBottom:'-6%',margin:'12px'}}>Dramas</Link>
              <Link rel="noopener noreferrer" to={{pathname: `/entertainment_Category/${'Sports'}`, state: {sports, entertainment}}} style={{fontSize:'21px',marginBottom:'-6%',margin:'12px'}}>Sports</Link>
              <Link rel="noopener noreferrer" to={{pathname: `/entertainment_Category/${'News'}`, state: {news, entertainment}}} style={{fontSize:'21px',marginBottom:'-6%',margin:'12px'}}>News</Link>
              <Link rel="noopener noreferrer" to={`/UploadVideo`} style={{fontSize:'21px',marginBottom:'-6%',margin:'12px'}}>User</Link>
          </div>
      </div>
      </span>
    )
  }
}
export default EHeader;
