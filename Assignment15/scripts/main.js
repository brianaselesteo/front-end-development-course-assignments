$(document).ready(function(){


$("#btnOne").on("click", buttonclicked);
function buttonclicked(){
  alert("it works");
};

/* alternative way
$("#btnOne").on("click",function buttonclicked()
{alert("hello");
  });*/


$("#btnTwo").on("click", update);
function update() {$(".update-html").html("<h3>Hello World!</h3>");
}


$("#btnThree").on("click", three);
function three() {$("#text-update").val("Hello World");
}


$("#btnCopyHtml").on("click", part4);
function part4 () {
var copiedHtml = $(".copy-html").html()
$(".paste-html").html(copiedHtml);
}

$("#btnCopyValues").on("click", part6);
function part6 () {
  var copiedValue = $("#copy-text").val()
  $("#paste-text").val(copiedValue);
}

});
