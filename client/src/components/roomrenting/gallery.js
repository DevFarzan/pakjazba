import React, { Component } from 'react';

class Gallery extends Component{
	render(){
		const { images } = this.props;
		console.log(images && images.length, 'length')
		let abc = false;
		let obj = { class: '', height: ''};
		if(images && images.length === 2){
			obj = { class: 'col-md-6', height: '300'};
		}else if(images && images.length === 3){
			obj = { class: 'col-md-4', height: '200'};
		}
		if(images && images.length === 5){
			abc = true;
		}
		return(
			<div className="row">				
				{images && images.map((elem, key) => {
					if(images.length === 2 || images.length === 3){
						return(
							<div className={obj.class} style={{paddingRight: '0px', paddingLeft: '0px'}}>
								<img src={elem} alt="" height={obj.height} width="100%" onClick={() => {this.goToProfile()}}/>
							</div>
						)
					}
					else if(images.length >= 4){
						if(key === 0){
							return(

								<div className="col-md-6" style={{paddingRight: '0px', paddingLeft: '0px'}}>
									<img src={elem} alt="" height="500" width="100%" onClick={() => {this.goToProfile()}}/>
								</div>
							)
						}else {
							return(
							
								<div className={!abc ? (key === 2 || key === 3 ? "col-md-3" : "col-md-6") : "col-md-3"} style={{paddingRight: '0px', paddingLeft: '0px'}}>
									<div className="col-md-12" style={{paddingRight: '0px', paddingLeft: '0px'}}>
										<img src={elem} alt="" height="250" width="100%" onClick={() => {this.goToProfile()}}/>
									</div>
								
								</div>
								
							)
						}
						
					}
				})}				
			</div>
		)
	}
}

export default Gallery;