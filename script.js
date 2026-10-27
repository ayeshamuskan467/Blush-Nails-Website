
document.addEventListener("DOMContentLoaded", function () {

  // Mobile navigation menu
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
      const isOpen = navLinks.classList.toggle("open");

      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.textContent = isOpen ? "Close ✕" : "Menu ☰";
    });
  }

  // Automatically update copyright year
  document.querySelectorAll(".year").forEach(function (element) {
    element.textContent = new Date().getFullYear();
  });

  // WhatsApp booking form
  const bookingForm = document.getElementById("bookingForm");

  if (bookingForm) {
    bookingForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = document.getElementById("name").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const service = document.getElementById("service").value;
      const date =
        document.getElementById("date").value || "Flexible";
      const message =
        document.getElementById("message").value.trim();

      // Replace this with the real WhatsApp number.
      // Use country code without +, spaces or dashes.
      const whatsappNumber = "923001234567";

      const bookingMessage = [
        "Assalam-o-Alaikum! I'd like to request a nail appointment.",
        "",
        "Name: " + name,
        "Phone: " + phone,
        "Service: " + service,
        "Preferred date: " + date,
        "Design details: " + (message || "Not provided")
      ].join("\n");

      const whatsappURL =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(bookingMessage);

      document.getElementById("formStatus").textContent =
        "Opening WhatsApp. Please review and send your booking message.";

      window.open(whatsappURL, "_blank", "noopener");
    });
  }

});
