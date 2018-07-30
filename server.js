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
const app = express();
const port = process.env.PORT || 5000;
// API calls
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

/*=================================user register start==================================*/
app.get('/api/userregister',(req,res) =>{
  var nickname = req.query.nickname;
  var email = req.query.email;
  var password = req.query.password;
  var notrobot = req.query.notrobot;
  var date = new Date();

  console.log('==========='+nickname+'==='+email+'==='+password+'=='+notrobot+'==='+date);

  var user_info = new user({
    username: nickname,
    email: email,
    password: password,
    InsertedDate:date,
    subscribe:false,
    status:false,
    blocked:false
  });
  //res.send({message:user_info});
setTimeout(function() {
       user_info.save(function(err,data) {
        res.send({err:err,data:data})
       });
      //res.send({message:'data recieved'})
    }, 1000);
   
 });
// /*============================user register end===========================================*/

/*========================user signin start==============================================*/
 app.get('/api/usersignin',(req,res) =>{
    var Useremail = req.query.useremail,
        Password = req.query.password;
        console.log('======'+Useremail+'========'+Password);

       user.find({email:Useremail,password:Password},{__v:0},
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
});
// /*========================user sign End==================================================*/






















if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}
app.listen(port, () => console.log(`Listening on port ${port}`));