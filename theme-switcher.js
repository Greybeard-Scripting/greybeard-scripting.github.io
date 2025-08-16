// Theme switcher for minima/cayman, light/dark
const themes = {
  'Minima Light': 'assets/theme-light.css',
  'Minima Dark': 'assets/theme-dark.css',
  'Cayman Light': 'assets/theme-cayman.css',
  'Cayman Dark': 'assets/theme-cayman-dark.css'
};

function setTheme(themeName) {
  let link = document.getElementById('theme-style');
  if (!link) {
    link = document.createElement('link');
    link.rel = 'stylesheet';
    link.id = 'theme-style';
    document.head.appendChild(link);
  }
  link.href = themes[themeName];
  localStorage.setItem('theme', themeName);
}

function initThemeSwitcher() {
  const container = document.createElement('div');
  container.style = 'position:fixed;top:1em;right:1em;z-index:9999;background:#fff;padding:0.5em 1em;border-radius:6px;box-shadow:0 2px 8px #0002;font-size:1em;';
  container.innerHTML = '<label for="theme-select">Theme:</label> <select id="theme-select"></select>';
  document.body.appendChild(container);
  const select = document.getElementById('theme-select');
  Object.keys(themes).forEach(t => {
    const opt = document.createElement('option');
    opt.value = t;
    opt.text = t;
    select.appendChild(opt);
  });
  select.onchange = () => setTheme(select.value);
  // Set initial theme
  const saved = localStorage.getItem('theme') || 'Minima Light';
  select.value = saved;
  setTheme(saved);
}

document.addEventListener('DOMContentLoaded', initThemeSwitcher);
