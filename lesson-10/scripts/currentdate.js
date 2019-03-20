
var d = new Date();
var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

document.getElementById("currentDate").innerHTML = days[d.getDay()] + ' '+ months[d.getMonth()] +' '+ d.getDate() +' '+ d.getFullYear();