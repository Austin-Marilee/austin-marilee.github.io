window.onload=function() {

var d = new Date();
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var n = weekday[d.getDay()];
var m = month[d.getMonth()];

document.getElementById("currentdate").innerHTML = n + ", " + d.getDate() + " " + m + " " + d.getFullYear();

}