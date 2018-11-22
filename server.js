
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
var nodemailer = require("nodemailer");
var passport = require('passport');
var bodyParser = require('body-parser')
var jwt = require('jsonwebtoken');
var ip = require('ip');

const port = process.env.PORT || 5000;

app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
       res.header("Access-Control-Allow-Credentials", "true");
       res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
   });
app.use(bodyParser.json()) // handle json data
app.use(bodyParser.urlencoded({ extended: true })) // handle URL-encoded data
// // DB models
require('./models/User');
require('./models/category');
require('./models/businessyellowpages');
require('./models/posttoclassified');
require('./models/profile');
require('./models/roommatesSchema');
require('./models/categoryclassified');
require('./models/reviews');
require('./models/sendmessage');
require('./models/facebookLoginSchema');
require('./models/blog');
require('./models/jobPortalSchema');
require('./models/jobAppliedSchema');
require('./models/blogReviews');
require('./models/eventPortalSchema');

require('./config/passport');

var User = mongoose.model('User');
var categorypost = mongoose.model('category');
var yellowPagesBusiness = mongoose.model('business');
var classifiedBusiness = mongoose.model('postclassified');
var profiledata = mongoose.model('profiledatabase');
var roomrentsdata = mongoose.model('roomdata');
var categoryclassified = mongoose.model('categoryclassified');
var reviewdata = mongoose.model('reviewschema');
var sendMessage = mongoose.model('sendmessage');
var facebookLogin = mongoose.model('facebookdatabase');
var blog = mongoose.model('blogdata');
var jobPortal = mongoose.model('jobschema');
var jobApplied = mongoose.model('jobApplied');
var blogReview = mongoose.model('blogReviews');
var eventPortal = mongoose.model('EventSchema');

app.use(passport.initialize());

// //database Development
var configDB = require('./config/database.js');
mongoose.connect(configDB.EvenNodeDB,{ useNewUrlParser: true },function(err,db){
  if(err){
      console.log(err);
      db.on('error', console.error.bind(console, 'Database connection failed:'));
  }
  else {
    var db = mongoose.connection;
      //console.log('connected to '+ configDB.EvenNodeDB);
      console.log("Database :: pakjazba :: connection established successfully.");
      //db.close();
  }
})



// API calls
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

/*=========================category List=====================================*/
app.get('/api/categoryPost',(req,res) =>{
  var category = req.query.category;
  var date = new Date();
  var category_info = new categorypost({
      categoryName:category,
      insertedDate:date
  })
  category_info.save(function(err,data){
    res.send({err:err,data:data});
  })
  //res.send({message:category});
});

app.post('/api/blogpost',(req,res) => {
  var maintitle = 'GOLD BUT NEVER OLD PAKISTANI DRAMAS',
      subtitle = 'Khuda Ki Basti (1969)';
      image = 'https://res.cloudinary.com/dxk0bmtei/image/upload/v1537355391/Khuda-ki-basti-d_m7jv89.jpg';
      discription = 'This drama is included in the syllabus of drama academies in Pune, India, and Europe It is one of the greatest dramas of all time Pakistan has produced. The drama was focused on the social issues and had a very compelling storyline.';
  var blog_info = new blog({
    maintitle:maintitle,
    subtitle:subtitle,
    image:image,
    description:discription
  });
  blog_info.save(function(err,data){
    if(data){
      res.send('blog data inserted');
    }
  })
});

app.get('/api/getblog',(req,res) =>{
blog.find(function(err,data){
  res.send({
    blog:data
  })
})
});

app.get('/api/categoryclassifieddata',function(req,res){
categorypost.find(function(err,data){
  res.send({
    code:200,
    data:data
  })
})
});

app.get('/api/getcategory',(req,res) =>{
  categorypost.find(function(err,data){
    res.send({err:err,data:data});
  })
        
})


/*========================category List=====================================*/

/*
  Here we are configuring our SMTP Server details.
  STMP is mail server which is responsible for sending and recieving email.
*/
var smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "pakjazbap@gmail.com",
        pass: "pakjazba1234"
    },
    tls: {
        rejectUnauthorized: false
    }

});
var rand,mailOptions,host,link;
/*------------------SMTP Over-----------------------------*/

/*------------------Routing Started ------------------------*/
/*==================facebooklogin data get start==================*/

app.get('/api/facebookdata',function(req,res){
  facebookLogin.find(function(err,data){
    res.send({
      err:err,
      data:data
    })
  })
})

