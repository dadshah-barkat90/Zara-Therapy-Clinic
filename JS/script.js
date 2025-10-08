
  function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("open");
  }

function filterGallery(category) {
    let items = document.querySelectorAll(".gallery-item");
    items.forEach(item => {
      if (category === "all" || item.classList.contains(category)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });

    document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");
  }

  function openLightbox(img) {
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("lightbox-img").src = img.src;
  }

  function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
  }
  function showAlert(event) {
  event.preventDefault(); // prevent page reload

  Swal.fire({
    icon: "success",
    title: "✅ Thank you!",
    text: "We appreciate your feedback."
  });

  event.target.reset(); // clear form
}

// Fade-in animation for education boxes
document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".edu-box");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  }, { threshold: 0.2 });

  boxes.forEach(box => observer.observe(box));
});
function countdownTimer() {
      const countdown = document.getElementById("countdown");
      const endDate = new Date().getTime() + (24 * 60 * 60 * 1000); // 24 hours from now

      const timer = setInterval(() => {
        const now = new Date().getTime();
        const distance = endDate - now;

        if (distance < 0) {
          clearInterval(timer);
          countdown.innerHTML = "Offer Expired";
        } else {
          const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((distance % (1000 * 60)) / 1000);
          countdown.innerHTML = hours + "h " + minutes + "m " + seconds + "s ";
        }
      }, 1000);
    }
    countdownTimer();
    // JavaScript Validation 
    document.getElementById("contactForm").addEventListener("submit", function(event) {
      event.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const subject = document.getElementById("subject").value.trim();
      const message = document.getElementById("message").value.trim();
      const formMessage = document.getElementById("formMessage");

       const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;  
       const phoneRegex = /^[0-9]{11}$/;


      if (name.length < 3) {
        formMessage.textContent = "Name must be at least 3 characters.";
        formMessage.style.color = "red";
        return;
      }
      if (!emailRegex.test(email)) {
        formMessage.textContent = "Please enter a valid email address.";
        formMessage.style.color = "red";
        return;
      }
      if (!phoneRegex.test(phone)) {
        formMessage.textContent = "Please enter a valid phone number.";
        formMessage.style.color = "red";
        return;
      }
      if (subject.length < 3) {
        formMessage.textContent = "Subject must be at least 3 characters.";
        formMessage.style.color = "red";
        return;
      }
      if (message.length < 10) {
        formMessage.textContent = "Message must be at least 10 characters.";
        formMessage.style.color = "red";
        return;
      }

      formMessage.textContent = "Message sent successfully! ✅";
      formMessage.style.color = "green";
      document.getElementById("contactForm").reset();
    });

    // geolocation
    function showDirections() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error);
      } else {
        alert("Geolocation is not supported by your browser.");
      }
    }

    function success(position) {
      const userLat = position.coords.latitude;
      const userLng = position.coords.longitude;

      // Changeable clinic’s location
      const clinicLat = 24.8607;  
      const clinicLng = 67.0011;  // Example: Karachi coordinates

      // Open Google Maps with directions
      const directionsUrl = `https://www.google.com/maps/dir/${userLat},${userLng}/${clinicLat},${clinicLng}`;
      window.open(directionsUrl, "_blank");
    }

    function error() {
      alert("Unable to retrieve your location.");
    }