// Locomotive Scroll
const scroll = new LocomotiveScroll({
  el: document.querySelector('body'),
  smooth: true
});

function scrollToSection(id) {
  scroll.scrollTo(`#${id}`);
}

// Load Projects from GitHub
async function loadProjects() {
  const repos = ['adam', 'aurora-project', 'NeuralSage-AI-Companion-with-a-Moral-Core', 'fair-discovery'];
  const grid = document.getElementById('project-grid');

  for (const repo of repos) {
    try {
      const res = await fetch(`https://api.github.com/repos/fair-collective/${repo}`);
      const data = await res.json();
      const card = document.createElement('div');
      card.className = 'bg-slate-900 p-6 rounded-xl border border-amber-500/30 hover:border-amber-500 transition transform hover:scale-105';
      card.innerHTML = `
        <img src="${data.owner.avatar_url}" class="w-12 h-12 rounded-full mb-4">
        <h3 class="text-xl font-bold text-amber-400">${data.name.replace(/-/g, ' ')}</h3>
        <p class="text-sm opacity-80 my-2">${data.description || 'No description'}</p>
        <div class="flex gap-4 text-sm mt-4">
          <span>⭐ ${data.stargazers_count}</span>
          <span>🍴 ${data.forks_count}</span>
        </div>
        <a href="${data.html_url}" class="inline-block mt-4 text-amber-500 hover:underline">View on GitHub →</a>
      `;
      grid.appendChild(card);
    } catch (e) {}
  }
}

loadProjects();
