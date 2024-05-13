document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".swiper-container", {
    direction: "horizontal",
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
  });

  // Handle click on swiper slide images
  document.querySelectorAll(".swiper-slide img").forEach(function (img) {
    img.addEventListener("click", function () {
      var details = this.parentNode.getAttribute("data-details");
      openBookingWindow(details);
    });
  });

  // Function to open a new window with booking details
  function openBookingWindow(details) {
    var url = "booking.html"; // URL of the booking page
    var windowFeatures = "width=600,height=400,scrollbars=yes";

    var bookingWindow = window.open(url, "_blank", windowFeatures);

    // Pass details to the new window
    bookingWindow.addEventListener("load", function () {
      // Communicate with the new window after it has loaded
      bookingWindow.postMessage({ details: details }, url);
    });
  }
});
