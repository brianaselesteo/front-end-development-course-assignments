$(document).ready(function(){

$(".error").hide();

$(".input-group").filter(':even').addClass('even');

$(".input-group input").on("blur", function(){
var input= $(this);
var msg = input.closest(".input-group").find(".requiredMsg");

if (input.val() === ""){
  msg.fadeIn();
}else{
  msg.fadeOut();
}

});

$("#emailAddress").on("blur", function(){
  var input = $(this);
  var inputValue = input.val();
var msg = input.closest(".input-group").find(".emailMsg");

  if (inputValue.indexOf("@") === -1 || inputValue.indexOf(".com")=== -1){
    msg.fadeIn();
  }else{ msg.fadeOut();
  }

})


});
