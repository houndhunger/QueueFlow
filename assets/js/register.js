document.addEventListener("DOMContentLoaded", function() {
    var overlay = document.getElementById("overlay");
    var registerForm = document.getElementById("registerForm");
    var closeButton = document.getElementById("closeButton");
  
    // Show overlay when the page loads
    overlay.style.display = "flex";
  
    // Close overlay when the Close button is clicked
    closeButton.addEventListener("click", function() {
      overlay.style.display = "none";
    });
  
    // Handle form submission
    registerForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent default form submission
  
      // Get user input
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
  
      // Save data to Local Storage
      localStorage.setItem("userName", name);
      localStorage.setItem("userEmail", email);
  
      // Close overlay
      overlay.style.display = "none";
  
      // Optional: Redirect to another page or perform additional actions
    });
  });
  