/*==================facebooklogin data get end==================*/
/*=================================user register start==================================*/
app.get('/api/userregister',(req,res) =>{

 //var user = new User();

  var nickname = req.query.nickname;
  var email = req.query.email;
  var password = req.query.password;
  var notrobot = req.query.notrobot;
  var date = new Date();
  var ip = req.ip;
  console.log(ip);


rand=Math.floor((Math.random() * 100) + 54);
  host=req.get('host');
  link="http://"+req.get('host')+"/verify?email="+email+"&&id="+rand;
  mailOptions={
    to : req.query.email,
    subject : "Please confirm your Email account",
    html : `<html style="opacity: 1;font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;box-sizing: border-box;border: solid;"><head><title>Verify your Email Address</title></head><body style="width: 100% !important;height: 100%;margin: 0;line-height: 1.4;background-color: #F5F7F9;color: #555555;"><div class="email-di" style=" width:480px;margin:0 auto;padding:30px;"><table class="email" width="100%" cellpadding="0" cellspacing="0" style="width: 100%;margin: 0;padding: 0;background-color: #FFFFFF;"><tr><td align="center" style="border: 1px groove;color: grey"><table class="email-content" width="100%" cellpadding="0" cellspacing="0" style="width: 100%;margin: 0;padding: 0;"><tr><td><img src="http://res.cloudinary.com/dxk0bmtei/image/upload/v1534159021/pakjazba_f3orb0.png" style="display: block;margin-left: auto;margin-right: auto;"></td> </tr> <tr><td class="email-body" width="100%" style="width: 100%;margin: 0;padding: 0;border-top: 1px solid #FFFFFF;border-bottom: 1px solid #E7EAEC;background-color: #FFFFFF;"><table class="email-body_inner" align="center" width="570" cellpadding="0" cellspacing="0" style="width: 570px;margin: 0 auto;padding: 0;"><tr><td class="content" style="padding: 35px;"><h1 style="margin-top: 0;color:#292E31;font-size: 19px;font-weight: bold;text-align: left;">Verify your email address</h1><p style="margin-top: 0;color: #555555;font-size: 16px;line-height: 1.5em;text-align: left;">Welcome to PakJazba! Please confirm your email account by clicking the button below</p><table class="body-action" align="center" width="100%" cellpadding="0" cellspacing="0" style=" width: 100%;margin: 30px auto;padding: 0;text-align: center;"><tr><td align="center"><div> <a href="${link}" class="button button--blue" style="background-color: #8cbc40; display: inline-block;width: 200px;border-radius: 3px;color: #ffffff;font-size: 15px;line-height: 45px;text-align: center;text-decoration: underline;cursor:pointer;">Verify Email</a></div></td> </tr><p style="margin-top: 0;color: #555555;font-size: 16px;line-height: 1.5em;text-align: left;">Team PakJazba<br>Level 23</p><tr><td>
                        <ul style="list-style-type: none;text-align: center;">
                            <li style="float: left;"><a href="#"><p style="align-content: left"><img class="social-icon" src="http://i.imgur.com/oyXO6zq.png" width="30" height="30"></p></a></li>
                            <li style="float: left;"><a href="#"><p class="text-center"><img class="social-icon" src="http://i.imgur.com/AJNmSZs.png" width="30" height="30"></p></a><li>
                            <li style="float: left;"><a href="#"><p class="text-center"><img class="social-icon" src="http://i.imgur.com/GLEVM7N.png" width="30" height="30"></p></a><li>
                      </ul>
                        </td>
                        </tr>
                        </table>
                      
                     <table class="body-sub" style="margin-top: 25px;padding-top: 25px;border-top: 1px solid #E7EAEC;">
                      <tr>
                        <td>
                          <p class="sub" style="font-size: 12px;">Something not working? Please write to us at support@pakjazba.com.
                            </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td>
              <table class="email-footer" align="center" width="570" cellpadding="0" cellspacing="0" style="width: 570px;margin: 0 auto;padding: 0;text-align: center;">
                <tr>
                  <td class="content-cell">
                    <p class="sub center" style="text-align:center;">
                     <img src="http://res.cloudinary.com/dxk0bmtei/image/upload/v1534159021/pakjazba_f3orb0.png" style="display: block;margin-left: auto;margin-right: auto;" />
                      <br>
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>

      </td>
    </tr>
  </table>
</div>
</body>
</html>`

  }
  console.log(mailOptions);
  smtpTransport.sendMail(mailOptions, function(error, response){
     if(error){
          console.log(error);
    res.end("error");
   }else{
          console.log("Message sent: " + response.message);
          console.log("Message sent: " + response.message);

    res.end("sent");
       }
});
  console.log(rand)

    var user_info = new User({
        username: nickname,
        email: email,
        password: password,
        InsertedDate:date,
        randomno: rand,
        subscribe:false,
        status:false,
        blocked:false

    });

  //res.send({message:user_info,code:200});
      //res.json({token: jwt.sign({ email: user_info.Useremail, _id: user_info._id}, 'RESTFULAPIs')})
      user_info.save(function(err,data) {
          if(err){
              res.send({
                  err:err
              })
          }
          else {
            var facebookLogindata = new facebookLogin({
           email:email,
           name:nickname,
           password:password
  })
  facebookLogindata.save(function(err,data){
    console.log(data);
  })
              res.send({
                  _id: user_info._id,
                  name: user_info.username,
                  email: user_info.email,
                  token: jwt.sign({email: user_info.email, _id: user_info._id}, 'RESTFULAPIs'),
                  code: 200
              })
          }
       })
      
  
      //  user_info.save(function(err,data) {
      //   res.send({err:err,data:data})
      // })
     });
// /*============================user register end===========================================*/

app.get('/verify',async function(req,res){
    let response = await User.findOne({email: req.query.email});
    console.log(req.protocol+":/"+req.get('host'));
    if((req.protocol+"://"+req.get('host'))==("http://"+host))
    {

        console.log("Domain is matched. Information is from Authentic email");
        if(req.query.id==response.randomno)
        {
            console.log(response.randomno +'randdddddddddddddd');
            console.log("email is verified");
            res.end("<h1>Email "+ req.query.email +" is been Successfully verified");
        }
        else
        {
            console.log("email is not verified");
            res.end("<h1>Bad Request</h1>");
        }
    }
    else
    {
        res.end("<h1>Request is from unknown source");
    }
});

/*--------------------Routing Over----------------------------*/

