//Actual Login code
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <!-- Google Auth Cleint ID -->
  <meta name="google-signin-client_id"
    content="60176433158-p6ggkfslnahh8tkccv7330n4bitk152o.apps.googleusercontent.com">
  <!-- Favicon -->
  <link rel="shortcut icon" href="assets/img/fav-icon.png" type="image/x-icon">
  <title>Sign In To FilmFlix</title>
  <!-- Fontawesome -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
  <link rel="stylesheet" href="assets/css/login.css">
</head>

<body>
  <div class="logo">
    <a href="index.html">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40" width="120" height="40" fill="#F60000"
        class="img-logo">
        <text x="0" y="30" font-family="Arial, sans-serif" font-size="30" font-weight="bold">FilmFlix</text>
      </svg>
    </a>
  </div>
  <div class="login-div">
    <form class="login"   autocomplete="off" data-netlify="true">


      <h1 class="sign">Sign In</h1>
      <div id="errormessage"></div>
      <span class="seperator"></span>

      <div class="input-text">


        <input type="email" name="email" placeholder="Email"  />
      </div>
      <div class="input-text">

        <input id="pass_signup" type="password" name="password" placeholder="Password"/><i
          class="fa fa-fw fa-eye field-icon toggle-password" id="togglePassword"></i>

      </div>

      <span class="seperator"></span>
      <input class="signin-button" type="submit" value="Sign In" />
      <div class="remember-flex">
        <div id="g_id_onload"
        data-client_id="60176433158-p6ggkfslnahh8tkccv7330n4bitk152o.apps.googleusercontent.com"
        data-context="signin"
        data-ux_mode="popup"
        data-login_uri="https://film-flix.000webhostapp.com/home.html"
        data-auto_prompt="false">
   </div>
   
   <div class="g_id_signin"
        data-type="standard"
        data-shape="rectangular"
        data-theme="outline"
        data-text="signin_with"
        data-size="large"
        data-logo_alignment="left">
   </div>
      </div>
      <div class="help">
        <a class="color_text" href="https://www.google.com/gmail/">Need help?</a>
      </div>
      <div class="login-face">
        <br>
        <div class="new-members">
          New to FilmFlix? <a href="signup.html" class="signup-link">Sign up now</a>.
        </div>
        <br>
        <div class="protection color_link help">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          <div class="learnmore"> <a href="#">Learn more.</a></div>
        </div>
      </div>
    </form>
  </div>

</html>

  <div class="bottom">
    <div class="bottom-width">
      <div class="questions">
        <span>Questions? <br>Ask on : <a href="mailto: filmflix@gmail.com"
            class="tel-link">flimflix@gmail.com</a></span>
        <select class="fa select-language">
          <option> &#xf0ac; &nbsp;&nbsp;&nbsp;English</option>
          <option> &#xf0ac; &nbsp;&nbsp;&nbsp;Hindi</option>
        </select>
      </div>

      <div>
        <ul class="bottom-flex">
          <li class="list-bottom">
            <a href="faq.html" class="link-bottom">
              FAQ
            </a>
          </li>
          <li class="list-bottom">
            <a href="#" class="link-bottom">
              Help Center
            </a>
          </li>
          <li class="list-bottom">
            <a href="#" class="link-bottom">
              Terms of Use
            </a>
          </li>
          <li class="list-bottom">
            <a href="#" class="link-bottom">
              Privacy
            </a>
          </li>

        </ul>
      </div>
    </div>
  </div>
  <button id="scrollToTopButton" title="Go to top" class="ml-5">
    <i class="fa fa-angle-double-up" aria-hidden="true" style="font-weight: bolder;"></i>
  </button>
  <script>
    // Initialize the Google Sign-In client
    window.onload = function () {
      const clientId = 'Y60176433158-p6ggkfslnahh8tkccv7330n4bitk152o.apps.googleusercontent.com'; // Replace with your actual client ID
      gapi.load('auth2', function() {
        gapi.auth2.init({
          client_id: clientId,
        });
      });
    };
  </script>
  
  <script src="https://accounts.google.com/gsi/client" async></script>
  <script src="https://apis.google.com/js/platform.js" async defer></script>
  <script src="assets/js/login.js" async defer></script>
  <script src="https://apis.google.com/js/platform.js" async defer></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/2.1.2/sweetalert.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://code.jquery.com/jquery-3.7.0.min.js" integrity="sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g=" crossorigin="anonymous"></script>


</body>

</html>