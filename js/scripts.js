$(document).ready(function() {
  $("button#remove").click(function() {
    console.log("body");
    $("p").removeClass("highlight");
  });
  $("#p1").click(function() {
    console.log("p1");
    $("p").removeClass("highlight");
    $("#p1").addClass("highlight");
  });
  $("#p2").click(function() {
    console.log("p2");
    $("p").removeClass("highlight");
    $("#p2").addClass("highlight");
  });
});
