var section = document.getElementById("events");
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
var eventdetails = request.response;
populate(eventdetails);
            
function populate(eventdetails) {
var townevents = eventdetails['towns'];
for (var i = 0; i < townevents.length; i++ ) {
if (townevents[i].name === 'Preston') {
var article = document.createElement("article");
var list = document.createElement("ul");
var towneventlist = townevents[i].events;

for (var x = 0; x < towneventlist.length; x++) {
var listItem = document.createElement("li");
listItem.textContent = towneventlist[x];
list.appendChild(listItem);
}

article.appendChild(list);
section.appendChild(article);
}
}
}
}
