//array of video source files to loop through
var videoSources = ["public/media/SmartCourageous.mp4","public/media/Hilton.mp4", "public/media/Batman.mp4"];

var currentIndex = 0;
// listener function changes src
function myNewSrc() {
  var myVideo = document.getElementsByTagName('video')[0];
  myVideo.src = videoSources[currentIndex];
  myVideo.load();
}


// add a listener function to the ended event
function myAddListener(){
  var myVideo = document.getElementsByTagName('video')[0];
  currentIndex = (currentIndex+1) % videoSources.length;
  myVideo.src = videoSources[currentIndex];
  myVideo.addEventListener('ended', myNewSrc, false);

}

//https://tomelliott.com/html-5/changing-html5-video-javascript-jquery
