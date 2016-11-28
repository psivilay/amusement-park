$(document).ready(function() {
  $("#user-info").submit(function(event) {
    event.preventDefault();
    var age = parseInt($("#user-age").val());
    var height = $("#user-height").val();

    if (age >= 16 || height >= "5") {
      $("#older-taller-ride").show();
      $("#baby-ride").hide();
    } else {
      alert("Sorry! You're not old enough or tall enough. But here's something we think you can handle...lol");
      $("#older-taller-ride").hide();
      $("#baby-ride").show();
    }
  });
});
