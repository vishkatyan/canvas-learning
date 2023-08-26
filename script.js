// var c= document.getElementById("myCanvas");
// var ctx = c.getContext("2d");
// // To draw a line
// ctx.moveTo(0,0);
// ctx.lineTo(600,200);

// // To draw c circle
// ctx.beginPath();
// ctx.arc(100,90,60,0,2* Math.PI);
// ctx.stroke();


function loco(){ 

    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
loco()

function canvas(){
 const canvas = document.querySelector("#page>canvas");
 const context = canvas.getContext("2d");

 canvas.width = window.innerWidth;
 canvas.height = window.innerHeight;

 window.addEventListener("resize", function(){
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
render();
 });

 function files(index){
    var data = `
    ./frames00001.png 
    ./frames00003.png 
    ./frames00005.png 
    ./frames00007.png 
    ./frames00009.png 
    ./frames00011.png 
    ./frames00013.png 
    ./frames00015.png 
    ./frames00017.png 
    ./frames00019.png 
    ./frames00021.png 
    ./frames00023.png 
    ./frames00025.png 
    ./frames00027.png 
    ./frames00029.png 
    ./frames00031.png 
    ./frames00033.png 
    ./frames00035.png 
    ./frames00037.png 
    ./frames00039.png 
    ./frames00041.png 
    ./frames00043.png 
    ./frames00045.png 
    ./frames00047.png 
    ./frames00049.png 
    ./frames00051.png 
    ./frames00053.png 
    ./frames00055.png 
    ./frames00057.png 
    ./frames00059.png 
    ./frames00061.png 
    ./frames00063.png 
    ./frames00065.png 
    ./frames00067.png 
    ./frames00069.png 
    ./frames00071.png 
    ./frames00073.png 
    ./frames00075.png 
    ./frames00077.png 
    ./frames00079.png 
    ./frames00081.png 
    ./frames00083.png 
    ./frames00085.png 
    ./frames00087.png 
    ./frames00089.png 
    ./frames00091.png 
    ./frames00093.png 
    ./frames00095.png 
    ./frames00097.png 
    ./frames00099.png 
    ./frames00101.png 
    ./frames00103.png 
    ./frames00105.png 
    ./frames00107.png 
    ./frames00109.png 
    ./frames00111.png 
    ./frames00113.png 
    ./frames00115.png 
    ./frames00117.png 
    ./frames00119.png 
    ./frames00121.png 
    ./frames00123.png 
    ./frames00125.png 
    ./frames00127.png 
    ./frames00129.png 
    ./frames00131.png 
    ./frames00133.png 
    ./frames00135.png 
    ./frames00137.png 
    ./frames00139.png 
    ./frames00141.png 
    ./frames00143.png 
    ./frames00145.png 
    ./frames00147.png 
    ./frames00149.png 
    ./frames00151.png 
    ./frames00153.png 
    ./frames00155.png 
    ./frames00157.png 
    ./frames00159.png 
    ./frames00161.png 
    ./frames00163.png 
    ./frames00165.png 
    ./frames00167.png 
    ./frames00169.png 
    ./frames00171.png 
    ./frames00173.png 
    ./frames00175.png 
    ./frames00177.png 
    ./frames00179.png
    `;
    return data.split("\n")[index];
 }
 const frameCount = 90; // no of images (frames)
 const images = [];
 const imageseq = {
    frame:1,
 };

 for(let i=0;i<frameCount;i++){
    const img = new Image();
    img.src = files(i);
    images.push(img);
 }

 gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#page>canvas`,
      //   set start end according to preference
      start: `top top`,
      end: `600% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });
  
  images[1].onload = render;
  
  function render() {
    scaleImage(images[imageSeq.frame], context);
  }
  
  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
  
    trigger: "#page // object you want to pin it.",
    pin: true,
    // markers:true,
    scroller: `#main`,
  //   set start end according to preference
    start: `top top`,
    end: `600% top`,
  });

}
canvas()




