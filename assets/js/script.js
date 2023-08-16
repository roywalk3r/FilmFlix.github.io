// SubMenu Activation Code
let subMenu = document.getElementById("subMenu");
function toggleMenu(){
  subMenu.classList.toggle("open-menu")
}
// swiper initialization code
var swiper = new Swiper(".popular-content", {
  slidesPerView:1,
  loop:true,
    spaceBetween: 10,
    grabCursor:true,
    autoplay: {
      delay:2500,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".swiper-pagination"
    },
    navigation: {
      nextEl:".swiper-button-next",
      prevEl:".swiper-button-prev",
    },
    breakpoints:{
      280:{
          slidesPerView: 1,
          spaceBetween:10,
      },
      320:{
        slidesPerView: 2,
        spaceBetween:10,
    },
    510:{
      slidesPerView: 2,
      spaceBetween:10,
  },
  758:{
    slidesPerView: 3,
    spaceBetween:15,
},
900:{
  slidesPerView: 4,
  spaceBetween:20,
},
    },
});
// Show Video
let playButton = document.querySelector(".play-movie");
let video = document.querySelector(".video-container");
let myvideo = document.querySelector("#myvideo");
let closebtn = document.querySelector(".close-video");
playButton.onclick = () => {
  video.classList.add("show-video")
//Auto play When Clicked on Button
myvideo.play();
};
closebtn.onclick = () => {
  video.classList.remove("show-video")
//Pause  On close Video
myvideo.pause();
};
 
// GO to top button
  // Get the button element
  const scrollToTopButton = document.getElementById("scrollToTopButton");
  // Show/hide the button based on the scroll position
  function toggleScrollButton() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopButton.style.display = "block";
    } else {
      scrollToTopButton.style.display = "none";
    }
  }
  // Scroll to top when the button is clicked
  scrollToTopButton.addEventListener("click", function () {
    // Scroll to the top with smooth animation
    const scrollOptions = {
      top: 0,
      behavior: "smooth"
    };
    window.scrollTo(scrollOptions);
    requestAnimationFrame(scrollToTopButton);
    
  });
  // DISQUS COMMENT SECTION  SCRIPT
  // Add scroll event listener to show/hide the button
  window.addEventListener("scroll", toggleScrollButton);
 
