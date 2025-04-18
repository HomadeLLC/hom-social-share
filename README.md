Awesome! 🎉 Since your script is now clean, working, and hosted properly, here’s a simple but professional README.md you can drop into your GitHub repo:

markdown
Copy
Edit
# Copy URL with Toast

A lightweight JavaScript utility that copies the current page URL to the clipboard and shows a temporary notification ("toast") to the user.

---

## 🚀 Features

- Copies the current `window.location.href` to clipboard
- Displays a clean, fade-in/out toast message at the bottom of the screen
- Requires **no external dependencies**
- Ideal for share buttons or social link features

---

## 🛠️ How to Use


### 1. Add the Script

Include this in your website (e.g., Webflow's Footer Code section)
Update the v=1 to v=2, v=3, etc. to bust the cache when you update the file.

In your HTML (or Webflow Designer):

<a href="#" id="data-copy-button">Copy Link</a>
The element must have the ID data-copy-button

Optionally add a class for styling (e.g., blog-post2-content_social-link)

## Toast Styling

The notification is styled inline inside the notifyUser() function.
You can customize the following properties:

backgroundColor
padding
font, borderRadius, boxShadow, etc.

## Notes
The script listens for DOMContentLoaded before initializing

It gracefully handles missing elements or copy failures

Can be extended to support multiple buttons using data- attributes
