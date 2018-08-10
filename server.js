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
var passport = require('passport');
var jwt = require('jsonwebtoken');
var ip = require('ip');


const port = process.env.PORT || 5000;

app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
       res.header("Access-Control-Allow-Credentials", "true");
       res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
   });

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




















if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}
app.listen(port, () => console.log(`Listening on port ${port}`));