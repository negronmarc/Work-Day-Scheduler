var mo = moment();
var currentDate = mo.format("dddd, MMMM Do");

$("#currentDay").text(currentDate);

var currentTime = mo.hour();
console.log(currentTime);

function schedulerColor() {
  $(".time-block").each(function () {
      var timeBlock = parseInt($(this).attr("id").split("hour")[1]);

      if (timeBlock < currentTime) {
          $(this).addClass("past");
      }
      else if (timeBlock === currentTime) {
          $(this).addClass("present");
      }
      else {
          $(this).addClass("future");
      }
  })
};

schedulerColor();

// Local storage

var textBlk1 = document.querySelector("#textblock1");
var textBlk2 = document.querySelector("#textblock2");
var textBlk3 = document.querySelector("#textblock3");
var textBlk4 = document.querySelector("#textblock4");
var textBlk5 = document.querySelector("#textblock5");
var textBlk6 = document.querySelector("#textblock6");
var textBlk7 = document.querySelector("#textblock7");
var textBlk8 = document.querySelector("#textblock8");
var textBlk9 = document.querySelector("#textblock9");

function textSave1 () {
  textBlk1.addEventListener('input', function (event) {

  localStorage.setItem("text", event.target.value);
  });

  textBlk1.value = localStorage.getItem("text");
};

function textSave2 () {
  textBlk2.addEventListener('input', function (event) {

  localStorage.setItem("info", event.target.value);
  });

  textBlk2.value = localStorage.getItem("info");
};

function textSave3 () {
  textBlk3.addEventListener('input', function (event) {

  localStorage.setItem("arg", event.target.value);
  });

  textBlk3.value = localStorage.getItem("arg");
};

function textSave4 () {
  textBlk4.addEventListener('input', function (event) {

  localStorage.setItem("content", event.target.value);
  });

  textBlk4.value = localStorage.getItem("content");
};

function textSave5 () {
  textBlk5.addEventListener('input', function (event) {

  localStorage.setItem("script", event.target.value);
  });

  textBlk5.value = localStorage.getItem("script");
};

function textSave6 () {
  textBlk6.addEventListener('input', function (event) {

  localStorage.setItem("body", event.target.value);
  });

  textBlk6.value = localStorage.getItem("body");
};

function textSave7 () {
  textBlk7.addEventListener('input', function (event) {

  localStorage.setItem("line", event.target.value);
  });

  textBlk7.value = localStorage.getItem("line");
};

function textSave8 () {
  textBlk8.addEventListener('input', function (event) {

  localStorage.setItem("doc", event.target.value);
  });

  textBlk8.value = localStorage.getItem("doc");
};

function textSave9 () {
  textBlk9.addEventListener('input', function (event) {

  localStorage.setItem("main", event.target.value);
  });

  textBlk9.value = localStorage.getItem("main");
};


