var express = require('express');
var path = require('path');
var app = express();

app.listen(5000);
console.log("listening on 5000");

app.set('views', __dirname + '/views');
app.set('view engine', 'htm');
app.engine('htm', require('ejs').renderFile);

app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', routes);

app.get('/',function(req,res){
   res.sendFile(__dirname+'/UI/index.html');
});

app.get('/:id',function(req,res){
   res.sendFile(__dirname+'/UI/'+req.params.id);
});

app.get('/client/:id',function(req,res){
   res.sendFile(__dirname+'/'+req.params.id);
});


app.get('/libs/:id',function(req,res){
   res.sendFile(__dirname+'/UI/libs/'+req.params.id);
});





// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});




module.exports = app;
