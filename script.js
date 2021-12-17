var timeElement = document.getElementById("date-display");
var descriptionEl = document.querySelector("description");
var saveBtn = document.querySelector("saveBtn");
var timeBlock = document.getElementsByClassName("time-block");


var calendarItems = localStorage.getItem("description")


// handle displaying the time
function displayDate() {
    var today = moment().format("[Today is] dddd MMMM Do YYYY h:mm:ss a");
    timeElement.textContent=today;
  }
  setInterval(displayDate, 1000);

  displayDate();

 // function populateTimeBlock() {




// //display time block in past, present, future
// function evaluateTime() {

  

  // WHEN I click the save button for the timeblock THEN the text for that event is saved in local storage
function saveCalendarEl() {
  var savedcalendarEl = {
    descriptionEl: descriptionEl.innerHTML.trim()
  };
localStorage.setItem("savedCalendarEl", JSON.stringify(calendarEl));
}

saveBtn.addEventListener("click", function(event) {
  event.preventDefault();
  saveCalendarEl();
});


function init() {

  var savedCalendarEl = JSON.parse(localStorage.getItem("saveCalendarEl"));
}
rendersavedCalendarEl();
