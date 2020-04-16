const http = require('http');
const fs = require('fs');
const express = require('express');
const app = express();
var path = require('path');
var bodyParser = require('body-parser');

//Middlewares
// app.use('/gallery', () => {
//   console.log('This is a middleware running')
// })

//app.use(auth)
///ROUTES
//import ROUTES
// const galleryRoute = require('./routes/gallery');

// app.use('/gallery', galleryRoute);
// var filesabc;

app.use(express.static(__dirname + '/public'));
app.use('/images',express.static(__dirname + '/images'));

app.get('/',(req, res) => {
  res.sendFile(path.join(__dirname, '/views', 'index.html'));
});

app.get('/api',(req, res) => {
  //passsing directoryPath and callback function
  fs.readdir(__dirname + '/images/gallery', function (err, files) {
      //handling error
      if (err) {
          console.log('Unable to scan directory: ' + err);
      }
      else{
        res.send(JSON.stringify(files));
      }
  });

});


app.get('/gallery', function(req,res){
  res.sendFile(path.join(__dirname, '/views', 'gallery.html'));

});

app.get('/journal', function(req,res){
  res.sendFile(path.join(__dirname, '/views', 'journal.html'));

});

app.get('/about', function(req,res){
  res.sendFile(path.join(__dirname, '/views', 'about.html'));

});

// app.post('/api', (req, res) => {
//   //joining path of directory
//
//
// })
//boot the Server
app.listen(3000);
//
// fs.readFile('index.html', (err, html) =>{
//   if(err){
//     throw err;
//   }
//     const hostname = '127.0.0.1';
//     const port = 3000;
//
//     const server = http.createServer((req, res) => {
//       res.statusCode = 200;
//       res.setHeader('Content-type', 'text/html');
//       res.write(html);
//       res.end();
//     });
//
//     server.listen(port, hostname, () => {
//       console.log('Server started on port ' + port);
//     });
//
// } );
