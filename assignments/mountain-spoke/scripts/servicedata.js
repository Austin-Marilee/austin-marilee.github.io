var aside = document.querySelector('aside');
var requestURL = 'scripts/data/servicedata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    var townData = request.response;
    showData(townData);
}
function showData(jsonObj) {
    var data = jsonObj['servicePkgs'];

    for (var i = 0; i < data.length; i++) {
        var myArticle = document.createElement('article');
        var myDiv = document.createElement('div');
        var myH5 = document.createElement('h5');
        var myPara1 = document.createElement('h6');
        var myPara2 = document.createElement('h6');
        var myList = document.createElement('ul');
        var myPara3 = document.createElement('p');

        myH5.textContent = data[i].name;
        myPara1.textContent = data[i].type;
        myPara2.textContent = 'Price: ' + data[i].price;
        myPara3.textContent = '*' + data[i].disclaimer;

        var townEvents = data[i].items;
        for (var j = 0; j < townEvents.length; j++) {
            var listItem = document.createElement('li');
            listItem.textContent = townEvents[j];
            myList.appendChild(listItem);
        }

        myDiv.appendChild(myH5);
        myDiv.appendChild(myPara1);
        myDiv.appendChild(myPara2);
        myDiv.appendChild(myList);
        myDiv.appendChild(myPara3);

        myArticle.appendChild(myDiv);
        aside.appendChild(myArticle);
    }
}
