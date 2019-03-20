var article = document.querySelector('article');
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  var townBuild = request.response;
  townInfo(townBuild);
}

function townInfo(jsonObj) {
  var info = jsonObj['towns'];

  for (var i = 0; i < info.length; i++) {
    if (i === 0 || i === 2 || i === 3 || i === 6) {
      continue;
    }
    var townArticle = document.createElement('article');
    var townName = document.createElement('h5');
    var townMotto = document.createElement('h6');
    var yearFounded = document.createElement('p');
    var currentPopulation = document.createElement('p');
    var averageRain = document.createElement('p');
    var townPic = document.createElement('img');

    townName.textContent = info[i].name;
    townMotto.textContent = info[i].motto;
    yearFounded.textContent = 'Year Founded: ' + info[i].yearFounded;
    currentPopulation.textContent = 'Current Population: ' + info[i].currentPopulation;
    averageRain.textContent = 'Average Rainfall: ' + info[i].averageRainfall;

    townArticle.appendChild(townName);
    townArticle.appendChild(townMotto);
    townArticle.appendChild(yearFounded);
    townArticle.appendChild(currentPopulation);
    townArticle.appendChild(averageRain);
    townArticle.appendChild(townPic);

   if (i === 4)
      townPic.src = 'image/hometown.jpeg'
      townPic.setAttribute('class', 'homepic2');
      townPic.setAttribute('alt', 'Preston Town');
   if (i === 5)
      townPic.src = 'image/sodaspring.jpeg'
      townPic.setAttribute('class', 'homepic3');
      townPic.setAttribute('alt', 'Beautiful Garden');
   if (i === 1)
      townPic.src = 'Image/fishhaven.jpeg'
      townPic.setAttribute('class', 'homepic1');
      townPic.setAttribute('alt', 'Fish Haven');
    
      article.appendChild(townArticle);
  }
}