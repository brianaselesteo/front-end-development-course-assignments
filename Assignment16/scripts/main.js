$(document).ready(function(){


$('#btnShow').on("click", function() {
  $("section>aside").show()
  console.log("btnShow");
});

$('#btnHide').on("click", function() {
  $("section>aside").hide()
  console.log("btnHide");
});

$('#btnToggle').on("click", function() {
  $("section>aside").toggle()
});

    $(".part3").show();

$('#btnFadeIn').fadeIn()

});
