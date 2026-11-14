(function () {
  function initThemeAndUI() {
    const body = document.body;
    const themeToggleBtn = document.getElementById('theme-toggle');
    const planItems = document.querySelectorAll('.plan-item');
    const subscribeMainBtn = document.getElementById('subscribe-main-btn');
    const toast = document.getElementById('toast');

    let selectedPlanName = 'Премиум';
    let selectedPlanPrice = '349 ₴ / мес';
    let toastTimeout;

    try {
      const savedTheme = localStorage.getItem('aquamen-theme');
      if (savedTheme === 'light') {
        body.classList.add('light-theme');
      }
    } catch (e) {
    }

    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', function () {
        const isLight = body.classList.toggle('light-theme');
        try {
          localStorage.setItem('aquamen-theme', isLight ? 'light' : 'dark');
        } catch (e) {}
      });
    }

    function showToast(message) {
      if (!toast) return;
      toast.textContent = message;
      toast.classList.add('is-visible');

      clearTimeout(toastTimeout);
      toastTimeout = setTimeout(function () {
        toast.classList.remove('is-visible');
      }, 3000);
    }

    if (planItems && planItems.length > 0) {
      planItems.forEach(function (item) {
        item.addEventListener('click', function () {
          planItems.forEach(function (el) {
            el.classList.remove('is-selected');
          });
          item.classList.add('is-selected');
          selectedPlanName = item.dataset.plan || '';
          selectedPlanPrice = item.dataset.price || '';
          showToast('Выбран тариф «' + selectedPlanName + '» (' + selectedPlanPrice + ')');
        });
      });
    }

    if (subscribeMainBtn) {
      subscribeMainBtn.addEventListener('click', function () {
        showToast('Оформление подписки: тариф «' + selectedPlanName + '» — ' + selectedPlanPrice);
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initThemeAndUI);
  } else {
    initThemeAndUI();
  }
})();