/*===================Review api start==============================*/
app.post('/api/reviews',function(req,res){
  var reviews  = req.body;

  var review_info = new reviewdata({
    objid:reviews.objId,
    name:reviews.name,
    email:reviews.email,
    message:reviews.message,
    star:reviews.star,
    written:reviews.written
  })

  review_info.save(function(err,data){
    if(err){
      res.send({error:'something done wrong'})
    }
    else if(data){
      res.send({
        code:200,
        msg:'reviews added successfully',
        content:data[0]
      })
    }
  })

})


app.get('/api/getreviews',function(req,res){

reviewdata.find({__v:0},function(err,reviews){
    if(err){
      res.send({
        code:500,
        content:'Internal Server Error',
        msg:'API not called properly'
      })
    }//end if
    else if(reviews!=''){
      res.send({
        code:200,
        content:reviews,
        msg:'all user reviews'
      });
    }//end else if condition
    else{
      res.send({
        code:404,
        content:'Not Found',
        msg:'no user reviews'
      });
    }//end else condition
  })

});


/*==================Review api end=================================*/

/*==================BlogReview api start=================================*/

app.post('/api/addBlogReviews',function(req,res){
    var reviews  = req.body;
    console.log(reviews, '3333333333333333')
    var review_info = new blogReview({
        objId:reviews.objId,
        user:reviews.user,
        comm:reviews.comm,
        userImg:reviews.userImg,
        userId:reviews.userId,
        written:reviews.written
    });

    review_info.save(function(err,data){
        if(err){
            res.send({error:'something done wrong'})
        }
        else if(data){
            res.send({
                code:200,
                msg:'reviews added successfully',
                content:data
            });
        }
    });
});


app.get('/api/getBlogReviews',function(req,res){
    blogReview.find({__v:0},function(err,reviews){
        if(err){
            res.send({
                code:500,
                content:'Internal Server Error',
                msg:'API not called properly'
            });
        }//end if
        else if(reviews!=''){
            res.send({
                code:200,
                content:reviews,
                msg:'all user reviews'
            });
        }//end else if condition
        else{
            res.send({
                code:404,
                content:'Not Found',
                msg:'no user reviews'
            });
        }//end else condition
    });
});

/*==================BlogReview api end=================================*/



/*========================user signin start==============================================*/
 app.get('/api/usersignin',(req,res) =>{
    var Useremail = req.query.useremail,
        Password = req.query.password;
      
       User.find({email:Useremail,password:Password},{__v:0},
        function(err,User){
            if(err){
                res.send({
                    code: 500,
                    content : 'Internal Server Error',
                    msg: 'API not called properly'
                });
            }//end if
            else if(User!=''){
                res.send({
                 _id:User[0]._id,
                name:User[0].username,
                email:User[0].email,
                profileId:User[0].profileId,
                token:jwt.sign({ email: User[0].email, _id: User[0]._id}, 'RESTFULAPIs'),
                code:200,
                msg:'User logged successfully'
              })
            }//end else if
            else {
                res.send({
                    code: 404,
                    content: 'Not Found',
                    msg: 'No User found'
                });
            }
       })
  //   passport.authenticate('local', function(err, user, info){
  //   var token;

  //   // If Passport throws/catches an error
  //   if (err) {
  //     res.status(404).json(err);
  //     return;
  //   }

  //   // If a user is found
  //   if(user){
  //     token = user.generateJwt();
  //     res.status(200);
  //     res.json({
  //       "token" : token
  //     });
  //   } else {
  //     // If user is not found
  //     res.status(401).json(info);
  //   }
  // })(req, res);
});
// /*========================user sign End==================================================*/


// /*========================reset password API start=============================================*/
app.get('/api/resetpassword',function(req,res){
  var Email = req.query.email;
 user.find({email:Email},{__v:0},
        function(err,User){
            if(err){
                res.send({
                    code: 500,
                    content : 'Internal Server Error',
                    msg: 'API not called properly'
                });
            }//end if
            else if(User!=''){
                res.send({
                    code: 200,
                    content : User[0],
                    msg: 'user is authenticate'
                });
            }//end else if
            else {
                res.send({
                    code: 404,
                    content: 'Not Found',
                    msg: 'No User found'
                });
            }
       })
});
/*========================reset password API end===============================================*/

/*========================get all users========================================================*/
app.get('/api/allusers',function(req,res){
  User.find({__v:0},function(err,user){
    if(err){
      res.send({
        code:500,
        content:'Internal Server Error',
        msg:'API not called properly'
      })
    }//end if
    else if(user!=''){
      var userEmail  = [];
      for(var i=0;i<user.length;i++){
        userEmail.push(user[i].email)
      }
      res.send({
        code:200,
        content:userEmail,
        msg:'all registered user'
      });
    }//end else if condition
    else{
      res.send({
        code:404,
        content:'Not Found',
        msg:'no registered user found'
      });
    }//end else condition
  })
})

/*========================get all users========================================================*/

/*========================post business data start==================================================*/


