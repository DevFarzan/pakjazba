import React, { Component } from 'react';

export class ImageDiv extends Component{
	render(){
		const { classHeight, srcImg, divStyle } = this.props;
		return(
			<div className={classHeight.class} style={divStyle}>
				<img src={srcImg} alt="" height={classHeight.height} width="100%"/>
			</div>
		)
	}
}

class Gallery extends Component{
	render(){
		const { images } = this.props;
		return(
			<div className="row">
				<div className="col-md-12 hidden-xs" style={{padding: '0%'}}>			
					{images && images.map((elem, key) => {
						let abc = false;
						let imgLen = images.length;
						let divSt = {paddingRight: '0px', paddingLeft: '0px'};
						let obj = { 
							class: imgLen == 2 || imgLen >= 4 ? 'col-md-6' : 'col-md-4', 
							height: imgLen == 2 ? '500' : imgLen == 3 ? '200' : '500'};
						if(imgLen === 5){
							abc = true;
						}
						let divClass = !abc ? (key === 2 || key === 3 ? "col-md-3" : "col-md-6") : "col-md-3";
						if((imgLen === 2 || imgLen === 3) || (imgLen >=4 && key === 0)){
							return <ImageDiv key={key} srcImg={elem} classHeight={obj} divStyle={divSt}/>
						}else {
							return(							
								<div key={key} className={divClass} style={divSt}>
									<ImageDiv srcImg={elem} classHeight={{class: 'col-md-12', height: '250'}} divStyle={divSt}/>								
								</div>								
							)
						}						
					})}
				</div>		
				<div className="col-xs-12 visible-xs" style={{padding: '0%'}}>
					{images && images.map((elem, key) => {
						let abc = false;
						let imgLen = images.length;
						let divSt = {paddingRight: '0px', paddingLeft: '0px'};
						let obj = { 
							class: imgLen == 2 || imgLen >= 4 ? 'col-md-6' : 'col-md-4', 
							height: imgLen == 2 ? '300' : imgLen == 3 ? '200' : '500'};
						if(imgLen === 5){
							abc = true;
						}
						let divClass = !abc ? (key === 2 || key === 3 ? "col-md-3" : "col-md-6") : "col-md-3";
						if((imgLen === 2 || imgLen === 3) || (imgLen >=4 && key === 0)){
							return <ImageDiv key={key} srcImg={elem} classHeight={obj} divStyle={divSt}/>
						}else {
							return(							
								<div key={key} className={divClass} style={divSt}>
									<ImageDiv srcImg={elem} classHeight={{class: 'col-md-12', height: '250'}} divStyle={divSt}/>								
								</div>								
							)
						}						
					})}
				</div>				
			</div>
		)
	}
}

export default Gallery;