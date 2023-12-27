var count = document.getElementsByClassName("counter-number")
var inc =[];
function intervalFunc(){
for(let i=0; i<count.length; i++){
  inc.push(1)
  if(inc[i] != count[i].getAttribute("max-data")){
    inc[i]++
  }
count[i].innerHTML = inc[i] + "+"
}
}
var main = document.getElementById("counter-area")
window.onscroll = function(){
  var timer = setInterval(()=>{
    var topElem = main.offsetTop;
  var btmElem = main.offsetTop + main.clientHeight;
  var topScreen = window.pageYOffset;
  var btmScreen = window.pageYOffset + window.innerHeight;
  if(btmScreen > topElem && topScreen < btmElem ){
   intervalFunc()
  } 
  else{
    clearInterval(timer)
    for(let i=0; i<count.length; i++){
      count[i].innerHTML= 1 + "+";
      inc = []
    }
  }
  },100)
 
}




$('.mobile-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  arrows: true,
  dots: false,
  speed: 300,
  centerPadding: '30px',
  infinite: true,
  autoplaySpeed: 2000,
  autoplay: true,
  pauseOnHover: true,
  responsive: [
      {
          breakpoint: 1104,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
    centerPadding: '0px',
              
          }
      },
      {
          breakpoint: 568,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
    centerPadding: '0px',
    arrows: false,
              
          }
      }
  ]

});
$('.slick-slide').removeAttr('tabindex');
$('.slick-dots').removeAttr('role');