app.post('/api/postbusinessdata',function(req,res){
  var businessData = req.body;
  var user_id = businessData.user_id,
      address = businessData.address,
      businessname = businessData.businessName,
      businessnumber = businessData.businessNumber
      firstname = businessData.firstName,
      lastname = businessData.lastName,
      city = businessData.city,
      state = businessData.state,
      zipcode = businessData.zip,
      businessaddress = businessData.businessAddress,
      businessownername = businessData.businessOwner,
      businessemail = businessData.businessEmail,
      businesscategory = businessData.businessCategory,
      businessImages = businessData.arr_url,
      businessId = businessData.businessId;
      businessDescription = businessData.description;
      posted = businessData.posted;

if(businessData.objectId == '' || businessData.objectId == undefined || businessData.objectId == null){
   var yellowBusiness_info = new yellowPagesBusiness({
    user_id:user_id,
    address:address,
    businessname:businessname,
    businessnumber:businessnumber,
    firstname:firstname,
    lastname:lastname,
    businessemailid:businessId,
    city:city,
    state:state,
    zipcode:zipcode,
    businessaddress:businessaddress,
    businessownername:businessownername,
    businessemail:businessemail,
    businesscategory:businesscategory,
    businessImages:businessImages,
    openingTime:businessData.openingTime,
    closingTime:businessData.closingTime,
    socialFaceBook:businessData.socialFaceBook,
    socialGoogle:businessData.socialGoogle,
    socialLinkIn:businessData.socialLinkIn,
    profileId:businessData.profileId,
    description:businessDescription,
    posted:posted
   });

   yellowBusiness_info.save(function(err,data){
    if(err){
      res.send({
        code:500,
        content:'Internal Server Error',
        msg:'API not called properly'
      })
    }//end if
    else if(data!=''){
      console.log(data);
      res.send({
        code:200,
        msg:'Data inserted successfully'
      });
    }//end else if condition
    else{
      res.send({
        code:404,
        content:'Not Found',
        msg:'no  data inserted'
      });
    }//end else condition
   })
 }//end if objectId

 else if(businessData.objectId != '' || businessData.objectId != undefined || businessData.objectId != null){
  yellowPagesBusiness.findOne({"_id":businessData.objectId},function(err,businessProfile){
    if(err){
      return res.status(400).json({"Unexpected Error:: ": err});
    }//end err
    businessProfile.user_id=businessData.user_id;
    businessProfile.address=businessData.address;
    businessProfile.businessname=businessData.businessName;
    businessProfile.businessnumber=businessData.businessNumber;
    businessProfile.firstname=businessData.firstName;
    businessProfile.lastname=businessData.lastName;
    businessProfile.businessemailid=businessData.businessId;
    businessProfile.city=businessData.city;
    businessProfile.state=businessData.state;
    businessProfile.zipcode=businessData.zip;
    businessProfile.businessaddress=businessData.businessAddress;
    businessProfile.businessownername=businessData.businessOwner;
    businessProfile.businessemail=businessData.businessEmail;
    businessProfile.businesscategory=businessData.businessCategory;
    businessProfile.businessImages=businessData.arr_url;
    businessProfile.openingTime=businessData.openingTime;
    businessProfile.closingTime=businessData.closingTime;
    businessProfile.socialFaceBook=businessData.socialFaceBook;
    businessProfile.socialGoogle=businessData.socialGoogle;
    businessProfile.socialLinkIn=businessData.socialLinkIn;
    businessProfile.profileId=businessData.profileId;
    businessProfile.description = businessData.description;
    businessProfile.posted = businessData.posted;

    businessProfile.save(function(err,doc){
      if(err){
        //console.log("profile update error::" :err);
        return res.status(400).json({"Unexpected Error::" :err});
      }
      console.log('business data has been updated');
      return res.send({
          code:200,
          msg:'Business data updated successfully'
        });
    });
  })
 }//end else if businessData objectId

})
/*======================post business data end==================================================*/


