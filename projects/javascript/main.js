var body = document.querySelector("body")
var darkCSS = "../css/layout-dark.css"
var lightCSS = "../css/layout.css"
var contact = document.querySelector("#DarkMode1")
var project = document.querySelector("#Projects")
var section = document.querySelectorAll("Section")
var nav = document.querySelector("#NavBar")

function darkMode(){
  if(localStorage.mode=="dark"){
    localStorage.mode="light"
    var oldLink = document.getElementsByTagName("link").item(0)
    var newLink = document.createElement("link")
    newLink.setAttribute("href", lightCSS)
    newLink.setAttribute("rel", "stylesheet")
    newLink.setAttribute("type", "text/css")
    document.getElementsByTagName("head").item(0).replaceChild(newLink, oldLink)
  } 
  else{
    localStorage.mode="dark"
    var oldLink = document.getElementsByTagName("link").item(0)
    var newLink = document.createElement("link")
    newLink.setAttribute("href", darkCSS)
    newLink.setAttribute("rel", "stylesheet")
    newLink.setAttribute("type", "text/css")
    document.getElementsByTagName("head").item(0).replaceChild(newLink, oldLink)
  } 
}
if(localStorage.mode=="dark"){
    var oldLink = document.getElementsByTagName("link").item(0);
    var newLink = document.createElement("link")
    newLink.setAttribute("rel", "stylesheet")
    newLink.setAttribute("type", "text/css")
    newLink.setAttribute("href", darkCSS)
    document.getElementsByTagName("head").item(0).replaceChild(newLink, oldLink)
} 
else{
  localStorage.mode = "light"
}
var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 2300
});
  addEventListener("scroll", () => {
    var body_height = body.getBoundingClientRect().top
    console.log(body_height)
    if(body_height <= -10){
      if(localStorage.mode == "light"){
      nav.style.boxShadow = "0px 0px 5px grey"
    }
    }
    if(body_height >= -10){
      nav.style.boxShadow = "0px 0px 0px rgba(0,0,0,0.1)"   
    }
  })
  var introPosition = section[4].getBoundingClientRect().top
  var home_height = section[2].offsetHeight
  addEventListener("load",()=>{
    console.log("loaded")
  })
  
  var body_height = body.getBoundingClientRect().top
    console.log(body_height)
    if(body_height <= -10){
      nav.style.boxShadow = "0px 0px 5px rgba(0,0,0,0.2)"
    }
    else{
      nav.style.boxShadow = "0"   
    }


function contacts() {
    document.body.style.overflow = "hidden"
    var about = document.getElementById("aboutme")
    about.style.display = "flex"
    about.style.position = "Fixed"
    about.style.top = 0
    about.style.zIndex = 100
    var sub = document.getElementById("sub-container");
    var sub1 = document.getElementById("sub-container-1");
    TweenMax.fromTo(about, 2, { height: "0%", opacity: "0%" }, { height: "100%", opacity: "100%" })
    TweenMax.to(sub, 2, {display: "flex"})
    TweenMax.to(sub1, 2, {display: "flex"})
}
function hideContact() {
  document.body.style.overflow = "scroll";
  var sub = document.getElementById("sub-container");
  var sub1 = document.getElementById("sub-container-1");
  var about = document.getElementById("aboutme");
  TweenMax.fromTo(about, 2, { height: "100%", opacity: "100%" },{ height: "0%", opacity: "0%" })
  TweenMax.to(sub, 2, {display: "none"})
  TweenMax.to(sub1, 2, {display: "none"})
  about.style.zIndex= -100
}
$(document).keyup(function(e) {
  if (e.key === "Escape") {
    if(e.key == "Escape"){
      hideContact()
     }
 }
});
/*
var card = document.getElementById("flexBox");
var tb = document.getElementById("topButton");
var butBool = true
console.log(card.getBoundingClientRect().bottom)
addEventListener("scroll", () => {
    if (butBool) {
        if (card.getBoundingClientRect().bottom < 100) {
            console.log("came")
            butBool = false
            TweenMax.fromTo(tb, 1, { marginRight: '-45px' }, { marginRight: '10px' })
        }
    }
    if (card.getBoundingClientRect().bottom > 100) {
        butBool = true
        TweenMax.to(tb, 1, { marginRight: '-50px' })
    }
})
addEventListener("keydown", () => {})
*/

/*removing vanilla scroll effect
addEventListener("scroll",e=>{
  var query = document.querySelectorAll("#leftcontent")
  length = query.length
  for(i=0;i<query.length;i++){
    var introPosition = query[i].getBoundingClientRect().top
    var screen = window.innerWidth
    console.log(screen)
    if (screen > 1000){
      if (introPosition >= 350){
        query[i].style.opacity = 0
        query[i].style.width = "0%"
      }
      else{
        query[i].style.opacity = 1
        query[i].style.width = "50%"
      }
    }
    else{
      if (introPosition >= 350){
        query[i].style.opacity = 0
        query[i].style.width = "0%"
      }
      else{
        query[i].style.opacity = 1
        query[i].style.width = "100%"
      }
    }
  }
})

addEventListener("keydown",e=>{
  var things = ["#Home","#Education","#Experience","#Project", "#Contact"]
  console.log(e["key"])
  if (e["key"] == "a" || e["key"] == "A"){
    document.body.style.overflow = "hidden"
    console.log("About me")
    document.getElementById("Contact").style.display = "flex"
  } 
  if (e["key"] == "f" || e["key"] == "F"){
    var body = document.getElementById("body")
    if(i==0){
      i=1
      if (body.requestFullscreen) {
        body.requestFullscreen()
      } else if (body.webkitRequestFullscreen) {
        body.webkitRequestFullscreen()
      } else if (body.msRequestFullscreen) { 
        body.msRequestFullscreen()
      }
    }
    //closeFullScreen
    else if(i==1){
      console.log("exitfullscreen")
      i=0
      if(document.exitFullscreen) {
        document.exitFullscreen()
      } else if(document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
      } else if(document.webkitExitFullscreen) {
        document.webkitExitFullscreen()
      }
    }
    else{alert("something went wrong. Try to refresh the page.")}  
  }
  if (e["key"] == "c" || e["key"] == "x" || e["key"] == "q" || e["key"] == "C" || e["key"] == "X" || e["key"] == "Q"){
    if(document.getElementById("aboutme").style.display == "flex"){
      document.body.style.overflow = "scroll";
      console.log("Closed");
      document.getElementById("aboutme").style.display = "none"
    }
  }
})*/