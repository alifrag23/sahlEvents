//?===============================================loading
$(function () {
  $(".loader").fadeOut(2000, function () {
    $(".loading").slideUp(1000, function () {
      $("body").css("overflow", "auto");
      $(".loading").remove();
    });
  });
});
//?===============================================sidebar
$(".menuBtn").click(function () {
  $(".sidebar").animate({ width: "toggle" }, 2000, function () {
    $(".menuw").toggle(1000);
  });
});
let offsetDuration = $("#duration").offset().top;
$(document).scroll(function () {
  let offsetContact = $("#details").offset().top;
  let windowScrollTop = $(window).scrollTop();
  if (windowScrollTop > offsetDuration) {
    $(".menus i").css("cssText", "color:black !important");
    $(".menus p").css("cssText", "color:black !important");
    $(".scrollUp").fadeIn(1000);
  } else {
    $(".menus i").css("cssText", "color:white !important");
    $(".menus p").css("cssText", "color:#39b54a !important");
    $(".scrollUp").fadeOut(1000);
  }

  if (
    windowScrollTop > offsetContact - 40 ||
    windowScrollTop < offsetDuration - 50
  ) {
    $(".menus i").css("cssText", "color:white !important");
    $(".menus p").css("cssText", "color:#39b54a !important");
  } else {
    $(".menus i").css("cssText", "color:black !important");
    $(".menus p").css("cssText", "color:black !important");
  }
});
//?===============================================scrollSmoth
$(".listmenue li a").click(function ({ target }) {
  let targetHref = $(target).attr("href");
  let sectionOffset = $(targetHref).offset().top;
  $("body,html").animate({ scrollTop: sectionOffset }, 2000);
});
//?===============================================scrollUp
let homeOffset = $(".home").offset().top;
let windowScrollTop = $(window).scrollTop();
$(".scrollUp").click(function () {
  $("body,html").animate({ scrollTop: homeOffset }, 2000);
});

//?===============================================Duration
$(".duration-part h3").click(function ({ target }) {
  // // console.log(durationID);
  // $(this).not(durationtarget).slideUp(1000);
  $(target).next().slideToggle(1000);
  $(".duration-part p").not($(this).next()).slideUp(1000);
});

// ===============
window.onload = function () {
  countDownToTime("10 october 2024 9:56:00");
};

function countDownToTime(countTo) {
  let futureDate = new Date(countTo);
  futureDate = futureDate.getTime() / 1000;

  let now = new Date();
  now = now.getTime() / 1000;

  timeDifference = futureDate - now;

  let days = Math.floor(timeDifference / (24 * 60 * 60));
  let hours = Math.floor((timeDifference - days * (24 * 60 * 60)) / 3600);
  let mins = Math.floor(
    (timeDifference - days * (24 * 60 * 60) - hours * 3600) / 60
  );
  let secs = Math.floor(
    timeDifference - days * (24 * 60 * 60) - hours * 3600 - mins * 60
  );

  $(".days").html(`${days} D`);
  $(".hours").html(`${hours} h`);
  $(".minutes").html(`${mins} m`);
  $(".seconds").html(`${secs} s`);

  setInterval(function () {
    countDownToTime(countTo);
  }, 1000);
}
//?===============================================textMessage
$("#textMessage").keyup(function () {
  let textMessageValue = $(this).val().length;
  let limitChar = 100;
  if (textMessageValue <= limitChar - 1) {
    $("#numText").text(limitChar - textMessageValue);
  } else {
    $("#numText").text("Not available character");
  }
});
//?===============================================settingBar
$(".colors span").click(function ({ target }) {
  let color = $(target).css("color");
  let bg = $(target).css("background-color");
  $(".changes").css("background-color", `${bg}`);
});
$(".icons ").click(function () {
  $(".info").animate({ width: "toggle" }, 2000);
});
