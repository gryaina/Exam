  function validation (){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var textArea = document.getElementById('textarea').value;

    var nameError = document.getElementById('name-error');
    var emailError = document.getElementById('email-error');
    var textAreaError = document.getElementById('textarea-error');

    var nameRegEx = /[A-Za-z\-]+/;
    var emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var textAreaRegEx = /\S/;

    var validationPassed = true;

    if (name.match(nameRegEx)) {
      nameError.style.display = "none";
    } else {
      nameError.style.display = "block";
      validationPassed = false;
    }

    if (email.match(emailRegEx)) {
      emailError.style.display = "none";
    } else {
      emailError.style.display = "block";
      validationPassed = false;
    }

    if (textArea.match(textAreaRegEx)) {
      textAreaError.style.display = "none";
    } else {
      textAreaError.style.display = "block";
      validationPassed = false;
    }

    if(validationPassed === true) {
      window.location.href = "success.html";
    }
  }

  var button = document.getElementById('submitContact');
  button.addEventListener('click', validation);
