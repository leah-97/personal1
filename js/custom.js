$(function () {
  function slide() {
    $(".slide li").removeClass("active");
    $(".slide").animate({ "margin-left": "-100%" }, function () {
      $(".slide li:first").appendTo(".slide");
      $(".slide").css({ "margin-left": "0px" });
      $(".slide li:first").addClass("active");
    });
  }

  setInterval(slide, 5000);

  setInterval(function () {
    $("h1 img").toggleClass("on");
  }, 3000);
});
