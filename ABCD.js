window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


function ffg1(){
    var x=document.getElementById("line1");
x.style.width="0px";
}
function ffg2(){
    var y=document.getElementById("line1");
y.style.width="25vw";
}

function ffg3(){
    var z=document.getElementById("line2");
z.style.width="0px";
}
function ffg4(){
    var zz=document.getElementById("line2");
zz.style.width="25vw";
}

function ffg5(){
    var a=document.getElementById("line3");
a.style.width="0px";
}
function ffg6(){
    var b=document.getElementById("line3");
b.style.width="25vw";
}

function ffg7(){
    var c=document.getElementById("line4");
c.style.width="0px";
}
function ffg8(){
    var d=document.getElementById("line4");
d.style.width="25vw";
}

function ffg9(){
    var e=document.getElementById("line5");
e.style.width="0px";
}
function ffg10(){
    var f=document.getElementById("line5");
f.style.width="25vw";
}

function ffg11(){
    var g=document.getElementById("line6");
g.style.width="0px";
}
function ffg12(){
    var h=document.getElementById("line6");
h.style.width="25vw";
}

function ffg13(){
    var i=document.getElementById("line7");
i.style.width="0px";
}
function ffg14(){
    var j=document.getElementById("line7");
j.style.width="25vw";
}

function ffg15(){
    var k=document.getElementById("line8");
k.style.width="0px";
}
function ffg16(){
    var l=document.getElementById("line8");
l.style.width="25vw";
}

function ffg17(){
    var m=document.getElementById("line9");
m.style.width="0px";
}
function ffg18(){
    var n=document.getElementById("line9");
n.style.width="25vw";
}

function ffg19(){
    var o=document.getElementById("line10");
o.style.width="0px";
}
function ffg20(){
    var p=document.getElementById("line10");
q.style.width="25vw";
}
function op(){
    var pp=document.getElementById("check_line");
    pp.style.display="none";
    // var pp1=document.getElementById("line_out");
    // pp1.style.display="block";
    document.querySelector("#line_out").style.display = "block";
}
function op1(){
    var pp=document.getElementById("check_line");
    pp.style.display="block";
    // var pp1=document.getElementById("line_out");
    // pp1.style.display="block";
    document.querySelector("#line_out").style.display = "none";
}

// document.addEventListener('click', function handleClickOutsideBox(event) {
//     const box = document.getElementById('line_out');
  
//     if (!box.contains(event.target)) {
//       box.style.display = 'none';
//     }
//   });



const previous = document.querySelector('.button_con');
const next = document.querySelector('.button_con1');
const images = document.querySelector('.ss_part1').children;
const totalImages = images.length;
let currentIndex = 0;


// Event Listeners to previous and next buttons
previous.addEventListener('click', () => {
  previousImage()
})

next.addEventListener('click', () => {
  nextImage();
})

// setInterval(()=>{
//     nextImage();
// },2000);

// Function to go to next Image
function nextImage(){

  images[currentIndex].classList.remove('main');
    if(currentIndex == totalImages-1){
        currentIndex = 0;
    }
    else{
        currentIndex++;
    }

  images[currentIndex].classList.add('main');

}

// Function to go to previous Image
function previousImage(){

  images[currentIndex].classList.remove('main');
    if(currentIndex == 0){
        currentIndex = totalImages-1;
    }
    else{
        currentIndex--;
    }

  images[currentIndex].classList.add('main');

}