/*======================post buy & sell business start==========================================*/
app.post('/api/postbuyselldata',function(req,res){
  var modeofcontact = [],
      delivery = [],
      classifiedImages = [],
      sizedimension = [];

  var buyselldata = req.body;
  //console.log(buyselldata);
  var userid = buyselldata.user_id,
      contactname = buyselldata.contactName,
      contactemail = buyselldata.contactEmail,
      contactnumber = buyselldata.contactNumber;
      modeofcontact = buyselldata.contactMode;
  var address = buyselldata.address,
      state = buyselldata.state,
      category = buyselldata.category,
      city = buyselldata.city,
      condition = buyselldata.condition;
      delivery =   buyselldata.delivery;
  var description = buyselldata.description,
      modelmake   =  buyselldata.make,
      modelnumber = buyselldata.number,
      modelname   = buyselldata.modelName,
      title       = buyselldata.postingTitle,
      postingtype = buyselldata.postingType,
      price       = buyselldata.price;
      classifiedImages = buyselldata.arr_url;
  var hideprice    = buyselldata.hidePrice,
      hideaddress  = buyselldata.hideAddress;
      sizedimension = buyselldata.sizedimension;
var   subcategory   = buyselldata.subCategory,
      subsubcategory = buyselldata.subSubCategory,
      profileid =      buyselldata.profileId,
      streetaddress = buyselldata.streetAddress,
      posted = buyselldata.posted

if(buyselldata.objectId == '' || buyselldata.objectId == undefined || buyselldata.objectId == null){

 var classifiedBusiness_info = new classifiedBusiness({
      userid:userid,
      contactname:contactname,
      contactemail:contactemail,
      contactnumber:contactnumber,
      modeofcontact:modeofcontact,
      delivery:delivery,
      address:address,
      hideaddress:hideaddress,
      condition:condition,
      sizedimension:sizedimension,
      images:classifiedImages,
      city:city,
      state: state,
      postingtype:postingtype,
      category:category,
      title:title,
      description:req.body.description,
      price:price,
      hideprice:hideprice,
      modelmake:modelmake,
      modelnumber:modelnumber,
      modelname:modelname,
      subcategory:subcategory,
      subsubcategory:subsubcategory,
      profileid:profileid,
      streetaddress:streetaddress,
      posted:posted
 });

classifiedBusiness_info.save(function(err,data){
  if(err){
      res.send({
        code:500,
        content:'Internal Server Error',
        msg:'API not called properly'
      })
    }//end if
    else if(data!=''){
      res.send({
        code:200,
        msg:'Data inserted successfully'
      });
    }//end else if condition
    else{
      res.send({
        code:404,
        content:'Not Found',
        msg:'no  data inserted'
      });
    }//end else condition
})
}//end if objectId
else if(buyselldata.objectId != '' ||  buyselldata.objectId != undefined || buyselldata.objectId != null){
classifiedBusiness.findOne({"_id" : buyselldata.objectId},function(err,buysell){
  if(err){
 return res.status(400).json({"Unexpected Error:: ": err});
  }//end if
       buysell.userid=buyselldata.user_id;
      buysell.contactname=buyselldata.contactName;
      buysell.contactemail=buyselldata.contactEmail;
      buysell.contactnumber=buyselldata.contactNumber;
      buysell.modeofcontact=buyselldata.contactMode;
      buysell.delivery=buyselldata.delivery;
      buysell.address=buyselldata.address;
      buysell.hideaddress=buyselldata.hideAddress;
      buysell.condition=buyselldata.condition;
      buysell.sizedimension=buyselldata.sizedimension;
      buysell.images=buyselldata.arr_url;
      buysell.city=buyselldata.city;
      buysell.postingtype=buyselldata.postingtype;
      buysell.category=buyselldata.category;
      buysell.title=buyselldata.postingTitle;
      buysell.description=req.body.description;
      buysell.price=buyselldata.price;
      buysell.hideprice=buyselldata.hidePrice;
      buysell.modelmake=buyselldata.make;
      buysell.modelnumber=buyselldata.number;
      buysell.modelname=buyselldata.modelName;
      buysell.subcategory=buyselldata.subCategory;
      buysell.subsubcategory=buyselldata.subSubCategory;
      buysell.profileid=buyselldata.profileId;
      buysell.streetaddress=buyselldata.streetaddress;
      buysell.posted = buyselldata.posted;

      buysell.save(function(err,doc){
        if(err){
          return res.status(400).json({"Unexpected Error:: ": err});
        }//end if
        return res.send({
          code:200,
          msg:'Buy and Sell data updated successfully'
        });

      });
})
}//end else
});

/*======================post buy & sell business end===========================================*/

/*======================get Market place start========================================================*/
app.get('/api/marketplace',function(req,res){
  var session = req.query.session;
  
    yellowPagesBusiness.find(function(err,yellowPages){
      // console.log(yellowPages);
     if(yellowPages!=''){
      var businesses  = [];
          //buysell = [];
      for(var i=0;i<yellowPages.length;i++){
        businesses.push(yellowPages[i]);
      }//end for
      }//end if
      classifiedBusiness.find(function(err,classifiedData){
        //console.log('classified:'+classifiedData);
        if(classifiedData!=''){
          var buysell = [];
          for(var j=0;j<classifiedData.length;j++){
            buysell.push(classifiedData[j]);
          }
        }//end if

        roomrentsdata.find(function(err,roomrents){
          //console.log('roomrents:'+roomrents);
          if(roomrents!=''){
            var roomrentsdata = [];
            for(var k=0;k<roomrents.length;k++){
              roomrentsdata.push(roomrents[k]);
            }
          }//end if

        jobPortal.find(function(err, jobData) {
          if(jobData != ''){
            var jobPortalData = [];
            for(var l=0; l<jobData.length; l++){
              jobPortalData.push(jobData[l])
            }
          }

          eventPortal.find(function(err, eventData) {
            if(eventData != ''){
              var eventPortalData = [];
              for(var m=0; m<eventData.length; m++){
                eventPortalData.push(eventData[m])
              }
            }
            res.send({
              code:200,
              business:businesses,
              busell:buysell,
              roomrentsdata:roomrentsdata,
              jobPortalData: jobPortalData,
              eventPortalData: eventPortalData,
              msg:'data recieve successfully'
            });
          });
        });    
      });
    });
  });
});
/*====================get market Market place end=====================================================*/

/*====================post profile api start=====================================================*/
app.post('/api/profile',function(req,res){
  var profileData = req.body;
  var user_id = profileData.userId,
      name = profileData.name,
      description = profileData.description,
      email = profileData.email,
      phone = profileData.phone,
      location = profileData.location,
      facebooklink = profileData.facebook,
      twitterlink = profileData.twitter,
      googlelink = profileData.google,
      linkdin = profileData.linkdin,
      imageurl = profileData.url,
      blockprofile = false,
      verifiedprofile = true

if(profileData.profileId == ''){
  var profileInfo = new profiledata({
    user_id:user_id,
    name:name,
    description:description,
    email:email,
    phone:phone,
    location:location,
    facebooklink:facebooklink,
    twitterlink:twitterlink,
    googlelink:googlelink,
    linkdin:linkdin,
    imageurl:imageurl,
    blockprofile:blockprofile,
    verifiedprofile:verifiedprofile
  })
  profileInfo.save(function(err,data){
    res.send({
      code:200,
      msg:'data inserted successfully',
      content:data._id
    })

    /*====================ProfileId save in user schema start==========================*/
User.findOne({"_id":profileData.userId},function(err,user){
  if(err){
    //console.log("Profile update Error:::", err);
    return res.status(400).json({"Unexpected Error:: ": err});
  }//end err if
  user.profileId = data._id;
  user.save(function(err,doc){
  })
})

/*====================ProfileId save in user schema end==========================*/
  })


}
else if(profileData.profileId != ''){
  profiledata.findOne({"_id" : profileData.profileId},function(err,profile){
    if(err){
          //console.log("Profile update Error:::", err);
          return res.status(400).json({"Unexpected Error:: ": err});
        }
          profile.user_id = profileData.userId;
          profile.description = profileData.description;
          profile.name = profileData.name,
          profile.email = profileData.email;
          profile.phone = profileData.phone;
          profile.location = profileData.location;
          profile.facebooklink = profileData.facebook;
          profile.twitterlink = profileData.twitter;
          profile.googlelink = profileData.google;
          profile.linkdin = profileData.linkdin;
          profile.imageurl = profileData.url;
          profile.blockprofile = false;
          profile.verifiedprofile = true;

          profile.save(function(err, doc){
          if(err){
            //console.log("profile update Error:::", err);
            return res.status(400).json({"Unexpected Error:: ": err});
          }
          //console.log('profile has been updated successfully.');
          return res.status(200).json({message: 'profile has been updated successfully.'} );

        });
  })
}
});

