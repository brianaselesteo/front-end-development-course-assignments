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
    $(".display-fade").toggle();
})


});
