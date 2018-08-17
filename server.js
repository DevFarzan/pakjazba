// const express = require('express');
// const path = require('path');
// const app = express();
// const mongoose = require('mongoose');






// // DB models
// require('./models/User');
// var user = mongoose.model('User');



// //database Development
// var configDB = require('./config/database.js');
// mongoose.connect(configDB.EvenNodeDB,{ useNewUrlParser: true },function(err,db){
//   if(err){
//       console.log(err);
//       db.on('error', console.error.bind(console, 'Database connection failed:'));
//   }
//   else {
//     var db = mongoose.connection;
//       //console.log('connected to '+ configDB.EvenNodeDB);
//       console.log("Database :: pakjazba :: connection established successfully.");
//       //db.close();
//   }
// })


// const port = process.env.PORT || 5000;

// app.use(function(req, res, next) {
//         res.header("Access-Control-Allow-Origin", "*");
//         res.header("Access-Control-Allow-Credentials", "true");
//         res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//         next();
//     });


// app.get('/api/hello', (req, res) => {
//   res.send({ express: 'Hello From Express' });
// });

// app.get('/api/getimagedata',(req, res) =>{
//   console.log('============='+req.query+'===============');
//   var imageurl = req.query;
//   res.send({Image:req.query})
// });


// /*=================================user register start==================================*/

// app.get('/api/userregister',(req,res) =>{
//   var nickname = req.query.nickname;
//   var email = req.query.email;
//   var password = req.query.password;
//   var notrobot = req.query.notrobot;
//   var date = new Date();

//   console.log('==========='+nickname+'==='+email+'==='+password+'=='+notrobot+'==='+date);

//   var user_info = new user({
//     username: nickname,
//     email: email,
//     password: password,
//     InsertedDate:date,
//     subscribe:false,
//     status:false,
//     blocked:false
//   });
//   //res.send({message:user_info});
// setTimeout(function() {
//        user_info.save(function(err,data) {
//         res.send({err:err,data:data})
//        });
//       //res.send({message:'data recieved'})
//     }, 1000);
   
// });
// /*============================user register end===========================================*/



// /*========================reset password API start=============================================*/
// app.get('/api/resetpassword',function(req,res){
//   var Email = req.query.email;
//   console.log('========='+Email);
//  user.find({email:Email},{__v:0},
//         function(err,User){
//             if(err){
//                 res.send({
//                     code: 500,
//                     content : 'Internal Server Error',
//                     msg: 'API not called properly'
//                 });
//             }//end if
//             else if(User!=''){
//                 res.send({
//                     code: 200,
//                     content : User[0],
//                     msg: 'user is authenticate'
//                 });
//             }//end else if
//             else {
//                 res.send({
//                     code: 404,
//                     content: 'Not Found',
//                     msg: 'No User found'
//                 });
//             }
//        })
// });
/*========================reset password API end===============================================*/


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
require('./config/passport');
var User = mongoose.model('User');
var categorypost = mongoose.model('category');



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

app.get('/api/getcategory',(req,res) =>{
  categorypost.find(function(err,data){
    res.send({err:err,data:data});
  })
        // function(err,category) {

        //     if(err){
        //         res.send({
        //             code: 500,
        //             content : 'Internal Server Error',
        //             msg: 'API not called properly'
        //         });
        //     }
        //     else if(category[0]!=undefined){

        //         res.send({
        //             code: 200,
        //             content : category,
        //             msg: 'category retrieved successfully'
        //         });
        //     }
        //     else {
        //         res.send({
        //             code: 404,
        //             content: 'Not Found',
        //             msg: 'No category found'
        //         });
        //     }
        // });
})


/*========================category List=====================================*/

/*
  Here we are configuring our SMTP Server details.
  STMP is mail server which is responsible for sending and recieving email.
*/
var smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "caream224@gmail.com",
        pass: "farzi1234"
    },
    tls: {
        rejectUnauthorized: false
    }

});
var rand,mailOptions,host,link;
/*------------------SMTP Over-----------------------------*/

/*------------------Routing Started ------------------------*/

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

  var user_info = new User({
    username: nickname,
    email: email,
    password: password,
    InsertedDate:date,
    subscribe:false,
    status:false,
    blocked:false
  });
