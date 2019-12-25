var call = new XMLHttpRequest();
call.open('GET', 'https://api.nasa.gov/planetary/apod?api_key=mOLZlbLMJTAthiQWJy20AWkA3JYaZWgsIEDKgkbk');
call.send();
call.onload = function() {
  var myData = JSON.parse(call.responseText);

  var container = document.querySelector('.pod-box');

  var img = document.createElement('img');
  var date = document.createElement('p');
  var title = document.createElement('h2');
  var explanation = document.createElement('p');
  var copyright = document.createElement('p');

  img.setAttribute("src", myData.url);
  img.setAttribute("alt", "Selected astronomy picture of the day.");
  img.classList.add("pod");
  date.textContent = myData.date;
  date.classList.add("date");
  title.textContent = myData.title;
  explanation.textContent = myData.explanation;
  copyright.textContent = myData.copyright;

  container.appendChild(img);
  container.appendChild(date);
  container.appendChild(title);
  container.appendChild(explanation);
  container.appendChild(copyright);
};
