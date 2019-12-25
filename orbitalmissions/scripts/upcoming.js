var call = new XMLHttpRequest();
call.open('GET', 'https://api.spacexdata.com/v3/launches/upcoming');

call.send();
call.onload = function() {
  var myData = JSON.parse(call.responseText);
  var mainContainer = document.querySelector('.upcoming-box');


  for (i = 0; i < myData.length; i++) {
    var launchBox = document.createElement('div');
    launchBox.classList.add("launch-box");
    var missionName = document.createElement('h2');
    var date = document.createElement('p');
    var launch = new Date(myData[i].launch_date_utc);
    var rocketName = document.createElement('p');
    var flightNr = document.createElement('p');
    var about = document.createElement('p');

    missionName.textContent = myData[i].mission_name;
    date.textContent = "Launch date: " + launch.toString().substring(4,15);
    rocketName.textContent = "Rocket: " + myData[i].rocket.rocket_name;
    flightNr.textContent = "Flight number: " + myData[i].flight_number;
    about.textContent = myData[i].details;

    launchBox.appendChild(missionName);
    launchBox.appendChild(date);
    launchBox.appendChild(rocketName);
    launchBox.appendChild(flightNr);
    launchBox.appendChild(about);
    mainContainer.appendChild(launchBox);
  }
};