// Function to get the current page URL without the file extension
function getCurrentPageURL() {
  var url = window.location.href;
  return url.replace(/\.html$/, ''); // Remove .html extension from the URL for sync incase of URL rewriting 
}
  // Function to generate a unique identifier for the page
  function generatePageIdentifier() {
    // You can use any method to generate a unique identifier here.
    // Geting The Time Stamp OF the Current Page to use as an identifier
    return 'page-' + Date.now();
  }
  var disqus_config = function () {
    this.page.url = getCurrentPageURL(); // Get the current page URL of each page  dynamically
    this.page.identifier = generatePageIdentifier(); // Generate a unique identifier dynamically for each page
  };
  // Include the Disqus script dynamically
  (function() {
    var d = document, s = d.createElement('script');
    s.src = 'https://fan2one.disqus.com/embed.js'; // Replace fan2one with your Disqus shortname
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
  })();
  //  DISQUS COMMENT SECTION SCRIPT END
  // document.addEventListener('DOMContentLoaded', function () {
  //   const profilePicture = document.getElementById('profilePicture');
  //   const userName = document.getElementById('userName');
  //   const userEmail = document.getElementById('userEmail');
  //   // Listen for user authentication events
  //   netlifyIdentity.on('init', user => {
  //     if (!user) {
  //       // User is not authenticated
  //       profilePicture.src = '';
  //       userName.textContent = 'Guest';
  //       userEmail.textContent = '';
  //     } else {
  //       // User is authenticated
  //       const { user_metadata, email, provider } = user;
  //       // Set profile picture, name, and email based on user type
  //       if (provider === 'google') {
  //         profilePicture.src = user_metadata.avatar_url;
  //         userName.textContent = user_metadata.full_name;
  //       } else {
  //         profilePicture.src = ''; // No profile picture for email/password signup
  //         userName.textContent = user_metadata.full_name;
  //       }
  //       userEmail.textContent = email;
  //     }
  //   });
  //   // Handle logout button click
  //   const logoutLink = document.getElementById('logoutLink');
  //   logoutLink.addEventListener('click', function () {
  //     netlifyIdentity.logout();
  //   });
  //   // Listen for successful signup and login events
  //   netlifyIdentity.on('login', user => {
  //     // Redirect to the homepage
  //     window.location.href = '/home.html'; // Replace with your actual homepage URL
  //   });
  //   netlifyIdentity.on('signup', user => {
  //     // Redirect to the homepage
  //     window.location.href = '/home.html'; // Replace with your actual homepage URL
  //   });
  //   // Initialize the Netlify Identity widget
  //   netlifyIdentity.init();
  // });
  // document.addEventListener('DOMContentLoaded', function () {
  //   const profilePicture = document.getElementById('profilePicture');
  //   const userName = document.getElementById('userName');
  //   const userEmail = document.getElementById('userEmail');
  //   const logoutLink = document.getElementById('logoutLink');
  //   // Listen for user authentication events
  //   netlifyIdentity.on('init', user => {
  //     if (!user) {
  //       // User is not authenticated
  //       profilePicture.src = '';
  //       userName.textContent = 'Guest';
  //       userEmail.textContent = '';
  //       logoutLink.style.display = 'none';
  //     } else {
  //       // User is authenticated
  //       const { user_metadata, email, provider } = user;
  //       // Set profile picture, name, and email based on user type
  //       if (provider === 'google') {
  //         profilePicture.src = user_metadata.avatar_url;
  //         userName.textContent = user_metadata.full_name;
  //       } else {
  //         profilePicture.src = ''; // No profile picture for email/password signup
  //         userName.textContent = user_metadata.full_name;
  //       }
  //       userEmail.textContent = email;
  //       logoutLink.style.display = 'block';
  //     }
  //   });
  //   // Handle logout link click
  //   logoutLink.addEventListener('click', function (e) {
  //     e.preventDefault();
  //     netlifyIdentity.logout();
  //     window.location.href = 'index.html'; // Redirect to index.html after logout
  //   });
  //   // Listen for successful signup and login events
  //   netlifyIdentity.on('login', user => {
  //     // Redirect to the homepage
  //     window.location.href = '/home.html'; // Replace with your actual homepage URL
  //   });
  //   netlifyIdentity.on('signup', user => {
  //     // Redirect to the homepage
  //     window.location.href = '/home.html'; // Replace with your actual homepage URL
  //   });
  //   // Initialize the Netlify Identity widget
  //   netlifyIdentity.init();
  // });
  document.addEventListener('DOMContentLoaded', function () {
    const profilePicture = document.getElementById('profilePicture');
    const userName = document.getElementById('userName');
    const userEmail = document.getElementById('userEmail');
    const logoutLink = document.getElementById('logoutLink');

    // Listen for user authentication events
    netlifyIdentity.on('init', user => {
      if (!user) {
        // User is not authenticated
        profilePicture.src = '';
        userName.textContent = 'Guest';
        userEmail.textContent = '';
        logoutLink.style.display = 'none';
      } else {
        // User is authenticated
        const { user_metadata, email, provider } = user;
  
        // Set profile picture, name, and email based on user type
        if (provider === 'google') {
          if (user_metadata.avatar_url) {
            profilePicture.src = user_metadata.avatar_url;
          } else {

            profilePicture.src = `https://ui-avatars.com/api/?name=${user_metadata.full_name}&background=random`;
         
          }
          userName.textContent = user_metadata.full_name;
        } else {
          profilePicture.src =`https://ui-avatars.com/api/?name=${user_metadata.full_name}&background=random`; // Default avatar for non-Google signup
          userName.textContent = user_metadata.full_name;
        }
  
        userEmail.textContent = email;
        logoutLink.style.display = 'block';
      }
    });
  
      // Handle logout link click
      logoutLink.addEventListener('click', function (e) {
        e.preventDefault();
        netlifyIdentity.logout();
        window.location.href = 'index.html'; // Redirect to index.html after logout
      });
    // Listen for successful signup and login events
netlifyIdentity.on('login', user => {
  // Redirect to the homepage
  window.location.replace('home.html'); // Replace with your actual homepage URL
});

netlifyIdentity.on('signup', user => {
  // Redirect to the homepage
  window.location.replace('home.html'); // Replace with your actual homepage URL
});

      // Initialize the Netlify Identity widget
      netlifyIdentity.init();
    });
    