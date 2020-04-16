


const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const hamburger = document.querySelector('.hamburger');
const headline = document.querySelector('.headline');


const t1 = new TimelineMax();
t1.fromTo(hero, 1, {height: "0%"}, {height: "80%", ease: Power2.easeInOut });
.fromTo(hero, 1.2, {width: "100%"}, {width: "80%", ease: Power2.easeInOut });
.fromTo(slider, 1.2, {x: "-100%"}, {x: "0%", ease: Power2.easeInOut }, "-=1.2");
.fromTo(logo, 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0 }, "-=0.5" );
.fromTo(hamburger, 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0 }, "-=0.5" );
















 ////////////////////////////
function createNode(element)
{
  return document.createElement(element);
}

function append(parent, el)
{
  parent.appendChild(el);
}

const ul = document.getElementById("gallery");
const url = 'https://localhost:3000/gallery/?result=10';

fetch(url)
.then((resp) => resp.json())
.then(function(data){
  let pictures = data.results;
  for each (picture in pictures){
    var g = document.getElementById("gallery");
    var d = document.CreateElement("div");
    d.className = "picture";
    d.style.backgroundImage = "url('" + picture.name + "')";
    g.appendChild(d);
  }
})


function initPage() {

  // Check for the various File API support.
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    alert('success!');// Great success! All the File APIs are supported.
  } else {
    alert('The File APIs are not fully supported in this browser.');
  }


  const path = require('path');
  const fs = require('fs');
  //joining path of directory
  const directoryPath = path.join(__dirname, 'Documents');
  //passsing directoryPath and callback function
  fs.readdir(directoryPath, function (err, files) {
      //handling error
      if (err) {
          return console.log('Unable to scan directory: ' + err);
      }
      //listing all files using forEach
      files.forEach(function (file) {
          // Do whatever you want to do with the file
          console.log(file);
      });
  });
// var files = fs.readdirSync('/images/');
// for each (file in files){
//   var g = document.getElementById("gallery");
//   var d = document.CreateElement("div");
//   d.className = "picture";
//   d.style.backgroundImage = "url('" + file + "')";
//   g.appendChild(d);
// }
}

initPage();
