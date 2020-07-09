//define functions here

function getIt() {
  $('p').on("click", function () {
    alert("Hey!");
  })
   }
   
   function frameIt() {
     $('img').on("load", function() {
       $('img').addClass("tasty");
     })
   }

function pressIt() {
  $('#typing').on("keydown", function(press) {
    if (press.which === 71) {
      alert("You have entered g.");
    }
  })
}

$(document).ready(function(){

// call functions here

});