/*====================post profile api end=======================================================*/

/*====================get profile api start============================================================*/
app.get('/api/getprofile',function(req,res){
  var profileId = req.query.profileId;
  profiledata.findOne({"_id":profileId},function(err,specificProfile){
    if(err){
          //console.log("Profile not found Error:::", err);
          return res.status(400).json({"Unexpected Error:: ": err});
        }
     else if(specificProfile){
      res.send({
        code:200,
        content:specificProfile,
        msg:'Specific Profile'
      })
     }   
  });
});
/*====================get profile api end==============================================================*/

/*===================post change password API start==========================================================*/
app.post('/api/changepassword',function(req,res){
  var resetPassword = req.body;
  //console.log(resetPassword);
  User.findOne({"_id":req.body.userId},function(err,speUser){
      if(err){
        //console.log("Profile not found Error:::", err);
         return res.status(400).json({"Unexpected Error:: ": err});
      }//end 
      else if(speUser){
        if(req.body.currentPassword != speUser.password){
          return res.status(200).json({"error":"Password not belong to current user"});
        }
        else if(req.body.currentPassword == speUser.password){
          speUser.password = req.body.newPassword;
          speUser.save(function(err,data){
            if(err){
            //console.log("Password update Error:::", err);
            return res.status(400).json({"Unexpected Error:: ": err});
          }
          //console.log('Password has been updated successfully.');
          return res.status(200).json({message: 'Password has been updated successfully.'} );
          })
        }
      }
  });
})

/*===================post change password API end============================================================*/

/*===================post roommates API start================================================================*/
  app.post('/api/postroomrent',function(req,res){
    var postroomrent = req.body;
    if(postroomrent.objectId == '' || postroomrent.objectId == undefined || postroomrent.objectId == null){
    var roommates_info = new roomrentsdata({
      user_id:postroomrent.user_id,
      city:postroomrent.city,
      propertylocation:postroomrent.propertyLocation,
      propertyzipcode:postroomrent.zipCode,
      category:postroomrent.category,
      housingtype:postroomrent.housingType,
      postingtitle:postroomrent.postingTitle,
      discription:postroomrent.description,
      startdate:postroomrent.dateRange.from,
      enddate:postroomrent.dateRange.to,
      rent:postroomrent.price,
      pricemode:postroomrent.priceMode,
      accomodates:postroomrent.accommodates,
      furnished:postroomrent.furnished,
      Attachedbath:postroomrent.attachedBath,
      amenitiesinclude:postroomrent.amenities,
      vegetariansprefered:postroomrent.vegNoVeg,
      smoking:postroomrent.smoking,
      petfriendly:postroomrent.petFriendly,
      imageurl:postroomrent.arr_url,
      contactname:postroomrent.contactName,
      contactemail:postroomrent.contactEmail,
      contactnumber:postroomrent.contactNumber,
      modeofcontact:postroomrent.contactMode,
      profileId:postroomrent.profileId,
      subCategory:postroomrent.subCategory,
      subSubCategory:postroomrent.subSubCategory,
      state:postroomrent.state,
      posted:postroomrent.posted
    })
    roommates_info.save(function(err,data){
  if(err){
      res.send({
        code:500,
        content:'Internal Server Error',
        msg:'API not called properly'
      })
    }//end if
    else if(data!=''){
      res.send({
        code:200,
        msg:'Data inserted successfully'
      });
    }//end else if condition
    else{
      res.send({
        code:404,
        content:'Not Found',
        msg:'no  data inserted'
      });
    }//end else condition
})
}//end if objectId
else if(postroomrent.objectId != '' || postroomrent.objectId != undefined || postroomrent.objectId != null){
  roomrentsdata.findOne({"_id": postroomrent.objectId},function(err,roomrentsdata){
    if(err){
       return res.status(400).json({"Unexpected Error:: ": err});
    }//end iff
      roomrentsdata.user_id=postroomrent.user_id;
      roomrentsdata.city=postroomrent.city;
      roomrentsdata.propertylocation=postroomrent.propertyLocation;
      roomrentsdata.propertyzipcode=postroomrent.zipCode;
      roomrentsdata.category=postroomrent.category;
      roomrentsdata.housingtype=postroomrent.housingType;
      roomrentsdata.postingtitle=postroomrent.postingTitle;
      roomrentsdata.discription=postroomrent.description;
      roomrentsdata.startdate=postroomrent.dateRange.from;
      roomrentsdata.enddate=postroomrent.dateRange.to;
      roomrentsdata.rent=postroomrent.price;
      roomrentsdata.pricemode=postroomrent.priceMode;
      roomrentsdata.accomodates=postroomrent.accommodates;
      roomrentsdata.furnished=postroomrent.furnished;
      roomrentsdata.Attachedbath=postroomrent.attachedBath;
      roomrentsdata.amenitiesinclude=postroomrent.amenities;
      roomrentsdata.vegetariansprefered=postroomrent.vegNoVeg;
      roomrentsdata.smoking=postroomrent.smoking;
      roomrentsdata.petfriendly=postroomrent.petFriendly;
      roomrentsdata.imageurl=postroomrent.arr_url;
      roomrentsdata.contactname=postroomrent.contactName;
      roomrentsdata.contactemail=postroomrent.contactEmail;
      roomrentsdata.contactnumber=postroomrent.contactNumber;
      roomrentsdata.modeofcontact=postroomrent.contactMode;
      roomrentsdata.profileId=postroomrent.profileId;
      roomrentsdata.subCategory=postroomrent.subCategory;
      roomrentsdata.subSubCategory=postroomrent.subSubCategory;
      roomrentsdata.state=postroomrent.state;
      roomrentsdata.posted = postroomrent.posted;

      roomrentsdata.save(function(err,doc){
        if(err){
          return res.status(400).json({"Unexpected Error:: ": err});
        }//end if
        return res.send({
          code:200,
          msg:'roomrents data updated successfully'
        })
      });
  })
}//else if
});

