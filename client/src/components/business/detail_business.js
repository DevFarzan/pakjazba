import React, { Component } from 'react';
import Burgermenu from '../header/burgermenu';
import App from '../../App';
import { Redirect } from 'react-router';

class DetailBusiness extends Component{

    constructor(props){
        super()
        this.state = {
            isData: true,
            data: {}
        }
    }

    componentDidMount(){
        if(this.props.location.state === undefined){
            this.setState({
                isData: false
            })
        }else {
            this.setState({
                isData : true,
                data : this.props.location.state
            })
        }
    }

    render(){
        const { isData, data } = this.state;

        if(!isData){
            return <Redirect to='/' />
        }

        return(
            <div>
                <div classNameName="row">
                    <div classNameName="col-md-12">
                        {/*<span><img src="../images/business_detail.jpg" style={{"width": "100%","height": "260px","margin-top": "-38px"}} /></span>*/}
                    </div>
                </div>
                <span classNameName="background_listing">
                	<App/>
                </span>
                
<div className="">
    

<div className="col-md-12 col-sm-12 col-xs-12">




<div className="col-md-4 col-sm-4 col-xs-12">



<div className="col-lg-2 col-md-2 col-sm-12 " >
</div>


<div className="row">
<div className="col-lg-10 col-md-10 col-sm-12 " >

{/*Start first tile */}

<div className="card outset" >
    <img className="card-img-top" src="./images/black.jpg" alt="Card image" style={{"width":"100%"}} />
    <div className="card-body space">
   

<h5><span className="glyphicon glyphicon-home"></span> Main Shahra-e-faisal Karachi Pakistan </h5>

<hr/>

<h5><span className="glyphicon glyphicon-phone"></span> Main Shahra-e-faisal Karachi Pakistan </h5>

<hr/>


<h5><span className="glyphicon glyphicon-globe"></span> Main Shahra-e-faisal Karachi Pakistan </h5>


<br/>
<h4>Our Social</h4>

<button type="button" className="btn btn-fb"><i className="fa fa-facebook"></i></button>
<button type="button" className="btn btn-tw"><i className="fa fa-twitter"></i></button>
<button type="button" className="btn btn-gplus"><i className="fa fa-google-plus"></i></button>
<button type="button" className="btn btn-yt"><i className="fa fa-youtube"></i></button>

<br/><br/>
 <a href="#" className="btn btn-primary">Make A Reservation</a>
   

    </div>
  </div>

{/*End first tile */}

</div>
</div>


<div className="row"> <br/></div>


<div className="col-lg-2 col-md-2 col-sm-12 ">
</div>


<div className="row">
<div className="col-lg-10 col-md-10 col-sm-12 ">

{/*Start second tile */}

<div className="card outset" >
    <div className="card-body space">
<div className="row">
<div className="col-md-12">

<div className="col-md-6">
  <br/>
  <img src="./images/black.jpg" className="img-circle" alt="" width="100" height="100" />

</div>   

<div className="col-md-6">
  <br/><br/>
<h5><b> Loram Ipsum </b> </h5>
<p> Loram Ipsum Loram  </p>
</div>   
    
   </div>
</div>


<div className="row">
<div className="col-md-12">

<div className="col-md-6">

</div>   

<div className="col-md-6">
  
<button><span className="glyphicon glyphicon-road"></span> Follow Us</button>
</div>   
    
   </div>


</div>



    </div>
  </div>

{/*End secind tile */}


</div>
</div>



<div className="row"> <br/></div>


<div className="col-lg-2 col-md-2 col-sm-12 " >
</div>


<div className="row">
<div className="col-lg-10 col-md-10 col-sm-12 " >

{/*Start 3rd tile */}

<div className="card outset" >
    <div className="card-body space">
<div className="row">
<div className="col-md-12">

<h3><b>Opening Time</b></h3>
   <p>Loram Ipsum Loram</p>
    <hr/>
   </div>
</div>


<div className="row">
<div className="col-md-12">

<div className="col-md-6">

<h4><b>MON</b></h4>
</div>

<div className="col-md-6">

<h4><b>08:00 AM</b></h4>
</div>
   </div>
</div>


<div className="row">
<div className="col-md-12">

<div className="col-md-6">

<h4><b>TUS</b></h4>
</div>

<div className="col-md-6">

<h4><b>08:00 AM</b></h4>
</div>
   </div>
</div>


<div className="row">
<div className="col-md-12">

<div className="col-md-6">

<h4><b>WED</b></h4>
</div>

<div className="col-md-6">

<h4><b>08:00 AM</b></h4>
</div>
   </div>
</div>




    </div>
  </div>

{/*End 3rd tile */}
<div className="row"><br/></div>

{/*Start 4th tile */}

<div className="card outset" >
    <div className="card-body space">
<div className="row">
<div className="col-md-12">

<h3><b>Contact</b></h3>
    <hr/>
   </div>
</div>


<div className="row">
  <div className="col-md-12">
    
    {/*Section: Contact v.2*/}
<section className="section">


    <div className="row">

        {/*Grid column*/}
        <div className="col-md-12">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                {/*Grid row*/}
                <div className="row">

                    {/*Grid column*/}
                    <div className="col-md-11">
                        <div className="md-form mb-0">
                            <input type="text" id="name" name="name" className="form-control" />
                            <label for="name" className="">Your name</label>
                        </div>
                    </div>
                    {/*Grid column*/}

                    {/*Grid column*/}
                    <div className="col-md-11">
                        <div className="md-form mb-0">
                            <input type="text" id="email" name="email" className="form-control" />
                            <label for="email" className="">Your email</label>
                        </div>
                    </div>
                    {/*Grid column*/}

                </div>
                {/*Grid row*/}

                
                {/*Grid row*/}
                <div className="row">

                    {/*Grid column*/}
                    <div className="col-md-11">

                        <div className="md-form">
                            <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                            <label for="message">Your message</label>
                        </div>

                    </div>
                </div>
                {/*Grid row*/}

            </form>

            <div className="text-center text-md-left">
                <a className="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
            </div>
            <div className="status"></div>
        </div>
        {/*Grid column*/}

    </div>

</section>
{/*Section: Contact v.2*/}


  </div>

</div>



    </div>
  </div>

{/*End 4th tile */}





</div>
</div>






</div>


{/*Left side */}
<div className="col-md-8 col-sm-8 col-xs-12">



{/*Start first tile */}


<div className="row">
<div className="card outset" >
    <div className="card-body space">


<div className="row">
<div className="col-md-2 col-sm-2 col-xs-12">

<img className="card-img-top" src="./images/black.jpg" alt="Card image" style={{"width":"100%"}} />
       
</div>

<div className="col-md-10 col-sm-10 col-xs-12">

<h3> Heading </h3>

<hr/>
</div>

</div>

<div className="row">

<div className="col-md-2 col-sm-2 col-xs-12">
</div>

<div className="col-md-10 col-sm-10 col-xs-12">

<h4>Our Social</h4>

<button type="button" className="btn btn-fb"><i className="fa fa-facebook"></i></button>
<button type="button" className="btn btn-tw"><i className="fa fa-twitter"></i></button>
<button type="button" className="btn btn-gplus"><i className="fa fa-google-plus"></i></button>
<button type="button" className="btn btn-yt"><i className="fa fa-youtube"></i></button>

</div>
</div>
    </div>
  </div>
</div>

{/*End first tile */}
<div className="row">
  <br/>
</div>

{/*Start scond tile */}

<div className="row">
<div className="card outset" >
    <div className="card-body space">

<div className="row">
  <div className="col-md-12 col-sm-12 col-xs-12">
    
  <div className="col-md-3 col-sm-3 col-xs-12">
  <a href="#" className="a"><h3> About </h3>
  <div className="hr1">...</div> </a>
  </div>  

  <div className="col-md-3 col-sm-3 col-xs-12">
  <a href="#" className="a"><h3> Menu </h3>
  <div className="hr1">...</div> </a>
  </div>  

    <div className="col-md-3 col-sm-3 col-xs-12">
  <a href="#" className="a"> <h3> Gallery </h3>
  <div className="hr1">...</div> </a>
  </div>  

    <div className="col-md-3 col-sm-3 col-xs-12">
  <a href="#" className="a"><h3> Reviews </h3>
  <div className="hr1">...</div></a>
  </div>  

  </div>


</div>

    </div>
  </div>
</div>

{/*End second tile */}

<div className="row"><br/></div>

{/*Start third tile */}

<div className="row">
<div className="card outset" >
    <div className="card-body space">

<div className="row">
  <div className="col-md-12 col-sm-12 col-xs-12">
  
  <h3><b>Heading</b></h3>  
  <hr/>
  </div>
</div>

<div className="row">
  <div className="col-md-12 col-sm-12 col-xs-12">

<p>
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 
</p>  
  </div>
</div>

<div className="row">
  <div className="col-md-12 col-sm-12 col-xs-12">

<img src="./images/black.jpg" className="responsive" width="90%" height="200" />  

</div>
</div>

<div className="row">
  <div className="col-md-12 col-sm-12 col-xs-12">

<h5> <b>Tage:</b> loram, Ipsum, Ioram  </h5>

</div>
</div>


    </div>
  </div>
</div>

{/*End third tile */}

<div className="row"><br/></div>

{/*Start 4th tile */}

<div className="row">
<div className="card outset" >
    <div className="card-body space">

<div className="row">
  <div className="col-md-12 col-sm-12 col-xs-12">
  
  <h3><b>Gallery</b></h3>  
  <hr/>
  </div>
</div>



<div className="row">
  <div className="col-md-12 col-sm-12 col-xs-12">

<img src="./images/black.jpg" className="responsive" width="95%" height="300" />  

</div>
</div>

<div className="row">
  <div className="col-md-12 col-sm-12 col-xs-12">

<div className="col-lg-4 col-md-4 col-sm-12 space-top" >
<img src="./images/black.jpg" alt="" className="responsive img-rounded" height="100" width="200" />
</div>

<div className="col-lg-4 col-md-4 col-sm-12 space-top" >
<img src="./images/black.jpg" alt="" className="responsive img-rounded" height="100" width="200" />
</div>

<div className="col-lg-4 col-md-4 col-sm-12 space-top" >
<img src="./images/black.jpg" alt="" className="responsive img-rounded"  height="100" width="200" />

</div>



</div>
</div>


    </div>
  </div>
</div>

{/*End 4th tile */}

<div className="row"><br/></div>

{/*Start 5th tile */}

<div className="row">
<div className="card outset" >
    <div className="card-body space">




<div className="row">
  <div className="col-md-12 col-sm-12 col-xs-12">

<div className="col-md-4 col-sm-12 col-xs-12"><br/>
    <img src="./images/black.jpg" className="img-circle" alt="" width="100" height="100" />


<span className="fa fa-star checked star-space"></span>
<span className="fa fa-star checked"></span>
<span className="fa fa-star checked"></span>
<span className="fa fa-star checked"></span>
<span className="fa fa-star"></span>

</div>

<div className="col-md-4 col-sm-12 col-xs-12">
</div>

<div className="col-md-4 col-sm-12 col-xs-12">
<p className="star-space1">Writen On 2018</p>
</div>

</div>

  <div className="col-md-12 col-sm-12 col-xs-12"><br/>

  <div className="col-md-2 col-sm-12 col-xs-12">
</div>

  <div className="col-md-10 col-sm-12 col-xs-12">

<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
</div>


</div>


</div>

</div>


<div className="row">
  <div className="col-md-12 col-sm-12 col-xs-12">

<div className="col-md-4 col-sm-12 col-xs-12"><br/>
    <img src="./images/black.jpg" className="img-circle" alt="" width="100" height="100" />


<span className="fa fa-star checked star-space"></span>
<span className="fa fa-star checked"></span>
<span className="fa fa-star checked"></span>
<span className="fa fa-star checked"></span>
<span className="fa fa-star"></span>

</div>

<div className="col-md-4 col-sm-12 col-xs-12">
</div>

<div className="col-md-4 col-sm-12 col-xs-12">
<p className="star-space1">Writen On 2018</p>
</div>

</div>

  <div className="col-md-12 col-sm-12 col-xs-12"><br/>

  <div className="col-md-2 col-sm-12 col-xs-12">
</div>

  <div className="col-md-10 col-sm-12 col-xs-12">

<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
</div>

</div>


</div>





<div className="row">
  <div className="col-md-12 col-sm-12 col-xs-12">

<div className="col-md-4 col-sm-12 col-xs-12"><br/>
    <img src="./images/black.jpg" className="img-circle" alt="" width="100" height="100" />


<span className="fa fa-star checked star-space"></span>
<span className="fa fa-star checked"></span>
<span className="fa fa-star checked"></span>
<span className="fa fa-star checked"></span>
<span className="fa fa-star"></span>

</div>

<div className="col-md-4 col-sm-12 col-xs-12">
</div>

<div className="col-md-4 col-sm-12 col-xs-12">
<p className="star-space1">Writen On 2018</p>
</div>

</div>

  <div className="col-md-12 col-sm-12 col-xs-12"><br/>

  <div className="col-md-2 col-sm-12 col-xs-12">
</div>

  <div className="col-md-10 col-sm-12 col-xs-12">

<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
</div>

</div>


</div>




</div>


    </div>
{/*End 5th tile */}
<div className="row"><br/></div>

{/*Start scond tile */}

<div className="row">
<div className="card outset" >
    <div className="card-body space">

<div className="row">
  <div className="col-md-12 col-sm-12 col-xs-12">
    
  <h3><b>Add Review </b> </h3>
  <hr/>
  </div>
</div>

<div className="row">
  <div className="col-md-12">
    {/*Section: Contact v.2*/}
<section className="section">

<h4>Your Rating: 
<span className="fa fa-star "></span>
<span className="fa fa-star "></span>
<span className="fa fa-star "></span>
<span className="fa fa-star "></span>
<span className="fa fa-star"></span>
</h4>

    <div className="row">

        {/*Grid column*/}
        <div className="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                {/*Grid row*/}
                <div className="row">

                    {/*Grid column*/}
                    <div className="col-md-6">
                        <div className="md-form mb-0">
                            <input type="text" id="name" name="name" className="form-control" />
                            <label for="name" className="">Your name</label>
                        </div>
                    </div>
                    {/*Grid column*/}

                    {/*Grid column*/}
                    <div className="col-md-6">
                        <div className="md-form mb-0">
                            <input type="text" id="email" name="email" className="form-control" />
                            <label for="email" className="">Your email</label>
                        </div>
                    </div>
                    {/*Grid column*/}

                </div>
                {/*Grid row*/}

                
                {/*Grid row*/}
                <div className="row">

                    {/*Grid column*/}
                    <div className="col-md-12">

                        <div className="md-form">
                            <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                            <label for="message">Your message</label>
                        </div>

                    </div>
                </div>
                {/*Grid row*/}

            </form>

            <div className="text-center text-md-left">
                <a className="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
            </div>
            <div className="status"></div>
        </div>
        {/*Grid column*/}

    </div>

</section>
{/*Section: Contact v.2*/}
    
  </div>
  

</div>

    </div>
  </div>
</div>

{/*End second tile */}



  </div>

</div>










</div>



</div>




            
        )
    }
}

export default DetailBusiness;