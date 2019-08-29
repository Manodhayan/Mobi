// carousel();
// function carousel() {
//   var i;
//   var x = document.getElementsByClassName("slideshow");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";  
//   }
//   myIndex++;
//   if (myIndex > x.length) {myIndex = 1}    
//   x[myIndex-1].style.display = "initial";  
//   setTimeout(carousel, 3000); // Change image every 2 seconds
// }
var parallax = document.getElementsByClassName("parallax");
var image_array=["Home.jpg","IP.jpg","News.jpg","platforms.jpg","Services.jpg"]
var index=0;
function slideshowChange() {

  parallax[0].style.backgroundImage = "url('https://manodhayan.github.io/Mobi/src/images/" + image_array[index];
  setTimeout(slideshowChange,3000);
  index++;
  if(index==image_array.length){index=0;}
}
slideshowChange();

var card = document.getElementsByClassName("card-container");
// console.log(card[0].style);
card[0].style.marginLeft="2%";

/* Text Slider */
var testimonials = document.getElementsByClassName("testimonials");
var colorIndex=0;
var testimonialIndex=0;
var color_array=["rgba(139, 0, 0,.9)","rgba(0, 0, 0,.999)","rgba(255, 255, 255,.8)"]

var testimonialTextArray=[
  '"Avago Technologies is a leading provider of high-speed serial transceiver (SerDes) technology\
   and silicon solutions for wireless and wired communications infrastructure equipment," said Harold Gomard\
   , Director of Technical Marketing, Avago.',

  '"Mobiveil’s RapidIO 10xN design win demonstrates that wireless infrastructure\
   applications are migrating to next generation RapidIO designs," said Rick O’Connor,\
   Executive Director at RapidIO.org.',
   '"Mobiveil’s UNH certified NVM Express IP helps us keep pace with the complexities \
   of this new standard without dedicating our own engineering resources to do so,"\
   said Dmitriy Gusev, CEO of CloudWave.',
]


var testimonialText=document.getElementById("testimonialText");
// console.log(testimonialText,testimonialTextArray);
function testimonialsColorChange(){
  // console.log(testimonials)
  testimonials[0].style.backgroundColor=color_array[colorIndex];
 
  testimonialText.innerHTML= testimonialTextArray[testimonialIndex];
  if(colorIndex==2){
    testimonials[0].style.color="rgba(0, 0, 0,.9)";
  }
  else
  {
    testimonials[0].style.color="white";
  }
  colorIndex++;
  testimonialIndex++
  if(colorIndex==color_array.length){colorIndex=0;}
  if(testimonialIndex==testimonialTextArray.length){testimonialIndex=0;}
  setTimeout(testimonialsColorChange,5000);
}
testimonialsColorChange();
/* --Text Slider -- */

/* Testimonial text animation */

