<script>
// JavaScript to initialize the copy buttons
function initializeCopyButtons() {
  const buttons = document.querySelectorAll("[data-copy-button]"); // Select buttons by attribute
  buttons.forEach((button) => {
    button.addEventListener("click", async function (event) {
      event.preventDefault(); // Prevent default behavior

      try {
        const currentUrl = window.location.href; // Get current URL
        await navigator.clipboard.writeText(currentUrl); // Copy URL to clipboard

        // Show success notification
        notifyUser("Copied to clipboard");
      } catch (err) {
        console.error("Failed to copy:", err);
        notifyUser("Failed to copy. Try again!");
      }
    });
  });
}

// Function to show the notification at the bottom of the viewport
function notifyUser(message) {
  let notification = document.getElementById("notification");

  // Create notification element if it doesn't exist
  if (!notification) {
    notification = document.createElement("div");
    notification.id = "notification";
    notification.style.position = "fixed";
    notification.style.bottom = "20px";
    notification.style.left = "50%";
    notification.style.transform = "translateX(-50%)";
    notification.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    notification.style.color = "white";
    notification.style.padding = "10px 20px";
    notification.style.borderRadius = "5px";
    notification.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.3)";
    notification.style.zIndex = "1000";
    notification.style.opacity = "0";
    notification.style.transition = "opacity 0.3s ease";
    notification.style.pointerEvents = "none"; // Prevent interaction
    document.body.appendChild(notification);
  }

  // Set the notification message
  notification.textContent = message;

  // Show the notification with fade-in effect
  requestAnimationFrame(() => (notification.style.opacity = "1"));

  // Fade out and remove notification after 3 seconds
  setTimeout(() => {
    notification.style.opacity = "0";
  }, 3000);
}

// Initialize all copy buttons on page load
initializeCopyButtons();
  </script>
