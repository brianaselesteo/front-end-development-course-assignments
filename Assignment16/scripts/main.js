$(document).ready(function(){


$('#btnShow').on("click", function() {
  $(".display-basic").show()
  console.log("btnShow");
});

$('#btnHide').on("click", function() {
  $(".display-basic").hide()
  console.log("btnHide");
});

$('#btnToggle').on("click", function() {
  $(".display-basic").toggle()
});

    $(".part3").show();

$('#btnFadeIn').on("click", function(){
  $(".display-fade").fadeIn();
})

$('#btnFadeOut').on('click', function() {
    $(".display-fade").fadeOut();
})

$('#btnFadeToggle').on('click', function() {
    $(".display-fade").fadeToggle();
})

$('#btnSlideDown').on('click', function () {
    $('.display-slide').slideDown(500);
});
$('#btnSlideUp').on('click', function () {
    $('.display-slide').slideUp(100);
});
$('#btnSlideToggle').on('click', function () {
    $('.display-slide').slideToggle();
});

});
