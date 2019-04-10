var article = document.querySelector('article');
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
    var townData = request.response;
    showData(townData);
}

function showData(jsonObj) {
    var data = jsonObj['towns'];

    for (var i = 0; i < data.length; i++) {
        var name = data[i].name;
        if ((name.includes("Preston") || name.includes("Soda Springs") || name.includes("Fish Haven")) == false) {
            continue;
        }
        var myArticle = document.createElement('div');
        var myH5 = document.createElement('h5');
        var myPara1 = document.createElement('h6');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myPara4 = document.createElement('p');
        var myPhoto = document.createElement('img');

        myH5.textContent = data[i].name;
        myPara1.textContent = data[i].motto;
        myPara2.textContent = 'Year Founded: ' + data[i].yearFounded;
        myPara3.textContent = 'Current Population: ' + data[i].currentPopulation;
        myPara4.textContent = 'Average Rainfall: ' + data[i].averageRainfall;


        if (name.includes("Fish Haven")) {
            myPhoto.src = 'images/home2.jpg'
            myPhoto.setAttribute('class', 'homePhoto');
            myPhoto.setAttribute('alt', 'Fish Haven Photo');
            myArticle.style.order = "3";
        }

        if (name.includes("Preston")) {
            myPhoto.src = 'images/home1.jpg'
            myPhoto.setAttribute('class', 'homePhoto');
            myPhoto.setAttribute('alt', 'Preston Photo');
            myArticle.style.order = "1";
        }

        if (name.includes("Soda Springs")) {
            myPhoto.src = 'images/home3.jpg'
            myPhoto.setAttribute('class', 'homePhoto');
            myPhoto.setAttribute('alt', 'Soda Springs Photo');
            myArticle.style.order = "2";
        }

        myArticle.appendChild(myH5);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myPara4);
        myArticle.appendChild(myPhoto);
        article.appendChild(myArticle);
    }
}