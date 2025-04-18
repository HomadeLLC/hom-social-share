function initializeCopyButton() {
  const button = document.getElementById("data-copy-button");
  if (!button) {
    console.warn("❗ Copy button not found.");
    return;
  }

  console.log("✅ Copy button found");

  button.addEventListener("click", async function (event) {
    event.preventDefault();

    try {
      const currentUrl = window.location.href;
      await navigator.clipboard.writeText(currentUrl);
      notifyUser("Copied to clipboard");
    } catch (err) {
      console.error("❌ Failed to copy:", err);
      notifyUser("Failed to copy. Try again!");
    }
  });
}

function notifyUser(message) {
  let notification = document.getElementById("notification");
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
    notification.style.pointerEvents = "none";
    document.body.appendChild(notification);
  }

  notification.textContent = message;
  requestAnimationFrame(() => (notification.style.opacity = "1"));
  setTimeout(() => {
    notification.style.opacity = "0";
  }, 3000);
}

document.addEventListener("DOMContentLoaded", initializeCopyButton);
