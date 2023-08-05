// SubMenu Activation Code
let subMenu = document.getElementById("subMenu");
function toggleMenu(){
  subMenu.classList.toggle("open-menu")
}
// swiper initialization code
var swiper = new Swiper(".popular-content", {
  slidesPerView:1,
    spaceBetween: 10,
    grabCursor:true,
    autopaly: {
      delay:755500,
      disableOnInteraction:false,
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

//Show Video

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

  // Add scroll event listener to show/hide the button
  window.addEventListener("scroll", toggleScrollButton);