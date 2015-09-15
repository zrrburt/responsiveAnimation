TweenLite.defaultEase = Power1.easeInOut;

var tl = new TimelineMax({paused:true});
tl.set("#instructions", {text:"Start with 3 boxes <code>{position:absolute;}</code>", immediateRender:true})
.set("#instructions", {text:"Move boxes to <code>{left:20%, top:30%}</code> to place their origins in the center"}, 0.0001)
.to("#next", 0.1, {autoAlpha:0})
.staggerTo(".orange", 1, {left:"20%", top:"30%"}, 0.2)
.staggerTo(".green", 1, {left:"80%", top:"60%"}, 'cta-=1')
.to("#next", 0.1, {autoAlpha:1, yoyo:true, repeat:2})
.addPause()

.set("#instructions", {text:"Tween to <code>{xPercent:-50, yPercent:-50}</code> to get their centers aligned"}, "+=0.01")
.to("#next", 0.1, {autoAlpha:0})
.staggerTo(".box", 0.5, {xPercent:-50, yPercent:-50}, 0.1)
.to("#next", 0.1, {autoAlpha:1, yoyo:true, repeat:2})
.addPause()

.set("#instructions", {text:"Now a <code>{x:150}</code> tween will always be 150px from the center"}, "+=0.01")
.to("#next", 0.1, {autoAlpha:0})
.staggerTo(".box", 0.5, {x:150}, 0.1)
.to("#next", 0.1, {autoAlpha:1, yoyo:true, repeat:2})
.addPause()

.set("#instructions", {text:"Bonus! <code>{rotation:360}</code>, still uses a center transform origin!"}, "+=0.01")
.to("#next", 0.1, {autoAlpha:0})
.staggerTo(".box", 0.8, {rotation:360}, 0.2)
.set("#next", {text:"restart"})
.to("#next", 0.1, {autoAlpha:1});


//jQueryUI Slider to simulate change in screen size

$("#next").on("click", function() {
  tl.play();
  if (tl.progress() === 1) {
    tl.pause(0);
  }
})

var $device = $(".device");
$("#slider").slider({
  range: false,
  min: 40,
  max: 95,
  step:.02,
  value:80,
  slide: function ( event, ui ) {
    $device.css("width", ui.value + "%");
  }
});
TweenLite.set(".box", {force3D:true});