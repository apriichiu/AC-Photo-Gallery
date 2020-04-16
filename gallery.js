
var fullpage_api = new fullpage('#fullpage', {
  autoScrolling: true,
  navigation:true,
  onLeave: (origin, destination, direction) => {
    const section = destination.item;
    const title = document.querySelector('h1');
    const t1 = new TimelineMax({ delay: 0.5 });
    t1.fromTo(title, 0.5, {y: '50', opacity: 0}, {y:0, opacity: 1});

    if(destination.index === 1){
      const colorimage = document.querySelector('.colorimage');
      const description = document.querySelector('.description');

      t1.fromTo(colorimage, 0.7, {x: '100%'}, {x:'-35%'})
      .fromTo(description, 0.5, {y: '50', opacity: 0}, {y:0, opacity: 1})
      .fromTo(colorimage[0], 1, {opacity: 1}, {opacity: 1})
      .fromTo(colorimage[1], 1, {opacity: 0}, {opacity: 1});
    }
  }
});













//
//  ////////////////////////////
// function createNode(element)
// {
//   return document.createElement(element);
// }
//
// function append(parent, el)
// {
//   parent.appendChild(el);
// }
//
// const ul = document.getElementById("gallery");
// const url = 'https://localhost:3000/gallery/?result=10';
//
// fetch(url)
// .then((resp) => resp.json())
// .then(function(data){
//   let pictures = data.results;
//   for each (picture in pictures){
//     var g = document.getElementById("gallery");
//     var d = document.CreateElement("div");
//     d.className = "picture";
//     d.style.backgroundImage = "url('" + picture.name + "')";
//     g.appendChild(d);
//   }
// })
//
//
// function initPage() {
//
//   // Check for the various File API support.
//   if (window.File && window.FileReader && window.FileList && window.Blob) {
//     alert('success!');// Great success! All the File APIs are supported.
//   } else {
//     alert('The File APIs are not fully supported in this browser.');
//   }
//
//
//   const path = require('path');
//   const fs = require('fs');
//   //joining path of directory
//   const directoryPath = path.join(__dirname, 'Documents');
//   //passsing directoryPath and callback function
//   fs.readdir(directoryPath, function (err, files) {
//       //handling error
//       if (err) {
//           return console.log('Unable to scan directory: ' + err);
//       }
//       //listing all files using forEach
//       files.forEach(function (file) {
//           // Do whatever you want to do with the file
//           console.log(file);
//       });
//   });
// // var files = fs.readdirSync('/images/');
// // for each (file in files){
// //   var g = document.getElementById("gallery");
// //   var d = document.CreateElement("div");
// //   d.className = "picture";
// //   d.style.backgroundImage = "url('" + file + "')";
// //   g.appendChild(d);
// // }
// }
//
// initPage();
