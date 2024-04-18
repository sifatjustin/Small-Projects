let currentDate = document.getElementById("currDate");
let inputDate = document.getElementById("inputDate");
let displayAge = document.getElementById("actualAge");
let today = new Date();
currentDate.innerText = `${today.toLocaleDateString("en-UK")}`;

const button = document.getElementById("button");
button.addEventListener("click", function () {
  var inputDateString = inputDate.value;
  var inputDateParts = inputDateString.split("/");
  var birthDay = parseInt(inputDateParts[0]);
  var birthMonth = parseInt(inputDateParts[1]);
  var birthYear = parseInt(inputDateParts[2]);

  var todayDay = today.getDate();
  var todayMonth = today.getMonth() + 1; // Adding 1 because getMonth() returns zero-based month index
  var todayYear = today.getFullYear();

  var age = todayYear - birthYear;
  if (
    todayMonth < birthMonth ||
    (todayMonth === birthMonth && todayDay < birthDay)
  ) {
    age--;
  }

  displayAge.style.visibility = "visible";
  displayAge.innerText = `You are ${age} years old.`;
});
