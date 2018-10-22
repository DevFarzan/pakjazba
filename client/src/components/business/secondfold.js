import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Spin, Icon, Pagination, Rate } from 'antd';
import './secondfold.css'
import {HttpUtils} from "../../Services/HttpUtils";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import _ from 'underscore'

class Secondfold extends Component{
    constructor(props){
        super(props);
        this.state = {
            current: 1,
            business: [],
            showBusiness: [],
            filteredArr: [],
            searchValue: '',
            loader: true,
            add: 5
        }
    }

    componentDidMount(){
        this.getAllBusiness()
    }

    componentDidUpdate(prevProps, prevState){
        const { business } = this.state;
        const { text } = this.props;
        if(prevProps.text !== text){
            if(!!text){
                this.searchedArr(text)
            }else {
                this.setState({
                    showBusiness: business.slice(0, 6),
                    filteredArr: [],
                    add: 6
                })
            }
        }
    }

    searchedArr(text){
        const { business } = this.state;
        let filteredArr = business.filter((elem) => {
            return (elem.businesscategory && elem.businesscategory.toLowerCase().includes(text.toLowerCase())) ||
                (elem.businessownername && elem.businessownername.toLowerCase().includes(text.toLowerCase())) ||
                (elem.businessname && elem.businessname.toLowerCase().includes(text.toLowerCase())) ||
                (elem.businessnumber && elem.businessnumber.toLowerCase().includes(text.toLowerCase()))
        })
        this.setState({
            filteredArr,
            showBusiness: filteredArr.slice(0, 6),
            add: 6
        })
    }

    async getAllBusiness(){
        var res = await HttpUtils.get('marketplace')
        this.getReviews(res.business);
    }

    async getReviews(data){
        let res = await HttpUtils.get('getreviews');
        if(res.code === 200) {
            data = data.map((el) => {
                let filteredReviews = res.content.map((elem) => {
                    if(elem.objid === el._id){
                        return elem.star;
                    }
                })
                let star = (_.reduce(_.compact(filteredReviews), (a, b) => {return +a + +b}, 0))/_.compact(filteredReviews).length
                return {...el, star}
            })
            this.setState({
                business: data,
                showBusiness: data.slice(0, 5),
                loader: false
            });
        }
    }

    funcIndexes(page){
        var to = 6 * page;
        var from = to - 6;
        return {from: page === 1 ? 0 : from, to: page === 1 ? 6 : to}
    }

    onChange = (page) => {
        const { business, filteredArr } = this.state;
        var indexes = this.funcIndexes(page)
        if(!!filteredArr.length){
            this.setState({
                current: page,
                showBusiness: filteredArr.slice(indexes.from, indexes.to)
            });
        }else {
            this.setState({
                current: page,
                showBusiness: business.slice(indexes.from, indexes.to)
            });
        }
    }

    onAddMore = () => {
        const { add, business, filteredArr } = this.state;
        console.log(add + 6, 'View Add bitton clickedddddd')
        if(!!filteredArr.length){
            this.setState({
                showJob: filteredArr.slice(0, add + 6),
                add: add + 6
            });
        }else {
            this.setState({
                showJob: business.slice(0, add + 6),
                add: add + 6
            });
        }
        if(this.props.text.length){
            let inputValue = '';
            const { dispatch } = this.props;
            dispatch({type: 'SEARCHON', inputValue})
        }
    }

    render(){
        const { business, showBusiness, filteredArr, add } = this.state;
        const { text } = this.props;
        const antIcon = <Icon type="loading" style={{ fontSize: 120 }} spin />;

        return(
            <div className="secondfold">
                <h1 className="text-align"> Great Places </h1>
                <div className="index-content">
                    <div className="container" style={{width: '93%'}}>
                    <div className="row">
                        <Link to={{pathname: `/postad_business`}}>
                            <div className="col-md-4"  style={{'marginBottom': '30px', height: '460px' }}>
                                <img alt='' src='./images/blank-card.png' style={{border: '1px solid #3a252542', height: '100%', width: '90%', borderRadius: '13px'}}/>
                            </div>
                        </Link>
                        {showBusiness && showBusiness.map((elem, key) => {
                            let str = elem.businessaddress || '';
                            if(str.length > 45) {
                                str = str.substring(0, 45);
                                str = str + '...'
                            }
                            return (
                                <Link key={key} to={{pathname: `/detail_business`, state: elem}}>
                                    <div className="col-md-4"  style={{'marginBottom': '30px'}}>
                                        <div className="card" style={{border: '1px solid #3a252542',boxShadow: 'none',borderRadius:'13px',width:'89%'}}>
                                            <img alt='' src={elem.businessImages.length ? elem.businessImages[0] : './images/def_card_img.jpg'}/>
                                            <h4 style={{marginTop:'53px'}}><b>{elem.businessname}</b></h4>
                                            {elem.businessaddress && <p style={{marginTop:"-15px",marginLeft:"11px"}}><span className="glyphicon glyphicon-map-marker" style={{color: "#008080",margin:"2px"}}></span><span style={{color:"black"}}>{elem.businessaddress}</span></p>}
                                            <Rate  disabled style={{paddingLeft: '20px', paddingBottom: '10px'}} allowHalf value={elem.star} />
                                        </div>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                    </div>
                    {this.state.loader &&  <div  style={{textAlign: 'center', marginLeft:'-100px', marginBottom: '15px'}}>
                        <Spin indicator={antIcon} />
                    </div>}
                    {text && !!filteredArr.length === false &&<span style={{textAlign:"center"}}><h1>Not found....</h1></span>}
                    {text && !!filteredArr.length === false &&<span style={{textAlign:"center"}}><h5>you can find your search by type</h5></span>}
                    {/*!!showBusiness.length && <span style={{textAlign:"center"}}><Pagination defaultCurrent={1} defaultPageSize={6} total={!!filteredArr.length ? filteredArr.length :business.length} onChange={this.onChange} /></span>*/}
                    <div className="col-md-12" style={{textAlign:"center"}}><button type="button" className="btn btn-success" onClick={this.onAddMore}>View More ...</button></div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <img src="../images/businesslistingimage.png" style={{width:'100%'}} />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return({
        text: state.text
    })
}

export default connect(mapStateToProps)(Secondfold);