/*===================post Job API start================================================================*/
app.post('/api/postJobPortal', (req, res) => {
    let postJobPortal = req.body;
    if(postJobPortal.objectId === ''){
        let jobDataa = new jobPortal({
            user_id: postJobPortal.user_id,
            profileId: postJobPortal.profileId,
            compDescription: postJobPortal.compDescription,
            compEmail: postJobPortal.compEmail,
            compName: postJobPortal.compName,
            email: postJobPortal.email,
            experience: postJobPortal.experience,
            jobCat: postJobPortal.jobCat,
            jobDescription: postJobPortal.jobDescription,
            jobTitle: postJobPortal.jobTitle,
            jobType: postJobPortal.jobType[0],
            location: postJobPortal.location,
            salary: postJobPortal.salary,
            faceBook: postJobPortal.faceBook,
            LinkdIn: postJobPortal.LinkdIn,
            Google: postJobPortal.Google,
            Website: postJobPortal.Website,
            Tagline: postJobPortal.Tagline,
            arr_url: postJobPortal.arr_url,
            posted: postJobPortal.posted
        });

        jobDataa.save((error, response) => {
            if(error){
                res.send({
                    code:500,
                    content:'Internal Server Error',
                    msg:'API not called properly'
                });
            }else if(response !== ''){
                res.send({
                    code:200,
                    msg:'Data inserted successfully'
                });
            }else{
                res.send({
                    code:404,
                    content:'Not Found',
                    msg:'no data inserted'
                });
            }
        });
    }else {
        jobPortal.findOne({objectId: postJobPortal.objectId}, (err, jobData) => {
            if(err){
                return res.status(400).json({"Unexpected Error:: ": err});
            }
            jobData.user_id = postJobPortal.user_id;
            jobData.profileId = postJobPortal.profileId;
            jobData.compDescription = postJobPortal.compDescription;
            jobData.compEmail = postJobPortal.compEmail;
            jobData.compName = postJobPortal.compName;
            jobData.email = postJobPortal.email;
            jobData.experience = postJobPortal.experience;
            jobData.jobCat = postJobPortal.jobCat;
            jobData.jobDescription = postJobPortal.jobDescription;
            jobData.jobTitle = postJobPortal.jobTitle;
            jobData.jobType = postJobPortal.jobType[0];
            jobData.location = postJobPortal.location;
            jobData.salary = postJobPortal.salary;
            jobData.faceBook = postJobPortal.faceBook;
            jobData.LinkdIn = postJobPortal.LinkdIn;
            jobData.Google = postJobPortal.Google;
            jobData.Website = postJobPortal.Website;
            jobData.Tagline = postJobPortal.Tagline;
            jobData.arr_url = postJobPortal.arr_url;
            jobData.posted = postJobPortal.posted;
        });
        jobData.save((error, doc) => {
            if(error){
                return res.status(400).json({"Unexpected Error:: ": error});
            }
            return res.send({
                code:200,
                msg:'Add job data updated successfully'
            });
        });
    }
});

/*===================post Job API end================================================================*/

