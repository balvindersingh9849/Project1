$(document).ready(function() {
    $(".transition").mouseenter(function() {
      $(this).css({
        // backgroundColor: "#920301",
        color: "#920301"
      });
    }).mouseleave(function() {
      $(this).css({
        // backgroundColor: "#FFBE01",
        color: "#928A01"
      });
    });
  });