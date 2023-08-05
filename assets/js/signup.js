
$(document).ready(function(){
  var scrollTopButton = document.getElementById("scrollToTopButton");
  window.onscroll = function () { scrollFunction() };

  function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTopButton.style.display = "block";
  } else {
    scrollTopButton.style.display = "none";
  }
}

$("#scrollToTopButton").click(function(){
$('html ,body').animate({scrollTop : 0},800)
});
});


$(".toggle-password").click(function() {
 $(this).toggleClass("fa-eye fa-eye-slash");
 if ($("#pass_signup").attr("type") == "password") {
  $("#pass_signup").attr("type", "text");
 } else {
   $("#pass_signup").attr("type", "password");
 }
});


$(".toggle-password2").click(function() {
 $(this).toggleClass("fa-eye fa-eye-slash");
 if ($("#pass_signup2").attr("type") == "password") {
  $("#pass_signup2").attr("type", "text");
 } else {
   $("#pass_signup2").attr("type", "password");
 }
});



var namerror = false;
var emailerror = false;
var passworderror = false;
var confirmerror = false;
var code = Math.floor(1000 + Math.random() * 9000)
var strongPass = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})");
var btnclicked = false
const mailformat = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


function DisplayResults(e) {
  e.preventDefault(); // Prevent the default form submission
  var name = document.forms["regform"]["name"].value;
  var email = document.forms["regform"]["email"].value;
  var password = document.forms["regform"]["password"].value;
  var confirmpassword = document.forms["regform"]["retypepassword"].value;
  var error = document.getElementById("errormessage");

  if (name.length == 0) {
    // Handle validation and error display for name
  } else if (email.length == 0) {
    // Handle validation and error display for email
  } else if (!mailformat.test(email)) {
    // Handle validation and error display for email format
  } else if (!strongPass.test(password)) {
    // Handle validation and error display for password
  } else if (password != confirmpassword) {
    // Handle validation and error display for password confirmation
  } else {
    // Send verification code request to Netlify function
    requestVerificationCode(name, email);
  }
  return false;
}

function FinalResults(e) {
  e.preventDefault(); // Prevent the default form submission
  var userCode = document.forms["verificationform"]["code"].value;
  verifyCode(userCode);
  return false;
}

function requestVerificationCode(name, email) {
  fetch('/.Netlify/functions/send-verification-mail', { // Change to match your folder structure
    method: 'POST',
    body: JSON.stringify({ name, email }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.message) {
        swal("Please enter the code sent to your email");
        var x = document.getElementsByClassName("aftersubmit");
        x[0].style.opacity = "1";
      } else {
        // Handle error case
      }
    })
    .catch((error) => {
      console.error('Error sending verification email:', error);
      // Handle error case
    });
}

function verifyCode(userCode) {
  fetch('/.Netlify/functions/verify-code', { // Change to match your folder structure
    method: 'POST',
    body: JSON.stringify({ userCode }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.valid) {
        swal({
          title: "Registration Successful!",
          text: "Happy to have you aboard",
          type: "success",
        });
        window.location.href = "../home.html";
      } else {
        swal({
          title: "Invalid code",
          type: "warning",
          buttons: true,
          dangerMode: true,
        });
      }
    })
    .catch((error) => {
      console.error('Error verifying code:', error);
      // Handle error case
    });
}

function FinalResults() {
  var usercode = document.forms["verificationform"]["code"].value;
  console.log("hii");
  if (code == usercode) {
    swal({
      title: "Registration Successful!",
      text: "Happy to have you aboard",
      type: "success",
    });

    window.location.href = "../home.html";
  } else {
    swal({
      title: "Invalid code",
      type: "warning",
      buttons: true,
      dangerMode: true,
    });
  }
  return false;
}

function change(e) {
  var name = document.forms["regform"]["name"].value;
  var error = document.getElementById("errormessage");
  var email = document.forms["regform"]["email"].value;
  var password = document.forms["regform"]["password"].value;
  var confirmpassword = document.forms["regform"]["retypepassword"].value;
  if (namerror == true) {
    if (name.length > 0) {
      namerror = false;
      error.style.display = "none";
    }
  } else if (emailerror == true) {
    if (email.length > 0) {
      emailerror = false;
      error.style.display = "none";
    }
  } else if (passworderror == true) {
    if (password.length > 0) {
      passworderror = true;
      error.style.display = "none";
    }
  } else if (confirmerror == true) {
    if (confirmpassword == password) {
      confirmerror = false;
      error.style.display = "none";
    }
  }
}
