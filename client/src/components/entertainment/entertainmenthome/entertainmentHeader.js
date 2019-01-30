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
      <div>
            <div style={{background:'#ececec',width:'100%'}} className="hidden-xs">

         <Link to={`/`}><span className="glyphicon glyphicon-home" style={{color:'black',fontSize:'17px',margin: '21px',cursor:'pointer'}}>
         </span></Link>
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
         <span className="button_globalclassName">
         <form>
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
                      // style={{backgroundColor:'#37a99b',color:'white'}}
                      onClick={this.searchText}><i className="fa fa-search"/>
                  </button>
              </span>
            </div>
          </form>
         </span>
       </div>

      </div>

    )
  }
}
export default EHeader;
