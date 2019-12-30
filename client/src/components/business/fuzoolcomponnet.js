<div className="col-md-12 col-sm-12 col-xs-12">
    <div className="col-md-4 col-sm-4 col-xs-12">
        <div className="col-lg-2 col-md-2 col-sm-12 " >
        </div>
        {/*<div className="row">
            <div className="col-lg-10 col-md-10 col-sm-12 " >
                {/*Start first tile
                <div className="card outset" style={{ boxShadow: "none", border:"1px solid #80808042", background: "white"}}>
                    <img className="card-img-top" src={images && images[0]} alt="" style={{"width":"100%"}} />
                    <div className="card-body space" style={{padding: "17px"}}>
                        <h5><span className="glyphicon glyphicon-home" style={{marginRight: "15px"}}></span><span style={{color: "rgba(0, 0, 0, 0.65)"}}>{data.address || data.businessAddress}</span></h5>
                        <hr/>
                        <h5><span className="glyphicon glyphicon-phone" style={{marginRight: "15px"}}></span><span style={{color: "rgba(0, 0, 0, 0.65)"}}>{data.businessnumber || data.businessNumber}</span></h5>
                        <hr/>
                        <h5><span className="glyphicon glyphicon-globe" style={{marginRight: "15px"}}></span><span style={{color: "rgba(0, 0, 0, 0.65)"}}>{data.businessemail || data.businessEmail}</span></h5>
                        <br/>
                        <h4>Our Social</h4>
                        <a href={data.socialFaceBook} target="_blank" style={{marginRight: "12px"}}><button type="button" className="btn btn-fb"><i className="fa fa-facebook black"></i></button></a>
                        <a href={data.socialLinkIn} target="_blank" style={{marginRight: "12px"}}><button type="button" className="btn btn-linkedin"><i className="fa fa-linkedin black"></i></button></a>
                        <a href={data.socialGoogle} target="_blank" style={{marginRight: "12px"}}><button type="button" className="btn btn-gplus"><i className="fa fa-google-plus black"></i></button></a>
                        <br/><br/>
                    </div>
                </div>
                {/*End first tile
            </div>

        </div>
        <div className="row"> <br/></div>
        <div className="col-lg-2 col-md-2 col-sm-12 ">
        </div>
        <div className="row"> <br/></div>
        <div className="col-lg-2 col-md-2 col-sm-12 " >
        </div>
        <div className="row">
            <div className="col-lg-10 col-md-10 col-sm-12 " >
                {/*Start 3rd tile */}
                {/*<div className="card outset" style={{ boxShadow: "none", border:"1px solid #80808042", background: "white"}}>
                    <div className="card-body space" style={{padding: "17px"}}>
                        <div className="row">
                            <div className="col-md-12">
                                <h3><b>Opening Time</b></h3>
                                <p>You can contact between these timings</p>
                                <hr size="3"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="col-md-6">
                                    <h4><b>Opening Time</b></h4>
                                </div>
                                <div className="col-md-6">
                                    <h4><b>{data.openingTime}</b></h4>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="col-md-6">
                                    <h4><b>Closing Time</b></h4>
                                </div>
                                <div className="col-md-6">
                                    <h4><b>{data.closingTime}</b></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>*/}
                {/*End 3rd tile */}
            <div className="row"><br/></div>
               {/*Start 4th tile */}

                {/*End 4th tile */}
            </div>
        </div>
    </div>
    {/*Left side */}
    <div className="col-md-8 col-sm-8 col-xs-12">
        {/*Start first tile */}
        <div className="row">
            <div className="card outset" style={{ boxShadow: "none", border:"1px solid #80808042", background: "white"}}>
                <div className="card-body space">
                    <div className="row">
                        <div className="col-md-2 col-sm-2 col-xs-12">
                            <img className="card-img-top" src={(images && images[0]) || (data.arr_url && data.arr_url[0])} alt="" style={{"width":"100%"}} />
                        </div>
                        <div className="col-md-10 col-sm-10 col-xs-12">
                            <h3>{data.businessName || data.businessname}</h3>
                            <hr/>
                            <h4 style={{cursor: 'pointer'}} onClick={() => {this.goToProfile()}}>Posted by: {" " + (data.firstName || data.firstname)}</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2 col-sm-2 col-xs-12">
                        </div>
                        <div className="col-md-10 col-sm-10 col-xs-12">
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
            <div className="card outset" style={{ boxShadow: "none", border:"1px solid #80808042", background: "white"}}>
                <div className="card-body space">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12" style={{textAlign:"center"}}>
                            <div className="col-md-4 col-sm-3 col-xs-12">
                                <a href="#linkAbout" className="a"><h4 className="black"><b>Gallery</b></h4>
                                    <div className="hr1">...</div> </a>
                            </div>

                            <div className="col-md-4 col-sm-3 col-xs-12">
                                <a href="#linkReview" className="a"><h4 className="black"><b>Reviews</b></h4>
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
            <div className="card outset" style={{ boxShadow: "none", border:"1px solid #80808042", background: "white"}}>
                <div className="card-body space">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <h3 style={{color: "rgba(0, 0, 0, 0.65)"}}><b><a name="linkAbout" className="black">Gallery</a></b></h3>
                            <hr/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <p>{data.description}</p>
                        </div>
                    </div>
                    <div className="row">
                        {/*<FbImageLibrary images={images} width={50} countFrom={2}/>*/}
                        <div className="col-md-4 col-sm-4 col-xs-12" style={{cursor: 'pointer'}} onClick={() => {this.setState({previewVisible: true, previewImage:images[0]})}}>
                            <img src={images && images[0]} style={{width: '100%'}}/>
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12" style={{cursor: 'pointer'}} onClick={() => {this.setState({previewVisible: true, previewImage:images[1]})}}>
                            <img src={images && images[1]} style={{width: '100%'}}/>
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12" style={{cursor: 'pointer'}} onClick={() => {this.setState({previewVisible: true, previewImage:images[1]})}}>
                            <img src={images && images[2]} style={{width: '100%'}}/>
                        </div>
                    </div>
                    <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                        <img alt="example" style={{ width: '100%' }} src={previewImage} />
                    </Modal>
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
        {/*<div className="row">
            <div className="card outset" style={{ boxShadow: "none", border:"1px solid #80808042", background: "white"}}>
                <div className="card-body space">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <h3><b><a name="linkGallery" className="black" >Gallery</a></b></h3>
                            <hr/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <Carousel autoplay>
                                {images && images.map((elem, key) => {
                                    return(
                                        <div key={key}>
                                            <img alt='' src={elem}/>
                                        </div>
                                    )
                                })}
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>*/}
        {/*End 4th tile */}
        <div className="row"><br/></div>
        {/*Start 5th tile */}
        <div className="card outset" style={{ boxShadow: "none", border:"1px solid #80808042", background: "white"}}>
            {!!reviews.length && <div className="row">
                {reviews && reviews.map((elem, key) => {
                    return(
                        <div  key={key} className="card-body space">
                            <div className="row">
                                <div className="col-md-12 col-sm-12 col-xs-12">
                                    <div className="col-md-6 col-sm-12 col-xs-12 " style={{paddingLeft:"0px" ,  paddingRight:"0px"}}><br/>
                                        <img src="../images/images.jpg" className="img-circle" alt="" width="100" height="100" />
                                          <h5 className="mon-timing">{elem.name}</h5>
                                        <Rate disabled style={{paddingLeft: '125px'}} allowHalf value={elem.star} />
                                    </div>
                                    <div className="col-md-2 col-sm-12 col-xs-12">
                                    </div>
                                    <div className="col-md-4 col-sm-12 col-xs-12">
                                        <a name="linkReview"><p className="star-space1">Writen On {elem.written}</p></a>
                                    </div>
                                </div>
                                <div className="col-md-12 col-sm-12 col-xs-12"><br/>
                                    <div className="col-md-2 col-sm-12 col-xs-12">
                                    </div>
                                    <div className="col-md-10 col-sm-12 col-xs-12">
                                        <p>{elem.message}.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>}
        </div>
        {/*End 5th tile */}
        <div className="row"><br/></div>
        {/*Start scond tile */}

        {/*End second tile */}
    </div>
</div>

<div className="card outset" style={{ boxShadow: "none", border:"1px solid #80808042", background: "white"}}>
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
                                        <label className="">Your name</label>
                                            <input type="text" id="name" name="name" className="form-control" value={this.state.name} onChange={this.onChangeInput.bind(this)}/>
                                        </div>
                                    </div>
                                    {/*Grid column*/}
                                    {/*Grid column*/}
                                    <div className="col-md-11">
                                        <div className="md-form mb-0">
                                        <label className="">Your email</label>
                                            <input type="text" id="email" name="email" className="form-control" value={this.state.email} onChange={this.onChangeInput.bind(this)}/>
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
                                        <label>Your message</label>
                                            <textarea type="text" id="message" name="message" rows="2" value={this.state.msg} className="form-control md-textarea" onChange={this.onChangeInput.bind(this)}></textarea>
                                        </div>
                                    </div>
                                </div>
                                {/*Grid row*/}
                            </form>
                            <div className="text-center text-md-left">
                                {this.state.loader && <Spin indicator={antIcon} />}
                                <a disabled={!!this.state.loader} className="btn button_custom" onClick={this.submitMessage.bind(this)} style={{width:"65%"}}>Send</a>
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
