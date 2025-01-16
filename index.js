document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let response = document.getElementById("form-response");

    if (email && message) {
      // Simulate form submission (replace with backend integration)
      console.log("Email:", email);
      console.log("Message:", message);

      response.style.display = "block";
      setTimeout(() => {
        response.style.display = "none";
        document.getElementById("contact-form").reset();
      }, 3000);
    } else {
      alert("Please fill out all fields.");
    }
  });
