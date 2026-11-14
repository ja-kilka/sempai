(function () {
  function initThemeAndUI() {
    const body = document.body;
    const themeToggleBtn = document.getElementById('theme-toggle');

    try {
      const savedTheme = localStorage.getItem('aquamen-theme');
      if (savedTheme === 'light') {
        body.classList.add('light-theme');
      }
    } catch (e) {}

    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', function () {
        const isLight = body.classList.toggle('light-theme');
        try {
          localStorage.setItem('aquamen-theme', isLight ? 'light' : 'dark');
        } catch (e) {}
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initThemeAndUI);
  } else {
    initThemeAndUI();
  }
})();