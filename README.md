### 🔧 Asset & Feed Management

**Asset Location:**
All images, videos, and fonts should be placed within the `/assets/` directory (e.g., `/assets/img/`, `/assets/video/`). Paths within the HTML should be relative to the repository root for correct loading via GitHub Pages.

**Updating the Social Media (X) Feed:**
The current site uses a placeholder for the X (Twitter) feed. To activate it:
1.  Use a service (like `rss.app` or similar) to generate a **JSON RSS feed** from the target X account.
2.  In the `<script>` block of `index.html`, locate the `loadXPosts()` function.
3.  Replace the placeholder `fetch` URL with the actual API endpoint for your generated JSON feed.

```javascript
// Example of where to update the URL in your index.html script:
async function loadXPosts() {
  const feed = document.getElementById('x-feed');
  if (!feed) return;
  // REPLACE THE URL BELOW with your generated RSS/JSON feed URL
  feed.innerHTML = '<div class="loading">Fetching live feed...</div>'; 
  // const res = await fetch('YOUR_EXTERNAL_RSS_SERVICE_URL');
  // ... rest of the fetch logic
}
