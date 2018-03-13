var express = require('express');
var router = express.Router();
var mysql=require('mysql');
// var cookieParser = require('cookie-parser');
// var session = require('express-session');

var connection=mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'root',
	database:'gwwz',
	port:'3306'
});

connection.connect();

/* GET home page. */
router.get('/', function(req, res, next) {
 //  res.render('/', req);
  // res.json({name:'aaa',pwd:'123'});
});

router.post('/', function(req, res, next) {
  	connection.query('SELECT * from goodlist', function(err, rows, fields) {
		  if (err) throw err;
		  res.json(rows);
		});

});

router.post('/login', function(req, res, next) {
  	var params={
		  	username:req.body.username,
		  	password:req.body.password
		  };
	res.cookie('name',req.body.username,{path:'/',maxAge:1000});
  	connection.query("SELECT * from users where username='"+params.username+"'and password='"+params.password+"'", function(err, rows, fields) {
		  if (err) throw err;
		  console.log(rows);
		  if(rows!=""){
		  	console.log(rows);
		  res.json({
		  	status:"success",
		  	msg:'',
		  	result:{username:rows[0].username}
		  });
		  console.log(rows[0].username);
		}else{
			res.json({
		  	status:"failure",
		  	msg:''});
		  	}
		});
});

router.post('/cart', function(req, res, next) {
	// connection.query('SELECT * from goodlist', function(err, rows, fields) {
	// select('SELECT * from goodlist').then(data=>{
	// 	// console.log(data);
	//   	res.json(data);
	// });
	// });
  	// res.json({name:'aaa',pwd:'123'});
  	var params={username:req.body.username};
  	connection.query("SELECT * from cartlist where username='"+params.username+"'", function(err, rows, fields) {
		  if (err) throw err;
		  res.json(rows);
		  // console.log('The solution is: '+rows[0].goodid);
		  // connection.end();
		});

});

router.post('/add', function(req, res, next) {
  	let params={username:req.body.username,goodid:req.body.goodid,SRC:req.body.SRC,name:req.body.name,price:req.body.price};
  	console.log(params);
  	connection.query("SELECT cartlist.quantity from cartlist where username='"+params.username+"' and goodid='"+params.goodid+"'", function(err, rows, fields) {
  		if (err) throw err;
  		console.log(rows);
  		if(rows!=""){
  			console.log(rows[0].quantity);
  			var quantity=rows[0].quantity+1;
  			connection.query("UPDATE cartlist SET quantity="+quantity+" where username='"+params.username+"' and goodid='"+params.goodid+"'", function(err, rows, fields) {
			 	if (err) throw err;
				res.json({
				  	msg:"添加信息成功！"
				});
			});
  		}else{
  			connection.query("INSERT INTO cartlist (SRC,name,price,quantity,username,goodid) VALUES ('"+params.SRC+"','"+params.name+"',"+params.price+",1,'"+params.username+"','"+params.goodid+"')", function(err, rows, fields) {
		  if (err) throw err;
		  res.json({
		  	msg:"添加信息成功！"
		  });
		});
  			}
	});	
  		
  	

});

router.post('/orderAdd', function(req, res, next) {
  	connection.query("INSERT INTO orderlist (name,price,quantity,username,goodid) VALUES ('"+req.body.name+"',"+req.body.price+","+req.body.quantity+",'"+req.body.username+"','"+req.body.goodid+"')", function(err, rows, fields) {
		  if (err) throw err;
		  res.json({
		  	msg:"订单提价成功！"
		  });
		});

});

router.post('/cartDelete', function(req, res, next) {
  	connection.query("DELETE from cartlist where username='"+req.body.username+"' and goodid='"+req.body.goodid+"'", function(err, rows, fields) {
		  if (err) throw err;
		  res.json({
		  	msg:"删除成功！"
		  });
		});

});

module.exports = router;
