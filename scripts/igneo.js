"use strict";

// A wrapper for calling smartbg with the data-src attribute as the URL.
// @param{function} cf A "callfront" function: executed before load is made.
// @param{function} cb The callback.
$.fn.smarterbg = function(cf, cb) {
  // Create an img so the browser will download the image.
  url = $(this).data('src');
  $("<img />").attr("src", url).load(function() {
    if (typeof cf === "function") {
      cf.apply(null, this);
    }
    $(this).css("backgroundImage", "url(" + url + ")");
    if (typeof cb === "function") {
      cb(this);
    }
  });
  return this;
}

$(document).ready(function() {
  var cutoff = $(window).width() <= 768 ? 230 : 380;
  $(window).scroll(function() {
    var top = $(document).scrollTop();
    top > cutoff ? $(".header").addClass("solid") :
      $(".header").removeClass("solid");
  });
});