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
  var name = document.forms["regform"]["name"].value;
  var email = document.forms["regform"]["email"].value;
  var password = document.forms["regform"]["password"].value;
  var confirmpassword = document.forms["regform"]["retypepassword"].value;
  var error = document.getElementById("errormessage");

  if (name.length == 0) {
    namerror = true;
    error.style.display = "block";
    error.innerHTML = `<p><svg class="svg-icon" viewBox="0 0 20 20">
        <path d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z"></path>
      </svg><span class="error">Name should not be empty</span></p>`;
  } else if (email.length == 0) {
    emailerror = true;
    error.style.display = "block";
    error.innerHTML = `<p><svg class="svg-icon" viewBox="0 0 20 20">
        <path d="M17.388,4.751H2.613c-0.213,0-0.389,0.175-0.389,0.389v9.72c0,0.216,0.175,0.389,0.389,0.389h14.775c0.214,0,0.389-0.173,0.389-0.389v-9.72C17.776,4.926,17.602,4.751,17.388,4.751 M16.448,5.53L10,11.984L3.552,5.53H16.448zM3.002,6.081l3.921,3.925l-3.921,3.925V6.081z M3.56,14.471l3.914-3.916l2.253,2.253c0.153,0.153,0.395,0.153,0.548,0l2.253-2.253l3.913,3.916H3.56z M16.999,13.931l-3.921-3.925l3.921-3.925V13.931z"></path>
      </svg><span class="error">Email should not be empty</span></p>`;
  }else if(!mailformat.test(email)){
    error.style.display = "block";
    error.innerHTML = `<p><svg class="svg-icon" viewBox="0 0 20 20">
        <path d="M17.388,4.751H2.613c-0.213,0-0.389,0.175-0.389,0.389v9.72c0,0.216,0.175,0.389,0.389,0.389h14.775c0.214,0,0.389-0.173,0.389-0.389v-9.72C17.776,4.926,17.602,4.751,17.388,4.751 M16.448,5.53L10,11.984L3.552,5.53H16.448zM3.002,6.081l3.921,3.925l-3.921,3.925V6.081z M3.56,14.471l3.914-3.916l2.253,2.253c0.153,0.153,0.395,0.153,0.548,0l2.253-2.253l3.913,3.916H3.56z M16.999,13.931l-3.921-3.925l3.921-3.925V13.931z"></path>
      </svg><span class="error">Email address is invalid</span></p>`;
  }
   else if (!strongPass.test(password)) {
    passworderror = true;
    error.style.display = "block";
    error.innerHTML = `<p><svg class="svg-icon" viewBox="0 0 20 20">
        <path d="M17.308,7.564h-1.993c0-2.929-2.385-5.314-5.314-5.314S4.686,4.635,4.686,7.564H2.693c-0.244,0-0.443,0.2-0.443,0.443v9.3c0,0.243,0.199,0.442,0.443,0.442h14.615c0.243,0,0.442-0.199,0.442-0.442v-9.3C17.75,7.764,17.551,7.564,17.308,7.564 M10,3.136c2.442,0,4.43,1.986,4.43,4.428H5.571C5.571,5.122,7.558,3.136,10,3.136 M16.865,16.864H3.136V8.45h13.729V16.864z M10,10.664c-0.854,0-1.55,0.696-1.55,1.551c0,0.699,0.467,1.292,1.107,1.485v0.95c0,0.243,0.2,0.442,0.443,0.442s0.443-0.199,0.443-0.442V13.7c0.64-0.193,1.106-0.786,1.106-1.485C11.55,11.36,10.854,10.664,10,10.664 M10,12.878c-0.366,0-0.664-0.298-0.664-0.663c0-0.366,0.298-0.665,0.664-0.665c0.365,0,0.664,0.299,0.664,0.665C10.664,12.58,10.365,12.878,10,12.878"></path>
      </svg><span class="error">Password should be atleast 6 characters long,contain a special character,a lower case and upper case alphabet and a number.</span></p>`;
  } else if (password != confirmpassword) {
    confirmerror = true;
    error.style.display = "block";
    error.innerHTML = `<p><svg class="svg-icon" viewBox="0 0 20 20">
        <path d="M17.308,7.564h-1.993c0-2.929-2.385-5.314-5.314-5.314S4.686,4.635,4.686,7.564H2.693c-0.244,0-0.443,0.2-0.443,0.443v9.3c0,0.243,0.199,0.442,0.443,0.442h14.615c0.243,0,0.442-0.199,0.442-0.442v-9.3C17.75,7.764,17.551,7.564,17.308,7.564 M10,3.136c2.442,0,4.43,1.986,4.43,4.428H5.571C5.571,5.122,7.558,3.136,10,3.136 M16.865,16.864H3.136V8.45h13.729V16.864z M10,10.664c-0.854,0-1.55,0.696-1.55,1.551c0,0.699,0.467,1.292,1.107,1.485v0.95c0,0.243,0.2,0.442,0.443,0.442s0.443-0.199,0.443-0.442V13.7c0.64-0.193,1.106-0.786,1.106-1.485C11.55,11.36,10.854,10.664,10,10.664 M10,12.878c-0.366,0-0.664-0.298-0.664-0.663c0-0.366,0.298-0.665,0.664-0.665c0.365,0,0.664,0.299,0.664,0.665C10.664,12.58,10.365,12.878,10,12.878"></path>
      </svg><span class="error">Passwords doesn't match</span></p>`;
  } else {
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "testpjmail@gmail.com",
      Password: "718EF135ADCE343669701C8B673A26D7B42C",
      To: email,
      From: "testpjmail@gmail.com",
      Subject: "Account Verification - Complete Your Registration",
      Body: `Dear ${name},<br>
<br>
Thank you for signing up on FilmFlix.! We are thrilled to have you join our community.

To complete your registration and access all the exciting features, we require a quick verification step. Please use the following verification code to confirm your email address: <br>

Verification Code: ${code}

If you did not sign up for our platform, please ignore this email.

We take your privacy and security seriously. Rest assured that your personal information is protected and will only be used for account-related purposes.

If you encounter any issues or have any questions, feel free to reach out to our support team at [support@filmflix.com].
Welcome aboard, and thank you for choosing us! We look forward to providing you with an exceptional experience.

From Godak.co Team`,
    }).then((message) => console.log(message));
    swal("Please enter the code sent to your email");
    var x = document.getElementsByClassName("aftersubmit");
    x[0].style.opacity = "1";
    console.log(x[0]);
  }
  return false;
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
