var call = new XMLHttpRequest();
call.open('GET', 'https://api.spacexdata.com/v3/launches/upcoming');
call.send();
call.onload = function() {
  var myData = JSON.parse(call.responseText);

  var date = document.querySelector('.launch-date');
  var launch = new Date(myData[0].launch_date_utc);
  date.textContent = `${launch.toString().substring(4,15)}`;
};
