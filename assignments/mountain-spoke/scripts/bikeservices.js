var section = document.querySelector('section');
var requestURL = 'scripts/data/servicedata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
    var serviceData = request.response;
    showData = (serviceData);
}
function showData(jsonObj) {
    var serviceOffer = jsonObj['services'];

    for (var i = 0; i < serviceOffer.length; i++) {
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myPara4 = document.createElement('p');
        var myList = document.createElement('ul');

        myH2.textContent = serviceOffer[i].name;
        myPara1.textContent = serviceOffer[i].type;
        myPara2.textContent = serviceOffer[i].price;
        myPara3.textContent = serviceOffer[i].disclaimer;
        myPara4.textContent = 'Services Offered:';

        var listOffers = serviceOffer[i].items;
        for (var j = 0; j < listOffers.length; j++) {
            var listItem = document.createElement('li');
            listItem.textContent = listOffers[j];
            myList.appendChild(listItem);
        }

        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myPara4);
        myArticle.appendChild(myList);

        section.appendChild(myArticle);
    }
}