rand=Math.floor((Math.random() * 100) + 54);
  host=req.get('host');
  link="http://"+req.get('host')+"/verify?id="+rand;
  mailOptions={
    to : req.query.email,
    subject : "Please confirm your Email account",
    html : `<html style="opacity: 1;font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;box-sizing: border-box;border: solid;">
<head>
  <title>Verify your email address</title>
</head>
<body style="width: 100% !important;height: 100%;margin: 0;line-height: 1.4;background-color: #F5F7F9;color: #555555;">
    <div class="email-di" style=" width:480px;margin:0 auto;padding:30px;">
  <table class="email" width="100%" cellpadding="0" cellspacing="0" style="width: 100%;margin: 0;padding: 0;background-color: #FFFFFF;">
    <tr>
      <td align="center" style="border: 1px groove;color: grey">
        <table class="email-content" width="100%" cellpadding="0" cellspacing="0" style="width: 100%;margin: 0;padding: 0;">
          <tr>
           <td><img src="http://res.cloudinary.com/dxk0bmtei/image/upload/v1534159021/pakjazba_f3orb0.png" style="display: block;margin-left: auto;margin-right: auto;"></td>
          </tr>
          <tr>
            <td class="email-body" width="100%" style="width: 100%;margin: 0;padding: 0;border-top: 1px solid #FFFFFF;border-bottom: 1px solid #E7EAEC;background-color: #FFFFFF;">
              <table class="email-body_inner" align="center" width="570" cellpadding="0" cellspacing="0" style="width: 570px;margin: 0 auto;padding: 0;">
                <tr>
                  <td class="content" style="padding: 35px;">
                    <h1 style="margin-top: 0;color:#292E31;font-size: 19px;font-weight: bold;text-align: left;">Verify your email address</h1>
                    <p style="margin-top: 0;color: #555555;font-size: 16px;line-height: 1.5em;text-align: left;">Welcome to myEFSOLI! Just verify your email to get</p>
                    <table class="body-action" align="center" width="100%" cellpadding="0" cellspacing="0" style=" width: 100%;margin: 30px auto;padding: 0;text-align: center;">
                      <tr>
                        <td align="center">
                          <div>
                                <a href='+link+' class="button button--blue" style="background-color: #8cbc40; display: inline-block;width: 200px;border-radius: 3px;color: #ffffff;font-size: 15px;line-height: 45px;text-align: center;text-decoration: none;">Verify Email</a>
                          </div>
                        </td>
                      </tr>
                    <p style="margin-top: 0;color: #555555;font-size: 16px;line-height: 1.5em;text-align: left;">EFSOL Team<br>Level 23</p>
                    <tr>
                        <td>
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
                          <p class="sub" style="font-size: 12px;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
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
                      Equitable Financial
                      <br>ABN 86 151 172 039
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
    res.end("sent");
       }
});

  //res.send({message:user_info,code:200});
      //res.json({token: jwt.sign({ email: user_info.Useremail, _id: user_info._id}, 'RESTFULAPIs')})
      res.send({
        _id:user_info._id,
        name:user_info.username,
        token:jwt.sign({ email: user_info.Useremail, _id: user_info._id}, 'RESTFULAPIs'),
        code:200
      })
  
      //  user_info.save(function(err,data) {
      //   res.send({err:err,data:data})
      // })
     });
// /*============================user register end===========================================*/

app.get('/verify',function(req,res){
console.log(req.protocol+":/"+req.get('host'));
if((req.protocol+"://"+req.get('host'))==("http://"+host))
{
  console.log("Domain is matched. Information is from Authentic email");
  if(req.query.id==rand)
  {
    console.log("email is verified");
    res.end("<h1>Email "+mailOptions.to+" is been Successfully verified");
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






/*========================user signin start==============================================*/
 app.get('/api/usersignin',(req,res) =>{
    var Useremail = req.query.useremail,
        Password = req.query.password;
        console.log('======'+Useremail+'========'+Password);

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
                    code: 200,
                    content : res.json({token: jwt.sign({ email: User.Useremail, _id: User._id}, 'RESTFULAPIs')}),
                    msg: 'User logged in successfully'
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
  console.log('========='+Email);
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
  if(businessData){
    res.send({message:'data get on server'});
  }//end businessData
})



/*======================post business data end==================================================*/


















if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}
app.listen(port, () => console.log(`Listening on port ${port}`));