/*===================post Event API start================================================================*/
app.post('/api/postEventPortal', (req, res) => {
    let postEventPortal = req.body;
    if(postEventPortal.objectId === ''){
        let eventData = new eventPortal({
            availableTickets: postEventPortal.availableTickets,
            city: postEventPortal.city,
            dateRange: postEventPortal.dateRange,
            delivery: postEventPortal.delivery,
            description: postEventPortal.description,
            email: postEventPortal.email,
            eventCategory: postEventPortal.eventCategory,
            eventTitle: postEventPortal.eventTitle,
            images: postEventPortal.images,
            name: postEventPortal.name,
            number: postEventPortal.number,
            paymentMode: postEventPortal.paymentMode,
            price: postEventPortal.price,
            state: postEventPortal.state,
            totalTickets: postEventPortal.totalTickets,
            free: postEventPortal.free,
            website: postEventPortal.website,
            faceBook: postEventPortal.faceBook,
            linkdIn: postEventPortal.linkdIn,
            google: postEventPortal.google,
            userId: postEventPortal.userId,
            profileId: postEventPortal.profileId,
            randomKey: postEventPortal.randomKey,
            objectId: postEventPortal.objectId,
            posted: postEventPortal.posted
        });

        eventData.save((error, response) => {
            if(error){
                res.send({
                    code:500,
                    content:'Internal Server Error',
                    msg:'API not called properly'
                });
            }else if(response !== ''){
                res.send({
                    code:200,
                    msg:'Data inserted successfully'
                });
            }else{
                res.send({
                    code:404,
                    content:'Not Found',
                    msg:'no data inserted'
                });
            }
        });
    }else {
        eventPortal.findOne({objectId: postEventPortal.objectId}, (err, eventData) => {
            if(err){
                return res.status(400).json({"Unexpected Error:: ": err});
            }
            eventData.availableTickets = postEventPortal.availableTickets;
            eventData.city = postEventPortal.city;
            eventData.dateRange = postEventPortal.dateRange;
            eventData.delivery = postEventPortal.delivery;
            eventData.description = postEventPortal.description;
            eventData.email = postEventPortal.email;
            eventData.eventCategory = postEventPortal.eventCategory;
            eventData.eventTitle = postEventPortal.eventTitle;
            eventData.images = postEventPortal.images;
            eventData.name = postEventPortal.name;
            eventData.number = postEventPortal.number;
            eventData.paymentMode = postEventPortal.paymentMode;
            eventData.price = postEventPortal.price;
            eventData.state = postEventPortal.state;
            eventData.totalTickets = postEventPortal.totalTickets;
            eventData.free = postEventPortal.free;
            eventData.website = postEventPortal.website;
            eventData.faceBook = postEventPortal.faceBook;
            eventData.linkdIn = postEventPortal.linkdIn;
            eventData.google = postEventPortal.google;
            eventData.userId = postEventPortal.userId;
            eventData.profileId = postEventPortal.profileId;
            eventData.randomKey = postEventPortal.randomKey;
            eventData.objectId = postEventPortal.objectId;
            eventData.posted = postEventPortal.posted;
        });
        eventData.save((error, doc) => {
            if(error){
                return res.status(400).json({"Unexpected Error:: ": error});
            }
            return res.send({
                code:200,
                msg:'Add job data updated successfully'
            });
        });
    }
});

/*===================post Event API end================================================================*/

/*===================Applied for Job start===========================================================*/

app.post('/api/AppliedForJob', (req, res) => {
    let appliedData = req.body;
    let applyData = new jobApplied({
        senFirName: appliedData.senFirName,
        senLastName: appliedData.senLastName,
        senEmail: appliedData.senEmail,
        senCV: appliedData.senCV,
        senMsg: appliedData.senMsg,
        resEmail: appliedData.resEmail,
        appliedOn: appliedData.appliedOn,
        jobId: appliedData.jobId
    })
    applyData.save((error, response) => {
        if(error){
            res.send({
                code:500,
                content:'Internal Server Error',
                msg:'API not called properly'
            });
        }else if(response !== ''){
            res.send({
                code:200,
                msg:'yor request submitted successfully'
            });
        }else{
            res.send({
                code:404,
                content:'Not Found',
                msg:'no data inserted'
            });
        }
    });
})
/*===============specific event find start======================================*/



/*===============specific event find start======================================*/
app.get('/api/getSpecific',function(req,res){
  var eventkeyword = req.query.randomKey;
  if(eventkeyword != '' || eventkeyword != undefined){
    eventPortal.findOne({randomKey:eventkeyword},function(err,eventData){
      if(err === null && eventData === null){
        res.send({
          code:404,
          msg:'there is no record found'
        })
      }else if(eventData !== null){
        res.send({
          code:200,
          content:eventData
        })
      }
    })
  }else{
    res.send({
      code:404,
      msg:'kindly send proper detail'
    })
  }
})


/*===================Applied for Job End===========================================================*/

app.post('/api/sendmessage',function(req,res){
var getuserfields = req.body;
      var username = getuserfields.name;
      var receiver = getuserfields.receiver;
      var message = getuserfields.msg;
      var sender = getuserfields.sender;
      var written = getuserfields.written;

      /*var username = 'farzan';
      var receiver = 'farzanhanif123@gmail.com';
      var message = 'asdasdsadsd';
      var sender = 'sdsadsadsadsad';
      var written = 'sadasdsadsad';*/

      mailOptions={
    to : getuserfields.receiver,
    subject : " Pakjazba User want to talk to you",
    html : "<html><head><style>table {font-family: arial, sans-serif;border-collapse: collapse;width: 100%;}td, th {border: 1px solid #dddddd;text-align: left;padding: 8px;}tr:nth-child(even) {background-color: #dddddd;}</style></head><body><h2>User Details</h2><table> <tr><th>Name</th><th>Email</th><th>Message</th></tr><tr><td>" + username +" </td><td>"+ sender +"</td><td>"+ message +"</td></tr></table></body></html>"
  }
  //console.log(mailOptions);
  smtpTransport.sendMail(mailOptions, function(error, response){
     if(error){
          console.log(error);
    res.end("error");
   }else{
          console.log("Message sent: " + response.message);
    res.send({
      code:200,
      msg:'Message sent'
    })
       }
     })
  
})

/*===================post roommates API end =================================================================*/
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}
app.listen(port, () => console.log(`Listening on port ${port}`));