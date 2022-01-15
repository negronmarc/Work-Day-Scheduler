var mo = moment();
var currentDate = mo.format("dddd, MMMM Do");

$("#currentDay").text(currentDate);

var currentTime = mo.hour();
console.log(currentTime);

function schedulerColor() {
  $(".time-block").each(function () {
    var timeBlock = parseInt($(this).attr("id").split("-")[1]);

    if (timeBlock < currentTime) {
      $(this).addClass("past");
    } else if (timeBlock === currentTime) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });
}

// Local storage

function clickBtn() {
  var btn = $(this);
  var blockEl = btn.parent();
  var inputEl = find("textarea");
  var inputValue = inputEl[0].value;
  var hour = blockEl.attr("id");
  localStorage.setItem(hour, inputValue);
}

for (var hour = 9; hour < 18; hour++) {
  var blockEl = $("#hour-" + hour);
  var inputEl = blockEl.find("textarea");
  inputEl[0].value = localStorage.getItem("hour-" + hour);
}

$(".saveBtn").on("click", clickBtn);

schedulerColor();
